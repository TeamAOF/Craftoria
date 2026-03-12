import { $, Glob } from "bun";
import os from "node:os";
import path from "node:path";
import { parseArgs } from "node:util";
import { capitalize, getLatestBumpCommitHash, getModInfo, writeTextToFile } from "./utils";

// Load pack metadata with fallback
const packMetadata = (() => {
  try {
    return require("../../../pack.toml");
  } catch {
    console.warn("pack.toml not found, using minecraftinstance.json as fallback");
    const instanceData = require("../../../minecraftinstance.json");
    return {
      version: "unknown",
      versions: {
        minecraft: instanceData.minecraftVersion || instanceData.gameVersion,
        neoforge: instanceData.baseModLoader?.forgeVersion || "unknown"
      }
    };
  }
})();

const CONFIG = {
  gitRepoPath: path.resolve(import.meta.dir, "..", "..", ".."),
  packVersion: null,
  oldPackVersion: null,
  fileId: "123456", // Do not change this
  referenceCommit: "HEAD",
  cutoffCommitHash: null,
  saveToFile: true,
  namesLookup: {
    WhitePhant0m: "Phantom",
    "Kazuhiko-Gushiken": "Inno",
    ImAK: "AK",
    "Dietrich Friday": "SubordinalBlue",
  },
  conventionalCommitRegexes: {
    feat: /^feat(?:\((?!.*(?:dev|dx))[^)]*\))?:/,
    fix: /^fix(?:\((?!.*(?:dev|dx))[^)]*\))?:/,
  },
};

// Parse CLI arguments
const CLI_ARGS = (() => {
  const { values } = parseArgs({
    options: {
      test: { type: "boolean", default: false },
      fromCommit: { type: "string" },
      toCommit: { type: "string" },
      fromVersion: { type: "string" },
      toVersion: { type: "string" },
      save: { type: "boolean", default: false },
      help: { type: "boolean", default: false }
    },
  });
  
  if (values.help) {
    console.log(`
Changelog Generation Tool

Usage: bun generate-changelog.js [options]

Options:
  --test, -t                Enable test mode (disables file saving by default)
  --from-commit <hash>      Compare from this commit hash
  --to-commit <hash>        Compare to this commit hash (default: HEAD)
  --from-version <version>  Override the old pack version for display
  --to-version <version>    Override the new pack version for display
  --save                    Save files even in test mode
  --help, -h                Show this help message

Examples:
  # Test changelog between two commits
  bun generate-changelog.js --test --from-commit abc123 --to-commit def456

  # Test with custom version names
  bun generate-changelog.js --test --from-commit abc123 --from-version "1.21.0" --to-version "1.22.0"

  # Test and save files
  bun generate-changelog.js --test --from-commit abc123 --save
`);
    process.exit(0);
  }

  if (values.test) CONFIG.saveToFile = false;
  if (values.save) CONFIG.saveToFile = true;

  return values;
})();

// Validate CLI arguments
if (CLI_ARGS.test && !CLI_ARGS.fromCommit) {
  console.error("Error: --test mode requires --from-commit to be specified");
  console.log("Use --help for usage information");
  process.exit(1);
}

async function initializeConfig() {
  // Set commit hashes
  CONFIG.cutoffCommitHash = CLI_ARGS.fromCommit || 
    await getLatestBumpCommitHash(CONFIG.referenceCommit);
  
  if (CLI_ARGS.toCommit) CONFIG.referenceCommit = CLI_ARGS.toCommit;

  // Set pack versions
  CONFIG.packVersion = CLI_ARGS.toVersion || packMetadata.version;

  const [oldPackMetadata] = await getCommitMetadataFiles(CONFIG.cutoffCommitHash);
  CONFIG.oldPackVersion = CLI_ARGS.fromVersion || 
    oldPackMetadata?.version || 
    "unknown";

  if (CONFIG.oldPackVersion === "unknown") {
    console.warn("Old commit doesn't have pack metadata, version comparison skipped");
  }

  // Version bump validation (skip in test mode or with custom versions)
  const shouldValidate = !CLI_ARGS.test && !CLI_ARGS.fromVersion && !CLI_ARGS.toVersion;
  if (shouldValidate && CONFIG.oldPackVersion !== "unknown" && 
      CONFIG.packVersion !== "unknown" && CONFIG.oldPackVersion === CONFIG.packVersion) {
    throw new Error("You did not bump the pack version!");
  }

  if (CLI_ARGS.test) {
    console.log(`Test mode: Comparing ${CONFIG.oldPackVersion} (${CONFIG.cutoffCommitHash}) -> ${CONFIG.packVersion} (${CONFIG.referenceCommit})`);
  }
}

