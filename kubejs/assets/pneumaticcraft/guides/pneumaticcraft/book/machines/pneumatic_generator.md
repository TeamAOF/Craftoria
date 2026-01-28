---
navigation:
  title: 'Pneumatic Generator'
  icon: 'pneumaticcraft:pneumatic_generator'
  parent: pneumaticcraft:machines.md
---

# Pneumatic Generator

The Pneumatic Generator can generate _IndustrialCraft 2 EU_ from [compressed air](../base_concepts/pressure.md). This is a tier two machine, indicated by its minimal working pressure of 15 bar. By default it has an efficiency of 40%, but this can be <Color id='dark_purple'>$(t:See 'I:pneumaticGeneratorEfficiency')changed in the config$(/t:See 'I:pneumaticGeneratorEfficiency')</Color>.

Without any [Speed Upgrades](../base_concepts/upgrades.md#speed), it outputs at a rate of 32 EU/tick; with one upgrade inserted: 128 EU/tick and with two: 512 EU/tick.

<ItemImage id="pneumaticcraft:pneumatic_generator" />

The air usage (mL/tick) is:

<Color id='dark_green'> output rate / E \* 400</Color>

where <Color id='dark_green'>E</Color> is efficiency as a percentage. E.g. for default efficiency of 40%, and an output rate of 32EU/tick, air usage = <Color id='dark_green'>32 / 40 \* 400 = 320mL/tick</Color>.

An important factor that influences efficiency is the Generator's [temperature](../base_concepts/heat.md). The Generator needs to be _cooled_, or its efficiency will drop as the temperature rises, up to the point where no air is generated at all.

Crafting a Pneumatic Generator

<Recipe id="pneumaticcraft:pneumatic_generator" />
