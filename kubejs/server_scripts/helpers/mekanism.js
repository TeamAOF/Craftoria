// priority: 10000
/**
 * Mekanism Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function MekanismHelper(event) {
  /**
   * Generate a recipe ID based on output, input and recipe type
   * @param {string} type
   * @param {Special.Item} output
   * @param {$Ingredient_} input
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (type, output, input) => {
    return _makeRecipeID('mekanism', type, output, input);
  };

  return {
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    enriching(output, input, recipeID) {
      event.recipes.mekanism.enriching(output, input).id(recipeID ?? makeRecipeId('enriching', output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    crushing(output, input, recipeID) {
      event.recipes.mekanism.crushing(output, input).id(recipeID ?? makeRecipeId('crushing', output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {$Chemical_} chemicalInput
     * @param {boolean} [perTickUsage] Whether chemicals get consumed per tick instead of on completing recipe (optional, default is false).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    metallurgicInfusing(output, input, chemicalInput, perTickUsage, recipeID) {
      event.recipes.mekanism
        .metallurgic_infusing(output, input, chemicalInput, perTickUsage ?? false)
        .id(recipeID ?? makeRecipeId('metallurgic_infusing', output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {$Chemical_} chemicalInput
     * @param {boolean} [perTickUsage] Whether chemicals get consumed per tick instead of on completing recipe (optional, default is false).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    injecting(output, input, chemicalInput, perTickUsage, recipeID) {
      event.recipes.mekanism
        .injecting(output, input, chemicalInput, perTickUsage ?? false)
        .id(recipeID ?? makeRecipeId('injecting', output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$Chemical_} input
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    crystallizing(output, input, recipeID) {
      event.recipes.mekanism.crystallizing(output, input).id(recipeID ?? makeRecipeId('crystallizing', output, input));
    },
    /**
     * @param {$Chemical_} output
     * @param {$Chemical_} chemicalLeftInput
     * @param {$Chemical_} chemicalRightInput
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    chemicalInfusing(output, chemicalLeftInput, chemicalRightInput, recipeID) {
      event.recipes.mekanism
        .chemical_infusing(output, chemicalLeftInput, chemicalRightInput)
        .id(recipeID ?? makeRecipeId('chemical_infusing', output, chemicalLeftInput));
    },
    /**
     * @param {$ItemStack_} itemOutput
     * @param {[$ItemStack_[], number]} itemInputListWithCount
     * @param {Special.Fluid} fluidInput
     * @param {$Chemical_} chemicalOutput
     * @param {$Chemical_} chemicalInput
     * @param {number} [duration]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    reaction(itemOutput, itemInputListWithCount, fluidInput, chemicalOutput, chemicalInput, duration, recipeID) {
      let recipe = {
        type: 'mekanism:reaction',
        item_input: {
          type: 'neoforge:compound',
          children: [],
          count: itemInputListWithCount[1],
        },
        item_output: Item.of(itemOutput).toJson(),
        fluid_input: {},
        chemical_input: {},
        chemical_output: {},
        duration: duration ?? 100,
      };

      itemInputListWithCount[0].forEach(item => {
        recipe.item_input.children.push(Ingredient.of(item).toJson());
      });

      let [fluidAmount, fluidId] = fluidInput.replace('x', '').split(' ');
      if (fluidId.includes('#')) {
        recipe.fluid_input.tag = fluidId.replace('#', '');
      } else {
        recipe.fluid_input.id = fluidId;
      }
      recipe.fluid_input.amount = parseInt(fluidAmount);

      let [chemicalInputAmount, chemicalInputId] = chemicalInput.replace('x', '').split(' ');
      if (chemicalInputId.includes('#')) {
        recipe.chemical_input.chemical = chemicalInputId.replace('#', '');
      } else {
        recipe.chemical_input.id = chemicalInputId;
      }
      recipe.chemical_input.amount = parseInt(chemicalInputAmount);

      let [chemicalOutputAmount, chemicalOutputId] = chemicalOutput.replace('x', '').split(' ');
      recipe.chemical_output.id = chemicalOutputId;
      recipe.chemical_output.amount = parseInt(chemicalOutputAmount);

      event.custom(recipe).id(recipeID ?? makeRecipeId('reaction', itemOutput, itemInputListWithCount[0][0]));
    },

    /**
     * @param {$Chemical_} chemicalInput
     * @param {Special.Fluid} fluidId
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */

    rotaryCondensentrating(chemicalInput, fluidId, recipeID) {
      let recipe = {
        type: 'mekanism:rotary',
        chemical_input: {
          amount: 1,
          chemical: chemicalInput,
        },
        chemical_output: {
          amount: 1,
          id: chemicalInput,
        },
        fluid_input: {
          amount: 1,
          tag: `c:${fluidId.split(':')[1]}`,
        },
        fluid_output: {
          amount: 1,
          id: fluidId,
        },
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('rotary', chemicalInput, fluidId));
    },

    /**
     * @param {$ItemStack_} itemOutput
     * @param {$ItemStack_} itemInput
     * @param {$Chemical_} chemicalInput
     * @param {number} [duration]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    nucleosynthesizing(itemOutput, itemInput, chemicalInput, duration, recipeID) {
      /** @type {[number, $Chemical_]} */
      let [chemicalAmount, chemicalId] = chemicalInput.split('x ');
      let recipe = {
        type: 'mekanism:nucleosynthesizing',
        chemical_input: {
          amount: parseInt(chemicalAmount) || 1000,
          chemical: chemicalId || chemicalInput,
        },
        duration: duration ?? 100,
        item_input: Ingredient.of(itemInput).toJson(),
        output: Item.of(itemOutput).toJson(),
        per_tick_usage: false,
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('nucleosynthesizing', itemOutput, itemInput));
    },
    /**
     * @param {$Chemical_} chemicalOutput
     * @param {$ItemStack_} itemInput
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     * */
    oxidizing(chemicalOutput, itemInput, recipeID) {
      /** @type {[number, $Chemical_]} */
      let [chemicalAmount, chemicalId] = chemicalOutput.split('x ');
      let recipe = {
        type: 'mekanism:oxidizing',
        input: Ingredient.of(itemInput).toJson(),
        output: {
          amount: parseInt(chemicalAmount),
          id: chemicalId,
        },
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('oxidizing', chemicalOutput, itemInput));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$Ingredient_} input
     * @param {$ItemStack_} secondaryOutput Secondary output item (optional).
     * @param {number} secondaryChance Chance of secondary output (optional, default is 100).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     * */
    sawing(output, input, secondaryOutput, secondaryChance, recipeID) {
      let recipe = {
        type: 'mekanism:sawing',
        input: Ingredient.of(input).toJson(),
        main_output: Item.of(output).toJson(),
      };

      if (secondaryOutput) {
        recipe.secondary_chance = secondaryChance ?? 100;
        recipe.secondary_output = Item.of(secondaryOutput).toJson();
      }

      event.custom(recipe).id(recipeID ?? makeRecipeId('sawing', output, input));
    },

    /**
     * @param {Special.Item} output
     * @param {$Ingredient_} input
     * @param {$Chemical_} chemicalInput
     * @param {boolean} [perTick] Whether chemicals get consumed per tick instead of on completing recipe (optional, default is false).
     * @param {Special.RecipeId} [recipeID]
     */
    purifying(output, input, chemicalInput, perTick, recipeID) {
      event.recipes.mekanism.purifying(output, input, chemicalInput, perTick || false).id(recipeID ?? makeRecipeId('purifying', output, input));
    },

    /**
     * @param {$Chemical_} output
     * @param {$FluidIngredient_} fluid
     * @param {$Chemical_} input
     * @param {Special.RecipeId} [recipeID]
     */
    washing(output, fluid, input, recipeID) {
      event.recipes.mekanism.washing(output, fluid, input).id(recipeID ?? makeRecipeId('washing', output, input));
    },

    /**
     * @param {$Chemical_} output
     * @param {$Ingredient_} input
     * @param {$Chemical_} chemInput
     * @param {boolean} [perTick] Whether chemicals get consumed per tick instead of on completing recipe (optional, default is false).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    dissolution(output, input, chemInput, perTick, recipeID) {
      event.recipes.mekanism.dissolution(output, input, chemInput, perTick || false).id(recipeID ?? makeRecipeId('dissolution', output, input));
    },
  };
}
