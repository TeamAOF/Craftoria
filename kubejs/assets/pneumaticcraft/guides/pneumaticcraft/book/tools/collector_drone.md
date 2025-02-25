---
navigation:
  title: "Collector Drone"
  icon: "pneumaticcraft:collector_drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:collector_drone
---

# Collector Drone

A *Collector Drone* is a specialized non-programmable type of [Drone](./drone.md) which should be deployed against, or next to, any inventory block (chest etc.). It will collect nearby items and put them in that inventory.

## Automatic Charging

<ItemImage id="pneumaticcraft:charging_station" />

As with all types of Drone, these drones require [pressure](../pressure.md) to operate, and will automatically seek out [a Charging Station with a Dispenser Upgrade](./drone.md#charging) if low on air.

## Item Filtering

The *Collector Drone* has some basic item filtering functionality. If deployed *against* an inventory block, it will filter on any items already in that inventory. If deployed on the ground *next to* an inventory (or on an empty inventory block), it *won't* filter items.

If you want to change the drone's filter, you will need to wrench it and redeploy it.

The *Collector Drone* has a default range of a 17x17x17 cube, centered on the block it was placed at. This range can be increased by adding up to 16 [Range Upgrades](../upgrades.md#range).

## pneumaticcraft:collector_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:collector_drone" y={-0.3} />
</GameScene>

Crafting a Collector Drone

<Recipe id="pneumaticcraft:collector_drone" />

