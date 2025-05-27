MIMachineEvents.registerCasings(event => {
  for (let [id, block] of Object.entries(customMICasings)) {
    event.registerBlockImitation(id, block);
  }
});

MIMachineEvents.registerHatches(event => {
  // Register custom hatches based on the customMIParts object
  for (let [id, hatch] of Object.entries(customMIHatches)) {
    let { name, casing, types } = hatch;
    // Go through types and register them
    for (let [type, typeValue] of Object.entries(types)) {
      switch (type) {
        case 'fluid':
          event.fluid(name, id, casing, typeValue);
          break;
        case 'item':
          event.item(name, id, casing, typeValue.rows, typeValue.columns, typeValue.posX, typeValue.posY);
          break;
        case 'energy':
          event.energy(typeValue);
          break;
        default:
          console.error(`Error registering hatch: Unknown type ${type}.`);
          break;
      }
    }
  }
});

MIMachineEvents.addEbfTiers(e => {
  // ID of the coil block, max EU/t, English name
  e.add('modern_industrialization:superconductor_coil', 8192 * 16, 'Superconductor');
});
