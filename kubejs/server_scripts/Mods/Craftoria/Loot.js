LootJS.lootTables(e => {
  let removeLoot = globalItemRemovals.map(item => {
    if (typeof item === 'object') return item.item;
    return item;
  });
  removeLoot.push('artifacts:eternal_steak', 'artifacts:everlasting_beef');

  e.forEachTable(table => {
    table.removeItem(removeLoot);
  });

  e.clearLootTables(/^bosses_of_mass_destruction:chests\/(obsidilith|gauntlet)$/);
  e.create('bosses_of_mass_destruction:entities/obsidilith', 'entity')
    .createPool().addEntry('2x bosses_of_mass_destruction:obsidian_heart');

  e.create('bosses_of_mass_destruction:entities/gauntlet', 'entity')
    .createPool().addEntry('2x bosses_of_mass_destruction:blazing_eye');

  if (!Platform.isLoaded('pastel') || !Platform.isLoaded('spectrum'))
    e.getEntityTable('ender_dragon')
      .firstPool()
      .addEntry(LootEntry.of('dragon_head').randomChanceWithEnchantment('looting', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]));

  e.getEntityTable('armadillo')
    .firstPool()
    .addEntry(LootEntry.of('armadillo_scute').setCount([0, 3]).applyEnchantmentBonus('looting', [0, 1]));

  e.getEntityTable('turtle')
    .createPool()
    .addEntry(LootEntry.of('turtle_scute').setCount([0, 3]).applyEnchantmentBonus('looting', [0, 1]));

  const sniffa = e.getLootTable('minecraft:gameplay/sniffer_digging').firstPool();
  [
    'biomeswevegone:fluorescent_cattail_sprout',
    'biomeswevegone:blue_glowcane_shoot',
    'biomeswevegone:green_glowcane_shoot',
    'biomeswevegone:red_glowcane_shoot',
    'biomeswevegone:yellow_glowcane_shoot',
    'biomeswevegone:pale_pumpkin_seeds',
  ].forEach(item => {
    sniffa.addEntry(item);
  });
});

LootJS.modifiers(e => {
  e.removeGlobalModifiers([
    'dumplings_delight:add_calamari',
    'biomeswevegone:bwg_items_from_sniffer_dig',
    'usefulluck:luck_modifier_fortune',
    'usefulluck:luck_modifier_entities',
  ]);
});
