---
navigation:
  title: "Refinery"
  icon: "pneumaticcraft:refinery"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:refinery
  - pneumaticcraft:refinery_output
---

# Refinery

The *Refinery* is a multiblock machine which uses [heat](../base_concepts/heat.md) to refine [Oil](../base_concepts/oil.md) into various fuels. It starts to work at 100°C. The higher the temperature applied, the faster it refines. The fuels that can be produced are, sorted from lightest to heaviest:
- *LPG (Liquefied Petroleum Gas)*
- *Gasoline*
- *Kerosene*
- *Diesel*

The *Refinery* is a multiblock structure: place down a *Refinery Controller*, then stack 2-4 *Refinery Outputs* on top of or beside the Controller. 

Different multiblock sizes give different yields; given 10mB of oil as input:

**2 Outputs**
- *LPG* (2mB)
- *Diesel* (4mB)
**3 Outputs**
- *LPG* (2mB)
- *Kerosene* (3mB)
- *Diesel* (2mB)

**4 Outputs**
- *LPG* (2mB)
- *Gasoline* (3mB)
- *Kerosene* (3mB)
- *Diesel* (2mB)

The lightest fuel will always end up in the top *Refinery Output*, the heaviest in the bottom.  If you add more *Refinery Outputs* to an existing stack, the multiblock will do its best to automatically rearrange any existing output liquids into their correct block, to keep the system running.

All produced liquids can be used as fuel in a [Liquid Compressor](../compressors/liquid_compressor.md) (with lighter fuels being of better quality).

However, there are two other very important uses:
- *LPG* is used to make liquid [Plastic](../components/plastic.md)
- *Diesel* is used to make [Lubricant](../components/lubricant.md) for [Speed Upgrades](../base_concepts/upgrades.md#speed).

A [Thermopneumatic Processing Plant](./thermopneumatic_processing_plant.md) is used for both of these processes.

## Comparator Support

The *Refinery* will work with a *Comparator*: an attached Comparator will output a signal strength of 15 when the *Refinery* has work, and 0 if not. It has work when there's *Oil* to refine *and* space in the output tanks for the refined products.

This can be used to automate switching off the air supply to a [Vortex Tube](../machines/vortex_tube.md), for example, to save air.

## Setup Tips

Since the *Refinery* is a multiblock with many faces exposed to the air, it can lose [Heat](../base_concepts/heat.md) quite rapidly if not well insulated. Therefore, it's strongly recommended to cover all unused faces of the multiblock to maximize efficiency. Note that any non-heat-conducting blocks can be used, including semi-solid blocks like *slabs* or *trapdoors*, but [Thermal Lagging](../machines/thermal_lagging.md) is especially recommended.

You can use a [Vortex Tube](../machines/vortex_tube.md) to heat the *Refinery*, or place hot fluids (Lava...) or blocks (Magma...) next to any *Refinery* blocks.  Note that such fluids and blocks will get used up (their heat gets drained), so you may wish to find a way to automate the production and placement of those resources.

## CraftTweaker

The *Refinery* has [CraftTweaker](https://minecraft.curseforge.com/projects/crafttweaker) support: recipes can be added and removed. Follow the link below for more information.

[CraftTweaker Docs](https://docs.blamejared.com/1.16/en/mods/PneumaticCraft-Repressurized/Refinery)
Crafting a Refinery

<Recipe id="pneumaticcraft:refinery" />

<Recipe id="pneumaticcraft:refinery_output" />

