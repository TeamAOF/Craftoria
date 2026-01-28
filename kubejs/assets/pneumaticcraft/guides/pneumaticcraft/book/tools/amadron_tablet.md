---
navigation:
  title: 'Amadron Tablet'
  icon: 'pneumaticcraft:amadron_tablet'
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:amadron_tablet
---

# Amadron Tablet

The _Amadron Tablet_ is an item that can be used to _order_ items and fluids for delivery by [Drones](./drone.md).

To do so, an inventory and/or fluid tank needs to be selected by _right-clicking_ with the tablet to bind it. This inventory/tank is then used to take items as payment, and receive the items you ordered.

The tablet GUI is smart enough to figure out what you can buy by looking at the bound inventory and/or tank. When you order <Color id='dark_purple'>$(t:Resources can be either items or fluids)resources$(/t:Resources can be either items or fluids)</Color>, a _Drone_ will spawn to collect the resources you're paying with. Once collection is complete, a second _Drone_ will arrive to deliver the purchased items.

This is a way to get items you can't get otherwise, like the [PCB Blueprint](../components/pcb_blueprint.md) and [Assembly Programs](../manufacturing/assembly_programs.md). It also adds some random _Villager Trades_; these trades are re-shuffled daily.

## Player-Player Trading

By clicking the **Custom Player Trade** button (on the **Custom Trades** side tab) you can offer your own resources to be traded for other players' resources. In the trading GUI you can select an resource to sell on the left-hand side, and a resource you want to buy on the right-hand side. You can set the trade amounts with the text fields.

You can also specify in the GUI where you want to provide the resources from, and where you want to receive payment from other players. You will need a [GPS Tool](./gps_tool.md) (set to the right location) for this.

If you don't specify custom locations here, the default locations stored in the tablet (for normal trades) will be used.

When all is set, the **Add Trade** button will become clickable. This trade will be visible to other players in their _Amadron Tablet_ just like any normal offers.

An important difference is that there is no unlimited stock: you must add your resources to the selling inventory/tank. A _Drone_ will arrive to pick up these resources; when pick-up is complete, the stock will be increased. Stock levels for custom offers are shown in the _Amadron Tablet_ GUI.

Other players can now accept the offer up to the amount that is in stock. When a player accepts an offer you'll be notified (provided you are online), and a _Drone_ will arrive to deliver you the resources that the other player paid you with. A trade has been completed!

By _shift-clicking_ the <Color id="red">x</Color> button on one of your own trades in the Amadron GUI, the trade will be removed, and Amadron will attempt to return your resources to the inventory/tank that provided it.

**Warning:** Amadron take no responsibility for resources lost in the event of a problem returning them!

Crafting a Amadron Tablet

<Recipe id="pneumaticcraft:amadron_tablet" />
