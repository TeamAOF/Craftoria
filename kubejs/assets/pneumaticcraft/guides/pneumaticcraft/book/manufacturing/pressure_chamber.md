---
navigation:
  title: "Pressure Chamber"
  icon: "pneumaticcraft:pressure_chamber_wall"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:pressure_chamber_wall
  - pneumaticcraft:pressure_chamber_glass
  - pneumaticcraft:pressure_chamber_interface
  - pneumaticcraft:pressure_chamber_valve
---

# Pressure Chamber

The *Pressure Chamber* is a multi-block structure used to compress various materials into other materials. Due to its large air storage capacity, it can also serve as a useful "battery".

The following rules for multiblock construction apply:
- The overall multiblock must be a hollow 3x3x3, 4x4x4 or 5x5x5 structure.


- The *edges* and *corners* must be either *Pressure Chamber Walls* or *Pressure Chamber Glass*.
- The *faces* must be either *Pressure Chamber Walls*, *Pressure Chamber Glass*, *Pressure Chamber Valves* or [Pressure Chamber Interfaces](#interface).
- At least one *Pressure Chamber Valve* is required.
- At least two *Pressure Chamber Interfaces* are recommended (one should face in, one should face out).

## Pressure Chamber

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_3

A possible 3x3x3 pressure chamber with 1 *valve* and 2 *interfaces*

## Pressure Chamber

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_4

A possible 4x4x4 pressure chamber with 2 *valves* and 2 *interfaces*

## Pressure Chamber

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_5

A possible 5x5x5 pressure chamber with 4 *valves* and 4 *interfaces*

<a name="interface"></a>
<ItemImage id="pneumaticcraft:pressure_chamber_interface" />

The *Pressure Chamber Interface* is used to automate the insertion and extraction of items to the *Pressure Chamber*. Items *must* be piped in via *Hoppers* or other mod piping systems. You should have at least two interfaces: one with the 'I' facing out (the *input interface*), and one with the 'O' facing out (the *output interface*).

Input-mode Interfaces will only accept items which are ingredients for a Pressure Chamber recipe.  Output-mode Interfaces will (by default) only export crafted items, but there is a button in the GUI to allow export of *all* items if you need to.

*Note that this behaviour has changed since 1.12.2 days and is much more user-friendly now.*

Output mode *Interfaces* will auto-eject into an adjacent inventory; this may or may not include other mods' pipes, depending on whether or not they look like an inventory to the interface.

It costs 1000mL of [air](../pressure.md) per item transferred. This means, to transfer a full stack, the *Interface* needs 64000mL (4 bar for a basic 3x3x3 chamber). If the Interface seems to get 'stuck', it's just waiting for more pressure to build up.

**Tips**
- When compressing *Iron*, compress *Block of Iron*, since it will use only 1/9th of the air to move items in & out of the chamber.
- If you need to pressurize a large chamber quickly, extra valves can be helpful (assuming you have sufficient compressors to produce the necessary air).



<Recipe id="pneumaticcraft:pressure_chamber_wall" />

<Recipe id="pneumaticcraft:pressure_chamber_glass" />



<Recipe id="pneumaticcraft:pressure_chamber_interface" />

<Recipe id="pneumaticcraft:pressure_chamber_valve_x1" />



<Recipe id="pneumaticcraft:pressure_chamber_valve_x4" />

<Recipe id="pneumaticcraft:pressure_chamber_valve" />

