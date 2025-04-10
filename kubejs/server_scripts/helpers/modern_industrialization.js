/**
 * @typedef {[$Item_, number, number?]} MIItem A tuple of [item, amount, probability?]
 * @typedef {[$Fluid_, number, number?]} MIFluid A tuple of [fluid, amount, probability?]
 */

/**
 * @typedef {Object} MIRecipeInput
 * @property {$Item_} [item] - The item ID
 * @property {string} [tag] - The item tag
 * @property {$Fluid_} [fluid] - The fluid ID
 * @property {number} amount - The amount required/produced
 * @property {number} [probability] - The probability (optional)
 */

/**
 * @typedef {Object} MIRecipe
 * @property {string} type - The recipe type (e.g., "modern_industrialization:assembler")
 * @property {number} duration - The duration in ticks
 * @property {number} eu - The EU cost
 * @property {MIRecipeInput[]} [fluid_inputs] - Array of fluid inputs
 * @property {MIRecipeInput[]} [item_inputs] - Array of item inputs
 * @property {MIRecipeInput[]} [fluid_outputs] - Array of fluid outputs
 * @property {MIRecipeInput[]} [item_outputs] - Array of item outputs
 */

/**
 * Modern Industrialization Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function ModernIndustrializationHelper(event) {
  /**
   * Generates a recipe ID based on output and inputs
   * @param {MIRecipe} recipe The recipe object
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (recipe) => {
    let output = recipe.item_outputs[0];
    let outputString = `${output.item.split(":")[1]}_${output.amount}x`;

    let inputString = "with_";
    if (recipe.fluid_inputs?.length > 0) {
      inputString += recipe.fluid_inputs
        .map((input) => (input.fluid || input.tag).split(":")[1])
        .join("_");
    } else {
      inputString += recipe.item_inputs
        .map((input) => (input.item || input.tag).split(":")[1])
        .join("_");
    }

    return `${outputString}_${inputString}`;
  };

  /**
   * Processes item inputs for recipes
   * @param {MIItem[]|MIItem} inputs Array of item inputs
   * @param {MIRecipe} recipe The recipe object
   * @param {number} maxInputs Maximum allowed inputs
   */
  let processItemInputs = (inputs, recipe, maxInputs) => {
    if (!inputs) return;

    if (!Array.isArray(inputs)) {
      console.error(`Invalid item input format: ${inputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
      return;
    }

    if (!recipe.item_inputs) {
      recipe.item_inputs = [];
    }

    /** @param {MIItem} input */
    let processSingleInput = (input) => {
      if (!Array.isArray(input) || (input.length !== 2 && input.length !== 3)) {
        console.error(`Invalid item input format: ${input}`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }

      let [item, amount, probability] = input;
      let processed = {};

      if (item.includes("#")) {
        processed.tag = item.slice(1); // to handle the tag
      } else {
        processed.item = item;
      }

      processed.amount = amount;

      if (probability !== undefined) {
        processed.probability = probability;
      }

      recipe.item_inputs.push(processed);
    };

    if (Array.isArray(inputs[0])) {
      // Handle multiple item inputs
      if (inputs.length > maxInputs) {
        console.error(`Too many item inputs. Max is ${maxInputs}.`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }
      inputs.forEach(processSingleInput);
    } else {
      // Handle a single item input
      processSingleInput(inputs);
    }
  };

  /**
   * Processes item outputs for recipes
   * @param {MIItem[]|MIItem} outputs Array of item outputs
   * @param {MIRecipe} recipe The recipe object
   * @param {number} maxOutputs Maximum allowed outputs
   */
  let processItemOutputs = (outputs, recipe, maxOutputs) => {
    if (!outputs) return;

    if (!Array.isArray(outputs)) {
      console.error(`Invalid item output format: ${outputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
      return;
    }

    if (!recipe.item_outputs) {
      recipe.item_outputs = [];
    }
    /** @param {MIItem} output */
    let processSingleOutput = (output) => {
      if (
        !Array.isArray(output) ||
        (output.length !== 2 && output.length !== 3)
      ) {
        console.error(`Invalid item output format: ${output}`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }

      let [item, amount, probability] = output;
      let processed = {};

      processed.item = item;
      processed.amount = amount;

      if (probability !== undefined) {
        processed.probability = probability;
      }

      recipe.item_outputs.push(processed);
    };

    if (Array.isArray(outputs[0])) {
      if (outputs.length > maxOutputs) {
        console.error(`Too many item outputs. Max is ${maxOutputs}.`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }
      outputs.forEach(processSingleOutput);
    } else {
      processSingleOutput(outputs);
    }
  };

  /**
   * Processes fluid inputs for recipes
   * @param {MIFluid[]|MIFluid} inputs Array of fluid inputs
   * @param {MIRecipe} recipe The recipe object
   * @param {number} maxInputs Maximum allowed inputs
   */
  let processFluidInputs = (inputs, recipe, maxInputs) => {
    if (!inputs) return;

    if (!Array.isArray(inputs)) {
      console.error(`Invalid fluid input format: ${inputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
      return;
    }

    if (!recipe.fluid_inputs) {
      recipe.fluid_inputs = [];
    }

    /** @param {MIFluid} input */
    let processSingleInput = (input) => {
      if (!Array.isArray(input) || (input.length !== 2 && input.length !== 3)) {
        console.error(`Invalid fluid input format: ${input}`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }
      let [fluid, amount, probability] = input;
      let processed = {};

      processed.amount = amount;
      processed[fluid.includes("#") || fluid.includes("c:") ? "tag" : "fluid"] =
        fluid;

      if (probability !== undefined) {
        processed.probability = probability;
      }

      recipe.fluid_inputs.push(processed);
    };

    if (Array.isArray(inputs[0])) {
      if (inputs.length > maxInputs) {
        console.error(`Too many fluid inputs. Max is ${maxInputs}.`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }
      inputs.forEach(processSingleInput);
    } else {
      // Handle single fluid input
      processSingleInput(inputs);
    }
  };

  /**
   * Processes fluid outputs for recipes
   * @param {MIFluid[]|MIFluid} outputs Array of fluid outputs
   * @param {MIRecipe} recipe The recipe object
   * @param {number} maxOutputs Maximum allowed outputs
   */
  let processFluidOutputs = (outputs, recipe, maxOutputs) => {
    if (!outputs) return;

    if (!Array.isArray(outputs)) {
      console.error(`Invalid fluid output format: ${outputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
      return;
    }

    if (!recipe.fluid_outputs) {
      recipe.fluid_outputs = [];
    }
    /** @param {MIFluid} output */
    let processSingleOutput = (output) => {
      if (
        !Array.isArray(output) ||
        (output.length !== 2 && output.length !== 3)
      ) {
        console.error(`Invalid fluid output format: ${output}`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }

      let [fluid, amount, probability] = output;
      let processed = {};

      processed.amount = amount;
      processed.fluid = fluid;

      if (probability !== undefined) {
        processed.probability = probability;
      }

      recipe.fluid_outputs.push(processed);
    };

    if (Array.isArray(outputs[0])) {
      if (outputs.length > maxOutputs) {
        console.error(`Too many fluid outputs. Max is ${maxOutputs}.`);
        console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        return;
      }
      outputs.forEach(processSingleOutput);
    } else {
      processSingleOutput(outputs);
    }
  };

  return {
    /**
     * Creates an assembler recipe
     * @param {MIFluid[]|MIFluid} fluidInputs
     * @param {MIItem[]|MIItem} itemInputs
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    assembler(fluidInputs, itemInputs, itemOutputs, eu, duration) {
      let recipe = {
        type: "modern_industrialization:assembler",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInputs, recipe, 2);
      processItemInputs(itemInputs, recipe, 9);
      processItemOutputs(itemOutputs, recipe, 3);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/assembler/${makeRecipeId(recipe)}`
        );
    },

    /**
     * Creates an electrolyzer recipe
     * @param {MIFluid} fluidInput
     * @param {MIItem} itemInput
     * @param {MIFluid[]|MIFluid} fluidOutputs
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    electrolyzer(
      fluidInput,
      itemInput,
      fluidOutputs,
      itemOutputs,
      eu,
      duration
    ) {
      let recipe = {
        type: "modern_industrialization:electrolyzer",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        fluid_outputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInput, recipe, 1);
      processFluidOutputs(fluidOutputs, recipe, 4);
      processItemInputs(itemInput, recipe, 1);
      processItemOutputs(itemOutputs, recipe, 4);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/electrolyzer/${makeRecipeId(
            recipe
          )}`
        );
    },

    /**
     * Creates a packer recipe
     * @param {MIItem[]|MIItem} itemInputs
     * @param {MIItem} itemOutput
     * @param {number} eu
     * @param {number} duration
     */
    packer(itemInputs, itemOutput, eu, duration) {
      let recipe = {
        type: "modern_industrialization:packer",
        duration: duration,
        eu: eu,
        item_inputs: [],
        item_outputs: [],
      };

      processItemInputs(itemInputs, recipe, 3);
      processItemOutputs([itemOutput], recipe, 1);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/packer/${makeRecipeId(recipe)}`
        );
    },

    /**
     * Creates an unpacker recipe
     * @param {MIItem} itemInput
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    unpacker(itemInput, itemOutputs, eu, duration) {
      let recipe = {
        type: "modern_industrialization:unpacker",
        duration: duration,
        eu: eu,
        item_inputs: [],
        item_outputs: [],
      };

      processItemInputs([itemInput], recipe, 1);
      processItemOutputs(itemOutputs, recipe, 2);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/unpacker/${makeRecipeId(recipe)}`
        );
    },

    /**
     * Creates a mixer recipe
     * @param {MIFluid[]|MIFluid} fluidInputs
     * @param {MIItem[]|MIItem} itemInputs
     * @param {MIFluid[]|MIFluid} fluidOutputs
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    mixer(fluidInputs, itemInputs, fluidOutputs, itemOutputs, eu, duration) {
      let recipe = {
        type: "modern_industrialization:mixer",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        fluid_outputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInputs, recipe, 2);
      processFluidOutputs(fluidOutputs, recipe, 2);
      processItemInputs(itemInputs, recipe, 4);
      processItemOutputs(itemOutputs, recipe, 2);

      event
        .custom(recipe)
        .id(`craftoria:modern_industrialization/mixer/${makeRecipeId(recipe)}`);
    },

    /**
     * Creates a chemical reactor recipe
     * @param {MIFluid[]|MIFluid} fluidInputs
     * @param {MIItem[]|MIItem} itemInputs
     * @param {MIFluid[]|MIFluid} fluidOutputs
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    chemicalReactor(
      fluidInputs,
      itemInputs,
      fluidOutputs,
      itemOutputs,
      eu,
      duration
    ) {
      let recipe = {
        type: "modern_industrialization:chemical_reactor",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        fluid_outputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInputs, recipe, 3);
      processFluidOutputs(fluidOutputs, recipe, 3);
      processItemInputs(itemInputs, recipe, 3);
      processItemOutputs(itemOutputs, recipe, 3);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/chemical_reactor/${makeRecipeId(
            recipe
          )}`
        );
    },

    /**
     * Creates a cutting machine recipe
     * @param {MIFluid} fluidInput
     * @param {MIItem} itemInput
     * @param {MIItem} itemOutput
     * @param {number} eu
     * @param {number} duration
     */
    cuttingMachine(fluidInput, itemInput, itemOutput, eu, duration) {
      let recipe = {
        type: "modern_industrialization:cutting_machine",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInput, recipe, 1);
      processItemInputs(itemInput, recipe, 1);
      processItemOutputs([itemOutput], recipe, 1);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/cutting_machine/${makeRecipeId(
            recipe
          )}`
        );
    },

    /**
     * Creates a compressor recipe
     * @param {MIItem} itemInput
     * @param {MIItem} itemOutput
     * @param {number} eu
     * @param {number} duration
     */
    compressor(itemInput, itemOutput, eu, duration) {
      let recipe = {
        type: "modern_industrialization:compressor",
        duration: duration,
        eu: eu,
        item_inputs: [],
        item_outputs: [],
      };

      processItemInputs(itemInput, recipe, 1);
      processItemOutputs([itemOutput], recipe, 1);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/compressor/${makeRecipeId(
            recipe
          )}`
        );
    },

    /**
     * Creates a macerator recipe
     * @param {MIItem} itemInput
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    macerator(itemInput, itemOutputs, eu, duration) {
      let recipe = {
        type: "modern_industrialization:macerator",
        duration: duration,
        eu: eu,
        item_inputs: [],
        item_outputs: [],
      };

      processItemInputs(itemInput, recipe, 1);
      processItemOutputs(itemOutputs, recipe, 4);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/macerator/${makeRecipeId(recipe)}`
        );
    },

    /**
     * Creates a centrifuge recipe
     * @param {MIFluid} fluidInput
     * @param {MIItem} itemInput
     * @param {MIFluid[]|MIFluid} fluidOutputs
     * @param {MIItem[]|MIItem} itemOutputs
     * @param {number} eu
     * @param {number} duration
     */
    centrifuge(fluidInput, itemInput, fluidOutputs, itemOutputs, eu, duration) {
      let recipe = {
        type: "modern_industrialization:centrifuge",
        duration: duration,
        eu: eu,
        fluid_inputs: [],
        item_inputs: [],
        fluid_outputs: [],
        item_outputs: [],
      };

      processFluidInputs(fluidInput, recipe, 1);
      processFluidOutputs(fluidOutputs, recipe, 4);
      processItemInputs(itemInput, recipe, 1);
      processItemOutputs(itemOutputs, recipe, 4);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/centrifuge/${makeRecipeId(
            recipe
          )}`
        );
    },

    /**
     * Creates a polarizer recipe
     * @param {MIItem[]|MIItem} itemInputs
     * @param {MIItem} itemOutput
     * @param {number} eu
     * @param {number} duration
     */
    polarizer(itemInputs, itemOutput, eu, duration) {
      let recipe = {
        type: "modern_industrialization:polarizer",
        duration: duration,
        eu: eu,
        item_inputs: [],
        item_outputs: [],
      };

      processItemInputs(itemInputs, recipe, 2);
      processItemOutputs([itemOutput], recipe, 1);

      event
        .custom(recipe)
        .id(
          `craftoria:modern_industrialization/polarizer/${makeRecipeId(recipe)}`
        );
    },
  };
}
