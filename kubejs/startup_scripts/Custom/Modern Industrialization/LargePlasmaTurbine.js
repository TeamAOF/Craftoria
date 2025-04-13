MIMachineEvents.registerMachines(event => {
  const largePlasmaTurbineHatchOut = event.hatchOf('energy_output');
  const largePlasmaTurbineHatchIn = event.hatchOf('fluid_input');
  const iridiumPipeMachineCasing = event.memberOfBlock('modern_industrialization:iridium_machine_casing_pipe');
  const plasmaHandlingIridiumMachineCasing = event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing');
  const largePlasmaTurbineShape = event
    .layeredShape('plasma_handling_iridium_machine_casing', [
      ['HHHHH', 'HHHHH', 'HHOHH', 'HHHHH', 'HHHHH'],
      ['PPPPP', 'PPPPP', 'PPPPP', 'PPPPP', 'PPPPP'],
      ['PPPPP', 'PPPPP', 'PPPPP', 'PPPPP', 'PPPPP'],
      ['PPPPP', 'PPPPP', 'PPPPP', 'PPPPP', 'PPPPP'],
      ['PPPPP', 'PPPPP', 'PPPPP', 'PPPPP', 'PPPPP'],
      ['PPPPP', 'PPPPP', 'PPPPP', 'PPPPP', 'PPPPP'],
      ['IIIII', 'IHHHI', 'IH#HI', 'IHHHI', 'IIIII'],
    ])
    .key('P', iridiumPipeMachineCasing, event.noHatch())
    .key('O', plasmaHandlingIridiumMachineCasing, largePlasmaTurbineHatchOut)
    .key('I', plasmaHandlingIridiumMachineCasing, largePlasmaTurbineHatchIn)
    .key('H', plasmaHandlingIridiumMachineCasing, event.noHatch())
    .build();

  event.simpleGeneratorMultiBlock(
    'Large Plasma Turbine',
    'large_plasma_turbine',
    largePlasmaTurbineShape,
    100000000,
    builder => {
      builder.fluid('modern_industrialization:helium_plasma', 100000);
    },
    'plasma_handling_iridium_machine_casing',
    'large_plasma_turbine',
    true,
    false,
    false
  );
});
