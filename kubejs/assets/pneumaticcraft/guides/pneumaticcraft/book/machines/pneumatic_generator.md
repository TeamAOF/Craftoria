---
navigation:
  title: "Pneumatic Generator"
  icon: "pneumaticcraft:pneumatic_generator"
  parent: pneumaticcraft:machines.md
---

# Pneumatic Generator

The Pneumatic Generator can generate *IndustrialCraft 2 EU* from [compressed air](../pressure.md). This is a tier two machine, indicated by its minimal working pressure of 15 bar. By default it has an efficiency of 40%, but this can be <Color hex="#880">$(t:See 'I:pneumaticGeneratorEfficiency')changed in the config$(/t:See 'I:pneumaticGeneratorEfficiency')</Color>.

Without any [Speed Upgrades](../upgrades.md#speed), it outputs at a rate of 32 EU/tick; with one upgrade inserted: 128 EU/tick and with two: 512 EU/tick.

<ItemImage id="pneumaticcraft:pneumatic_generator" />

The air usage (mL/tick) is:

<Color hex="#272">  output rate / E * 400</Color>

where <Color hex="#272">E</Color> is efficiency as a percentage. E.g. for default efficiency of 40%, and an output rate of 32EU/tick, air usage = <Color hex="#272">32 / 40 * 400 = 320mL/tick</Color>.

An important factor that influences efficiency is the Generator's [temperature](../heat.md). The Generator needs to be *cooled*, or its efficiency will drop as the temperature rises, up to the point where no air is generated at all.

Crafting a Pneumatic Generator

<Recipe id="pneumaticcraft:pneumatic_generator" />

