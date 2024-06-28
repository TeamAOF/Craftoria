
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'cookingforblockheads:sink',
      pattern: ['AAA', 'BCB', 'BBB'],
      key: {
        A: 'justdirethings:eclipsealloy_ingot',
        B: 'modern_industrialization:steel_block',
        C: 'minecraft:heart_of_the_sea'
      },
      id: 'cookingforblockheads:sink'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
