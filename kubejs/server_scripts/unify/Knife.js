// priority: 997
{
  /** @type {import("@special/types").SpecialTypes.ModId[]} */
  let modWhitelist = [
    'farmersdelight',
    'moredelight',
    'arsdelight',
    'twilightdelight',
    'ends_delight',
    'spectrum',
    'occultism',
    'malum',
  ];
  /** @type {Special.Item[]} */
  let itemWhitelist = [
    'aquaculture:neptunium_fillet_knife',
  ];

  ServerEvents.recipes(e => {
    e.shaped('aquaculture:neptunium_fillet_knife', ['N', 'S'], {
      N: 'aquaculture:neptunium_ingot',
      S: 'minecraft:stick',
    }).id('aquaculture:neptunium_fillet_knife');
  });

  ServerEvents.tags('item', e => {
    let knife = [];
    e.get('c:tools/knives').objectIds.forEach(obj => {
      if (Item.exists(obj) && !obj.compareTo('minecraft:barrier')) knife.push(obj);
    });
    e.add('c:tools/knife', knife).remove('minecraft:barrier');

    let knives = [];
    e.get('c:tools/knife').objectIds.forEach(obj => {
      if (Item.exists(obj) && !obj.compareTo('minecraft:barrier')) knives.push(obj);
    });
    e.add('c:tools/knife', knives).remove('minecraft:barrier');

    let hiddenKnives = [];
    Ingredient.of('#c:tools/knife').stacks.forEach(item => {
      if (modWhitelist.includes(item.mod) || itemWhitelist.includes(item.id) || item.id === 'minecraft:barrier') return;
      hiddenKnives.push(item.id);
    });
    e.add('almostunified:hide', hiddenKnives);

    [
      'refurbished_furniture:items',
      'refurbished_furniture:kitchen',
      'refurbished_furniture:outdoors',
      'refurbished_furniture:tools/knives',
    ].forEach(tag => {
      e.add(tag, Ingredient.of('#c:tools/knife').itemIds);
    });

    Ingredient.of('#c:tools/knife').stacks.forEach(item => {
      if (!Item.exists(item)) return;
      if (modWhitelist.includes(item.mod) || itemWhitelist.includes(item.id) || item.id === 'minecraft:barrier') return;
      globalItemRemovals.push(item.id);
    });
  });
}
