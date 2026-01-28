// ignored: true
ServerEvents.generateData('after_mods', event => {
  const path = 'irons_jewelry:irons_jewelry';

  const materials = {
    onyx: {
      descriptionId: 'material.irons_jewelry.onyx',
      ingredient: {
        tag: 'c:gems/onyx',
      },
      materialType: ['gem'],
      paletteLocation: 'irons_jewelry:palettes/onyx',
      quality: 2,
      bonusParameters: {
        'irons_jewelry:attribute': {
          attribute: 'apothic_attributes:crit_damage',
          amount: 0.15,
          operation: 'add_multiplied_base',
        },
        'irons_jewelry:negative_effect': {
          effect: 'minecraft:blindness',
        },
        'irons_jewelry:action': {
          targetSelf: true,
          action: {
            type: 'irons_jewelry:heal',
            amount: {
              base: 4.0,
              scalar: 2.0,
            },
          },
        },
      },
    },
  };

  for (const [material, data] of Object.entries(materials)) {
    event.json(`${path}/material/${material}`, data);
  }
});