async function getCommitMetadataFiles(commitHash) {
  const folderPath = path.join(os.tmpdir(), `craftoria-${commitHash}-${Date.now()}`);

  // Check which metadata file exists
  const hasPackToml = await checkFileExists(commitHash, "pack.toml");
  const hasInstanceJson = !hasPackToml && await checkFileExists(commitHash, "minecraftinstance.json");

  if (!hasPackToml && !hasInstanceJson) {
    console.warn(`Neither pack.toml nor minecraftinstance.json found in commit ${commitHash}`);
    return [null, {}];
  }

  // Archive and extract
  const archiveFiles = hasPackToml 
    ? "pack.toml mods/ resourcepacks/ shaderpacks/"
    : "minecraftinstance.json";
  
  await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} ${archiveFiles}`;
  await $`mkdir ${folderPath}`;
  await $`tar -xf ${folderPath}.tar -C ${folderPath}`;

  let packMetadata, modsMetadata = {};

  if (hasPackToml) {
    packMetadata = require(`${folderPath}/pack.toml`);
    modsMetadata = await extractModsFromPackwiz(folderPath, commitHash);
  } else {
    const result = extractModsFromInstance(`${folderPath}/minecraftinstance.json`);
    packMetadata = result.packMetadata;
    modsMetadata = result.modsMetadata;
    console.warn(`Using minecraftinstance.json for commit ${commitHash} - mod comparison available but limited`);
  }

  await $`rm -rf ${folderPath}.tar ${folderPath}`;
  return [packMetadata, modsMetadata];
}

async function checkFileExists(commitHash, filename) {
  try {
    await $`git cat-file -e ${commitHash}:${filename}`;
    return true;
  } catch {
    return false;
  }
}

async function extractModsFromPackwiz(folderPath, commitHash) {
  const folders = ["mods", "resourcepacks", "shaderpacks"];
  const allMods = {};

  for (const folder of folders) {
    try {
      const files = await Array.fromAsync(
        new Glob("*.pw.toml").scan({ cwd: `${folderPath}/${folder}`, absolute: true })
      );

      for (const filePath of files) {
        const metadata = require(filePath);
        const projectId = getUpdateInfo(metadata)["project-id"];
        if (projectId) {
          metadata.category = folder;
          allMods[projectId] = metadata;
        }
      }
    } catch {
      console.warn(`Folder ${folder} not found in commit ${commitHash}`);
    }
  }

  return allMods;
}

function extractModsFromInstance(filePath) {
  const instanceData = require(filePath);
  
  const packMetadata = {
    version: "unknown",
    versions: {
      minecraft: instanceData.minecraftVersion || instanceData.gameVersion,
      neoforge: instanceData.baseModLoader?.forgeVersion || "unknown"
    }
  };

  const modsMetadata = {};
  
  if (instanceData.installedAddons?.length) {
    for (const addon of instanceData.installedAddons) {
      if (!addon.addonID || !addon.installedFile) continue;

      modsMetadata[addon.addonID.toString()] = {
        name: addon.name,
        filename: addon.installedFile.fileName,
        download: {
          hash: addon.installedFile.id.toString(),
          url: addon.installedFile.downloadUrl
        },
        update: {
          curseforge: {
            "project-id": addon.addonID,
            "file-id": addon.installedFile.id
          }
        },
        category: addon.categorySection?.path || "mods"
      };
    }
  }

  return { packMetadata, modsMetadata };
}

function compareModCollections(oldMods, currentMods) {
  const newMods = {};
  const removedMods = {};
  const updatedMods = {};

  for (const [id, metadata] of Object.entries(currentMods)) {
    if (!oldMods[id]) {
      newMods[id] = metadata;
    } else if (metadata.download.hash !== oldMods[id].download.hash) {
      updatedMods[id] = metadata;
    }
  }

  for (const [id, metadata] of Object.entries(oldMods)) {
    if (!currentMods[id]) removedMods[id] = metadata;
  }

  return { newMods, removedMods, updatedMods };
}

function categorizeItems(items) {
  const categorized = { mods: {}, resourcepacks: {}, shaderpacks: {} };

  for (const [id, metadata] of Object.entries(items)) {
    const category = metadata.category || "mods";
    (categorized[category] || categorized.mods)[id] = metadata;
  }

  return categorized;
}

function getUpdateInfo(metadata) {
  const [updateKey] = Object.keys(metadata.update);
  return metadata.update[updateKey];
}

function getCategoryUrlPath(category) {
  const paths = { resourcepacks: "texture-packs", shaderpacks: "shaders" };
  return paths[category] || "mc-mods";
}

function escapeMarkdown(text) {
  return text.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function formatModLink(metadata, useFileName = false, authorName, modInfo = null) {
  const updateInfo = getUpdateInfo(metadata);
  const displayName = escapeMarkdown(useFileName ? metadata.filename : metadata.name);
  const urlPath = getCategoryUrlPath(metadata.category);
  
  const modUrl = modInfo?.slug
    ? `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}`
    : `https://curseforge.com/projects/${updateInfo["project-id"]}`;

  const authorLink = authorName 
    ? ` - (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
    : "";

  return `* [${displayName}](${modUrl})${authorLink}`;
}

function formatModlistLink(metadata, authorName, modInfo = null) {
  const updateInfo = getUpdateInfo(metadata);
  const displayName = escapeMarkdown(metadata.filename);
  const urlPath = getCategoryUrlPath(metadata.category);
  
  const modUrl = modInfo?.slug
    ? `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}/files/${updateInfo["file-id"]}`
    : `https://curseforge.com/projects/${updateInfo["project-id"]}/files/${updateInfo["file-id"]}`;

  const authorLink = authorName
    ? ` (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
    : "";

  return `  * [${displayName}](${modUrl})${authorLink}`;
}

async function formatUpdateLink(id, oldMods, currentMods) {
  const [oldMod, newMod] = [oldMods[id], currentMods[id]];
  const [oldUpdate, newUpdate] = [getUpdateInfo(oldMod), getUpdateInfo(newMod)];
  
  const oldFilename = escapeMarkdown(oldMod.filename);
  const newFilename = escapeMarkdown(newMod.filename);
  const urlPath = getCategoryUrlPath(oldMod.category);
  
  const modInfo = await getModInfo(oldUpdate["project-id"]);
  const baseUrl = `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}/files`;
  
  return `* [${oldFilename}](${baseUrl}/${oldUpdate["file-id"]}) -> [${newFilename}](${baseUrl}/${newUpdate["file-id"]})`;
}

function formatCommit(message) {
  let formatted = message;
  for (const [gitName, displayName] of Object.entries(CONFIG.namesLookup)) {
    formatted = formatted.replace(gitName, displayName);
  }
  return `* ${capitalize(formatted.trim())}`;
}

function extractCommitsByType(commits, regex) {
  return commits
    .filter(commit => regex.test(commit))
    .map(commit => formatCommit(commit.replace(regex, "")));
}

function processCommits(rawCommits) {
  const { feat, fix } = CONFIG.conventionalCommitRegexes;
  return {
    features: extractCommitsByType(rawCommits, feat),
    fixes: extractCommitsByType(rawCommits, fix),
  };
}

function generateChangelogContent(features, fixes, addedCategories, removedCategories) {
  const mention = CONFIG.saveToFile ? "" : "<@&1252725960948711444>\n";
  const craftoriaEmoji = CONFIG.saveToFile ? "" : " <:craftoria:1276650441869885531>";
  const links = CONFIG.saveToFile
    ? ""
    : `\n\n### Links\n\n<:curseforge:1117579334031511634> **[Download](https://www.curseforge.com/minecraft/modpacks/craftoria/files/${CONFIG.fileId})**\n📜 **[Changelog](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/CHANGELOG.md)**`;
  const neoforgeVersion = packMetadata.versions?.neoforge || "unknown";
  const header = CONFIG.saveToFile
    ? `\n_Neoforge_ ${neoforgeVersion} | _[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_${CONFIG.packVersion}.md)_ | _[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_${CONFIG.packVersion}.md)_`
    : "";

  const sections = [
    `${mention}#${CONFIG.saveToFile ? "" : craftoriaEmoji} Craftoria | v${CONFIG.packVersion}${craftoriaEmoji}\n${header}`,
    features.length && `\n\n### Changes/Improvements ⭐\n\n${features.join("\n")}`,
    addedCategories.mods.length && `\n\n### Added Mods ✅\n\n${addedCategories.mods.join("\n")}`,
    addedCategories.resourcepacks.length && `\n\n### Added Resource Packs 🎨\n\n${addedCategories.resourcepacks.join("\n")}`,
    addedCategories.shaderpacks.length && `\n\n### Added Shader Packs ✨\n\n${addedCategories.shaderpacks.join("\n")}`,
    removedCategories.mods.length && `\n\n### Removed Mods ❌\n\n${removedCategories.mods.join("\n")}`,
    removedCategories.resourcepacks.length && `\n\n### Removed Resource Packs 🗑️\n\n${removedCategories.resourcepacks.join("\n")}`,
    removedCategories.shaderpacks.length && `\n\n### Removed Shader Packs 🗑️\n\n${removedCategories.shaderpacks.join("\n")}`,
    fixes.length && `\n\n### Bug Fixes 🪲\n\n${fixes.join("\n")}`,
    `${links}\n---`,
  ].filter(Boolean);

  if (sections.length === 2) sections.splice(-1, 0, "\n\n* Nothing changed");

  return sections.join("");
}

