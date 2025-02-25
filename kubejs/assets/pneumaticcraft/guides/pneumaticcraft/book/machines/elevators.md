---
navigation:
  title: "Elevators"
  icon: "pneumaticcraft:elevator_base"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:elevator_base
  - pneumaticcraft:elevator_frame
  - pneumaticcraft:elevator_caller
---

# Elevators

The *Elevator* is a machine that can be used to vertically transport any entities, whether it be an item, mob, animal or player.

You need to place an *Elevator Base* at the bottom. You can stack multiple bases on top of each other.

On top of this, place *Elevator Frames*, which act as a support for the elevator.

Both the number of *Elevator Bases* and the number of *Elevator Frames* determine how high the *Elevator* can extend. The maximum height of an *Elevator* is the lower of:
- 1 x the number of vertically-stacked *Elevator Frames*, or
- <Color hex="#880">$(t:You can change this multiplier in mod config - see 'I:elevatorBaseBlocksPerBase')6 x$(/t:You can change this multiplier in mod config - see 'I:elevatorBaseBlocksPerBase')</Color> the number of vertically-stacked *Elevator Bases*

The *Elevator* can operate in one of two modes:
- **Redstone**: a <Color hex="#f00">redstone signal</Color> applied to any *Elevator Base* controls the elevator's height, proportional to the signal strength (no signal = 0% extension, full signal = 100% extension).
- **Elevator Caller**: The [Elevator Caller](#caller) can provide some more sophisticated control over the elevator.

## Multiblock Elevators

You can create bigger *Elevators* by placing more *Elevator Bases* next to each other horizontally. When the top *Elevator Base* of every connected *Elevator* is at the same height, the *Elevators* will share the floors (defined by [Elevator Callers](#caller)), redstone input, and therefore act as a single multiblock.

## Saving Air

The *Elevator Base* can accept up to four [Charging Upgrades](../upgrades.md#charging), which allow it to reclaim used air when the elevator descends (normally descent costs no air but does not regenerate air either).

This comes at a cost of slower descent; with 4 upgrades installed, air is reclaimed at 60% of the cost to rise that distance, but descent will be 40% slower.

<a name="caller"></a>
## Elevator Caller

*Elevator Callers* placed next to *Elevator Frames* are used to control the height of the *Elevator*. When you place down an *Elevator Frame*, it'll calculate how many *floors* there are, defined by other *Elevator Callers*.

*Floors* can be named in the *Elevator Base* GUI; floor names will be displayed as buttons on each *Elevator Caller*. They can be clicked to call the *Elevator* to that floor.

## Elevator Caller (cont.)

In addition, an *Elevator Caller* will emit a <Color hex="#f00">redstone signal</Color> when the *Elevator* is at its floor, and providing a Caller with a <Color hex="#f00">redstone pulse</Color> will call the *Elevator* to its floor.

Finally, the *Elevator Caller* can be camouflaged to look like other blocks with the [Camouflage Applicator](../camo_applicator.md) tool.

*A 3x3 Elevator with two visible Elevator Callers*

TODO: Unsupported flag 'border'
![](elevator.png)



<Recipe id="pneumaticcraft:elevator_base_1" />

<Recipe id="pneumaticcraft:elevator_frame" />



<Recipe id="pneumaticcraft:elevator_caller" />

