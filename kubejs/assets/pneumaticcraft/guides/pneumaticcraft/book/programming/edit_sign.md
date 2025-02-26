---
navigation:
  title: "Edit Sign Widget"
  icon: "pneumaticcraft:textures/progwidgets/edit_sign_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# Edit Sign Widget

This will edit all *Signs* and/or [Aphorism Tiles](../machines/aphorism_tile.md) in the connected [Area](./area.md) to the text specified by the connected [Text](./text.md) widget(s).

Each connected *Text* widget represents one line; by connecting multiple *Text* widgets, you can set a multi-line message.

## Variables

You can also insert the value of a [variable](./variables.md), by including *${<var_name>}* in the text, e.g.

  <Color hex="#272">Counter: ${counter}</Color>

would expand to *Counter: 1, 2, 3* if the *counter* variable was set to *x=1,y=2,z=3*. [Special](./variables.md#special) and [Global variables](./variables.md#global) can also be used here.

*Edit Sign Widget*

![](edit_sign_piece.png)

