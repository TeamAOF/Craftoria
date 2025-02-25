---
navigation:
  title: "Channel"
  icon: "laserio:textures/gui/buttons/blankbutton.png"
  position: 4
  parent: laserio:mechanics.md
---

# Channel

Cards can only interact with other cards that are on the same channel. This allows a player to have multiple sets of routing logic on the same network.

For example, Extractor cards on the 'Orange' channel will only attempt to insert into 'Orange' colored Insert Cards, and will ignore all other cards.

For example, set an Extract Card to the 'Orange Channel' with a filter for cobblestone, and another extract card to the 'Black Channel' with a filter for coal. Then place them in the same node. 

An Orange channel inserter can sit above a furnace, with a black channel inserter below. This will ensure that only cobblestone goes into the top of the furnace, while coal goes below.

