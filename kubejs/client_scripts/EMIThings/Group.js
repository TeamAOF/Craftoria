// requires: collapsible_groups
RecipeViewerEvents.groupEntries('item', e => {
  const xtones = [
    'agon',
    'azur',
    'bitt',
    'cray',
    'fort',
    'glaxx',
    'iszm',
    'jelt',
    'korp',
    'kryp',
    'lair',
    'lave',
    'mint',
    'myst',
    'reds',
    'reed',
    'roen',
    'sols',
    'sync',
    'tank',
    'vect',
    'vena',
    'zane',
    'zech',
    'zest',
    'zeta',
    'zion',
    'zkul',
    'zoea',
    'zome',
    'zone',
    'zorg',
    'ztyl',
    'zyth',
  ];

  xtones.forEach(type => {
    let name = `Xtones: ${type.charAt(0).toLocaleUpperCase() + type.slice(1)}`;
    e.group(Ingredient.of(`#xtonesreworked:${type}`), `xtones_${type}`, name);
  });

  e.group('sophisticatedstorageinmotion:storage_boat', 'storage_boats', 'Sophisticated Boats');
  e.group('sophisticatedstorageinmotion:storage_minecart', 'storage_minecarts', 'Sophisticated Minecart');
  e.group('irons_spellbooks:affinity_ring', 'affinity_rings', 'Affinity Rings');
});

RecipeViewerEvents.groupEntries('fluid', e => {
  e.group('create:potion', 'create_potion', 'Create Potions');
  e.group(Fluid.ingredientOf(/^irons_spellbooks:(common|uncommon|rare|epic|legendary)_ink$/), 'irons_ink', 'Ink');
});
