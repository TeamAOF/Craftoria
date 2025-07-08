---
navigation:
  title: "Item Assignment Widget"
  icon: "pneumaticcraft:textures/progwidgets/item_assign_piece.png"
  parent: pneumaticcraft:widget_other.md
---

# Item Assignment Widget

The *Item Assignment* widget is an advanced widget that allows you to store an item in a [variable](./variables.md). Variables may be either coordinates or items; here we are talking about the latter.

See the [Coordinate Operator](./coordinate_operator.md) widget for information about coordinate variables and a general explanation about variables.

To store an item in a given *variable*, place an [Item Filter](./item_filter.md) widget on the *right-hand* side of the *Item Assignment* widget with the desired item. This item will be assigned to the variable, which you specify by *right-clicking* the *Item Assignment* widget. Only the actual item will be transferred from the filter; filter settings are not.

If you omit the *Item Filter* widget, the drone's held item will be assigned to the variable instead.

*Item Assignment Widget*

![](item_assign_piece.png)

