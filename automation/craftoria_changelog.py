import subprocess
from datetime import datetime
import re
import json
import requests
import shutil
from pathlib import Path

# -------------- CONFIGS ----------------
GIT_REPO_PATH = Path(r'C:\Users\antho\curseforge\minecraft\Instances\Craftoria-Dev')  # Change this to your local git repo path
PACK_VER = '1.21.1' # Change this to your pack version
OLD_PACK_VER = '1.21.0' # Change this to your old pack version, used for modlist changelog
FILE_ID = "/123456"  # Can be empty

NAMES_LOOKUP = {
    'WhitePhant0m': 'Phantom', # Use the name you want to show in the changelog
    'Kazuhiko-Gushiken': 'Inno',
    'ImAK': 'AK',
    'Dietrich Friday': 'SubordinalBlue'
}

BRANCH_NAME = 'main'
CUTOFF_DATE = datetime(2025, 5, 1).strftime('%Y-%m-%d') # Change this to your cutoff date for commits

SAVE_ON_FILE = True # Set to False if you want to print the changelog instead of saving it on a file
CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / 'CHANGELOG.md' # Change this to your desired file path
MODLIST_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'modlist_{PACK_VER}.md' # Change this to your desired modlist file path
MODLIST_CHANGELOG_FILE_PATH = GIT_REPO_PATH / 'changelogs' / f'changelog_mods_{PACK_VER}.md' # Change this to your desired modlist changelog file path
INSTANCE_PATH = GIT_REPO_PATH / 'minecraftinstance.json' # Leave this as is, it will be used to fetch the new mod list and neoforge version

USE_GITHUB_INSTANCE = False
OLD_INSTANCE_PATH = Path(r'C:\Users\antho\curseforge\minecraft\Instances\Craftoria\minecraftinstance.json')

GIT_PATH = shutil.which("git")
# ---------------------------------------

# Load json data
new_inst = json.loads(INSTANCE_PATH.read_text(encoding='utf-8', errors='ignore'))

if USE_GITHUB_INSTANCE:
    old_inst = requests.get(
        f"https://raw.githubusercontent.com/TeamAOF/Craftoria/refs/heads/{BRANCH_NAME}/minecraftinstance.json"
    ).json()
else:
    old_inst = json.loads(OLD_INSTANCE_PATH.read_text(encoding='utf-8', errors='ignore'))

# Determine added and removed addons
filter_mods = lambda inst: {a['addonID']: a for a in inst.get('installedAddons', []) if a.get('gameID') == 432}
new_mods_map = filter_mods(new_inst)
old_mods_map = filter_mods(old_inst)

new_ids, old_ids = set(new_mods_map), set(old_mods_map)

# Calculate added and removed mods
added_ids = new_ids - old_ids
removed_ids = old_ids - new_ids
common_ids = new_ids & old_ids

print(f"Added Mods: {len(added_ids)}")
print(f"Removed Mods: {len(removed_ids)}")
print(f"Common Mods: {len(common_ids)}")

# Format mod links
format_link = lambda m: f"[{m['name']}]({m['webSiteURL']})"
added_mods_formatted = [format_link(new_mods_map[i]) for i in added_ids]
removed_mods_formatted = [format_link(old_mods_map[i]) for i in removed_ids]

def format_common_link(i):
    new_mod, old_mod = new_mods_map[i], old_mods_map[i]
    new_mod_file, old_mod_file = new_mod['installedFile'], old_mod['installedFile']
    if new_mod_file['id'] != old_mod_file['id']:
        return f"* [{old_mod_file['fileName']}]({old_mod['webSiteURL'] + '/files/' + str(old_mod_file['id'])}) -> [{new_mod_file['fileName']}]({new_mod['webSiteURL'] + '/files/' + str(new_mod_file['id'])})"

common_mods_formatted = [format_common_link(i) for i in common_ids]

# Fetch git commits since the cutoff date
git_args = [
    GIT_PATH, 'log', f'--since={CUTOFF_DATE}', '--pretty=format:%s `%an`', BRANCH_NAME
]

if not GIT_REPO_PATH.exists(): raise FileNotFoundError(f"Repo path doesn't exist: {GIT_REPO_PATH}")
if GIT_PATH is not None: print(f"Git found at: {shutil.which("git")}")
else:
    raise SyntaxError("Git not found, please install git and add it to your PATH")

result = subprocess.run(
    git_args,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True,
    cwd=GIT_REPO_PATH
)

if result.stderr:
    print('Error:', result.stderr)
    exit(1)

raw_commits = result.stdout.splitlines()

features, fixes = [], []

