let MODEL_SYNTHESIZER;

MIMachineEvents.registerRecipeTypes(event => {
  MODEL_SYNTHESIZER = event.register('model_synthesizer').withItemInputs().withItemOutputs();
});
// THE SHAPE/BLOCKS ARE NOT FINALIZED
MIMachineEvents.registerMachines(event => {
  const noHatch = event.noHatch();
  const synthHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

  const casing = event.memberOfBlock('modern_industrialization:steel_machine_casing');
  const glass = event.memberOfBlock('mekanismgenerators:reactor_glass');
  const rGrate = event.memberOfBlock('factory_blocks:rgrate');
  const pipe = event.memberOfBlock('create:fluid_pipe');
  const glowPanel = event.memberOfBlock('create:rose_quartz_lamp');

  const sb = event.startShape('steel');

  for (let y = 0; y < 5; y++) {
    let topBot = (y === 0 || y === 4);

    for (let x = -3; x <= 3; x++) {
      let sideX = (x === -3 || x === 3);

      for (let z = 0; z < 5; z++) {
        if (z === 0 && !topBot) {
          sb.add(x, y, z, pipe, noHatch);
          continue;
        }

        let isEdge = topBot || sideX || z === 4;
        let block = casing;
        let hatch = isEdge ? synthHatch : noHatch;

        if (topBot) {
          block = casing;
        } else if (sideX || z === 4) {
          block = rGrate;
        } else if (z === 2 || z === 1) {
          block = glass;
        } else if (z === 3) {
          block = glowPanel;
        }

        sb.add(x, y, z, block, hatch);
      }
    }
  }

  const modelSynthShape = sb.build();

  event.simpleElectricCraftingMultiBlock(
    'Model Synthesizer', 'model_synthesizer',
    MODEL_SYNTHESIZER, modelSynthShape,
    event.progressBar(77 - 16, 33, 'arrow'),
    itemInputs => itemInputs.addSlots(56 - 18 - 16, 35, 2, 1),
    itemOutputs => itemOutputs.addSlots(102 - 16, 35, 2, 1),
    _ => { }, _ => { },
    'steel', 'model_synthesizer', true, false, false
  );
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
  const noHatch = event.noHatch();
  const synthHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

  const casing = event.memberOfBlock('modern_industrialization:steel_machine_casing');
  const glass = event.memberOfBlock('mekanismgenerators:reactor_glass');
  const rGrate = event.memberOfBlock('factory_blocks:rgrate');
  const pipe = event.memberOfBlock('create:fluid_pipe');
  const glowPanel = event.memberOfBlock('create:rose_quartz_lamp');

  const sb = event.startShape('steel');

  for (let y = 0; y < 5; y++) {
    let topBot = (y === 0 || y === 4);

    for (let x = -3; x <= 3; x++) {
      let sideX = (x === -3 || x === 3);

      for (let z = 0; z < 5; z++) {

        if (z === 0 && !topBot) {
          sb.add(x, y, z, pipe, noHatch);
          continue;
        }

        let isEdge = topBot || sideX || z === 4;
        let block = casing;
        let hatch = isEdge ? synthHatch : noHatch;

        if (topBot) {
          block = casing;
        } else if (sideX || z === 4) {
          block = rGrate;
        } else if (z === 2 || z === 1) {
          block = glass;
        } else if (z === 3) {
          block = glowPanel;
        }

        sb.add(x, y, z, block, hatch);
      }
    }
  }

  const modelSynthShape = sb.build();

  event.electric(
    'Model Synthesizer', 'batch_model_synthesizer',
    MODEL_SYNTHESIZER, modelSynthShape,
    workstations => workstations.add('modern_industrialization:model_synthesizer'),
    'steel', 'model_synthesizer', true, false, false,
    8, 0.75
  );
});
