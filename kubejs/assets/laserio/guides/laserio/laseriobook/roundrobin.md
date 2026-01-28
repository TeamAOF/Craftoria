---
navigation:
  title: "Round Robin"
  icon: "laserio:textures/gui/buttons/roundrobintrue.png"
  position: 5
  parent: laserio:mechanics.md
---

# Round Robin

Round Robin is only available on Extractor Mode.

Round robin instructs an extractor to evenly distribute items among multiple inserters.

There are three modes available:
1. False
2. True
3. Enforced

When set to **false**, round robin is disabled, and the [priority](./priority.md) system is followed. The first inventory will fill entirely before objects are sent to the second inventory.

When set to **true**, items will be sent to chests in priority order, and evenly distributed.

If there are 3 chests in a network, the first set of items will go to the first chest, the 2nd set to the 2nd chest, etc.

When set to **enforced**, the same rules as 'true' are followed. However, if one of the destinations becomes full, the extractor will stop operating until it becomes available again.

Note: Chunk Unloading may cause a change to round robin mechanics, especially if some nodes are unloaded when others are not.

