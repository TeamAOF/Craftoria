---
navigation:
  parent: steam_age/index.md
  title: Steam Machines
  icon: bronze_furnace
  position: 3

item_ids:
  - bronze_compressor
  - bronze_mixer
  - bronze_macerator
  - bronze_cutting_machine
  - bronze_furnace
  - wrench
---

# Steam Machines

Now it's time to build some bronze machines. The boiler will automatically produce and send steam to adjacent machines, up to 8 millibuckets per tick.

Bronze machines can only process recipes up to 2 EU/t, meaning that the recipe will use 2 Energy Units per Tick. As 1 millibucket of steam = 1 EU, a boiler at max temperature can power 4 machines simultaneously!

<Row>
  <Recipe id="modern_industrialization:steam_age/bronze/compressor_asbl" />
  <Recipe id="modern_industrialization:steam_age/bronze/mixer_asbl" />
  <Recipe id="modern_industrialization:steam_age/bronze/macerator_asbl" />
  <Recipe id="modern_industrialization:steam_age/bronze/cutting_machine_asbl" />
  <Recipe id="modern_industrialization:steam_age/bronze/furnace_asbl" />
</Row>

## Bronze Compressor

The Compressor will turn ingots into plates at 1:1 ratio. It can also turn each double ingot into 2 plates. This is probably the first machine you will want to build!

## Bronze Mixer

The Mixer will help you mix dusts, giving you a better ratio for bronze, fire clay and later uncooked steel. It can also create cobblestone and clay.

## Bronze Macerator

The Macerator will turn 3 crushed dusts/raw ores into 4.5 dusts. Ore hemiquadrupling for the win! It can also recycle all kinds of materials by turning them into dust.

## Bronze Cutting Machine

The Cutting Machine will give you better ratios for bolts, gears, rings and rods. It uses a little bit of lubricant every time.

## Bronze Furnace

The Furnace is... well... a Furnace. It is as slow as normal Furnaces, but it uses 10 times less fuel because steam is very efficient.

## How to use

Steam machines will accept inputs from any side, be it items, steam or another fluid.

You can lock their slots by clicking on the lock in the interface. Locked slots only accept one type of item or fluid.

Every machine has an output side, and you can enable auto-eject from the interface. Hoppers, pipes and other automation can extract output items from any side, of course. You can also reduce the maximum number of items in a slot by scrolling.

## Wrench

<Recipe id="modern_industrialization:tools/wrench" />

Using a wrench, you can rotate any machine by right-clicking. You can rotate the output side by sneaking while you shift-click.

Note that breaking a machine with the wrench will not drop it. Use a pickaxe for that!
