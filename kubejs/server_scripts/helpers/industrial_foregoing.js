// priority: 10000
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
 * @callback RarityCallback
 * @param {LaserDrillRarity} rarity - Rarity configuration
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback RaritiesCallback
 * @param {LaserDrillRarity[]} rarityList - Array of rarity configurations
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback ConfiguredRarityCallback
 * @param {number} weight - Weight for this rarity
 * @param {Object} [options] - Configuration options
 * @param {number} [options.depthMin] - Minimum depth (default: 5)
 * @param {number} [options.depthMax] - Maximum depth (default: 255)
 * @param {Special.WorldgenBiome[]} [options.biomeWhitelist] - Biomes to whitelist
 * @param {Special.WorldgenBiome[]} [options.biomeBlacklist] - Biomes to blacklist
 * @param {Special.Dimension[]} [options.dimensionWhitelist] - Dimensions to whitelist
 * @param {Special.Dimension[]} [options.dimensionBlacklist] - Dimensions to blacklist
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback BiomeRarityCallback
 * @param {Special.WorldgenBiome[]} biomes - Biomes to whitelist
 * @param {number} weight - Weight for this rarity
 * @param {number} [depthMin] - Minimum depth (default: 5)
 * @param {number} [depthMax] - Maximum depth (default: 255)
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback DimensionRarityCallback
 * @param {Special.Dimension[]} dimensions - Dimensions to whitelist
 * @param {number} weight - Weight for this rarity
 * @param {number} [depthMin] - Minimum depth (default: 5)
 * @param {number} [depthMax] - Maximum depth (default: 255)
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback IdCallback
 * @param {string} recipeId - The recipe ID
 * @returns {LaserDrillBuilder}
 */

/**
 * @callback RegisterCallback
 * @returns {LaserDrillBuilder}
 */

/**
 * @typedef {Object} LaserDrillBuilder
 * @property {RarityCallback} rarity - Add a rarity configuration
 * @property {RaritiesCallback} rarities - Add multiple rarity configurations
 * @property {RegisterCallback} defaultRarities - Add default overworld rarity configurations
 * @property {ConfiguredRarityCallback} configuredRarity - Add a rarity configuration with flexible biome and dimension filtering
 * @property {BiomeRarityCallback} biomeRarity - Add biome-specific rarity
 * @property {DimensionRarityCallback} dimensionRarity - Add dimension-specific rarity
 * @property {IdCallback} id - Set the recipe ID
 * @property {RegisterCallback} register - Register with auto-generated ID
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
     * Creates a chainable recipe builder for Laser Drill Ore recipes
     * @param {Special.Item} itemOutput - Item identifier for the output
     * @param {Special.Item} catalyst - Catalyst item identifier
     * @returns {LaserDrillBuilder}
     */
    oreLaserDrilling(itemOutput, catalyst) {
      const recipe = {
        type: 'industrialforegoing:laser_drill_ore',
        output: Ingredient.of(itemOutput).toJson(),
        catalyst: Ingredient.of(catalyst).toJson(),
        rarity: [],
      };

      const builder = {

        /**
         * Add a rarity configuration to the recipe
         * @param {LaserDrillRarity} rarity - Rarity configuration
         * @returns {LaserDrillBuilder}
         */
        rarity(rarity) {
          recipe.rarity.push(rarity);
          return builder;
        },

        /**
         * Add multiple rarity configurations to the recipe
         * @param {LaserDrillRarity[]} rarityList - Array of rarity configurations
         * @returns {LaserDrillBuilder}
         */
        rarities(rarityList) {
          rarityList.forEach(r => recipe.rarity.push(r));
          return builder;
        },

        /**
         * Add default rarity configurations for overworld mining
         * @returns {LaserDrillBuilder}
         */
        defaultRarities() {
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
          return builder;
        },

        /**
         * Add a rarity configuration with flexible biome and dimension filtering
         * @param {number} weight - Weight for this rarity
         * @param {Object} [options] - Configuration options
         * @param {number} [options.depthMin] - Minimum depth (default: 5)
         * @param {number} [options.depthMax] - Maximum depth (default: 255)
         * @param {Special.WorldgenBiome[]} [options.biomeWhitelist] - Biomes to whitelist
         * @param {Special.WorldgenBiome[]} [options.biomeBlacklist] - Biomes to blacklist
         * @param {Special.Dimension[]} [options.dimensionWhitelist] - Dimensions to whitelist
         * @param {Special.Dimension[]} [options.dimensionBlacklist] - Dimensions to blacklist
         * @returns {LaserDrillBuilder}
         */
        configuredRarity(weight, options) {
          options = options || {};

          const rarityConfig = {
            biome_filter: {
              blacklist: options.biomeBlacklist || [],
              whitelist: options.biomeWhitelist || []
            },
            depth_max: options.depthMax || 255,
            depth_min: options.depthMin || 5,
            dimension_filter: {
              blacklist: options.dimensionBlacklist || [],
              whitelist: options.dimensionWhitelist || []
            },
            weight: weight,
          };

          recipe.rarity.push(rarityConfig);
          return builder;
        },

        /**
         * Add a rarity configuration for specific biomes (whitelist only - convenience method)
         * @param {Special.WorldgenBiome[]} biomes - Biomes to whitelist
         * @param {number} weight - Weight for this rarity
         * @param {number} [depthMin] - Minimum depth (default: 5)
         * @param {number} [depthMax] - Maximum depth (default: 255)
         * @returns {LaserDrillBuilder}
         */
        biomeRarity(biomes, weight, depthMin, depthMax) {
          return builder.configuredRarity(weight, {
            biomeWhitelist: biomes,
            depthMin: depthMin,
            depthMax: depthMax
          });
        },

        /**
         * Add a rarity configuration for specific dimensions (whitelist only - convenience method)
         * @param {Special.Dimension[]} dimensions - Dimensions to whitelist
         * @param {number} weight - Weight for this rarity
         * @param {number} [depthMin] - Minimum depth (default: 5)
         * @param {number} [depthMax] - Maximum depth (default: 255)
         * @returns {LaserDrillBuilder}
         */
        dimensionRarity(dimensions, weight, depthMin, depthMax) {
          return builder.configuredRarity(weight, {
            dimensionWhitelist: dimensions,
            depthMin: depthMin,
            depthMax: depthMax
          });
        },

        /**
         * Set the recipe ID
         * @param {string} recipeId - The recipe ID
         * @returns {LaserDrillBuilder}
         */
        id(recipeId) {
          event.custom(recipe).id(recipeId);
          return builder;
        },

        /**
         * Register the recipe with an auto-generated ID
         * @returns {LaserDrillBuilder}
         */
        register() {
          // Use default rarities if none were specified
          if (recipe.rarity.length === 0) {
            builder.defaultRarities();
          }

          const autoId = makeRecipeId('laser_drill_ore', recipe.output?.item || recipe.output);
          event.custom(recipe).id(autoId);
          return builder;
        },
      };

      return builder;
    },
  };
}
