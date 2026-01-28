ClientEvents.generateAssets('after_mods', e => {
  const path = 'emi:recipe/additions';

  /** @type {Record<Special.Block, { left: Special.Fluid, right: Special.Fluid }>} */
  const fluidAdditions = {
    'create:limestone': {
      left: 'minecraft:lava',
      right: 'create:honey',
    },
    'create:scoria': {
      left: 'minecraft:lava',
      right: 'create:chocolate',
    }
  };

  Object.entries(fluidAdditions).forEach(([id, addition]) => {
    e.json(`${path}/${id.replace(':', '_')}`, {
      type: 'emi:world_interaction',
      left: `fluid:${addition.left}`,
      right: `fluid:${addition.right}`,
      output: `item:${id}`,
    });
  });
});
