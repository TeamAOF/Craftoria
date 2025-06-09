// priority: 10000
/**
 * @typedef {($Ingredient_|$FluidIngredient_)[]|($Ingredient_|$FluidIngredient_)} CreateIngredients
 * @typedef {(Special.Item|Special.Fluid)[]|(Special.Item|Special.Fluid)} CreateResults
 */

/**
 * Create Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function CreateHelper(event) {
  const makeRecipeId = (type, output) => {
    /** @param {Arra} arr */
    const flatten = arr => {
      if (!Array.isArray(arr)) return arr;
      return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    };

    if (Array.isArray(output)) output = flatten(output)[0];

    let name = output.includes('x ') ? output.split('x ')[1] : output;
    name = name.includes(':') ? name.split(':')[1] : name;
    return `craftoria:create/${type}/${name}`;
  };

  /**
     *
     * @param {CreateIngredients|CreateResults} items
     * @param {boolean} isOutput
     * @returns {($Ingredient_|$FluidIngredient_)[]}
     */
  const jsonArray = (items, isOutput) => {
    if (!Array.isArray(items)) items = [items];
    items = items.map(element => {
      let isFluid, isFluidTag;
      /** @type string */
      let id = element;
      let amount = 1000;

      if (Array.isArray(element)) {
        id = element[0];
        isFluid = element[1] === true;
      }

      if (isFluid) {
        if (typeof id === 'string' && id.includes('x ')) {
          let [amountStr, item] = id.split('x ');
          amount = parseInt(amountStr);
          id = item;
        }


        if (isOutput) {
          element = {
            id: id,
            amount: amount,
          };

          return element;
        }

        if (id.includes('#')) {
          isFluidTag = true;
          id = id.slice(1);
        }
        element = {
          fluid: id,
          amount: amount,
          type: isFluidTag ? 'fluid_tag' : 'fluid_stack',
        };
        if (isFluidTag) {
          element.fluid_tag = id;
          delete element.fluid;
        }

      } else {
        element = isOutput ? Item.of(element).toJson() : Ingredient.of(element).toJson();
      }

      if (typeof element === 'object' && element !== null) return element;
      else throw new Error(`Invalid element: ${element}`);
    });
    return items;
  };

  const register = (type, recipe, output, recipeID) => {
    event.custom(recipe).id(recipeID ?? makeRecipeId(type, output));
  };

  /**
     * Creates a basic recipe function for Create mod
     * @param {Special.RecipeType} type - The type of recipe (e.g., 'mixing', 'compacting', etc.)
     * @returns {function(CreateResults, CreateIngredients, Special.RecipeId): void}
     */
  const basicRecipe = type => (output, input, recipeID) => {
    const recipe = {
      type: `create:${type}`,
      ingredients: jsonArray(input),
      results: jsonArray(output, true),
    };
    register(type, recipe, output, recipeID);
  };

  // TODO: Add mechanical crafting, sequenced assembly.
  return {
    compacting: basicRecipe('compacting'),
    crushing: basicRecipe('crushing'),
    cutting: basicRecipe('cutting'),
    deploying: basicRecipe('deploying'),
    emptying: basicRecipe('emptying'),
    filling: basicRecipe('filling'),
    haunting: basicRecipe('haunting'),
    item_application: basicRecipe('item_application'),
    milling: basicRecipe('milling'),
    mixing: basicRecipe('mixing'),
    pressing: basicRecipe('pressing'),
    sandpaper_polishing: basicRecipe('sandpaper_polishing'),
    splashing: basicRecipe('splashing'),
  };
}
