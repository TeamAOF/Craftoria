ServerEvents.loaded((e) => {
  e.server.runCommandSilent('/reload'); // Needed for AlmostUnified to work in LootJS scripts
});

LootJS.lootTables((e) => {
  let hiddenItems = Ingredient.of('#almostunified:hide').itemIds;

  e.forEachTable((table) => {
    hiddenItems.forEach((item) => {
      let target = AlmostUnified.getVariantItemTarget(item);
      if (target !== 'minecraft:air') table.replaceItem(item, target);
      else table.removeItem(item);
    });
  });
});

LootJS.modifiers((e) => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari']);
});
