import os
import re
import json
import subprocess
import logging
from pathlib import Path
from datetime import datetime
from urllib.request import urlopen

def get_cwd():
    p = Path(__file__).resolve().parent
    for parent in [p, *p.parents]:
        if (parent / 'minecraftinstance.json').exists():
            return parent

# ---------------------- CONFIG ----------------------
CWD = get_cwd()
GIT_REPO_PATH = CWD # Replace with `Path("<repo_path>)` if needed
PACK_VER = '1.21.3'
OLD_PACK_VER = '1.21.2'
FILE_ID = "/123456"

NAMES_LOOKUP = {
    'WhitePhant0m': 'Phantom',
    'Kazuhiko-Gushiken': 'Inno',
    'ImAK': 'AK',
    'Dietrich Friday': 'SubordinalBlue'
}

BRANCH_NAME = 'main'
USE_CUTOFF_HASH = True
CUTOFF_DATE = datetime(2025, 5, 1).strftime('%Y-%m-%d')
CUTOFF_COMMIT_HASH = None # Leave empty for auto-search
SEARCH_DEPTH = 100

FEAT_WHITELIST = ['add', 'implement', 'feature', 'feat', 'chapter']
FIX_WHITELIST = ['fix', 'bug', 'resolve', 'patch']
GENERAL_BLACKLIST = ['refactor', 'debug', 'vscode', 'config', 'sure', 'revert', 'lab', 'dev', 'nope', 'nuh', 'eslint', 'prettier', 'prettify']

SAVE_ON_FILE = True
CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / 'CHANGELOG.md'
MODLIST_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'modlist_{PACK_VER}.md'
MODLIST_CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'changelog_mods_{PACK_VER}.md'
INSTANCE_PATH = GIT_REPO_PATH / 'minecraftinstance.json'

USE_GITHUB_INSTANCE = True
OLD_INSTANCE_PATH = Path(r'C:\Users\antho\curseforge\minecraft\Instances\Craftoria\minecraftinstance.json')
# ----------------------------------------------------

# Load LOGGER
logging.basicConfig(format='[%(asctime)s] [%(levelname)s] %(message)s', datefmt='%H:%M:%S', level=logging.INFO)
logger = logging.getLogger(__name__)

# Load JSON data
new_inst = json.loads(INSTANCE_PATH.read_text(encoding='utf-8', errors='ignore'))
old_inst = (
    json.loads(urlopen(f"https://raw.githubusercontent.com/TeamAOF/Craftoria/refs/heads/{BRANCH_NAME}/minecraftinstance.json").read())
    if USE_GITHUB_INSTANCE
    else json.loads(OLD_INSTANCE_PATH.read_text(encoding='utf-8', errors='ignore'))
)

# Helper: Filter mods
filter_mods = lambda inst: {
    a['addonID']: a for a in inst.get('installedAddons', []) if a.get('gameID') == 432
}

new_mods_map = filter_mods(new_inst)
old_mods_map = filter_mods(old_inst)
new_ids, old_ids = set(new_mods_map), set(old_mods_map)

added_ids = new_ids - old_ids
removed_ids = old_ids - new_ids
common_ids = new_ids & old_ids

logger.info(f"Added Mods: {len(added_ids)}")
logger.info(f"Removed Mods: {len(removed_ids)}")
logger.info(f"Common Mods: {len(common_ids)}")

