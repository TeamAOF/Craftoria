let BUDDING_INCUBATOR;

MIMachineEvents.registerRecipeTypes(event => {
  BUDDING_INCUBATOR = event.register('budding_incubator').withFluidInputs().withItemOutputs();
});

MIMachineEvents.registerMachines(event => {
  const noHatch = event.noHatch();
  const buddingIncubatorhatch = event.hatchOf('fluid_input', 'item_output', 'energy_input');
  const accelerator = event.memberOfBlock('ae2:growth_accelerator');
  const glassSlab = event.memberOfBlock('glassential:glass_slab');
  const brick = event.memberOfBlock('ae2:sky_stone_brick');

  const buddingIncubatorShape = event
    .layeredShape('sky_stone_brick_casing', [
      ['HHH', 'BAB', 'GGG'],
      ['HHH', 'A A', 'GGG'],
      ['H#H', 'BAB', 'GGG'],
    ])
    .key('H', brick, buddingIncubatorhatch)
    .key('B', brick, noHatch)
    .key('A', accelerator, noHatch)
    .key('G', glassSlab, noHatch)
    .build();

  event.simpleElectricCraftingMultiBlock(
    'Budding Incubator',
    'budding_incubator',
    BUDDING_INCUBATOR,
    buddingIncubatorShape,
    event.progressBar(77, 33, 'arrow'),
    itemInputs => {},
    itemOutputs => itemOutputs.addSlots(102, 35, 1, 4),
    fluidInputs => fluidInputs.addSlots(56, 35, 1, 2),
    fluidOutputs => {},
    'sky_stone_brick_casing',
    'budding_incubator',
    true,
    false,
    false
  );
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
  const noHatch = event.noHatch();
  const buddingIncubatorhatch = event.hatchOf('fluid_input', 'item_output', 'energy_input');
  const accelerator = event.memberOfBlock('ae2:growth_accelerator');
  const glassSlab = event.memberOfBlock('glassential:glass_slab');
  const brick = event.memberOfBlock('ae2:sky_stone_brick');

  const buddingIncubatorShape = event
    .layeredShape('modern_industrialization:sky_stone_brick_casing', [
      ['HHH', 'BAB', 'GGG'],
      ['HHH', 'A A', 'GGG'],
      ['H#H', 'BAB', 'GGG'],
    ])
    .key('H', brick, buddingIncubatorhatch)
    .key('B', brick, noHatch)
    .key('A', accelerator, noHatch)
    .key('G', glassSlab, noHatch)
    .build();

  event.electric(
    'Budding Incubator',
    'batch_budding_incubator',
    BUDDING_INCUBATOR,
    buddingIncubatorShape,
    workStations => workStations.add('modern_industrialization:budding_incubator'),
    'modern_industrialization:sky_stone_brick_casing',
    'budding_incubator',
    true,
    false,
    false,
    8,
    0.75
  );
});
