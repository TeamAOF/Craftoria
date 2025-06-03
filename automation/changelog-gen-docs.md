# Craftoria Changelog Script Documentation

This document explains how to set up, configure, and run the `craftoria_changelog.py` script. It is intended for users with minimal Python experience. Follow each section in order.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [File Placement](#file-placement)
3. [Configuration](#configuration)
4. [Running the Script](#running-the-script)
5. [Troubleshooting](#troubleshooting)
6. [Frequently Asked Questions](#frequently-asked-questions)

---

## Prerequisites

Before using the script, ensure the following are installed and accessible from your command line:

1. **Python 3.x**

   * Download and install from [python.org](https://www.python.org/downloads/).
   * Verify installation by running:

     ```bash
     python --version
     ```

   * If your system uses `python3` instead of `python`, replace commands accordingly.

2. **Git**

   * Install Git from [git-scm.com](https://git-scm.com/downloads).
   * Verify by running:

     ```bash
     git --version
     ```

3. **Local Repository Clone**

   * You must have a local clone of your modpack repository.
   * The file `minecraftinstance.json` must be located in the repository root or be accessible via GitHub.

---

## File Placement

Place `craftoria_changelog.py` in the root directory of your modpack repository. The structure should look like this:

```bash
/path/to/your-repo/
├─ <anywhere_in_repo>/craftoria_changelog.py
├─ minecraftinstance.json
├─ changelogs/
...
```

* **Root Directory**: Same folder where `minecraftinstance.json` resides.
* **changelogs/**: If this folder does not exist, the script will create it if `SAVE_ON_FILE` is `True`.

---

## Configuration

All script behavior is controlled by variables defined in a configuration block at the top of `craftoria_changelog.py`. You do **not** need to modify the script’s logic—only update these values to match your project’s setup.

### Configuration Variables

Edit these values before running the script:

* `PACK_VER`: The version of your current pack.
* `OLD_PACK_VER`: The previous pack version to compare against.
* `FILE_ID`: (Optional) Curseforge file ID.
* `NAMES_LOOKUP`: Maps Git usernames to display names.
* `BRANCH_NAME`: Git branch to compare against.
* `USE_CUTOFF_HASH`: Whether to use commit hash instead of date. (Leave empty for auto-search of last release)
* `FEAT_WHITELIST` / `FIX_WHITELIST`: Commit keywords for classification.
* `GENERAL_BLACKLIST`: Commit keywords to exclude.
* `SAVE_ON_FILE`: If `True`, changelogs are written to disk.
* `INSTANCE_PATH`: Path to your current `minecraftinstance.json`.
* `USE_GITHUB_INSTANCE`: Toggle between GitHub and local old instance.
* `OLD_INSTANCE_PATH`: Path to old `minecraftinstance.json` (if local).

---

## Running the Script

1. Open a terminal in the directory containing `craftoria_changelog.py`.
2. Run the script:

    ```bash
    python craftoria_changelog.py
    ```

3. Check the console output for status messages.
4. If `SAVE_ON_FILE` is `True`, changelogs will be written to the `changelogs/` directory.

---

## Troubleshooting

**File Not Found: `minecraftinstance.json`**

* Ensure the file exists at `INSTANCE_PATH`.

**Git Not Found**

* Make sure Git is installed and accessible via terminal.

**Permission Denied Writing Files**

* Ensure your user has write access to the repository directory.

**Missing Output Directory**

* Create `changelogs/` manually if it fails to auto-create.

---

## Frequently Asked Questions

**Do I need extra Python libraries?**
No. The script only uses built-in Python modules.

**Can I compare against a local instance?**
Yes. Set `USE_GITHUB_INSTANCE = False` and provide `OLD_INSTANCE_PATH`.

**Can I customize which commits are shown?**
Yes. Modify the whitelist and blacklist keywords to fit your team's commit message conventions.

**How are authors renamed?**
Use the `NAMES_LOOKUP` dictionary to map Git usernames to display names.

---

## TL;DR

1. Place the script anywhere in the repo.
2. Edit config variables to match your setup.
3. Run the script.
4. Review or distribute the generated changelog and modlist files.
