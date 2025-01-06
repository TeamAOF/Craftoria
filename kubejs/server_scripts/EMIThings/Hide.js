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
  ['apothic_attributes:extra_long_flying', 'apothic_attributes:long_flying', 'apothic_attributes:flying'].forEach((potion) => {
    event.remove([
      Ingredient.of(`minecraft:potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:splash_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:lingering_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:tipped_arrow[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`apotheosis:potion_charm[potion_contents={potion:"${potion}"}]`),
    ]);
  });
});

RecipeViewerEvents.removeCategories((e) => {
  e.remove(['chisel:chisel_recipes_category', 'modern_industrialization:replicator_1']);
});
