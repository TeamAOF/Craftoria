// //////////////////////
// / Made by Team AOE ///
// //////////////////////

ServerEvents.recipes(e => {
  const { assembler, macerator, compressor, cutting_machine, electrolyzer, chemical_reactor, oil_drilling_rig, centrifuge } = e.recipes.modern_industrialization;

  macerator(2, 100).itemOut('4x mekanism:dust_obsidian').itemIn('#c:obsidians/normal').id('craftoria:mi/macerator/obsidian_dust');
  macerator(4, 20)
    .itemOut('advanced_ae:quantum_infused_dust')
    .itemIn('advanced_ae:shattered_singularity')
    .id('craftoria:mi/macerator/quantum_infused_dust');

  // Ores > Raw
  macerator(2, 100).itemOut('3x modern_industrialization:raw_silver').itemIn('#c:ores/silver').id('craftoria:mi/macerator/ores/raw_silver');
  macerator(2, 100).itemOut('3x irons_spellbooks:raw_mithril').itemIn('#c:ores/mithril').id('craftoria:mi/macerator/ores/raw_mithril');
  macerator(2, 100)
    .itemOut('2x actuallyadditions:black_quartz')
    .itemIn('#c:ores/black_quartz')
    .id('craftoria:mi/macerator/ores/black_quartz');
  macerator(2, 100)
    .itemOut('3x create:raw_zinc')
    .itemIn('#c:ores/zinc')
    .id('craftoria:mi/macerator/ores/raw_zinc');


  [
    '#c:ores/xychorium/blue',
    '#c:ores/xychorium/green',
    '#c:ores/xychorium/red',
    '#c:ores/xychorium/dark',
    '#c:ores/xychorium/light',
  ].forEach(tag => {
    let output = `xycraft_world:xychorium_gem_${tag.split('/')[2]}`;

    macerator(2, 100)
      .itemOut(`6x ${output}`)
      .itemOut(`3x ${output}`, 0.5)
      .itemIn(tag)
      .id(`craftoria:mi/macerator/ores/xychorium_gem_${tag.split('/')[2]}`);
  });

  e.replaceInput(
    { output: 'industrialization_overdrive:multi_processing_array' },
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
    /** @type {[Special.Mod, string]} */
    const [modID, itemId] = id.split(':');

    if (modID === 'minecraft') return;

    // Handle special cases
    if (id === 'biomeswevegone:florus_stem') {
      cuttingMachine('biomeswevegone:stripped_florus_stem', 'biomeswevegone:florus_stem');
      cuttingMachine('biomeswevegone:stripped_florus_wood', 'biomeswevegone:florus_wood');
      cuttingMachine('6x biomeswevegone:florus_planks', '#biomeswevegone:florus_logs');
      madeCuttingRecipeFor.push('biomeswevegone:florus_planks');
      return;
    } else if (id.includes('archwood')) {
      if (madeCuttingRecipeFor.includes('ars_nouveau:archwood_planks')) return;
      cuttingMachine('6x ars_nouveau:archwood_planks', '#c:logs/archwood');
      madeCuttingRecipeFor.push('ars_nouveau:archwood_planks');
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
    if (modID === 'twilightforest' && Ingredient.of(logTag).hasNoItems()) logTag = `#twilightforest:${type}wood_logs`;

    if (Item.exists(strippedLog)) cuttingMachine(strippedLog, id);
    if (Item.exists(wood) && Item.exists(strippedWood)) cuttingMachine(strippedWood, wood);

    if (!madeCuttingRecipeFor.includes(plank)) {
      if (Item.exists(plank)) {
        if (!Ingredient.of(`#${modID}:${type}_logs`).hasNoItems()) cuttingMachine(`6x ${plank}`, `#${modID}:${type}_logs`);
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

  // Powah Conversion
  chemical_reactor(10, 240)
    .itemIn('powah:uraninite')
    .itemIn('modern_industrialization:iron_dust')
    .fluidIn('100x modern_industrialization:sulfuric_acid')
    .itemOut('modern_industrialization:uranium_dust')
    .fluidOut('75x modern_industrialization:sulfuric_acid')
    .id('craftoria:mi/chemical_reactor/uranium');

  chemical_reactor(10, 120)
    .itemOut('powah:uraninite')
    .itemIn('modern_industrialization:uranium_dust')
    .fluidIn('25x mekanism:oxygen')
    .id('craftoria:mi/chemical_reactor/uraninite');

  // Our custom machines
  assembler(2000000, 5000)
    .itemOut('modern_industrialization:large_plasma_turbine')
    .itemIn('64x modern_industrialization:plasma_turbine')
    .itemIn('4x modern_industrialization:quantum_upgrade')
    .id('craftoria:mi/assembler/large_plasma_turbine');

  e.shaped('modern_industrialization:quantum_fluid_input_hatch', ['T', 'H'], {
    T: 'modern_industrialization:quantum_tank',
    H: 'modern_industrialization:quantum_machine_hull',
  }).id('craftoria:mi/shaped/quantum_fluid_input_hatch');
  e.shaped('modern_industrialization:quantum_fluid_output_hatch', ['H', 'T'], {
    T: 'modern_industrialization:quantum_tank',
    H: 'modern_industrialization:quantum_machine_hull',
  }).id('craftoria:mi/shaped/quantum_fluid_output_hatch');
  e.shaped('modern_industrialization:quantum_item_input_hatch', ['T', 'H'], {
    T: 'modern_industrialization:quantum_barrel',
    H: 'modern_industrialization:quantum_machine_hull',
  }).id('craftoria:mi/shaped/quantum_item_input_hatch');
  e.shaped('modern_industrialization:quantum_item_output_hatch', ['H', 'T'], {
    T: 'modern_industrialization:quantum_barrel',
    H: 'modern_industrialization:quantum_machine_hull',
  }).id('craftoria:mi/shaped/quantum_item_output_hatch');

  oil_drilling_rig(64, 100)
    .fluidOut('16000x minecraft:lava')
    .itemIn('modern_industrialization:gold_drill', 0.25)
    .dimension('minecraft:the_nether')
    .id('craftoria:mi/oil_rig/lava');

  // Prediction Matrix
  assembler(8, 100)
    .itemOut('16x hostilenetworks:prediction_matrix')
    .itemIn('4x #c:glass_panes')
    .itemIn('minecraft:clay_ball')
    .itemIn('minecraft:gold_ingot')
    .itemIn('minecraft:iron_ingot')
    .id('craftoria:mi/assembler/prediction_matrix');

  // Quartz Fiber
  assembler(8, 100)
    .itemOut('3x ae2:quartz_fiber')
    .itemIn('6x #c:glass_blocks')
    .itemIn('3x ae2:certus_quartz_dust')
    .id('craftoria:mi/assembler/quartz_fiber');

  // Fluix ME Glass Cable
  assembler(8, 100)
    .itemOut('4x ae2:fluix_glass_cable')
    .itemIn('ae2:quartz_fiber')
    .itemIn('2x ae2:fluix_crystal')
    .id('craftoria:mi/assembler/fluix_glass_cable');

  centrifuge(8, 100)
    .itemIn("10x #c:foods/raw_meat")
    .fluidOut('100x industrialforegoing:pink_slime')
    .id('craftoria:mi/centrifuge/pink_slime');

});
