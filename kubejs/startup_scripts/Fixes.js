ItemEvents.modification((e) => {
  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach((qItem) => {
    e.modify(`modern_industrialization:quantum_${qItem}`, (item) => {
      item.maxStackSize = 1;
      item.rarity = 'epic';
    });
  });
});
