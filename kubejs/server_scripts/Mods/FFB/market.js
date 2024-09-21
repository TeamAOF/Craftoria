ServerEvents.recipes(event => {
  let market = (item, category) => {
    let recipe = {
      type: 'farmingforblockheads:market',
      category: `farmingforblockheads:${category}`,
      preset: `minecraft:${category}`,
      result: { item: item, count: 1 }
    };
    event.custom(recipe).id(`craftoria:ffb_market/${item.split(':')[0]}/${item.split(':')[1]}`);
  }

  const croptopia_seeds = [
    'artichoke',
    'asparagus',
    'barley',
    'basil',
    'bellpepper',
    'blackbean',
    'blackberry',
    'blueberry',
    'broccoli',
    'cabbage',
    'cantaloupe',
    'cauliflower',
    'celery',
    'chile_pepper',
    'coffee',
    'corn',
    'cranberry',
    'cucumber',
    'currant',
    'eggplant',
    'elderberry',
    'garlic',
    'ginger',
    'grape',
    'greenbean',
    'honeydew',
    'hops',
    'kale',
    'kiwi',
    'leek',
    'lettuce',
    'mustard',
    'oat',
    'olive',
    'onion',
    'peanut',
    'pepper',
    'pineapple',
    'radish',
    'raspberry',
    'rhubarb',
    'rice',
    'rutabaga',
    'saguaro',
    'soybean',
    'squash',
    'strawberry',
    'tea',
    'tomatillo',
    'tomato',
    'turmeric',
    'turnip',
    'vanillas',
    'yam',
    'zucchini'
  ];

  croptopia_seeds.forEach((seed) => {
    market(`croptopia:${seed}_seed`, 'seeds');
  });

  const croptopia_saplings = [
    'almond',
    'apple',
    'apricot',
    'avocado',
    'banana',
    'cashew',
    'cherry',
    'cinnamon',
    'coconut',
    'date',
    'dragonfruit',
    'fig',
    'grapefruit',
    'kumquat',
    'lemon',
    'lime',
    'mango',
    'nectarine',
    'nutmeg',
    'orange',
    'peach',
    'pear',
    'pecan',
    'persimmon',
    'plum',
    'starfruit',
    'walnut'
  ];

  croptopia_saplings.forEach((sapling) => {
    market(`croptopia:${sapling}_sapling`, 'saplings');
  });

  const bwg_saplings = [
    'araucaria',
    'aspen',
    'baobab',
    'blue_enchanted',
    'blue_spruce',
    'brown_birch',
    'brown_oak',
    'brown_zelkova',
    'cika',
    'cypress',
    'ebony',
    'fir',
    'green_enchanted',
    'holly',
    'indigo_jacaranda',
    'ironwood',
    'jacaranda',
    'mahogany',
    'maple',
    'orange_birch',
    'orange_oak',
    'orange_spruce',
    'orchard',
    'palm',
    'palo_verde',
    'pine',
    'rainbow_eucalyptus',
    'red_birch',
    'red_maple',
    'red_oak',
    'red_spruce',
    'redwood',
    'silver_maple',
    'skyris',
    'white_mangrove',
    'white_sakura',
    'willow',
    'witch_hazel',
    'yellow_birch',
    'yellow_sakura',
    'yellow_spruce',
    'yucca',
    'zelkova'
  ];

  bwg_saplings.forEach((sapling) => {
    market(`biomeswevegone:${sapling}_sapling`, 'saplings');
  });

  const ars_saplings = [
    'ars_nouveau:blue_archwood_sapling',
    'ars_nouveau:red_archwood_sapling',
    'ars_nouveau:purple_archwood_sapling',
    'ars_nouveau:green_archwood_sapling',
    'ars_elemental:yellow_archwood_sapling'
  ];

  ars_saplings.forEach((sapling) => {
    market(sapling, 'saplings');
  });

  market('integrateddynamics:menril_sapling', 'saplings');
})
