// priority: 900

//This file contains functions for making recipes for AE2 and its addons.

let ae2GenRecipeID = (name, type) => {
  name = name.split(":")[1];
  return `craftoria:ae2/${type}/${name}`;
};

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

  let recipeID = ae2GenRecipeID(iOutput[0], "assembler");

  event.custom(recipe).id(recipeID);
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Cutter recipe
 * @param {object} event The event object, usually `event`. Required.
 * @param {String} iInput The input item. Required.
 * @param {String} iOutput The output item. Required.
 */
let exCutter = (event, iInput, iOutput) => {
  let recipe = {
    type: "extendedae:circuit_cutter",
    input: {
      ingredient: {},
      amount: parseInt(iInput.split('x ')[0])
    },
    output: Item.of(iOutput).toJson()
  };

  iInput = iInput.split('x ')[1];
  if (iInput.includes("#")) recipe.input.ingredient.tag = iInput.replace("#", "");
  else recipe.input.ingredient.item = iInput;


  let recipeID = ae2GenRecipeID(iOutput.split('x ')[1], "cutter");

  event.custom(recipe).id(recipeID);
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

  let recipeID = ae2GenRecipeID(output, "fixer");

  event.custom(recipe).id(recipeID);
};

/**
 * @author WhitePhantom
 * @description AE2 Inscriber recipe
 * @param {object} event The event object, usually `event`. Required.
 * @param {String} iType The inscriber type. inscribe or press. Required.
 * @param {String} middle The middle item. Required.
 * @param {String} top The top item. Optional.
 * @param {String} bottom The bottom item. Optional.
 * @param {Array} output The output item, [item, amount]. Required.
 */
let ae2Inscriber = (event, iType, middle, top, bottom, output) => {
  let recipe = {
    type: `ae2:inscriber`,
    mode: iType,
    ingredients: {
      middle: {}
    },
    result: {}
  };

  if (middle.includes("#")) {
    recipe.ingredients.middle = { tag: middle.replace("#", "") };
  } else {
    recipe.ingredients.middle = { item: middle };
  }

  if (top) {
    if (top.includes("#")) {
      recipe.ingredients.top = { tag: top.replace("#", "") };
    } else {
      recipe.ingredients.top = { item: top };
    }
  }

  if (bottom) {
    if (bottom.includes("#")) {
      recipe.ingredients.bottom = { tag: bottom.replace("#", "") };
    } else {
      recipe.ingredients.bottom = { item: bottom };
    }
  }

  recipe.result = {
    id: output[0],
    count: output[1]
  };

  let recipeID = ae2GenRecipeID(output[0], iType);

  event.custom(recipe).id(recipeID);
};