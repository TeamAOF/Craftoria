---
navigation:
  title: "Energy Upgrade"
  icon: "modularrouters:energy_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:energy_upgrade
---

# Energy Upgrade

This upgrade gives the Router an internal energy buffer. Each upgrade increases the buffer size by 50,000 FE and the transfer rate by 1,000 FE per *router tick* (these figures are adjustable in mod config).

There are several scenarios where an Energy Upgrade is useful, detailed in the following pages.

## 1. Routing Energy

The [Energy Output](../energy_output.md) and [Energy Distributor](../energy_distributor.md) modules are both capable of actively pushing energy from the router's buffer to adjacent or nearby blocks.

With these modules, you can effectively build an energy cell with limited wireless energy transfer capabilities.

## 2. Powering Modules

By default, router modules do not cost any energy to run, with the exception of the [Activator Module](../activator.md) in attack mode. 

However, energy usage is configurable and it's possible that energy costs may apply to other modules in the pack you're playing; all modules list energy usage numbers in their tooltip where it applies.

## 3. Charging Items

Any energy-holding item in the router's buffer can optionally have energy transferred from the router's internal buffer to the item, or vice versa.

When an energy-holding item is in the item buffer, the router GUI will show a switchable button between the buffer and the energy bar to set the energy transfer direction.

## Transfer Rates

It is important to note that stated transfer rates on tooltips are in FE per *router tick*, which is not the same as FE/t. A Router's tick rate depends on its [Speed Upgrades](./speed.md); with no Speed Upgrades, a router tick is every 20 server ticks. Therefore, the overall transfer rate may be lower than you might expect.



<Recipe id="modularrouters:energy_upgrade" />

