ServerEvents.recipes((event) => {
  let market = (item, category) => {
    let recipe = {
      type: 'farmingforblockheads:market',
      category: `farmingforblockheads:${category}`,
      preset: `minecraft:${category}`,
      result: { item: item, count: 1 },
    };
    event.custom(recipe).id(`craftoria:ffb_market/${item.split(':')[0]}/${item.split(':')[1]}`);
  };

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
    'zelkova',
  ];

  bwg_saplings.forEach((sapling) => {
    market(`biomeswevegone:${sapling}_sapling`, 'saplings');
  });

  const ars_saplings = [
    'ars_nouveau:blue_archwood_sapling',
    'ars_nouveau:red_archwood_sapling',
    'ars_nouveau:purple_archwood_sapling',
    'ars_nouveau:green_archwood_sapling',
    'ars_elemental:yellow_archwood_sapling',
  ];

  ars_saplings.forEach((sapling) => {
    market(sapling, 'saplings');
  });

  const fd_saplings = [
    'fruitsdelight:pear_sapling', 
    'fruitsdelight:hawberry_sapling', 
    'fruitsdelight:lychee_sapling', 
    'fruitsdelight:mango_sapling', 
    'fruitsdelight:persimmon_sapling', 
    'fruitsdelight:peach_sapling', 
    'fruitsdelight:orange_sapling', 
    'fruitsdelight:apple_sapling', 
    'fruitsdelight:mangosteen_sapling', 
    'fruitsdelight:bayberry_sapling', 
    'fruitsdelight:kiwi_sapling', 
    'fruitsdelight:fig_sapling', 
    'fruitsdelight:pineapple_sapling',
  ];

  fd_saplings.forEach((sapling) => {
    market(sapling, 'saplings');
  });

  market('integrateddynamics:menril_sapling', 'saplings');
});
