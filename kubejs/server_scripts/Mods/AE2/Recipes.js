// //////////////////////
// / Made by Team AOE ///
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

  event
    .shaped('bigger_ae2:digital_singularity_cell_component', ['ASA', 'QGQ', 'AQA'], {
      A: 'megacells:accumulation_processor',
      S: 'ae2:spatial_cell_component_128',
      Q: 'advanced_ae:quantum_storage_component',
      G: 'ae2:quartz_vibrant_glass',
    })
    .id('bigger_ae2:digital_singularity_cell_component');

  event.replaceInput({ id: 'advanced_ae:quantum_helmet' }, 'minecraft:netherite_helmet', 'mekanism:mekasuit_helmet');
  event.replaceInput({ id: 'advanced_ae:quantum_chest' }, 'minecraft:netherite_chestplate', 'mekanism:mekasuit_bodyarmor');
  event.replaceInput({ id: 'advanced_ae:quantum_leggings' }, 'minecraft:netherite_leggings', 'mekanism:mekasuit_pants');
  event.replaceInput({ id: 'advanced_ae:quantum_boots' }, 'minecraft:netherite_boots', 'mekanism:mekasuit_boots');

  event.replaceInput({ id: 'megacells:cells/standard/bulk_item_cell' }, 'megacells:bulk_cell_component', 'bigger_ae2:digital_singularity_cell_component');
  event.replaceInput({ id: 'enderdrives:ender_storage_component_1k_advanced' }, 'advanced_ae:quantum_storage_component', 'bigger_ae2:digital_singularity_cell_component');

  event.replaceInput({ id: 'bigger_ae2:quantum_fluid_storage_cell' }, 'bigger_ae2:quantum_cell_component', 'advanced_ae:quantum_storage_component');
  event.replaceInput({ id: 'bigger_ae2:quantum_chemical_storage_cell' }, 'bigger_ae2:quantum_cell_component', 'advanced_ae:quantum_storage_component');
  event.replaceInput({ id: 'bigger_ae2:quantum_source_storage_cell' }, 'bigger_ae2:quantum_cell_component', 'advanced_ae:quantum_storage_component');

  // TODO: figure out a way to make disassembly of Bigger AE2's quantum cells directly give Advanced AE's quantum storage components.

  event.remove({ id: 'bigger_ae2:quantum_cell_component' });
  event.shapeless('advanced_ae:quantum_storage_component', 'bigger_ae2:quantum_cell_component')
    .id('advanced_ae:quantum_storage_component_from_bigger_ae2_quantum_cell_component');

  event.remove({ id: 'megacells:crafting/bulk_cell_component' });
  event.shapeless('bigger_ae2:digital_singularity_cell_component', 'megacells:bulk_cell_component')
    .id('bigger_ae2:digital_singularity_cell_component_from_megacells_bulk_cell_component');

  ae2.crystalAssembler('advanced_ae:adv_pattern_provider_capacity_upgrade', [
    '#ae2:metal_ingots',
    '3x ae2:capacity_card',
    '3x minecraft:crafting_table',
    'extendedae:concurrent_processor',
    '6x #ae2:glass_cable'
  ], null, 'advanced_ae:eaelargeappupgrade');

  // ae2.crystalAssembler('expandedae:exp_pattern_provider', [
  //   '#extendedae:extended_pattern_provider',
  //   '4x ae2:capacity_card',
  //   '4x ae2:engineering_processor',
  // ], null, 'expandedae:crafting/exp_pattern_provider');

  // event.shapeless('expandedae:exp_pattern_provider_upgrade', [
  //   '#expandedae:exp_pattern_provider',
  //   '#ae2:metal_ingots',
  // ]).id('expandedae:crafting/exp_pattern_provider_upgrade');

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
