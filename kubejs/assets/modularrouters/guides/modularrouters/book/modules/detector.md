---
navigation:
  title: "Detector Module"
  icon: "modularrouters:detector_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:detector_module
---

# Detector Module

This module doesn't actually manipulate items, but instead detects specific items in the router's buffer. If the buffer contents are matched by the module's filter, it will make the router emit a redstone signal in the [configured direction](../modules.md#direction).

The signal level (default: 15) and signal type (default: weak) can be adjusted via the module GUI.



<Recipe id="modularrouters:detector_module" />

