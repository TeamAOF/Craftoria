---
navigation:
  title: "Regulator Module"
  icon: "pneumaticcraft:regulator_tube_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:regulator_tube_module
---

# Regulator Module

The Regulator Tube Module is an [inline](./tube_modules.md#inline) module used to limit the [pressure](../pressure.md) allowed through the tube. By default, the module will regulate the pressure to 4.9 bar (for both basic and advanced tubes) with no redstone signal, reducing toward 0 as the signal rises toward 15. This means a lever right beside a regulator closes it, preventing any air flow through it.

When the narrow side of the regulator reaches this pressure, no more air will be allowed through the tube. This principal can be used as a *transformer*: on the input (wide) side is high-pressure air, but the Regulator Tube limits the pressure on the output to the threshold pressure.

This allows a lower tier tube network to be safely supplied by a higher-tier network.

Interestingly, the *Regulator Module* allows unrestricted flow of air in the opposite direction (from the narrow side to the wide side) regardless of the redstone signal; this means a regulator with a full redstone signal can be used as a one-way valve.

Note that the *Regulator* does *not* actively reduce pressure on its narrow side; it only prevents air flow if the pressure would rise above the threshold.

<ItemImage id="pneumaticcraft:module_expansion_card" />

Applying a [Module Expansion Card](./module_expansion_card.md) to the Regulator Module unlocks a GUI providing far more control over the threshold level. You can set a precise threshold in the GUI, or (with the **Advanced Config** checkbox) configure interpolated threshold levels based on the redstone signal. This works exactly like the [Safety Module](./safety_module.md).

Crafting a Regulator Module

<Recipe id="pneumaticcraft:regulator_tube_module" />

