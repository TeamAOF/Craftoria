---
navigation:
  title: "Computer Integration"
  icon: "pneumaticcraft:textures/patchouli/computer.png"
  parent: pneumaticcraft:base_concepts.md
---

# Computer Integration

When *ComputerCraft* or *Open Computers* is installed, you'll be able to interact with almost every <Color hex="#228">PneumaticCraft: Repressurized</Color> machine, and [Drones](../drone_interface.md).

Any of the machines listed here can be interacted with as CC/OC peripherals.

## ComputerCraft

In Lua, you can run *m = peripheral.wrap(<side>)*, where *<side>* is the side of the computer the peripheral is connected to (top, bottom, left, right, back, front). Then you can use any of the following functions with *m.<functionName>*.

Anywhere in the following functions where a '<side>' appears as one of the arguments, 'up', 'down', 'north', 'south', 'east', 'west' are valid.

## Open Computers

You will need to use an *Adapter* to connect your computer to $(pnc) machines; they will then appear as OC components, which show up if you run *=components.list()*$(/pnc) in an OC Lua environment. Then any of the following functions can be used, e.g. *p = components.air_compressor.getPressure()* will retrieve the current pressure of an attached *Air Compressor*.

## Common Methods

The following methods are common to *all* <Color hex="#228">PneumaticCraft: Repressurized</Color> machines:
- <Color hex="#800">getPressure(), getPressure(<side>)</Color>: gets the machine's pressure. <side> is optional, only useful for the [Vacuum Pump](../vacuum_pump.md), which has side-specific pressures.
- <Color hex="#800">getDangerPressure()</Color>: get the pressure at which the machine is at risk of explosion
- <Color hex="#800">getCriticalPressure()</Color>: get the hard maximum pressure at which the machine will certainly explode

## Heat-Related Methods

The following methods are common to *all* <Color hex="#228">PneumaticCraft: Repressurized</Color> machines which support the concept of [Heat](./heat.md):
- <Color hex="#800">getTemperature(), getTemperature(<side>)</Color>: gets the machine's temperature. <side> is optional, only useful for the [Vortex Tube](../vortex_tube.md), which has different temperatures depending on the side.

<a name="air_cannon"></a>
<ItemImage id="pneumaticcraft:air_cannon" />


- <Color hex="#800">setExternalControl(<true/false>)</Color>: When true, this will prevent the cannon being rotated with normal methods (GPS Tool insertion, change in Range Upgrades..)
- <Color hex="#800">setTargetLocation(<x>,<y>,<z>)</Color>: Point the cannon at the given target location instead of that stored in a GPS Tool.

## Air Cannon (cont.)


- <Color hex="#800">setRotationAngle(<angle>)</Color>: Rotate the cannon yaw to the angle specified.
- <Color hex="#800">setHeightAngle(<angle>)</Color>: Rotate the cannon pitch to the angle specified.
- <Color hex="#800">isDoneRotating()</Color>: Returns true when the cannon is done turning.
- <Color hex="#800">getMinWorkingPressure()</Color>: Returns the minimal pressure needed to fire the cannon (the yellow to green threshold in the GUI).

## Air Cannon (cont.)


- <Color hex="#800">fire()</Color>: Fires the cannon, provided that there's enough pressure, and when there are items inserted. Returns true if successful.

<a name="elevator"></a>
## Elevator

<ItemImage id="pneumaticcraft:elevator_base" />


- <Color hex="#800">setExternalControl(<true/false>)</Color>: When true, set the Elevator's <Color hex="#f00">redstone mode</Color> to 'Elevator Caller' mode, which is also applicable for computer control. You don't have to set it prior to calling <Color hex="#800">setTargetHeight()</Color>; that method will change the Elevator to external control automatically.

## Elevator (cont.)


- <Color hex="#800">getMinWorkingPressure()</Color>: Get the minimal pressure needed to extend the Elevator. Making the Elevator descend is free.
- <Color hex="#800">setTargetHeight(<height>)</Color>: Sets the Elevator's target height to the height parsed (in meters/blocks, floating point).
- <Color hex="#800">getTargetHeight()</Color>: Get the Elevator's target height (in meters/blocks, floating point).
- <Color hex="#800">getCurrentHeight()</Color>: Get the Elevator's current height (in meters/blocks, floating point).

## Elevator (cont.)


- <Color hex="#800">getVelocity()</Color>: Gets the elevator's current velocity, in blocks per tick (where there are 20 ticks in a second). Negative values indicate that the elevator is descending.

<a name="universal_sensor"></a>
<ItemImage id="pneumaticcraft:universal_sensor" />


- <Color hex="#800">getSensorNames()</Color>: Returns a table of all known sensor names.
- <Color hex="#800">getSensor()</Color>: Returns the name of the currently-selected sensor.

## Universal Sensor (cont.)


- <Color hex="#800">setSensor(<sensorName>), setSensor(<index>), setSensor()</Color>: Sets the current selected sensor. <sensorName> is one of the names returned by <Color hex="#800">getSensorNames()</Color>. <index> is an index on the returned table from <Color hex="#800">getSensorNames()</Color>. When using the no-arg <Color hex="#800">setSensor()</Color>, no sensor will be selected (the machine goes idle and uses no air). Returns true if the sensor is possible with the currently inserted upgrades. 

## Universal Sensor (cont.)


- <Color hex="#800">setTextField(<text>)</Color>: Some sensors use a text field to specify additional options (e.g. the 'Entities in range' sensor accepts an [entity filter string](./entity_filter.md)). You can specify the desired text in here.
- <Color hex="#800">getTextField()</Color>: Returns the text currently stored in the *Universal Sensor*.

## Universal Sensor (cont.)


- <Color hex="#800">isSensorEventBased()</Color>: There are two categories of sensors: event-based, and polling sensors. Event based sensors wait for something to happen (player attacks, item pickups). Polling sensors check the state of the sensor periodically (entities in range, world time, rain sensor). This function returns true if the current selected sensor is event-based.

## Universal Sensor (cont.)


- <Color hex="#800">getSensorValue()</Color>: If the current sensor is a polling sensor, return the (non-inverted) redstone signal it would output. Note that setting the sensor and immediately getting the output is unreliable, as many polling sensors poll infrequently for performance reasons. Thus, this method causes a pull-event to be triggered; get the output in response to that. If no polling sensor is selected, an exception will be thrown.

## Universal Sensor (cont.)


- <Color hex="#800">getMinWorkingPressure()</Color>: Returns the minimal pressure needed to make the Universal Sensor work (the yellow to green threshold in the GUI).
- <Color hex="#800">setGPSToolCoordinate(<slotIndex>,<x>,<y>,<z>)</Color>: Sets the location stored in the GPS Tool located in the given slot (starting with 1) to the provided location. This is useful for sensors that use a location.

## Universal Sensor (cont.)

For event based sensors (e.g. the player right click sensor), getting the sensor value is event-based. You get the event by doing a <Color hex="#800"><arguments> = os.pullEvent("universalSensor")</Color>. Usually the arguments consist of <eventName, redstoneStrength>. The player right click sensor is an exception, as <eventName, redstoneStrength, interactedX, interactedY, interactedZ> is returned. This allows for some interesting uses...

