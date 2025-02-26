---
navigation:
  title: "Plastic"
  icon: "pneumaticcraft:plastic_bucket"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:plastic_brick_red
  - pneumaticcraft:smooth_plastic_brick_red
  - pneumaticcraft:plastic
---

# Plastic

*Plastic* is an important crafting component in <Color hex="#228">PneumaticCraft: Repressurized</Color>.

*Molten Plastic* is made from [LPG](../manufacturing/refinery.md) and *Coal*, or [Biodiesel](../renewables/biodiesel.md) and *Charcoal* in the [Thermopneumatic Processing Plant](../manufacturing/thermopneumatic_processing_plant.md).

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/plastic_from_lpg"}
```

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/plastic_from_biodiesel"}
```

## Plastic Sheet

<ItemImage id="pneumaticcraft:plastic" />

*Molten Plastic* can be solidified simply by pouring it into the world; it will turn into a *Plastic Sheet* within half a second or so. This is very easily automated with a [Liquid Hopper](../machines/liquid_hopper.md) with a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser), and an [Omnidirectional Hopper](../machines/omnidirectional_hopper.md).

## Plastic Sheet

<ItemImage id="pneumaticcraft:plastic" />

*Plastic Sheets* are produced by placing a bucket or [tank](../machines/tanks.md) of *Molten Plastic* into an inventory with a [Heat Frame](../semiblocks/heat_frame.md) attached, and chilling the Heat Frame, ideally to below -80C (the colder the better). *Molten Plastic* will be consumed from the bucket or tank, and you will have a chance for a second *Plastic Sheet* for each 1000mB of Molten Plastic consumed.

## Improving Yields

An alternative way to solidify *Plastic Sheets* is to place a bucket or [tank](../machines/tanks.md) of *Molten Plastic* into an inventory with a [Heat Frame](../semiblocks/heat_frame.md) attached, and chill the Heat Frame, ideally to below -80C (the colder the better). *Molten Plastic* will be consumed from the bucket or tank, and you will have a chance for a second *Plastic Sheet* for each 1000mB of Molten Plastic consumed.

## A Note on Tanks

Although <Color hex="#228">PneumaticCraft: Repressurized</Color> Fluid Tanks have inventory slots, and allow *Heat Frames* to be placed on them, simply attaching a Heat Frame to a tank full of Molten Plastic won't work; the fluid tank must be in item form in an inventory (chest, etc.) with a Heat Frame attached.

## Plastic Construction Brick™

<ItemImage id="pneumaticcraft:plastic_brick_red" />

These bricks are formed with *Plastic Sheets* and any dye, and are suitable for building with.

Don't walk on these with bare feet, because it hurts an unreasonable amount!

*Compatible with other leading brands of construction brick.*

## Smooth Plastic Construction Brick™

<ItemImage id="pneumaticcraft:smooth_plastic_brick_red" />

The smooth version of the *Plastic Construction Brick* is also suitable for building with.

These bricks also have the advantage of making excellent flooring, since they will increase your walk speed!

You can guess the recipes for the other colours

<Recipe id="pneumaticcraft:plastic_brick_red" />

<Recipe id="pneumaticcraft:smooth_plastic_brick_red" />

You can smelt bricks back into plastic sheets

<Recipe id="pneumaticcraft:plastic_sheet_from_brick" />

<Recipe id="pneumaticcraft:plastic_sheet_from_smooth_brick" />

