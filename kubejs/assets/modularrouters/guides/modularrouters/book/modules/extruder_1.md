---
navigation:
  title: "Extruder Module Mk1"
  icon: "modularrouters:extruder_module_1"
  parent: modularrouters:modules.md
---

# Extruder Module Mk1

This module extends and withdraws a row of blocks (from the router's buffer) in the module's configured direction.

By default, the module extends blocks when the router has a redstone signal, and withdraws them when the router has no signal, but a Redstone Enhancement can be added to the module to customise this behaviour.

Using this module, it's possible to build large extending bridges and doorways. (If you ever used the Tinker's Drawbridge from the Tinker's Mechworks mod in 1.7.10, the functionality will be familiar).
- See also the [Camouflage Upgrade](../camouflage.md), which may be useful to hide the router.
- The default range (i.e. number of blocks which can be placed) is 12, but this can be increased up to 24 with [Range Up Augments](../range_up.md).


- If you change the module's direction while it has blocks extended, you may get the router a little confused. In this case, breaking and replacing the router will help.
- If you break the router while blocks are extended, it won't remember that, and you'll need to manually remove those blocks.


- If you have multiple routers together with Extruder Modules installed (e.g. for a wide door or bridge), you may find the [Sync Upgrade](../sync.md) useful to ensure they all run on the same tick.
- The Extruder (like the [Placer](./placer.md)) can also plant crop seeds on farmland, and cocoa beans on an adjacent jungle log.

It is important to note that the [Breaker Module](./breaker.md) used to craft this module will transfer its harvest level (and enchantments) to this module. So if you want your Extruder Module to be able to break *Obsidian*, for example, make sure you use a Breaker Module crafted with a *Diamond Pickaxe*!



<Recipe id="modularrouters:extruder_module_1" />

