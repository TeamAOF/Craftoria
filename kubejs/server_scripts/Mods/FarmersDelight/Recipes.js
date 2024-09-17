ServerEvents.recipes((e) => {
  let makeID = (type, input, output) => {
    return _makeID('farmersdelight', type, input, output);
  };

  let CuttingBoard = (outputs, inputs, tool, isAbility, sound) => {
    let recipe = {
      type: 'farmersdelight:cutting',
      ingredients: [],
      result: [],
      tool: {},
    };
    let recipeID = [];
    if (sound) recipe.sound = { sound_id: sound };

    if (Array.isArray(outputs)) {
      outputs.forEach((output) => {
        recipe.result.push({ item: Item.of(output).toJson() });
      });
      recipeID.push(outputs[0]);
    } else {
      recipe.result.push({ item: Item.of(outputs).toJson() });
      recipeID.push(outputs);
    }

    if (Array.isArray(inputs)) {
      inputs.forEach((input) => {
        recipe.ingredients.push(Ingredient.of(input).toJson());
      });
      recipeID.push(inputs[0]);
    } else {
      recipe.ingredients.push(Ingredient.of(inputs).toJson());
      recipeID.push(inputs);
    }

    if (isAbility) {
      recipe.tool = {
        type: 'farmersdelight:item_ability',
        action: tool,
      };
    } else {
      recipe.tool = Ingredient.of(tool).toJson();
    }
    e.custom(recipe).id(makeID('cutting', recipeID[0], recipeID[1]));
  };

  ['cinnamon_log', 'cinnamon_wood'].forEach((type) => {
    CuttingBoard([`croptopia:stripped_${type}`, 'croptopia:cinnamon'], `croptopia:${type}`, 'axe_strip', true, 'minecraft:item.axe.strip');
    e.recipes.mekanism.sawing(`croptopia:stripped_${type}`, 'croptopia:cinnamon', 1, `croptopia:${type}`);
  });
});
