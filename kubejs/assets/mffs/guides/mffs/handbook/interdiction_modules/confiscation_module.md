---
navigation:
  title: "Confiscation Module"
  icon: "mffs:confiscation_module"
  parent: mffs:interdiction_modules.md
item_ids:
  - mffs:confiscation_module
---

# Confiscation Module

<ItemImage id="mffs:confiscation_module" />

The <Color id="dark_purple">Confiscation Module</Color> is an optional module for the [Interdiction Matrix](../interdiction_matrix.md) that gives it the ability to automatically take items away from a player. If a player is in the action area of an Interdiction Matrix, it will scan the player's inventory and seize any forbidden items found. This applies to all items regardless of whether they are being carried, worn, or stored in inventory.

Crafting the <Color id="dark_purple">Confiscation Module</Color>.

<Recipe id="mffs:confiscation_module" />

## Filter Mode

The Filter Mode setting and 9 associated slots that run along the bottom of the [Interdiction Matrix](../interdiction_matrix.md)'s GUI are used to configure the module's behavior. The Filter Mode setting has two states: Banned (default) and Allowed.

Confiscated items are collected to inventories adjacent to the [Interdiction Matrix](../interdiction_matrix.md).

## Banned

When the toggle button reads 'Banned', the [Interdiction Matrix](../interdiction_matrix.md) treats the 9 (red) slots as a list of forbidden items that must be confiscated. Only these items will be seized, the player will be permitted to keep any other items they have. If all 9 item slots are empty, the Matrix assumes every item must be confiscated from a player.

## Allowed

If the toggle button reads 'Allowed', the Matrix treats the 9 (green) slots as a list of items the player is allowed to keep. Any other item will be confiscated. When all 9 slots are empty, the [Interdiction Matrix](../interdiction_matrix.md) assumes all items are permitted and will not confiscate anything.

