////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((event) => {
  miAssembler(
    event,
    ['modern_industrialization:uu_matter', 500],
    [
      ['modern_industrialization:quantum_machine_hull', 1],
      ['modern_industrialization:quantum_upgrade', 4],
      ['modern_industrialization:quantum_circuit', 4],
      ['modern_industrialization:quantum_tank', 4],
      ['modern_industrialization:quantum_barrel', 4],
      ['mekanism:pellet_antimatter', 16],
    ],
    ['modern_industrialization:replicator', 1],
    1000000,
    2000
  );

  // Obsidian Dust
  miMacerator(event, ['minecraft:obsidian', 1], [['mekanism:dust_obsidian', 4]], 2, 200);

  // Ores > Raw
  miMacerator(event, ['c:ores/silver', 1], [['modern_industrialization:raw_silver', 3]], 2, 200);

  event.replaceInput(
    { id: 'industrialization_overdrive:machines/multi_processing_array/craft' },
    'modern_industrialization:assembler',
    'extended_industrialization:processing_array'
  );
});
