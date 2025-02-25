---
navigation:
  title: "Counting Filter"
  icon: "laserio:filter_count"
  position: 2
  parent: laserio:filters.md
---

# Counting Filter

The Count Filter can designate a specified number of items, and plays a different role based on the card's mode.

Stack sizes of items can go from 1 to 4096. Left click will increase the stack size, while right click will decrease it. Holding shift or control will modify this amount by 10 or 64 respectively.

If a counting filter is used in a stocker mode card, it will try to keep the specified amount of resources in stock. For example, keeping 64 cobblestone in a chest is done by using a Counting Filter with 64 cobblestone.

If a counting filter is used in an Inserter card, it will limit how many items are allowed to be sent to that inventory by extractor cards.

If a counting filter is used in a extractor mode card, it will leave the designated number of items behind. For example, if you set an extract card with a filter of 8 cobblestone, it will pull out all but the last 8 cobblestone from a chest.

Counting filters do not have an Allow vs Deny button - as Deny mode would not make any sense for a counting filter. All counting filters are 'Allow mode'.  JEI Interaction works the same as it does in a [Basic Filter](./filter_basic.md).

