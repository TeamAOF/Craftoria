ServerEvents.recipes(e => {
  e.custom({ type: "laserio:cardclear", category: "misc", group: "laserio", ingredients: [{ item: "laserio:card_chemical" }], result: { count: 1, id: "laserio:card_chemical", } }).id("craftoria:laserio/card_chemical_nbtclear");
});