for msg in raw_commits:
    lower_msg = msg.lower()

    # Filter commit messages as much as possible, PLEASE use semantic commits

    if any(word in lower_msg for word in ['add', 'implement', 'feature', 'feat', 'chapter']) and not any(word in lower_msg for word in ['vscode', 'config', 'sure', 'revert', 'lab', 'dev', 'nope', 'nuh']):
        cleaned = re.sub(r'^(feat:|feature:|added:|implement(ed)?:)?', '', msg, flags=re.IGNORECASE).strip()
        for gitname, name in NAMES_LOOKUP.items(): cleaned = cleaned.replace(gitname, name)
        features.append(f'* {cleaned[0].upper() + cleaned[1:]}')

    elif any(word in lower_msg for word in ['fix', 'bug', 'resolve', 'patch']) and not any(word in lower_msg for word in ['vscode', 'config', 'sure', 'revert', 'lab', 'dev', 'nope', 'nuh']):
        cleaned = re.sub(r'^(fix:|bugfix:|bug:|resolved:|patch:)?', '', msg, flags=re.IGNORECASE).strip()
        for gitname, name in NAMES_LOOKUP.items(): cleaned = cleaned.replace(gitname, name)
        fixes.append(f'* Fixed {cleaned[0].lower() + cleaned[1:]}')

# Emojis, Roles and Links
mention = "<@&1252725960948711444>" if not SAVE_ON_FILE else ""
craftoria = " <:craftoria:1276650441869885531>" if not SAVE_ON_FILE else ""
links = ('\n\n### Links\n\n<:curseforge:1117579334031511634> '
         f"**[Download](https://www.curseforge.com/minecraft/modpacks/craftoria/files{FILE_ID})**\n"
         "📜 **[Changelog](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/CHANGELOG.md)**\n") if not SAVE_ON_FILE else ""

header = (f"\n_{' '.join(new_inst['baseModLoader']['name'].split('-')).title()}_ | "
          f"_[Mod Updates](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/changelog_mods_{PACK_VER}.md)_ | "
          f"_[Modlist](https://github.com/TeamAOF/Craftoria/blob/main/changelogs/modlist_{PACK_VER}.md)_\n") if SAVE_ON_FILE else ""

# Format Added and Removed Mods sections
new_mods_section = ("### Added Mods ✅\n\n" + ("\n".join(added_mods_formatted) or '* No new mods')) if added_ids else ''
rm_mods_section = ("### Removed Mods ❌\n\n" + ("\n".join(removed_mods_formatted) or '* No removed mods')) if removed_ids else ''

# Format Changelog
changelog = f'''{mention}
#%s Craftoria | v{PACK_VER}{craftoria}
{header}
### Changes/Improvements ⭐

{('\n'.join(features) or '* No new features')}
{"\n" + new_mods_section}
{"\n" + rm_mods_section}

### Bug Fixes 🪲

{('\n'.join(fixes) or '* No bug fixes')}
{links}'''.replace('#%s', '#'+craftoria)

# Modlist formatting
format_mod = lambda m: f"* [{m['name']}]({m['webSiteURL']}) - (by [{m['primaryAuthor']}](https://www.curseforge.com/members/{m['primaryAuthor']}/projects))"
modlist = f'''# Craftoria - v{PACK_VER}

{('\n'.join([format_mod(new_mods_map[i]) for i in new_ids]) or '* No new mods')}
'''

# Modlist Changelog formatting
mod_changelog = f'''## Craftoria - {OLD_PACK_VER} -> {PACK_VER}

### neoforge - {old_inst['baseModLoader']['name'].split('-')[1]} -> {new_inst['baseModLoader']['name'].split('-')[1]}

### Added
{('\n'.join([format_mod(new_mods_map[i]) for i in added_ids]) or '* No new mods')}

### Removed
{('\n'.join([format_mod(old_mods_map[i]) for i in removed_ids]) or '* No removed mods')}

### Updated
{('\n'.join(filter(None, [format_common_link(i) for i in common_ids])) or '* No updated mods')}'''

# Print or Save on file
def save_on_file(file_path, lines):
    file_path.parent.mkdir(parents=True, exist_ok=True)
    
    if file_path.exists():existing = file_path.read_text(encoding='utf-8')
    else:existing = ""

    file_path.write_text(lines + "\n" + existing, encoding='utf-8')

if SAVE_ON_FILE:
    save_on_file(CHANGELOG_FILE_PATH, changelog)
    save_on_file(MODLIST_FILE_PATH, modlist)
    save_on_file(MODLIST_CHANGELOG_FILE_PATH, mod_changelog)
else:
    print(changelog)
    print("\n---\n")
    print(modlist)
    print("\n---\n")
    print(mod_changelog)
