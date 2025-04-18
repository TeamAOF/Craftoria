---
navigation:
  title: "Player Module"
  icon: "modularrouters:player_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:player_module
---

# Player Module

This module tries to transfer items between the router and a player's own inventory. The player can be anywhere in any dimension, making this a rather powerful module.

The module can transfer items either from or to the player; you can set this in the module's GUI.



The module can operate on either the player's main 36-slot inventory, their 4-slot armor inventory, their offhand slot, or their Ender inventory (as shown by vanilla *Ender Chests*). This can also be set in the module's GUI.

Extracted/inserted items can, of course, be filtered by the module.

A good use-case for this module would be to extract ores/cobblestone/dirt etc. from the player's inventory, and send it on to the player's main storage system in their base. With a little design, it should be possible to build a system to auto-swap your armor sets (maybe even in the field, with some wireless redstone from another mod...)

The Player Module is keyed to a specific player; the item tooltip shows the owner. This is set to the player who initially crafted the module, but can be overridden by holding the module and sneak-right-clicking it. You might also need to do this if you obtained the module by other means (creative, JEI cheat mode...).

Using a Security Upgrade in conjunction with this module is probably wise on servers where you don't trust the players; you don't want a hostile player stealing this module...



<Recipe id="modularrouters:player_module" />

