ServerEvents.recipes(e => {
  const { mixer } = e.recipes.modern_industrialization;

  e.shaped('2x displaydelight:small_food_plate', ['AA'], {
    A: '#minecraft:wooden_pressure_plates',
  }).id('displaydelight:small_food_plate');

  e.shaped('2x displaydelight:food_plate', ['A A', ' A '], {
    A: '#minecraft:wooden_pressure_plates',
  }).id('displaydelight:food_plate');

  e.shaped('3x handcrafted:wood_plate', ['ABA'], {
    A: '#minecraft:wooden_slabs',
    B: '#minecraft:planks',
  }).id('handcrafted:wood_plate');

  // Fixes Handcrafted Cupboards and Functional Storage 1x1 Drawers conflicting
  Ingredient.of('#handcrafted:cupboards').itemIds.forEach(item => {
    e.remove({ output: item });
    let item2 = item.split(':')[1].replace('_cupboard', '');
    e.shaped(`3x ${item}`, ['AAA', 'BCB', 'AAA'], {
      A: `minecraft:${item2}_planks`,
      B: `minecraft:${item2}_slab`,
      C: '#c:chests/wooden',
    }).id(`craftoria:handcrafted/${item2}_cupboard`);
  });

  // Fixes Handcrafted Wool Sheets conflicting with Comforts Sleeping Bags
  Color.DYE.forEach(wool => {
    e.remove({ type: 'minecraft:crafting_shaped', output: `handcrafted:${wool}_sheet` });

    // Sheets
    e.shaped(`handcrafted:${wool}_sheet`, ['AAA'], {
      A: `minecraft:${wool}_wool`,
    }).id(`handcrafted:${wool}_sheet`);
  });

  e.shaped('3x handcrafted:terracotta_thin_pot', ['A A', 'A A'], {
    A: 'minecraft:terracotta',
  }).id('handcrafted:terracotta_thin_pot');

  // Food mods
  e.replaceInput({ id: 'farmersdelight:cabbage_from_leaves' }, '#c:cabbage', 'farmersdelight:cabbage_leaf');
  e.replaceInput({ id: 'dumplings_delight:chinese_cabbage_crate' }, '#c:cabbage', 'farmersdelight:cabbage_leaf');
  e.remove({ id: 'dumplings_delight:chinese_cabbage_leaf' });

  // Ars Nouveau
  e.remove({ id: 'ars_nouveau:smooth_sourcestone_to_sourcestone' });
  e.stonecutting('ars_nouveau:sourcestone', 'ars_nouveau:smooth_sourcestone');

  // Macaw's
  e.shaped('mcwholidays:stars_wall_deco', [' D ', 'DPD'], {
    D: '#c:dyes/yellow',
    P: 'minecraft:paper',
  }).id('mcwholidays:stars_wall_deco');

  // Thaumon
  e.replaceInput({ id: 'thaumon:ancient_stone_bricks' }, 'thaumon:ancient_stone', 'thaumon:polished_ancient_stone');

  // Minecarts
  e.replaceOutput({ id: 'utilitarian:utility/hopper_minecart' }, 'minecraft:chest_minecart', 'minecraft:hopper_minecart');
  e.replaceOutput({ id: 'utilitarian:utility/tnt_minecart' }, 'minecraft:chest_minecart', 'minecraft:tnt_minecart');

  // BWG
  e.replaceInput({ id: 'minecraft:crafting_table' }, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));
  e.replaceInput({ id: 'minecraft:bookshelf' }, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));

  // Duplicate removals
  /** @type {Special.RecipeId[]} */
  let removeById = [
    'dumplings_delight:eggplant_seeds',
    'duckling:cake',
    'farmersdelight:cake_from_milk_bottle',
    'utilitarian:utility/logs_to_chests',
    'mekanism:sulfur_dye',
    'minecraft:coal_from_blasting_deepslate_coal_ore',
    'mekanism:processing/lead/ingot/from_ore_blasting',
    'mekanism:processing/tin/ingot/from_ore_blasting',
    'minecraft:coal_from_smelting_deepslate_coal_ore',
    'mekanism:processing/lead/ingot/from_ore_smelting',
    'integrateddynamics:smelting/menril_log_filled_coal',
    'integrateddynamics:smelting/menril_log_coal',
    'mekanism:processing/tin/ingot/from_ore_smelting',
    'farmersdelight:organic_compost_from_tree_bark',
    'farmersdelight:paper_from_tree_bark',
    'actuallyadditions:tagged_slime_block',
    'endermanoverhaul:ender_eye',
    'dumplings_delight:chinese_cabbage_from_leaves',
    'supplementaries:awnings/awning_dark_gray',
    'refurbished_furniture:dough',
    'actuallyadditions:tagged_sticky_piston',
    'xycraft_machines:shaped/sticky_piston_tagged',
    'biomeswevegone:pumpkin_pie',
    'duckling:pumpkin_pie',
    'xycraft_machines:shaped/lead_tagged',
  ];

  e.shaped('2x minecraft:lead', [
    'SS ',
    'SB ',
    '  S'
  ], {
    S: '#c:strings',
    B: '#c:slimeballs',
  }).id('minecraft:lead');

  e.shaped('cake', [
    'MMM',
    'SES',
    'WWW'
  ], {
    M: '#c:foods/milk',
    S: '#c:sugars',
    E: '#c:eggs',
    W: '#c:crops/wheat',
  }).id('minecraft:cake');

  e.shaped('sticky_piston', ['S', 'P'], {
    S: '#c:slimeballs',
    P: 'minecraft:piston',
  }).id('minecraft:sticky_piston');

  let types = ['terracotta', 'stained_glass', 'stained_glass_pane_from_glass_pane'];
  Color.DYE.forEach(dye => {
    types.forEach(type => {
      removeById.push(`minecraft:${dye}_${type}`);
    });

    e.shaped(`2x mcwwindows:${dye}_mosaic_glass`, ['DGG', 'GGG', 'GGG'], {
      D: `#c:dyes/${dye}`,
      G: `minecraft:${dye}_stained_glass`,
    }).id(`mcwwindows:${dye}_mosaic_glass`);

    if (Item.exists(`mcwholidays:${dye}_ornament`))
      e.stonecutting(`mcwholidays:${dye}_ornament`, `minecraft:${dye}_stained_glass`).id(`mcwholidays:${dye}_ornament`);
    // why you gotta be like this???
    else if (dye === 'light_gray') e.stonecutting('mcwholidays:silver_ornament', 'minecraft:light_gray_stained_glass').id('mcwholidays:silver_ornament');

    e.remove({ id: `arts_and_crafts:dye_${dye}_carpet_with_bleached_carpet` });
    e.remove({ id: `arts_and_crafts:dye_${dye}_wool_with_bleached_wool` });
    e.remove({ id: `arts_and_crafts:dye_${dye}_bed_with_bleached_bed` });

    e.remove({ id: `utilitarian:utility/redying/${dye}_candle` });
    e.shapeless(`minecraft:${dye}_candle`, ['#craftoria:vanilla_candles', `#c:dyes/${dye}`]).id(`minecraft:${dye}_candle`);
    mixer(2, 100)
      .itemOut(`minecraft:${dye}_candle`)
      .itemIn(`#c:dyes/${dye}`)
      .itemIn('#craftoria:vanilla_candles')
      .id(`modern_industrialization:dyes/${dye}/mixer/candle`);

    e.shapeless(`occultism:large_candle_${dye}`, ['#occultism:candles', `#c:dyes/${dye}`]).id(`occultism:crafting/large_candle_${dye}`);
  });

  removeById.forEach(id => {
    e.remove({ id: id });
  });

  e.shaped('3x mcwwindows:bamboo_shutter', ['B', 'B', 'B'], {
    B: 'minecraft:bamboo_trapdoor',
  }).id('mcwwindows:bamboo_shutter');

  ['oak_log', 'spruce_log', 'birch_log', 'jungle_log', 'acacia_log', 'dark_oak_log', 'mangrove_log', 'cherry_log', 'bamboo_block', 'crimson_stem', 'warped_stem'].forEach(shaft => {
    let shaft2 = shaft.replace('_log', '').replace('_stem', '').replace('_block', '');
    e.stonecutting(`4x createcasing:${shaft2}_shaft`, `minecraft:stripped_${shaft}`).id(`createcasing:crafting/shafts/${shaft2}_shaft`);
  });


  // Make wood chests from other mods craftable without conflicts
  const woodChestMods = ['woodwevegot', 'twilightforest'];
  woodChestMods.forEach(mod => {
    e.forEachRecipe({ type: 'minecraft:crafting_shaped', mod: mod, output: '#c:chests/wooden' }, r => {
      let { originalRecipeIngredients: ingredients, originalRecipeResult: result } = r;
      e.shaped(`2x ${result.id}`, ['#C#', '###', '###'], {
        '#': ingredients[0],
        C: '#c:chests/wooden',
      }).id(r.getId());
    });

    e.forEachRecipe({ type: 'minecraft:crafting_shaped', mod: mod, output: '#c:barrels/wooden' }, r => {
      let { originalRecipeIngredients: ingredients, originalRecipeResult: result } = r;
      e.shaped(`2x ${result.id}`, ['PSP', 'PBP', 'PSP'], {
        P: ingredients[0],
        S: ingredients[1],
        B: '#c:barrels/wooden',
      }).id(r.getId());
    });
  });

  e.forEachRecipe(
    {
      type: 'minecraft:crafting_shaped',
      mod: 'twilightforest',
      output: /_trapped_chest$/,
    },
    r => {
      let { originalRecipeIngredients: ingredients, originalRecipeResult: result } = r;
      e.shapeless(result.id, [ingredients[0].itemIds[0].replace('planks', 'chest'), 'minecraft:tripwire_hook']).id(r.getId());
    }
  );

  // Misc
  e.replaceInput({ type: 'minecraft:crafting_shaped', output: 'minecraft:hopper' }, '#c:chests', '#c:chests/wooden');
  e.replaceInput({ type: 'minecraft:crafting_shaped', mod: 'handcrafted', input: '#c:chests' }, '#c:chests', '#c:chests/wooden');
  e.replaceInput({ id: 'minecraft:trapped_chest' }, '#c:chests/wooden', 'minecraft:chest');
  e.replaceInput({ id: 'dumplings_delight:chinese_cabbage_crate' }, '#c:crops/cabbage', 'farmersdelight:cabbage_leaf');
  e.replaceInput({ id: 'farmersdelight:cabbage_from_leaves' }, '#c:crops/cabbage', 'farmersdelight:cabbage_leaf');

  e.shaped('crystalix:crystalix_wand', [
    '  D',
    ' S ',
    'S  ',
  ], {
    D: '#c:gems/amethyst',
    S: 'minecraft:stick',
  }).id('crystalix:crystalix_wand');
});

ServerEvents.tags('item', e => {
  // ES Crystal Ingredient Conflicts
  let crystals = { blaze: [], light: [] };
  Ingredient.of('#eternal_starlight:blaze_crystal_ingredients').itemIds.forEach(item => {
    crystals.blaze.push(item);
  });
  Ingredient.of('#eternal_starlight:light_crystal_ingredients').itemIds.forEach(item => {
    crystals.light.push(item);
  });
  e.remove('eternal_starlight:lunar_crystal_ingredients', crystals.light);
  e.remove('eternal_starlight:light_crystal_ingredients', crystals.blaze);

  e.remove('c:chests/wooden', 'minecraft:trapped_chest');

  e.add('craftoria:vanilla_candles', ['minecraft:candle', `/^minecraft:(${Color.DYE.keySet().toArray().join('|')})_candle$/`]);
});
