ServerEvents.recipes(e => {
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
  e.replaceInput(
    { id: 'utilitarian:utility/chest_minecart' },
    '#c:chests',
    Ingredient.of('#c:chests/wooden').except('expandedstorage:wood_chest')
  );
  e.replaceInput({ id: 'minecraft:chest_minecart' }, '#c:chests', Ingredient.of('#c:chests/wooden').except('expandedstorage:wood_chest'));

  // BWG
  e.replaceInput({ id: 'minecraft:crafting_table' }, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));
  e.replaceInput({ id: 'minecraft:bookshelf' }, '#minecraft:planks', Ingredient.of('#minecraft:planks').except('@biomeswevegone'));

  // Duplicate removals
  /** @type {Special.RecipeId[]} */
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
    'farmersdelight:organic_compost_from_tree_bark',
    'actuallyadditions:tagged_slime_block',
    'endermanoverhaul:ender_eye',
    'minecraft:sticky_piston',
    'dumplings_delight:chinese_cabbage_from_leaves',
  ];
  removeById.forEach(id => {
    e.remove({ id: id });
  });

  // Make wood chests from other mods craftable without conflicts
  const woodChestMods = ['woodwevegot', 'twilightforest'];
  woodChestMods.forEach(mod => {
    e.forEachRecipe({ type: 'minecraft:crafting_shaped', mod: mod, output: '#c:chests/wooden' }, r => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult.id;
      e.shaped(`2x ${output}`, ['#C#', '###', '###'], {
        '#': ingredients[0],
        C: '#c:chests/wooden',
      }).id(r.getId());
    });

    e.forEachRecipe({ type: 'minecraft:crafting_shaped', mod: mod, output: '#c:barrels/wooden' }, r => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult.id;
      e.shaped(`2x ${output}`, ['PSP', 'PBP', 'PSP'], {
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
      let ingredients = r.originalRecipeIngredients[0];
      let output = r.originalRecipeResult.id;
      e.shapeless(output, [ingredients.itemIds[0].replace('planks', 'chest'), 'minecraft:tripwire_hook']).id(r.getId());
    }
  );

  // Misc
  e.replaceInput({ type: 'minecraft:crafting_shaped', output: 'minecraft:hopper' }, '#c:chests', '#c:chests/wooden');
  e.replaceInput({ type: 'minecraft:crafting_shaped', mod: 'handcrafted', input: '#c:chests' }, '#c:chests', '#c:chests/wooden');
  e.replaceInput({ id: 'minecraft:trapped_chest' }, '#c:chests/wooden', 'minecraft:chest');
  e.replaceInput({ id: 'dumplings_delight:chinese_cabbage_crate' }, '#c:crops/cabbage', 'farmersdelight:cabbage_leaf');
  e.replaceInput({ id: 'farmersdelight:cabbage_from_leaves' }, '#c:crops/cabbage', 'farmersdelight:cabbage_leaf');
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
});
