// priority: -1000
/** @type {Special.Item[]|{item: Special.Item, reason: string}[]} */
const globalItemRemovals = [
  'megacells:mega_interface',
  'megacells:cable_mega_interface',
  'megacells:mega_pattern_provider',
  'megacells:cable_mega_pattern_provider',
  'megacells:mega_crafting_accelerator',
  'bigger_ae2:advanced_item_cell_housing',
  'bigger_ae2:quantum_item_storage_cell',
  'bigger_ae2:digital_singularity_item_storage_cell',
  'bigger_ae2:quantum_flux_storage_cell',
  'chisel:chisel',
  'ae2:spatial_anchor',
  'mekanism:upgrade_anchor',
  'mekanism:dimensional_stabilizer',
  'pneumaticcraft:chunkloader_upgrade',
  'industrialforegoing:infinity_nuke',
  'utilitarian:tiny_coal',
  'utilitarian:tiny_charcoal',
  'mffs:anti_personnel_module',
  'mffs:confiscation_module',
  'pylons:infusion_pylon',
  'pylons:potion_filter',
  'xycraft_world:raw_aluminum',
  'xycraft_world:raw_aluminum_block',
  'xycraft_world:aluminum_ore_stone',
  'xycraft_world:aluminum_ore_deepslate',
  'xycraft_world:aluminum_ore_kivi',
  'xycraft_machines:aluminum_dirty_dust',
  'xycraft_machines:aluminum_shard',
  'xycraft_machines:aluminum_crystal',
  'xycraft_machines:aluminum_clump',
  'create:crushed_raw_aluminum',
  'create:crushed_raw_platinum',
];

/** @type {[{id: Special.Item, alt?: string, altId?: Special.Item}]} */
const disabledItems = [
  // { id: 'bigger_ae2:4_core_crafting_accelerator', altId: 'expandedae:exp_crafting_accelerator_4' },
  // { id: 'bigger_ae2:16_core_crafting_accelerator', altId: 'expandedae:exp_crafting_accelerator_16' },
  // { id: 'bigger_ae2:64_core_crafting_accelerator', altId: 'expandedae:exp_crafting_accelerator_64' },
  // { id: 'bigger_ae2:256_core_crafting_accelerator', altId: 'expandedae:exp_crafting_accelerator_256' },
  // { id: 'bigger_ae2:1024_core_crafting_accelerator', altId: 'expandedae:exp_crafting_accelerator_1k' },
];

ServerEvents.recipes(event => {
  /** @type {Special.RecipeId[]} */
  const id = [
    'appflux:inscriber/crush_diamond',
    'appflux:inscriber/crush_emerald',
    'modern_industrialization:electric_age/machine/assembler/replicator',
    'mffs:steel_compound',
    'mffs:steel_ingot',
    'industrialforegoing:laser_drill_ore/raw_materials/iridium',
    'modern_industrialization:materials/uranium/blast_furnace/dust',
    'supplementaries:sus_gravel',
    'supplementaries:sus_sand',
    'mekanism:sawing/torch',
    'ars_elemental:soulbound_1',
    'industrialforegoing:laser_drill_ore/raw_materials/aluminum',
    'occultism:miner/ores/aluminum_ore',
    'occultism:miner/eldritch/raw_aluminum',
    'occultism:miner/master/stellarite',
    'create:crushing/platinum_ore',
    'create:crushing/raw_platinum',
    'create:crushing/raw_platinum_block',
    'xycraft_machines:compat/mek/compressor/aluminum_sheet_temp'
  ];

  /** @type {Special.Item[]} */
  const inputRemovals = [
    'xycraft_world:raw_aluminum',
    'xycraft_world:raw_aluminum_block',
    'xycraft_world:aluminum_ore_stone',
    'xycraft_world:aluminum_ore_deepslate',
    'xycraft_world:aluminum_ore_kivi',
  ];

  id.forEach(id => {
    event.remove({ id: id });
  });

  inputRemovals.forEach(input => {
    event.remove({ input: input });
  });

  globalItemRemovals.forEach(output => {
    event.remove({ output: output });
  });

  disabledItems.forEach(item => {
    if (item.altId) {
      event.shapeless(item.altId, [item.id]);
      event.replaceInput({ input: item.id }, item.id, item.altId);
      event.remove({ output: item.id });
    } else event.remove({ output: item.id });
  });
});

