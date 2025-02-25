---
navigation:
  title: "Electrostatic Compressor"
  icon: "pneumaticcraft:electrostatic_compressor"
  parent: pneumaticcraft:compressors.md
item_ids:
  - pneumaticcraft:electrostatic_compressor
---

# Electrostatic Compressor

The *Electrostatic Compressor* is a [tier 2](../pressure_tiers.md) air [compressor](../pressure.md), which uses *lightning* for the energy to produce compressed air.

When it is struck by lightning it will instantly produce 200,000mL of air. Seems like a lot, but how often do you see a Charged Creeper sneaking around? You have to have it get struck.

To increase the chance of this happening, you can connect your compressors to a <Color hex="#880">$(t:Grid blocks can be customized via the 'pneumaticraft:electrostatic_grid' block tag)grid$(/t:Grid blocks can be customized via the 'pneumaticraft:electrostatic_grid' block tag)</Color> of *Iron Bars* or *Lightning Rods* to this machine, which act as a conductor for the lightning bolt.

Larger grids are better: grid blocks can be up 5 space away horizontally (circular radius), and up to 5 blocks above or below, but they must all be connected to the *Electrostatic Compressor* via each other.



![](electrostatic_compressor.png)

Note that in the image to the left, only the central compressor has a sufficiently large grid surrounding it for maximum efficiency; the other compressors will have a lower chance of a triggering a strike (though this is still more effective than having only a single compressor in the middle of the grid).

With multiple *Electrostatic Compressors* on a *grid*, the air from a strike is shared equally amongst them.

To prevent a compressor from blowing up when the pressure gets too high after a strike, you can connect up *Iron Bars* on the bottom side of the compressor. This way the energy can be dissipated to ground instead of going into the machine.

This dissipation only happens when the danger pressure of the compressor has been reached, not sooner. Each *Iron Bar* *directly* below the compressor (on the same Y axis) will dissipate up to 10,000mL of excess air. 

Thus, with 10 compressors on a shared *grid*, <Color hex="#880">$(t:200000 / 10 = 20000 air produced per compressor; 10000 x 2 = 20000 air dissipated)only 2 grid blocks$(/t:200000 / 10 = 20000 air produced per compressor; 10000 x 2 = 20000 air dissipated)</Color> are needed below each compressor. (You could also add [Security Upgrades](../upgrades.md#security) to the compressor, but that's more expensive and less effective)

To improve the chance of a strike, you can also place up to 10 grid blocks directly *above* the compressor to form a *lightning rod*. Each block will slightly improve the strike chance.

**Note:** unlike in earlier versions of <Color hex="#228">PneumaticCraft: Repressurized</Color>, natural lightning bolts do *not* add air to the compressor (this was highly abusable using other mods to create lightning). Instead the compressor has a small chance to create a "fake" bolt. This chance is *very* small in clear weather, but improves when *raining*, and improves dramatically in a *thunderstorm*.

Crafting an *Electrostatic Compressor*

<Recipe id="pneumaticcraft:electrostatic_compressor" />

