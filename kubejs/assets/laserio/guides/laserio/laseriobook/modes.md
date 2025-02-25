---
navigation:
  title: "Modes"
  icon: "laserio:textures/gui/buttons/modestocker.png"
  position: 1
  parent: laserio:mechanics.md
---

# Modes

Modes determine what a card fundamentally does. The following pages define each mode type currently available.

Each type of card (Item/Fluid/Energy) supports the the following three modes. Item cards are used as an example.

Redstone cards will support a different set of modes.

<ItemImage id="laserio:card_item[laserio:card_transfer_mode=0b]" />

Insert Mode cards are a validate destination for objects being extracted by Extract Mode cards.

Stock mode cards will attempt to pull from Insert Mode cards.

<ItemImage id="laserio:card_item[laserio:card_transfer_mode=1b]" />

Extract Mode cards attempt to remove objects from their adjacent block. Items, for example, will be removed from an adjacent chest and sent to an insert card.

<ItemImage id="laserio:card_item[laserio:card_transfer_mode=2b]" />

Stock Mode cards attempt to find the designated items in their filter, and pull them from other Insert Nodes in the same network.

Stock mode cards require a filter set to Allow.

<ItemImage id="laserio:card_item[laserio:card_transfer_mode=3b]" />

Sensor cards do not move objects around, but instead look at an adjacent inventory, and will emit a redstone signal on the redstone channel if the inventory matches the filter.

Sensor mode cards require a filter.

