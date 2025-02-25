---
navigation:
  title: "Stack Augment"
  icon: "modularrouters:stack_augment"
  parent: modularrouters:augments.md
item_ids:
  - modularrouters:stack_augment
---

# Stack Augment

This module can be added to any module which handles *items* (as opposed to *blocks*, *fluids* or *energy*).

Adding Stack Augments to a module increases the number of items it can process per tick; each Stack Augment doubles the number of items, up to a maximum of the item's natural stack size (64 for most items).

If the [router](../modular_router.md) also has [Stack Upgrades](../stack.md) installed, the module's Stack Augments will override that; e.g. if a router has 6 Stack Upgrades, and a module has 2 Stack Augments, the module will process 4 items per tick, not 64.



<Recipe id="modularrouters:stack_augment" />

