---
navigation:
  title: "Smart Chest"
  icon: "pneumaticcraft:smart_chest"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:smart_chest
---

# Smart Chest

The *Smart Chest* is a 72-slot chest which (like its little brother the [Reinforced Chest](./reinforced_chest.md)) has obsidian-level blast resistance, and keeps its inventory when broken. However, it has some other very powerful features...

## Slot Filtering


- If you *Alt+Left-click* a slot with an item in it, the Smart Chest will start filtering that slot to only accept that item.
- You can *Alt+Left-click* a filtered slot to remove the filtering again.
- If you *Alt+Left-click* an empty slot, that slot and all subsequent slots will be closed, effectively reducing the inventory size.
- If you *Alt+Left-click* the first closed slot, all closed slots will be reopened.

## Pushing Items

Each face of the Smart Chest can be separately configured to push items, pull items or do nothing (the default). To configure faces, open the *Side Configuration* GUI tab.

Faces configured to push items will try to send items from the Smart Chest to an adjacent inventory on that face.  With a *Dispenser Upgrade* installed, the chest will eject items into the world if there is no adjacent inventory.

## Pulling Items

Faces configured to pull items will try to pull items from an adjacent inventory on that face.

If you install a [Magnet Upgrade](../upgrades.md#magnet), the chest can absorb nearby items on the ground. This only works for faces that have been configured to pull items; the default pickup area is a 3x3x3 cube adjacent to the pulling face, which can be increased with [Range Upgrades](../upgrades.md#range).

Crafting a Smart Chest

<Recipe id="pneumaticcraft:smart_chest" />

