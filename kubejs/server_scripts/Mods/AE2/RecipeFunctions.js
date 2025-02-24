// priority: 900

//This file contains functions for making recipes for AE2 and its addons.

let ae2GenRecipeID = (name, type) => {
  if (name.includes('x ')) name = name.split('x ')[1];
  if (name.includes(':')) name = name.split(':')[1];
  return `craftoria:ae2/${type}/${name}`;
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Crystal Assembler recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Fluid_} iFluid The input fluid. ex '1000x minecraft:water'. Optional.
 * @param {$Ingredient_[]} iInput The input items. ['2x minecraft:cobblestone', '3x minecraft:dirt']. Required. Max 9 items.
 * @param {$Item_} iOutput The output item. ex '4x minecraft:chest'. Required.
 */
let exAssembler = (event, iFluid, iInput, iOutput) => {
  let recipe = {
    type: 'extendedae:crystal_assembler',
    input_items: [],
    output: Item.of(iOutput).toJson(),
  };

  if (iFluid) {
    let fluid = iFluid.includes('x ') ? iFluid.split('x ')[1] : iFluid;
    let amount = iFluid.includes('x ') ? parseInt(iFluid.split('x ')[0]) : 1000;
    recipe.input_fluid = { amount: amount, ingredient: { fluid: fluid } };
  }

  if (Array.isArray(iInput)) {
    if (iInput.length > 9) {
      console.error(`exAssembler: Too many inputs. Max 9 inputs.`);
      console.error(`Output: ${iOutput}, Inputs: ${iInput}`);
      return;
    }

    iInput.forEach((input) => {
      let item = input.includes('x ') ? input.split('x ')[1] : input;
      let amount = input.includes('x ') ? parseInt(input.split('x ')[0]) : 1;
      if (item.includes('#')) recipe.input_items.push({ amount: amount, ingredient: { tag: item.replace('#', '') } });
      else recipe.input_items.push({ amount: amount, ingredient: { item: item } });
    });
  } else {
    let item = iInput.includes('x ') ? iInput.split('x ')[1] : iInput;
    let amount = iInput.includes('x ') ? parseInt(iInput.split('x ')[0]) : 1;
    if (item.includes('#')) recipe.input_items.push({ amount: amount, ingredient: { tag: item.replace('#', '') } });
    else recipe.input_items.push({ amount: amount, ingredient: { item: item } });
  }

  event.custom(recipe).id(ae2GenRecipeID(iOutput, 'assembler'));
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Cutter recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Ingredient_} iInput The input item. Required.
 * @param {$Item_} iOutput The output item. Required.
 */
let exCutter = (event, iInput, iOutput) => {
  let recipe = {
    type: 'extendedae:circuit_cutter',
    input: {
      ingredient: {},
      amount: iInput.includes('x ') ? parseInt(iInput.split('x ')[0]) : 1,
    },
    output: Item.of(iOutput).toJson(),
  };

  if (iInput.includes('x ')) iInput = iInput.split('x ')[1];
  if (iInput.includes('#')) recipe.input.ingredient.tag = iInput.replace('#', '');
  else recipe.input.ingredient.item = iInput;

  event.custom(recipe).id(ae2GenRecipeID(iOutput, 'cutter'));
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Fixer recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Item_} fuel The fuel item. Required.
 * @param {$Item_} input The input block. Required.
 * @param {$Item_} output The output block. Required.
 * @param {integer} chance Chance of affecting the block. Optional. Default is 8000. 10000 is 100%.
 */
let exFixer = (event, fuel, input, output, chance) => {
  let recipe = {
    type: 'extendedae:crytal_fixer',
    fuel: {},
    input: { id: input },
    output: { id: output },
    chance: chance || 8000,
  };

  if (fuel.includes('#')) recipe.fuel.ingredient.tag = fuel.replace('#', '');
  else recipe.fuel.ingredient.item = fuel;

  event.custom(recipe).id(ae2GenRecipeID(output, 'fixer'));
};

/**
 * @author WhitePhantom
 * @description AE2 Inscriber recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$InscriberProcessType_} iType The inscriber type. inscribe or press. Required.
 * @param {$Ingredient_} middle The middle item. Required.
 * @param {$Ingredient_} top The top item. Optional.
 * @param {$Ingredient_} bottom The bottom item. Optional.
 * @param {$Item_} output The output item. Required.
 */
let ae2Inscriber = (event, iType, middle, top, bottom, output) => {
  let recipe = {
    type: `ae2:inscriber`,
    mode: iType,
    ingredients: {},
    result: Item.of(output).toJson(),
  };

  recipe.ingredients.middle = Ingredient.of(middle).toJson();
  if (top) recipe.ingredients.top = Ingredient.of(top).toJson();
  if (bottom) recipe.ingredients.bottom = Ingredient.of(bottom).toJson();

  event.custom(recipe).id(ae2GenRecipeID(output, iType));
};
