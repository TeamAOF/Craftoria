////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: Item.of('extendedae:infinity_water_cell'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'cookingforblockheads:sink',
        B: 'mekanism:quantum_entangloporter',
        D: 'modern_industrialization:stainless_steel_tank',
        E: 'mekanism:ultimate_fluid_tank',
      },
      id: 'extendedae:water_cell',
    },

    {
      output: Item.of('extendedae:infinity_cobblestone_cell'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'mekanism:upgrade_stone_generator',
        B: 'mekanism:quantum_entangloporter',
        D: 'modern_industrialization:stainless_steel_barrel',
        E: 'mekanism:ultimate_fluid_tank',
      },
      id: 'extendedae:cobblestone_cell',
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });

  event.shaped('bigger_ae2:advanced_flux_cell_housing', ['GSG', 'SMS', 'RRR'], {
      G: 'ae2:quartz_glass',
      S: 'ae2:sky_dust',
      M: 'appflux:core_256m',
      R: 'appflux:harden_insulating_resin',
    }).id('bigger_ae2:advanced_flux_cell_housing');

    event.replaceInput(
      { id: 'advanced_ae:quantum_helmet' },
      'minecraft:netherite_helmet',
      'mekanism:mekasuit_helmet'
    )

    event.replaceInput(
      { id: 'advanced_ae:quantum_chest' },
      'minecraft:netherite_chestplate',
      'mekanism:mekasuit_bodyarmor'
    )

    event.replaceInput(
      { id: 'advanced_ae:quantum_leggings' },
      'minecraft:netherite_leggings',
      'mekanism:mekasuit_pants'
    )

    event.replaceInput(
      { id: 'advanced_ae:quantum_boots' },
      'minecraft:netherite_boots',
      'mekanism:mekasuit_boots'
    )
});