/**
 * Disable item for better alternatives. Works nearly the same way as globalItemRemovals, but allows for item replacement.
 * @param {Special.Item} item - Item to disable.
 * @param {string} [altText] - [OPTIONAL] Preferred alternative item name.
 * @param {Special.Item} [altId] - [OPTIONAL] Alternative itemid.
 */
const disableItem = (item, altText, altId) => {
  if (disabledItems.some(disabled => disabled.id === item)) {
    logInfo(`Item ${item} is already disabled.`);
    return;
  }
  disabledItems.push({ id: item, alt: altText, altId: altId });
};

ServerEvents.generateData('after_mods', event => {

  /** @type {string[]} */
  const miscYeets = [
    'dumplings_delight:loot_modifiers/add_calamari_squid',
    'apotheosis:affixes/armor/attribute/unbound',
    'xycraft_world:worldgen/configured_feature/ore_aluminum',
    'xycraft_world:worldgen/placed_feature/ore_aluminum',
    'xycraft_world:neoforge/biome_modifier/ore_aluminum',
  ];

  /** @type {Special.LootTable[]} */
  const lootTablesToYeet = [
    // Erroring loot tables, removed to prevent log spam (authors don't check for existance of the items/mods...)
    'displaydelight:blocks/df_cactus_soup',
    'displaydelight:blocks/lm_pasta_with_mushroom_sauce',
    'displaydelight:blocks/cd_plated_grilled_corn',
    'displaydelight:blocks/df_matcha_latte',
    'displaydelight:blocks/ed_plated_peanut_butter_honey_sandwich',
    'displaydelight:blocks/ed_plated_peanut_butter_sandwich',
    'displaydelight:blocks/ed_glow_berry_juice',
    'displaydelight:blocks/ed_plated_snickerdoodle',
    'displaydelight:blocks/ed_plated_chocolate_cookie',
    'displaydelight:blocks/od_plated_cabbage_wrapped_elder_guardian',
    'displaydelight:blocks/df_stuffed_cantaloupe',
    'mekanism_extras:blocks/laser_focus_matrix',
    'displaydelight:blocks/ed_mac_and_cheese',
    'displaydelight:blocks/ctd_plated_chicken_roll_slice',
    'mekanism_extras:blocks/forcefield_generator',
    'displaydelight:blocks/ctd_plated_empanada',
    'displaydelight:blocks/lm_pufferfish_broth',
    'displaydelight:blocks/lm_sweet_berry_custard',
    'displaydelight:blocks/df_plated_nut_butter_and_jelly_sandwich',
    'displaydelight:blocks/df_ender_nectar',
    'displaydelight:blocks/ad_plated_gongylidia_bruschetta',
    'displaydelight:blocks/ed_small_plated_sweet_roll',
    'displaydelight:blocks/pd_pineapple_milk_shake',
    'displaydelight:blocks/ctd_hearty_salad',
    'displaydelight:blocks/cd_plated_classic_corn_dog',
    'displaydelight:blocks/ctd_plated_midori_roll_slice',
    'displaydelight:blocks/ctd_small_plated_egg_roll',
    'displaydelight:blocks/df_plated_deluxe_cheeseburger',
    'displaydelight:blocks/ad_maggot_salad',
    'displaydelight:blocks/df_small_plated_salmonberry_pie_slice',
    'displaydelight:blocks/lm_roasted_mutton_rack',
    'displaydelight:blocks/ed_plated_sweet_berry_jelly_sandwich',
    'displaydelight:blocks/ctd_plated_fish_taco',
    'displaydelight:blocks/ad_plated_bunfungus_sandwich',
    'displaydelight:blocks/ed_peperonata',
    'displaydelight:blocks/ctd_plated_chicken_taco',
    'displaydelight:blocks/df_matcha_milkshake',
    'animal_pen:grant_book_on_first_join',
    'mekanism_extras:blocks/block_naquadah',
    'displaydelight:blocks/lm_omurice',
    'displaydelight:blocks/lm_hearty_lunch',
    'displaydelight:blocks/ctd_plated_pork_wrap',
    'displaydelight:blocks/ctd_small_plated_calamari_roll',
    'displaydelight:blocks/ctd_creamed_corn',
    'displaydelight:blocks/ed_peanut_honey_soup',
    'displaydelight:blocks/lm_rice_pudding',
    'displaydelight:blocks/ctd_plated_midori_roll',
    'displaydelight:blocks/ad_plated_bison_burger',
    'displaydelight:blocks/ctd_small_plated_pufferfish_roll',
    'displaydelight:blocks/df_plated_cheeseburger',
    'displaydelight:blocks/cd_creamy_corn_drink',
    'displaydelight:blocks/df_small_plated_pumpkin_pie_slice',
    'displaydelight:blocks/ed_cinnamon_rice',
    'irons_spellbooks:test/ring_gen_break_me',
    'displaydelight:blocks/df_plated_smore',
    'displaydelight:blocks/fd_festive_chicken',
    'displaydelight:blocks/ed_sweet_potato_salad',
    'displaydelight:blocks/ctd_spicy_curry',
    'displaydelight:blocks/df_cactus_chili',
    'displaydelight:blocks/cd_nachos_bowl',
    'displaydelight:blocks/lm_tomato_egg_soup',
    'displaydelight:blocks/ctd_plated_mutton_sandwich',
    'displaydelight:blocks/ed_asparagus_soup_creamy',
    'displaydelight:blocks/ed_plated_grilled_cheese',
    'displaydelight:blocks/pd_small_plated_pineapple_pie_slice',
    'displaydelight:blocks/df_salmonberry_ice_cream',
    'mekanism_extras:blocks/lead_coated_glass',
    'displaydelight:blocks/pd_pineapple_juice',
    'displaydelight:blocks/ctd_plated_tropical_roll',
    'displaydelight:blocks/cd_cornbread_stuffing',
    'displaydelight:blocks/ctd_plated_beef_burrito',
    'displaydelight:blocks/ed_asparagus_soup',
    'displaydelight:blocks/lm_mushroom_pot_pie',
    'displaydelight:blocks/df_matcha_ice_cream',
    'displaydelight:blocks/ctd_fried_eggplant_pasta',
    'displaydelight:blocks/ctd_plated_elote',
    'displaydelight:blocks/ad_acacia_blossom_soup',
    'displaydelight:blocks/df_plated_wrapped_cantaloupe',
    'displaydelight:blocks/plated_cake_slice',
    'displaydelight:blocks/df_plated_cooked_marshmallow_stick',
    'displaydelight:blocks/ctd_small_plated_midori_roll_slice',
    'displaydelight:blocks/ed_asparagus_and_bacon_cheesy',
    'displaydelight:blocks/ed_plated_sugar_cookie',
    'mekanism_extras:blocks/block_raw_naquadah',
    'displaydelight:blocks/lm_potato_soup',
    'displaydelight:blocks/ctd_plated_eggplant_burger',
    'displaydelight:blocks/df_berry_matcha_latte',
    'displaydelight:blocks/ctd_plated_rice_ball',
    'displaydelight:blocks/ad_kangaroo_pasta',
    'displaydelight:blocks/ed_small_plated_glow_berry_sweet_roll',
    'displaydelight:blocks/df_field_salad',
    'displaydelight:blocks/ed_cinnamon_apples',
    'displaydelight:blocks/ed_plated_sweet_roll',
    'displaydelight:blocks/ctd_small_plated_cut_pickle',
    'displaydelight:blocks/lm_red_soup',
    'displaydelight:blocks/cd_creamed_corn',
    'mekanism_extras:blocks/naquadah_reactor_casing',
    'displaydelight:blocks/fd_christmas_tea',
    'displaydelight:blocks/df_plated_cantaloupe_popsicle',
    'displaydelight:blocks/ad_lobster_pasta',
    'displaydelight:blocks/ctd_small_plated_rice_ball',
    'displaydelight:blocks/ed_plated_berry_sweet_roll',
    'displaydelight:blocks/ctd_plated_calamari_roll',
    'displaydelight:blocks/ctd_plated_chicken_roll',
    'displaydelight:blocks/ctd_plated_pufferfish_roll',
    'displaydelight:blocks/ed_small_plated_cheese_slice',
    'displaydelight:blocks/ed_apple_juice',
    'displaydelight:blocks/fd_salmon_verrines',
    'displaydelight:blocks/ctd_small_plated_chicken_roll_slice',
    'displaydelight:blocks/ed_sweet_berry_juice',
    'displaydelight:blocks/ed_plated_cheese_sandwich',
    'displaydelight:blocks/ed_plated_glow_berry_sweet_roll',
    'displaydelight:blocks/cd_corn_soup',
    'displaydelight:blocks/cd_plated_taco',
    'mekanism_extras:blocks/naquadah_reactor_logic_adapter',
    'displaydelight:blocks/ad_kangaroo_stew',
    'displaydelight:blocks/pd_pineapple_ice_cream',
    'displaydelight:blocks/lm_cod_deluxe',
    'displaydelight:blocks/ed_small_plated_berry_sweet_roll',
    'displaydelight:blocks/ed_plated_glow_berry_jelly_sandwich',
    'displaydelight:blocks/ctd_small_plated_tropical_roll',
    'displaydelight:blocks/df_salmonberry_milkshake',
    'mekanism_extras:blocks/naquadah_reactor_port',
    'displaydelight:blocks/pd_pineapple_fried_rice',
    'displaydelight:blocks/lm_chicken_curry',
    'displaydelight:blocks/df_sinigang',
    'displaydelight:blocks/df_plated_cantaloupe_bread',
    'displaydelight:blocks/ctd_plated_avocado_toast',
    'displaydelight:blocks/ctd_plated_egg_roll',
    'displaydelight:blocks/ed_peanut_salad',
    'mekanism_extras:blocks/naquadah_reactor_controller',
  ];

  /** @type {Special.RecipeId[]} */
  const recipesToYeet = [
    // Erroring recipes, removed to prevent log spam (authors don't check for existance of the items/mods... and some of these are just in the wrong namespace too...)
    'farmersdelight:integration/create/milling/wild_tomatoes',
    'farmersdelight:integration/create/milling/wild_rice',
    'farmersdelight:cutting/echo_door',
    'create:crushing/gloomslate_coal_ore',
    'create:cutting/echo_wood',
    'farmersdelight:integration/create/mixing/cabbage_slice_from_mixing',
    'farmersdelight:cutting/echo_log',
    'create:crushing/gloomslate_iron_ore',
    'create:cutting/stripped_echo_wood',
    'create:crushing/gloomslate_gold_ore',
    'create:crushing/gloomslate_emerald_ore',
    'farmersdelight:integration/create/milling/rice_panicle',
    'create:cutting/echo_log',
    'cataclysm_spellbooks:abyss_spell_book_old',
    'farmersdelight:integration/create/milling/wild_onions',
    'farmersdelight:cutting/echo_wood',
    'create:crushing/sculk_stone_iron_ore',
    'farmersdelight:integration/create/milling/wild_cabbages',
    'farmersdelight:integration/create/filling/chocolate_pie',
    'create:crushing/sculk_stone_emerald_ore',
    'create:crushing/sculk_stone_gold_ore',
    'farmersdelight:integration/create/milling/wild_potatoes',
    'farmersdelight:cutting/echo_trapdoor',
    'create:crushing/sculk_stone_copper_ore',
    'farmersdelight:integration/create/milling/wild_beetroots',
    'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing',
    'farmersdelight:cutting/echo_sign',
    'moderately:vanishing',
    'create:crushing/gloomslate_redstone_ore',
    'create:crushing/gloomslate_diamond_ore',
    'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
    'create:crushing/sculk_stone_diamond_ore',
    'twilightforest:jeed/poison',
    'create:crushing/sculk_stone_lapis_ore',
    'farmersdelight:integration/create/milling/wild_carrots',
    'supplementaries:integration/sconce_haunting',
    'create:crushing/gloomslate_copper_ore',
    'create:crushing/sculk_stone_redstone_ore',
    'create:crushing/gloomslate_lapis_ore',
    'farmersdelight:cutting/echo_hanging_sign',
    'create:crushing/sculk_stone_coal_ore',
    'create:cutting/stripped_echo_log',
    'mekaweapons:module_arrowvelocity_unit',
    'mechtrowel:wand_upgrade'
  ];

  /** @type {string[]} */
  const advancementsToYeet = [
    // Erroring advancements, removed to prevent log spam
    'moredelight:main/get_mashed_potatoes',
    'dungeons_arise:find_thornborn_towers',
    'dungeons_arise:find_fishing_hut',
    'moredelight:main/get_creamy_pasta_with_ham',
    'moredelight:main/get_cooked_rice_with',
  ];

  /**
   * @param {string} path - The path to the data.
   * @param {string} [type] - The type of data to be removed. If not provided, the path will be used as is.
   */
  const Yeet = (path, type) => event.json(`${ID.namespace(path)}:${type ? `${type}/` : ''}${ID.path(path)}`, { 'neoforge:conditions': [{ type: 'neoforge:false' }] });

  lootTablesToYeet.forEach(id => Yeet(id, 'loot_table'));
  recipesToYeet.forEach(id => Yeet(id, 'recipe'));
  advancementsToYeet.forEach(id => Yeet(id, 'advancement'));
  miscYeets.forEach(id => Yeet(id));
});
