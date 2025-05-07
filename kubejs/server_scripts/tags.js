ServerEvents.tags('item', e => {
  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');
  e.add('c:storage_blocks/amethyst', 'minecraft:amethyst_block');
  e.add('c:storage_blocks/fluix', 'ae2:fluix_block');
  e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');

  e.add('almostunified:hide', ['artifacts:eternal_steak', 'artifacts:everlasting_beef']);
  e.add('ars_controle:ritual_blacklist', ['ars_nouveau:ritual_flight']);

  e.remove('c:storage_blocks/silicon', 'extendedae:silicon_block');
  e.removeAll('apothic_enchanting:boon_drops');

  // Crops & Seeds
  e.add('c:seeds/cabbage', ['farmersdelight:cabbage_seeds', 'dumplings_delight:chinese_cabbage_seeds']);
  e.add('c:seeds/tomato', 'farmersdelight:tomato_seeds');
  e.add('c:seeds/rice', 'sushigocrafting:rice_seeds');
  e.add('c:seeds/eggplant', 'dumplings_delight:eggplant_seeds');
  e.add('c:crops/garlic', 'dumplings_delight:garlic');
  e.add('c:crops/green_onion', 'dumplings_delight:greenonion');

  e.add('actuallyadditions:coffee_beans', 'rusticdelight:roasted_coffee_beans');

  e.remove('c:crops/garlic', 'dumplings_delight:garlic_clove');
  e.remove('c:foods/garlic', 'dumplings_delight:garlic_clove');

  // Plastic
  e.add('c:plastics', ['pneumaticcraft:plastic', 'mekanism:hdpe_sheet']);

  // Dough / Flour
  e.add('c:doughs', ['refurbished_furniture:dough', 'farmersdelight:wheat_dough']);
  e.add('c:flours', ['pneumaticcraft:wheat_flour', 'refurbished_furniture:wheat_flour']);

  // Knives
  e.add('occultism:tools/knife', '#c:tools/knife');

  e.remove('c:foods/raw_calamari', 'rusticdelight:calamari_slice');

  // Machine Frames
  e.add('craftoria:hulls/advanced', [
    'industrialforegoing:machine_frame_advanced',
    'modern_industrialization:basic_machine_hull',
    'mekanism:ultimate_tier_installer',
  ]);

  // Chisel Reborn
  Ingredient.of('@chisel').itemIds.forEach(id => {
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

  // Modern Industrialization hammers
  e.add('modern_industrialization:forge_hammer_tools', [
    'craftoria:flimsy_hammer',
    /^justhammers:(stone|iron|gold|diamond|netherite)_(impact|reinforced|reinforced_impact|destructor)_hammer$/,
  ]);

  // Replication
  e.add('replication:skip_calculation', [
    'gateways:gate_pearl',
    'tankstorage:tank_link',
    'bankstorage:bank_link',
    '@sophisticatedstorageinmotion',
    'ae2:cable_anchor',
  ]);

  // Wooden Tier Storage
  e.add('craftoria:storage/wooden', ['#c:chests/wooden', '#c:barrels/wooden']);

  // Some tag fixes
  e.add('minecraft:swords', [
    'wstweaks:blaze_blade',
    'wstweaks:lava_blade',
    'industrialforegoing:infinity_hammer',
    'mekaweapons:meka_tana',
  ]);
  e.add('minecraft:pickaxes', ['industrialforegoing:infinity_drill']);
  e.add('minecraft:shovels', ['industrialforegoing:infinity_drill']);
  e.add('minecraft:axes', ['industrialforegoing:infinity_saw']);
  e.add('c:tools/bow', ['mekaweapons:meka_bow']);
  e.add('c:tools/melee_weapon', ['industrialforegoing:infinity_trident', 'mekaweapons:meka_tana']);
  e.add('c:tools/ranged_weapon', ['industrialforegoing:infinity_trident', 'mekaweapons:meka_bow']);
  e.add('c:tools/spear', 'industrialforegoing:infinity_trident');

  /**
   * @param {string[]} tags
   * @param {$Ingredient_|$Ingredient_[]} item
   */
  let addToEnchantable = (tags, item) => {
    tags.forEach(tag => {
      e.add(`minecraft:enchantable/${tag}`, item);
    });
  };

  addToEnchantable(['bow', 'vanishing'], 'mekaweapons:meka_bow');
  addToEnchantable(['mining_loot', 'vanishing', 'mining'], 'mekanism:meka_tool');
  addToEnchantable(['trident', 'vanishing'], 'industrialforegoing:infinity_trident');

  e.remove('plonk:unplaceable', ['plonk:placed_items']);

  e.add('industrialization_overdrive:multi_processing_array_blacklist', ['modern_industrialization:budding_incubator']);

  e.add('craftoria:grass', ['#biomeswevegone:grass', 'minecraft:short_grass', 'minecraft:seagrass']);
  e.add('craftoria:tall_grass', ['#biomeswevegone:grass/tall', 'minecraft:tall_grass']);
});

ServerEvents.tags('block', e => {
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
  e.add('mekanism:cardboard_blacklist', ['justdirethings:time_crystal_budding_block', '@waystones']);

  Color.DYE.forEach(color => {
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
    'hostilenetworks:sim_chamber',
    'hostilenetworks:loot_fabricator',
    'ars_additions:ender_source_jar',
    'animal_pen:aquarium_block',
    'moderndynamics:machine_extender',
  ]);

  e.add('minecraft:mineable/axe', ['mekanism:cardboard_box', '#animal_pen:animal_pens']);

  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');

  e.remove('c:storage_blocks/silicon', 'extendedae:silicon_block');

  e.add('sereneseasons:greenhouse_glass', ['#minecraft:glass_blocks', /glass$/]);

  e.add('extended_industrialization:machine_chainer/linkable', [
    '@functionalstorage',
    'entangled:block',
    'tesseract:tesseract',
    'tankstorage:tank_dock',
    'bankstorage:bank_dock',
    'moderndynamics:machine_extender',
  ]);

  // Block tags for quest usage
  e.add('craftoria:ae2_buddings', /^ae2:.*_budding_quartz/);
  e.add('craftoria:exae_buddings', /^extendedae:entro_budding_/);
});

ServerEvents.tags('fluid', e => {
  e.add('c:lubricant', 'modern_industrialization:lubricant');
  e.add('c:plantoil', 'modern_industrialization:plant_oil');
  e.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil');

  e.add('c:antimatter', 'craftoria:antimatter');
  e.add('c:quantum_infusion_source', 'advanced_ae:quantum_infusion_source');
});

ServerEvents.tags('entity_type', e => {
  e.add('craftoria:mob_blacklist', ['artifacts:mimic', 'minecraft:warden', '#c:bosses', /^occultism:(?!possessed).*$/, '#neoforge:bosses']);

  e.add('ftbchunks:entity_interact_whitelist', ['minecraft:villager', 'minecraft:wandering_trader']);

  e.add('mob_grinding_utils:no_swab', '#craftoria:mob_blacklist');

  e.add('industrialforegoing:mob_crusher_blacklist', ['#c:bosses', '#neoforge:bosses']);

  e.add('industrialforegoing:mob_duplicator_blacklist', '#craftoria:mob_blacklist');
});

ServerEvents.tags('enchantment', e => {
  e.remove('minecraft:non_treasure', ['apothic_enchanting:boon_of_the_earth']);
});
