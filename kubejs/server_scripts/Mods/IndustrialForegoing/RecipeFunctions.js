// priority: 900

/**
 * @param {string} name
 * @param {string} type
 * @returns {string}
 */
let foregoingGenRecipeID = (name, type) => {
  let newName = name;
  let amount = 1;

  if (name.includes('x ')) {
    amount = parseInt(name.split('x ')[0]);
    newName = name.split('x ')[1];
  }

  if (Item.exists(name)) newName = Item.of(name).registryId.path;
  else if (Fluid.exists(name)) newName = Fluid.of(name).registryId.path;
  else {
    if (name.includes('x ')) newName = name.split('x ')[1];
    if (newName.includes('[')) newName = newName.split('[')[0];
  }

  return `craftoria:industrial_foregoing/${type}/${amount}_${newName}`;
};

/**
 *
 * @param {$RecipesKubeEvent_} event Event object.
 * @param {$Fluid_} output Fluid output.
 * @param {Special.BlockTag[] | Special.Block[]} blockInput Block input. Can be a block tag or a block. Can be an array.
 * @param {Special.Block} blockOutput Block output.
 * @param {double} breakChance Chance of the block breaking. Optional. Default is 0.
 */

let foregoingFluidExtraction = (event, output, blockInput, blockOutput, breakChance) => {
  let recipe = {
    type: 'industrialforegoing:fluid_extractor',
    breakChance: breakChance || 0,
    defaultRecipe: false,
    input: Ingredient.of(blockInput).toJson(),
    output: Fluid.of(output).toJson(),
    result: {
      Name: blockOutput,
    },
  };

  event.custom(recipe); //.id(foregoingGenRecipeID(output, 'fluid_extractor'));
};

/**
 *
 * @param {$RecipesKubeEvent_} event
 * @param {$Item_} output
 * @param {$Ingredient_[]} input
 * @param {number} processingTime
 * @param {$FluidIngredient_} fluidInput
 * @param {$Fluid_} fluidOutput
 */

let foregoingDissolution = (event, output, input, processingTime, fluidInput, fluidOutput) => {
  let recipe = {
    type: 'industrialforegoing:dissolution_chamber',
    input: input.map((i) => Ingredient.of(i).toJson()),
    output: Item.of(output).toJson(),
    processingTime: processingTime || 100,
  };

  if (fluidOutput) recipe.outputFluid = Fluid.of(fluidOutput).toJson();

  if (fluidInput) {
    if (fluidInput.includes('#')) {
      recipe.inputFluid = {
        amount: parseInt(fluidInput.split('x ')[0]),
        tag: fluidInput.split('#')[1],
      };
    } else recipe.inputFluid = Fluid.of(fluidInput).toJson();
  }

  console.info(recipe);
  event.custom(recipe); //.id(foregoingGenRecipeID(output, 'dissolution_chamber'));
};

/**
 * @description Creates a laser drill ore recipe for Industrial Foregoing. VERY W.I.P. DO NOT USE.
 * @param {$RecipesKubeEvent_} event
 * @param {Special.Item} output
 * @param {Special.Item} catalyst
 * @param {$List_<$LaserDrillRarity>} rarity
 */

let foregoingOreLaser = (event, output, catalyst, rarity) => {
  let recipe = {
    type: 'industrialforegoing:laser_drill_ore',
    catalyst: Item.of(catalyst).toJson(),
    output: Item.of(output).toJson(),
    rarity: [],
  };

  if (rarity) {
    if (Array.isArray(rarity)) {
      rarity.forEach((r) => {
        recipe.rarity.push(r);
      });
    } else recipe.rarity.push(rarity);
  } else {
    recipe.rarity.push(
      {
        biome_filter: {
          blacklist: [],
          whitelist: [],
        },
        depth_max: 132,
        depth_min: 5,
        dimension_filter: {
          blacklist: ['minecraft:the_end'],
          whitelist: [],
        },
        weight: 10,
      },
      {
        biome_filter: {
          blacklist: [],
          whitelist: [],
        },
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

  event.custom(recipe).id(foregoingGenRecipeID(output, 'ore_laser_drill'));
};
