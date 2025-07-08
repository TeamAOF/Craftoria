ServerEvents.recipes(event => {
  const { empowering } = event.recipes.actuallyadditions;

  // Endless Boss Gateway
  empowering(
    'gateways:gate_pearl[gateways:gateway="craftoria:endless/boss"]',
    'apotheosis:mythic_material',
    ['craftoria:ice_essence', 'craftoria:fire_essence', 'craftoria:nature_essence', 'craftoria:dark_essence']
  );

  // Trials Gateway
  empowering('gateways:gate_pearl[gateways:gateway="craftoria:trials"]', 'minecraft:ender_pearl', [
    'cataclysm:cursed_bow',
    'cataclysm:bulwark_of_the_flame',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:remnant_skull',
  ]);

  // Cosmic Matter
  empowering('craftoria:cosmic_matter', 'advanced_ae:quantum_alloy', [
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity',
    'mekanism_extras:alloy_spectrum',
    'modern_industrialization:singularity',
  ]);
});
