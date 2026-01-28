ServerEvents.recipes(e => {
  [
    'duckling:pumpkin_pie',
    'actuallyadditions:rice_dough',
  ].forEach(id => {
    e.remove({ id: id });
  });

  e.shaped('cake', [
    ' M ',
    'SES',
    ' D ',
  ], {
    M: '#c:foods/milk',
    S: '#c:sugars',
    E: '#c:eggs',
    D: '#c:foods/dough',
  }).id('create:crafting/curiosities/cake');

  e.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables');

  e.shapeless('minecraft:pumpkin_pie', ['#c:crops/pumpkin', '#c:sugars', '#c:eggs']).id('minecraft:pumpkin_pie');
  e.shaped('actuallyadditions:rice_dough', ['RR', 'R '], {
    R: '#c:crops/rice',
  }).id('craftoria:rice_dough');

  e.replaceInput({ id: 'occultism:crushing/coal_dust_from_tag' }, '#minecraft:coals', 'minecraft:coal');

  /** @type {Special.RecipeId[]} */
  const toWooden = [
    'sfm:manager',
    'sfm:cable',
    'sushigocrafting:cooler_box',
    'occultism:crafting/book_of_calling_foliot_transport_items',
    'advancedperipherals:inventory_manager',
    'advancedperipherals:nbt_storage',
    'sophisticatedbackpacks:crafting_upgrade',
    'morefunctionalstorage:refill_upgrade',
    'laserio:card_holder',
    'mekanism_extras:upgrade/stack',
    'aquaculture:tackle_box',
    'ars_nouveau:allow_scroll',
    'xycraft_machines:shaped/fabricator',
    'sophisticatedstorage:shulker_box',
    'rftoolsutility:invchecker',
    'rftoolsutility:inventory_module',
    'occultism:ritual/summon_foliot_cleaner',
    'occultism:ritual/familiar_greedy',
    'occultism:ritual/summon_foliot_transport_items',
  ];

  toWooden.forEach(id => {
    e.replaceInput({ id: id }, '#c:chests', '#c:chests/wooden');
  });

  const toWoodenApparatus = [
    'ars_nouveau:storage_lectern',
    'ars_nouveau:relay_collector',
  ];

  e.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, kubeRecipe => {
    if (!toWoodenApparatus.includes(kubeRecipe.getId())) return;
    let recipeJson = JSON.parse(kubeRecipe.json);
    recipeJson.pedestalItems.forEach(entry => { if (entry.tag === 'c:chests') entry.tag = 'c:chests/wooden'; });
    e.custom(recipeJson).id(kubeRecipe.getId());
  });

  e.custom({
    type: 'minecraft:smithing_transform',
    template: {
      item: 'irons_spellbooks:arcane_rune'
    },
    base: {
      item: 'hazennstuff:miner_helmet'
    },
    addition: {
      item: 'irons_spellbooks:archevoker_helmet'
    },
    result: {
      id: 'hazennstuff:spectral_spelunker_helmet'
    }
  }).id('hazennstuff:smithing/spectral_spelunker_armor/spectral_spelunker_helmet');
});
