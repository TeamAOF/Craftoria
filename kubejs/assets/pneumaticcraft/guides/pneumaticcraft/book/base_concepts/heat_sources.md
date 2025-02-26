---
navigation:
  title: "Heat Sources"
  icon: "pneumaticcraft:vortex_tube"
  parent: pneumaticcraft:base_concepts.md
---

# Heat Sources

*Static heat sources* are blocks and fluids which add or remove heat to/from machines when adjacent to them. When too much heat is added or removed, they may transform into other blocks or fluids. Note that heat extraction/addition is tracked externally to the block in question, so breaking/replacing blocks to reset extracted heat is not a viable strategy.

## Vanilla Heat Sources

The following vanilla blocks & fluids act as static heat sources: 
- Air
- Ice/Packed Ice/Blue Ice
- Snow
- Torch
- Fire (will go out)
- Magma (cools to Netherrack)
- Water (may freeze or evaporate)
- Lava (cools to Obsidian)
- Campfire (will go out)

## Modded Heat Sources

Several blocks from mods will also function as static heat sources with differing properties, including:
- IC2 Steam and Superheated Steam
- IC2 Coolant and Hot Coolant
- IC2 and Immersive Engineering Uranium Blocks
- Quark Blaze Lanterns
- Quark Brimstone and Permafrost
- Natura Heat Sand
- All modded fluids have heat properties (temperature is mod-defined)

## Adding Custom Sources

(For modpack makers) All block heat properties are defined in datapacks. You can add your own definitions or override/remove default definitions by adding JSON files to *data/<mod-id>/pneumaticcraft/block_heat_properties*.

<ItemImage id="pneumaticcraft:vortex_tube" />

A [Vortex Tube](../machines/vortex_tube.md) is a *dynamic heat source* which converts [pressure](./pressure.md) directly to heat and cold. It's highly recommended to put a [Heat Sink](../machines/heat_sink.md) on the unused side of a Vortex Tube, for efficiency.

<ItemImage id="pneumaticcraft:heat_frame" />

A [Heat Frame](../semiblocks/heat_frame.md) is a gadget that can be used to heat (or freeze!) items in any inventory. Note that Heat Frames will not absorb heat directly from a *static heat source*, but you could put a [Heat Pipe](../machines/heat_pipe.md) beside it to transmit the heat.

<ItemImage id="pneumaticcraft:heat_sink" />

A [Heat Sink](../machines/heat_sink.md) is a block that can be used to efficiently disperse Heat (or cold!) from the block it's attached to, into the atmosphere.

<ItemImage id="pneumaticcraft:heat_pipe" />

A [Heat Pipe](../machines/heat_pipe.md) is an insulated core of compressed iron which can transmit heat between blocks, without any thermal connection to adjacent air or fluid blocks. It's a more compact (and cheaper) alternative to using *Compressed Iron Blocks* to transmit heat. You can also attach *Heat Sinks* directly to a Heat Pipe.

<ItemImage id="minecraft:furnace" />

When connecting a vanilla *Furnace* to any dynamic heat source (such as a [Vortex Tube](../machines/vortex_tube.md), but also blocks like the [Advanced Air Compressor](../compressors/advanced_air_compressor.md) which produces heat), the heat will be consumed by the Furnace to "fuel" it, making it possible to run Furnaces purely on heat, requiring no solid fuel. This is both convenient and more efficient.

## Furnace (cont)

This furnace "fueling" will start to work at 100°C, and will go faster with higher temperatures. Placing multiple heat sources around the Furnace will increase the heating effect.

This heating effect also works for the vanilla *Blast Furnace* and *Smoker*.

