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

  e.replaceInput({id: 'industrialization_overdrive:machines/multi_processing_array/craft'}, 'modern_industrialization:assembler', 'extended_industrialization:processing_array');

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

  let madeCuttingRecipeFor = [];

  Ingredient.of('#minecraft:logs').itemIds.forEach((id) => {
    if (id.includes('wood') || id.includes('stripped')) return;
    const modID = id.split(':')[0];

    if (modID === 'minecraft') return;

    if (id === 'biomeswevegone:florus_stem') {
      // Special case for Biomes We've Gone - Florus

      e.recipes.modern_industrialization
        .cutting_machine(2, 100)
        .itemIn('biomeswevegone:florus_stem')
        .itemOut('biomeswevegone:stripped_florus_stem')
        .fluidIn('modern_industrialization:lubricant', 1)
        .id('craftoria:mi/cutting/florus_stem_to_stripped_stem');

      e.recipes.modern_industrialization
        .cutting_machine(2, 100)
        .itemIn('biomeswevegone:florus_wood')
        .itemOut('biomeswevegone:stripped_florus_wood')
        .fluidIn('modern_industrialization:lubricant', 1)
        .id('craftoria:mi/cutting/florus_wood_to_stripped_wood');

      e.recipes.modern_industrialization
        .cutting_machine(2, 100)
        .itemIn('#biomeswevegone:florus_logs')
        .itemOut('6x biomeswevegone:florus_planks')
        .fluidIn('modern_industrialization:lubricant', 1)
        .id('craftoria:mi/cutting/florus_logs_to_planks');

      return;
    }

    const trimmedID = id.split(':')[1].replace('_log', '');
    const strippedLog = `${modID}:stripped_${id.split(':')[1]}`;
    const wood = id.replace('log', 'wood');
    const strippedWood = strippedLog.replace('log', 'wood');
    const plank = id.replace('log', 'planks');

    if (Item.exists(strippedLog)) {
      e.recipes.modern_industrialization
        .cutting_machine(2, 100)
        .itemIn(id)
        .itemOut(strippedLog)
        .fluidIn('modern_industrialization:lubricant', 1)
        .id(`craftoria:mi/cutting/${trimmedID}_log_to_stripped_log`);
    }
    if (Item.exists(wood) && Item.exists(strippedWood)) {
      e.recipes.modern_industrialization
        .cutting_machine(2, 100)
        .itemIn(wood)
        .itemOut(strippedWood)
        .fluidIn('modern_industrialization:lubricant', 1)
        .id(`craftoria:mi/cutting/${trimmedID}_wood_to_stripped_wood`);
    }

    if (!madeCuttingRecipeFor.includes(plank)) {
      if (Item.exists(plank)) {
        if (!Ingredient.of(`#${modID}:${trimmedID}_logs`).empty) {
          e.recipes.modern_industrialization
            .cutting_machine(2, 100)
            .itemIn(`#${modID}:${trimmedID}_logs`)
            .itemOut(`6x ${plank}`)
            .fluidIn('modern_industrialization:lubricant', 1)
            .id(`craftoria:mi/cutting/${trimmedID}_logs_to_planks`);
        } else {
          e.recipes.modern_industrialization
            .cutting_machine(2, 100)
            .itemIn(id)
            .itemOut(`6x ${plank}`)
            .fluidIn('modern_industrialization:lubricant', 1)
            .id(`craftoria:mi/cutting/${trimmedID}_log_to_planks`);
          if (Item.exists(strippedLog)) {
            e.recipes.modern_industrialization
              .cutting_machine(2, 100)
              .itemIn(strippedLog)
              .itemOut(`6x ${plank}`)
              .fluidIn('modern_industrialization:lubricant', 1)
              .id(`craftoria:mi/cutting/stripped_${trimmedID}_log_to_planks`);
          }
          if (Item.exists(wood)) {
            e.recipes.modern_industrialization
              .cutting_machine(2, 100)
              .itemIn(wood)
              .itemOut(`6x ${plank}`)
              .fluidIn('modern_industrialization:lubricant', 1)
              .id(`craftoria:mi/cutting/${trimmedID}_wood_to_planks`);
          }
          if (Item.exists(strippedWood)) {
            e.recipes.modern_industrialization
              .cutting_machine(2, 100)
              .itemIn(strippedWood)
              .itemOut(`6x ${plank}`)
              .fluidIn('modern_industrialization:lubricant', 1)
              .id(`craftoria:mi/cutting/stripped_${trimmedID}_wood_to_planks`);
          }
        }
        madeCuttingRecipeFor.push(plank);
      } else if (modID === 'ars_nouveau' && !madeCuttingRecipeFor.includes(`ars_nouveau:archwood_planks`)) {
        // Special case for Ars Nouveau
        e.recipes.modern_industrialization
          .cutting_machine(2, 100)
          .itemIn('#c:logs/archwood')
          .itemOut(`6x ars_nouveau:archwood_planks`)
          .fluidIn('modern_industrialization:lubricant', 1)
          .id(`craftoria:mi/cutting/archwood_logs_to_planks`);
        madeCuttingRecipeFor.push(`ars_nouveau:archwood_planks`);
      }
    }
  });
});
