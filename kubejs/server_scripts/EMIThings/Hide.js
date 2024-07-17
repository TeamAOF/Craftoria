RecipeViewerEvents.removeEntries("item", event => {
  let hideItems = [
    "megacells:mega_interface",
    "megacells:cable_mega_interface",
    "megacells:mega_pattern_provider",
    "megacells:cable_mega_pattern_provider",
    "bigger_ae2:advanced_item_cell_housing",
    "bigger_ae2:quantum_item_storage_cell",
    "bigger_ae2:digital_singularity_item_storage_cell",
  ];

  hideItems.forEach((item) => {
    event.remove(item);
  });
});