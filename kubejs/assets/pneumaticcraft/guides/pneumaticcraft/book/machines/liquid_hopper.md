---
navigation:
  title: "Liquid Hopper"
  icon: "pneumaticcraft:liquid_hopper"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:liquid_hopper
---

# Liquid Hopper

The *Liquid Hopper* is a device which you can use to transfer fluids. Like the [Omnidirectional Hopper](./omnidirectional_hopper.md), its input and output can point in any direction, and it uses the same placement and rotation rules. You can add [Speed Upgrades](../base_concepts/upgrades.md#speed) to increase the transfer rate.

<ItemImage id="pneumaticcraft:liquid_hopper" />

The *Liquid Hopper* will also attempt to drain fluids from any items on the ground in front of its <Color id="blue">input</Color> side and to insert fluids into any items in front of its <Color id="gold">output</Color> side, e.g. water buckets, lava buckets or modded fluid containers.

## Dispenser Upgrade

If a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser) is inserted into the *Liquid Hopper*, it will suck any liquid block (1000mB) at the <Color id="blue">input</Color> side, and it will dispense 1000mB of any stored liquid at the <Color id="gold">output</Color> side. This can be used for example as a water pump.

Crafting a Liquid Hopper

<Recipe id="pneumaticcraft:liquid_hopper" />

