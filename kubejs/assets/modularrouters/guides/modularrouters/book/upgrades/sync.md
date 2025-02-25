---
navigation:
  title: "Sync Upgrade"
  icon: "modularrouters:sync_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:sync_upgrade
---

# Sync Upgrade

This upgrade is used to guarantee that two or more routers run at the same time. The Sync Upgrade has a tuning value of 0 .. 19 (i.e. 1 less than the base router tick rate of 20). This tuning value can be set by *right-clicking* the Sync Upgrade to open its GUI, or quickly set to a random value by *sneak-right-clicking* the upgrade.

Any routers with this upgrade installed, with same the tuning value, and with the same number of [Speed Upgrades](./speed.md) installed, will always run on the same tick. The actual tuning value doesn't matter; only that the value is consistent across the routers you want to synchronise.

This is particularly useful if you have a group of routers with [Extruder Modules](../extruder_1.md) installed, and want to ensure all modules extend/retract at exactly the same time.

Advanced notes #1: the Sync Upgrade's tuning value actually specifies precisely when the router will run relative to its tick rate. E.g. routers tick every 20 server ticks by default; a Sync Upgrade with a tuning upgrade of 15 ensures the router *always* runs 15 ticks after that, and that applies to *all* routers with a 15-tuned Sync Upgrade. And a 16-tuned Sync Upgrade always runs 1 tick after a 15-tuned Sync Upgrade, at least for routers with the same number of [Speed Upgrades](./speed.md) installed...

Advanced notes #2: Because [Speed Upgrades](./speed.md) make routers tick more frequently, they affect how Sync Upgrades work. A router with 9 Speed Upgrades ticks every 2 server ticks (instead of every 20). For Sync Upgrades in such a router, it only matters whether the tuning value is even or odd; 2 (or 4/6/8...) ticks later is effectively the same as 0 ticks later! General case: the tuning value is calculated modulo the router's actual tick rate after Speed Upgrades are accounted for.



<Recipe id="modularrouters:sync_upgrade" />

