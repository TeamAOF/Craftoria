---
navigation:
  title: "Activator Module"
  icon: "modularrouters:activator_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:activator_module
---

# Activator Module

This powerful module acts like a *fake player* which can use an item in the router's buffer, against nearby blocks or entities. There are three modes, which can be selected via the controls on the right of the GUI. Each mode is detailed in the following pages.

## Right-click

This mode performs a right-click with the item in the router's buffer, just as if a player had done so. The logic used is the same as for player clicks, e.g. right-clicking a *Flint and Steel* on a door will open the door, not start a fire.

The targeted block (if any) depends on the router's facing, module direction, and also the Look Above/Below/Level module setting.

## Right-click Entity

This mode performs a right-click with the item in the router's buffer on a nearby *entity*. You could use this to milk a cow for example, or shear a sheep.

This can result in items being dropped on the ground, e.g. if a cow is clicked with a stack of more than one bucket in the router's buffer.

## Attack Entity

This mode performs a left-click with the item in the router's buffer on a nearby *entity*, attacking it. This mode costs [Forge Energy](../upgrades/energy.md) by default, unlike other modules.

Note: while [Speed Upgrades](../upgrades/speed.md) can be useful here, weapon cooldowns do apply, so excessive Speed Upgrades will just end up wasting energy and weapon durability.

The Activator has a range of about 4 blocks, similar to what an actual player has. The module can also be configured to look *Above* or *Below* (default is *Level*).

*Above* is particularly handy for planting things on top of a solid block beside or above the router, while *Below* is useful when you want to target the ground directly adjacent to the router, rather than a more distant block.



<Recipe id="modularrouters:activator_module" />

