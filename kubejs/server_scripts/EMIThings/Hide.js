RecipeViewerEvents.removeEntries('item', (event) => {
  let hideItems = [];

  hideItems.forEach((item) => {
    event.remove(item);
  });

  globalItemRemovals.forEach((item) => {
    event.remove(item);
  });
});

RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
  for (let i = 1; i <= 5; i++) {
    event.remove(Ingredient.of(`minecraft:enchanted_book[stored_enchantments={levels:{"apothic_enchanting:boon_of_the_earth":${i}}}]`));
  }

  ['apothic_attributes:extra_long_flying', 'apothic_attributes:long_flying', 'apothic_attributes:flying'].forEach((potion) => {
    event.remove([
      Ingredient.of(`minecraft:potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:splash_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:lingering_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:tipped_arrow[potion_contents={potion:"${potion}"}]`),
    ]);
  });
});
