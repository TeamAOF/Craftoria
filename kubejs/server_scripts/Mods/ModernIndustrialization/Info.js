RecipeViewerEvents.addInformation('item', e => {
  /** @type {Record<Special.Item, string[]>}*/
  let entries = {
    // Add machine information here
    'modern_industrialization:replicator_1': [
      'info.modern_industrialization.replicator_1.line1',
      'info.modern_industrialization.replicator_1.line2',
      'info.modern_industrialization.replicator_1.line3',
      'info.modern_industrialization.replicator_1.line4',
      'info.modern_industrialization.replicator_1.line5',
      'info.modern_industrialization.replicator_1.line6',
      'info.modern_industrialization.replicator_1.line7',
    ],
    'modern_industrialization:replicator': [
      'info.modern_industrialization.replicator.line1',
      'info.modern_industrialization.replicator.line2',
      'info.modern_industrialization.replicator.line3',
      'info.modern_industrialization.replicator.line4',
      'info.modern_industrialization.replicator.line5',
      'info.modern_industrialization.replicator.line6',
      'info.modern_industrialization.replicator.line7',
      'info.modern_industrialization.replicator.line8',
    ],
    'extended_industrialization:processing_array': [
      'info.extended_industrialization.processing_array.line1',
      'info.extended_industrialization.processing_array.line2',
      'info.extended_industrialization.processing_array.line3',
      'info.extended_industrialization.processing_array.line4',
      'info.extended_industrialization.processing_array.line5',
      'info.extended_industrialization.processing_array.line6',
      'info.extended_industrialization.processing_array.line7',
    ],
    'industrialization_overdrive:multi_processing_array': [
      'info.industrialization_overdrive.multi_processing_array.line1',
      'info.industrialization_overdrive.multi_processing_array.line2',
      'info.industrialization_overdrive.multi_processing_array.line3',
      'info.industrialization_overdrive.multi_processing_array.line4',
      'info.industrialization_overdrive.multi_processing_array.line5',
      'info.industrialization_overdrive.multi_processing_array.line6',
      'info.industrialization_overdrive.multi_processing_array.line7',
    ],

    // Add item information here
    'modern_industrialization:overdrive_module': [
      'info.modern_industrialization.overdrive_module.line1',
      'info.modern_industrialization.overdrive_module.line2',
      'info.modern_industrialization.overdrive_module.line3',
    ],
  };

  for (const item in entries) {
    let keys = entries[item];
    let components = keys.map(key => Text.translate(key));
    e.add(item, components);
  }
});
