// priority: 10000

/**
 * Data & Essence Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function DataNEssenceHelper(event) {
  /**
   * Generate a recipe ID based on output, input and recipe type
   * @param {string} type
   * @param {Special.Item} output
   * @param {$Ingredient_} input
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (type, output, input) => {
    return _makeRecipeID('datanessence', type, output, input);
  };

  let essenceTypes = {
    'datanessence:essence': 'essence',
    'datanessence:lunar_essence': 'lunar_essence',
    'datanessence:natural_essence': 'natural_essence',
    'datanessence:exotic_essence': 'exotic_essence',
  };

  /**
   * @param {Special.DatanessenceEssenceTypes[]} essences
   */
  let essenceCost4 = (essences) => {
    let cost = {};

    essences = Array.isArray(essences) ? essences : [essences];

    for (let type of essences) {
      let [amount, essence] = type.includes('x ') ? type.split('x ') : [1, type];

      if (essenceTypes[essence] !== undefined) {
        cost[essenceTypes[essence]] = parseInt(amount);
      } else {
        throw new Error(`Essence type ${essence} is not defined in the provided essences.`);
      }
    }

    return cost;
  };

  return {
    /**
         * Create a Synthesis recipe
         * @param {Special.Item} output - The output item of the recipe
         * @param {$Ingredient_} input1 - The first input item for the recipe
         * @param {$Ingredient_} input2 - The second input item for the recipe
         * @param {Special.DatanessenceEssenceTypes[]} essenceCost - The essence cost for the recipe (should be an array of essence types with amounts, e.g. '2x datanessence:essence')
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    synthesis(output, input1, input2, essenceCost, time, recipeID) {
      let recipe = {
        type: 'datanessence:synthesis',
        result: Item.of(output).toJson(),
        input1: Ingredient.of(input1).toJson(),
        input2: Ingredient.of(input2).toJson(),
        essenceCost: essenceCost4(essenceCost),
        time: time || 100,
      };

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('synthesis', output, input1));
    },

    /**
         * Create a Drying recipe
         * @param {Special.Fluid} output - The output fluid of the recipe
         * @param {$Ingredient_} input - The input item for the recipe
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    melting(output, input, time, recipeID) {
      let recipe = {
        type: 'datanessence:melting',
        result: Fluid.of(output).toJson(),
        input: Ingredient.of(input).toJson(),
        time: time || 100,
      };

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('melting', output, input));
    },

    /**
         * Create a Drying recipe
         * @param {Special.Item} output - The output item of the recipe
         * @param {$FluidIngredient_} input - The input fluid for the recipe
         * @param {$Ingredient_} [additive] - An optional additive item for the recipe (optional, default is none)
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    drying(output, input, additive, time, recipeID) {
      let recipe = {
        type: 'datanessence:drying',
        result: Item.of(output).toJson(),
        input: FluidIngredient(input),
        time: time || 100,
      };

      if (additive) recipe.additive = Ingredient.of(additive).toJson();

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('drying', output, input));
    },

    /**
         * Create a Metal Shaping recipe
         * @param {Special.Item} output - The output item of the recipe
         * @param {$Ingredient_} input - The input item for the recipe
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    metal_shaping(output, input, time, recipeID) {
      let recipe = {
        type: 'datanessence:metal_shaping',
        result: Item.of(output).toJson(),
        input: Ingredient.of(input).toJson(),
        time: time || 100,
      };

      if (recipeID) return event.custom(recipe);
      else event.custom(recipe).id(makeRecipeId('metal_shaping', output, input));
    },

    /**
         * Create a Fluid Mixer recipe
         * @param {Special.Fluid} output - The output fluid of the recipe
         * @param {$Ingredient_} fluidInput1 - The input fluid for the recipe
         * @param {$Ingredient_} [fluidInput2] - The second input fluid for the recipe
         * @param {$Ingredient_} [itemInput] - An optional item input for the recipe (optional, default is none)
         * @param {number} [essenceCost] - The essence cost for the recipe (optional, default is none)
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    fluid_mixer(output, fluidInput1, fluidInput2, itemInput, essenceCost, time, recipeID) {
      let recipe = {
        type: 'datanessence:fluid_mixer',
        result: Fluid.of(output).toJson(),
        fluid_input: FluidIngredient(fluidInput1),
        time: time || 100,
      };

      if (fluidInput2) recipe.fluid_input2 = FluidIngredient(fluidInput2);
      if (itemInput) recipe.item_input = Ingredient.of(itemInput).toJson();
      if (essenceCost) recipe.essence_cost = essenceCost;
      event.custom(recipe).id(recipeID ?? makeRecipeId('fluid_mixer', output, fluidInput1));
    },

    /**
         * Create an Entropic Processing recipe
         * @param {Special.Item} output - The output item of the recipe
         * @param {$Ingredient_} input - The input item for the recipe
         * @param {number} [time] - The time taken for the recipe in ticks (optional, default is 100)
         * @param {Special.RecipeId} [recipeID] - The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
         */
    entropic_processing(output, input, time, recipeID) {
      let recipe = {
        type: 'datanessence:entropic_processing',
        result: Item.of(output).toJson(),
        input: Ingredient.of(input).toJson(),
        time: time || 100,
      };
      event.custom(recipe).id(recipeID ?? makeRecipeId('entropic_processing', output, input));
    },

    /**
         * Create an Infusion recipe
         * @param {Special.Item} output
         * @param {$Ingredient_} input
         * @param {Special.DatanessenceEssenceTypes[]} essenceCost
         * @param {number} [time]
         * @param {Special.RecipeId} [recipeID]
         * @returns
         */
    infusion(output, input, essenceCost, time, recipeID) {
      let recipe = {
        type: 'datanessence:infusion',
        result: Item.of(output).toJson(),
        input: Ingredient.of(input).toJson(),
        essence_cost: essenceCost4(essenceCost),
        time: time || 100,
      };
      event.custom(recipe).id(recipeID ?? makeRecipeId('infusion', output, input));
    },

    /**
     *
     * @param {*} output
     * @param {*} pattern
     * @param {*} patternKey
     * @param {*} essenceCost
     * @param {*} time
     * @param {*} recipeID
     * @returns
     */
    fabrication(output, pattern, patternKey, essenceCost, time, recipeID) {
      let recipe = {
        type: 'datanessence:fabrication',
        result: Item.of(output).toJson(),
        pattern: pattern,
        key: {},
        essenceCost: essenceCost4(essenceCost),
        time: time || 100,
      };

      for (let [k, v] of Object.entries(patternKey)) {
        recipe.key[k] = Ingredient.of(v).toJson();
      }
      event.custom(recipe).id(recipeID ?? makeRecipeId('fabrication', output, pattern));
    }
  };
}
