---
navigation:
  title: "Exact"
  icon: "laserio:textures/gui/buttons/exacttrue.png"
  position: 6
  parent: laserio:mechanics.md
---

# Exact

Exact is only available on Extractor and Stocker Modes.

Exact mode ensures that the exact amount of items set in the 'Extract Amount' field are extracted. For example, if the Extract Amount is set to 8, and there are only 5 items in an adjacent chest, the extractor will not remove them until 8 are available.

Exact mode works slightly differently for Stock Mode cards. Exact will only allow items to move if the amount needed to meet the stocking request OR the Extract Amount are available in the network, whichever is smaller.

For example, if a stocker needs 13 more items, and can extract 32 at a time, it will only extract if 13 items are available somewhere in the network.

