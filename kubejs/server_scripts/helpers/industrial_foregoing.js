/**
 * @typedef {Object} LaserDrillRarity
 * @property {Object} biome_filter
 * @property {Special.WorldgenBiome[]} biome_filter.blacklist
 * @property {Special.WorldgenBiome[]} biome_filter.whitelist
 * @property {number} [depth_max=319]
 * @property {number} [depth_min=-64]
 * @property {Object} dimension_filter
 * @property {Special.Dimension[]} dimension_filter.blacklist
 * @property {Special.Dimension[]} dimension_filter.whitelist
 * @property {number} weight
 */

/**
 * Industrial Foregoing Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function IndustrialForegoingHelper(event) {
  /**
   * Generate a recipe ID based on output and recipe type
   * @param {string} type
   * @param {string} output
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (type, output) => {
    let name = output;
    let amount = 1;

    if (name.includes('x ')) {
      [amount, name] = name.split('x ');
      amount = parseInt(amount);
    }

    if (Item.exists(name)) name = Item.of(name).registryId.path;
    else if (Fluid.exists(name)) name = Fluid.of(name).registryId.path;
    else if (name.includes('[')) name = name.split('[')[0];

    return `craftoria:industrial_foregoing/${type}/${amount}_${name}`;
  };

  return {
    /**
     * @param {Special.Fluid} fluidOutput
     * @param {Special.BlockTag[] | Special.Block[]} blockInput
     * @param {Special.Block} blockOutput
     * @param {number} [breakChance=0]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    fluidExtraction(fluidOutput, blockInput, blockOutput, breakChance, recipeID) {
      let recipe = {
        type: 'industrialforegoing:fluid_extractor',
        breakChance: breakChance ?? 0,
        defaultRecipe: false,
        input: Ingredient.of(blockInput).toJson(),
        output: Fluid.of(fluidOutput).toJson(),
        result: {
          Name: blockOutput,
        },
      };

      event.custom(recipe).id(recipeID ?? makeRecipeId('fluid_extractor', fluidOutput));
    },

    /**
     * @param {$ItemStack_} itemOutput
     * @param {$Ingredient_[]} itemInputs
     * @param {number} [processingTime=100]
     * @param {$FluidIngredient_} [fluidInput]
     * @param {Special.Fluid} [fluidOutput]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    dissolutionChamber(itemOutput, itemInputs, processingTime, fluidInput, fluidOutput, recipeID) {
      let recipe = {
        type: 'industrialforegoing:dissolution_chamber',
        input: itemInputs.map(i => Ingredient.of(i).toJson()),
        output: Item.of(itemOutput).toJson(),
        processingTime: processingTime ?? 100,
      };

      if (fluidOutput) {
        recipe.outputFluid = Fluid.of(fluidOutput).toJson();
      }

      if (fluidInput) {
        if (typeof fluidInput === 'string' && fluidInput.includes('#')) {
          let [amount, tag] = fluidInput.split('x ');
          recipe.inputFluid = {
            amount: parseInt(amount),
            tag: tag.replace('#', ''),
          };
        } else {
          recipe.inputFluid = Fluid.of(fluidInput).toJson();
        }
      }

      event.custom(recipe).id(recipeID ?? makeRecipeId('dissolution_chamber', itemOutput));
    },

    /**
     * @param {Special.Item} itemOutput
     * @param {Special.Item} catalyst
     * @param {LaserDrillRarity[] | LaserDrillRarity} [rarityList]
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    oreLaserDrilling(itemOutput, catalyst, rarityList, recipeID) {
      let recipe = {
        type: 'industrialforegoing:laser_drill_ore',
        catalyst: Ingredient.of(catalyst).toJson(),
        output: Ingredient.of(itemOutput).toJson(),
        rarity: [],
      };

      if (rarityList) {
        let rarities = Array.isArray(rarityList) ? rarityList : [rarityList];
        rarities.forEach(r => {
          recipe.rarity.push(r);
        });
      } else {
        recipe.rarity.push(
          {
            biome_filter: { blacklist: [], whitelist: [] },
            depth_max: 132,
            depth_min: 5,
            dimension_filter: {
              blacklist: ['minecraft:the_end'],
              whitelist: [],
            },
            weight: 10,
          },
          {
            biome_filter: { blacklist: [], whitelist: [] },
            depth_max: 255,
            depth_min: 0,
            dimension_filter: {
              blacklist: ['minecraft:the_end'],
              whitelist: [],
            },
            weight: 4,
          }
        );
      }

      event.custom(recipe).id(recipeID ?? makeRecipeId('laser_drill_ore', itemOutput));
    },
  };
}
