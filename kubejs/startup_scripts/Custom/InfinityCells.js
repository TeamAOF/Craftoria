const $MekKey = Java.loadClass('me.ramidzkh.mekae2.ae2.MekanismKey');
const $Chem = Java.loadClass('mekanism.common.registries.MekanismChemicals');
const $SoulKey = Java.loadClass('com.buuz135.soulplied_energistics.applied.SoulKey');
const $FluxKey = Java.loadClass('com.glodblock.github.appflux.common.me.key.FluxKey');
const $EnergyType = Java.loadClass('com.glodblock.github.appflux.common.me.key.type.EnergyType');
const $SourceKey = Java.loadClass('gripe._90.arseng.me.key.SourceKey');

/**
 * Add Infinity Cells.
 * Available types are 'item', 'fluid', 'chemical', 'soul', 'flux', 'source'.
 * 'item' and 'fluid' are pretty self-explanatory.
 * 'chemical' is for Mekanism chemicals, which don't need a mod ID.
 * 'soul' is for Soulplied Energistics. It doesn't need an ID. Just use 'soul'.
 * 'flux' is for AppliedFlux. It doesn't need an ID. Just use 'flux'.
 * 'source' is for Arseng. It doesn't need an ID. Just use 'source'.
 */
global.infCells = [
  // I don't have textures for these just yet, so I'm commenting them out for now. Also not sure which ones to actually include.
  // { id: 'minecraft:sand', type: 'item' },
  // { id: 'minecraft:gravel', type: 'item' },
  { id: 'minecraft:lava', type: 'fluid' },
  // { id: 'minecraft:milk', type: 'fluid' },
  { id: 'justdirethings:xp_fluid_source', type: 'fluid' },
  { id: 'modern_industrialization:uu_matter', type: 'fluid' },
  // { id: 'nuclear_waste', type: 'chemical' },
  { id: 'soul', type: 'soul' },
  { id: 'flux', type: 'flux' },
  { id: 'source', type: 'source' },
];

StartupEvents.registry('item', (e) => {
  /**
   * @param {String} id
   * @param {String} type
   */
  let createInfCell = (id, type) => {
    let strippedId = id.includes(':') ? id.split(':')[1] : id;

    let cell = e
      .create(`craftoria:infinity_${strippedId}_cell`, 'custom_infinity_cell')
      .texture(`craftoria:item/infinity_cells/${strippedId}`)
      .cellModel(`craftoria:block/drive/infinity_${strippedId}_cell`);

    switch (type) {
      case 'item':
        cell.itemType(id);
        break;
      case 'fluid':
        cell.fluidType(id);
        break;
      case 'chemical':
        cell.type(() => $MekKey.of($Chem[id.toUpperCase()].getStack(1000)));
        break;
      case 'soul':
        cell.type(() => $SoulKey.INSTANCE);
        break;
      case 'flux':
        cell.type(() => $FluxKey.of($EnergyType.FE));
        break;
      case 'source':
        cell.type(() => $SourceKey.KEY);
        break;
      default:
        console.error(`Invalid type '${type}' for Infinity Cell with ID '${id}'`);
        break;
    }
  };

  e.create('craftoria:infinity_cell_housing');

  e.create('craftoria:dummy_warden_imprisonment', 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName('Ritual: Imprisonment of the Warden')
    .ritualTooltip('A ritual to imprison the Warden in an Infinity Cell, granting you infinite warden souls');

  global.infCells.forEach((cell) => createInfCell(cell.id, cell.type));
});
