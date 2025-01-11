////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((e) => {
  // Obsidian Dust
  miMacerator(e, ['minecraft:obsidian', 1], [['mekanism:dust_obsidian', 4]], 2, 200);

  // Ores > Raw
  miMacerator(e, ['#c:ores/silver', 1], [['modern_industrialization:raw_silver', 3]], 2, 100);
  miMacerator(e, ['#c:ores/mithril', 1], [['irons_spellbooks:raw_mithril', 3]], 2, 100);
  miMacerator(e, ['#c:ores/black_quartz', 1], [['actuallyadditions:black_quartz', 2]], 2, 100);

  e.replaceInput(
    {id: 'industrialization_overdrive:machines/multi_processing_array/craft'},
    'modern_industrialization:assembler',
    'extended_industrialization:processing_array'
  );

  // Mekanism Compat
  miMacerator(
    e,
    ['#c:ores/fluorite', 1],
    [
      ['mekanism:dust_fluorite', 4],
      ['mekanism:dust_fluorite', 4, 0.75],
    ],
    2,
    100
  );
  miCompressor(e, ['#c:dusts/fluorite', 1], ['mekanism:fluorite_gem', 1], 2, 50);

  e.shaped('mi_tweaks:flux_transformer', ['SS ', ' HC', 'SS '], {
    S: 'modern_industrialization:superconductor_cable',
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables',
  }).id('mi_tweaks:flux_transformer');

  ['gold', 'iron'].forEach((material) => {
    e.replaceInput({mod: 'modern_industrialization'}, `#c:gears/${material}`, `modern_industrialization:${material}_gear`);
  });

  let cuttingMachine = (output, input) => {
    e.recipes.modern_industrialization
      .cutting_machine(2, 100)
      .itemIn(input)
      .itemOut(output)
      .fluidIn('1x modern_industrialization:lubricant')
      .id(`craftoria:mi/cutting/${input.split(':')[1]}_to_${output.split(':')[1]}`);
  };

  let madeCuttingRecipeFor = [];
  Ingredient.of('#minecraft:logs').itemIds.forEach((id) => {
    if ((!id.includes('log') && !id.includes('stem')) || id.includes('stripped')) return;
    const {modID, itemId} = {modID: id.split(':')[0], itemId: id.split(':')[1]};

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
});
