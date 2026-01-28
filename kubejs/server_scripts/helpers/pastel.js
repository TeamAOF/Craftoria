/// <reference path="./../../../.probe/server/probe-types/global/index.d.ts" />

// priority: 10000
/**
 * Pastel Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function PastelHelper(event) {
  /**
   * Generate a recipe ID based on output, input and recipe type
   * @param {string} type
   * @param {Special.Item} output
   * @param {$Ingredient_} input
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (type, output, input) => {
    return _makeRecipeID('pastel', type, output, input);
  };

  return {
    /**
     * Create a Cinderhearth recipe
     * @param {Special.Item|Special.Item[]} outputs - The output item(s) of the recipe
     * @param {$Ingredient_} ingredient - The input ingredient for the recipe
     * @param {number} [xp] - The experience points awarded for the recipe (optional, default is 0)
     * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
     * @param {string} [reqAdvancement] - The required advancement for the recipe
     * @param {Special.RecipeId} [recipeID] - The recipe ID for the custom recipe
     */
    cinderhearth(outputs, ingredient, xp, time, reqAdvancement, recipeID) {
      outputs = Array.isArray(outputs) ? outputs : [outputs];

      let recipe = {
        type: 'pastel:cinderhearth',
        results: outputs.map(output => Item.of(output).toJson()),
        ingredient: Ingredient.of(ingredient).toJson(),
        experience: xp || 0,
        time: time || 100,
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('cinderhearth', outputs[0], ingredient));
    },

    /**
     * @typedef {("humus") | ("dragonrot") | ("liquid_crystal") | ("midnight_solution")} ConvertingRecipeType
     */

    /**
     * Create a Converting recipe
     * @param {Special.Item} output - The output item of the recipe
     * @param {$Ingredient_} ingredient - The input ingredient for the recipe
     * @param {ConvertingRecipeType} type - The type of converting recipe (e.g., 'humus', 'dragonrot')
     * @param {Special.CustomStat} [reqAdvancement] - The required advancement for the recipe
     * @param {Special.RecipeId} [recipeID] - The recipe ID for the custom recipe
     */
    converting(output, ingredient, type, reqAdvancement, recipeID) {
      ingredient = Array.isArray(ingredient) ? ingredient : [ingredient];

      let recipe = {
        type: `pastel:${type}_converting`,
        result: Item.of(output).toJson(),
        ingredient: ingredient.map(ing => Ingredient.of(ing).toJson()),
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('converting', output, ingredient));
    },

    /**
     * Create a Pedestal recipe
     * @param {Special.Item} output
     * @param {*} pattern
     * @param {Record<string, $Ingredient_>} patternKey
     * @param {Special.PastelGemstoneColor[]} [colors] The colors used in the recipe, e.g. ['2x magenta', '1x yellow']
     * @param {$PedestalRecipeTier_} [tier]
     * @param {number} [time]
     * @param {string} [reqAdvancement]
     * @param {Special.RecipeId} [recipeID]
     * @returns
     */
    pedestal(output, pattern, patternKey, colors, tier, xp, time, reqAdvancement, recipeID) {
      let recipe = {
        type: 'pastel:pedestal',
        result: Item.of(output).toJson(),
        pattern: pattern,
        key: {},
        colors: {
          'pastel:magenta': 0,
          'pastel:yellow': 0,
          'pastel:cyan': 0,
          'pastel:black': 0,
          'pastel:white': 0,
        },
        tier: tier || 'basic',
        time: time || 100,
        experience: xp || 0,
      };

      for (let [k, v] of Object.entries(patternKey)) {
        recipe.key[k] = Ingredient.of(v).toJson();
      }

      if (colors) {
        colors.forEach((color) => {
          let [amount, colorName] = color.split('x ');
          recipe.colors[colorName] = parseInt(amount);
        });
      }

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('pedestal', output, null));
    },

    /**
     * Create a Fusion Shrine recipe
     * @param {Special.Item} output
     * @param {$Ingredient_ | $Ingredient_[]} ingredients
     * @param {Special.Fluid} [fluid] - The fluid required for the recipe
     * @param {number} [xp] - The experience points awarded for the recipe (optional, default is 0)
     * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
     * @param {boolean} [copyComps] - Whether to copy components from the output item (optional, default is false)
     * @param {string} [reqAdvancement] - The required advancement for the recipe
     * @param {Record<string, any>} [extra] - Additional properties
     * @param {Special.RecipeId} [recipeID] - The recipe ID for the custom recipe
     */
    fusion_shrine(output, ingredients, fluid, xp, time, copyComps, reqAdvancement, extra, recipeID) {
      ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];

      let recipe = {
        type: 'pastel:fusion_shrine',
        result: Item.of(output).toJson(),
        ingredients: ingredients.map(ing => Ingredient.of(ing).toJson()),
        experience: xp || 0,
        time: time || 100,
        copy_components: copyComps || false,
      };

      if (fluid) recipe.fluid = { fluid: fluid };

      if (extra) {
        for (let [key, value] of Object.entries(extra)) {
          recipe[key] = value;
        }
      }

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('fusion_shrine', output, ingredients));
    },

    /**
     * Create an Enchanter recipe
     * @param {Special.Item} output
     * @param {$Ingredient_ | $Ingredient_[]} ingredients
     * @param {number} [reqXp] - The required experience for the recipe (optional, default is 0)
     * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
     * @param {string} [reqAdvancement] - The required advancement for the recipe
     * @param {Special.RecipeId} [recipeID] - The recipe ID for the custom recipe
     */
    enchanter(output, ingredients, reqXp, time, reqAdvancement, recipeID) {
      ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
      let recipe = {
        type: 'pastel:enchanter',
        result: Item.of(output).toJson(),
        ingredients: ingredients.map(ing => Ingredient.of(ing).toJson()),
        required_experience: reqXp || 0,
        time: time || 100,
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('enchanter', output, ingredients));
    },

    /**
     * Create a Spirit Instiller recipe
     * @param {Special.Item} output - The output item of the recipe
     * @param {$Ingredient_} ingredient1 - The first input ingredient for the recipe
     * @param {$Ingredient_} ingredient2 - The second input ingredient for the recipe
     * @param {$Ingredient_} centerIngredient - The center ingredient for the recipe
     * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
     * @param {number} [xp] - The experience points awarded for the recipe (optional, default is 0)
     * @param {string} [reqAdvancement] - The required advancement for the recipe
     * @param {Special.RecipeId} [recipeID] - The recipe ID for the custom recipe
     */
    spirit_instiller(output, ingredient1, ingredient2, centerIngredient, time, xp, reqAdvancement, recipeID) {
      let recipe = {
        type: 'pastel:spirit_instiller',
        result: Item.of(output).toJson(),
        ingredient1: Ingredient.of(ingredient1).toJson(),
        ingredient2: Ingredient.of(ingredient2).toJson(),
        center_ingredient: Ingredient.of(centerIngredient).toJson(),
        time: time || 100,
        experience: xp || 0,
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;
      event.custom(recipe).id(recipeID ?? makeRecipeId('spirit_instiller', output, [ingredient1, ingredient2, centerIngredient]));
    },
  };
}
