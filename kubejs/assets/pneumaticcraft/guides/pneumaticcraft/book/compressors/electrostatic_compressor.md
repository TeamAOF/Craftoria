---
navigation:
  title: 'Electrostatic Compressor'
  icon: 'pneumaticcraft:electrostatic_compressor'
  parent: pneumaticcraft:compressors.md
item_ids:
  - pneumaticcraft:electrostatic_compressor
---

# Electrostatic Compressor

The _Electrostatic Compressor_ is a [tier 2](../base_concepts/pressure_tiers.md) air [compressor](../base_concepts/pressure.md), which uses _lightning_ for the energy to produce compressed air.

When it is struck by lightning it will instantly produce 200,000mL of air. Seems like a lot, but how often do you see a Charged Creeper sneaking around? You have to have it get struck.

To increase the chance of this happening, you can connect your compressors to a <Color id='dark_purple'>$(t:Grid blocks can be customized via the 'pneumaticraft:electrostatic_grid' block tag)grid$(/t:Grid blocks can be customized via the 'pneumaticraft:electrostatic_grid' block tag)</Color> of _Iron Bars_ or _Lightning Rods_ to this machine, which act as a conductor for the lightning bolt.

Larger grids are better: grid blocks can be up 5 space away horizontally (circular radius), and up to 5 blocks above or below, but they must all be connected to the _Electrostatic Compressor_ via each other.

![](electrostatic_compressor.png)

Note that in the image to the left, only the central compressor has a sufficiently large grid surrounding it for maximum efficiency; the other compressors will have a lower chance of a triggering a strike (though this is still more effective than having only a single compressor in the middle of the grid).

With multiple _Electrostatic Compressors_ on a _grid_, the air from a strike is shared equally amongst them.

To prevent a compressor from blowing up when the pressure gets too high after a strike, you can connect up _Iron Bars_ on the bottom side of the compressor. This way the energy can be dissipated to ground instead of going into the machine.

This dissipation only happens when the danger pressure of the compressor has been reached, not sooner. Each _Iron Bar_ _directly_ below the compressor (on the same Y axis) will dissipate up to 10,000mL of excess air.

Thus, with 10 compressors on a shared _grid_, <Color id='dark_purple'>$(t:200000 / 10 = 20000 air produced per compressor; 10000 x 2 = 20000 air dissipated)only 2 grid blocks$(/t:200000 / 10 = 20000 air produced per compressor; 10000 x 2 = 20000 air dissipated)</Color> are needed below each compressor. (You could also add [Security Upgrades](../base_concepts/upgrades.md#security) to the compressor, but that's more expensive and less effective)

To improve the chance of a strike, you can also place up to 10 grid blocks directly _above_ the compressor to form a _lightning rod_. Each block will slightly improve the strike chance.

**Note:** unlike in earlier versions of <Color id="dark_green">PneumaticCraft: Repressurized</Color>, natural lightning bolts do _not_ add air to the compressor (this was highly abusable using other mods to create lightning). Instead the compressor has a small chance to create a "fake" bolt. This chance is _very_ small in clear weather, but improves when _raining_, and improves dramatically in a _thunderstorm_.

Crafting an _Electrostatic Compressor_

<Recipe id="pneumaticcraft:electrostatic_compressor" />
