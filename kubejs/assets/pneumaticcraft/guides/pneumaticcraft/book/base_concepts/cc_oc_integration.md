---
navigation:
  title: 'Computer Integration'
  icon: 'pneumaticcraft:textures/patchouli/computer.png'
  parent: pneumaticcraft:base_concepts.md
---

# Computer Integration

When _ComputerCraft_ or _Open Computers_ is installed, you'll be able to interact with almost every <Color id="dark_green">PneumaticCraft: Repressurized</Color> machine, and [Drones](../machines/drone_interface.md).

Any of the machines listed here can be interacted with as CC/OC peripherals.

## ComputerCraft

In Lua, you can run _m = peripheral.wrap(\<side\>)_, where _\<side\>_ is the side of the computer the peripheral is connected to (top, bottom, left, right, back, front). Then you can use any of the following functions with _m.\<functionName\>_.

Anywhere in the following functions where a '\<side\>' appears as one of the arguments, 'up', 'down', 'north', 'south', 'east', 'west' are valid.

## Open Computers

You will need to use an _Adapter_ to connect your computer to $(pnc) machines; they will then appear as OC components, which show up if you run *=components.list()*$(/pnc) in an OC Lua environment. Then any of the following functions can be used, e.g. _p = components.air_compressor.getPressure()_ will retrieve the current pressure of an attached _Air Compressor_.

## Common Methods

The following methods are common to _all_ <Color id="dark_green">PneumaticCraft: Repressurized</Color> machines:

- <Color id="dark_red">getPressure(), getPressure(\<side\>)</Color>: gets the machine's pressure. \<side\> is optional, only useful for the [Vacuum Pump](../machines/vacuum_pump.md), which has side-specific pressures.
- <Color id="dark_red">getDangerPressure()</Color>: get the pressure at which the machine is at risk of explosion
- <Color id="dark_red">getCriticalPressure()</Color>: get the hard maximum pressure at which the machine will certainly explode

## Heat-Related Methods

The following methods are common to _all_ <Color id="dark_green">PneumaticCraft: Repressurized</Color> machines which support the concept of [Heat](./heat.md):

- <Color id="dark_red">getTemperature(), getTemperature(\<side\>)</Color>: gets the machine's temperature. \<side\> is optional, only useful for the [Vortex Tube](../machines/vortex_tube.md), which has different temperatures depending on the side.

## Air Cannon

<a name="air_cannon"></a>
<ItemImage id="pneumaticcraft:air_cannon" />

- <Color id="dark_red">setExternalControl(\<true/false\>)</Color>: When true, this will prevent the cannon being rotated with normal methods (GPS Tool insertion, change in Range Upgrades..)
- <Color id="dark_red">setTargetLocation(\<x\>,\<y\>,\<z\>)</Color>: Point the cannon at the given target location instead of that stored in a GPS Tool.
- <Color id="dark_red">setRotationAngle(\<angle\>)</Color>: Rotate the cannon yaw to the angle specified.
- <Color id="dark_red">setHeightAngle(\<angle\>)</Color>: Rotate the cannon pitch to the angle specified.
- <Color id="dark_red">isDoneRotating()</Color>: Returns true when the cannon is done turning.
- <Color id="dark_red">getMinWorkingPressure()</Color>: Returns the minimal pressure needed to fire the cannon (the yellow to green threshold in the GUI).
- <Color id="dark_red">fire()</Color>: Fires the cannon, provided that there's enough pressure, and when there are items inserted. Returns true if successful.

<a name="elevator"></a>

## Elevator

<ItemImage id="pneumaticcraft:elevator_base" />

- <Color id="dark_red">setExternalControl(\<true/false\>)</Color>: When true, set the Elevator's <Color id="red">redstone mode</Color> to 'Elevator Caller' mode, which is also applicable for computer control. You don't have to set it prior to calling <Color id="dark_red">setTargetHeight()</Color>; that method will change the Elevator to external control automatically.
- <Color id="dark_red">getMinWorkingPressure()</Color>: Get the minimal pressure needed to extend the Elevator. Making the Elevator descend is free.
- <Color id="dark_red">setTargetHeight(\<height\>)</Color>: Sets the Elevator's target height to the height parsed (in meters/blocks, floating point).
- <Color id="dark_red">getTargetHeight()</Color>: Get the Elevator's target height (in meters/blocks, floating point).
- <Color id="dark_red">getCurrentHeight()</Color>: Get the Elevator's current height (in meters/blocks, floating point).
- <Color id="dark_red">getVelocity()</Color>: Gets the elevator's current velocity, in blocks per tick (where there are 20 ticks in a second). Negative values indicate that the elevator is descending.

## Universal Sensor

<a name="universal_sensor"></a>
<ItemImage id="pneumaticcraft:universal_sensor" />

- <Color id="dark_red">getSensorNames()</Color>: Returns a table of all known sensor names.
- <Color id="dark_red">getSensor()</Color>: Returns the name of the currently-selected sensor.
- <Color id="dark_red">setSensor(\<sensorName\>), setSensor(\<index\>), setSensor()</Color>: Sets the current selected sensor. \<sensorName\> is one of the names returned by <Color id="dark_red">getSensorNames()</Color>. \<index\> is an index on the returned table from <Color id="dark_red">getSensorNames()</Color>. When using the no-arg <Color id="dark_red">setSensor()</Color>, no sensor will be selected (the machine goes idle and uses no air). Returns true if the sensor is possible with the currently inserted upgrades.
- <Color id="dark_red">setTextField(\<text\>)</Color>: Some sensors use a text field to specify additional options (e.g. the 'Entities in range' sensor accepts an [entity filter string](./entity_filter.md)). You can specify the desired text in here.
- <Color id="dark_red">getTextField()</Color>: Returns the text currently stored in the _Universal Sensor_.
- <Color id="dark_red">isSensorEventBased()</Color>: There are two categories of sensors: event-based, and polling sensors. Event based sensors wait for something to happen (player attacks, item pickups). Polling sensors check the state of the sensor periodically (entities in range, world time, rain sensor). This function returns true if the current selected sensor is event-based.
- <Color id="dark_red">getSensorValue()</Color>: If the current sensor is a polling sensor, return the (non-inverted) redstone signal it would output. Note that setting the sensor and immediately getting the output is unreliable, as many polling sensors poll infrequently for performance reasons. Thus, this method causes a pull-event to be triggered; get the output in response to that. If no polling sensor is selected, an exception will be thrown.
- <Color id="dark_red">getMinWorkingPressure()</Color>: Returns the minimal pressure needed to make the Universal Sensor work (the yellow to green threshold in the GUI).
- <Color id="dark_red">setGPSToolCoordinate(\<slotIndex\>,\<x\>,\<y\>,\<z\>)</Color>: Sets the location stored in the GPS Tool located in the given slot (starting with 1) to the provided location. This is useful for sensors that use a location.

For event based sensors (e.g. the player right click sensor), getting the sensor value is event-based. You get the event by doing a <Color id="dark_red">\<arguments\> = os.pullEvent("universalSensor")</Color>. Usually the arguments consist of \<eventName, redstoneStrength\>. The player right click sensor is an exception, as \<eventName, redstoneStrength, interactedX, interactedY, interactedZ\> is returned. This allows for some interesting uses...
