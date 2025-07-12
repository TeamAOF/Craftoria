---
navigation:
  title: 'For Each Coordinate Widget'
  icon: 'pneumaticcraft:textures/progwidgets/for_each_coordinate.png'
  parent: pneumaticcraft:widget_flow.md
---

# For Each Coordinate Widget

This advanced widget will loop through every single coordinate in the specified [Area](./area.md). For each coordinate, it will set the <Color id='dark_purple'>$(t:Right-click the widget to configure the variable)specified variable$(/t:Right-click the widget to configure the variable)</Color> to that coordinate, and jump to the [Label](./label.md) which matches the connected [Text](./text.md) widget. When that routine is done executing (when it reaches the end of a program where it would usually jump back to [Start](./start.md)), it will return to this widget and repeat for the next coordinate.

## Breaking

You can break out of the loop by setting the coordinate variable used by the _For Each Coordinate_ to any blockpos outside the current world's build height. Next time, when the program jumps back to the _For Each Coordinate_, it will notice this and cancel further traversal of coordinates.

_This behaviour has changed in MC 1.18+ due to new world height functionality; (0,0,0) used to be considered invalid, which was always dubious (void worlds), but even more so now._

_For Each Coordinate Widget_

![](for_each_coordinate.png)
