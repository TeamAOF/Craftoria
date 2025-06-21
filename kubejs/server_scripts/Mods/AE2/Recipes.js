// //////////////////////
// / Made by Team AOF ///
// //////////////////////

ServerEvents.recipes(event => {
  const ae2 = AE2Helper(event);

  event
    .shaped('bigger_ae2:advanced_flux_cell_housing', ['GSG', 'SMS', 'RRR'], {
      G: 'ae2:quartz_glass',
      S: 'ae2:sky_dust',
      M: 'appflux:core_256m',
      R: 'appflux:harden_insulating_resin',
    })
    .id('bigger_ae2:advanced_flux_cell_housing');

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
});
