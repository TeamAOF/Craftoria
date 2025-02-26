---
navigation:
  title: "Kerosene Lamp"
  icon: "pneumaticcraft:kerosene_lamp"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:kerosene_lamp
---

# Kerosene Lamp

A *Kerosene Lamp* is a powerful light source that runs on.. you guessed it, [Kerosene](../manufacturing/refinery.md). It is similar to the long range light sources you might be used to, like *Thaumcraft's Arcane Lamp)*.

*Technically, the lamp will run on any burnable fuel, but Kerosene is more efficient than any other fuel in this lamp, even LPG.*

The *Kerosene Lamp* has a default range of 10 blocks. However, this can be adjusted in the GUI up to a maximum of 30 blocks. Note that the higher the range, the more fuel the lamp will use, in a squared fashion. So when you double the range, the fuel usage is multiplied by 4!

However, the lamp only uses a small amount of fuel. With 1000mB of Kerosene and the default range of 10 blocks, the Lamp can run for about <Color hex="#880">$(t:The Lamp's efficiency can be altered in mod config: see 'D:keroseneLampFuelEfficiency')40 real minutes$(/t:The Lamp's efficiency can be altered in mod config: see 'D:keroseneLampFuelEfficiency')</Color>.

The *Kerosene Lamp* can be controlled by *redstone* like most <Color hex="#228">PneumaticCraft: Repressurized</Color> blocks. Apart from the usual on/off modes, there also is an **Interpolate Signal** mode. This will (like the name says) interpolate the range of the lamp based on the signal strength.

E.g. assuming the default max range of 10 blocks, when a <Color hex="#f00">redstone signal</Color> of 8 (out of 15) is applied, the Lamp will have a range of 5.

Crafting a Kerosene Lamp

<Recipe id="pneumaticcraft:kerosene_lamp" />

