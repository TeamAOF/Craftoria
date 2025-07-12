---
navigation:
  title: 'Harvesting Drone'
  icon: 'pneumaticcraft:harvesting_drone'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:harvesting_drone
---

# Harvesting Drone

A _Harvesting Drone_ is a specialized non-programmable type of [Drone](./drone.md) which will carry out [crop/tree harvesting](../programming/harvest.md) tasks in a 17x17x17 cube centered on the block it's deployed at. The Drone will _not_ pick up harvested items.

## Automatic Charging

<ItemImage id="pneumaticcraft:charging_station" />

As with all types of Drone, these drones require [pressure](../base_concepts/pressure.md) to operate, and will automatically seek out [a Charging Station with a Dispenser Upgrade](./drone.md#charging) if low on air.

## pneumaticcraft:harvesting_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:harvesting_drone" y={-0.3} />
</GameScene>

## Tool Use

If you deploy the _Harvesting Drone_ by _sneak+right-clicking_ it against an inventory containing (only) a _Hoe_ of any type, the drone will use that hoe to automatically replant crops, and will not attempt to do any work without a hoe equipped. If you don't care about replanting, just deploy the drone against any other block.

Note that Harvesting Drones have figured out how to chop down trees with a hoe instead of an axe; they're clever like that.

<Recipe id="pneumaticcraft:harvesting_drone" />
