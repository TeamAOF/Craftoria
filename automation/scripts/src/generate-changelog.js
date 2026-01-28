import path from "node:path";
import os from "node:os";
import {
  capitalize,
  getLatestBumpCommitHash,
  getModInfo,
  writeTextToFile,
} from "./utils";
import { $, Glob } from "bun";

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    testMode: false,
    fromCommit: null,
    toCommit: null,
    fromVersion: null,
    toVersion: null,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--test':
      case '-t':
        parsed.testMode = true;
        CONFIG.saveToFile = false; // Don't save files in test mode by default
        break;
      case '--from-commit':
        parsed.fromCommit = args[++i];
        break;
      case '--to-commit':
        parsed.toCommit = args[++i];
        break;
      case '--from-version':
        parsed.fromVersion = args[++i];
        break;
      case '--to-version':
        parsed.toVersion = args[++i];
        break;
      case '--save':
        CONFIG.saveToFile = true;
        break;
      case '--help':
      case '-h':
        parsed.help = true;
        break;
    }
  }

  if (parsed.help) {
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

  return parsed;
}

// Try to import pack.toml first, fallback to minecraftinstance.json
let packMetadata;
try {
  packMetadata = require("../../../packwiz/pack.toml");
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

const CLI_ARGS = parseArgs();

// Validate CLI arguments
if (CLI_ARGS.testMode && !CLI_ARGS.fromCommit) {
  console.error("Error: --test mode requires --from-commit to be specified");
  console.log("Use --help for usage information");
  process.exit(1);
}

async function initializeConfig() {
  // Use CLI arguments if provided, otherwise use defaults
  if (CLI_ARGS.testMode && CLI_ARGS.fromCommit) {
    CONFIG.cutoffCommitHash = CLI_ARGS.fromCommit;
  } else {
    CONFIG.cutoffCommitHash ||= await getLatestBumpCommitHash(CONFIG.referenceCommit);
  }

  if (CLI_ARGS.testMode && CLI_ARGS.toCommit) {
    CONFIG.referenceCommit = CLI_ARGS.toCommit;
  }

  // Override pack versions if provided via CLI
  if (CLI_ARGS.toVersion) {
    CONFIG.packVersion = CLI_ARGS.toVersion;
  } else {
    CONFIG.packVersion ||= packMetadata.version;
  }

  const [oldPackMetadata] = await getCommitMetadataFiles(CONFIG.cutoffCommitHash);

  if (CLI_ARGS.fromVersion) {
    CONFIG.oldPackVersion = CLI_ARGS.fromVersion;
  } else if (oldPackMetadata) {
    CONFIG.oldPackVersion ||= oldPackMetadata.version;
  } else {
    // If no metadata exists in old commit, we can't compare versions
    CONFIG.oldPackVersion ||= "unknown";
    console.warn("Old commit doesn't have pack metadata, version comparison skipped");
  }

  // Skip version bump check in test mode or when using custom versions
  if (!CLI_ARGS.testMode && !CLI_ARGS.fromVersion && !CLI_ARGS.toVersion) {
    // Only check version comparison if both versions are available and not "unknown"
    if (CONFIG.oldPackVersion !== "unknown" && CONFIG.packVersion !== "unknown" && CONFIG.oldPackVersion === CONFIG.packVersion) {
      throw new Error("You did not bump the pack version!");
    }
  }

  // Log the comparison being made
  if (CLI_ARGS.testMode) {
    console.log(`Test mode: Comparing ${CONFIG.oldPackVersion} (${CONFIG.cutoffCommitHash}) -> ${CONFIG.packVersion} (${CONFIG.referenceCommit})`);
  }
}

async function getCommitMetadataFiles(commitHash) {
  const folderName = `craftoria-${commitHash}-${Date.now()}`;
  const folderPath = path.join(os.tmpdir(), folderName);
  const packwizGlob = new Glob("*.pw.toml");

  // Check if pack.toml exists in this commit first
  let hasPackToml = false;
  let hasInstanceJson = false;
  let isLegacyStructure = false;

  try {
    await $`git cat-file -e ${commitHash}:packwiz/pack.toml`;
    hasPackToml = true;
  } catch (error) {
    // packwiz/pack.toml doesn't exist, check for legacy pack.toml in root
    try {
      await $`git cat-file -e ${commitHash}:pack.toml`;
      hasPackToml = true;
      isLegacyStructure = true;
      console.log(`Using legacy structure for commit ${commitHash} (pack.toml in root)`);
    } catch (error2) {
      // pack.toml doesn't exist anywhere, check for minecraftinstance.json
      try {
        await $`git cat-file -e ${commitHash}:minecraftinstance.json`;
        hasInstanceJson = true;
      } catch (error3) {
        console.warn(`Neither packwiz/pack.toml, pack.toml, nor minecraftinstance.json found in commit ${commitHash}, skipping mod comparison for this commit`);
        return [null, {}];
      }
    }
  }

  // Archive the appropriate files
  if (hasPackToml) {
    if (isLegacyStructure) {
      // Legacy structure: pack.toml, mods/, resourcepacks/, shaderpacks/ in root
      await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} pack.toml mods/ resourcepacks/ shaderpacks/`;
    } else {
      // New structure: everything under packwiz/
      await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} packwiz/pack.toml packwiz/mods/ packwiz/resourcepacks/ packwiz/shaderpacks/`;
    }
  } else {
    await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} minecraftinstance.json`;
  }

  await $`mkdir ${folderPath}`;
  await $`tar -xf ${folderPath}.tar -C ${folderPath}`;

  let packMetadata;
  let modsMetadata = {};

  if (hasPackToml) {
    // Use pack.toml
    const packTomlPath = isLegacyStructure ? `${folderPath}/pack.toml` : `${folderPath}/packwiz/pack.toml`;
    packMetadata = require(packTomlPath);

    // Scan mods, resourcepacks, and shaderpacks folders
    const folders = isLegacyStructure
      ? ['mods', 'resourcepacks', 'shaderpacks']
      : ['packwiz/mods', 'packwiz/resourcepacks', 'packwiz/shaderpacks'];

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
                // Extract the category from the folder path
                const categoryName = isLegacyStructure
                  ? folder  // 'mods', 'resourcepacks', 'shaderpacks'
                  : folder.split('/')[1]; // 'packwiz/mods' -> 'mods'
                metadata._category = categoryName;
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

function formatModLink(metadata, useFileName = false, authorName, modInfo = null) {
  const updateInfo = getUpdateInfo(metadata);
  const rawDisplayName = useFileName ? metadata.filename : metadata.name;
  // Escape square brackets in the display name for Markdown
  const displayName = rawDisplayName.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

  // Determine the correct URL path based on category
  let urlPath = 'mc-mods'; // default for mods
  if (metadata._category === 'resourcepacks') {
    urlPath = 'texture-packs';
  } else if (metadata._category === 'shaderpacks') {
    urlPath = 'shaders';
  }

  // Use mod slug if modInfo is provided, otherwise fall back to project ID
  const modUrl = modInfo && modInfo.slug
    ? `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}`
    : `https://curseforge.com/projects/${updateInfo["project-id"]}`;

  return `* [${displayName}](${modUrl})${authorName
    ? ` - (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
    : ""
    }`;
}

function formatModlistLink(metadata, authorName, modInfo = null) {
  const updateInfo = getUpdateInfo(metadata);
  const rawDisplayName = metadata.filename;
  // Escape square brackets in the display name for Markdown
  const displayName = rawDisplayName.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

  // Determine the correct URL path based on category
  let urlPath = 'mc-mods'; // default for mods
  if (metadata._category === 'resourcepacks') {
    urlPath = 'texture-packs';
  } else if (metadata._category === 'shaderpacks') {
    urlPath = 'shaders';
  }

  // Use mod slug if modInfo is provided, otherwise fall back to project ID
  const modUrl = modInfo && modInfo.slug
    ? `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}`
    : `https://curseforge.com/projects/${updateInfo["project-id"]}`;

  return `- [${displayName}](${modUrl})${authorName
    ? ` - (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
    : ""
    }`;
}

function formatLegacyModlistLink(metadata, authorName, modInfo = null) {
  const updateInfo = getUpdateInfo(metadata);
  const rawDisplayName = metadata.filename;
  // Escape square brackets in the display name for Markdown
  const displayName = rawDisplayName.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

  // Determine the correct URL path based on category
  let urlPath = 'mc-mods'; // default for mods
  if (metadata._category === 'resourcepacks') {
    urlPath = 'texture-packs';
  } else if (metadata._category === 'shaderpacks') {
    urlPath = 'shaders';
  }

  // Use mod slug and file ID if modInfo is provided, otherwise fall back to project ID
  const modUrl = modInfo && modInfo.slug
    ? `https://www.curseforge.com/minecraft/${urlPath}/${modInfo.slug}/files/${updateInfo["file-id"]}`
    : `https://curseforge.com/projects/${updateInfo["project-id"]}/files/${updateInfo["file-id"]}`;

  return `  * [${displayName}](${modUrl})${authorName
    ? ` (by [${authorName}](https://www.curseforge.com/members/${authorName}/projects))`
    : ""
    }`;
}

async function formatUpdateLink(id, oldMods, currentMods) {
  const [newMod, oldMod] = [currentMods[id], oldMods[id]];
  const [oldUpdate, newUpdate] = [getUpdateInfo(oldMod), getUpdateInfo(newMod)];

  // Escape square brackets in filenames for Markdown
  const oldFilename = oldMod.filename.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
  const newFilename = newMod.filename.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

  // Determine the correct URL path based on category
  let urlPath = 'mc-mods'; // default for mods
  if (oldMod._category === 'resourcepacks') {
    urlPath = 'texture-packs';
  } else if (oldMod._category === 'shaderpacks') {
    urlPath = 'shaders';
  }

  // Get mod info to retrieve the slug for correct URL formatting
  const modInfo = await getModInfo(oldUpdate["project-id"]);
  const modSlug = modInfo.slug;

  return `* [${oldFilename}](https://www.curseforge.com/minecraft/${urlPath}/${modSlug}/files/${oldUpdate["file-id"]}) -> [${newFilename}](https://www.curseforge.com/minecraft/${urlPath}/${modSlug}/files/${newUpdate["file-id"]})`;
}

function getSortKey(metadata, useFileName = false) {
  const displayName = useFileName ? metadata.filename : metadata.name;
  // Remove common prefixes and suffixes for better sorting
  return displayName
    .toLowerCase()
    .replace(/^the\s+/i, '') // Remove "The " prefix
    .replace(/\.(jar|zip)$/i, '') // Remove file extensions
    .trim();
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
    ? `\n\n_Neoforge ${neoforgeVersion}_ | _[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_${CONFIG.packVersion}.md)_ | _[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_${CONFIG.packVersion}.md)_`
    : "";

  const sections = [
    `${mention}# ${CONFIG.saveToFile ? "" : craftoriaEmoji}Craftoria | v${CONFIG.packVersion}${craftoriaEmoji}${header}`,
    features.length && `\n### Changes/Improvements ⭐\n\n${features.join("\n")}`,
    addedCategories.mods.length && `\n### Added Mods ✅\n\n${addedCategories.mods.join("\n")}`,
    addedCategories.resourcepacks.length && `\n### Added Resource Packs 🎨\n\n${addedCategories.resourcepacks.join("\n")}`,
    addedCategories.shaderpacks.length && `\n### Added Shader Packs ✨\n\n${addedCategories.shaderpacks.join("\n")}`,
    removedCategories.mods.length && `\n### Removed Mods ❌\n\n${removedCategories.mods.join("\n")}`,
    removedCategories.resourcepacks.length && `\n### Removed Resource Packs 🗑️\n\n${removedCategories.resourcepacks.join("\n")}`,
    removedCategories.shaderpacks.length && `\n### Removed Shader Packs 🗑️\n\n${removedCategories.shaderpacks.join("\n")}`,
    fixes.length && `\n### Bug Fixes 🪲\n\n${fixes.join("\n")}`,
    links && links,
    CONFIG.saveToFile && "\n---",
  ].filter(Boolean);

  if (sections.length === 2) sections.splice(-1, 0, "\n### Changes\n\n* Nothing changed");

  return sections.join("\n") + "\n";
}

function generateModChangelog(addedCategories, removedCategories, changedCategories, oldPackMetadata) {
  const sections = [
    `# Craftoria - ${CONFIG.oldPackVersion} -> ${CONFIG.packVersion}`,
    oldPackMetadata &&
    oldPackMetadata.versions &&
    packMetadata.versions &&
    packMetadata.versions.neoforge !== oldPackMetadata.versions.neoforge &&
    `## NeoForge - ${oldPackMetadata.versions.neoforge} -> ${packMetadata.versions.neoforge}`,
    addedCategories.mods.length && `### Added Mods\n\n${addedCategories.mods.join("\n")}`,
    addedCategories.resourcepacks.length && `### Added Resource Packs\n\n${addedCategories.resourcepacks.join("\n")}`,
    addedCategories.shaderpacks.length && `### Added Shader Packs\n\n${addedCategories.shaderpacks.join("\n")}`,
    removedCategories.mods.length && `### Removed Mods\n\n${removedCategories.mods.join("\n")}`,
    removedCategories.resourcepacks.length && `### Removed Resource Packs\n\n${removedCategories.resourcepacks.join("\n")}`,
    removedCategories.shaderpacks.length && `### Removed Shader Packs\n\n${removedCategories.shaderpacks.join("\n")}`,
    changedCategories.mods.length && `### Updated Mods\n\n${changedCategories.mods.join("\n")}`,
    changedCategories.resourcepacks.length && `### Updated Resource Packs\n\n${changedCategories.resourcepacks.join("\n")}`,
    changedCategories.shaderpacks.length && `### Updated Shader Packs\n\n${changedCategories.shaderpacks.join("\n")}`,
  ].filter(Boolean);

  if (sections.length === 1) sections.push("\n### Changes\n\n* Nothing changed");

  return sections.join("\n\n") + "\n";
}

// Parse command line arguments for testing
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    testMode: false,
    fromCommit: null,
    toCommit: null,
    fromVersion: null,
    toVersion: null,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--test':
      case '-t':
        parsed.testMode = true;
        CONFIG.saveToFile = false; // Don't save files in test mode by default
        break;
      case '--from-commit':
        parsed.fromCommit = args[++i];
        break;
      case '--to-commit':
        parsed.toCommit = args[++i];
        break;
      case '--from-version':
        parsed.fromVersion = args[++i];
        break;
      case '--to-version':
        parsed.toVersion = args[++i];
        break;
      case '--save':
        CONFIG.saveToFile = true;
        break;
      case '--help':
      case '-h':
        parsed.help = true;
        break;
    }
  }

  if (parsed.help) {
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
  node generate-changelog.js --test --from-commit abc123 --to-commit def456

  # Test with custom version names
  node generate-changelog.js --test --from-commit abc123 --from-version "1.21.0" --to-version "1.22.0"

  # Test and save files
  node generate-changelog.js --test --from-commit abc123 --save
`);
    process.exit(0);
  }

  return parsed;
}

const CLI_ARGS = parseArgs();

// Validate CLI arguments
if (CLI_ARGS.testMode && !CLI_ARGS.fromCommit) {
  console.error("Error: --test mode requires --from-commit to be specified");
  console.log("Use --help for usage information");
  process.exit(1);
}

// Main function
async function generateChangelog() {
  if (!Bun.which("git")) {
    throw new Error("Git is required but was not found on the system.");
  }

  $.cwd(CONFIG.gitRepoPath);

  await initializeConfig();

  const fromCommit = CLI_ARGS.fromCommit || CONFIG.cutoffCommitHash;
  const toCommit = CLI_ARGS.toCommit || CONFIG.referenceCommit;

  // Override versions if provided via CLI
  if (CLI_ARGS.fromVersion) {
    CONFIG.oldPackVersion = CLI_ARGS.fromVersion;
  }
  if (CLI_ARGS.toVersion) {
    CONFIG.packVersion = CLI_ARGS.toVersion;
  }

  const [oldPackMetadata, oldMods] = await getCommitMetadataFiles(fromCommit);
  const [, currentMods] = await getCommitMetadataFiles(toCommit);
  const { newMods, removedMods, updatedMods } = compareModCollections(
    oldMods,
    currentMods
  );

  // Categorize items by type
  const addedCategories = categorizeItems(newMods);
  const removedCategories = categorizeItems(removedMods);
  const updatedCategories = categorizeItems(updatedMods);

  // Generate links for each category with improved sorting
  const addedLinks = {
    mods: Object.values(addedCategories.mods)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata)),
    resourcepacks: Object.values(addedCategories.resourcepacks)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata)),
    shaderpacks: Object.values(addedCategories.shaderpacks)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata))
  };

  const removedLinks = {
    mods: Object.values(removedCategories.mods)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata)),
    resourcepacks: Object.values(removedCategories.resourcepacks)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata)),
    shaderpacks: Object.values(removedCategories.shaderpacks)
      .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)))
      .map(metadata => formatModLink(metadata))
  };

  const changedLinks = {
    mods: await Promise.all(
      Object.keys(updatedCategories.mods)
        .sort((a, b) => getSortKey(currentMods[a]).localeCompare(getSortKey(currentMods[b])))
        .map(id => formatUpdateLink(id, oldMods, currentMods))
    ),
    resourcepacks: await Promise.all(
      Object.keys(updatedCategories.resourcepacks)
        .sort((a, b) => getSortKey(currentMods[a]).localeCompare(getSortKey(currentMods[b])))
        .map(id => formatUpdateLink(id, oldMods, currentMods))
    ),
    shaderpacks: await Promise.all(
      Object.keys(updatedCategories.shaderpacks)
        .sort((a, b) => getSortKey(currentMods[a]).localeCompare(getSortKey(currentMods[b])))
        .map(id => formatUpdateLink(id, oldMods, currentMods))
    )
  };

  const rawCommits = (
    await $`git log ${fromCommit}..${toCommit} --pretty="%s \`%an\`"`.text()
  )
    .split("\n")
    .filter(Boolean);

  const { features, fixes } = processCommits(rawCommits);

  const changelog = generateChangelogContent(features, fixes, addedLinks, removedLinks);

  // Categorize current mods for the modlist
  const currentCategories = categorizeItems(currentMods);

  // Generate categorized modlist sections (improved format)
  const modlistSections = [];

  // Mods section
  if (Object.keys(currentCategories.mods).length > 0) {
    const sortedMods = Object.values(currentCategories.mods)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const modEntries = await Promise.all(
      sortedMods.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    modlistSections.push(`## Mods\n\n${modEntries.join("\n")}`);
  }

  // Resource Packs section
  if (Object.keys(currentCategories.resourcepacks).length > 0) {
    const sortedResourcepacks = Object.values(currentCategories.resourcepacks)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const resourcepackEntries = await Promise.all(
      sortedResourcepacks.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    modlistSections.push(`## Resource Packs\n\n${resourcepackEntries.join("\n")}`);
  }

  // Shader Packs section
  if (Object.keys(currentCategories.shaderpacks).length > 0) {
    const sortedShaderpacks = Object.values(currentCategories.shaderpacks)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const shaderpackEntries = await Promise.all(
      sortedShaderpacks.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    modlistSections.push(`## Shader Packs\n\n${shaderpackEntries.join("\n")}`);
  }

  const modlist = `# Craftoria - v${CONFIG.packVersion}\n\n${modlistSections.join("\n\n")}`;

  // Generate legacy modlist sections for MODLIST.md (for git blame)
  const legacyModlistSections = [];

  // Legacy Mods section
  if (Object.keys(currentCategories.mods).length > 0) {
    const sortedMods = Object.values(currentCategories.mods)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const modEntries = await Promise.all(
      sortedMods.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatLegacyModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    legacyModlistSections.push(`## Mods\n\n${modEntries.join("\n")}`);
  }

  // Legacy Resource Packs section
  if (Object.keys(currentCategories.resourcepacks).length > 0) {
    const sortedResourcepacks = Object.values(currentCategories.resourcepacks)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const resourcepackEntries = await Promise.all(
      sortedResourcepacks.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatLegacyModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    legacyModlistSections.push(`## Resource Packs\n\n${resourcepackEntries.join("\n")}`);
  }

  // Legacy Shader Packs section
  if (Object.keys(currentCategories.shaderpacks).length > 0) {
    const sortedShaderpacks = Object.values(currentCategories.shaderpacks)
      .sort((a, b) => getSortKey(a, true).localeCompare(getSortKey(b, true)));
    const shaderpackEntries = await Promise.all(
      sortedShaderpacks.map(async metadata => {
        const updateInfo = getUpdateInfo(metadata);
        const modInfo = await getModInfo(updateInfo["project-id"]);
        return formatLegacyModlistLink(metadata, modInfo.authors[0].name, modInfo);
      })
    );
    legacyModlistSections.push(`## Shader Packs\n\n${shaderpackEntries.join("\n")}`);
  }

  const legacyModlist = `# Craftoria - v${CONFIG.packVersion}\n\n${legacyModlistSections.join("\n\n")}`;

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
      rootModlist: path.join(CONFIG.gitRepoPath, "MODLIST.md"),
    };

    await Promise.all([
      writeTextToFile(paths.changelog, changelog, true),
      writeTextToFile(paths.modlist, modlist),
      writeTextToFile(paths.modChangelog, modChangelog),
      writeTextToFile(paths.rootModlist, legacyModlist),
    ]);
    console.log(CLI_ARGS.testMode ? "Test mode: Changelogs saved to files." : "Changelogs saved to files.");
  } else {
    if (CLI_ARGS.testMode) {
      console.log("=== TEST MODE RESULTS ===");
      console.log(`Comparing: ${CONFIG.oldPackVersion} -> ${CONFIG.packVersion}`);
      console.log(`Commits: ${CONFIG.cutoffCommitHash} -> ${CONFIG.referenceCommit}`);
      console.log("========================\n");
    }
    console.log(changelog, "\n---\n", modlist, "\n---\n", modChangelog);
    if (CLI_ARGS.testMode) {
      console.log("\n=== LEGACY MODLIST (MODLIST.md) ===\n", legacyModlist);
    }
  }
}

function getSortKey(metadata, useFileName = false) {
  const displayName = useFileName ? metadata.filename : metadata.name;
  // Remove common prefixes and suffixes for better sorting
  return displayName
    .toLowerCase()
    .replace(/^the\s+/i, '') // Remove "The " prefix
    .replace(/\.(jar|zip)$/i, '') // Remove file extensions
    .trim();
}

generateChangelog().catch(error => {
  console.error("An error occurred during changelog generation:\n", error);
  process.exit(1);
});
