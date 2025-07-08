---
navigation:
  title: "Programmable Controller"
  icon: "pneumaticcraft:programmable_controller"
  parent: pneumaticcraft:programming.md
item_ids:
  - pneumaticcraft:programmable_controller
---

# Programmable Controller

A Programmable Controller can do very similar things to what [Drones](../tools/drone.md) can do. A program can be written in a [Programmer](./programmer.md), and saved to either a *Drone* or [Network API](../components/network_components.md#network_api). Either of these items can then be placed in the *Programmable Controller*. Provided that there is enough [pressure](../base_concepts/pressure.md), the *Programmable Controller* will execute the program just as it would when programmed onto a *Drone*. 

There are a few differences, though:
- A *Programmable Controller* uses a miniature version of a *Drone* - a *minidrone*. It's not a real entity, so no pathfinding is involved, and the *minidrone* can move through walls. This has the benefit of being more friendly to the server and more reliable in general.
- When executing a program, the *Programmable Controller* will use air at a rate of 10mL/tick (whereas Drones only use 1mL/tick).


- The *Programmable Controller* cannot execute the following widgets: Computer Piece, Entity Attack, Drone Condition: Entity, Entity Export, Entity Import, Teleport, Standby, Suicide.

The *Programmable Controller* is generally best suited to larger applications, such as excavating big areas or building large structures.

## Interfacing Items/Fluids

Any items or fluids that the *minidrone* collects can be interfaced via the sides of the *Programmable Controller* block.

By default, the 'drone' has a single inventory slot, and a 16000mB tank. The inventory size can be increased by adding [Inventory Upgrades](../base_concepts/upgrades.md#inventory) (max 35), which also increases the tank size by 1000mB per upgrade.

## Interfacing (cont.)

By default, the top & side faces of the *Programmable Controller* can be used to interface with items, and the bottom face can be used to insert or remove programmable items, but this can be adjusted if desired via the **Side Configuration** GUI tab.

All faces of the *Programmable Controller* can always be used to interface fluids.

## Charging Items

The Programmable Controller is capable of *charging* the minidrone's held item, i.e. the item in slot 0 of the drone's inventory. This includes both pressurizable items such as the [Jackhammer](../tools/jackhammer.md), and items using *Forge Energy*. Air and/or FE from the Programmable Controller's own buffers is used to do this. Charging is disabled by default; enable it via the controller's GUI (*Held Item Charging* side tab).

Crafting a Programmable Controller

<Recipe id="pneumaticcraft:programmable_controller" />

