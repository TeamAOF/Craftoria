ServerEvents.generateData('after_mods', (e) => {
  e.json('powah:data_maps/fluid/fluid_coolant', {
    values: {
      '#c:water': {
        temperature: 1,
      },
      'industrialforegoing:ether_gas': {
        temperature: -69,
      },
      'modern_industrialization:cryofluid': {
        temperature: -250,
      },
      'modern_industrialization:liquid_air': {
        temperature: -183,
      },
      'minecraft:milk': {
        temperature: 5,
      },
    },
  });
});
