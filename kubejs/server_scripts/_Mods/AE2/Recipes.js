

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: Item.of('extendedae:infinity_water_cell'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'cookingforblockheads:sink',
        B: 'mekanism:quantum_entangloporter',
        D: 'modern_industrialization:stainless_steel_tank',
        E: 'mekanism:ultimate_fluid_tank'
    },
      id: 'extendedae:water_cell'
    },

    {
      output: Item.of('extendedae:infinity_cobblestone_cell'),
      pattern: ['EAD', 'ABA', 'DAE'],
      key: {
        A: 'mekanism:upgrade_stone_generator',
        B: 'mekanism:quantum_entangloporter',
        D: 'modern_industrialization:stainless_steel_barrel',
        E: 'mekanism:ultimate_fluid_tank'
    },
      id: 'extendedae:cobblestone_cell'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
