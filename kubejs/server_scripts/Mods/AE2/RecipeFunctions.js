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
 * @param {$Item_} iOutput The output item. ex '4x minecraft:chest'. Required.
 * @param {$Ingredient_[]} iInput The input items. ['2x minecraft:cobblestone', '3x minecraft:dirt']. Required. Max 9 items.
 * @param {$Fluid_} iFluid The input fluid. ex '1000x minecraft:water'. Optional.
 */
let exAssembler = (event, iOutput, iInput, iFluid) => {
  let recipe = {
    type: 'extendedae:crystal_assembler',
    input_items: iInput.map((input) => {
      let item = input.includes('x ') ? input.split('x ')[1] : input;
      let amount = input.includes('x ') ? parseInt(input.split('x ')[0]) : 1;
      return { amount: amount, ingredient: Ingredient.of(item).toJson() };
    }),
    output: Item.of(iOutput).toJson(),
  };

  if (iFluid) {
    let fluid = iFluid.includes('x ') ? iFluid.split('x ')[1] : iFluid;
    let amount = iFluid.includes('x ') ? parseInt(iFluid.split('x ')[0]) : 1000;
    recipe.input_fluid = { amount: amount, ingredient: { fluid: fluid } };
  }

  event.custom(recipe).id(ae2GenRecipeID(iOutput, 'assembler'));
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Cutter recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Item_} iOutput The output item. Required.
 * @param {$Ingredient_} iInput The input item. Required.
 */
let exCutter = (event, iOutput, iInput) => {
  let recipe = {
    type: 'extendedae:circuit_cutter',
    input: {
      ingredient: Ingredient.of(iInput.includes('x ') ? iInput.split('x ')[1] : iInput).toJson(),
      amount: iInput.includes('x ') ? parseInt(iInput.split('x ')[0]) : 1,
    },
    output: Item.of(iOutput).toJson(),
  };

  event.custom(recipe).id(ae2GenRecipeID(iOutput, 'cutter'));
};

/**
 * @author WhitePhantom
 * @description ExtendedAE Fixer recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Item_} output The output block. Required.
 * @param {$Item_} input The input block. Required.
 * @param {$Item_} fuel The fuel item. Required.
 * @param {integer} chance Chance of affecting the block. Optional. Default is 8000. 10000 is 100%.
 */
let exFixer = (event, output, input, fuel, chance) => {
  let recipe = {
    type: 'extendedae:crytal_fixer',
    fuel: { ingredient: Ingredient.of(fuel).toJson() },
    input: { id: input },
    output: { id: output },
    chance: chance || 8000,
  };

  event.custom(recipe).id(ae2GenRecipeID(output, 'fixer'));
};

/**
 * @author WhitePhantom
 * @description AE2 Inscriber recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$InscriberProcessType_} iType The inscriber type. inscribe or press. Required.
 * @param {$Item_} output The output item. Required.
 * @param {$Ingredient_} middle The middle item. Required.
 * @param {$Ingredient_} top The top item. Optional.
 * @param {$Ingredient_} bottom The bottom item. Optional.
 */
let ae2Inscriber = (event, iType, output, middle, top, bottom) => {
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
