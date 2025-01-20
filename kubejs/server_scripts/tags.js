ServerEvents.tags('item', (e) => {
  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');
  e.add('c:storage_blocks/amethyst', 'minecraft:amethyst_block');
  e.add('c:storage_blocks/fluix', 'ae2:fluix_block');
  e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');

  e.add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet']);
  e.add('almostunified:hide', ['artifacts:eternal_steak', 'artifacts:everlasting_beef']);

  e.remove('c:storage_blocks/silicon', 'extendedae:silicon_block');
  e.removeAll('apothic_enchanting:boon_drops');

  // Crops & Seeds
  e.add('c:seeds/cabbage', ['farmersdelight:cabbage_seeds', 'dumplings_delight:chinese_cabbage_seeds']);
  e.add('c:seeds/tomato', 'farmersdelight:tomato_seeds');
  e.add('c:seeds/rice', 'sushigocrafting:rice_seeds');
  e.add('c:seeds/eggplant', 'dumplings_delight:eggplant_seeds');
  e.add('c:crops/garlic', 'dumplings_delight:garlic');
  e.add('c:crops/green_onion', 'dumplings_delight:greenonion');

  e.remove('c:crops/garlic', 'dumplings_delight:garlic_clove');
  e.remove('c:foods/garlic', 'dumplings_delight:garlic_clove');

  // Plastic
  e.add('c:plastics', ['pneumaticcraft:plastic']);

  // Knives
  e.add('occultism:tools/knife', '#c:tools/knife');

  // Machine Frames
  e.add('craftoria:hulls/advanced', 'industrialforegoing:machine_frame_advanced');
  e.add('craftoria:hulls/advanced', 'modern_industrialization:basic_machine_hull');
  e.add('craftoria:hulls/advanced', 'mekanism:ultimate_tier_installer');

  // Curios
  e.add('curios:curio', 'integratedterminals:terminal_storage_portable');

  // Chisel Reborn
  Ingredient.of('@chisel').itemIds.forEach((id) => {
    if (id !== 'chisel:chisel') {
      const block = id.split(':')[1].split('/')[1];
      e.add(`chisel:${block}`, id);
    }
  });

  e.add('craftoria:farmersfood', [
    '@mynethersdelight',
    '@fruitsdelight',
    '@twilightdelight',
    '@ends_delight',
    '@barbequesdelight',
    '@rusticdelight',
    '@dumplings_delight',
    '@moredelight',
    '@oceansdelight',
    '@farmersdelight',
  ]);

  // Some tag fixes
  e.add('minecraft:swords', ['wstweaks:blaze_blade', 'wstweaks:lava_blade', 'industrialforegoing:infinity_hammer']);
  e.add('minecraft:pickaxes', ['industrialforegoing:infinity_drill']);
  e.add('minecraft:shovels', ['industrialforegoing:infinity_drill']);
  e.add('minecraft:axes', ['industrialforegoing:infinity_saw']);
  e.add('craftoria:tridents', ['industrialforegoing:infinity_trident']);
  e.add('c:tools/melee_weapon', ['#craftoria:tridents']);
  e.add('c:tools/ranged_weapon', ['#craftoria:tridents']);
  e.add('c:tools/spear', ['#craftoria:tridents']);
  e.add('minecraft:enchantable/trident', ['#craftoria:tridents']);
  e.add('minecraft:enchantable/vanishing', ['#craftoria:tridents']);
  e.add('minecraft:enchantable/durability', ['#craftoria:tridents']).remove('industrialforegoing:infinity_trident');
});

ServerEvents.tags('block', (e) => {
  e.add('ftbchunks:interact_whitelist', [
    '@waystones',
    'minecraft:crafting_table',
    'minecraft:ender_chest',
    'minecraft:enchanting_table',
    'minecraft:loom',
    'minecraft:smithing_table',
    'minecraft:stonecutter',
    '#minecraft:anvil',
    'minecraft:bell',
    'yigd:grave',
    '#lootr:containers',
  ]);

  e.add('ae2:blacklisted/spatial', ['justdirethings:time_crystal_budding_block']);
  e.add('mekanism:cardboard_blacklist', ['justdirethings:time_crystal_budding_block']);

  global.dyeColors.forEach((color) => {
    e.add('c:glass_blocks', `#chipped:${color}_stained_glass`);
    e.add('c:glass_panes', `#chipped:${color}_stained_glass_pane`);
  });

  e.add('c:glass_blocks', ['#chipped:glass']);
  e.add('c:glass_panes', ['#chipped:glass_pane']);

  e.add('minecraft:mineable/pickaxe', [
    '#c:glass_blocks',
    '#c:glass_panes',
    '#chipped:glowstone',
    /^mekanism:(basic|advanced|elite|ultimate)_(universal_cable|mechanical_pipe|pressurized_tube|logistical_transporter|thermodynamic_conductor)$/,
    'mekanism:diversion_transporter',
    'mekanism:restrictive_transporter',
    '#c:skulls',
    '@glassential',
  ]);

  e.add('minecraft:mineable/axe', ['mekanism:cardboard_box']);

  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');

  e.remove('c:storage_blocks/silicon', 'extendedae:silicon_block');

  // Block tags for quest usage
  e.add('craftoria:ae2_buddings', /^ae2:.*_budding_quartz/);
  e.add('craftoria:exae_buddings', /^extendedae:entro_budding_/);
});

ServerEvents.tags('fluid', (e) => {
  e.add('c:lubricant', 'modern_industrialization:lubricant');
  e.add('c:plantoil', 'modern_industrialization:plant_oil');
  e.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil');

  e.add('c:antimatter', 'craftoria:antimatter');
});

ServerEvents.tags('entity_type', (e) => {
  e.add('ftbchunks:entity_interact_whitelist', ['minecraft:villager', 'minecraft:wandering_trader']);

  e.add('mob_grinding_utils:no_swab', ['artifacts:mimic', 'minecraft:warden', '#c:bosses', /^occultism:(?!possessed).*$/]);
});
