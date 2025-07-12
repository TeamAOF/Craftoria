---
navigation:
  title: "Flinger Module"
  icon: "modularrouters:flinger_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:flinger_module
---

# Flinger Module

This module behaves like the [Dropper Module](./dropper.md), except that it also imparts a configurable velocity to the dropped item, potentially throwing the item a considerable distance. You can adjust the item's speed, pitch and yaw via the module's GUI.
- Pitch and Yaw are in degrees, relative to a base pitch or yaw.


- If the module ejects Up or Down, the base pitch is +90° or -90°, respectively. Otherwise, the base pitch is 0°.
- If the module ejects Up or Down, the base yaw is the router's facing direction. Otherwise the base yaw is taken from the module's direction.
- Example: a speed of 1.0, pitch/yaw of 0°, and a horizontal module direction, will throw an item along the ground for a distance of about 7 blocks.



<Recipe id="modularrouters:flinger_module" />

