---
navigation:
  title: "Variables"
  icon: "minecraft:paper"
  parent: pneumaticcraft:programming.md
---

# Variables

*Variables* allow drone programs to store and manipulate block positions (aka coordinates) to provide some advanced drone functionality.

To create or manipulate variables from within a drone program, use the [Coordinate Operator](./coordinate_operator.md) and [Coordinate](./coordinate.md) widgets, and to run tests on variables, use the [Condition: Coordinate](./condition_coordinate.md) widget.

In the [Area](./area.md) widget you can, instead of using a GPS coordinate, use a *variable* name.

These *variables* persist across world reloads, so could be used to create an endless mining program, for example, where the Drone's dig position is tracked by a *variable*.

For an old but still relevant tutorial, see [this YouTube video by MineMaarten](https://www.youtube.com/watch?v=FIjEdD_Yj9Y).

While *variables* only store coordinates (an X/Y/Z triple), if you think about it you will realise that you can work with *integers* and *booleans* too. Just use only one axis for integers, and for booleans, define something like '0' = false, and everything else = true. Have fun!

## Item Variables

On the previous page, we mentioned that variables can only store coordinates. Well, that was a small lie: there is also such a thing as *item variables*, which store (you guessed it) an item value. These are created with the [Item Assign](./item_assign.md) and [For Each Item](./for_each_item.md) widgets, and used by the [Item Filter](./item_filter.md) widget.

## Types of Variable

There are three types of variable:
- *Local variables*: these are stored per-drone and are referenced simply as 'varname'.
- *Global variables*: these are global to all drones and can be used for sharing data. They are referenced as '#varname' or '%varname' (see following pages).
- *Special Variables* can be used to retrieve some metadata about the drone and are referenced as '$varname'.

<a name="global"></a>
## Global Variables

Normal variables are unique per [Drone](../tools/drone.md); they can't be shared. *Global variables*, however, *can* be shared. This allows Drones to communicate with each other.

Additionally, [GPS Tools](../tools/gps_tool.md) can link to and modify them, the [Universal Sensor](../machines/universal_sensor.md) can emit a <Color hex="#f00">redstone signal</Color> based on them, and the [Remote](../tools/remote.md) can display and modify them.

## Global Variables (cont.)

<Color hex="#880">$(t:Player-global variables were added in PNC:R 3.0.0, MC 1.18.1)There are two types of global variable$(/t:Player-global variables were added in PNC:R 3.0.0, MC 1.18.1)</Color>: *player-global* and *server-global*.
- Player-global variables are prefixed with '#'. These are shared among a player's drones, but private to each player.
- Server-global variables are prefixed with '%'. These variables are shared among *all* players on the server.

Note: in earlier versions of the mod only server-global existed, with a prefix of '#'.

## Variable Commands

Several commands exist (usable by any player) to manipulate global variables:
- /pncr global_var set <varname> <x> <y> <z>
- /pncr global_var set <varname> <item-registry-id>
- /pncr global_var get <varname>
- /pncr global_var list
- /pncr global_var delete <varname>

<a name="special"></a>
## Special Variables

The following special variables are recognised:
- *$owner_pos*: the (head) blockpos of the player who owns the [Drone](../tools/drone.md), or (0,0,0) if the owner is offline.
- *$drone_pos*: the blockpos of the drone itself.
- *$player_pos=<name>*: the (head) blockpos of the player '<name>' (case insensitive), or (0,0,0) for invalid or offline player names.

<a name="special"></a>
## Special Variables (cont.)


- *$owner_look*: a vector representing the owning player's facing on each axis; each value will be -1, 0 or 1.
- *$controller_pos*: the blockpos of the controlling [Programmable Controller](./programmable_controller.md) block, or (0,0,0) if the drone is an actual drone, rather than a Programmable Controller.

<a name="special"></a>
## Special Variables (cont.)

Several older variables also exist which remain usable for compatibility reasons (but it's recommended to use the variables on the previous page):
- *$owner*: an alias for *$owner_pos*.
- *$drone*: gets the blockpos *above* the drone, for historical reasons.
- *$player=<name>*: an alias for *$player_pos*.

## Debugging

Sometimes it's useful to display the value of a variable for debugging purposes. You can display a variable's value in a few ways:
- Using the [Rename](./rename.md) widget to show the variable as a drone's nameplate
- Writing text with the [Edit Sign](./edit_sign.md) widget
- Using a [label](../tools/remote.md#label) in a [Remote](../tools/remote.md).

## Debugging (cont.)

To interpolate a variable into text displayed by one of the above methods, use the syntax *${varname}*.

Note that the special & global variable prefixes still apply here, so to interpolate a drone's position, you would use *${$drone_pos}*, and to interpolate a global variable, you would use *${#globalvarname}* or *${%globalvarname}*.

## Debugging (cont.)

You can also display only the X, Y or Z component of the coordinate by suffixing the variable name with *.x*, *.y* or *.z* respectively. E.g. to show the drone owner's Y coordinate, use *${$owner_pos.y}*.

If the variable is an *item variable*, a *.id* suffix will get the item's registry ID instead of its display name (which is the default). This is particularly useful for displaying an item on an [Aphorism Tile](../machines/aphorism_tile.md#items).

