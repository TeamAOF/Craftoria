---
navigation:
  title: 'GPS Area Tool'
  icon: 'pneumaticcraft:gps_area_tool'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:gps_area_tool
---

# GPS Area Tool

The _GPS Area Tool_ is an advanced version of the [GPS Tool](./gps_tool.md), which can store _two_ coordinates in the world. _Right-click_ a block to change the first coordinate (<Color id="red">P1</Color>), and _left-click_ for the second coordinate (<Color hex="#0f0">P2</Color>).

You can quickly adjust coordinates by scrolling the mouse wheel while sneaking; the coordinate changed will be the last one you clicked.

Sneaking and right- or left-clicking air will note the 'active' coordinate without storing it; this is the coordinate adjusted by scrolling the mouse wheel.

By _right_ or _left-clicking_ in the air, you can open a GUI to enter precise block coordinates; click the <Color id="red">P1</Color> or <Color hex="#0f0">P2</Color> button as appropriate.

In the GUI, you can also change the _Area type_ for the tool, allowing you to preview the area in different configurations.

The _GPS Area Tool_ supports [Global Variables](../programming/variables.md#global) like the basic [GPS Tool](./gps_tool.md#variables) does, but of course, _two_ variables may be used.

In a [Programmer](../programming/programmer.md), _left-click_ the programming area background with the _GPS Area Tool_ to create a new [Area](../programming/area.md) puzzle piece, or _left-click_ on an existing [Area](../programming/area.md) puzzle piece to update it with this tool's settings.

Crafting a GPS Area Tool

<Recipe id="pneumaticcraft:gps_area_tool" />
