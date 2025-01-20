ServerEvents.recipes((e) => {
  // Fixes Handcrafted Cupboards and Functional Storage 1x1 Drawers conflicting
  Ingredient.of('#handcrafted:cupboards').itemIds.forEach((item) => {
    e.remove({output: item});
    let item2 = item.split(':')[1].replace('_cupboard', '');
    e.shaped(`3x ${item}`, ['AAA', 'BCB', 'AAA'], {
      A: `minecraft:${item2}_planks`,
      B: `minecraft:${item2}_slab`,
      C: '#c:chests',
    }).id(`craftoria:handcrafted/${item2}_cupboard`);
  });

  // Fixes Handcrafted Wool Sheets conflicting with Comforts Sleeping Bags
  global.dyeColors.forEach((wool) => {
    e.remove({type: 'minecraft:crafting_shaped', output: `handcrafted:${wool}_sheet`});

    // Sheets
    e.shaped(`handcrafted:${wool}_sheet`, ['AAA'], {
      A: `minecraft:${wool}_wool`,
    }).id(`handcrafted:${wool}_sheet`);
  });

  e.shaped('3x handcrafted:terracotta_thin_pot', ['A A', 'A A'], {
    A: 'minecraft:terracotta',
  }).id('handcrafted:terracotta_thin_pot');

  // Food mods
  e.replaceInput({id: 'farmersdelight:cabbage_from_leaves'}, '#c:cabbage', 'farmersdelight:cabbage_leaf');
  e.replaceInput({id: 'dumplings_delight:chinese_cabbage_crate'}, '#c:cabbage', 'farmersdelight:cabbage_leaf');
  e.remove({id: 'dumplings_delight:chinese_cabbage_leaf'});

  // Ars Nouveau
  e.remove({id: 'ars_nouveau:smooth_sourcestone_to_sourcestone'});
  e.stonecutting('ars_nouveau:sourcestone', 'ars_nouveau:smooth_sourcestone');

  // Macaw's
  e.shaped('mcwholidays:stars_wall_deco', [' D ', 'DPD'], {
    D: '#c:dyes/yellow',
    P: 'minecraft:paper',
  }).id('mcwholidays:stars_wall_deco');

  // Thaumon
  e.replaceInput({id: 'thaumon:ancient_stone_bricks'}, 'thaumon:ancient_stone', 'thaumon:polished_ancient_stone');

  // Minecarts
  e.replaceOutput({id: 'utilitarian:utility/hopper_minecart'}, 'minecraft:chest_minecart', 'minecraft:hopper_minecart');
  e.replaceOutput({id: 'utilitarian:utility/tnt_minecart'}, 'minecraft:chest_minecart', 'minecraft:tnt_minecart');
  e.replaceInput({id: 'utilitarian:utility/chest_minecart'}, '#c:chests', Ingredient.of('#c:chests/wooden').except('expandedstorage:wood_chest'));
  e.replaceInput({id: 'minecraft:chest_minecart'}, '#c:chests', Ingredient.of('#c:chests/wooden').except('expandedstorage:wood_chest'));

  // BWG
  e.replaceInput({id: 'minecraft:crafting_table'}, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));
  e.replaceInput({id: 'minecraft:bookshelf'}, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));

  // Duplicate removals
  let removeById = [
    'dumplings_delight:eggplant_seeds',
    'duckling:cake',
    'utilitarian:utility/logs_to_chests',
    'minecraft:cake',
    'mekanism:sulfur_dye',
    'minecraft:coal_from_blasting_deepslate_coal_ore',
    'mekanism:processing/lead/ingot/from_ore_blasting',
    'mekanism:processing/tin/ingot/from_ore_blasting',
    'minecraft:coal_from_smelting_deepslate_coal_ore',
    'mekanism:processing/lead/ingot/from_ore_smelting',
    'integrateddynamics:smelting/menril_log_filled_coal',
    'integrateddynamics:smelting/menril_log_coal',
    'mekanism:processing/tin/ingot/from_ore_smelting',
  ];
  removeById.forEach((id) => {
    e.remove({id: id});
  });
});

ServerEvents.tags('item', (e) => {
  // ES Crystal Ingredient Conflicts
  let crystals = {blaze: [], light: []};
  Ingredient.of('#eternal_starlight:blaze_crystal_ingredients').itemIds.forEach((item) => {
    crystals.blaze.push(item);
  });
  Ingredient.of('#eternal_starlight:light_crystal_ingredients').itemIds.forEach((item) => {
    crystals.light.push(item);
  });
  e.remove('eternal_starlight:lunar_crystal_ingredients', crystals.light);
  e.remove('eternal_starlight:light_crystal_ingredients', crystals.blaze);
});
