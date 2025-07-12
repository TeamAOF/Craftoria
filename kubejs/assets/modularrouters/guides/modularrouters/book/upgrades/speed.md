---
navigation:
  title: "Speed Upgrade"
  icon: "modularrouters:speed_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:speed_upgrade
---

# Speed Upgrade

By default, a [router](../router/modular_router.md) ticks every 20 server ticks, or once per second. On each tick, every installed module is executed in order, left to right.

If you need a router to run faster than this, add *Speed Upgrades*; each Speed Upgrade reduces the tick interval by 2 server ticks, down to a minimum of every 2 server ticks (or 10 times per second).

The base tick rate, tick increase per upgrade, and hard minimum tick rate are all configurable in the module's config (config/modularrouters-common.toml).

For performance reasons, [Stack Upgrades](./stack.md) should be preferred over Speed Upgrades where possible; use Speed Upgrades judiciously and only where absolutely required for maximum item transfer rate.

Be Kind To Your Server (tm).



<Recipe id="modularrouters:speed_upgrade" />

