/**
 * Mekanism Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function MekanismHelper(event) {
  /**
 * Generate a recipe ID based on output, input and recipe type
 * @param {string} type
 * @param {$Item_} output
 * @param {$Item_} input
 * @returns {string} The generated recipe ID
 */
  let makeRecipeId = (type, output, input) => {
    return _makeID("mekanism", type, output, input);
  };

  return {
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     */
    enriching(output, input) {
      event.recipes.mekanism
        .enriching(output, input)
        .id(makeRecipeId("enriching", output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     */
    crushing(output, input) {
      event.recipes.mekanism
        .crushing(output, input)
        .id(makeRecipeId("crushing", output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {$Chemical_} chemicalInput
     */
    metallurgicInfusing(output, input, chemicalInput, perTickUsage) {
      event.recipes.mekanism
        .metallurgic_infusing(
          output,
          input,
          chemicalInput,
          perTickUsage ? perTickUsage : false
        )
        .id(makeRecipeId("metallurgic_infusing", output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     * @param {$Chemical_} chemicalInput
     */
    injecting(output, input, chemicalInput) {
      event.recipes.mekanism
        .injecting(output, input, chemicalInput, false)
        .id(makeRecipeId("injecting", output, input));
    },
    /**
     * @param {$ItemStack_} output
     * @param {$ItemStack_} input
     */
    crystallizing(output, input) {
      event.recipes.mekanism
        .crystallizing(output, input)
        .id(makeRecipeId("crystallizing", output, input));
    },
    /**
     * @param {$Chemical_} output
     * @param {$Chemical_} chemicalLeftInput
     * @param {$Chemical_} chemicalRightInput
     */
    chemicalInfusing(output, chemicalLeftInput, chemicalRightInput) {
      event.recipes.mekanism
        .chemical_infusing(output, chemicalLeftInput, chemicalRightInput)
        .id(makeRecipeId("chemical_infusing", output, chemicalLeftInput));
    },
    /**
     * @param {$ItemStack_} itemOutput
     * @param {[$ItemStack_[], number]} itemInputListWithCount
     * @param {$Fluid_} fluidInput
     * @param {$Chemical_} chemicalOutput
     * @param {$Chemical_} chemicalInput
     * @param {number} [duration]
     */
    reaction(
      itemOutput,
      itemInputListWithCount,
      fluidInput,
      chemicalOutput,
      chemicalInput,
      duration
    ) {
      let recipe = {
        type: "mekanism:reaction",
        item_input: {
          type: "neoforge:compound",
          children: [],
          count: itemInputListWithCount[1],
        },
        item_output: Item.of(itemOutput).toJson(),
        fluid_input: {},
        chemical_input: {},
        chemical_output: {},
        duration: duration ?? 100,
      };

      itemInputListWithCount[0].forEach((item) => {
        recipe.item_input.children.push(Ingredient.of(item).toJson());
      });

      let [fluidAmount, fluidId] = fluidInput.replace("x", "").split(" ");
      if (fluidId.includes("#")) {
        recipe.fluid_input.tag = fluidId.replace("#", "");
      } else {
        recipe.fluid_input.id = fluidId;
      }
      recipe.fluid_input.amount = parseInt(fluidAmount);

      let [chemicalInputAmount, chemicalInputId] = chemicalInput
        .replace("x", "")
        .split(" ");
      if (chemicalInputId.includes("#")) {
        recipe.chemical_input.chemical = chemicalInputId.replace("#", "");
      } else {
        recipe.chemical_input.id = chemicalInputId;
      }
      recipe.chemical_input.amount = parseInt(chemicalInputAmount);

      let [chemicalOutputAmount, chemicalOutputId] = chemicalOutput
        .replace("x", "")
        .split(" ");
      recipe.chemical_output.id = chemicalOutputId;
      recipe.chemical_output.amount = parseInt(chemicalOutputAmount);

      event
        .custom(recipe)
        .id(makeRecipeId("reaction", itemOutput, itemInputListWithCount[0][0]));
    },

    /**
     * @param {$Chemical_} chemicalInput
     * @param {$Fluid_} fluidId
     */

    rotaryCondensentrating(chemicalInput, fluidId) {
      let recipe = {
        type: "mekanism:rotary",
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
          tag: `c:${fluidId.split(":")[1]}`,
        },
        fluid_output: {
          amount: 1,
          id: fluidId,
        },
      };

      event.custom(recipe).id(makeRecipeId("rotary", chemicalInput, fluidId));
    },

    /**
     * @param {$ItemStack_} itemOutput
     * @param {$ItemStack_} itemInput
     * @param {$Chemical_} chemicalInput
     * @param {number} [duration]
     */
    nucleosynthesizing(itemOutput, itemInput, chemicalInput, duration) {
      let [chemicalAmount, chemicalId] = chemicalInput.split("x ");
      let recipe = {
        type: "mekanism:nucleosynthesizing",
        chemical_input: {
          amount: parseInt(chemicalAmount) || 1000,
          chemical: chemicalId || chemicalInput,
        },
        duration: duration ?? 100,
        item_input: Ingredient.of(itemInput).toJson(),
        output: Item.of(itemOutput).toJson(),
        per_tick_usage: false,
      };

      event
        .custom(recipe)
        .id(makeRecipeId("nucleosynthesizing", itemOutput, itemInput));
    },
    /**
     * @param {$Chemical_} chemicalOutput
     * @param {$ItemStack_} itemInput
     * */
    oxidizing(chemicalOutput, itemInput) {
      let [chemicalAmount, chemicalId] = chemicalOutput.split("x ");
      let recipe = {
        type: "mekanism:oxidizing",
        input: Ingredient.of(itemInput).toJson(),
        output: {
          amount: parseInt(chemicalAmount),
          id: chemicalId,
        },
      };

      event
        .custom(recipe)
        .id(makeRecipeId("oxidizing", chemicalOutput, itemInput));
    },
    /**
     * @param {$Item_} itemTagInput
     * @param {$ItemStack_} mainItemOutput
     * @param {$ItemStack_} secondaryItemOutput
     * @param {number} secondaryItemChance
     * */
    sawing(
      itemTagInput,
      mainItemOutput,
      secondaryItemOutput,
      secondaryItemChance
    ) {
      let [mainItemAmount, mainItemId] = mainItemOutput.split("x ");
      let recipe = {
        type: "mekanism:sawing",
        input: {
          count: 1,
          tag: itemTagInput,
        },
        main_output: {
          count: parseInt(mainItemAmount),
          id: mainItemId,
        },
        secondary_chance: secondaryItemChance,
        secondary_output: {
          count: 1,
          id: secondaryItemOutput,
        },
      };

      event
        .custom(recipe)
        .id(makeRecipeId("sawing", mainItemOutput, itemTagInput));
    },
  };
}
