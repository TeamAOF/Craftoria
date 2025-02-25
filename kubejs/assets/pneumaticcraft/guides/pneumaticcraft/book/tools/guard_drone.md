---
navigation:
  title: "Guard Drone"
  icon: "pneumaticcraft:guard_drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:guard_drone
---

# Guard Drone

A *Guard Drone* is a specialized non-programmable type of [Drone](./drone.md) which should be deployed against any inventory block. It will import one item to use as a weapon and attack any in-range mobs with it.

## Automatic Charging

<ItemImage id="pneumaticcraft:charging_station" />

As with all types of Drone, these drones require [pressure](../pressure.md) to operate, and will automatically seek out [a Charging Station with a Dispenser Upgrade](./drone.md#charging) if low on air.

## Range

The *Guard Drone* will target any hostile mobs within 16 blocks horizontally of its deployment position, 8 blocks up, and 5 blocks down.

The reason for the smaller vertical range is to minimize detection of mobs in caves deep below and teleporting to them, which wastes air and leaves you wondering what's happened to your Drone.

## Weapon

<ItemImage id="minecraft:netherite_sword" />

The *Guard Drone* does not care what is in the inventory, so take care that you a put a useful melee weapon in there. If & when the weapon breaks and there are no replacements in the inventory, the drone will continue to fight unarmed, which is very ineffective.

## Ranged Combat

<ItemImage id="pneumaticcraft:minigun_upgrade" />

The drone may alternatively be equipped with a [Minigun Upgrade](../upgrades.md#minigun), in which case you should instead add [Minigun Ammo](./minigun_ammo.md) to the inventory.

## pneumaticcraft:guard_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:guard_drone" y={-0.3} />
</GameScene>

Crafting a Guard Drone

<Recipe id="pneumaticcraft:guard_drone" />

