ServerEvents.recipes((event) => {

  const id = [
    "appflux:inscriber/crush_diamond",
    "appflux:inscriber/crush_emerald",
    "occultism:miner/ores/aluminum_ore",
    "occultism:miner/ores/amethyst_ore",
    "occultism:miner/ores/sapphire_ore",
  ];

  const output = [
    "megacells:mega_interface",
    "megacells:cable_mega_interface",
    "megacells:mega_pattern_provider",
    "megacells:cable_mega_pattern_provider",
    "bigger_ae2:advanced_item_cell_housing",
    "bigger_ae2:quantum_item_storage_cell",
    "bigger_ae2:digital_singularity_item_storage_cell",
  ];

  id.forEach((id) => {
    event.remove({ id: id });
  });

  output.forEach((output) => {
    event.remove({ output: output });
  });
});
