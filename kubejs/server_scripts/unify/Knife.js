ServerEvents.recipes((e) => {
  Ingredient.of('#c:tools/knife').stacks.forEach((item) => {
    if (item.mod === 'farmersdelight' || item.mod === 'moredelight' || item.id === 'aquaculture:neptunium_fillet_knife') return;
    globalItemRemovals.push(item.id);
  });

  e.replaceInput({mod: 'croptopia'}, 'croptopia:knife', '#c:tools/knife');

  e.shaped('aquaculture:neptunium_fillet_knife', ['N', 'S'], {
    N: 'aquaculture:neptunium_ingot',
    S: 'minecraft:stick',
  }).id('aquaculture:neptunium_fillet_knife');

  e.shaped('farmersdelight:bacon', [' P', 'K '], {
    P: 'minecraft:porkchop',
    K: '#c:tools/knife',
  })
    .damageIngredient('#c:tools/knife')
    .id('croptopia:shaped_bacon');

  e.shaped('croptopia:hashed_brown', ['PFO', ' K '], {
    P: '#c:potatoes',
    F: 'croptopia:frying_pan',
    O: 'croptopia:olive_oil',
    K: '#c:tools/knife',
  })
    .damageIngredient('#c:tools/knife')
    .id('croptopia:hashed_brown');
});

ServerEvents.tags('item', (e) => {
  e.add('c:tools/knife', Ingredient.of('#c:tools/knives').itemIds);
  e.add('c:tools/knives', Ingredient.of('#c:tools/knife').itemIds);

  let hiddenKnives = [];
  Ingredient.of('#c:tools/knife').stacks.forEach((item) => {
    if (item.mod === 'farmersdelight' || item.mod === 'moredelight' || item.id === 'aquaculture:neptunium_fillet_knife') return;
    hiddenKnives.push(item.id);
  });
  e.add('almostunified:hide', hiddenKnives);
});
