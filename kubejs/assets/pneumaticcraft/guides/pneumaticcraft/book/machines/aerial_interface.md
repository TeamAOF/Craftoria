---
navigation:
  title: "Aerial Interface"
  icon: "pneumaticcraft:aerial_interface"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:aerial_interface
---

# Aerial Interface

The *Aerial Interface* is a very powerful device which can connect directly with a player's inventory. When sufficiently [pressurized](../pressure.md), it can be interacted with just like any other inventory. Instead of landing in the Interface, items get sent *directly* to the owning player. You could use a [Logistics Requester Frame](../frames.md#requester) on the Interface to keep yourself supplied with 64 torches, for example.

By default, your main inventory is accessed through any side face of the Interface, and your armor slots are accessed via the top/bottom faces. However, this can be reconfigured via the **Side Configuration** GUI side-tab.

You can connect any face to any of:
- Main inventory
- Armor slots
- Offhand slot
- Ender inventory (as accessed by vanilla *Ender Chests*).

## Water Breathing

Obviously, because we have something that can link to a player, which is powered by [air](../pressure.md), there should be something that allows us to transfer this air when necessary - right? At a cost of 80mL/tick, you can breathe indefinitely under water.

This is slightly more efficient than a [Pneumatic Helmet](../pneumatic_helmet.md) with [SCUBA Upgrade](../upgrades.md#scuba), but does not provide the clear underwater vision.

## Interfacing Forge Energy

An *Aerial Interface* accepts *Forge Energy* (compatible with RF power and the power from many other mods). The energy stored in its internal buffer (100,000) is used to charge any FE-chargeable item in the player's inventory (and armor slots).

## Auto-Feeding

By inserting a [Dispenser Upgrade](../upgrades.md#dispenser) you can make the *Aerial Interface* act like a remote auto-feeder. Only food items will be accepted by the Interface, and only when you're hungry enough to fully utilize the provided meal. Note that when an inventory offers a stack of >1, the Interface waits until you can consume that amount. To make sure the smallest amount of food can be utilized use slow inserters such as *Hoppers*.

## Experience Handling

The [Dispenser Upgrade](../upgrades.md#dispenser) also allows you to pump *XP fluids* into or out of the Interface. When multiple types of XP fluid exist, you can choose which one to use via the **Experience** tab in the GUI.  This tab also shows which mods' experience fluids have been detected and are available for use. [Memory Essence](../memory_essence.md) is always available to use.

## Experience Handling (cont.)

Note that the Interface doesn't have an internal liquid buffer; it uses your experience directly as a 'tank'. This means that when pumping XP in or out, you need a device that can transport liquids at a rate higher than the amount of liquid XP per XP point. This rate is 20mB/tick for all known XP fluids at the time of writing.

## Auto-Charging

By pointing a [Charging Module](../charging_module.md) at the *Aerial Interface*, you can charge any [pressurizable](../pressure.md) items in your inventory.

Note that to charge any worn [Pneumatic Armor](../overview.md) items, the Charging Module must be pointed at a side of the Interface which is connected to your armor slots.

Crafting an Aerial Interface

<Recipe id="pneumaticcraft:aerial_interface" />

