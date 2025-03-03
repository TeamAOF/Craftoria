---
navigation:
  title: "Energy Cards"
  icon: "laserio:card_energy"
  position: 3
  parent: laserio:cards.md
item_ids:
  - laserio:card_energy
---

# Energy Cards

Energy Cards are used to send Energy between inventories, such as machines and batteries.

Energy cards have some slightly different mechanics from the other cards, and will be documentated in the following pages.

Unlike Item/Fluid cards that require overclockers to operate faster than once every 20 ticks, Energy Cards can operate every tick by default.

Overclockers can't go into Energy cards. Energy cards always operate at 1,000,000 FE/tick max. This can be reduced if you wish.

Energy cards also have an 'Energy Limit %' setting -- By default, on insert/stock modes this is 100%, and on extract modes this is 0%. On insert/stock mode it specifies how much to fill up the specified energy acceptor. 

For example: If the block can hold 1,000,000 FE, and you specify 50%, it will only fill up to 500,000FE.

In extract mode, this designates what percent should be left behind.

For example: If you are extracting FE from an energy cell that can hold 1,000,000FE, and specify a limit of 25%, it will not extract below 250,000 FE.

Technical Note: The Forge Energy system supports energy storage up to MAX_INT which is approximately 2.14 billion FE. If you are using a mod like Draconic Evolution or Mekanism, their storage cells can store greater than this amount by 'hacking' how Forge Energy works. As a result, this % indicator will not work on storage cells greater than 2.14 billion FE. Sorry! :)

## Energy Card



<Recipe id="laserio:card_energy" />

