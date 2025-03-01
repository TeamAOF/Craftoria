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
    .fluidIn('8000x modern_industrialization:uu_matter')
    .fluidIn('8x craftoria:quantium')
    .id('craftoria:end_game/replicator_1');

  miAssembler(8192 * 64, 20 * 50)
    .itemOut('modern_industrialization:replicator')
    .itemIn('modern_industrialization:replicator_1')
    .itemIn('mekanism_extras:infinite_bin')
    .itemIn('mekanism_extras:infinite_fluid_tank')
    .itemIn('4x craftoria:cosmic_injector')
    .fluidIn('16000x modern_industrialization:uu_matter')
    .fluidIn('32x craftoria:quantium')
    .id('craftoria:end_game/replicator_2');

  miBlastFurnace(8192 * 16, 20 * 20)
    .itemIn('modern_industrialization:quantum_upgrade')
    .fluidOut('1x craftoria:quantium')
    .id('craftoria:end_game/quantium_from_upgrade');

  miVacuumFreezer(8192, 20 * 5)
    .fluidIn('1x craftoria:quantium')
    .itemOut('modern_industrialization:quantum_upgrade')
    .id('craftoria:end_game/quantum_upgrade_from_quantium');

  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach((item) => {
    e.remove({ output: `modern_industrialization:quantum_${item}` });
    e.recipes.modern_industrialization
      .heat_exchanger(8192 * 16, 20 * 10)
      .itemIn(`craftoria:quantum_${item}_mold`, 0)
      .itemOut(`modern_industrialization:quantum_${item}`)
      .fluidIn('5x craftoria:quantium')
      .fluidIn('16000x modern_industrialization:cryofluid')
      .fluidOut('10400x modern_industrialization:argon')
      .fluidOut('4000x modern_industrialization:helium')
      .id(`craftoria:end_game/quantum_${item}`);

    miVacuumFreezer(8192, 20 * 5)
      .itemIn(`minecraft:netherite_${item}`)
      .itemOut(`craftoria:quantum_${item}_mold`)
      .fluidIn('450x craftoria:molten_iridium')
      .id(`craftoria:end_game/quantum_${item}_mold`);

    if (item !== 'sword') {
      e.remove({ output: `extended_industrialization:nano_quantum_${item}` });
      e.recipes.modern_industrialization
        .implosion_compressor(1, 10)
        .itemIn(`modern_industrialization:quantum_${item}`)
        .itemIn(`extended_industrialization:nano_${item}`)
        .itemIn('64x modern_industrialization:nuke')
        .itemIn('64x modern_industrialization:nuke')
        .itemOut(`extended_industrialization:nano_quantum_${item}`)
        .id(`craftoria:end_game/nano_quantum_${item}`);
    }
  });

  miBlastFurnace(8192, 20 * 30)
    .itemIn('modern_industrialization:iridium_plate')
    .fluidOut('90x craftoria:molten_iridium')
    .id('craftoria:end_game/molten_iridium');

  Ingredient.all.except('#craftoria:replicator_1_blacklist').stacks.forEach((item) => {
    e.recipes.modern_industrialization.replicator_1(8192, 20).itemOut(item.id).itemIn(item.id, 0).fluidIn('1000x modern_industrialization:uu_matter');
  });
  e.recipes.modern_industrialization
    .replicator_1(8192 * 128, 20 * 60 * 5)
    .itemOut('modern_industrialization:replicator_1')
    .itemIn('modern_industrialization:replicator_1', 0)
    .fluidIn('16000x modern_industrialization:uu_matter');
});
