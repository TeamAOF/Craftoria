---
navigation:
  parent: steam_age/index.md
  title: Infinite Water?
  icon: bronze_water_pump
  position: 8

item_ids:
  - bronze_water_pump
---

# Infinite Water?

You may have been wondering if perhaps there was a way to insert water into the boiler automatically? There is!

That's exactly what the water pump does. Surround it horizontally with water blocks, and it will start producing water for 1 EU/t.

It will automatically transfer water to the machine on its output side.

## Bronze Water Pump

<Recipe id="modern_industrialization:steam_age/bronze/water_pump_asbl" />

The Bronze Water Pump will produce 1/8th of a bucket of water for every adjacent water source every 5 seconds, for a max output of 1 bucket / 5 seconds.

## How to use

<GameScene zoom="4"  interactive={true}>
  <ImportStructure src="../assets/structures/examples/water_pump.snbt" />
</GameScene>

This is a simple example of how to set up a water pump with a boiler.

_MI pipes don't have GuideME support yet, so you'll have to use your imagination for now!_
