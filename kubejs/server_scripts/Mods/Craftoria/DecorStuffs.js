let getMaterial = (item) => {
  const material = item.split(':')[1];
  const parts = material.split('_');

  const getAllCombinations = (arr) => {
    let combinations = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        combinations.push(arr.slice(i, j).join('_'));
      }
    }
    return combinations;
  };

  const combinations = getAllCombinations(parts);

  for (let part of combinations) {
    if (Item.exists(`minecraft:${part}_planks`)) return `${part}_planks`;
    if (Item.exists(`minecraft:${part}_block`)) return `${part}_block`;
    if (Item.exists(`minecraft:${part}`)) return part;
  }

  console.warn(`Could not find material for item: ${item}`);
  return null;
};
ServerEvents.tags('item', (e) => {
  Ingredient.of('@rechiseled')
    .except('rechiseled:chisel')
    .itemIds.forEach((item) => {
      const material = getMaterial(item);
      if (material) {
        e.add(`rechiseled:${material}`, item);
      }
    });

  e.add('craftoria:decor_stations', [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
    'chipped:watering_can',
    'chipped:alchemy_book',
    'chipped:saw',
    'chipped:needles',
    'chipped:chisel',
    'chipped:multimeter',
  ]);
});

ServerEvents.recipes((e) => {
  let recipeIDs = [];
  const makeId = (output, input) => {
    let recipeID = _makeID('decor_stuffs', 'stonecutting', output, input);
    if (!recipeIDs.includes(recipeID)) recipeIDs.push(recipeID);
    else {
      // console.warn(`Duplicate recipe ID: ${recipeID}, adding a suffix`);
      let i = 1;
      while (recipeIDs.includes(`${recipeID}_${i}`)) i++;
      recipeID = `${recipeID}_${i}`;
      recipeIDs.push(recipeID);
    }
    return recipeID;
  };

  Ingredient.of('@rechiseled')
    .except('rechiseled:chisel')
    .stacks.forEach((item) => {
      const material = getMaterial(item.id);
      if (material) e.stonecutting(item.id, [Ingredient.of(`#rechiseled:${material}`), `minecraft:${material}`]).id(makeId(item.id, `rechiseled:${material}`));
    });

  let chippedThings = [];
  Ingredient.of('@chipped')
    .except('#craftoria:decor_stations')
    .stacks.forEach((item) => {
      item.tags.forEach((tag) => {
        if (chippedThings.includes(`#${tag}`)) return;
        if (tag.namespace === 'chipped') chippedThings.push(`#${tag}`);
      });
    });

  chippedThings.forEach((tag) => {
    Ingredient.of(tag).stacks.forEach((item) => {
      e.stonecutting(item.id, [tag, `minecraft:${tag.split(':')[1]}`]).id(makeId(item.id, tag));
    });
  });

  Ingredient.of('#factory_blocks:factory').stacks.forEach((item) => {
    e.stonecutting(item.id, '#factory_blocks:factory').id(makeId(item.id, 'factory_blocks:factory'));
  });
});
