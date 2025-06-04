import path from "node:path";
import os from "node:os";
import {
  capitalize,
  getLatestBumpCommitHash,
  getModInfo,
  writeTextToFile,
} from "./utils";
import { $, Glob } from "bun";
import packMetadata from "../../pack.toml";

const CONFIG = {
  gitRepoPath: path.resolve(import.meta.dir, "..", ".."),
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
  CONFIG.oldPackVersion ||= oldPackMetadata.version;

  if (CONFIG.oldPackVersion === CONFIG.packVersion) {
    throw new Error("You did not bump the pack version!");
  }
}

async function getCommitMetadataFiles(commitHash) {
  const folderName = `craftoria-${commitHash}-${Date.now()}`;
  const folderPath = path.join(os.tmpdir(), folderName);
  const packwizGlob = new Glob("*.pw.toml");

  await $`git archive --format=tar --output=${folderPath}.tar ${commitHash} pack.toml mods/`;
  await $`mkdir ${folderPath}`;
  await $`tar -xf ${folderPath}.tar -C ${folderPath}`;

  const scannedFiles = await Array.fromAsync(
    packwizGlob.scan({ cwd: `${folderPath}/mods`, absolute: true })
  );

  const packMetadata = require(`${folderPath}/pack.toml`);
  const modsMetadata = Object.fromEntries(
    scannedFiles
      .map(filePath => {
        const metadata = require(filePath);
        const updateInfo = getUpdateInfo(metadata);
        const projectId = updateInfo["project-id"];
        if (projectId) return [projectId, metadata];
      })
      .filter(Boolean)
  );

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

function getUpdateInfo(metadata) {
  const [updateKey] = Object.keys(metadata.update);
  return metadata.update[updateKey];
}

function formatModLink(metadata, useFileName = false, authorName) {
  const updateInfo = getUpdateInfo(metadata);
  const displayName = useFileName ? metadata.filename : metadata.name;
  return `* [${displayName}](https://curseforge.com/projects/${
    updateInfo["project-id"]
  })${
    authorName
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

function generateChangelogContent(features, fixes, addedMods, removedMods) {
  const mention = CONFIG.saveToFile ? "" : "<@&1252725960948711444>\n";
  const craftoriaEmoji = CONFIG.saveToFile ? "" : " <:craftoria:1276650441869885531>";
  const links = CONFIG.saveToFile
    ? ""
    : `\n\n### Links\n\n<:curseforge:1117579334031511634> **[Download](https://www.curseforge.com/minecraft/modpacks/craftoria/files/${CONFIG.fileId})**\n📜 **[Changelog](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/CHANGELOG.md)**`;
  const header = CONFIG.saveToFile
    ? `\n_Neoforge_ ${packMetadata.versions.neoforge} | _[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_${CONFIG.packVersion}.md)_ | _[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_${CONFIG.packVersion}.md)_`
    : "";

  const sections = [
    `${mention}#${CONFIG.saveToFile ? "" : craftoriaEmoji} Craftoria | v${
      CONFIG.packVersion
    }${craftoriaEmoji}\n${header}`,
    features.length && `\n\n### Changes/Improvements ⭐\n\n${features.join("\n")}`,
    addedMods.length && `\n\n### Added Mods ✅\n\n${addedMods.join("\n")}`,
    removedMods.length && `\n\n### Removed Mods ❌\n\n${removedMods.join("\n")}`,
    fixes.length && `\n\n### Bug Fixes 🪲\n\n${fixes.join("\n")}`,
    `${links}\n---`,
  ].filter(Boolean);

  if (sections.length < 4) sections.splice(-1, 0, "\n\n* Nothing changed");

  return sections.join("");
}

function generateModChangelog(addedMods, removedMods, changedMods, oldPackMetadata) {
  const sections = [
    `## Craftoria - ${CONFIG.oldPackVersion} -> ${CONFIG.packVersion}`,
    packMetadata.versions.neoforge !== oldPackMetadata.versions.neoforge &&
      `### NeoForge - ${oldPackMetadata.versions.neoforge} -> ${packMetadata.versions.neoforge}`,
    addedMods.length && `### Added\n${addedMods.join("\n")}`,
    removedMods.length && `### Removed\n${removedMods.join("\n")}`,
    changedMods.length && `### Updated\n${changedMods.join("\n")}`,
  ].filter(Boolean);

  return sections.join("\n\n");
}

// Main function
async function generateChangelog() {
  if (!Bun.which("git")) {
    throw new Error("Git is required but was not found on the system.");
  }

  await initializeConfig();

  $.cwd(CONFIG.gitRepoPath);

  const [oldPackMetadata, oldMods] = await getCommitMetadataFiles(
    CONFIG.cutoffCommitHash
  );
  const [, currentMods] = await getCommitMetadataFiles(CONFIG.referenceCommit);
  const { newMods, removedMods, updatedMods } = compareModCollections(
    oldMods,
    currentMods
  );

  const addedLinks = Object.values(newMods)
    .map(metadata => formatModLink(metadata))
    .sort();
  const removedLinks = Object.values(removedMods)
    .map(metadata => formatModLink(metadata))
    .sort();
  const changedLinks = Object.keys(updatedMods)
    .map(id => formatUpdateLink(id, oldMods, currentMods))
    .sort();

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
  console.error("An error occurred during changelog generation:", error);
  process.exit(1);
});
