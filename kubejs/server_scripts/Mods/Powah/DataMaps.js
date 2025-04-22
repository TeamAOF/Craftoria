ServerEvents.generateData('after_mods', e => {
  /** @type {Record<$FluidIngredient_, {temperature: number}} */
  const coolants = {
    'industrialforegoing:ether_gas': {
      temperature: -116,
    },
    'modern_industrialization:cryofluid': {
      temperature: -273,
    },
    'modern_industrialization:liquid_air': {
      temperature: -196,
    },
    'minecraft:milk': {
      temperature: -2,
    },
  };

  e.json('powah:data_maps/fluid/fluid_coolant', {
    values: coolants,
  });
});
