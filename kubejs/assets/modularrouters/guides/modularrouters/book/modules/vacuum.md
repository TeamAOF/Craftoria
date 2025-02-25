---
navigation:
  title: "Vacuum Module"
  icon: "modularrouters:vacuum_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:vacuum_module
---

# Vacuum Module

This module scans for dropped items in a 13x13x13 cubic area around the router (i.e. up to 6 blocks in each direction), and absorbs them into the router's buffer, if possible.

The range can be increased up to 25x25x25 (12 blocks in each direction) with [Range Up Augments](../range_up.md), or shrunk to just 3x3x3 with [Range Down Augments](../range_down.md).

The scanned area is centered on the router if the module's [configured direction](../modules.md#direction) is **All** (the default).

If the module has an actual direction configured, the area is offset in that direction by 6 blocks, plus one for each Range Up Augment installed, minus one for each Range Down Augment installed.

E.g. with a direction of **UP**, the module will only scan an area directly above the router.



<Recipe id="modularrouters:vacuum_module" />

