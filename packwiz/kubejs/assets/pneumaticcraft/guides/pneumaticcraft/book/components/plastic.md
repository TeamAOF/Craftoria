---
navigation:
  title: 'Plastic'
  icon: 'pneumaticcraft:plastic_bucket'
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:plastic_brick_red
  - pneumaticcraft:smooth_plastic_brick_red
  - pneumaticcraft:plastic
---

# Plastic

_Plastic_ is an important crafting component in <Color id="dark_green">PneumaticCraft: Repressurized</Color>.

_Molten Plastic_ is made from [LPG](../manufacturing/refinery.md) and _Coal_, or [Biodiesel](../renewables/biodiesel.md) and _Charcoal_ in the [Thermopneumatic Processing Plant](../manufacturing/thermopneumatic_processing_plant.md).

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

_Molten Plastic_ can be solidified simply by pouring it into the world; it will turn into a _Plastic Sheet_ within half a second or so. This is very easily automated with a [Liquid Hopper](../machines/liquid_hopper.md) with a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser), and an [Omnidirectional Hopper](../machines/omnidirectional_hopper.md).

## Plastic Sheet

<ItemImage id="pneumaticcraft:plastic" />

_Plastic Sheets_ are produced by placing a bucket or [tank](../machines/tanks.md) of _Molten Plastic_ into an inventory with a [Heat Frame](../semiblocks/heat_frame.md) attached, and chilling the Heat Frame, ideally to below -80C (the colder the better). _Molten Plastic_ will be consumed from the bucket or tank, and you will have a chance for a second _Plastic Sheet_ for each 1000mB of Molten Plastic consumed.

## Improving Yields

An alternative way to solidify _Plastic Sheets_ is to place a bucket or [tank](../machines/tanks.md) of _Molten Plastic_ into an inventory with a [Heat Frame](../semiblocks/heat_frame.md) attached, and chill the Heat Frame, ideally to below -80C (the colder the better). _Molten Plastic_ will be consumed from the bucket or tank, and you will have a chance for a second _Plastic Sheet_ for each 1000mB of Molten Plastic consumed.

## A Note on Tanks

Although <Color id="dark_green">PneumaticCraft: Repressurized</Color> Fluid Tanks have inventory slots, and allow _Heat Frames_ to be placed on them, simply attaching a Heat Frame to a tank full of Molten Plastic won't work; the fluid tank must be in item form in an inventory (chest, etc.) with a Heat Frame attached.

## Plastic Construction Brick™

<ItemImage id="pneumaticcraft:plastic_brick_red" />

These bricks are formed with _Plastic Sheets_ and any dye, and are suitable for building with.

Don't walk on these with bare feet, because it hurts an unreasonable amount!

_Compatible with other leading brands of construction brick._

## Smooth Plastic Construction Brick™

<ItemImage id="pneumaticcraft:smooth_plastic_brick_red" />

The smooth version of the _Plastic Construction Brick_ is also suitable for building with.

These bricks also have the advantage of making excellent flooring, since they will increase your walk speed!

You can guess the recipes for the other colours

<Recipe id="pneumaticcraft:plastic_brick_red" />

<Recipe id="pneumaticcraft:smooth_plastic_brick_red" />

You can smelt bricks back into plastic sheets

<Recipe id="pneumaticcraft:plastic_sheet_from_brick" />

<Recipe id="pneumaticcraft:plastic_sheet_from_smooth_brick" />
