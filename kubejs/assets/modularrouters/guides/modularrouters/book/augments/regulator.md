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


- For the Sender [Mk1](../sender_1.md) / [Mk2](../sender_2.md) / [Mk3](../sender_3.md) Modules and [Player Module](../player.md) (in insert mode), the modules will only send an item to the inventory if there are fewer than the configured number of that item already in the inventory.
- For the Puller [Mk1](../puller_1.md) / [Mk2](../puller_2.md) and [Player Module](../player.md) (in extract mode), the modules will only pull an item from the inventory if there are more than the configured number of that item in the inventory.


- For the [Dropper](../dropper.md), [Flinger](../flinger.md), [Placer](../placer.md) & [Void](../void.md) Modules, the modules will only run if there are more than the configured number of that item in the router's buffer.
- For the [Breaker](../breaker.md) & [Vacuum](../vacuum.md) Modules, the modules will only run if there are fewer than the configured number of that item in the router's buffer.


- For the Fluid [Mk1](../fluid.md) / [Mk2](../fluid_2.md) modules, the limit can be a percentage of the target tank's capacity or an absolute amount in mB (selectable in the GUI) rather than a number of items. When pulling fluid, the module will only run if there is *more* fluid in the target than the configured amount; when pushing fluid, it will only run if there is *less* fluid than the configured amount.



<Recipe id="modularrouters:regulator_augment" />

