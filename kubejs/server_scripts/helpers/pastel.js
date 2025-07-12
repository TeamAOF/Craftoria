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
     */
    cinderhearth(outputs, ingredient, xp, time, reqAdvancement, recipeID) {
      outputs = Array.isArray(outputs) ? outputs : [outputs];

      let recipe = {
        type: 'pastel:cinderhearth',
        results: outputs.map(output => Item.of(output).toJson()),
        ingredient: Ingredient.of(ingredient).toJson(),
        xp: xp || 0,
        time: time || 100,
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('cinderhearth', outputs[0], ingredient));
    },

    converting(output, ingredient, type, reqAdvancement, recipeID) {
      ingredient = Array.isArray(ingredient) ? ingredient : [ingredient];

      let recipe = {
        type: `pastel:${type}_converting`,
        result: Item.of(output).toJson(),
        ingredient: ingredient.map(ing => Ingredient.of(ing).toJson()),
      };

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;


      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('converting', output, ingredient));
    },

    /**
     *
     * @param {*} output
     * @param {*} pattern
     * @param {*} patternKey
     * @param {*} colors
     * @param {*} tier
     * @param {number} time
     * @param {Special.Advancement} reqAdvancement
     * @param {Special.RecipeId} recipeID
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
        tier: tier,
        time: time || 100,
        xp: xp || 0,
      };

      colors.forEach((color) => {
        let [amount, colorName] = color.split('x ');
        recipe.colors[`pastel:${colorName}`] = parseInt(amount);
      });


      for (let [k, v] of Object.entries(patternKey)) {
        recipe.key[k] = Ingredient.of(v).toJson();
      }

      if (reqAdvancement) recipe.required_advancement = reqAdvancement;

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('pedestal', output, pattern));
    }
  };
}
