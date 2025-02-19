---
navigation:
  parent: steam_age/index.md
  title: Pipes
  icon: wrench
  position: 4

item_ids:
  - fluid_pipe
  - item_pipe
  - white_fluid_pipe
  - orange_fluid_pipe
  - magenta_fluid_pipe
  - light_blue_fluid_pipe
  - yellow_fluid_pipe
  - lime_fluid_pipe
  - pink_fluid_pipe
  - gray_fluid_pipe
  - light_gray_fluid_pipe
  - cyan_fluid_pipe
  - purple_fluid_pipe
  - blue_fluid_pipe
  - brown_fluid_pipe
  - green_fluid_pipe
  - red_fluid_pipe
  - black_fluid_pipe
  - white_item_pipe
  - orange_item_pipe
  - magenta_item_pipe
  - light_blue_item_pipe
  - yellow_item_pipe
  - lime_item_pipe
  - pink_item_pipe
  - gray_item_pipe
  - light_gray_item_pipe
  - cyan_item_pipe
  - purple_item_pipe
  - blue_item_pipe
  - brown_item_pipe
  - green_item_pipe
  - red_item_pipe
  - black_item_pipe
---

# Pipes

Pipes are used in the recipes of some machines, but they can also be placed in the world. Up to 3 pipes can fit in a single block.

Pipes of different colors will not connect.

Right-clicking a pipe with a wrench will change the connection type, shift-right-clicking will drop the pipe.

## Fluid Pipes

<ItemGrid>
  <ItemIcon id="fluid_pipe" />
  <ItemIcon id="white_fluid_pipe" />
  <ItemIcon id="orange_fluid_pipe" />
  <ItemIcon id="magenta_fluid_pipe" />
  <ItemIcon id="light_blue_fluid_pipe" />
  <ItemIcon id="yellow_fluid_pipe" />
  <ItemIcon id="lime_fluid_pipe" />
  <ItemIcon id="pink_fluid_pipe" />
  <ItemIcon id="gray_fluid_pipe" />
  <ItemIcon id="light_gray_fluid_pipe" />
  <ItemIcon id="cyan_fluid_pipe" />
  <ItemIcon id="purple_fluid_pipe" />
  <ItemIcon id="blue_fluid_pipe" />
  <ItemIcon id="brown_fluid_pipe" />
  <ItemIcon id="green_fluid_pipe" />
  <ItemIcon id="red_fluid_pipe" />
  <ItemIcon id="black_fluid_pipe" />
</ItemGrid>

Fluid pipes can only contain one type of fluid, and by default they won't connect to empty pipes or blocks.

You can force a connection by right-clicking the center of the pipe with the wrench, or by right-clicking a block with a pipe in your hand: it will connect, but not consume the item in your hand.

## Item Pipes

<ItemGrid>
  <ItemIcon id="item_pipe" />
  <ItemIcon id="white_item_pipe" />
  <ItemIcon id="orange_item_pipe" />
  <ItemIcon id="magenta_item_pipe" />
  <ItemIcon id="light_blue_item_pipe" />
  <ItemIcon id="yellow_item_pipe" />
  <ItemIcon id="lime_item_pipe" />
  <ItemIcon id="pink_item_pipe" />
  <ItemIcon id="gray_item_pipe" />
  <ItemIcon id="light_gray_item_pipe" />
  <ItemIcon id="cyan_item_pipe" />
  <ItemIcon id="purple_item_pipe" />
  <ItemIcon id="blue_item_pipe" />
  <ItemIcon id="brown_item_pipe" />
  <ItemIcon id="green_item_pipe" />
  <ItemIcon id="red_item_pipe" />
  <ItemIcon id="black_item_pipe" />
</ItemGrid>

Item pipes will not connect to inventories by default, but again you can force a connection.

Right-click a connection without holding a wrench and will see a filter. By default, whitelist mode is enabled, so no items will be inserted or extracted directly.

## How they work

The different types of pipes don't work exactly the same way.

Every tick, fluid pipes will try to evenly extract for all connected blocks, and then try to insert that evenly. [Read more about their speed here](../midgame/fluid_transfer.md).

Item pipes will insert items into higher priorities first, and they will transfer 16 items every few seconds. [They can be upgraded with motors]().

## Note

The item pipes are on whitelist by default (which means only the items in the filter will be moved).

You need to switch to blacklist (only the items NOT in the filter will be moved) or add the item you want to move to the filter.

Be careful that you need to configure both sides of the pipe, otherwise items will not move.
