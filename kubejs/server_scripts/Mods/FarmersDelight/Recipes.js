ServerEvents.recipes(e => {
  let makeRecipeID = (type, input, output) => {
    return _makeRecipeID('farmersdelight', type, input, output);
  };

  /**
   *
   * @param {$ItemStack_|$ItemStack_[]} outputs
   * @param {$Ingredient_|$Ingredient_[]} inputs
   * @param {$Ingredient_} tool
   * @param {boolean} isAbility
   * @param {string} sound
   */
  let cuttingBoard = (outputs, inputs, tool, isAbility, sound) => {
    let recipe = {
      type: 'farmersdelight:cutting',
      ingredients: [],
      result: [],
      tool: isAbility ? { type: 'farmersdelight:item_ability', action: tool } : Ingredient.of(tool).toJson()
    };
    if (sound) recipe.sound = { sound_id: sound };

    // Handle outputs
    let outputItems = Array.isArray(outputs) ? outputs : [outputs];
    recipe.result = outputItems.map(output => ({ item: Item.of(output).toJson() }));

    // Handle inputs
    let inputItems = Array.isArray(inputs) ? inputs : [inputs];
    recipe.ingredients = inputItems.map(input => Ingredient.of(input).toJson());

    e.custom(recipe).id(makeRecipeID('cutting', outputItems[0], inputItems[0]));
  };

  ['minecraft:bread', 'moredelight:bread_slice'].forEach(toastItem => {
    e.custom({
      type: 'cookingforblockheads:toaster',
      ingredient: {
        item: toastItem,
      },
      result: {
        item: 'moredelight:toast',
      },
    });
  });

  e.forEachRecipe({ type:'refurbished_furniture:cutting_board_slicing' }, kubeRecipe => {
    let recipeJson = JSON.parse(kubeRecipe.json.toString());
    let { result: { id: resultId, count: resultCount }, ingredient: { item: ingredient } } = recipeJson;

    if (!Item.exists(resultId) || !Item.exists(ingredient)) {
      logError(`${resultId} or ${ingredient} does not exist`, recipeJson);
      return;
    }

    cuttingBoard(`${resultCount || 1}x ${resultId}`, ingredient, '#c:tools/knife');
  });

  /** @type {Record<$Ingredient_, Special.Item>} */
  const sushigocrafting = {
    'minecraft:cod' : 'sushigocrafting:imitation_crab',
    '#c:fruits/avocado' : 'sushigocrafting:avocado_slices',
    '#c:crops/cucumber' : 'sushigocrafting:cucumber_slices',
    '#c:crops/wasabi_root' : 'sushigocrafting:wasabi_paste',
    '#c:raw_fishes/tuna' : 'sushigocrafting:tuna_fillet',
    '#c:raw_fishes/salmon' : 'sushigocrafting:salmon_fillet',
  };

  for (const [input, output] of Object.entries(sushigocrafting)) {
    cuttingBoard(output, input, '#c:tools/knife');
  }
});
