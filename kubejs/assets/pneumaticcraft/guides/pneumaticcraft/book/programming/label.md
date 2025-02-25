---
navigation:
  title: "Label Widget"
  icon: "pneumaticcraft:textures/progwidgets/label_piece.png"
  parent: pneumaticcraft:widget_flow.md
---

# Label Widget

This widget is purely focused on [program flow](./flow_control.md). The label defines a point in the program that [Jump](./jump.md) and [Condition](./conditions.md) widgets can jump to. You must attach a [Text](./text.md) widget to this widget to name it. Any jumps/conditions using a *Text* widget of that name will then jump to this label.

A *Label* widget can be used to create a *branch* in the program flow (when using [Conditions](./conditions.md)), or just to organize sections of your program for clarity by putting them next to each other. A useful tip is to check **Show Flow** checkbox at the bottom left of the [Programmer](./programmer.md) GUI;  it will show lines linking *Jump/Condition/Label* widgets of the same name.

*Label Widget*

![](label_piece.png)

