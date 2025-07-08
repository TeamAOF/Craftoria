---
navigation:
  title: "Pressurized Spawner"
  icon: "pneumaticcraft:pressurized_spawner"
  parent: pneumaticcraft:spawning.md
item_ids:
  - pneumaticcraft:pressurized_spawner
---

# Pressurized Spawner

A *Pressurized Spawner* is a powerful device which uses [pressure](../base_concepts/pressure.md) to spawn mobs. It doesn't care about light levels or player proximity, and can be enabled/disabled via redstone.

To use a Pressurized Spawner, you will need a [Spawner Core](./spawner_core.md) containing some captured mob essence, and at least 10 bar of pressure.

When a Core contains multiple mob essences, a random mob will be picked. E.g. if your Core is 50% zombie, 25% creeper, and 25% empty, then on each spawn attempt, you have a 50% chance of a zombie, 25% for a creeper, and 25% for nothing at all.

Air is still used if nothing spawns, so partially empty Cores are not very efficient (but then again, a Core with a 50% chance of a rare mob is better than no Core at all...)

Crafting a Pressurized Spawner.

<Recipe id="pneumaticcraft:pressurized_spawner" />

