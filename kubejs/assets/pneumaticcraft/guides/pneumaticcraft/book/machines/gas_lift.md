---
navigation:
  title: "Gas Lift"
  icon: "pneumaticcraft:gas_lift"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:gas_lift
---

# Gas Lift

A *Gas Lift* is a pump, basically. It uses [pressure](../pressure.md) to decrease the density of a fluid to force it upwards.

When pressurized, it extrudes [Drill Pipes](../drill_pipe.md) (which you must provide) downwards until it hits any fluid block, at which point it will pump it. This makes it perfect for [Oil](../oil.md) extraction, as Oil might be deep underground.

Any solid block in the way will be broken, without yield. Breaking blocks uses up air; this is a very small amount for soft blocks like dirt or sand, but much more for hard blocks such as obsidian.

The minimum pressure required to pump fluids scales linearly with the depth it is pumping at, i.e. the number of *Drill Pipes* currently extruded, up to a maximum of 4.9 bar.

## Mode Tab

The Gas Lift can be switched to one of 3 modes:
- <Color hex="#00f">Pump and allow empty tank</Color> extrudes Drill Pipes, pumping fluids when it encounters them.
- <Color hex="#00f">Pump and leave fluid in filter</Color> does the same as above, but will always keep 1000mB of fluid in the tank. This is useful when pumping for a certain fluid, to make sure no other fluid will be pumped.


- <Color hex="#00f">Retract Drill Pipes</Color> will make the *Gas Lift* stop pumping and retract any Drill Pipes it extruded back into its inventory.

Crafting a Gas Lift

<Recipe id="pneumaticcraft:gas_lift" />

