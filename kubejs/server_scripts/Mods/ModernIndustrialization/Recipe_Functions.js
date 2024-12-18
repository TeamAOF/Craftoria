// priority: 900

/**
 * This file contains functions for creating Modern Industrialization recipes.
 * They can be used in any script file, as long as it's loaded after this one.
 */

// Helper functions
/**
 * @author WhitePhantom
 * @description Helper function to process item inputs for Modern Industrialization recipes
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount, probability(optional)], [item, amount], ...], can be null
 * @param {Object} recipe The recipe object to add the item inputs to
 * @param {Number} maxInputs The maximum number of inputs allowed
 */
let miProcessItemInputs = (itemInputs, recipe, maxInputs) => {
  if (itemInputs) {
    if (Array.isArray(itemInputs)) {
      if (!recipe.item_inputs) {
        recipe.item_inputs = [];
      }

      if (Array.isArray(itemInputs[0])) {
        // Handle multiple item inputs
        if (itemInputs.length > maxInputs) {
          console.error(`Invalid Recipe: Too many item inputs. Max is ${maxInputs}.`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          return;
        }

        itemInputs.forEach((itemInput) => {
          if (Array.isArray(itemInput) && (itemInput.length === 2 || itemInput.length === 3)) {
            let input = {};

            if (itemInput[0].includes('#')) {
              input.tag = itemInput[0].slice(1);
            } else {
              input.item = itemInput[0];
            }

            input.amount = itemInput[1];

            if (itemInput.length === 3) {
              input.probability = itemInput[2];
            }

            recipe.item_inputs.push(input);
          } else {
            console.error(`Invalid item input format: ${itemInput}`);
            console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          }
        });
      } else {
        // Handle single item input
        if (itemInputs.length === 2 || itemInputs.length === 3) {
          let input = {};

          if (itemInputs[0].includes('#')) {
            input.tag = itemInputs[0].slice(1);
          } else {
            input.item = itemInputs[0];
          }

          input.amount = itemInputs[1];

          if (itemInputs.length === 3) {
            input.probability = itemInputs[2];
          }

          recipe.item_inputs.push(input);
        } else {
          console.error(`Invalid item input format: ${itemInputs}`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        }
      }
    } else {
      console.error(`Invalid item input format: ${itemInputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
    }
  }
};

/**
 * @author WhitePhantom
 * @description Helper function to process item outputs for Modern Industrialization recipes
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount, probability(optional)], [item, amount], ...], can be null
 * @param {Object} recipe The recipe object to add the item outputs to
 * @param {Number} maxOutputs The maximum number of outputs allowed
 */
let miProcessItemOutputs = (itemOutputs, recipe, maxOutputs) => {
  if (itemOutputs) {
    if (Array.isArray(itemOutputs)) {
      if (!recipe.item_outputs) {
        recipe.item_outputs = [];
      }

      if (Array.isArray(itemOutputs[0])) {
        // Handle multiple item inputs
        if (itemOutputs.length > maxOutputs) {
          console.error(`Invalid Recipe: Too many item inputs. Max is ${maxOutputs}.`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          return;
        }

        itemOutputs.forEach((itemOutput) => {
          if (Array.isArray(itemOutput) && (itemOutput.length === 2 || itemOutput.length === 3)) {
            let input = {};

            input.item = itemOutput[0];
            input.amount = itemOutput[1];

            if (itemOutput.length === 3) {
              input.probability = itemOutput[2];
            }

            recipe.item_outputs.push(input);
          } else {
            console.error(`Invalid item input format: ${itemOutput}`);
            console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          }
        });
      } else {
        // Handle single item input
        if (itemOutputs.length === 2 || itemOutputs.length === 3) {
          let input = {};

          input.item = itemOutputs[0];
          input.amount = itemOutputs[1];

          if (itemOutputs.length === 3) {
            input.probability = itemOutputs[2];
          }

          recipe.item_outputs.push(input);
        } else {
          console.error(`Invalid item output format: ${itemOutputs}`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        }
      }
    } else {
      console.error(`Invalid item output format: ${itemOutputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
    }
  }
};

/**
 * @author WhitePhantom
 * @description Helper function to process fluid inputs for Modern Industrialization recipes
 * @param {Array} fluidInputs An array of fluid inputs in the format [[fluid, amount, probability(optional)], [fluid, amount], ...], can be null
 * @param {Object} recipe The recipe object to add the fluid inputs to
 * @param {Number} maxInputs The maximum number of inputs allowed
 */
let miProcessFluidInputs = (fluidInputs, recipe, maxInputs) => {
  if (fluidInputs) {
    if (Array.isArray(fluidInputs)) {
      if (!recipe.fluid_inputs) {
        recipe.fluid_inputs = [];
      }

      // Determine if fluidInputs contains multiple inputs or a single input
      if (Array.isArray(fluidInputs[0])) {
        // Handle multiple fluid inputs
        if (fluidInputs.length > maxInputs) {
          console.error(`Invalid Recipe: Too many fluid inputs. Max is ${maxInputs}.`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          return;
        }

        fluidInputs.forEach((fluidInput) => {
          if (Array.isArray(fluidInput) && (fluidInput.length === 2 || fluidInput.length === 3)) {
            let input = {};

            if (fluidInput[0].includes('#')) {
              input.tag = fluidInput[0];
            } else {
              input.fluid = fluidInput[0];
            }

            input.amount = fluidInput[1];

            if (fluidInput.length === 3) {
              input.probability = fluidInput[2];
            }

            recipe.fluid_inputs.push(input);
          } else {
            console.error(`Invalid fluid input format: ${fluidInput}`);
            console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          }
        });
      } else {
        // Handle single fluid input
        if (fluidInputs.length === 2 || fluidInputs.length === 3) {
          let input = {};

          if (fluidInputs[0].includes('c:')) {
            input.tag = fluidInputs[0];
          } else {
            input.fluid = fluidInputs[0];
          }

          input.amount = fluidInputs[1];

          if (fluidInputs.length === 3) {
            input.probability = fluidInputs[2];
          }

          recipe.fluid_inputs.push(input);
        } else {
          console.error(`Invalid fluid input format: ${fluidInputs}`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        }
      }
    } else {
      console.error(`Invalid fluid input format: ${fluidInputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
    }
  }
};

/**
 * @author WhitePhantom
 * @description Helper function to process fluid outputs for Modern Industrialization recipes
 * @param {Array} fluidOutputs An array of fluid outputs in the format [[fluid, amount, probability(optional)], [fluid, amount], ...], can be null
 * @param {Object} recipe The recipe object to add the fluid outputs to
 * @param {Number} maxOutputs The maximum number of outputs allowed
 */
let miProcessFluidOutputs = (fluidOutputs, recipe, maxOutputs) => {
  if (fluidOutputs) {
    if (Array.isArray(fluidOutputs)) {
      if (!recipe.fluid_outputs) {
        recipe.fluid_outputs = [];
      }

      // Determine if fluidOutputs contains multiple outputs or a single output
      if (Array.isArray(fluidOutputs[0])) {
        // Handle multiple fluid outputs
        if (fluidOutputs.length > maxOutputs) {
          console.error(`Invalid Recipe: Too many fluid outputs. Max is ${maxOutputs}.`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          return;
        }

        fluidOutputs.forEach((fluidOutput) => {
          if (Array.isArray(fluidOutput) && (fluidOutput.length === 2 || fluidOutput.length === 3)) {
            let output = {};

            output.fluid = fluidOutput[0];
            output.amount = fluidOutput[1];

            if (fluidOutput.length === 3) {
              output.probability = fluidOutput[2];
            }

            recipe.fluid_outputs.push(output);
          } else {
            console.error(`Invalid fluid output format: ${fluidOutput}`);
            console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
          }
        });
      } else {
        // Handle single fluid output
        if (fluidOutputs.length === 2 || fluidOutputs.length === 3) {
          let output = {};

          output.fluid = fluidOutputs[0];
          output.amount = fluidOutputs[1];

          if (fluidOutputs.length === 3) {
            output.probability = fluidOutputs[2];
          }

          recipe.fluid_outputs.push(output);
        } else {
          console.error(`Invalid fluid output format: ${fluidOutputs}`);
          console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
        }
      }
    } else {
      console.error(`Invalid fluid output format: ${fluidOutputs}`);
      console.error(`Erroring recipe: ${JSON.stringify(recipe)}`);
    }
  }
};

/**
 * @author WhitePhantom
 * @description Generates a unique recipe ID based on the output, output amount, and input(s).
 * @param {Object} recipe The recipe object where inputs and outputs are pulled from.
 * @returns {String} The generated recipe ID.
 */
function miGenRecipeID(recipe) {
  let output = recipe.item_outputs[0];
  let outputString = output.item.split(':')[1] + '_' + output.amount + 'x';

  let inputString = 'with_';
  if (recipe.fluid_inputs !== undefined && recipe.fluid_inputs.length > 0) {
    recipe.fluid_inputs.forEach((input, index) => {
      if (input.fluid !== undefined) inputString += input.fluid.split(':')[1];
      else inputString += input.tag.split(':')[1];
      if (index < recipe.fluid_inputs.length - 1) {
        inputString += '_';
      }
    });
  } else {
    recipe.item_inputs.forEach((input, index) => {
      if (input.item !== undefined) inputString += input.item.split(':')[1];
      else inputString += input.tag.split(':')[1];

      if (index < recipe.item_inputs.length - 1) {
        inputString += '_';
      }
    });
  }

  return outputString + '_' + inputString;
}

// Recipe functions
/**
 * @author WhitePhantom
 * @description Modern Industrialization Assembler Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInputs An array of fluid inputs in the format [[fluid, amount], [fluid, amount], ...], can be null, max of 2 inputs.
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount], [item, amount], ...], can be null, max of 9 inputs.
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount], [item, amount], ...], max of 3 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miAssembler = (event, fluidInputs, itemInputs, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:assembler',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInputs, recipe, 2);

  miProcessItemInputs(itemInputs, recipe, 9);
  miProcessItemOutputs(itemOutputs, recipe, 3);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/assembler/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Electrolyzer Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInput A fluid input in the format [fluid, amount], can be null
 * @param {Array} itemInput An item input in the format [item, amount], can be null
 * @param {Array} fluidOutputs An array of fluid outputs in the format [[fluid, amount], [fluid, amount], ...], can be null
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount], [item, amount], ...], can be null
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miElectrolyzer = (event, fluidInput, itemInput, fluidOutputs, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:electrolyzer',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    fluid_outputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInput, recipe, 1);
  miProcessFluidOutputs(fluidOutputs, recipe, 4);

  miProcessItemInputs(itemInput, recipe, 1);
  miProcessItemOutputs(itemOutputs, recipe, 4);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/electrolyzer/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Packer Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount], [item, amount], ...], max of 3 inputs.
 * @param {Array} itemOutput An item output in the format [item, amount]
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miPacker = (event, itemInputs, itemOutput, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:packer',
    duration: duration,
    eu: eu,
    item_inputs: [],
    item_outputs: [],
  };

  miProcessItemInputs(itemInputs, recipe, 3);
  miProcessItemOutputs([itemOutput], recipe, 1);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/packer/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Unpacker Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} itemInput An item input in the format [item, amount]
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount], [item, amount], ...], max of 2 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miUnpacker = (event, itemInput, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:unpacker',
    duration: duration,
    eu: eu,
    item_inputs: [],
    item_outputs: [],
  };

  miProcessItemInputs([itemInput], recipe, 1);
  miProcessItemOutputs(itemOutputs, recipe, 2);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/unpacker/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Mixer Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInputs An array of fluid inputs in the format [[fluid, amount], [fluid, amount], ...], can be null, max of 2 inputs.
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount], [item, amount], ...], can be null, max of 4 inputs.
 * @param {Array} fluidOutputs An array of fluid outputs in the format [[fluid, amount], [fluid, amount], ...], can be null, max of 2 outputs.
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount], [item, amount], ...], can be null, max of 2 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miMixer = (event, fluidInputs, itemInputs, fluidOutputs, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:mixer',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    fluid_outputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInputs, recipe, 2);
  miProcessFluidOutputs(fluidOutputs, recipe, 2);

  miProcessItemInputs(itemInputs, recipe, 4);
  miProcessItemOutputs(itemOutputs, recipe, 2);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/mixer/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Chemical Reactor Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInputs An array of fluid inputs in the format [[fluid, amount], [fluid, amount], ...], can be null, max of 3 inputs.
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount], [item, amount], ...], can be null, max of 3 inputs.
 * @param {Array} fluidOutputs An array of fluid outputs in the format [[fluid, amount], [fluid, amount], ...], can be null, max of 3 outputs.
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount], [item, amount], ...], can be null, max of 3 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miChemicalReactor = (event, fluidInputs, itemInputs, fluidOutputs, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:chemical_reactor',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    fluid_outputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInputs, recipe, 3);
  miProcessFluidOutputs(fluidOutputs, recipe, 3);

  miProcessItemInputs(itemInputs, recipe, 3);
  miProcessItemOutputs(itemOutputs, recipe, 3);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/chemical_reactor/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Cutting Machine Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInput A fluid input in the format [fluid, amount, probability(optional)]
 * @param {Array} itemInput An item input in the format [item, amount, probability(optional)]
 * @param {Array} itemOutput An array of item outputs in the format [item, amount, probability(optional)], max of 1 output.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miCuttingMachine = (event, fluidInput, itemInput, itemOutput, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:cutting_machine',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInput, recipe, 1);
  miProcessItemInputs(itemInput, recipe, 1);
  miProcessItemOutputs(itemOutput, recipe, 1);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/cutting_machine/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Compressor Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} itemInput An item input in the format [item, amount, probability(optional)]
 * @param {Array} itemOutput An item output in the format [item, amount, probability(optional)]
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miCompressor = (event, itemInput, itemOutput, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:compressor',
    duration: duration,
    eu: eu,
    item_inputs: [],
    item_outputs: [],
  };

  miProcessItemInputs(itemInput, recipe, 1);
  miProcessItemOutputs(itemOutput, recipe, 1);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/compressor/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Macerator Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} itemInput An item input in the format [item, amount, probability(optional)]
 * @param {Array} itemOutputs An item output in the format [[item, amount, probability(optional)], [item, amount, probability(optional)], ...], max of 4 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miMacerator = (event, itemInput, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:macerator',
    duration: duration,
    eu: eu,
    item_inputs: [],
    item_outputs: [],
  };

  miProcessItemInputs(itemInput, recipe, 1);
  miProcessItemOutputs(itemOutputs, recipe, 4);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/macerator/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Centrifuge Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} fluidInput A fluid input in the format [fluid, amount, probability(optional)]
 * @param {Array} itemInput An item input in the format [item, amount, probability(optional)]
 * @param {Array} fluidOutputs An array of fluid outputs in the format [[fluid, amount, probability(optional)], [fluid, amount, probability(optional)], ...], max of 4 outputs.
 * @param {Array} itemOutputs An array of item outputs in the format [[item, amount, probability(optional)], [item, amount, probability(optional)], ...], max of 4 outputs.
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miCentrifuge = (event, fluidInput, itemInput, fluidOutputs, itemOutputs, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:centrifuge',
    duration: duration,
    eu: eu,
    fluid_inputs: [],
    item_inputs: [],
    fluid_outputs: [],
    item_outputs: [],
  };

  miProcessFluidInputs(fluidInput, recipe, 1);
  miProcessFluidOutputs(fluidOutputs, recipe, 4);

  miProcessItemInputs(itemInput, recipe, 1);
  miProcessItemOutputs(itemOutputs, recipe, 4);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/centrifuge/${recipeID}`);
};

/**
 * @author WhitePhantom
 * @description Modern Industrialization Polarizer Recipe
 * @param {object} event The event object, usually 'event'. Required.
 * @param {Array} itemInputs An array of item inputs in the format [[item, amount, probability(optional)], [item, amount, probability(optional)], ...], max of 2 inputs.
 * @param {Array} itemOutput An item output in the format [item, amount, probability(optional)]
 * @param {int} eu EU/t consumed by the machine
 * @param {int} duration Duration of the recipe in ticks
 */
let miPolarizer = (event, itemInputs, itemOutput, eu, duration) => {
  let recipe = {
    type: 'modern_industrialization:polarizer',
    duration: duration,
    eu: eu,
    item_inputs: [],
    item_outputs: [],
  };

  miProcessItemInputs(itemInputs, recipe, 2);
  miProcessItemOutputs(itemOutput, recipe, 1);

  let recipeID = miGenRecipeID(recipe);

  event.custom(recipe).id(`craftoria:modern_industrialization/polarizer/${recipeID}`);
};
