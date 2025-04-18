---
navigation:
  title: 'Variables'
  icon: 'minecraft:paper'
  parent: pneumaticcraft:programming.md
---

# Variables

_Variables_ allow drone programs to store and manipulate block positions (aka coordinates) to provide some advanced drone functionality.

To create or manipulate variables from within a drone program, use the [Coordinate Operator](./coordinate_operator.md) and [Coordinate](./coordinate.md) widgets, and to run tests on variables, use the [Condition: Coordinate](./condition_coordinate.md) widget.

In the [Area](./area.md) widget you can, instead of using a GPS coordinate, use a _variable_ name.

These _variables_ persist across world reloads, so could be used to create an endless mining program, for example, where the Drone's dig position is tracked by a _variable_.

For an old but still relevant tutorial, see [this YouTube video by MineMaarten](https://www.youtube.com/watch?v=FIjEdD_Yj9Y).

While _variables_ only store coordinates (an X/Y/Z triple), if you think about it you will realise that you can work with _integers_ and _booleans_ too. Just use only one axis for integers, and for booleans, define something like '0' = false, and everything else = true. Have fun!

## Item Variables

On the previous page, we mentioned that variables can only store coordinates. Well, that was a small lie: there is also such a thing as _item variables_, which store (you guessed it) an item value. These are created with the [Item Assign](./item_assign.md) and [For Each Item](./for_each_item.md) widgets, and used by the [Item Filter](./item_filter.md) widget.

## Types of Variable

There are three types of variable:

- _Local variables_: these are stored per-drone and are referenced simply as 'varname'.
- _Global variables_: these are global to all drones and can be used for sharing data. They are referenced as '#varname' or '%varname' (see following pages).
- _Special Variables_ can be used to retrieve some metadata about the drone and are referenced as '$varname'.

<a name="global"></a>

## Global Variables

Normal variables are unique per [Drone](../tools/drone.md); they can't be shared. _Global variables_, however, _can_ be shared. This allows Drones to communicate with each other.

Additionally, [GPS Tools](../tools/gps_tool.md) can link to and modify them, the [Universal Sensor](../machines/universal_sensor.md) can emit a <Color id="red">redstone signal</Color> based on them, and the [Remote](../tools/remote.md) can display and modify them.

<Color id='dark_purple'>$(t:Player-global variables were added in PNC:R 3.0.0, MC 1.18.1)There are two types of global variable$(/t:Player-global variables were added in PNC:R 3.0.0, MC 1.18.1)</Color>: _player-global_ and _server-global_.

- Player-global variables are prefixed with '#'. These are shared among a player's drones, but private to each player.
- Server-global variables are prefixed with '%'. These variables are shared among _all_ players on the server.

Note: in earlier versions of the mod only server-global existed, with a prefix of '#'.

## Variable Commands

Several commands exist (usable by any player) to manipulate global variables:

- /pncr global_var set \<varname\> \<x\> \<y\> \<z\>
- /pncr global_var set \<varname\> \<item-registry-id\>
- /pncr global_var get \<varname\>
- /pncr global_var list
- /pncr global_var delete \<varname\>

<a name="special"></a>

## Special Variables

The following special variables are recognised:

- _$owner_pos_: the (head) blockpos of the player who owns the [Drone](../tools/drone.md), or (0,0,0) if the owner is offline.
- _$drone_pos_: the blockpos of the drone itself.
- _$player_pos=\<name\>_: the (head) blockpos of the player '\<name\>' (case insensitive), or (0,0,0) for invalid or offline player names.
- _$owner_look_: a vector representing the owning player's facing on each axis; each value will be -1, 0 or 1.
- _$controller_pos_: the blockpos of the controlling [Programmable Controller](./programmable_controller.md) block, or (0,0,0) if the drone is an actual drone, rather than a Programmable Controller.

Several older variables also exist which remain usable for compatibility reasons (but it's recommended to use the variables on the previous page):

- _$owner_: an alias for _$owner_pos_.
- _$drone_: gets the blockpos _above_ the drone, for historical reasons.
- _$player=\<name\>_: an alias for _$player_pos_.

## Debugging

Sometimes it's useful to display the value of a variable for debugging purposes. You can display a variable's value in a few ways:

- Using the [Rename](./rename.md) widget to show the variable as a drone's nameplate
- Writing text with the [Edit Sign](./edit_sign.md) widget
- Using a [label](../tools/remote.md#label) in a [Remote](../tools/remote.md).

To interpolate a variable into text displayed by one of the above methods, use the syntax _${varname}_.

Note that the special & global variable prefixes still apply here, so to interpolate a drone's position, you would use _${$drone_pos}_, and to interpolate a global variable, you would use _${#globalvarname}_ or _${%globalvarname}_.

You can also display only the X, Y or Z component of the coordinate by suffixing the variable name with _.x_, _.y_ or _.z_ respectively. E.g. to show the drone owner's Y coordinate, use _${$owner_pos.y}_.

If the variable is an _item variable_, a _.id_ suffix will get the item's registry ID instead of its display name (which is the default). This is particularly useful for displaying an item on an [Aphorism Tile](../machines/aphorism_tile.md#items).
