# Craftoria Scripts

Various automation scripts for Craftoria that run on the Bun runtine.

No `node_modules` required, no npm needed, no packages to install - the scripts just work.

## Requirements

- [Bun](https://bun.sh/) - an all-in-one JavaScript runtime & toolkit designed for speed
- Git repository with conventional commits
- Packwiz-managed modpack structure

## Features

- **Packwiz Integration**: Full compatibility with Packwiz mod management
- **Auto Cutoff Detection**: Finds the last version bump commit or release tag automatically
- **Mod Author Display**: Fetches and shows mod author names
- **Conventional Commits**: Enforces commit standards for better organization

## Usage

### generate-changelog.js

This script generates a changelog from commits using conventional commit format. Each commit **must** include a type, optional scope, and description (after the colon). The description **must** start with a verb.

Only `feat` and `fix` commits appear in the changelog. To exclude a commit, use `dev` or `dx` scope.

#### Links:

- [Conventional Commits 1.0.0 Spec](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

**Bad:** `feat(quests): mycelial reactor quest` - noun phrase reads like a static item

**Good:** `feat(quests): add mycelial reactor quest` - imperative verb shows action taken

**Important:** Bump pack version in [`pack.toml`](../../pack.toml) first, or the script will warn you.

Run inside a git repository so it can detect your uncommitted `pack.toml` changes:

```bash
bun run scripts/generate-changelog.js
```

The script auto-detects the last version bump, analyzes changes, processes mod updates, and generates formatted output. No editing is required.

## Configuration

### bunfig.toml

Optional `bunfig.toml` can be used for Bun-specific configuration. Scripts read from Packwiz metadata TOML files automatically, thanks to Bun's built-in TOML parser.
