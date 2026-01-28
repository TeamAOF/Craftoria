---
navigation:
  title: "Fluid Module Mk1"
  icon: "modularrouters:fluid_module"
  parent: modularrouters:modules.md
item_ids:
  - modularrouters:fluid_module
---

# Fluid Module Mk1

While Routers can't handle fluids directly (they don't have an internal tank), they can manipulate fluids if there is a (single) fluid container item in the buffer. This includes buckets and any fluid containers added by other mods.

The Fluid Module's GUI allows the transfer direction to be set:
- **Transfer To Router** means the router will try to pull fluids from an adjacent block (either a fluid in the world or a fluid-holding block) into a fluid-holding item in the buffer.
- **Transfer From Router** means the router will try to push fluids from a fluid-holding item in the buffer to the world; either pouring fluid out, or putting fluid into an adjacent tank.

The GUI also allows the maximum transfer rate to be set. Note this is the maximum that will be *attempted*, and is still limited by the Router's overall transfer rate, which is 1 bucket per second, and the transfer rate of the external fluid or fluid container.

The Fluid Module's filter slots will only accept fluid-containing items, and will filter by the contained fluid, not by the container item.

Adding [Speed Upgrades](../upgrades/speed.md) will not transfer fluids any faster, only more often. A Router with 9 speed upgrades will still only transfer 1 bucket per second, just more often and in smaller quantities. To increase the overall transfer rate, add [Fluid Transfer Upgrades](../upgrades/fluid.md).

Be very careful tinkering with Fluid Module settings if the router holds any dangerous fluids, such as a lava bucket. The router will not hesitate to pour lava over you if you get it wrong...

Note that you can also connect fluid pipes from other mods to a router, **if** the buffer has a fluid container in it, and pump fluids in and out of the router; fluids will be directed to/from the container item.

You *don't* need a Fluid Module installed to do this; Fluid Modules are only required if you want to actively push or pull fluids.



<Recipe id="modularrouters:fluid_module" />

