{
  let modWhitelist = ['farmersdelight', 'moredelight', 'arsdelight', 'twilightdelight', 'ends_delight'];
  let itemWhitelist = ['aquaculture:neptunium_fillet_knife'];

  ServerEvents.recipes((e) => {
    Ingredient.of('#c:tools/knife').stacks.forEach((item) => {
      if (modWhitelist.includes(item.mod) || itemWhitelist.includes(item.id)) return;
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
      if (modWhitelist.includes(item.mod) || itemWhitelist.includes(item.id)) return;
      hiddenKnives.push(item.id);
    });
    e.add('almostunified:hide', hiddenKnives);
  });
}
