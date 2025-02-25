---
navigation:
  title: "Vacuum Trap"
  icon: "pneumaticcraft:vacuum_trap"
  parent: pneumaticcraft:spawning.md
item_ids:
  - pneumaticcraft:vacuum_trap
---

# Vacuum Trap

The *Vacuum Trap* is a machine used to trap mobs and absorb their essence into a [Spawner Core](./spawner_core.md), for later use in a [Pressurized Spawner](./pressurized_spawner.md).

To use a *Vacuum Trap*, you will need to do the following steps:


- 1. Ensure the Vacuum Trap has -0.5 bar of pressure, or lower. [Volume Upgrades](../upgrades.md#volume) are recommended here. Also, if you intend to move the Vacuum Trap around, be sure to wrench it rather than breaking it with a pickaxe, to preserve any stored vacuum.
- 2. Insert a non-full [Spawner Core](./spawner_core.md) to receive captured mobs.
- 3. Open the Vacuum Trap door, either by *sneak & right-clicking it*, or by applying a redstone signal.

## Restrictions

The Vacuum Trap will never capture:
- Players
- Drones
- Boss mobs (Wither, Ender Dragon...)
- Tamed animals
- Any mob spawned by a vanilla Spawner

In addition, you can blacklist mobs by adding their entity ID (e.g. *minecraft:zombie*) to the *pneumaticcraft:vacuum_trap_blacklisted* entity type tag.

## Memory Essence

If the Vacuum Trap's tank contains at least 100mB of [Memory Essence](../memory_essence.md), mob absorption efficiency will be greatly increased; instead of contributing 1% to the installed *Spawner Core*'s essence, a captured mob will contribute 2 - 4%, i.e. instead of needing to capture 100 mobs to fill a core, you will only need to capture 25-50 mobs. 100mB of Memory Essence will be used each time a mob is captured.

Crafting a Vacuum Trap

<Recipe id="pneumaticcraft:vacuum_trap" />

