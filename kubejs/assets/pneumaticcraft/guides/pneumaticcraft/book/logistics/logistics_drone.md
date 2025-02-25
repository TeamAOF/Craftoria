---
navigation:
  title: "Logistics Drone"
  icon: "pneumaticcraft:logistics_drone"
  parent: pneumaticcraft:logistics.md
item_ids:
  - pneumaticcraft:logistics_drone
---

# Logistics Drone

*Logistics Drones* are a special type of [drone](../drone.md). They are a lower tier *Drone*, since they are not programmable but limited to carrying out *only* logistics tasks.

## Automatic Charging

<ItemImage id="pneumaticcraft:charging_station" />

As with all types of Drone, these drones require [pressure](../pressure.md) to operate, and will automatically seek out [a Charging Station with a Dispenser Upgrade](../drone.md#charging) if low on air.

## pneumaticcraft:logistics_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:logistics_drone" y={-0.3} />
</GameScene>

Once deployed, a *Logistics Drone* will operate on any inventory/tank with a [Logistics Frame](./frames.md) in a 33x33x33 cube centered on the block the drone was deployed at.

Since these Drones frequently need to move items around, [Speed](../upgrades.md#speed) and [Inventory](../upgrades.md#inventory) upgrades are recommended for movement speed and carrying capacity.

Crafting a Logistics Drone

<Recipe id="pneumaticcraft:logistics_drone" />

