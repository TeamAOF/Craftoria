---
navigation:
  title: "Extruder Module Mk2"
  icon: "modularrouters:extruder_module_2"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:extruder_module_2
---

# Extruder Module Mk2

This module behaves somewhat like the [Extruder Module Mk1](./extruder_1.md), but with a few important differences:
- The Mk2 module doesn't place items from the router's buffer, but rather from a template defined within the module itself.
- This template appears on the right-hand side of the module's GUI, has 9 slots, and can have multiple items per slot. Items placed in the template are "ghost" items.


- Blocks extruded are "virtual" - effectively created out of nowhere, but drop nothing when broken and can't be crafted normally.
- Therefore, this module isn't suitable for farming like the Extruder Mk1, but can be used to place doors/bridges etc. with more complex patterns than the Mk1 could.
- The default range for the Extruder Mk2 is 24 blocks, which can be increased to 48 with Range Upgrades.



<Recipe id="modularrouters:extruder_module_2" />

