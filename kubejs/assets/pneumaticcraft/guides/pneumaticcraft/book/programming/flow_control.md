---
navigation:
  title: "Flow Control"
  icon: "pneumaticcraft:textures/progwidgets/jump_piece.png"
  parent: pneumaticcraft:programming.md
---

# Flow Control

When a [Drone](../drone.md) is deployed, it immediately starts to execute its stored program. Execution flow occurs as follows:
- The program *always* begins at the [Start](./start.md) widget, of which there can be only one.
- Flow normally proceeds *downward*; to the widget connected to the bottom of the current widget.


- A widget executes its given operation until it decides it's *done* - the definition of 'done' varies from widget to widget, and is described in the pages for each individual widget.
- When there's no widget connected to the bottom of the current widget, execution returns to the [Start](./start.md) widget.

That's the basics. There are few special cases, however, described next...

## Flow Control Widgets


- The [Label](./label.md) widget acts a point in the program to be jumped to.
- The [Jump](./jump.md) widget triggers an immediate, unconditional, jump to a matching *Label* widget.
- [Condition](./conditions.md) widgets can trigger a jump, based on the condition they're testing.
- The advanced [For Each Item](./for_each_item.md) and [For Each Coordinate](./for_each_coordinate.md) widgets repeatedly jump to a *Label*, for their list of inputs.

A couple more special widgets exist, which affect flow control:
- The [Standby](./standby.md) widget, which puts the drone to 'sleep' until another widget actually has something to do.
- The [Suicide](./suicide.md) widget, which drops the *Drone* as an item, immediately terminating execution.

