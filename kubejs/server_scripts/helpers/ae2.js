/**
 * AE2 and ExtendedAE Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function AE2Helper(event) {
  /**
   * Generate a recipe ID based on output and recipe type
   * @param {string} type
   * @param {$Item_} output
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (type, output) => {
    let name = output.includes('x ') ? output.split('x ')[1] : output;
    name = name.includes(':') ? name.split(':')[1] : name;
    return `craftoria:ae2/${type}/${name}`;
  };

  return {
    /**
     * ExtendedAE Crystal Assembler Recipe
     * @param {$Item_} output
     * @param {$Ingredient_[]} inputs
     * @param {$Fluid_} [fluid]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    crystalAssembler(output, inputs, fluid, recipeID) {
      let recipe = {
        type: 'extendedae:crystal_assembler',
        input_items: inputs.map((input) => {
          let [amount, item] = input.includes('x ') ? input.split('x ') : [1, input];
          return {
            amount: parseInt(amount),
            ingredient: Ingredient.of(item).toJson(),
          };
        }),
        output: Item.of(output).toJson(),
      };

      if (fluid) {
        let [fluidAmount, fluidId] = fluid.includes('x ') ? fluid.split('x ') : [1000, fluid];
        recipe.input_fluid = {
          amount: parseInt(fluidAmount),
          ingredient: { fluid: fluidId },
        };
      }

      event.custom(recipe).id(recipeID ?? makeRecipeId('crystal_assembler', output));
    },

    /**
     * ExtendedAE Circuit Cutter Recipe
     * @param {$Item_} output
     * @param {$Ingredient_} input
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    circuitCutter(output, input, recipeID) {
      let [amount, item] = input.includes('x ') ? input.split('x ') : [1, input];

      let recipe = {
        type: 'extendedae:circuit_cutter',
        input: {
          amount: parseInt(amount),
          ingredient: Ingredient.of(item).toJson(),
        },
        output: Item.of(output).toJson(),
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('circuit_cutter', output));
    },

    /**
     * ExtendedAE Crystal Fixer Recipe
     * @param {Special.Block} output
     * @param {Special.Block} input
     * @param {$Ingredient_} fuel
     * @param {number} [chance=8000]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    crystalFixer(output, input, fuel, chance, recipeID) {
      let recipe = {
        type: 'extendedae:crytal_fixer',
        input: { id: input },
        fuel: { ingredient: Ingredient.of(fuel).toJson() },
        output: { id: output },
        chance: chance ?? 8000,
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('fixer', output));
    },

    /**
     * AE2 Inscriber Recipe
     * @param {$InscriberProcessType_} mode
     * @param {$Item_} output
     * @param {$Ingredient_} middle
     * @param {$Ingredient_} [top]
     * @param {$Ingredient_} [bottom]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    inscriber(mode, output, middle, top, bottom, recipeID) {
      let recipe = {
        type: 'ae2:inscriber',
        mode: mode,
        ingredients: {
          middle: Ingredient.of(middle).toJson(),
        },
        result: Item.of(output).toJson(),
      };

      if (top) recipe.ingredients.top = Ingredient.of(top).toJson();
      if (bottom) recipe.ingredients.bottom = Ingredient.of(bottom).toJson();

      event.custom(recipe).id(recipeID ?? makeRecipeId(`inscriber_${mode}`, output));
    },
  };
}
