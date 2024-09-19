ItemEvents.modification((e) => {
  ['cooking_pot', 'food_press', 'frying_pan', 'knife', 'mortar_and_pestle'].forEach((cItem) => {
    e.modify(`croptopia:${cItem}`, (item) => {
      item.craftingRemainder = Item.of(`croptopia:${cItem}`).item;
    });
  });
});
