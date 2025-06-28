import path from "node:path";
import os from "node:os";
import {
  capitalize,
  getLatestBumpCommitHash,
  getModInfo,
  writeTextToFile,
} from "./utils";
import { $, Glob } from "bun";

// Try to import pack.toml first, fallback to minecraftinstance.json
let packMetadata;
try {
  packMetadata = require("../../../pack.toml");
} catch (error) {
  console.warn("pack.toml not found, using minecraftinstance.json as fallback");
  const instanceData = require("../../../minecraftinstance.json");
  packMetadata = {
    version: "unknown", // Extract from instance name or set default
    versions: {
      minecraft: instanceData.minecraftVersion || instanceData.gameVersion,
      neoforge: instanceData.baseModLoader?.forgeVersion || "unknown"
    }
  };
}

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

async function initializeConfig() {
  CONFIG.cutoffCommitHash ||= await getLatestBumpCommitHash(CONFIG.referenceCommit);
  CONFIG.packVersion ||= packMetadata.version;

  const [oldPackMetadata] = await getCommitMetadataFiles(CONFIG.cutoffCommitHash);

  if (oldPackMetadata) {
    CONFIG.oldPackVersion ||= oldPackMetadata.version;

    // Only check version comparison if both versions are available and not "unknown"
    if (CONFIG.oldPackVersion !== "unknown" && CONFIG.packVersion !== "unknown" && CONFIG.oldPackVersion === CONFIG.packVersion) {
      throw new Error("You did not bump the pack version!");
    }
  } else {
    // If no metadata exists in old commit, we can't compare versions
    CONFIG.oldPackVersion ||= "unknown";
    console.warn("Old commit doesn't have pack metadata, version comparison skipped");
  }
}

async function getCommitMetadataFiles(commitHash) {
  const folderName = `craftoria-${commitHash}-${Date.now()}`;
  const folderPath = path.join(os.tmpdir(), folderName);
  const packwizGlob = new Glob("*.pw.toml");

  // Check if pack.toml exists in this commit first
  let hasPackToml = false;
  let hasInstanceJson = false;

  try {
    await $`git cat-file -e ${commitHash}:pack.toml`;
    hasPackToml = true;
  } catch (error) {
    // pack.toml doesn't exist, check for minecraftinstance.json
    try {
      await $`git cat-file -e ${commitHash}:minecraftinstance.json`;
      hasInstanceJson = true;
    } catch (error2) {
      console.warn(`Neither pack.toml nor minecraftinstance.json found in commit ${commitHash}, skipping mod comparison for this commit`);
      return [null, {}];
    }
  }

  // Archive the appropriate files
  if (hasPackToml) {
    await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} pack.toml mods/ resourcepacks/ shaderpacks/`;
  } else {
    await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} minecraftinstance.json`;
  }

  await $`mkdir ${folderPath}`;
  await $`tar -xf ${folderPath}.tar -C ${folderPath}`;

  let packMetadata;
  let modsMetadata = {};

  if (hasPackToml) {
    // Use pack.toml
    packMetadata = require(`${folderPath}/pack.toml`);

    // Scan mods, resourcepacks, and shaderpacks folders
    const folders = ['mods', 'resourcepacks', 'shaderpacks'];

    for (const folder of folders) {
      try {
        const scannedFiles = await Array.fromAsync(
          packwizGlob.scan({ cwd: `${folderPath}/${folder}`, absolute: true })
        );

        const folderMods = Object.fromEntries(
          scannedFiles
            .map(filePath => {
              const metadata = require(filePath);
              const updateInfo = getUpdateInfo(metadata);
              const projectId = updateInfo["project-id"];
              if (projectId) {
                // Add category information to metadata
                metadata._category = folder;
                return [projectId, metadata];
              }
            })
            .filter(Boolean)
        );

        // Merge with existing modsMetadata
        Object.assign(modsMetadata, folderMods);
      } catch (error) {
        // Folder might not exist in this commit, continue
        console.warn(`Folder ${folder} not found in commit ${commitHash}`);
      }
    }
  } else {
    // Use minecraftinstance.json as fallback
    const instanceData = require(`${folderPath}/minecraftinstance.json`);
    packMetadata = {
      version: "unknown", // Can't determine pack version from instance file
      versions: {
        minecraft: instanceData.minecraftVersion || instanceData.gameVersion,
        neoforge: instanceData.baseModLoader?.forgeVersion || "unknown"
      }
    };

    // Extract mod information from installedAddons
    if (instanceData.installedAddons && Array.isArray(instanceData.installedAddons)) {
      modsMetadata = Object.fromEntries(
        instanceData.installedAddons
          .filter(addon => addon.addonID && addon.installedFile) // Only process valid addons
          .map(addon => {
            // Determine category based on path
            const categoryPath = addon.categorySection?.path || 'mods';

            // Create a structure similar to packwiz format for compatibility
            const metadata = {
              name: addon.name,
              filename: addon.installedFile.fileName,
              download: {
                hash: addon.installedFile.id.toString(), // Use file ID as hash for comparison
                url: addon.installedFile.downloadUrl
              },
              update: {
                curseforge: {
                  "project-id": addon.addonID,
                  "file-id": addon.installedFile.id
                }
              },
              _category: categoryPath // Add category information
            };
            return [addon.addonID.toString(), metadata];
          })
      );
    }

    console.warn(`Using minecraftinstance.json for commit ${commitHash} - mod comparison available but limited`);
  }

  await $`rm -rf ${folderPath}.tar ${folderPath}`;

  return [packMetadata, modsMetadata];
}

