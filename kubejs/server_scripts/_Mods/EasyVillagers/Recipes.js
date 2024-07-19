
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [

    // Block Breaker
    {
      output: 'easy_villagers:iron_farm',
      pattern: ['AAA', 'ACA', 'BDB'],
      key: {
        A: 'minecraft:glass',
        B: 'modern_industrialization:steel_ingot',
        C: 'minecraft:lava_bucket',
        D: 'shrink:shrink_bottle[shrink:entity="minecraft:zombie"]',
      },
      id: 'easy_villagers:iron_farm'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
