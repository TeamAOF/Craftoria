LootJS.lootTables(e => {
  let removeLoot = globalItemRemovals;
  removeLoot.push('artifacts:eternal_steak', 'artifacts:everlasting_beef');

  e.forEachTable(table => {
    table.removeItem(removeLoot);
  });

  e.create('bosses_of_mass_destruction:entities/obsidilith', 'entity').createPool(pool => {
    pool.addEntry(LootEntry.of('bosses_of_mass_destruction:obsidian_heart').setCount(2));
  });
  e.create('bosses_of_mass_destruction:entities/gauntlet', 'entity').createPool(pool => {
    pool.addEntry(LootEntry.of('bosses_of_mass_destruction:blazing_eye').setCount(2));
  });

  e.getEntityTable('ender_dragon')
    .firstPool()
    .addEntry(LootEntry.of('dragon_head').randomChanceWithEnchantment('looting', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]));
});

LootJS.modifiers(e => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari']);
});
