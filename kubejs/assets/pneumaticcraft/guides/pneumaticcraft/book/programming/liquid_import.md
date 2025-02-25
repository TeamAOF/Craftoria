---
navigation:
  title: "Fluid Import Widget"
  icon: "pneumaticcraft:textures/progwidgets/liquid_import_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# Fluid Import Widget

The *Fluid Import Widget* will make the [Drone](../drone.md) move to the nearest tank within the specified [area](./area.md), extract fluid from that tank and it put it in its own tank.

It can also suck up fluids from in-world fluid blocks, making the *Drone* act as a portable pump.

*Right-click* the widget to open the setup GUI, where you can specify from which side(s) the Drone should extract the fluids from, and the maximum amount of imported fluid per operation (in mB).

You can <Color hex="#880">$(t:Connect on the right to whitelist, on the left to blacklist)connect$(/t:Connect on the right to whitelist, on the left to blacklist)</Color> a [Fluid Filter](./liquid_filter.md) to limit what may be imported by the Drone.

This widget is done when the *Drone's* tank is full or when no more (applicable) liquids can be found in the tanks.

*Slurp*

![](liquid_import_piece.png)

