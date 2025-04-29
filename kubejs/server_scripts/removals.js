/** @type {Special.Item[]} */
const globalItemRemovals = [
  'megacells:mega_interface',
  'megacells:cable_mega_interface',
  'megacells:mega_pattern_provider',
  'megacells:cable_mega_pattern_provider',
  'megacells:mega_crafting_accelerator',
  'bigger_ae2:advanced_item_cell_housing',
  'bigger_ae2:quantum_item_storage_cell',
  'bigger_ae2:digital_singularity_item_storage_cell',
  'bigger_ae2:quantum_flux_storage_cell',
  'chisel:chisel',
  'ae2:spatial_anchor',
  'mekanism:upgrade_anchor',
  'mekanism:dimensional_stabilizer',
  'pneumaticcraft:chunkloader_upgrade',
  'industrialforegoing:infinity_nuke',
  'utilitarian:tiny_coal',
  'utilitarian:tiny_charcoal',
  'create:copycat_step',
  'create:copycat_panel',
  'mffs:anti_personnel_module',
  'mffs:confiscation_module',
];

/** @type {[{id: Special.Item, alt?: string, altId?: Special.Item}]} */
const disabledItems = [];

ServerEvents.recipes(event => {
  /** @type {Special.RecipeId[]} */
  const id = [
    'appflux:inscriber/crush_diamond',
    'appflux:inscriber/crush_emerald',
    'modern_industrialization:electric_age/machine/assembler/replicator',
    'mffs:steel_compound',
    'mffs:steel_ingot',
    'industrialforegoing:laser_drill_ore/raw_materials/iridium',
    'modern_industrialization:materials/uranium/blast_furnace/dust',
    'supplementaries:sus_gravel',
    'supplementaries:sus_sand',
    'mekanism:sawing/torch',
  ];

  /** @type {Special.Item[]} */
  const output = [];

  id.forEach(id => {
    event.remove({ id: id });
  });

  output.forEach(output => {
    event.remove({ output: output });
  });

  globalItemRemovals.forEach(output => {
    event.remove({ output: output });
  });

  disabledItems.forEach(item => {
    if (item.altId) {
      event.replaceInput({ input: item.id }, item.id, item.altId);
      event.remove({ output: item.id });
    } else event.remove({ output: item.id });
  });
});

/**
 * Disable item for better alternatives. Works nearly the same way as globalItemRemovals, but allows for item replacement.
 * @param {Special.Item} item - Item to disable.
 * @param {string} [altText] - [OPTIONAL] Preferred alternative item name.
 * @param {Special.Item} [altId] - [OPTIONAL] Alternative itemid.
 */
const disableItem = (item, altText, altId) => {
  if (disabledItems.some(disabled => disabled.id === item)) {
    logInfo(`Item ${item} is already disabled.`);
    return;
  }
  disabledItems.push({ id: item, alt: altText, altId: altId });
};
