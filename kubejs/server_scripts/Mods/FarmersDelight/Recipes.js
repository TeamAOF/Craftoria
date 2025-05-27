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
      ingredient: Ingredient.of(toastItem).toJson(),
      result: Item.of('moredelight:toast').toJson(),
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

  /** @type {Record<Special.Item, $Ingredient_>} */
  const sushigocrafting = {
    'sushigocrafting:imitation_crab' : 'minecraft:cod',
    'sushigocrafting:avocado_slices' : '#c:fruits/avocado',
    'sushigocrafting:cucumber_slices' : '#c:crops/cucumber',
    'sushigocrafting:wasabi_paste' : '#c:crops/wasabi_root',
    'sushigocrafting:tuna_fillet' : '#c:raw_fishes/tuna',
    'sushigocrafting:salmon_fillet' : '#c:raw_fishes/salmon',
  };


  let refurbCutting = (output, input) => {
    let recipe = {
      type: 'refurbished_furniture:cutting_board_slicing',
      result: Item.of(output).toJson(),
      ingredient: Ingredient.of(input).toJson(),
    };
    e.custom(recipe).id(makeRecipeID('refurb_cutting', Array.isArray(input) ? input[0] : input, output));
  };

  for (const [output, input] of Object.entries(sushigocrafting)) {
    cuttingBoard(output, input, '#c:tools/knife');
    refurbCutting(output, input);
  }

  e.forEachRecipe({ type:'farmersdelight:cutting' }, kubeRecipe=>{
    let recipeJson = JSON.parse(kubeRecipe.json.toString());

    /** @type {{result: $ItemStack_[], ingredients: $Ingredient_[]}} */
    let { result, ingredients } = recipeJson;
    if (recipeJson?.tool?.tag !== 'c:tools/knife') return;

    /** @type {{id: string, count: number}} */
    let { id: output, count: outputCount } = result[0].item;
    if (!outputCount) outputCount = 1;
    let inputs = ingredients.map(ingredient => ingredient.item || `#${ingredient.tag}`);
    refurbCutting(`${outputCount}x ${output}`, inputs);
  });
});
