ServerEvents.recipes(event => {

  // Endless Boss Gateway
  event.recipes.actuallyadditions.empowering(Item.of('gateways:gate_pearl[gateways:gateway="craftoria:endless/boss"]'), 'apotheosis:mythic_material', [
    'craftoria:ice_essence',
    'craftoria:fire_essence',
    'craftoria:nature_essence',
    'craftoria:dark_essence'
  ])

  // BOMD Gateway
  event.recipes.actuallyadditions.empowering(Item.of('gateways:gate_pearl[gateways:gateway="craftoria:bomd"]'), 'minecraft:ender_pearl', [
    'bosses_of_mass_destruction:ancient_anima',
    'bosses_of_mass_destruction:blazing_eye',
    'bosses_of_mass_destruction:obsidian_heart',
    'bosses_of_mass_destruction:void_thorn'
  ])

  // Cosmic Matter
  event.recipes.actuallyadditions.empowering(Item.of('craftoria:cosmic_matter'), 'advanced_ae:quantum_alloy', [
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity',
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity'
  ])
})