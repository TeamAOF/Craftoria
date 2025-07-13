// priority: -1100
const $EnchHooks = Java.loadClass('dev.shadowsoffire.apothic_enchanting.asm.EnchHooks');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const enchBooksToKeep = [];
Registry.access().access().lookupOrThrow($Registries.ENCHANTMENT).listElements().forEach(ench => {
  enchBooksToKeep.push(`minecraft:enchanted_book[stored_enchantments={levels:{"${ench.key().location()}":${$EnchHooks.getMaxLevel(ench)}}}]`);
});


RecipeViewerEvents.removeEntries('item', event => {
  /** @type {Special.Item[]} */
  let hideItems = [
    'rep_ae2_bridge:earth',
    'rep_ae2_bridge:nether',
    'rep_ae2_bridge:organic',
    'rep_ae2_bridge:ender',
    'rep_ae2_bridge:metallic',
    'rep_ae2_bridge:precious',
    'rep_ae2_bridge:living',
    'rep_ae2_bridge:quantum',
    'createstockbridge:request_pattern',
    'xycraft_core:errored',
    'databank:megastructure_save',
    'ftblibrary:icon_item',
    'stickit:placed_items',
    /naquadah/
  ];

  hideItems.forEach(item => {
    event.remove(item);
  });

  event.remove(Ingredient.of('enchanted_book').except(enchBooksToKeep));
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

  const globalRemovals = globalItemRemovals.map(item => {
    if (typeof item === 'object') return item.item;
    return item;
  });
  event.remove(globalRemovals);

  disabledItems.forEach(item => {
    event.remove(item.id);
  });

  event.remove(Ingredient.of('@displaydelight').except(['displaydelight:food_plate', 'displaydelight:small_food_plate']));
});

RecipeViewerEvents.removeCategories(e => {
  e.remove(['chisel:chisel_recipes_category', 'modern_industrialization:replicator_1']);
});
