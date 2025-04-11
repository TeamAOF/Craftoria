ServerEvents.recipes((e) => {
  const foregoing = IndustrialForegoingHelper(e);

  foregoing.fluidExtraction('5x minecraft:lava', 'minecraft:magma_block', 'minecraft:netherrack', 0.05);
  foregoing.fluidExtraction('5x integrateddynamics:menril_resin', 'integrateddynamics:menril_log', 'integrateddynamics:menril_log_stripped', 0.01);
  foregoing.fluidExtraction('2x integrateddynamics:menril_resin', 'integrateddynamics:menril_log_stripped', 'minecraft:air', 0.01);
  foregoing.fluidExtraction('1x justdirethings:xp_fluid_source', 'minecraft:sculk', 'minecraft:air', 0.1);
  foregoing.fluidExtraction('1x pneumaticcraft:yeast_culture', '#c:mushroom_blocks', 'minecraft:air', 0.01);

  foregoing.oreLaserDrilling(
    'minecraft:ancient_debris',
    'industrialforegoing:brown_laser_lens',
    [
      {
        biome_filter: {
          blacklist: [],
          whitelist: [],
        },
        depth_max: 20,
        depth_min: 1,
        dimension_filter: {
          blacklist: [],
          whitelist: ['minecraft:the_nether', 'jamd:nether'],
        },
        weight: 1,
      },
    ],
    'industrialforegoing:laser_drill_ore/ancient_debris'
  );
});
