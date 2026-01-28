---
navigation:
  title: 'Aerial Interface'
  icon: 'pneumaticcraft:aerial_interface'
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:aerial_interface
---

# Aerial Interface

The _Aerial Interface_ is a very powerful device which can connect directly with a player's inventory. When sufficiently [pressurized](../base_concepts/pressure.md), it can be interacted with just like any other inventory. Instead of landing in the Interface, items get sent _directly_ to the owning player. You could use a [Logistics Requester Frame](../logistics/frames.md#requester) on the Interface to keep yourself supplied with 64 torches, for example.

By default, your main inventory is accessed through any side face of the Interface, and your armor slots are accessed via the top/bottom faces. However, this can be reconfigured via the **Side Configuration** GUI side-tab.

You can connect any face to any of:

- Main inventory
- Armor slots
- Offhand slot
- Ender inventory (as accessed by vanilla _Ender Chests_).

## Water Breathing

Obviously, because we have something that can link to a player, which is powered by [air](../base_concepts/pressure.md), there should be something that allows us to transfer this air when necessary - right? At a cost of 80mL/tick, you can breathe indefinitely under water.

This is slightly more efficient than a [Pneumatic Helmet](../armor/pneumatic_helmet.md) with [SCUBA Upgrade](../base_concepts/upgrades.md#scuba), but does not provide the clear underwater vision.

## Interfacing Forge Energy

An _Aerial Interface_ accepts _Forge Energy_ (compatible with RF power and the power from many other mods). The energy stored in its internal buffer (100,000) is used to charge any FE-chargeable item in the player's inventory (and armor slots).

## Auto-Feeding

By inserting a [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser) you can make the _Aerial Interface_ act like a remote auto-feeder. Only food items will be accepted by the Interface, and only when you're hungry enough to fully utilize the provided meal. Note that when an inventory offers a stack of >1, the Interface waits until you can consume that amount. To make sure the smallest amount of food can be utilized use slow inserters such as _Hoppers_.

## Experience Handling

The [Dispenser Upgrade](../base_concepts/upgrades.md#dispenser) also allows you to pump _XP fluids_ into or out of the Interface. When multiple types of XP fluid exist, you can choose which one to use via the **Experience** tab in the GUI. This tab also shows which mods' experience fluids have been detected and are available for use. [Memory Essence](../base_concepts/memory_essence.md) is always available to use.

Note that the Interface doesn't have an internal liquid buffer; it uses your experience directly as a 'tank'. This means that when pumping XP in or out, you need a device that can transport liquids at a rate higher than the amount of liquid XP per XP point. This rate is 20mB/tick for all known XP fluids at the time of writing.

## Auto-Charging

By pointing a [Charging Module](../tubes/charging_module.md) at the _Aerial Interface_, you can charge any [pressurizable](../base_concepts/pressure.md) items in your inventory.

Note that to charge any worn [Pneumatic Armor](../armor/overview.md) items, the Charging Module must be pointed at a side of the Interface which is connected to your armor slots.

Crafting an Aerial Interface

<Recipe id="pneumaticcraft:aerial_interface" />
