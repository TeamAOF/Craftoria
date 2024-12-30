ServerEvents.recipes((e) => {
  let FluidExtraction = (output, input, result, breakChance) => {
    let recipe = {
      type: 'industrialforegoing:fluid_extractor',
      breakChance: breakChance,
      defaultRecipe: false,
      input: Ingredient.of(input).toJson(),
      output: Fluid.of(output).toJson(),
      result: {
        Name: result,
      },
    };
    e.custom(recipe).id(`craftoria:fluid_extractor/${output.split(':')[1]}_from_${input.split(':')[1]}`);
  };

  FluidExtraction('5x minecraft:lava', 'minecraft:magma_block', 'minecraft:netherrack', 0.05);
  FluidExtraction('5x integrateddynamics:menril_resin', 'integrateddynamics:menril_log', 'integrateddynamics:menril_log_stripped', 0.01);
  FluidExtraction('2x integrateddynamics:menril_resin', 'integrateddynamics:menril_log_stripped', 'minecraft:air', 0.01);
  FluidExtraction('1x justdirethings:xp_fluid_source', 'minecraft:sculk', 'minecraft:air', 0.1);
  FluidExtraction('1x pneumaticcraft:yeast_culture', '#c:mushroom_blocks', 'minecraft:air', 0.01);
});
