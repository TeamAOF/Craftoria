ServerEvents.generateData('after_mods', (e) => {
  const models = {
    'artifacts:mimic': {
      simCost: 2560,
      baseDrop: 'hostilenetworks:end_prediction',
      fabricatorDrops: ['#artifacts:artifacts'],
      tierData: {
        basic: 30,
        advanced: 330,
        superior: 930,
        self_aware: 2000,
      },
      dataPerKill: {
        faulty: 1,
        basic: 10,
        advanced: 20,
        superior: 30,
      },
    },
    'minecraft:ender_dragon': {
      simCost: 4096,
      baseDrop: 'hostilenetworks:end_prediction',
      fabricatorDrops: [
        '16x minecraft:dragon_breath',
        '16x ends_delight:raw_dragon_meat',
        '16x ends_delight:dragon_tooth',
        '8x irons_spellbooks:dragonskin',
        '8x ends_delight:dragon_leg',
        'minecraft:dragon_head',
        'minecraft:dragon_egg',
      ],
      tierData: {
        basic: 6,
        advanced: 330,
        superior: 930,
        self_aware: 2000,
      },
      dataPerKill: {
        faulty: 3,
        basic: 12,
        advanced: 30,
        superior: 45,
      },
      nameColor: '#CC00CC',
      display: {
        y_offset: 0.5,
        scale: 0.25,
      },
    },
  };

  for (let [entity, data] in models) {
    let modID = entity.split(':')[0];
    let entityID = entity.split(':')[1];

    let path = modID === 'minecraft' ? `hostilenetworks:data_models/${entityID}` : `hostilenetworks:data_models/${modID}/${entityID}`;
    let drops = [];

    data.fabricatorDrops.forEach((drop) => {
      if (drop.includes('#')) {
        Ingredient.of(drop)
          .except('#almostunified:hide')
          .itemIds.forEach((drop) => {
            drops.push({ id: drop, count: parseInt(drop.split('x ')) || 1 });
          });
      } else {
        drops.push(Item.of(drop).toJson());
      }
    });

    let modelData = {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: modID,
        },
      ],
      entity: entity,
      variants: [],
      name: {
        translate: `entity.${modID}.${entityID}`,
        color: data.nameColor || '#55FF55',
      },
      display: {},
      sim_cost: data.simCost,
      input: {
        item: 'hostilenetworks:prediction_matrix',
      },
      base_drop: {
        id: data.baseDrop,
        count: 1,
      },
      trivia: `hostilenetworks.trivia.${entityID}`,
      fabricator_drops: drops,
      // tier_data: data.tierData,
      // data_per_kill: data.dataPerKill,
    };

    if (data.tierData) modelData.tier_data = data.tierData;
    if (data.dataPerKill) modelData.data_per_kill = data.dataPerKill;
    if (data.display) modelData.display = data.display;

    e.json(path, modelData);
  }
});
