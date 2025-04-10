/**
 * Industrial Foregoing Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function IndustrialForegoingHelper(event) {
  /**
   * Generate a recipe ID based on output and recipe type
   * @param {string} output
   * @param {string} type
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (output, type) => {
    let name = output;
    let amount = 1;

    if (name.includes("x ")) {
      [amount, name] = name.split("x ");
      amount = parseInt(amount);
    }

    if (Item.exists(name)) name = Item.of(name).registryId.path;
    else if (Fluid.exists(name)) name = Fluid.of(name).registryId.path;
    else if (name.includes("[")) name = name.split("[")[0];

    return `craftoria:industrial_foregoing/${type}/${amount}_${name}`;
  };

  return {
    /**
     * @param {$Fluid_} fluidOutput
     * @param {Special.BlockTag[] | Special.Block[]} blockInput
     * @param {Special.Block} blockOutput
     * @param {number} [breakChance=0]
     */
    fluidExtraction(fluidOutput, blockInput, blockOutput, breakChance) {
      let recipe = {
        type: "industrialforegoing:fluid_extractor",
        breakChance: breakChance ?? 0,
        defaultRecipe: false,
        input: Ingredient.of(blockInput).toJson(),
        output: Fluid.of(fluidOutput).toJson(),
        result: {
          Name: blockOutput,
        },
      };

      event.custom(recipe).id(makeRecipeId(fluidOutput, "fluid_extractor"));
    },

    /**
     * @param {$Item_} itemOutput
     * @param {$Ingredient_[]} itemInputs
     * @param {number} [processingTime=100]
     * @param {$FluidIngredient_} [fluidInput]
     * @param {$Fluid_} [fluidOutput]
     */
    dissolutionChamber(
      itemOutput,
      itemInputs,
      processingTime,
      fluidInput,
      fluidOutput
    ) {
      let recipe = {
        type: "industrialforegoing:dissolution_chamber",
        input: itemInputs.map((i) => Ingredient.of(i).toJson()),
        output: Item.of(itemOutput).toJson(),
        processingTime: processingTime ?? 100,
      };

      if (fluidOutput) {
        recipe.outputFluid = Fluid.of(fluidOutput).toJson();
      }

      if (fluidInput) {
        if (typeof fluidInput === "string" && fluidInput.includes("#")) {
          let [amount, tag] = fluidInput.split("x ");
          recipe.inputFluid = {
            amount: parseInt(amount),
            tag: tag.replace("#", ""),
          };
        } else {
          recipe.inputFluid = Fluid.of(fluidInput).toJson();
        }
      }

      event.custom(recipe).id(makeRecipeId(itemOutput, "dissolution_chamber"));
    },

    /**
     * @param {$Item_} itemOutput
     * @param {$Item_} catalyst
     * @param {$List_<$LaserDrillRarity> | $LaserDrillRarity} [rarityList]
     */
    oreLaserDrilling(itemOutput, catalyst, rarityList) {
      let recipe = {
        type: "industrialforegoing:laser_drill_ore",
        catalyst: Item.of(catalyst).toJson(),
        output: Item.of(itemOutput).toJson(),
        rarity: [],
      };

      if (rarityList) {
        let rarities = Array.isArray(rarityList) ? rarityList : [rarityList];
        for (let rarity of rarities) {
          recipe.rarity.push(rarity);
        }
      } else {
        recipe.rarity.push(
          {
            biome_filter: { blacklist: [], whitelist: [] },
            depth_max: 132,
            depth_min: 5,
            dimension_filter: {
              blacklist: ["minecraft:the_end"],
              whitelist: [],
            },
            weight: 10,
          },
          {
            biome_filter: { blacklist: [], whitelist: [] },
            depth_max: 255,
            depth_min: 0,
            dimension_filter: {
              blacklist: ["minecraft:the_end"],
              whitelist: [],
            },
            weight: 4,
          }
        );
      }

      event.custom(recipe).id(makeRecipeId(itemOutput, "ore_laser_drill"));
    },
  };
}
