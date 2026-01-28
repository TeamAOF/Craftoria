---
navigation:
  title: "Entity Import Widget"
  icon: "pneumaticcraft:textures/progwidgets/entity_import_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# Entity Import Widget

The [Drone](../tools/drone.md) will go to the closest entity in the specified [Area](./area.md) that matches an (optional) attached [Entity Filter](../base_concepts/entity_filter.md) in a connected [Text](./text.md) widget, and pick it up to be transported.

This includes players, although players can easily escape a *Drone* by *sneaking* to dismount. Having said that, being carried around by a flying entity you can control has its upsides...

## Experience Orbs

Drones are also able to import *Experience Orbs* using this widget; the *@orb* entity filter will match XP orbs. Imported orbs are converted to [Memory Essence](../base_concepts/memory_essence.md) and stored in the drone's internal tank; you can then use the [Liquid Export](./liquid_export.md) widget to transfer that to a fluid tank.

## Area Limitations

Keep in mind that any [Area](./area.md) widgets connected to this widget must have an area type of *Box*; this is the only supported shape. It's possible to create different shapes, though, by using whitelisting/blacklisting of areas.

*Alien abduction*

![](entity_import_piece.png)

