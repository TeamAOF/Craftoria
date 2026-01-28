let REPLICATOR_PROTOTYPE;

MIMachineEvents.registerRecipeTypes(event => {
  REPLICATOR_PROTOTYPE = event.register('replicator_prototype').withFluidInputs().withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
  e.craftingSingleBlock(
    'Replicator Prototype', 'replicator_prototype', REPLICATOR_PROTOTYPE, ['electric'],
    -1, e.progressBar(85, 34, 'arrow'), e.efficiencyBar(38, 62), e.energyBar(14, 35),
    // Number of slots: item Input, Output, Fluid Input, Output
    1, 1, 1, 0,
    // Fluid capacity in Buckets
    16,
    (items) => items.addSlots(60, 35, 1, 1).addSlots(115, 35, 1, 1),
    (fluids) => fluids.addSlots(35, 35, 1, 1),
    // front, top, side overlays
    true, false, true
  );
});
