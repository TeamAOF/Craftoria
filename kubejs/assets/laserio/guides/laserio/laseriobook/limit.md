---
navigation:
  title: "Limit"
  icon: "laserio:card_energy"
  position: 10
  parent: laserio:mechanics.md
---

# Limit

Limit % only exists on Energy Cards. Limit % specifies the percentage of FE to operate with on the adjacent energy accepting block.

There are two different metrics, Insert % for Stock/Insert mode, and Extract % for extract mode.

**Insert/Stock Limit**

By default, the limit% is set to 100%.  Specifies how much to fill up the specified energy block.

For example: If the block can hold 1,000,000 FE, and you specify 50%, it will only fill up to 500,000FE.

The default (100%) will fill it up completely.

**Extract Limit**

By default, the limit% is set to 0%. Specifies how much to leave behind in the specified energy block.

For example: If the block can hold 1,000,000 FE, and you specify 50%, it will extract until the block has 500,000fe remaining, and will not extract any more.

The default (0%) will extract all energy.

