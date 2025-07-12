---
navigation:
  title: 'Pneumatic Armor Overview'
  icon: 'minecraft:written_book'
  parent: pneumaticcraft:armor.md
---

# Pneumatic Armor Overview

What if you mix <Color id="dark_green">PneumaticCraft: Repressurized</Color> with the HUD from _Iron Man_? You get _Pneumatic Armor_!

Although this armor was inspired by Tony Stark's toy, it doesn't mean it's invincible in any way: by default, the armor has only slightly better protection and durability than the equivalent _Iron Armor_ piece.

Compressed Iron Man

TODO: Unsupported flag 'border'
![](pneumatic_armor.png)

However, this armor is highly upgradable. To use upgrades (and to pressurize the armor), put the armor in a [Charging Station](../machines/charging_station.md).

Upgrades common to all pieces are described in the following pages. Piece-specific upgrades are described separately in the pages for each armor piece.

When you equip an armor piece, it will _boot up_ within a few seconds. You can press _$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)_ to open a GUI, which allows you to configure installed upgrades and adjust the armor HUD. With more upgrades installed, more options will appear in the GUI.

Note that all upgrades can be toggled on/off via the GUI checkboxes, and you can even bind a key to each checkbox to quickly toggle features when outside the GUI.

## Repairing

<ItemImage id="minecraft:anvil" />

There are a few ways to keep your valuable armor in good condition:

- It can be repaired in an _Anvil_ with Compressed Iron Ingots
- Add _Item Life Upgrades_ to each piece to have it repair itself
- Apply the _Mending_ enchantment to each piece

## Coloring

Every armor piece is dynamically re-colorable from the default grey texture; each piece has a _primary_ and _secondary_ color which can be adjusted independently, and the Helmet _eyepiece_ can also have its own color.

To adjust colors, just use the **Colors...** screen from the main armor GUI screen. No special upgrades are needed for this; it's builtin functionality!

<ItemImage id="pneumaticcraft:speed_upgrade" />

[Speed Upgrades](../base_concepts/upgrades.md#speed) reduce the startup time of each armor piece. In addition, they reduce the [Helmet](./pneumatic_helmet.md) lock-on time for [Entity Tracker](../base_concepts/upgrades.md#entity_tracker) and [Block Tracker](../base_concepts/upgrades.md#block_tracker), and increase the [Leggings](./pneumatic_leggings.md) run speed, but at an [air cost](../base_concepts/pressure.md).

<ItemImage id="pneumaticcraft:volume_upgrade" />

[Volume Upgrades](../base_concepts/upgrades.md#volume) increase the [air storage capacity](../base_concepts/pressure.md) of each armor piece, making them take longer to charge, but slower to lose pressure when in use. Volume Upgrades are limited to 25, and there are diminishing returns as you add more and more upgrades.

<ItemImage id="pneumaticcraft:armor_upgrade" />

[Armor Upgrades](../base_concepts/upgrades.md#armor) increase the protection and toughness of each armor piece. With 2 upgrades installed, each piece is as good as the corresponding _Diamond Armor_ piece. With the maximum 4 upgrades, the protection is thus superior to _Diamond Armor_.

<ItemImage id="pneumaticcraft:item_life_upgrade" />

[Item Life Upgrades](../base_concepts/upgrades.md#item_life) slowly repair the armor piece, at a cost of [air](../base_concepts/pressure.md). Up to 5 upgrades can be installed in each piece, providing incrementally faster (but less air-efficient) repair.

<ItemImage id="pneumaticcraft:gilded_upgrade" />

A [Gilded Upgrade](../base_concepts/upgrades.md#gilded) can be installed in any armor piece, and fools _Piglins_ into believing that you're actually wearing _Gold Armor_. Silly Piglins.

## Mekanism Radiation

<ItemImage id="pneumaticcraft:radiation_shielding_upgrade" />

The [Radiation Shielding Upgrade](../base_concepts/upgrades.md#radiation_shielding) provides protection against the harmful effects of Mekanism radiation, same as Mekanism's own [Radiation Shielding Unit](https://wiki.aidancbrady.com/wiki/Radiation_Shielding_Unit). Note that you must have a Shielding Upgrade in every armor piece to receive full protection.

## Thaumcraft

[Thaumcraft Upgrades](../base_concepts/upgrades.md#thaumcraft) provide the armor piece with the equivalent vis discount of the corresponding _Thaumaturge's armor_. In addition, a Thaumcraft Upgrade installed in the [Helmet](./helmet.md) acts as a _Goggles of Revealing_, showing _aura nodes_ and displaying _aspect_ amounts in containers.
