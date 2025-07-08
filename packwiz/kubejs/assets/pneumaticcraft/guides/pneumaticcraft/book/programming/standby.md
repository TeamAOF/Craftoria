---
navigation:
  title: "Standby Widget"
  icon: "pneumaticcraft:textures/progwidgets/standby_piece.png"
  parent: pneumaticcraft:widget_flow.md
---

# Standby Widget

When this widget is executed, the [Drone](../tools/drone.md) will turn off its propellers, and fall from the sky. This widget can be used to save [air](../base_concepts/pressure.md), as the Drone doesn't use any air in standby mode.

The *Drone* will continue executing other widgets, though; as soon as it executes any widget which makes it do some actual work, the *Drone* will turn on its propellers again.

*Sleeping Beauty*

![](standby_piece.png)

