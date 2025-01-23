---
navigation:
  parent: electric_age/electric_age.md
  title: Oil Processing
  icon: diesel_bucket
  sortnum: 9

item_ids:
  - oil_drilling_rig
  - mv_diesel_generator
---

# Oil Processing

## Oil Drilling Rig

<Recipe id="modern_industrialization:oil/oil_drilling_rig_asbl" />

The Oil Drilling Rig is a huge multiblock that can dig for Crude Oil under the bedrock using drills. Yes, it's an oil quarry basically. Oil processing will give you a ton of byproducts and energy!

The structure of the multiblock is made of: Steel Machine Casings, Steel Pipe Machine Casings and Chains as you can see by placing the controller and holding a Wrench. The Hatches can be replaced by Steel Machine Casings, but be sure to have at least Item Input, Fluid Output and Energy Input Hatches!

Crude Oil can be turned into various fuels and used for more efficient Rubber Sheet production.

## Diesel Generator

<Recipe id="modern_industrialization:electric_age/machine/mv_diesel_generator_asbl" />

Various fuels can be burned in the Diesel Generator, and you can check in EMI how much EU each fuel produces. The Diesel Generator will produce up to 256 EU/t and will only connect to MV cables.

Diesel Generators will only use fuel when they need to, but if you need a constant supply of energy, you can put liquid fuels in the Large Steam Boiler instead of items.

A fully heated Large Steam Boiler will roughly produce twice the amount of energy a Diesel Generator would produce using the same quantity of fuel.

## Oil Drilling Rig Preview

<GameScene zoom="4"  interactive={true}>
  <ImportStructure src="../assets/structures/oil_drilling_rig.snbt" />
</GameScene>
