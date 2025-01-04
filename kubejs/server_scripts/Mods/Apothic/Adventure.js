ServerEvents.generateData('after_mods', (e) => {
  /* Example of adding a custom gem
  e.json('craftoria:gems/core/godstone', {
    type: 'apotheosis:gem',
    weights: {
      weight: 10,
    },
    min_purity: 'perfect',
    unique: true,
    bonuses: [
      {
        type: 'apotheosis:multi_attribute',
        desc: 'bonus.apotheosis:multi_attr.desc.and',
        gem_class: 'chestplate',
        modifiers: [
          {
            attribute: 'ars_nouveau:ars_nouveau.perk.drygmy',
            operation: 'add_value',
            values: {
              perfect: 1024.0,
            },
          },
          {
            attribute: 'minecraft:generic.attack_damage',
            operation: 'add_multiplied_total',
            values: {
              perfect: 100.0,
            },
          },
        ],
      },
    ],
  });
  */
});