function generateModChangelog(addedCategories, removedCategories, changedCategories, oldPackMetadata) {
  const sections = [
    `## Craftoria - ${CONFIG.oldPackVersion} -> ${CONFIG.packVersion}`,
    oldPackMetadata?.versions && packMetadata.versions &&
    packMetadata.versions.neoforge !== oldPackMetadata.versions.neoforge &&
    `### NeoForge - ${oldPackMetadata.versions.neoforge} -> ${packMetadata.versions.neoforge}`,
    addedCategories.mods.length && `### Added Mods\n${addedCategories.mods.join("\n")}`,
    addedCategories.resourcepacks.length && `### Added Resource Packs\n${addedCategories.resourcepacks.join("\n")}`,
    addedCategories.shaderpacks.length && `### Added Shader Packs\n${addedCategories.shaderpacks.join("\n")}`,
    removedCategories.mods.length && `### Removed Mods\n${removedCategories.mods.join("\n")}`,
    removedCategories.resourcepacks.length && `### Removed Resource Packs\n${removedCategories.resourcepacks.join("\n")}`,
    removedCategories.shaderpacks.length && `### Removed Shader Packs\n${removedCategories.shaderpacks.join("\n")}`,
    changedCategories.mods.length && `### Updated Mods\n${changedCategories.mods.join("\n")}`,
    changedCategories.resourcepacks.length && `### Updated Resource Packs\n${changedCategories.resourcepacks.join("\n")}`,
    changedCategories.shaderpacks.length && `### Updated Shader Packs\n${changedCategories.shaderpacks.join("\n")}`,
  ].filter(Boolean);

  if (sections.length === 1) sections.push("* Nothing changed");

  return sections.join("\n\n");
}

