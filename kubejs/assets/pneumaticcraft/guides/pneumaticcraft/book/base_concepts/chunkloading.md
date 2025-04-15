---
navigation:
  title: 'Chunk Loading'
  icon: 'minecraft:ender_eye'
  parent: pneumaticcraft:base_concepts.md
---

# Chunk Loading

It is a fundamental mechanic of Minecraft that only parts of the world are loaded into memory at a time. This is essential for performance; no affordable computer could keep an entire world (especially a modded one) loaded and ticking all at once. The world is thus divided into 16x16 (in the horizontal axes) _chunks_, only of few of which are loaded at once.

This has important ramifications for designing reliable modded builds; if you want processing to happen when you're not at your base, you need to _chunkload_ the relevant machines. The information following is primary intended as hints to achieve reliable <Color id="dark_green">PneumaticCraft: Repressurized</Color> builds, but much of it applies to other mods too.

## Chunkloading Methods

- Vanilla has a _/forceload_ command to force one or more chunks to remain always loaded, but this does require op privileges to use
- Many mods offer player-usable chunkloading solutions, e.g. _FTB Chunks_, _Chicken Chunks_, _Weirding Gadgets_ and more.
- The [Programmable Controller](../programming/programmable_controller.md) from this mod offers some limited chunkloading functionality too.

## Chunkloading Safety

The following hints will assist in building reliable chunkloaded systems:

- _Try to keep your builds within chunk boundaries_. If part of your build is chunkloaded and part of it isn't, the results can be highly unpredictable. Have either all of it or none of it loaded.
- _Use Security Upgrades in machines._ This prevents explosions; even with good redstone control, chunkloading or server performance issues can be problematic.
- _Keep multiblocks within a single chunk if possible._ Even when all relevant chunks are chunkloaded, it's not ideal to have multiblocks like the [Pressure Chamber](../manufacturing/pressure_chamber.md) span two or more chunks.
