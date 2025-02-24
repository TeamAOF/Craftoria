ServerEvents.generateData('after_mods', (e) => {
  // TODO: make this actually work
  let MakeBoss = (entity, name, constraints, valid_gear_sets, weights, stats) => {
    e.json(`craftoria:apothic_invaders/custom_bosses/${entity.split(':')[1]}`, {
      type: 'apotheosis:invader',
      basic_data: {
        bonus_loot: ['apotheosis:bonus/boss_drops', 'apotheosis:bonus/rare_boss_drops'],
        constraints: constraints,
        name: name,
        valid_gear_sets: valid_gear_sets,
        weights: weights,
      },
      entity: entity,
      size: {
        height: 3.6,
        width: 1.2,
      },
      stats: stats,
    });
  };

  /* Example boss
  e.json('craftoria:apothic_invaders/custom_bosses/lich', {
    type: 'apotheosis:invader',
    basic_data: {
      name: 'Greg from Accounting',
      valid_gear_sets: {
        haven: ['#haven_ranged'],
        frontier: ['#frontier_ranged'],
        ascent: ['#ascent_ranged'],
        summit: ['#summit_ranged'],
        pinnacle: ['#apotheosis_ranged'],
      },
      weights: {
        pinnacle: {
          quality: 5.0,
          weight: 150,
        },
      },
    },
    entity: 'bosses_of_mass_destruction:lich',
    size: {
      height: 3.6,
      width: 1.2,
    },
    stats: {
      'apotheosis:mythic': {
        attribute_modifiers: [
          {
            attribute: 'minecraft:generic.max_health',
            operation: 'add_multiplied_base',
            value: {
              min: 90.0,
              max: 140.0,
            },
          },
          {
            attribute: 'minecraft:generic.movement_speed',
            operation: 'add_multiplied_base',
            value: {
              min: 0.35,
              max: 0.65,
            },
          },
          {
            attribute: 'apothic_attributes:fire_damage',
            operation: 'add_value',
            value: {
              min: 30.0,
              max: 40.0,
            },
          },
          {
            attribute: 'apothic_attributes:projectile_damage',
            operation: 'add_multiplied_base',
            value: {
              min: 2.75,
              max: 5.5,
            },
          },
          {
            attribute: 'minecraft:generic.knockback_resistance',
            operation: 'add_value',
            value: 0.8,
          },
          {
            attribute: 'minecraft:generic.armor',
            operation: 'add_value',
            value: 5000.0,
          },
          {
            attribute: 'minecraft:generic.armor',
            operation: 'add_multiplied_total',
            value: 5000.0,
          },
          {
            attribute: 'minecraft:generic.armor_toughness',
            operation: 'add_value',
            value: 20.0,
          },
          {
            attribute: 'minecraft:generic.scale',
            operation: 'add_multiplied_total',
            value: 2.0,
          },
        ],
        effects: [
          {
            amplifier: 4.0,
            effect: 'minecraft:resistance',
          },
        ],
        enchant_chance: 1.0,
        enchantment_levels: {
          primary: 100,
          secondary: 80,
        },
      },
    },
  });
  */

  let invaderTemplate = {
    type: 'apotheosis:invader',
    basic_data: {
      bonus_loot: ['apotheosis:bonus/rare_boss_drops'],
      valid_gear_sets: {
        haven: ['#haven_ranged'],
        frontier: ['#frontier_ranged'],
        ascent: ['#ascent_ranged'],
        summit: ['#summit_ranged'],
        pinnacle: ['#apotheosis_ranged'],
      },
      weights: {
        pinnacle: {
          quality: 5.0,
          weight: 150,
        },
      },
    },
    stats: {
      'apotheosis:mythic': {
        attribute_modifiers: [],
        effects: [],
        enchant_chance: 1.0,
        enchantment_levels: {
          primary: 100,
          secondary: 80,
        },
      },
    },
  };

  let bomdTemplate = {
    basic_data: {
      spawn_conditions: [
        {
          type: 'apotheosis:spawn_type',
          spawn_types: ['command'],
        },
      ],
      constraints: {
        dimensions: ['ae2:spatial_storage'],
      },
    },
    attributes: [
      {
        attribute: 'minecraft:generic.max_health',
        operation: 'add_multiplied_base',
        value: {
          min: 90.0,
          max: 140.0,
        },
      },
      {
        attribute: 'minecraft:generic.movement_speed',
        operation: 'add_multiplied_base',
        value: {
          min: 0.35,
          max: 0.65,
        },
      },
      {
        attribute: 'apothic_attributes:fire_damage',
        operation: 'add_value',
        value: {
          min: 30.0,
          max: 40.0,
        },
      },
      {
        attribute: 'apothic_attributes:projectile_damage',
        operation: 'add_multiplied_base',
        value: {
          min: 2.75,
          max: 5.5,
        },
      },
      {
        attribute: 'minecraft:generic.knockback_resistance',
        operation: 'add_value',
        value: 1.0,
      },
      {
        attribute: 'minecraft:generic.armor',
        operation: 'add_value',
        value: 5000.0,
      },
      {
        attribute: 'minecraft:generic.armor',
        operation: 'add_multiplied_total',
        value: 5000.0,
      },
      {
        attribute: 'minecraft:generic.armor_toughness',
        operation: 'add_value',
        value: 20.0,
      },
      {
        attribute: 'minecraft:generic.scale',
        operation: 'add_multiplied_total',
        value: 2.0,
      },
    ],
    effects: [
      {
        amplifier: 3.0,
        effect: 'minecraft:resistance',
      },
    ],
  };

  let bomdBosses = [
    {
      entity: 'bosses_of_mass_destruction:lich',
      name: 'Merasmus',
      size: {
        height: 3.6,
        width: 1.2,
      },
    },
    {
      entity: 'bosses_of_mass_destruction:obsidilith',
      name: 'HOL 8000',
      size: {
        height: 3.6,
        width: 1.2,
      },
    },
    {
      entity: 'bosses_of_mass_destruction:gauntlet',
      name: 'Herbert',
      size: {
        height: 3.6,
        width: 1.2,
      },
    },
    {
      entity: 'bosses_of_mass_destruction:void_blossom',
      name: 'Captain Hector',
      size: {
        height: 3.6,
        width: 1.2,
      },
    },
  ];

  bomdBosses.forEach((boss) => {
    // First grab the invader template, then apply the bomd template on top of it, and finally apply the boss-specific data (if it exists)
    let bossData = invaderTemplate;
    bossData.basic_data.name = boss.name;
    bossData.entity = boss.entity;
    bossData.size = boss.size;

    bossData.basic_data.spawn_conditions = bomdTemplate.spawn_conditions;
    bossData.basic_data.constraints = bomdTemplate.basic_data.constraints;
    if (boss.attributes) bossData.stats['apotheosis:mythic'].attribute_modifiers = boss.attributes;
    else bossData.stats['apotheosis:mythic'].attribute_modifiers = bomdTemplate.attributes;
    if (boss.effects) bossData.stats['apotheosis:mythic'].effects = boss.effects;
    else bossData.stats['apotheosis:mythic'].effects = bomdTemplate.effects;
    e.json(`craftoria:apothic_invaders/custom_bosses/${boss.entity.split(':')[1]}`, bossData);
  });
});
