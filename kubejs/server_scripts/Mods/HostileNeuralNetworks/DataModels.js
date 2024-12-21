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
  };

  for (let [entity, data] in models) {
    let modID = entity.split(':')[0];
    let entityID = entity.split(':')[1];
    let path = `hostilenetworks:data_models/${modID}/${entityID}`;
    let drops = [];

    data.fabricatorDrops.forEach((drop) => {
      if (drop.includes('#')) {
        Ingredient.of(drop)
          .except('#almostunified:hide')
          .itemIds.forEach((drop) => {
            drops.push({id: drop, count: 1});
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
        color: '#55FF55',
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
      tier_data: data.tierData,
      data_per_kill: data.dataPerKill,
    };
    
    e.json(path, modelData);
  }
});
