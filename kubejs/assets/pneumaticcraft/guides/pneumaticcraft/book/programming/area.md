---
navigation:
  title: "Area Widget"
  icon: "pneumaticcraft:textures/progwidgets/area_piece.png"
  parent: pneumaticcraft:widget_other.md
---

# Area Widget

The *Area* widget is solely used as a parameter for other widgets, to tell them what area (which could be a single block) they should apply to. To use this widget, you will need a [GPS Tool](../gps_tool.md) and/or [GPS Area Tool](../gps_area_tool.md).

There are three common ways to set up an Area widget:

1. *Right-click* the Area widget in the [Programmer](./programmer.md) GUI to open a configuration GUI, and set it up there. You can set the area's extent with the two *GPS* buttons (click to open another GUI and select a [GPS Tool](../gps_tool.md) from your inventory), and choose the *Area Type* and associated parameters with the radio buttons beneath.

2. Set up a [GPS Tool](../gps_tool.md) or [GPS Area Tool](../gps_area_tool.md) in-world. In the [Programmer](./programmer.md) GUI, you can: 
- *Left-click* the *GPS (Area) Tool* on an existing *Area* widget to copy the tool's settings to the widget
- *Left-click* a *GPS Tool* on an empty programming area to create a new [Coordinate](./coordinate.md) widget
- *Shift+left-click* a *GPS Tool* on an empty programming area to create a new *Area* widget
- *Left-click* a *GPS Area Tool* on an empty programming area to create a new *Area* widget.

3. The advanced option: you can use *variables*, as created by the [Coordinate Operator](./coordinate_operator.md) widget. The [Programmer](./programmer.md) must be in *Advanced* mode for variables to be available; beside the GPS buttons, you will now also see drop-down selection fields. You can choose a known variable name there, and the corresponding corner of this Area will use that variable's position.

*Area Widget*

![](area_piece.png)

