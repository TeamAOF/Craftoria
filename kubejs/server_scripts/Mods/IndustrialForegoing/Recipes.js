ServerEvents.recipes((e) => {
  foregoingFluidExtraction(e, '5x minecraft:lava', 'minecraft:magma_block', 'minecraft:netherrack', 0.05);
  foregoingFluidExtraction(e, '5x integrateddynamics:menril_resin', 'integrateddynamics:menril_log', 'integrateddynamics:menril_log_stripped', 0.01);
  foregoingFluidExtraction(e, '2x integrateddynamics:menril_resin', 'integrateddynamics:menril_log_stripped', 'minecraft:air', 0.01);
  foregoingFluidExtraction(e, '1x justdirethings:xp_fluid_source', 'minecraft:sculk', 'minecraft:air', 0.1);
  foregoingFluidExtraction(e, '1x pneumaticcraft:yeast_culture', '#c:mushroom_blocks', 'minecraft:air', 0.01);
});
