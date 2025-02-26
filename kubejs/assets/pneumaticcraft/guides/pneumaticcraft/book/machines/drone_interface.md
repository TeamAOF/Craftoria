---
navigation:
  title: "Drone Interface"
  icon: "pneumaticcraft:drone_interface"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:drone_interface
---

# Drone Interface

The Drone Interface is a *ComputerCraft/OpenComputers peripheral* that's used to communicate with [Drones](../tools/drone.md). To do so, program a *Drone* with a [Computer Control puzzle piece](../programming/computer_control.md).

When the Drone executes the Computer Control piece, it'll try to connect to an <Color hex="#880">$(t:A Drone Interface can only connect to one Drone at a time)available$(/t:A Drone Interface can only connect to one Drone at a time)</Color> *Drone Interface* located within the puzzle piece's area.

<ItemImage id="pneumaticcraft:drone_interface" />

Once connected, the Drone will be controlled entirely by the interface; specifically, by Lua methods called on the interface by the controlling computer.

The Drone Interface exposes a long list of Lua methods, all of which are described in the following pages.

## Example

An example Lua program:
<Color hex="#008">m = peripheral.wrap("right")
m.addArea(100, 64, 100, 120, 4, 120, "Filled")
m.setAction("dig")
while not m.isActionDone()
do
  sleep(1)
end
m.clearArea()
m.addArea(80, 65, 80)
m.setAction("goto")
-- wait till done, as above
m.setAction("standby")

</Color>makes the drone dig out a large area - all blocks in the (100,64,100)->(120,4,120) range - and then return to (80, 65, 80) and go into standby.

## Example (cont)

You may notice that the program opposite has to explicitly wait until the Dig (and Goto) actions are done before continuing, unlike when writing Drone programs via the [Programmer](../programming/programmer.md). This is because your Lua computer program is running in a separate thread and can't interact with the world directly; it just tells the drone what to do next, and needs to ask the drone if it's done yet.

## abortAction()

<Color hex="#800">abortAction()</Color>

Stops the current running action.

## addArea()

<Color hex="#800">addArea(<x1>,<y1>,<z1>)</Color>

<Color hex="#800">addArea(<x1>,<y1>,<z1>,<x2>,<y2>,<z2>,<areaType>)</Color>

Adds an area to the current stored area of the Drone. When using the latter method, x1/y1/z1 represent the first point (which would be P1 of an [GPS Area Tool](../tools/gps_area_tool.md)), and x2/y2/z2 represent the second point, or P2 of the GPS Area Tool.

getAreaTypes() can be used to list the valid area types.

## addBlacklistItemFilter()

<Color hex="#800">addBlacklistItemFilter(<item/block name>, <useNBT>, <useModSimilarity>)</Color>

Like the addWhitelistItemFilter(...), but to blacklist items.

## addBlacklistLiquidFilter()

<Color hex="#800">addBlacklistLiquidFilter(<liquid name>)</Color>

Like the addWhitelistLiquidFilter(...), but to blacklist liquids.

## addBlacklistText()

<Color hex="#800">addBlacklistText(<text>)</Color>

Adds a text to the blacklisted texts. Used to specify a filter for the "entity_attack" action, for example.

## addWhitelistItemFilter()

<Color hex="#800">addWhitelistItemFilter(<item/block name>, <useNBT>, <useModSimilarity>)</Color>

Acts as an [Item Filter](../programming/item_filter.md) widget on the right of another widget. The item/block name is the registry name, e.g. *pneumaticcraft:pressure_tube*. The 'useXXX' are all booleans that determine what filters will be used (as in the Item Filter widget GUI).

## addWhitelistLiquidFilter()

<Color hex="#800">addWhitelistLiquidFilter(<liquid name>)</Color>

Acts as you've put a $l(:programming/liquid_filter)Liquid Filter piece on the right of a piece. You must supply the fluid's registry name (e.g. *minecraft:water*).

## addWhitelistText()

<Color hex="#800">addWhitelistText(<text>)</Color>

Adds a text to the whitelisted text list. This would be used to specify an entity filter for the "entity_attack" action, for example.

## clearArea()

<Color hex="#800">clearArea()</Color>

Clears the current stored area.

## clearBlacklistItemFilter()

<Color hex="#800">clearBlacklistItemFilter()</Color>

Clears all stored blacklisted item filters.

## clearBlacklistLiquidFilter()

<Color hex="#800">clearBlacklistLiquidFilter()</Color>

Clears all stored blacklisted liquid filters.

## clearBlacklistText()

<Color hex="#800">clearBlacklistText()</Color>

Clears all stored blacklisted texts.

## clearWhitelistItemFilter()

<Color hex="#800">clearWhitelistItemFilter()</Color>

Clears all stored whitelisted item filters.

## clearWhitelistLiquidFilter()

<Color hex="#800">clearWhitelistLiquidFilter()</Color>

Clears all stored whitelisted liquid filters.

