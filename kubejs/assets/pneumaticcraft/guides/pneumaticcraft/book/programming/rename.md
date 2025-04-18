---
navigation:
  title: 'Rename Widget'
  icon: 'pneumaticcraft:textures/progwidgets/rename_piece.png'
  parent: pneumaticcraft:widget_other.md
---

# Rename Widget

This widget renames the [Drone](../tools/drone.md), as if you had _right-clicked_ it with a _Name Tag_. The name is entered in the attached [Text](./text.md) widget.

## Variables

You can also insert the value of a [variable](./variables.md), by including _${\<var_name\>}_ in the text, e.g.

<Color id='dark_green'>Counter: ${counter}</Color>

would expand to _Counter: 1, 2, 3_ if the _counter_ variable was set to _x=1,y=2,z=3_. [Special](./variables.md#special) and [Global variables](./variables.md#global) can also be used here.

_Who are you again?_

![](rename_piece.png)
