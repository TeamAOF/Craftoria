---
navigation:
  title: 'Universal Sensor'
  icon: 'pneumaticcraft:universal_sensor'
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:universal_sensor
---

# Universal Sensor

The _Universal Sensor_ is, like the name suggests, a sensor that can be used in many applications; it measures in-world conditions and outputs a <Color id="red">redstone signal</Color> based on those conditions.

Being universal isn't free: the sensor requires [air](../base_concepts/pressure.md) to run (1 mL/tick) in <Color id='dark_purple'>$(t:The Constant Redstone Emitter is free to use)almost all$(/t:The Constant Redstone Emitter is free to use)</Color> cases, and Sensors need certain [Upgrades](../base_concepts/upgrades.md) to run.

<ItemImage id="pneumaticcraft:universal_sensor" />

Currently there are over 15 different conditions the Sensor can measure, from being able to check whether there's a block at a certain coordinate or whether there is a Twitcher streaming. Open the GUI of the _Universal Sensor_ to see what's available, plus descriptions.

## Upgrades

You will need to insert an [Entity Tracker](../base_concepts/upgrades.md#entity_tracker), [Dispenser](../base_concepts/upgrades.md#dispenser), or [Block Tracker](../base_concepts/upgrades.md#block_tracker) plus [GPS Tool](../tools/gps_tool.md) to allow selection of the corresponding category of sensors. E.g. counting the number of entities within range requires an _Entity Tracker Upgrade_ to be installed.

## Example: Entity Counting

Say you have a pen full of animals and want to kill some, but only if there are enough.

Add an [Entity Tracker Upgrade](../base_concepts/upgrades.md#entity_tracker) and enough [Range Upgrades](../base_concepts/upgrades.md#range) to cover the pen's size.

Now, in the GUI, select the _Entity_ button, followed by _Within Range_, and finally enter an [entity filter](../base_concepts/entity_filter.md) matching your animal type (e.g. 'cow').

Crafting a Universal Sensor

<Recipe id="pneumaticcraft:universal_sensor" />
