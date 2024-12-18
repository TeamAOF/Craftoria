ServerEvents.recipes((e) => {
  Ingredient.of('#c:tools/knife').stacks.forEach((item) => {
    if (item.mod === 'farmersdelight' || item.mod === 'moredelight' || item.id === 'aquaculture:neptunium_fillet_knife') return;
    globalItemRemovals.push(item.id);
  });

  e.shaped('aquaculture:neptunium_fillet_knife', ['N', 'S'], {
    N: 'aquaculture:neptunium_ingot',
    S: 'minecraft:stick',
  }).id('aquaculture:neptunium_fillet_knife');
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
