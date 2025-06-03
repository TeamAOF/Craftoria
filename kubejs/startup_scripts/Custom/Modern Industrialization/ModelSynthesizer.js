let MODEL_SYNTHESIZER;

MIMachineEvents.registerRecipeTypes(event => {
  MODEL_SYNTHESIZER = event.register('model_synthesizer').withItemInputs().withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
  const noHatch = event.noHatch();
  const synthHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

  const azur14 = event.memberOfBlock('xtonesreworked:azur_block_14');
  const vect4 = event.memberOfBlock('xtonesreworked:vect_block_4');
  const vect5 = event.memberOfBlock('xtonesreworked:vect_block_5');
  const vect7 = event.memberOfBlock('xtonesreworked:vect_block_7');
  const vect14 = event.memberOfBlock('xtonesreworked:vect_block_14');
  const glass = event.memberOfBlock('chipped:clear_leaded_glass');
  const lightBlue = event.memberOfBlock('luminax:light_blue_luminax_block');

  const modelSynthShape = event.layeredShape('vect5', [
    ['XVVVX', 'CAAAC', 'CAEAC', 'CAAAC', 'XVVVX'],
    ['VAAAV', 'ABBBA', 'ABBBA', 'ABBBA', 'VAAAV'],
    ['VAEAV', 'ABBBA', 'EBBBE', 'ABBBA', 'VAEAV'],
    ['VAAAV', 'ABBBA', 'ABBBA', 'ABBBA', 'VAAAV'],
    ['XV#VX', 'CGGGC', 'CGEGC', 'CGGGC', 'XVVVX'],
  ])
    .key('X', vect7, noHatch)
    .key('C', vect4, noHatch)
    .key('V', vect5, synthHatch)
    .key('E', vect14, noHatch)
    .key('A', azur14, noHatch)
    .key('B', lightBlue, noHatch)
    .key('G', glass, noHatch)
    .build();

  event.electricStandalone(
    'Model Synthesizer', 'batch_model_synthesizer',
    MODEL_SYNTHESIZER, modelSynthShape,
    event.progressBar(77 - 16, 33, 'arrow'),
    itemInputs => itemInputs.addSlots(56 - 18 - 16, 35, 2, 1),
    itemOutputs => itemOutputs.addSlots(102 - 16, 35, 2, 1),
    _ => { }, _ => { },
    'steel', 'model_synthesizer', true, false, false,
    8, 0.75
  );
});
