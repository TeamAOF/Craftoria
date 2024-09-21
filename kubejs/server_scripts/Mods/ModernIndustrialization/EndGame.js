ServerEvents.recipes((e) => {
  miAssembler(
    e,
    [
      ['modern_industrialization:uu_matter', 500],
      ['craftoria:quantium', 10],
    ],
    [
      ['modern_industrialization:quantum_machine_hull', 1],
      ['modern_industrialization:quantum_circuit', 4],
      ['modern_industrialization:quantum_tank', 4],
      ['modern_industrialization:quantum_barrel', 4],
      ['mekanism:pellet_antimatter', 16],
    ],
    ['modern_industrialization:replicator', 1],
    1000000,
    2000
  );

  e.recipes.modern_industrialization
    .blast_furnace(8192 * 16, 20 * 20)
    .itemIn('modern_industrialization:quantum_upgrade')
    .fluidOut('craftoria:quantium', 1)
    .id('craftoria:end_game/quantium_from_upgrade');

  e.recipes.modern_industrialization
    .vacuum_freezer(8192, 20 * 5)
    .fluidIn('craftoria:quantium', 1)
    .itemOut('modern_industrialization:quantum_upgrade')
    .id('craftoria:end_game/quantum_upgrade_from_quantium');

  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach((item) => {
    e.remove({output: `modern_industrialization:quantum_${item}`});
    e.recipes.modern_industrialization
      .heat_exchanger(8192 * 16, 20 * 10)
      .itemIn(`craftoria:quantum_${item}_mold`, 0)
      .itemOut(`modern_industrialization:quantum_${item}`)
      .fluidIn('craftoria:quantium', 5)
      .fluidIn('modern_industrialization:cryofluid', 16000)
      .fluidOut('modern_industrialization:argon', 10400)
      .fluidOut('modern_industrialization:helium', 4000)
      .id(`craftoria:end_game/quantum_${item}`);

    e.recipes.modern_industrialization
      .vacuum_freezer(8192, 20 * 5)
      .itemIn(`minecraft:netherite_${item}`)
      .itemOut(`craftoria:quantum_${item}_mold`)
      .fluidIn('craftoria:molten_iridium', 90 * 5)
      .id(`craftoria:end_game/quantum_${item}_mold`);
  });

  e.recipes.modern_industrialization
    .blast_furnace(8192, 20 * 30)
    .itemIn('modern_industrialization:iridium_plate')
    .fluidOut('craftoria:molten_iridium', 90)
    .id('craftoria:end_game/molten_iridium');
});
