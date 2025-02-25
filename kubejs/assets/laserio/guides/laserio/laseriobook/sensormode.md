---
navigation:
  title: "Sensor Mode"
  icon: "laserio:textures/gui/buttons/modesensor.png"
  position: 12
  parent: laserio:mechanics.md
---

# Sensor Mode

Sensor mode, unlike other card modes, does not move objects around. Instead, it looks at an adjacent inventory/tank/cell and looks to see if the contents match the filter.  If they do, it emits a redstone signal of strength 15 on the designated redstone channel.

Sensor mode cards require a filter to function - without one they will do nothing.

With a basic filter, the sensor looks for any amount of objects. For example, a basic filter with a piece of cobblestone in it, will check to see if there is any cobblestone in the adjacent chest. If yes, it will emit a redstone signal on the specified redstone channel.

This will be true whether there is 1 piece of cobblestone, or 1000.

With a counting filter, the sensor looks for greater than or equal to the amount specified. For example, if the count filter is set to 32 pieces of cobblestone, it will emit true for 32, 33, 34, and so on.

However, the exact mode button is available for counting filters. If enabled, it will only emit true for 32 cobblestone, no more no less.

A new button is available on sensor mode - the And/Or button. In 'or' mode, only one of the filters has to match, following the preceeding rules.

For example, with 32 cobble and 16 glass in the filter, with 'or' mode, the chest need only contain 32 cobble to emit a signal. Or 16 glass. Or both.

In 'and' mode, all filters must match, for example, the chest must contain 32 cobblestone AND 16 glass.

Tag and mod filters work as you would expect. For tag filters in 'and', the contents of the container must match all tags, whether that means 1 item matching all tags, or multiple items.

Only 1 sensor card per side per redstone channel is recommended, as having multiple may lead to race conditions causing unexpected results.

