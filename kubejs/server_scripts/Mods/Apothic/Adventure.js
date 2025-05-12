// ignored: true
ServerEvents.generateData('after_mods', e => {
  /**
   * @typedef {Object} ApotheosisGem
   * @property {string} id - The ID of the gem.
   * @property {Object} weights - The weights for the gem.
   * @property {number} weights.weight - The weight of the gem.
   * @property {string} min_purity - The minimum purity of the gem.
   * @property {boolean} unique - Whether the gem is unique.
   * @property {Array} bonuses - The bonuses associated with the gem.
   * @property {Special} bonuses.type - The type of bonus.
   */

  /** @type {ApotheosisGem[]} */
  const gems = [
    {
      id: 'godstone',
      weights: {
        weight: 10,
      },
      min_purity: 'perfect',
      unique: true,
      bonuses: [],
    },
  ];

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
