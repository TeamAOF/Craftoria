ServerEvents.generateData('last', (e) => {
  const logging = false;

  let factoryBlocks = {
    type: 'rechiseled:chiseling',
    entries: [],
    overwrite: false,
  };

  Ingredient.of('#factory_blocks:factory').itemIds.forEach((id) => {
    factoryBlocks.entries.push({item: id});
  });

  e.json('rechiseled:chiseling_recipes/factory', factoryBlocks);

  let chiselBlocks = {};
  Ingredient.of('@chisel').itemIds.forEach((id) => {
    if (id !== 'chisel:chisel') {
      const block = id.split(':')[1].split('/')[1];
      if (!chiselBlocks[block]) {
        chiselBlocks[block] = [];
      }
      chiselBlocks[block].push(id);
    }
  });

  Object.keys(chiselBlocks).forEach((block) => {
    let json = {
      type: 'rechiseled:chiseling',
      entries: [],
      overwrite: false,
    };
    if (logging) console.info(`Processing ${block}`);
    chiselBlocks[block].forEach((id) => {
      json.entries.push({item: id});
    });
    json.entries.push({item: `minecraft:${block}`});
    e.json(`rechiseled:chiseling_recipes/${block}`, json);
    if (logging) {
      console.info(`Added ${block} to Rechiseled recipes`);
      console.info(`path: rechiseled:chiseling_recipes/${block}`);
      console.info(`json: ${JSON.stringify(json)}`);
    }
  });
});
