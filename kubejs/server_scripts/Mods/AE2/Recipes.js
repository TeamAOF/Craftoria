////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((event) => {
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
});
