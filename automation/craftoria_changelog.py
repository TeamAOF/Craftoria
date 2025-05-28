import os
import re
import json
import subprocess
from pathlib import Path
from datetime import datetime
import requests

# ---------------------- CONFIG ----------------------
GIT_REPO_PATH = Path(r'C:\Users\antho\curseforge\minecraft\Instances\Craftoria-Dev')
PACK_VER = '1.21.1'
OLD_PACK_VER = '1.21.0'
FILE_ID = "/123456"

NAMES_LOOKUP = {
    'WhitePhant0m': 'Phantom',
    'Kazuhiko-Gushiken': 'Inno',
    'ImAK': 'AK',
    'Dietrich Friday': 'Blue'
}

BRANCH_NAME = 'main'
USE_CUTOFF_HASH = False
CUTOFF_DATE = datetime(2025, 5, 1).strftime('%Y-%m-%d')
CUTOFF_COMMIT_HASH = None # Set this to the last commit hash you want to consider

FEAT_WHITELIST = ['add', 'implement', 'feature', 'feat', 'chapter']
FIX_WHITELIST = ['fix', 'bug', 'resolve', 'patch']
GENERAL_BLACKLIST = ['vscode', 'config', 'sure', 'revert', 'lab', 'dev', 'nope', 'nuh', 'eslint', 'prettier', 'prettify']

SAVE_ON_FILE = True
CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / 'CHANGELOG.md'
MODLIST_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'modlist_{PACK_VER}.md'
MODLIST_CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'changelog_mods_{PACK_VER}.md'
INSTANCE_PATH = GIT_REPO_PATH / 'minecraftinstance.json'

USE_GITHUB_INSTANCE = True
OLD_INSTANCE_PATH = Path(r'C:\Users\antho\curseforge\minecraft\Instances\Craftoria\minecraftinstance.json')
# ----------------------------------------------------

# Load JSON data
new_inst = json.loads(INSTANCE_PATH.read_text(encoding='utf-8', errors='ignore'))
old_inst = (
    requests.get(f"https://raw.githubusercontent.com/TeamAOF/Craftoria/refs/heads/{BRANCH_NAME}/minecraftinstance.json").json()
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

print(f"Added Mods: {len(added_ids)}")
print(f"Removed Mods: {len(removed_ids)}")
print(f"Common Mods: {len(common_ids)}")

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

print(f"Git found at: {git_path}")

if not USE_CUTOFF_HASH: git_args = [git_path, 'log', f'--since={CUTOFF_DATE}', '--pretty=format:%s `%an`', BRANCH_NAME]
else: git_args = [git_path, 'log', f'{CUTOFF_COMMIT_HASH}..{BRANCH_NAME}', '--pretty=format:%s `%an`']

result = subprocess.run(git_args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, cwd=GIT_REPO_PATH)
if result.stderr:
    print('Error:', result.stderr)
    exit(1)

raw_commits = result.stdout.splitlines()

# Remove reverted commits
raw_commits_copy = raw_commits[:]
for commit in raw_commits_copy:
    if commit.startswith('Revert'):
        reverted = commit.removeprefix('Revert ').replace('"','').strip()
        print(f'Reverted commit: {reverted}')
        
        cleaned = reverted
        for gitname, name in NAMES_LOOKUP.items():
            cleaned = cleaned.replace(gitname, name)

        if reverted in raw_commits:
            raw_commits.remove(reverted)
        elif cleaned in raw_commits:
            raw_commits.remove(cleaned)
        else:
            print(f"Couldn't remove: '{reverted}' or '{cleaned}'")

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
        
        fixes.append(f'* Fixed {cleaned[0].lower() + cleaned[1:]}')

# Format output
mention = "<@&1252725960948711444>" if not SAVE_ON_FILE else ""
craftoria = " <:craftoria:1276650441869885531>" if not SAVE_ON_FILE else ""
links = (f'\n\n### Links\n\n<:curseforge:1117579334031511634> **[Download](https://www.curseforge.com/minecraft/modpacks/craftoria/files{FILE_ID})**\n'
         '📜 **[Changelog](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/CHANGELOG.md)**\n') if not SAVE_ON_FILE else ""

header = (f"\n_{' '.join(new_inst['baseModLoader']['name'].split('-')).title()}_ | "
          f"_[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_{PACK_VER}.md)_ | "
          f"_[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_{PACK_VER}.md)_\n") if SAVE_ON_FILE else ""

new_mods_section = "\n### Added Mods ✅\n\n" + ("\n".join(added_modlinks_formatted) or '* No new mods') if added_ids else ''
rm_mods_section = "\n### Removed Mods ❌\n\n" + ("\n".join(removed_modlinks_formatted) or '* No removed mods') if removed_ids else ''

changelog = f'''{mention}
#%s Craftoria | v{PACK_VER}{craftoria}
{header}
### Changes/Improvements ⭐

{('\n'.join(features) or '* No new features')}
{new_mods_section}
{rm_mods_section}

### Bug Fixes 🪲

{('\n'.join(fixes) or '* No bug fixes')}
{links}'''.replace('#%s', '#' + craftoria)

modlist = f'''# Craftoria - v{PACK_VER}

{('\n'.join(modlist_formatted) or '* No new mods')}'''

mod_changelog = f'''## Craftoria - {OLD_PACK_VER} -> {PACK_VER}

### neoforge - {old_inst['baseModLoader']['name'].split('-')[1]} -> {new_inst['baseModLoader']['name'].split('-')[1]}

### Added
{('\n'.join(added_modlist_formatted) or '* No new mods')}

### Removed
{('\n'.join(removed_modlist_formatted) or '* No removed mods')}

### Updated
{('\n'.join(common_modlist_formatted) or '* No updated mods')}'''

# Save or print

def save_on_file(file_path: Path, content, append: bool = True):
    file_path.parent.mkdir(parents=True, exist_ok=True)
    if append:
        existing = file_path.read_text(encoding='utf-8') if file_path.exists() else ""
        file_path.write_text(content + "\n" + existing, encoding='utf-8')
    else:
        file_path.write_text(content, encoding='utf-8')

if SAVE_ON_FILE:
    save_on_file(CHANGELOG_FILE_PATH, changelog)
    save_on_file(MODLIST_FILE_PATH, modlist, False)
    save_on_file(MODLIST_CHANGELOG_FILE_PATH, mod_changelog, False)
else:
    print(changelog, "\n---\n", modlist, "\n---\n", mod_changelog)
