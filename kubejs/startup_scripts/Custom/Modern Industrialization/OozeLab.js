/** @type {$MachineRecipeType_} */
let OOZE_LAB;

MIMachineEvents.registerRecipeTypes(event => {
  OOZE_LAB = event.register('ooze_lab').withFluidInputs().withItemInputs().withFluidOutputs().withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
  const noHatch = event.noHatch();
  const oozeLabHatch = event.hatchOf('fluid_input', 'fluid_output', 'item_input', 'item_output', 'energy_input');
  const grate = event.memberOfBlock('factory_blocks:grate');
  const rGrate = event.memberOfBlock('factory_blocks:rgrate');
  const reactorGlass = event.memberOfBlock('mekanismgenerators:reactor_glass');
  const timeFluid = event.memberOfBlock('justdirethings:time_fluid_block');
  const goo = event.memberOfBlock('justdirethings:gooblock_tier4');
  const oozeLabShapeBuilder = event.startShape('factory_grate');

  for (let y = 0; y < 5; y++) {
    let topBot = y === 0 || y === 4;
    for (let x = -3; x <= 3; x++) {
      let isLeftRight = x === -3 || x === 3;
      for (let z = 0; z < 5; z++) {
        if (z === 0 && !topBot) continue; // Skip the first layer if not top or bottom
        let isEdge = (x === -3 || x === 3 || z === 4 || z === 0) && topBot;

        let block = grate;
        let hatch = isEdge ? oozeLabHatch : noHatch;

        if (topBot) {
          block = grate;
        } else if (z === 4 || isLeftRight) {
          block = rGrate;
        } else if (z === 1) {
          block = reactorGlass;
        } else if (z === 2) {
          block = timeFluid;
        } else if (z === 3) {
          block = goo;
        }

        oozeLabShapeBuilder.add(x, y, z, block, hatch);
      }
    }
  }
  const oozeLabShape = oozeLabShapeBuilder.build();

  event.electricStandalone(
    'Ooze Lab', 'ooze_lab',
    OOZE_LAB, oozeLabShape,
    event.progressBar(77, 33, 'arrow'),
    itemInputs => itemInputs.addSlots(56 - 18, 35, 2, 1),
    itemOutputs => itemOutputs.addSlots(102, 35, 1, 1),
    fluidInputs => fluidInputs.addSlots(56, 35 + 18, 1, 1),
    fluidOutputs => fluidOutputs.addSlots(102, 35 + 18, 1, 1),
    'factory_grate', 'ooze_lab', true, false, false,
    8, 0.75
  );
});
