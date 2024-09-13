ServerEvents.recipes((event) => {
  let bwg = [
    'aspen',
    'baobab',
    'blue_enchanted',
    'cika',
    'cypress',
    'ebony',
    'fir',
    'florus',
    'green_enchanted',
    'holly',
    'ironwood',
    'jacaranda',
    'mahogany',
    'maple',
    'palm',
    'pine',
    'rainbow_eucalyptus',
    'redwood',
    'sakura',
    'skyris',
    'willow',
    'white_mangrove',
    'witch_hazel',
    'zelkova',
  ];

  // QoL Recipes
  bwg.forEach((bwg) => {
    let logs = `biomeswevegone:${bwg}_log`;
    if (bwg == 'florus') {
      logs = 'biomeswevegone:florus_stem';
    }

    // Doors
    event.shaped(`12x biomeswevegone:${bwg}_door`, ['AA', 'AA', 'AA'], {
      A: logs,
    });

    // Trapdoors
    event.shaped(`8x biomeswevegone:${bwg}_trapdoor`, ['AAA', 'AAA'], {
      A: logs,
    });

    // Slabs
    event.shaped(`24x biomeswevegone:${bwg}_slab`, ['AAA'], {
      A: logs,
    });

    // Stairs
    event.shaped(`16x biomeswevegone:${bwg}_stairs`, ['A  ', 'AA ', 'AAA'], {
      A: logs,
    });

    // Pressure Plates
    event.shaped(`4x biomeswevegone:${bwg}_pressure_plate`, ['AA'], {
      A: logs,
    });
  });
});
