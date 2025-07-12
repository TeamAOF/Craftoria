---
navigation:
  title: "Coordinate Widget"
  icon: "pneumaticcraft:textures/progwidgets/coordinate_piece.png"
  parent: pneumaticcraft:widget_other.md
---

# Coordinate Widget

The *Coordinate* is a widget solely used as a parameter for the [Coordinate Operator](./coordinate_operator.md) and [Condition: Coordinate](./condition_coordinate.md) widgets.

This widget could be compared to the [Area](./area.md) widget: with the *Area* widget you're supplying *two* coordinates to make up an area, while with this widget you're just supplying *one*. There are two ways to supply a coordinate:

**Constant**
A constant coordinate is, well... constant. You can select one by selecting a [GPS Tool](../tools/gps_tool.md), or just type X/Y/Z values into the textfields directly.

**Variable**
By selecting Variable you can return the value stored in the [variable](./variables.md) as the coordinate. Keep in mind that with this you can only supply a coordinate, not modify the variable!

*Coordinate Widget*

![](coordinate_piece.png)

