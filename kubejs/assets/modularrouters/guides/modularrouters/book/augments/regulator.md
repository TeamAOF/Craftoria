---
navigation:
  title: "Regulator Augment"
  icon: "modularrouters:regulator_augment"
  parent: modularrouters:augments.md
item_ids:
  - modularrouters:regulator_augment
---

# Regulator Augment

This augment allows for precise control over how many items may be sent to or pulled from an inventory, or the router's buffer.

When a module has a Regulator Augment, you will see an extra numeric textfield in its GUI where you can configure a limit. This limit is interpreted differently depending on the particular module:


- For the Sender [Mk1](../modules/sender_1.md) / [Mk2](../modules/sender_2.md) / [Mk3](../modules/sender_3.md) Modules and [Player Module](../modules/player.md) (in insert mode), the modules will only send an item to the inventory if there are fewer than the configured number of that item already in the inventory.
- For the Puller [Mk1](../modules/puller_1.md) / [Mk2](../modules/puller_2.md) and [Player Module](../modules/player.md) (in extract mode), the modules will only pull an item from the inventory if there are more than the configured number of that item in the inventory.


- For the [Dropper](../modules/dropper.md), [Flinger](../modules/flinger.md), [Placer](../modules/placer.md) & [Void](../modules/void.md) Modules, the modules will only run if there are more than the configured number of that item in the router's buffer.
- For the [Breaker](../modules/breaker.md) & [Vacuum](../modules/vacuum.md) Modules, the modules will only run if there are fewer than the configured number of that item in the router's buffer.


- For the Fluid [Mk1](../modules/fluid.md) / [Mk2](../modules/fluid_2.md) modules, the limit can be a percentage of the target tank's capacity or an absolute amount in mB (selectable in the GUI) rather than a number of items. When pulling fluid, the module will only run if there is *more* fluid in the target than the configured amount; when pushing fluid, it will only run if there is *less* fluid than the configured amount.



<Recipe id="modularrouters:regulator_augment" />

