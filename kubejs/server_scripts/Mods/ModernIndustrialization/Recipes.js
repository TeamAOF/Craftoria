////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(e => {
  const { assembler, macerator, compressor, cutting_machine, electrolyzer } = e.recipes.modern_industrialization;

  // Obsidian Dust
  macerator(2, 100).itemOut('4x mekanism:dust_obsidian').itemIn('#c:obsidians/normal').id('craftoria:mi/obsidian_dust');

  // Ores > Raw
  macerator(2, 100).itemOut('3x modern_industrialization:raw_silver').itemIn('#c:ores/silver').id('craftoria:mi/ores/raw_silver');
  macerator(2, 100).itemOut('3x irons_spellbooks:raw_mithril').itemIn('#c:ores/mithril').id('craftoria:mi/ores/raw_mithril');
  macerator(2, 100).itemOut('2x actuallyadditions:black_quartz').itemIn('#c:ores/black_quartz').id('craftoria:mi/ores/black_quartz');
  macerator(2, 100).itemOut('3x create:raw_zinc').itemIn('#c:ores/zinc').id('craftoria:mi/ores/raw_zinc');

  e.replaceInput(
    { id: 'industrialization_overdrive:machines/multi_processing_array/craft' },
    'modern_industrialization:assembler',
    'extended_industrialization:processing_array'
  );

  // Mekanism Compat
  macerator(2, 100)
    .itemOut('4x mekanism:dust_fluorite')
    .itemOut('4x mekanism:dust_fluorite', 0.75)
    .itemIn('#c:ores/fluorite')
    .id('craftoria:mi/ores/fluorite_dust');
  compressor(2, 50).itemOut('mekanism:fluorite_gem').itemIn('#c:dusts/fluorite').id('craftoria:mi/ores/fluorite_gem');

  e.shaped('mi_tweaks:flux_transformer', ['SS ', ' HC', 'SS '], {
    S: 'modern_industrialization:superconductor_cable',
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables',
  }).id('mi_tweaks:flux_transformer');

  ['gold', 'iron'].forEach(material => {
    e.replaceInput({ mod: 'modern_industrialization' }, `#c:gears/${material}`, `modern_industrialization:${material}_gear`);
  });

  e.remove({ output: 'replication:replica_ingot' });
  electrolyzer(8, 60)
    .itemOut('replication:replica_ingot')
    .itemIn('replication:raw_replica')
    .fluidIn('200x advanced_ae:quantum_infusion_source')
    .id('craftoria:mi/replication/replica_ingot_from_raw_replica');

  let cuttingMachine = (output, input) => {
    cutting_machine(2, 100)
      .itemIn(input)
      .itemOut(output)
      .fluidIn('1x modern_industrialization:lubricant')
      .id(`craftoria:mi/cutting/${input.split(':')[1]}_to_${output.split(':')[1]}`);
  };

  let madeCuttingRecipeFor = [];
  Ingredient.of('#minecraft:logs').itemIds.forEach(id => {
    if ((!id.includes('log') && !id.includes('stem')) || id.includes('stripped')) return;
    const { modID, itemId } = { modID: id.split(':')[0], itemId: id.split(':')[1] };

    if (modID === 'minecraft') return;

    // Handle special cases
    if (id === 'biomeswevegone:florus_stem') {
      cuttingMachine('biomeswevegone:stripped_florus_stem', 'biomeswevegone:florus_stem');
      cuttingMachine('biomeswevegone:stripped_florus_wood', 'biomeswevegone:florus_wood');
      cuttingMachine('6x biomeswevegone:florus_planks', '#biomeswevegone:florus_logs');
      madeCuttingRecipeFor.push('biomeswevegone:florus_planks');
      return;
    } else if (id.includes('archwood')) {
      if (madeCuttingRecipeFor.includes(`ars_nouveau:archwood_planks`)) return;
      cuttingMachine('6x ars_nouveau:archwood_planks', '#c:logs/archwood');
      madeCuttingRecipeFor.push(`ars_nouveau:archwood_planks`);
      return;
    }

    const type = itemId.replace('_log', '');
    const baseID = `${modID}:${type}`;
    const strippedLog = `${modID}:stripped_${type}`;
    const wood = `${baseID}_wood`;
    const strippedWood = strippedLog.replace('log', 'wood');
    const plank = id.replace('log', 'planks');
    let logTag = `#${baseID}_logs`;

    if (madeCuttingRecipeFor.includes(plank)) return;
    if (modID === 'twilightforest' && Ingredient.of(logTag).empty) logTag = `#twilightforest:${type}wood_logs`;

    if (Item.exists(strippedLog)) cuttingMachine(strippedLog, id);
    if (Item.exists(wood) && Item.exists(strippedWood)) cuttingMachine(strippedWood, wood);

    if (!madeCuttingRecipeFor.includes(plank)) {
      if (Item.exists(plank)) {
        if (!Ingredient.of(`#${modID}:${type}_logs`).empty) cuttingMachine(`6x ${plank}`, `#${modID}:${type}_logs`);
        else {
          cuttingMachine(`6x ${plank}`, id);
          if (Item.exists(strippedLog)) cuttingMachine(`6x ${plank}`, strippedLog);
          if (Item.exists(wood)) cuttingMachine(`6x ${plank}`, wood);
          if (Item.exists(strippedWood)) cuttingMachine(`6x ${plank}`, strippedWood);
        }
        madeCuttingRecipeFor.push(plank);
      }
    }
  });

  // Our custom machines
  assembler(2000000, 5000)
    .itemOut('modern_industrialization:large_plasma_turbine')
    .itemIn('64x modern_industrialization:plasma_turbine')
    .itemIn('4x modern_industrialization:quantum_upgrade')
    .id('craftoria:mi/assembler/large_plasma_turbine');

  assembler(16, 200)
    .itemOut('modern_industrialization:budding_incubator')
    .itemIn('16x ae2:growth_accelerator')
    .itemIn('4x modern_industrialization:electronic_circuit')
    .itemIn('modern_industrialization:large_pump')
    .itemIn('modern_industrialization:advanced_machine_hull')
    .id('craftoria:mi/assembler/budding_incubator');
});
