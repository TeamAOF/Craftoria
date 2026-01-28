---
navigation:
  title: 'Air Grate Module'
  icon: 'pneumaticcraft:air_grate_module'
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:air_grate_module
---

# Air Grate Module

This module is used to attract/repel entities to/from the module. With positive [pressure](../base_concepts/pressure.md), the tube will blow entities away and with _negative_ pressure it will suck entities towards it. Negative pressure is achieved with a [Vacuum Pump](../machines/vacuum_pump.md). When item entities are close enough, they will automatically be inserted into any adjacent inventory, respecting sided inventories (like Furnaces).

The module's range can be expressed with these formulae:

With positive pressure:

<Color id='dark_green'>Range = 4 x pressure (bar)</Color>

With negative pressure:

<Color id='dark_green'>Range = -16 x pressure (bar)</Color>

E.g. at 2 bar it repels at 4x2=8 blocks. At -0.5 bar, it attracts at -16x-0.5=8 blocks.

The Air Grate will only affect entities in a cubic area, in the direction it's facing. The module must also have line of sight to an entity.

You can right-click the module to make it show the affected range for a few seconds.

<a name="active_cooling"></a>

## Heat Sink Cooling

An Air Grate Module can also be used to actively cool [Heat Sinks](../machines/heat_sink.md). The range in which Heat Sinks is cooled is a 3x3x3 cube in front of the Air Grate. This range is visualized when the module is placed down.

The Air Grate will only cool Heat Sinks when it has a range of 3 blocks or more (so, 0.75 bar).

<ItemImage id="pneumaticcraft:module_expansion_card" />

When you apply an [Module Expansion Card](./module_expansion_card.md), you gain control over which entities are affected by the module.

You could set it up, for example, so that only a certain player gets affected, or only Creepers, or only items. This can be done by right clicking the upgraded module to open a GUI allowing an [entity filter](../base_concepts/entity_filter.md) to be defined.

Crafting a Air Grate Module

<Recipe id="pneumaticcraft:air_grate_module" />
