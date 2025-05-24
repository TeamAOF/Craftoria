// priority: -1100
RecipeViewerEvents.removeEntries('item', event => {
  /** @type {Special.Item[]} */
  let hideItems = [];

  hideItems.forEach(item => {
    event.remove(item);
  });

  globalItemRemovals.forEach(item => {
    event.remove(item);
  });

  disabledItems.forEach(item => {
    event.remove(item.id);
  });

  event.remove(['modern_industrialization:budding_incubator', 'modern_industrialization:ooze_lab', 'modern_industrialization:model_synthesizer']);
});

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  ['apothic_attributes:extra_long_flying', 'apothic_attributes:long_flying', 'apothic_attributes:flying'].forEach(potion => {
    event.remove([
      Ingredient.of(`minecraft:potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:splash_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:lingering_potion[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`minecraft:tipped_arrow[potion_contents={potion:"${potion}"}]`),
      Ingredient.of(`apotheosis:potion_charm[potion_contents={potion:"${potion}"}]`),
    ]);
  });

  event.remove(Ingredient.of('@displaydelight').except(['displaydelight:food_plate', 'displaydelight:small_food_plate']));
});

RecipeViewerEvents.removeCategories(e => {
  e.remove(['chisel:chisel_recipes_category', 'modern_industrialization:replicator_1']);
});
