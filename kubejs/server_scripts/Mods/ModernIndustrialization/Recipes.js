////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((e) => {
  // Obsidian Dust
  miMacerator(e, ['minecraft:obsidian', 1], [['mekanism:dust_obsidian', 4]], 2, 200);

  // Ores > Raw
  miMacerator(e, ['c:ores/silver', 1], [['modern_industrialization:raw_silver', 3]], 2, 100);
  miMacerator(e, ['c:ores/mithril', 1], [['irons_spellbooks:raw_mithril', 3]], 2, 100);

  e.replaceInput({id: 'industrialization_overdrive:machines/multi_processing_array/craft'}, 'modern_industrialization:assembler', 'extended_industrialization:processing_array');

  // Mekanism Compat
  miMacerator(
    e,
    ['c:ores/fluorite', 1],
    [
      ['mekanism:dust_fluorite', 4],
      ['mekanism:dust_fluorite', 4, 0.75],
    ],
    2,
    100
  );
  miCompressor(e, ['c:dusts/fluorite', 1], ['mekanism:fluorite_gem', 1], 2, 50);

  e.shaped('mi_tweaks:flux_transformer', ['SS ', ' HC', 'SS '], {
    S: 'modern_industrialization:superconductor_cable',
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables',
  }).id('mi_tweaks:flux_transformer');

  ['gold', 'iron'].forEach((material) => {
    e.replaceInput({mod: 'modern_industrialization'}, `#c:gears/${material}`, `modern_industrialization:${material}_gear`);
  });
});
