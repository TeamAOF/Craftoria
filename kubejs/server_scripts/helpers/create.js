// priority: 10000
/**
 * @typedef {Object} RecipeBuilder
 * @property {function($Ingredient_): RecipeBuilder} itemIn - Add an item input
 * @property {function($FluidIngredient_): RecipeBuilder} fluidIn - Add a fluid input
 * @property {function($ItemStack_, number=): RecipeBuilder} itemOut - Add an item output with optional chance
 * @property {function(Special.Fluid): RecipeBuilder} fluidOut - Add a fluid output
 * @property {function(string): RecipeBuilder} id - Set the recipe ID
 * @property {function(): RecipeBuilder} register - Register with auto-generated ID
 */

/**
 * @typedef {Object} CreateHelper
 * @property {function(): RecipeBuilder} compacting
 * @property {function(number=): RecipeBuilder} crushing
 * @property {function(): RecipeBuilder} cutting
 * @property {function(): RecipeBuilder} deploying
 * @property {function(): RecipeBuilder} emptying
 * @property {function(): RecipeBuilder} filling
 * @property {function(): RecipeBuilder} haunting
 * @property {function(): RecipeBuilder} item_application
 * @property {function(number=): RecipeBuilder} milling
 * @property {function($HeatCondition_=): RecipeBuilder} mixing
 * @property {function(): RecipeBuilder} pressing
 * @property {function(): RecipeBuilder} sandpaper_polishing
 * @property {function(): RecipeBuilder} splashing
 */

/**
 * Create Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 * @returns {CreateHelper}
 */
function CreateHelper(event) {
  const makeRecipeId = (type, result) => {
    if (!result) {
      return `craftoria:create/${type}/recipe_${Date.now()}`;
    }

    let name;

    // Handle different result formats
    if (typeof result === 'string') {
      name = result;
    } else if (result.item) {
      // Item result format: { item: "minecraft:iron_ingot", count: 2 }
      name = result.item;
    } else if (result.id) {
      // Fluid result format: { id: "minecraft:water", amount: 1000 }
      name = result.id;
    } else if (result.fluid) {
      // Alternative fluid format
      name = result.fluid;
    } else {
      // Fallback
      return `craftoria:create/${type}/recipe_${Date.now()}`;
    }

    // Extract the item/fluid name from full identifier
    if (name.includes(':')) {
      name = name.split(':')[1];
    }

    return `craftoria:create/${type}/${name}`;
  };

  /**
   * Creates a chainable recipe builder for Create mod recipes
   * @param {string} type - The type of recipe (e.g., 'mixing', 'compacting', etc.)
   * @returns {function(string|number=): RecipeBuilder}
   */
  const createChainableRecipe = type => (param) => {
    const recipe = {
      type: `create:${type}`,
      ingredients: [],
      results: [],
    };

    // Add type-specific parameters
    if (type === 'mixing' && param) {
      recipe.heat_requirement = param;
    } else if ((type === 'crushing' || type === 'milling') && typeof param === 'number') {
      recipe.processing_time = param;
    }

    const builder = {
      /**
       * Add an item input to the recipe
       * @param {$Ingredient_} item - Item identifier (e.g., '4x minecraft:iron_ingot')
       * @returns {RecipeBuilder}
       */
      itemIn(item) {
        const ingredient = Ingredient.of(item).toJson();
        recipe.ingredients.push(ingredient);
        return builder;
      },

      /**
       * Add a fluid input to the recipe
       * @param {$FluidIngredient_} fluid - Fluid identifier (e.g., '1000x minecraft:water')
       * @returns {RecipeBuilder}
       */
      fluidIn(fluid) {
        let amount = 1000;
        let id = fluid;

        if (typeof fluid === 'string' && fluid.includes('x ')) {
          let [amountStr, fluidId] = fluid.split('x ');
          amount = parseInt(amountStr);
          id = fluidId;
        }

        const isFluidTag = id.includes('#');
        if (isFluidTag) id = id.slice(1);

        const fluidIngredient = {
          fluid: isFluidTag ? undefined : id,
          fluid_tag: isFluidTag ? id : undefined,
          amount: amount,
          type: isFluidTag ? 'fluid_tag' : 'fluid_stack',
        };

        if (isFluidTag) delete fluidIngredient.fluid;
        else delete fluidIngredient.fluid_tag;

        recipe.ingredients.push(fluidIngredient);
        return builder;
      },

      /**
       * Add an item output to the recipe
       * @param {Special.Item} item - Item identifier (e.g., '2x minecraft:iron_ingot')
       * @param {number} [chance] - Chance for the output (0-1)
       * @returns {RecipeBuilder}
       */
      itemOut(item, chance) {
        const result = JSON.parse(Item.of(item).toJson());
        if (chance) result.chance = chance;
        recipe.results.push(result);
        return builder;
      },

      /**
       * Add a fluid output to the recipe
       * @param {Special.Fluid} fluid - Fluid identifier (e.g., '1000x minecraft:water')
       * @returns {RecipeBuilder}
       */
      fluidOut(fluid) {
        recipe.results.push(Fluid.of(fluid).toJson());
        return builder;
      },

      /**
       * Set the recipe ID
       * @param {string} recipeId - The recipe ID
       * @returns {RecipeBuilder}
       */
      id(recipeId) {
        event.custom(recipe).id(recipeId);
        return builder;
      },

      /**
       * Register the recipe with an auto-generated ID
       * @returns {RecipeBuilder}
       */
      register() {
        const autoId = makeRecipeId(type, recipe.results[0]);
        event.custom(recipe).id(autoId);
        return builder;
      },
    };

    return builder;
  };

  // Return chainable recipe builders
  return {
    compacting: createChainableRecipe('compacting'),
    crushing: createChainableRecipe('crushing'),
    cutting: createChainableRecipe('cutting'),
    deploying: createChainableRecipe('deploying'),
    emptying: createChainableRecipe('emptying'),
    filling: createChainableRecipe('filling'),
    haunting: createChainableRecipe('haunting'),
    item_application: createChainableRecipe('item_application'),
    milling: createChainableRecipe('milling'),
    mixing: createChainableRecipe('mixing'),
    pressing: createChainableRecipe('pressing'),
    sandpaper_polishing: createChainableRecipe('sandpaper_polishing'),
    splashing: createChainableRecipe('splashing'),
  };
}
