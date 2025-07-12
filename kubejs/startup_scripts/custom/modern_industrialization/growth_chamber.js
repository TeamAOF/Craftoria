let GROWTH_CHAMBER;
MIMachineEvents.registerRecipeTypes(event => {
  GROWTH_CHAMBER = event.register('growth_chamber').withFluidInputs().withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines(event => {
  const noHatch = event.noHatch();
  const multiblockHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');

  const modernIndustrializationSteelMachineCasing = event.memberOfBlock('modern_industrialization:steel_machine_casing');
  const minecraftGreenStainedGlass = event.memberOfBlock('minecraft:green_stained_glass');
  const minecraftGrassBlock = event.memberOfBlock('minecraft:grass_block');
  const minecraftGlowstone = event.memberOfBlock('minecraft:glowstone');

  const generatedShape = event.layeredShape('steel', [
    ['AAA', 'ABA', 'ABA', 'AAA'],
    ['ACA', 'B B', 'B B', 'ADA'],
    ['A#A', 'ABA', 'ABA', 'AAA']
  ])
    .key('A', modernIndustrializationSteelMachineCasing, multiblockHatch)
    .key('B', minecraftGreenStainedGlass, noHatch)
    .key('C', minecraftGrassBlock, noHatch)
    .key('D', minecraftGlowstone, noHatch)
    .build();

  event.simpleElectricCraftingMultiBlock(
    'Growth Chamber',
    'growth_chamber',
    GROWTH_CHAMBER,
    generatedShape,
    event.progressBar(77 + 18, 33, 'arrow'),
    itemInputs => itemInputs.addSlots(56 + 18, 35, 1, 1),
    itemOutputs => itemOutputs.addSlots(102 + 18, 35, 2, 1),
    fluidInputs => fluidInputs.addSlots(56, 35, 1, 1),
    _ => { },
    'steel', 'growth_chamber',
    true, false, false
  );
});
