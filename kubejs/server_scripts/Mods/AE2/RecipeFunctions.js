// priority: 900

//This file contains functions for making recipes for AE2 and its addons.

/**
 * @author WhitePhantom
 * @description ExtendedAE Crystal Assembler recipe
 * @param {object} event The event object, usually `event`. Required.
 * @param {Array} iFluid The input fluid. [fluid, amount]. Optional.
 * @param {Array} iInput The input items. [[item, amount], [item, amount]..] or [item, amount]. Required. Max 9 items.
 * @param {Array} iOutput The output item. [item, amount]. Required.
 */
let exAssembler = (event, iFluid, iInput, iOutput) => {
  let recipe = {
    type: "extendedae:crystal_assembler",
    input_items: [],
    output: {}
  };

  if (iFluid) {
    recipe.input_fluid = {
      ingredient: { fluid: iFluid[0] },
      amount: iFluid[1]
    };
  }

  if (iInput[0].length) {
    iInput.forEach(input => {
      if (input[0].includes("#")) {
        input[0] = input[0].replace("#", "");
        recipe.input_items.push({
          ingredient: { tag: input[0] },
          amount: input[1]
        });
      } else {
        recipe.input_items.push({
          ingredient: { item: input[0] },
          amount: input[1]
        });
      }
    });
  } else {
    if (iInput[0].includes("#")) {
      iInput[0] = iInput[0].replace("#", "");
      recipe.input_items.push({
        ingredient: { tag: iInput[0] },
        amount: iInput[1]
      });
    } else {
      recipe.input_items.push({
        ingredient: { item: iInput[0] },
        amount: iInput[1]
      });
    }
  }

  recipe.output = {
    id: iOutput[0],
    count: iOutput[1]
  };

  event.custom(recipe);
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Cutter recipe
 * @param {object} event The event object, usually `event`. Required.
 * @param {Array} iInput The input item. [item, amount]. Required.
 * @param {Array} iOutput The output item. [item, amount]. Required.
 */
let exCutter = (event, iInput, iOutput) => {
  let recipe = {
    type: "extendedae:circuit_cutter",
    input: {
      ingredient: {},
      amount: iInput[1]
    },
    output: {
      id: iOutput[0],
      count: iOutput[1]
    }
  };

  if (iInput[0].includes("#")) {
    recipe.input.ingredient.tag = iInput[0].replace("#", "");
  } else {
    recipe.input.ingredient.item = iInput[0];
  }

  event.custom(recipe);
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Fixer recipe
 * @param {object} event The event object, usually `event`. Required.
 * @param {String} fuel The fuel item. Required.
 * @param {String} input The input block. Required.
 * @param {String} output The output block. Required.
 * @param {Number} chance Not sure what this does.
 */
let exFixer = (event, fuel, input, output, chance) => {
  let recipe = {
    type: "extendedae:crytal_fixer",
    fuel: {},
    input: { id: input },
    output: { id: output },
    chance: chance || 8000
  };

  if (fuel.includes("#")) {
    recipe.fuel.ingredient.tag = fuel.replace("#", "");
  } else {
    recipe.fuel.ingredient.item = fuel;
  }

  event.custom(recipe);
};