## clearWhitelistText()

<Color hex="#800">clearWhitelistText()</Color>

Clears all stored whitelisted texts.

## evaluateCondition()

<Color hex="#800">evaluateCondition()</Color>

Returns true/false. Used in [conditions](../programming/conditions.md) only. Will return true/false depending on whether or not the condition is satisfied. Drone Conditions can be checked right after setting <Color hex="#800">setAction()</Color>, but non-Drone conditions require that you wait until <Color hex="#800">isActionDone()</Color> returns true before the result of <Color hex="#800">evaluateCondition()</Color> is useful.

## exitPiece()

<Color hex="#800">exitPiece()</Color>

Stops the *Computer Control* piece in the Drone, and allows the Drone's program to proceed to the next puzzle piece in its program.

## forgetTarget()

<Color hex="#800">forgetTarget()</Color>

When the Drone is targeting any entity (from using the "entity_attack" action), this will stop attacking that target.

## getAction()

<Color hex="#800">getAction()</Color>

Returns a string that represents the last action set by <Color hex="#800">setAction()</Color>. Will return *nil* when no action is set. Can be used to make sure to only call <Color hex="#800">isActionDone()</Color> when this method does not return nil.

## getAllActions()

<Color hex="#800">getAllActions()</Color>

Returns a table of all the current selectable actions (like *pneumaticcraft:dig* or *pneumaticcraft:place'*. Each of these actions corresponds directly to a programming widget available in the [Programmer](../programming/programmer.md#ids) GUI.

Note: for actions which start with *pneumaticcraft:* (which is all default actions), the *pneumaticcraft:* prefix is optional.

## getAreaTypes()

<Color hex="#800">getAreaTypes()</Color>

Returns a table of all the possible area types (filled, frame, sphere...)

## getDronePosition()

<Color hex="#800">getDronePosition()</Color>

Returns the x/y/z position of the Drone. This method is here for historic compatibility, and it's recommended to use the new <Color hex="#800">getDronePositionVec()</Color> method instead.

## getDronePositionVec()

<Color hex="#800">getDronePosition()</Color>

Returns a table of the x/y/z coordinates of the Drone. Individual values can be easily extracted with the .x, .y and .z fields, e.g. <Color hex="#800">xpos = getDronePosition().x</Color>.

## getUpgrades()

<Color hex="#800">getUpgrades(<upgrade>)</Color>

Get the number of inserted upgrades of the given type.

The upgrade name can be found by mousing over any PneumaticCraft upgrade item with advanced info enabled (F3+H) and taking the item name with the '_upgrade' part removed.

e.g for *pneumaticcraft:speed_upgrade*, the name is "speed".

## getVariable()

<Color hex="#800">getVariable(<variable name>)</Color>

Returns the value of the variable from this Drone (x, y and z). It is possible to get [global](../programming/variables.md#global) (# prefix) and [special](../programming/variables.md#special) variables ($ prefix) too.

## hideArea()

<Color hex="#800">hideArea()</Color>

Stops in-world highlighting of the area stored in the Drone, as shown by <Color hex="#800">showArea()</Color>.

## isActionDone()

<Color hex="#800">isActionDone()</Color>

Returns true if the current action is done (e.g. "goto" has arrived at the target location, "inventory import" can't import anymore, "dig" has dug every possible block...)

## isConnectedToDrone()

<Color hex="#800">isConnectedToDrone()</Color>

Returns true if a Drone has connected with this Drone Interface (when the Drone's program has arrived at the ComputerCraft piece and made a connection).

## removeArea()

<Color hex="#800">removeArea(<x1>,<y1>,<z1>,<x2>,<y2>,<z2>,<areaType>)</Color>

Removes an area from the current stored area (equivalent to blacklisting the area).

## setAction()

<Color hex="#800">setAction(<action>)</Color>

Set an action for the Drone to do. This should be one of the actions returned by <Color hex="#800">getAllActions()</Color>; these correspond directly to programming widgets in the [Programmer](../programming/programmer.md) GUI, which shows the action name in widget tooltips when F3+H is toggled.

Note that when the prefix is *pneumaticcraft:*, that prefix is optional.

## setBlockOrder()

<Color hex="#800">setBlockOrder(<"closest"/"highToLow"/"lowToHigh">)</Color>

Sets the place/dig order of the Drone.

## setCanSteal()

<Color hex="#800">setCanSteal(<true/false>)</Color>

When the "pickup_item" action is used, this controls whether drones are allowed to steal items they normally should leave alone, e.g. items on an *Immersive Engineering* conveyor belt.

The default is 'false': drones will not try to steal items.

## setCheckLineOfSight()

<Color hex="#800">setCheckLineOfSight(<true/false>)</Color>

When the "entity_attack" action is used, this controls whether drones will attack any target in their area, or only targets they have a direct line of sight to.

The default is 'false'; line of sight is not checked.

## setCount()

<Color hex="#800">setCount(<amount>)</Color>

This configures the maximum number of items processed by import / export / drop actions, and is also used for the amount that's checked against in condition checks.

## setCraftingGrid()

<Color hex="#800">setCraftingGrid(<item/block name>, <item/block name>, ...(9x))</Color>

Sets up the crafting grid so when the "crafting" action is used, this recipe will be used. You need to specify all 9 items making up the recipe; for empty spaces supply *nil*. The item naming format is the same as for item filters.

## setDropStraight()

<Color hex="#800">setDropStraight(<true/false>)</Color>

When the "drop_item" action is the current action, this determines whether or not the item will be dropped with a random velocity (like a vanilla Dropper), or straight down.

## setEmittingRedstone()

<Color hex="#800">setEmittingRedstone(<strength>)</Color>

Sets the strength of redstone signal to emit when the "emit_redstone" action is the current action.

## setIsAndFunction()

<Color hex="#800">setIsAndFunction(<true/false>)</Color>

Used in conditions only. When true, all checked blocks must satisfy the condition requirements (>=10 etc).

## setMaxActions()

<Color hex="#800">setMaxActions(<amount>)</Color>

This sets the maximum number of actions performed on blocks before the action is considered 'done'. This applies to the "place", "dig" and "block_right_click" actions. Be sure to also call <Color hex="#800">setUseMaxActions(true)</Color> to enable usage of this.

## setOperator()

<Color hex="#800">setOperator(<"=" / ">=" / "<=">)</Color>

Used in conditions only. Says whether or not the condition is checking for an equal amount (=), an equal or greater than amount (>=), or an equal or lesser than amount (<=). The amount can be set using <Color hex="#800">setCount()</Color>.

## setPlaceFluidBlocks()

<Color hex="#800">setPlaceFluidBlocks(<true/false>)</Color>

Only used in the "liquid_export" action; when set to true the Drone will be allowed to place down fluid blocks in the world. Default of 'false' only allows fluids to be exported to fluid tanks.

## setRenameString()

<Color hex="#800">setRenameString(<name>)</Color>

Sets the name the Drone will be named to when the "rename" action is used.

## setRequiresTool()

<Color hex="#800">setRequiresTool(<true/false>)</Color>

This configures whether or not the Drone requires a tool when executing the "dig" and "harvest" actions. With no tool, the Drone will not attempt to carry out these actions.

## setRightClickType()

<Color hex="#800">setRightClickType("click_item" / "click_block")</Color>

When the current action is "block_right_click", this controls whether the drone should use the click logic of its held item (e.g. use a *Flint and Steel*), or try to activate the targeted block (e.g. flip a *Lever*). The default is "click_item".

## setSide()

<Color hex="#800">setSide(<side>, <accessible>)</Color>

Sets the specific side to be accessible or not. Used in the "inventory_import" and "inventory_export" actions to set which side of the inventory the Drone can access. It is also used for the "place" action to determine how to place the block.

## setSides()

<Color hex="#800">setSides(<down>, <up>, <north>, <south>, <east>, <west>)</Color>

Same as above, but in a single method to set all sides at once; this method takes six boolean parameters.

## setSignText()

<Color hex="#800">setSignText(<line1>, <line2>, ..., <lineN>)</Color>

Sets the text that will be sent to Signs and Aphorism Tiles when the *edit_sign* action is used.

## setSneaking()

<Color hex="#800">setSneaking(<true/false>)</Color>

Only used in the "block_right_click" action; this will set whether or not the fake player is sneaking while right clicking.

## setUseCount()

<Color hex="#800">setUseCount(<true/false>)</Color>

Sets whether or not the Drone has a maximum number of imported /exported / dropped items. If true, be sure to also call <Color hex="#800">setCount()</Color>.

## setUseMaxActions()

<Color hex="#800">setUseMaxActions(<true/false>)</Color>

Sets whether or not the Drone has a maximum number of actions performed on one block at a time before the command is considered 'done'. Applies to the "place", "dig" and "block_right_click" actions. If true, be sure to also call <Color hex="#800">setMaxActions()</Color>.

## setVariable()

<Color hex="#800">setVariable(<variable name>, <x>, <y>, <z>)</Color>

Sets a [variable](../programming/variables.md) for this Drone to given X/Y/Z coordinates. It is possible to set [global variables](../programming/variables.md#global).

## setVariable()

<Color hex="#800">setVariable(<variable name>, <boolean>)</Color>

Sets a [variable](../programming/coordinate_operator.md) for this Drone. 'true' is equivalent to passing (1,0,0), and 'false' is equivalent to passing (0,0,0).

## showArea()

<Color hex="#800">showArea()</Color>

Will show the current stored area using the same area renderer used if you click *Show Area* in a programming widget options GUI. <Color hex="#800">hideArea()</Color> can be used to hide any such areas.

Crafting a Drone Interface

<Recipe id="pneumaticcraft:drone_interface" />

