ServerEvents.recipes((e) => {
  const miAssembler = e.recipes.modern_industrialization.assembler;
  const miBlastFurnace = e.recipes.modern_industrialization.blast_furnace;
  const miVacuumFreezer = e.recipes.modern_industrialization.vacuum_freezer;

  miAssembler(1024 * 32, 20 * 60)
    .itemOut('modern_industrialization:replicator_1')
    .itemIn('modern_industrialization:quantum_machine_hull')
    .itemIn('16x modern_industrialization:quantum_circuit')
    .itemIn('4x modern_industrialization:quantum_tank')
    .itemIn('4x modern_industrialization:quantum_barrel')
    .fluidIn('modern_industrialization:uu_matter', 8000)
    .fluidIn('craftoria:quantium', 8)
    .id('craftoria:end_game/replicator_1');

  miAssembler(8192 * 64, 20 * 50)
    .itemOut('modern_industrialization:replicator')
    .itemIn('modern_industrialization:replicator_1')
    .itemIn('mekanism_extras:infinite_bin')
    .itemIn('mekanism_extras:infinite_fluid_tank')
    .itemIn('4x craftoria:cosmic_injector')
    .fluidIn('modern_industrialization:uu_matter', 16000)
    .fluidIn('craftoria:quantium', 32)
    .id('craftoria:end_game/replicator_2');

  miBlastFurnace(8192 * 16, 20 * 20)
    .itemIn('modern_industrialization:quantum_upgrade')
    .fluidOut('craftoria:quantium', 1)
    .id('craftoria:end_game/quantium_from_upgrade');

  miVacuumFreezer(8192, 20 * 5)
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

    miVacuumFreezer(8192, 20 * 5)
      .itemIn(`minecraft:netherite_${item}`)
      .itemOut(`craftoria:quantum_${item}_mold`)
      .fluidIn('craftoria:molten_iridium', 90 * 5)
      .id(`craftoria:end_game/quantum_${item}_mold`);
  });

  miBlastFurnace(8192, 20 * 30)
    .itemIn('modern_industrialization:iridium_plate')
    .fluidOut('craftoria:molten_iridium', 90)
    .id('craftoria:end_game/molten_iridium');

  Ingredient.all.except('#craftoria:replicator_1_blacklist').stacks.forEach((item) => {
    e.recipes.modern_industrialization.replicator_1(8192, 20).itemOut(item).itemIn(item, 0).fluidIn('modern_industrialization:uu_matter', 100);
  });
  e.recipes.modern_industrialization
    .replicator_1(8192 * 128, 20 * 60 * 5)
    .itemOut('modern_industrialization:replicator_1')
    .itemIn('modern_industrialization:replicator_1', 0)
    .fluidIn('modern_industrialization:uu_matter', 16000);
});
