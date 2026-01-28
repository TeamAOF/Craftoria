LootJS.lootTables(e => {
  let removeLoot = globalItemRemovals.map(item => {
    if (typeof item === 'object') return item.item;
    return item;
  });
  removeLoot.push('artifacts:eternal_steak', 'artifacts:everlasting_beef');

  e.forEachTable(table => {
    table.removeItem(removeLoot);
  });

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
    'biomeswevegone:pale_pumpkin_seeds'
  ].forEach(item => {
    sniffa.addEntry(item);
  });
});

LootJS.modifiers(e => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari', 'biomeswevegone:bwg_items_from_sniffer_dig']);
});
