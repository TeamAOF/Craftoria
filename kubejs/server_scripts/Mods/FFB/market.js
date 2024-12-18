ServerEvents.recipes((e) => {
  let market = (item, category) => {
    let recipe = {
      type: 'farmingforblockheads:market',
      category: `farmingforblockheads:${category}`,
      preset: `minecraft:${category}`,
      result: {item: item, count: 1},
    };

    e.custom(recipe).id(`craftoria:ffb_market/${item.split(':')[0]}/${item.split(':')[1]}`);
  };

  let recipeExists = (item) => {
    return e.containsRecipe({output: item, type: 'farmingforblockheads:market'});
  };

  const saplingBlacklist = [
    // Twilight Forest
    'twilightforest:time_sapling',
    'twilightforest:transformation_sapling',
    'twilightforest:mining_sapling',
    'twilightforest:sorting_sapling',
    'twilightforest:rainbow_oak_sapling',
    'twilightforest:hollow_oak_sapling',

    // Occultism
    'occultism:otherworld_sapling',
    'occultism:otherworld_sapling_natural',
  ];

  const seedBlacklist = [
    // Minecraft
    'minecraft:torchflower_seeds',
    'minecraft:pitcher_pod',

    // Ars Nouveau
    'ars_nouveau:magebloom_crop',
  ];

  Ingredient.of('#minecraft:saplings').stacks.forEach((sapling) => {
    if (saplingBlacklist.includes(sapling.id) || recipeExists(sapling.id)) return;
    market(sapling.id, 'saplings');
  });

  Ingredient.of('#c:seeds').stacks.forEach((seed) => {
    if (seedBlacklist.includes(seed.id) || recipeExists(seed.id)) return;
    market(seed.id, 'seeds');
  });
});
