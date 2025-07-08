---
navigation:
  title: "Stack Upgrade"
  icon: "modularrouters:stack_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:stack_upgrade
---

# Stack Upgrade

Modules in a router operate on a single item at a time: e.g. a [Sender Module](../modules/sender_1.md) will send a single item from the router's buffer each router tick, regardless of how many items are in the buffer.

By adding Stack Upgrades to a router, this can be increased. Each Stack Upgrade doubles the number of items that can be processed by each module, up to a maximum of 64, or the item's native stack size (e.g. 16 for *Ender Pearls*).

It therefore follows that 6 is the maximum number of useful Stack Upgrades which can be installed in one router.



<Recipe id="modularrouters:stack_upgrade" />

