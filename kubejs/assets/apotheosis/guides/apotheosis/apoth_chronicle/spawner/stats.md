---
navigation:
  title: "Spawner Stats"
  icon: "minecraft:writable_book"
  parent: apotheosis:spawner/spawner.md
---

# Spawner Stats

Each Mob Spawner has <Color id="blue">Spawner Stats</Color>, which dictate their operation.

How long between spawns, how many mobs are spawned, etc.

This chapter details all of them.

## Spawn Delay

After a Mob Spawner spawns an entity, there is a delay until the next spawn.

That delay is a random number between the <Color id="blue">Min Spawn Delay</Color> and the <Color id="blue">Max Spawn Delay</Color>.

If the Max Delay is ever below the Min Delay, the Min Delay is used.

## Spawn Count

The <Color id="blue">Spawn Count</Color> dictates how many mobs are spawned at once.

Not all spawns will succeed, so sometimes less entities will spawn.

The spawn is counted as successful (and the delay reset) as long as one entity spawns.

## Max Entities

Mob Spawners track the number of entities nearby.

If that number ever exceeds the <Color id="blue">Max Entities</Color>, spawning stops.

Only entities of the same type as the spawned one are counted.

## Activation Range

Mob Spawners require a nearby player to operate.

That player must be within the <Color id="blue">Activation Range</Color>, which is a radius in blocks, for the spawner to run.

## Spawn Range

The <Color id="blue">Spawn Range</Color> is a radius in blocks of how far out entities may spawn.

Try to make sure this area is suitable for entities, otherwise some spawns may fail.

## Ignores Players

A spawner that <Color id="blue">Ignores Players</Color> does not need a player within the <Color id="blue">Activation Range</Color>.

It will operate with or without one.

## Ignores Conditions

A spawner that <Color id="blue">Ignores Conditions</Color> will no longer require certain mob-specific spawn conditions.

These include things like the grass requirement for animals.

It will just need sufficient space, and a lack of nearby entities.

## Redstone Control

A spawner with <Color id="blue">Redstone Control</Color> requires a redstone signal to operate.

This lets you control when the spawner is operating.

## Ignores Light

A spawner that <Color id="blue">Ignores Light</Color> will work in all light levels.

This means mobs can spawn in daylight.

If it already <Color id="blue">Ignores Conditions</Color>, then this modifier does nothing.

## No AI

A spawner with <Color id="blue">No AI</Color> enabled will spawn mobs without any AI.

Normally, these mobs will just simply float there, immobile, doing nothing.

However, the ones created by Apotheosis can still be moved.

If you are making large mob farms, you should always utilize the <Color id="blue">No AI</Color> upgrade.

It causes significantly reduced server load, and it makes the mobs easier to control.

