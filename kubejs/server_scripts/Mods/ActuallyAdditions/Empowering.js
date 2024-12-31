ServerEvents.recipes(event => {
  event.recipes.actuallyadditions.empowering(Item.of('gateways:gate_pearl[gateways:gateway="craftoria:endless/boss"]'), 'apotheosis:mythic_material', [
    'craftoria:ice_essence',
    'craftoria:fire_essence',
    'craftoria:nature_essence',
    'craftoria:dark_essence'
  ])

  // Radonium
  event.recipes.actuallyadditions.empowering(Item.of('craftoria:cosmic_matter'), 'advanced_ae:quantum_alloy', [
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity',
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity'
  ])
})