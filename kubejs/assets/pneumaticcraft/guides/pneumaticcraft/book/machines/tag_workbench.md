---
navigation:
  title: "Tag Workbench"
  icon: "pneumaticcraft:tag_workbench"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:tag_workbench
---

# Tag Workbench

The *Tag Workbench* is used to produce *Tag Filters*, which are used to filter items by their [item tags](https://minecraft.gamepedia.com/Tag). E.g. treat all logs as the same item when filtering. Tag Filters can be placed in [Logistic Frame](../logistics/frames.md) filters, as well as [Item Filter](../programming/item_filter.md) programming widgets as used by Drones, and will match any item that has an item tag from the Tag Filter's list.

## Usage

Right-click the workbench to open its GUI.
- Insert any item in the leftmost slot; if it has any item tags, they will be displayed in the left-hand list, just below the item.
- Select one or more tags by double-clicking them (or clicking the '>' button), and they will be added to the right-hand list.
- Add some paper to the middle slot.


- Click the Book & Quill button to write the selected tags. A piece of paper will be used, and a *Tag Filter* will be produced in the right-hand slot.

The paper slot will also accept a previously-written Tag Filter; this can be useful if you want to edit the tags on an existing Tag Filter.

Crafting a Tag Workbench

<Recipe id="pneumaticcraft:tag_workbench" />

