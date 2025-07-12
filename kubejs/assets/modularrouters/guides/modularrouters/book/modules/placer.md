---
navigation:
  title: "Placer Module"
  icon: "modularrouters:placer_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:placer_module
---

# Placer Module

This module tries to place an item from the router's buffer as a block, adjacent to the router in the module's [configured direction](../intro/modules.md#direction).
- If the item isn't a block or the destination block space is obstructed, nothing will be done.
- Normal Minecraft placement rules are followed; e.g. sugar cane can only be placed next to water on sand/dirt.


- Fluid blocks will be replaced, as will replaceable blocks such as tall grass.
- The Placer module can plant seeds on farmland, and cocoa beans on an adjacent jungle log.



<Recipe id="modularrouters:placer_module" />

