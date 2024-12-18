let REPLICATOR2;

MIMachineEvents.registerRecipeTypes((event) => {
  REPLICATOR2 = event.register('replicator_2').withFluidInputs().withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
  event.craftingSingleBlock(
    'Replicator II',
    'replicator_2',
    REPLICATOR2,
    ['electric'],
    -1,
    event.progressBar(85, 34, 'arrow'),
    event.efficiencyBar(38, 62),
    event.energyBar(14, 35),
    1,
    1,
    1,
    0,
    1,
    (items) => items.addSlots(60, 35, 1, 1).addSlots(115, 35, 1, 1),
    (fluids) => fluids.addSlots(35, 35, 1, 1),
    true,
    false,
    true
  );
});