# Format mod links
format_link = lambda m: f"* [{re.sub(r"[\'~`*\"]", "", m['name'])}]({m['webSiteURL']})"
format_mod = lambda m: f"* [{re.sub(r"[\'~`*\"]", "", m['name'])}]({m['webSiteURL']}) - (by [{m['primaryAuthor']}](https://www.curseforge.com/members/{m['primaryAuthor']}/projects))"

added_modlinks_formatted = [format_link(new_mods_map[i]) for i in added_ids]
removed_modlinks_formatted = [format_link(old_mods_map[i]) for i in removed_ids]


def format_common_link(i):
    new_mod, old_mod = new_mods_map[i], old_mods_map[i]
    new_file, old_file = new_mod['installedFile'], old_mod['installedFile']
    if new_file['id'] != old_file['id']:
        return f"* [{old_file['fileName']}]({old_mod['webSiteURL']}/files/{old_file['id']}) -> [{new_file['fileName']}]({new_mod['webSiteURL']}/files/{new_file['id']})"

modlist_formatted = [format_mod(new_mods_map[i]) for i in new_ids]

added_modlist_formatted = [format_mod(new_mods_map[i]) for i in added_ids]
removed_modlist_formatted = [format_mod(old_mods_map[i]) for i in removed_ids]
common_modlist_formatted = list(filter(None, [format_common_link(i) for i in common_ids]))

# Sort everything

added_modlist_formatted.sort()
removed_modlist_formatted.sort()
common_modlist_formatted.sort()

modlist_formatted.sort()

added_modlinks_formatted.sort()
removed_modlinks_formatted.sort()

# Get commits

def better_which(cmd):
    paths = os.environ.get("PATH", "").split(os.pathsep)
    exts = os.environ.get("PATHEXT", "").split(os.pathsep) if os.name == "nt" else [""]

    for dir_path in paths:
        for ext in exts:
            full_path = Path(dir_path) / (cmd + ext)
            if full_path.is_file() and os.access(full_path, os.X_OK):
                return str(full_path)
    return None

git_path = better_which('git')
if not git_path:
    raise SyntaxError("Git not found, install it and add it to your PATH")
if not GIT_REPO_PATH.exists():
    raise FileNotFoundError(f"Repo path doesn't exist: {GIT_REPO_PATH}")

logger.info(f"Git found at: {git_path}")

def exec_command(args: list):
    result = subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, cwd=GIT_REPO_PATH)
    if result.stderr:
        logger.error('Error during the execution of a command:', result.stderr)
        logger.error('Exiting...')
        exit(1)
    return result.stdout

# Obtaining last release commit hash

if USE_CUTOFF_HASH and CUTOFF_COMMIT_HASH == None:
    logger.info('Starting search for last release tag...')
    search_args = ['git', 'log', f'--max-count={SEARCH_DEPTH}', '--pretty=format:%H|%s', BRANCH_NAME]
    commits = exec_command(search_args).splitlines()
    version_bump_regex = re.compile(r'version bump \d+\.\d+(?:\.\d+)?$')
    for commit in commits:
        commit_hash, commit_message = commit.split('|')
        try:
            tag = subprocess.check_output(['git', 'describe', '--tags', '--exact-match', commit_hash], stderr=subprocess.DEVNULL, text=True, cwd=GIT_REPO_PATH).strip()
            logger.info(f'Found tag "{tag}" on commit {commit_hash}')
            CUTOFF_COMMIT_HASH = commit_hash
            break
        except subprocess.CalledProcessError:
            logger.debug(f'Commit "{commit_hash}" did not have a tag')
            logger.debug('Checking for version bump commit message...')
            if version_bump_regex.search(commit_message):
                logger.info(f'Found version bump commit {commit_hash}')
                CUTOFF_COMMIT_HASH = commit_hash
            pass

# Get all commits since a date or a commit hash 

if not USE_CUTOFF_HASH: git_args = [git_path, 'log', f'--since={CUTOFF_DATE}', '--pretty=format:%s `%an`', BRANCH_NAME]
else: git_args = [git_path, 'log', f'{CUTOFF_COMMIT_HASH}..{BRANCH_NAME}', '--pretty=format:%s `%an`']

raw_commits = exec_command(git_args).splitlines()

# Remove reverted commits
raw_commits_copy = raw_commits[:]
for commit in raw_commits_copy:
    if commit.startswith('Revert'):
        reverted = commit.removeprefix('Revert ').replace('"','').strip()
        logger.info(f'Reverted commit: {reverted}')
        
        cleaned = reverted
        for gitname, name in NAMES_LOOKUP.items():
            cleaned = cleaned.replace(gitname, name)

        if reverted in raw_commits:
            raw_commits.remove(reverted)
        elif cleaned in raw_commits:
            raw_commits.remove(cleaned)
        else:
            logger.warning(f"Couldn't remove: '{reverted}' or '{cleaned}'")

# Filter commits

features, fixes = [], []

for msg in raw_commits:
    lower_msg = msg.lower()
    if any(w in lower_msg for w in FEAT_WHITELIST) and not any(w in lower_msg for w in GENERAL_BLACKLIST):
        cleaned = re.sub(r'^(feat:|feature:|added:|implement(ed)?:)?', '', msg, flags=re.IGNORECASE).strip()
        for gitname, name in NAMES_LOOKUP.items(): cleaned = cleaned.replace(gitname, name)
        features.append(f'* {cleaned[0].upper() + cleaned[1:]}')
    elif any(w in lower_msg for w in FIX_WHITELIST) and not any(w in lower_msg for w in GENERAL_BLACKLIST):
        cleaned = re.sub(r'^(fix:|bugfix:|bug:|resolved:|patch:)?', '', msg, flags=re.IGNORECASE).strip()
        for gitname, name in NAMES_LOOKUP.items(): cleaned = cleaned.replace(gitname, name)
        fixes.append(f'* {cleaned[0].lower() + cleaned[1:]}')

# Format output
mention = "" if SAVE_ON_FILE else "<@&1252725960948711444>"
craftoria = "" if SAVE_ON_FILE else " <:craftoria:1276650441869885531>"

if SAVE_ON_FILE:
    links = ""
    header = (
        f"\n_{' '.join(new_inst['baseModLoader']['name'].split('-')).title()}_ | "
        f"_[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_{PACK_VER}.md)_ | "
        f"_[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_{PACK_VER}.md)_"
    )
else:
    links = (
        f"\n### Links\n\n"
        f"<:curseforge:1117579334031511634> **[Download](https://www.curseforge.com/minecraft/modpacks/craftoria/files{FILE_ID})**\n"
        f"📜 **[Changelog](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/CHANGELOG.md)**"
    )
    header = ""

new_mods_section = ""
if added_ids:
    new_mods_section = "\n### Added Mods ✅\n\n" + "\n".join(added_modlinks_formatted)

rm_mods_section = ""
if removed_ids:
    rm_mods_section = "\n### Removed Mods ❌\n\n" + "\n".join(removed_modlinks_formatted)

## Format changelog

changelog = [
    mention,
    f"# {craftoria} Craftoria | v{PACK_VER}{craftoria}",
    header,
]

if features: changelog.append(f"\n### Changes/Improvements ⭐\n\n{'\n'.join(features)}")

if new_mods_section: changelog.append(new_mods_section)
if rm_mods_section: changelog.append(rm_mods_section)

if fixes: changelog.append(f"\n### Bug Fixes 🪲\n\n{'\n'.join(fixes)}")

if links: changelog.append(links)

## Format modlist

modlist = [
    f'# Craftoria - v{PACK_VER}',
    f'\n\n{('\n'.join(modlist_formatted) or '* No new mods')}'
]

## Format Mod Changelog

mod_changelog = [
    f'## Craftoria - {OLD_PACK_VER} -> {PACK_VER}',
    f'\n\n### neoforge - {old_inst['baseModLoader']['name'].split('-')[1]} -> {new_inst['baseModLoader']['name'].split('-')[1]}',
    f'\n### Added\n\n{('\n'.join(added_modlist_formatted) or '* No new mods')}',
    f'\n### Removed\n\n{('\n'.join(removed_modlist_formatted) or '* No removed mods')}',
    f'\n### Updated{('\n'.join(common_modlist_formatted) or '* No updated mods')}'
]

# Save or print

def convert_to_multiline(lines: list):
    output = ''
    for n, line in enumerate(lines): 
        output += f'\n{line}' if n > 1 else line
    return output

def save_on_file(file_path: Path, content, append: bool = True):
    file_path.parent.mkdir(parents=True, exist_ok=True)
    if append:
        if file_path.read_text(encoding='utf-8').splitlines()[0] != '': content += '\n'
        existing = file_path.read_text(encoding='utf-8') if file_path.exists() else ""
        file_path.write_text(content + "\n" + existing, encoding='utf-8')
    else:
        file_path.write_text(content, encoding='utf-8')

if SAVE_ON_FILE:
    logger.info('Saving on file...')
    save_on_file(CHANGELOG_FILE_PATH, convert_to_multiline(changelog))
    save_on_file(MODLIST_FILE_PATH, convert_to_multiline(modlist), False)
    save_on_file(MODLIST_CHANGELOG_FILE_PATH, convert_to_multiline(mod_changelog), False)
else:
    print(convert_to_multiline(changelog))
