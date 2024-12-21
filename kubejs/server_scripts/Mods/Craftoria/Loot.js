LootJS.lootTables((e) => {
  let removeLoot = globalItemRemovals;
  removeLoot.push('artifacts:eternal_steak', 'artifacts:everlasting_beef');

  e.forEachTable((table) => {
    table.removeItem(removeLoot);
  });
});

LootJS.modifiers((e) => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari']);
});
