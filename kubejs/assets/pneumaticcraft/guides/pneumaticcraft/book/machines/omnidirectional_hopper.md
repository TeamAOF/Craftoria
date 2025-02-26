---
navigation:
  title: "Omnidirectional Hopper"
  icon: "pneumaticcraft:omnidirectional_hopper"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:omnidirectional_hopper
---

# Omnidirectional Hopper

The *Omnidirectional Hopper* behaves rather like the vanilla *Hopper*. However, this Hopper can be oriented in *any* direction, not just up. On top of that, it accepts [Upgrades](../base_concepts/upgrades.md), which can be used to speed up the Hopper considerably. It doesn't use [air](../base_concepts/pressure.md), so it's a very useful early game device.

<ItemImage id="pneumaticcraft:omnidirectional_hopper" />

When you place the Hopper, its <Color id="blue">input</Color> will face toward you, and its <Color id="gold">output</Color> will face toward the block it was placed against.

*Right-click* the Hopper with a [Pneumatic Wrench](../tools/pneumatic_wrench.md) (other wrenches may also work) to re-orient its input. *Sneak+right-click* the Hopper to re-orient its output.

## Dispenser Upgrade

If a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser) is installed, the hopper will automatically eject items into the world at the <Color id="gold">output</Color> side (if there's no inventory there).

This can be used as a greatly improved *Dropper*: faster, more accurate, and better <Color hex="#f00">redstone control</Color>.

## Entity Tracker Upgrade

If an [Entity Tracker Upgrade](../base_concepts/upgrades.md#entity_tracker) is installed, the hopper will be able to extract items from entities in front of its <Color id="blue">input</Color> side. Entities can be blacklisted from such extraction by adding them to the *pneumaticcraft:omnihopper_blacklisted* entity type tag; Villagers are blacklisted by default since they can become an infinite source of items.

Crafting an Omnidirectional Hopper

<Recipe id="pneumaticcraft:omnidirectional_hopper" />

