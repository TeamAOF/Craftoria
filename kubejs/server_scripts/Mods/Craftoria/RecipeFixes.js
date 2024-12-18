ServerEvents.recipes((e) => {
  e.shaped('cursedearth:blessed_flower', ['FFF', 'FWF', 'FFF'], {
    F: Ingredient.of('#minecraft:flowers').except('minecraft:wither_rose'),
    W: 'minecraft:wither_rose',
  }).id('cursedearth:blessed_flower');

  e.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables');

  e.findRecipes({mod: 'constructionstick', type: 'constructionstick:smithing_upgrade'}).forEach((recipe) => {
    let recipeJson = recipe.json;

    let base = recipeJson.get('base');
    let addition = recipeJson.get('addition');
    let result = recipeJson.get('result');
    let template = recipeJson.get('template');

    // console.info(`Construction Stick Upgrade Recipe:`);

    // console.info(base);
    // console.info(addition);
    // console.info(result);
    // console.info(template);

    // console.info(recipeJson);

    e.smithing(result, template, base, addition);
  });
});
