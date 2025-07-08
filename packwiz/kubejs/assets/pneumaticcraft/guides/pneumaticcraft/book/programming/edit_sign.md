---
navigation:
  title: 'Edit Sign Widget'
  icon: 'pneumaticcraft:textures/progwidgets/edit_sign_piece.png'
  parent: pneumaticcraft:widget_interact.md
---

# Edit Sign Widget

This will edit all _Signs_ and/or [Aphorism Tiles](../machines/aphorism_tile.md) in the connected [Area](./area.md) to the text specified by the connected [Text](./text.md) widget(s).

Each connected _Text_ widget represents one line; by connecting multiple _Text_ widgets, you can set a multi-line message.

## Variables

You can also insert the value of a [variable](./variables.md), by including _${\<var_name\>}_ in the text, e.g.

<Color id='dark_green'>Counter: ${counter}</Color>

would expand to _Counter: 1, 2, 3_ if the _counter_ variable was set to _x=1,y=2,z=3_. [Special](./variables.md#special) and [Global variables](./variables.md#global) can also be used here.

_Edit Sign Widget_

![](edit_sign_piece.png)