function getSortKey(metadata, useFileName = false) {
  const displayName = useFileName ? metadata.filename : metadata.name;
  return displayName
    .toLowerCase()
    .replace(/^the\s+/i, "")
    .replace(/\.(jar|zip)$/i, "")
    .trim();
}

async function sortAndFormatItems(items, formatter) {
  const sorted = Object.values(items).sort((a, b) => 
    getSortKey(a).localeCompare(getSortKey(b))
  );
  return sorted.map(formatter);
}

async function sortAndFormatUpdates(ids, oldMods, currentMods) {
  const sorted = ids.sort((a, b) => 
    getSortKey(currentMods[a]).localeCompare(getSortKey(currentMods[b]))
  );
  return Promise.all(sorted.map(id => formatUpdateLink(id, oldMods, currentMods)));
}

async function generateChangelog() {
  if (!Bun.which("git")) {
    throw new Error("Git is required but was not found on the system.");
  }

  $.cwd(CONFIG.gitRepoPath);
  await initializeConfig();

  const fromCommit = CLI_ARGS.fromCommit || CONFIG.cutoffCommitHash;
  const toCommit = CLI_ARGS.toCommit || CONFIG.referenceCommit;

  const [oldPackMetadata, oldMods] = await getCommitMetadataFiles(fromCommit);
  const [, currentMods] = await getCommitMetadataFiles(toCommit);
  const { newMods, removedMods, updatedMods } = compareModCollections(oldMods, currentMods);

  // Categorize and format links
  const addedCategories = categorizeItems(newMods);
  const removedCategories = categorizeItems(removedMods);
  const updatedCategories = categorizeItems(updatedMods);

  const addedLinks = {
    mods: await sortAndFormatItems(addedCategories.mods, m => formatModLink(m)),
    resourcepacks: await sortAndFormatItems(addedCategories.resourcepacks, m => formatModLink(m)),
    shaderpacks: await sortAndFormatItems(addedCategories.shaderpacks, m => formatModLink(m))
  };

  const removedLinks = {
    mods: await sortAndFormatItems(removedCategories.mods, m => formatModLink(m)),
    resourcepacks: await sortAndFormatItems(removedCategories.resourcepacks, m => formatModLink(m)),
    shaderpacks: await sortAndFormatItems(removedCategories.shaderpacks, m => formatModLink(m))
  };

  const changedLinks = {
    mods: await sortAndFormatUpdates(Object.keys(updatedCategories.mods), oldMods, currentMods),
    resourcepacks: await sortAndFormatUpdates(Object.keys(updatedCategories.resourcepacks), oldMods, currentMods),
    shaderpacks: await sortAndFormatUpdates(Object.keys(updatedCategories.shaderpacks), oldMods, currentMods)
  };

  // Process commits
  const rawCommits = (await $`git log ${fromCommit}..${toCommit} --pretty="%s \`%an\`"`.text())
    .split("\n")
    .filter(Boolean);

  const { features, fixes } = processCommits(rawCommits);
  const changelog = generateChangelogContent(features, fixes, addedLinks, removedLinks);

  // Generate modlist
  const currentCategories = categorizeItems(currentMods);
  const modlistSections = [];

  for (const [categoryName, categoryItems] of Object.entries(currentCategories)) {
    if (Object.keys(categoryItems).length === 0) continue;

    const sorted = Object.values(categoryItems).sort((a, b) => 
      getSortKey(a, true).localeCompare(getSortKey(b, true))
    );
    
    const entries = await Promise.all(
      sorted.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );

    const categoryTitle = categoryName.split(/(?=[A-Z])/).map(capitalize).join(" ");
    modlistSections.push(`## ${categoryTitle}\n\n${entries.join("\n")}`);
  }

  const modlist = `# Craftoria - v${CONFIG.packVersion}\n\n${modlistSections.join("\n\n")}`;
  const modChangelog = generateModChangelog(addedLinks, removedLinks, changedLinks, oldPackMetadata);

  if (CONFIG.saveToFile) {
    const baseDir = path.join(CONFIG.gitRepoPath, "changelogs");
    await Promise.all([
      writeTextToFile(path.join(baseDir, "CHANGELOG.md"), changelog, true),
      writeTextToFile(path.join(baseDir, `modlist_${CONFIG.packVersion}.md`), modlist),
      writeTextToFile(path.join(baseDir, `changelog_mods_${CONFIG.packVersion}.md`), modChangelog),
      writeTextToFile(path.join(CONFIG.gitRepoPath, "MODLIST.md"), modlist),
    ]);
    console.log(CLI_ARGS.test ? "Test mode: Changelogs saved to files." : "Changelogs saved to files.");
  } else {
    if (CLI_ARGS.test) {
      console.log("=== TEST MODE RESULTS ===");
      console.log(`Comparing: ${CONFIG.oldPackVersion} -> ${CONFIG.packVersion}`);
      console.log(`Commits: ${CONFIG.cutoffCommitHash} -> ${CONFIG.referenceCommit}`);
      console.log("========================\n");
    }
    console.log(changelog, "\n---\n", modlist, "\n---\n", modChangelog);
  }
}

generateChangelog().catch(error => {
  console.error("An error occurred during changelog generation:\n", error);
  process.exit(1);
});
