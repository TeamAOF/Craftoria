LootJS.lootTables((e) => {
  e.forEachTable((table) => {
    table.removeItem(['artifacts:eternal_steak', 'artifacts:everlasting_beef']);
  });
});

LootJS.modifiers((e) => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari']);
});
