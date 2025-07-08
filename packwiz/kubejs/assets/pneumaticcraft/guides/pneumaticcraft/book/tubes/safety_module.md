---
navigation:
  title: "Safety Module"
  icon: "pneumaticcraft:safety_tube_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:safety_tube_module
---

# Safety Module

This tube module is used to limit the [pressure](../base_concepts/pressure.md) in a tube to a certain value, preventing *explosions*; any excess pressure will be dispersed into the atmosphere, which means *energy loss*. Therefore, this module is best used in conjunction with the [Pressure Gauge Module](./pressure_gauge_module.md), which can emit redstone to turn compressors off.

The default threshold level of the *Safety Module* is 0.1 bar below the tube's danger level:
- 4.9 bar for basic *Pressure Tubes*
- 19.9 bar for *Advanced Pressure Tubes*

Note that this has changed since 1.12.2, where a redstone signal was required to set the threshold.

<ItemImage id="pneumaticcraft:module_expansion_card" />

When you apply an [Module Expansion Card](./module_expansion_card.md) to the Safety Module, the module gains a GUI (right-click) providing far more control over the threshold level. You can set a precise threshold in the GUI, or with the **Advanced Config** checkbox, configure interpolated threshold levels based on the signal. This functions very much like the [Pressure Gauge GUI](./pressure_gauge_module.md#img), but in reverse.

Crafting a Safety Module

<Recipe id="pneumaticcraft:safety_tube_module" />

