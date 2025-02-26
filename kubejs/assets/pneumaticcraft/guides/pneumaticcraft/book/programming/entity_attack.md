---
navigation:
  title: "Entity Attack Widget"
  icon: "pneumaticcraft:textures/progwidgets/attack_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# Entity Attack Widget

The [Drone](../tools/drone.md) will attack any living entity within the area.

Keep in mind that any [Area](./area.md) widgets connected to this widget must have an area type of *Box*; this is the only supported shape. It's possible to create different shapes though, by using multiple Area widgets on either whitelist (right) or blacklist (left) side.

## Filtering Entities

You can specify which creatures may be attacked by using [Text](./text.md) widgets as an [Entity Filter](../base_concepts/entity_filter.md). E.g. if you want the *Drone* to attack all players, connect a *Text* widget to the *right* of the *Entity Attack* widget containing <Color hex="#600">@player</Color>.

If you don't want to be attacked yourself, connect up a *Text* widget on the *left* containing your player name.

## Melee Attacks

<ItemImage id="minecraft:diamond_sword" />

[Drones](../tools/drone.md) will equip and use any melee weapon in their inventory to attack. If a *Drone* has multiple weapons in its inventory, it will equip the most damaging one. 

You can use an [Inventory Import](./inventory_import.md) widget to provide the Drone with a weapon, which is strongly recommended - its unarmed melee attack is weak.

<ItemImage id="pneumaticcraft:minigun_upgrade" />

Insert a [Minigun Upgrade](../base_concepts/upgrades.md#minigun) into the [Drone](../tools/drone.md) to give it a [Minigun](../tools/minigun.md). When provided with [Gun Ammo](../tools/minigun_ammo.md) (using an [Inventory Import](./inventory_import.md) widget), the *Drone* will use this Minigun for ranged attacks.

The default range is 16 blocks, which can be upgraded by inserting up to 16 [Range Upgrades](../base_concepts/upgrades.md#range_upgrade), for a maximum range of 32 blocks.

<ItemImage id="pneumaticcraft:micromissiles" />

Drones also know how to fire [Micromissiles](../tools/micromissiles.md): if the *Drone* is holding a *Micromissile* when this widget executes, it will fire a missile at its current target. Any connected [entity filter](../base_concepts/entity_filter.md) is copied into the Micromissile's own entity filter by the drone.

*I'll be back*

![](attack_piece.png)

