ItemEvents.modification((e) => {
  ['cooking_pot', 'food_press', 'frying_pan', 'knife', 'mortar_and_pestle'].forEach((cItem) => {
    e.modify(`croptopia:${cItem}`, (item) => {
      item.craftingRemainder = Item.of(`croptopia:${cItem}`).item;
    });
  });

  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach((qItem) => {
    e.modify(`modern_industrialization:quantum_${qItem}`, (item) => {
      item.maxStackSize = 1;
      item.rarity = 'epic';
    });
  });
});
