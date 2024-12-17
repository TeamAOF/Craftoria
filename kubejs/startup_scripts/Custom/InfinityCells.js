const $MekKey = Java.loadClass('me.ramidzkh.mekae2.ae2.MekanismKey');
const $Chem = Java.loadClass('mekanism.common.registries.MekanismChemicals');

/**
 * Add Infinity Cells for items, fluids, and chemicals.
 * Available types are 'item', 'fluid', and 'chemical'.
 * ID is the registry name of the item, fluid, or chemical.
 * In the case of chemicals, the ID doesn't have a mod ID. Not sure about custom/non-Mekanism chemicals, as I haven't tested it.
 */
global.infCells = [
  // {id: 'minecraft:sugar_cane', type: 'item'},
  // {id: 'minecraft:cactus', type: 'item'},
  // {id: 'minecraft:amethyst_shard', type: 'item'},
  // {id: 'ae2:certus_quartz_crystal', type: 'item'},
  // {id: 'minecraft:lava', type: 'fluid'},
  // {id: 'antimatter', type: 'chemical'},
  // {id: 'spent_nuclear_waste', type: 'chemical'},
];

StartupEvents.registry('item', (e) => {
  let createInfCell = (id, type) => {
    let strippedId = id ? (type === 'chemical' ? id.split(':')[1] : id.toLowerCase()) : 'missingno';
    if (type !== 'chemical') strippedId = id.split(':')[1];

    let item = e
      .create(`craftoria:infinity_${strippedId}_cell`, 'custom_infinity_cell')
      .texture(`craftoria:item/infinity_cells/${strippedId}`)
      .cellModel(`craftoria:block/drive/infinity_${strippedId}_cell`);

    switch (type) {
      case 'item':
        item.itemType(id);
        break;
      case 'fluid':
        item.fluidType(id);
        break;
      case 'chemical':
        item.type(() => $MekKey.of($Chem[id.toUpperCase()].getStack(1000)));
        break;
      default:
        console.error(`Invalid type '${type}' for Infinity Cell with ID '${id}'`);
        break;
    }
  };

  e.create('craftoria:infinity_cell_housing');

  global.infCells.forEach((cell) => createInfCell(cell.id, cell.type));
});
