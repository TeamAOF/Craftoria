ServerEvents.generateData('after_mods', event => {
  event.json('create_enchantment_industry:data_maps/fluid/unit/experience', {
    values: {
      'justdirethings:xp_fluid_source': {
        'neoforge:conditions': [
          {
            type: 'neoforge:mod_loaded',
            modid: 'justdirethings'
          }
        ],
        'neoforge:value': 20
      }
    }
  });
});

ServerEvents.recipes(event => {
  const create = CreateHelper(event);
  create.mixing([['1x create_enchantment_industry:experience', true]], [['20x #c:experience', true]]);
});
