---
navigation:
  title: "Breaker Module"
  icon: "modularrouters:breaker_module"
  parent: modularrouters:modules.md
---

# Breaker Module

This module tries to break a block, adjacent to the [Router](../router/item_router.md) in the module's [configured direction](../intro/modules.md#direction).

Most blocks are breakable, although anything with an unbreakable hardness (e.g. vanilla *Bedrock* or *End Portal*) can not be broken, nor can any fluid blocks. If the block is broken, its primary drop(s) will be automatically inserted into the item router's buffer, if possible.

The Breaker Module can be crafted with any type of pickaxe (including modded pickaxes), but the pickaxe used to craft the module determines its harvest level.  E.g. if you create a Breaker Module with an *Iron Pickaxe*, it will not be able to break *Obsidian*.

Additionally, any *enchantments* on the pickaxe used will be noted in the module (*Silk Touch* and *Fortune* are of particular use).

By default the Breaker Module filter works on *items that would be dropped*, rather than on the block itself. E.g. filtering on *Stone* would not work to break Stone, unless the module has *Silk Touch* enabled. In this case, you should filter on *Cobblestone*.

You can set the module to match by the *block* via the module GUI; this can be useful to distinguish between blocks that both drop nothing, e.g. *Ice* and *Packed Ice*.



<Recipe id="modularrouters:breaker_module" />

