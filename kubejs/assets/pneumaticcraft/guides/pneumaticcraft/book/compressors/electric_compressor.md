---
navigation:
  title: 'Electric Compressor'
  icon: 'pneumaticcraft:electric_compressor'
  parent: pneumaticcraft:compressors.md
---

# Electric Compressor

The _Electric Compressor_ can generate compressed air from _IndustrialCraft 2's EU_. By default it has an efficiency of 40%, but this can be <Color id='dark_purple'>$(t:See 'I:electricCompressorEfficiency')changed in the config$(/t:See 'I:electricCompressorEfficiency')</Color>.

It behaves like a IC2 tier 1 machine, so it will explode if it receives >32 EU/t. However, you can add IC2 _Transformer Upgrades_ to allow higher voltages, as in normal IC2 machines.

The energy output in mL/tick is:

<Color id='dark_green'>input rate / E \* 400</Color>

where <Color id='dark_green'>E</Color> is the efficiency.

For instance, with the default efficiency of 40% and an input of 32EU/tick, the compressed air production equals <Color id='dark_green'>32 / 40 \* 400 = 320mL/tick.</Color>

Another factor that influences the efficiency is the machine's [heat](../base_concepts/heat.md). The machine needs to be cooled, as the efficiency will drop as the temperature rises, up to the point where no air is generated at all.

Crafting an _Electric Compressor_

<Recipe id="pneumaticcraft:electric_compressor" />
