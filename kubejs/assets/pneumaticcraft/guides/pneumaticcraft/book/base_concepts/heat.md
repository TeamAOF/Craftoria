---
navigation:
  title: 'Heat'
  icon: 'minecraft:blaze_powder'
  parent: pneumaticcraft:base_concepts.md
---

# Heat

<Color id="dark_green">PneumaticCraft: Repressurized</Color> adds a _heat_ system. It spreads from block to block similarly to how heat spreads in real-life. It has some similarities with how [pressure disperses](./pressure.md) too:

- Heat disperses from hotter objects to colder objects.
- Blocks will only spread heat to adjacent blocks that support the concept of heat (see [Heat Sources](./heat_sources.md)).

- The bigger the temperature difference, the faster the heat dispersal.
- Different objects have a different _thermal resistance_. _Torches_ and _Air_ have a high resistance, while [Compressed Iron Blocks](./basic_materials.md#compressed_iron_block) have a very low resistance. _Thermal resistance_ determines how fast heat can spread from one object to another.

- Different objects have a different _thermal capacity_. The higher the capacity, the slower the temperature will rise for the given heat gain. Similarly, the slower the temperature will drop for the given heat loss. In other words, it takes more _heat_ to raise the _temperature_ of a higher-capacity block, but its temperature will also drop more slowly when it loses heat.

<a name="insulation"></a>

## Insulation

Machines will lose heat to the air if left exposed; this is particularly noticeable with the [Refinery](../manufacturing/refinery.md), which has many exposed faces, but is also true of any heat-conducting block, including [Compressed Iron Blocks](./basic_materials.md#compressed_iron_block).

To avoid this heat loss, ensure that no faces are exposed to air blocks; any non-conducting block will do. It doesn't have to be a full block, either - _Trapdoors_ and _slabs_ will work fine.

## Heat Sources

Some machines in <Color id="dark_green">PneumaticCraft: Repressurized</Color> produce Heat that needs to be dissipated, and some require Heat to run.

Therefore, you will need to [find ways](./heat_sources.md) to manipulate the temperature of these machines...