function compareModCollections(oldMods, currentMods) {
  const newMods = {};
  const removedMods = {};
  const updatedMods = {};

  for (const [projectId, metadata] of Object.entries(currentMods)) {
    if (!(projectId in oldMods)) {
      newMods[projectId] = metadata;
    } else if (metadata.download.hash !== oldMods[projectId].download.hash) {
      updatedMods[projectId] = metadata;
    }
  }

  for (const [projectId, metadata] of Object.entries(oldMods)) {
    if (!(projectId in currentMods)) {
      removedMods[projectId] = metadata;
    }
  }

  return { newMods, removedMods, updatedMods };
}

function categorizeItems(items) {
  const categorized = {
    mods: {},
    resourcepacks: {},
    shaderpacks: {}
  };

  for (const [projectId, metadata] of Object.entries(items)) {
    const category = metadata._category || 'mods';
    if (categorized[category]) {
      categorized[category][projectId] = metadata;
    } else {
      // Fallback to mods if unknown category
      categorized.mods[projectId] = metadata;
    }
  }

  return categorized;
}

function getUpdateInfo(metadata) {
  const [updateKey] = Object.keys(metadata.update);
  return metadata.update[updateKey];
}

function formatModLink(metadata, useFileName = false, authorName) {
  const updateInfo = getUpdateInfo(metadata);
  const displayName = useFileName ? metadata.filename : metadata.name;
  return `* [${displayName}](https://curseforge.com/projects/${updateInfo["project-id"]
    })${authorName
      ? ` - (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
      : ""
    }`;
}

function formatUpdateLink(id, oldMods, currentMods) {
  const [newMod, oldMod] = [currentMods[id], oldMods[id]];
  const [oldUpdate, newUpdate] = [getUpdateInfo(oldMod), getUpdateInfo(newMod)];
  return `* [${oldMod.filename}](https://curseforge.com/projects/${oldUpdate["project-id"]}/files/${oldUpdate["file-id"]}) -> [${newMod.filename}](https://curseforge.com/projects/${newUpdate["project-id"]}/files/${newUpdate["file-id"]})`;
}

function formatCommit(message) {
  for (const [gitName, displayName] of Object.entries(CONFIG.namesLookup)) {
    message = message.replace(gitName, displayName);
  }
  return `* ${capitalize(message.trim())}`;
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
    `${mention}#${CONFIG.saveToFile ? "" : craftoriaEmoji} Craftoria | v${CONFIG.packVersion
    }${craftoriaEmoji}\n${header}`,
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
    oldPackMetadata &&
    oldPackMetadata.versions &&
    packMetadata.versions &&
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

// Main function
async function generateChangelog() {
  if (!Bun.which("git")) {
    throw new Error("Git is required but was not found on the system.");
  }

  $.cwd(CONFIG.gitRepoPath);

  await initializeConfig();

  const [oldPackMetadata, oldMods] = await getCommitMetadataFiles(
    CONFIG.cutoffCommitHash
  );
  const [, currentMods] = await getCommitMetadataFiles(CONFIG.referenceCommit);
  const { newMods, removedMods, updatedMods } = compareModCollections(
    oldMods,
    currentMods
  );

  // Categorize items by type
  const addedCategories = categorizeItems(newMods);
  const removedCategories = categorizeItems(removedMods);
  const updatedCategories = categorizeItems(updatedMods);

  // Generate links for each category
  const addedLinks = {
    mods: Object.values(addedCategories.mods).map(metadata => formatModLink(metadata)).sort(),
    resourcepacks: Object.values(addedCategories.resourcepacks).map(metadata => formatModLink(metadata)).sort(),
    shaderpacks: Object.values(addedCategories.shaderpacks).map(metadata => formatModLink(metadata)).sort()
  };

  const removedLinks = {
    mods: Object.values(removedCategories.mods).map(metadata => formatModLink(metadata)).sort(),
    resourcepacks: Object.values(removedCategories.resourcepacks).map(metadata => formatModLink(metadata)).sort(),
    shaderpacks: Object.values(removedCategories.shaderpacks).map(metadata => formatModLink(metadata)).sort()
  };

  const changedLinks = {
    mods: Object.keys(updatedCategories.mods).map(id => formatUpdateLink(id, oldMods, currentMods)).sort(),
    resourcepacks: Object.keys(updatedCategories.resourcepacks).map(id => formatUpdateLink(id, oldMods, currentMods)).sort(),
    shaderpacks: Object.keys(updatedCategories.shaderpacks).map(id => formatUpdateLink(id, oldMods, currentMods)).sort()
  };

  const rawCommits = (
    await $`git log ${CONFIG.cutoffCommitHash}..${CONFIG.referenceCommit} --pretty="%s \`%an\`"`.text()
  )
    .split("\n")
    .filter(Boolean);

  const { features, fixes } = processCommits(rawCommits);

  const changelog = generateChangelogContent(features, fixes, addedLinks, removedLinks);
  const modlist = `# Craftoria - v${CONFIG.packVersion}\n\n${(
    await Promise.all(
      Object.values(currentMods).map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatModLink(metadata, false, modInfo.authors[0].name);
      })
    )
  )
    .sort()
    .join("\n")}`;
  const modChangelog = generateModChangelog(
    addedLinks,
    removedLinks,
    changedLinks,
    oldPackMetadata
  );

  if (CONFIG.saveToFile) {
    const paths = {
      changelog: path.join(CONFIG.gitRepoPath, "changelogs", "CHANGELOG.md"),
      modlist: path.join(
        CONFIG.gitRepoPath,
        "changelogs",
        `modlist_${CONFIG.packVersion}.md`
      ),
      modChangelog: path.join(
        CONFIG.gitRepoPath,
        "changelogs",
        `changelog_mods_${CONFIG.packVersion}.md`
      ),
    };

    await Promise.all([
      writeTextToFile(paths.changelog, changelog, true),
      writeTextToFile(paths.modlist, modlist),
      writeTextToFile(paths.modChangelog, modChangelog),
    ]);
    console.log("Changelogs saved to files.");
  } else {
    console.log(changelog, "\n---\n", modlist, "\n---\n", modChangelog);
  }
}

generateChangelog().catch(error => {
  console.error("An error occurred during changelog generation:\n", error);
  process.exit(1);
});
