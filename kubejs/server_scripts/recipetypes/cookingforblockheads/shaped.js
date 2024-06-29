
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: 'cookingforblockheads:sink',
      pattern: ['AAA', 'DCD', 'DBD'],
      key: {
        A: 'justdirethings:eclipsealloy_ingot',
        B: 'modern_industrialization:steel_block',
        C: 'minecraft:heart_of_the_sea',
        D: 'minecraft:terracotta'
      },
      id: 'cookingforblockheads:sink'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
