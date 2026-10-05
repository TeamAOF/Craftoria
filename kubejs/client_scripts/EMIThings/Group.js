// requires: collapsible_groups
RecipeViewerEvents.groupEntries('item', e => {
  /**
   * @param {import("@package/net/minecraft/world/item/crafting").$Ingredient_} filter
   * @param {string} groupId
   * @param {import("@package/net/minecraft/network/chat").$Component_} description
   */
  let group = (filter, groupId, description) => {
    e.group(filter, `craftoria:items_${groupId}`, description);
  };

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
    group(Ingredient.of(`#xtonesreworked:${type}`), `xtones_${type}`, name);
  });

  group('sophisticatedstorageinmotion:storage_boat', 'storage_boats', 'Sophisticated Boats');
  group('sophisticatedstorageinmotion:storage_minecart', 'storage_minecarts', 'Sophisticated Minecart');
  group('irons_spellbooks:affinity_ring', 'affinity_rings', 'Affinity Rings');
});

RecipeViewerEvents.groupEntries('fluid', e => {
  /**
     * @param {import("@package/net/neoforged/neoforge/fluids/crafting").$FluidIngredient_} filter
     * @param {string} groupId
     * @param {import("@package/net/minecraft/network/chat").$Component_} description
     */
  let group = (filter, groupId, description) => {
    e.group(filter, `craftoria:fluids_${groupId}`, description);
  };

  group('create:potion', 'create_potion', 'Create Potions');
  group(Fluid.ingredientOf(/^irons_spellbooks:(common|uncommon|rare|epic|legendary)_ink$/), 'irons_ink', 'Ink');
});

RecipeViewerEvents.groupEntries('mekanism:chemical', e => {
  /**
   * @param {import("@package/mekanism/api/chemical").$Chemical_} filter
   * @param {string} groupId
   * @param {import("@package/net/minecraft/network/chat").$Component_} description
   */
  let group = (filter, groupId, description) => {
    e.group(filter, `craftoria:chemicals_${groupId}`, description);
  };
});
