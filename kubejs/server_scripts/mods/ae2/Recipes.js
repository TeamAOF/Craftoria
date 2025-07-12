// //////////////////////
// / Made by Team AOF ///
// //////////////////////

ServerEvents.recipes(event => {
  const ae2 = AE2Helper(event);

  // event.shaped('bigger_ae2:advanced_flux_cell_housing', ['GSG', 'SMS', 'RRR'], {
  //   G: 'ae2:quartz_glass',
  //   S: 'ae2:sky_dust',
  //   M: 'appflux:core_256m',
  //   R: 'appflux:harden_insulating_resin',
  // }).id('bigger_ae2:advanced_flux_cell_housing');

  event.replaceInput({ id: 'advanced_ae:quantum_helmet' }, 'minecraft:netherite_helmet', 'mekanism:mekasuit_helmet');
  event.replaceInput({ id: 'advanced_ae:quantum_chest' }, 'minecraft:netherite_chestplate', 'mekanism:mekasuit_bodyarmor');
  event.replaceInput({ id: 'advanced_ae:quantum_leggings' }, 'minecraft:netherite_leggings', 'mekanism:mekasuit_pants');
  event.replaceInput({ id: 'advanced_ae:quantum_boots' }, 'minecraft:netherite_boots', 'mekanism:mekasuit_boots');

  ae2.crystalAssembler('advanced_ae:adv_pattern_provider_capacity_upgrade', [
    '#ae2:metal_ingots',
    '3x ae2:capacity_card',
    '3x minecraft:crafting_table',
    'extendedae:concurrent_processor',
    '6x #ae2:glass_cable'
  ], null, 'advanced_ae:eaelargeappupgrade');

  ae2.crystalAssembler('expandedae:exp_pattern_provider', [
    '#extendedae:extended_pattern_provider',
    '4x ae2:capacity_card',
    '4x ae2:engineering_processor',
  ], null, 'expandedae:crafting/exp_pattern_provider');

  event.shapeless('expandedae:exp_pattern_provider_upgrade', [
    '#expandedae:exp_pattern_provider',
    '#ae2:metal_ingots',
  ]).id('expandedae:crafting/exp_pattern_provider_upgrade');

  /** @type {Special.RecipeId[]} */
  const toAE2Metal = [
    'extendedae:ex_pattern_provider_upgrade',
    'extendedae:ex_interface_upgrade',
    'extendedae:ex_bus_upgrade_alt',
    'extendedae:ex_bus_upgrade',
    'extendedae:ex_pattern_access_terminal_upgrade',
    'extendedae:ex_drive_upgrade',
    'advanced_ae:smallappupgrade',
  ];

  toAE2Metal.forEach(id => {
    event.replaceInput({ id: id }, 'minecraft:iron_ingot', '#ae2:metal_ingots');
  });
});
