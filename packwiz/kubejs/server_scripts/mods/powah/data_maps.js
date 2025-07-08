ServerEvents.generateData('after_mods', e => {
  /** @type {Record<$FluidIngredient_, {temperature: number}} */
  const coolants = {
    'industrialforegoing:ether_gas': {
      temperature: -49,
    },
    'modern_industrialization:cryofluid': {
      temperature: -250,
    },
    'modern_industrialization:liquid_air': {
      temperature: -196,
    },
    'minecraft:milk': {
      temperature: -2,
    },
    'modern_industrialization:helium_3': {
      temperature: -272,
    }
  };

  e.json('powah:data_maps/fluid/fluid_coolant', {
    values: coolants,
  });
});
