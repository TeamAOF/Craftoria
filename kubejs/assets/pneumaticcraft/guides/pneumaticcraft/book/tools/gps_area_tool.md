---
navigation:
  title: "GPS Area Tool"
  icon: "pneumaticcraft:gps_area_tool"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:gps_area_tool
---

# GPS Area Tool

The *GPS Area Tool* is an advanced version of the [GPS Tool](./gps_tool.md), which can store *two* coordinates in the world. *Right-click* a block to change the first coordinate (<Color hex="#f00">P1</Color>), and *left-click* for the second coordinate (<Color hex="#0f0">P2</Color>).

You can quickly adjust coordinates by scrolling the mouse wheel while sneaking; the coordinate changed will be the last one you clicked.

Sneaking and right- or left-clicking air will note the 'active' coordinate without storing it; this is the coordinate adjusted by scrolling the mouse wheel.

By *right* or *left-clicking* in the air, you can open a GUI to enter precise block coordinates; click the <Color hex="#f00">P1</Color> or <Color hex="#0f0">P2</Color> button as appropriate.

In the GUI, you can also change the *Area type* for the tool, allowing you to preview the area in different configurations.

The *GPS Area Tool* supports [Global Variables](../programming/variables.md#global) like the basic [GPS Tool](./gps_tool.md#variables) does, but of course, *two* variables may be used.

In a [Programmer](../programming/programmer.md), *left-click* the programming area background with the *GPS Area Tool* to create a new [Area](../programming/area.md) puzzle piece, or *left-click* on an existing [Area](../programming/area.md) puzzle piece to update it with this tool's settings.

Crafting a GPS Area Tool

<Recipe id="pneumaticcraft:gps_area_tool" />

