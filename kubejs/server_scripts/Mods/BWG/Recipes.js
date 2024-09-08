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

  bwg.forEach((bwg) => {
    let planks = `biomeswevegone:${bwg}_planks`;
    let logs = `biomeswevegone:${bwg}_log`;
    if (bwg == 'florus') {
      logs = 'biomeswevegone:florus_stem';
    }

    // Doors
    event.shaped(`3x biomeswevegone:${bwg}_door`, ['AA', 'AA', 'AA'], {
      A: planks,
    });

    event.shaped(`12x biomeswevegone:${bwg}_door`, ['AA', 'AA', 'AA'], {
      A: logs,
    });

    // Trapdoors
    event.shaped(`2x biomeswevegone:${bwg}_trapdoor`, ['AAA', 'AAA'], {
      A: planks,
    });

    event.shaped(`8x biomeswevegone:${bwg}_trapdoor`, ['AAA', 'AAA'], {
      A: logs,
    });

    // Slabs
    event.shaped(`6x biomeswevegone:${bwg}_slab`, ['AAA'], {
      A: planks,
    });

    event.shaped(`24x biomeswevegone:${bwg}_slab`, ['AAA'], {
      A: logs,
    });

    // Stairs
    event.shaped(`4x biomeswevegone:${bwg}_stairs`, ['A  ', 'AA ', 'AAA'], {
      A: planks,
    });

    event.shaped(`16x biomeswevegone:${bwg}_stairs`, ['A  ', 'AA ', 'AAA'], {
      A: logs,
    });

    // Signs
    event.shaped(`3x biomeswevegone:${bwg}_sign`, ['AAA', 'AAA', ' S '], {
      A: planks,
      S: 'minecraft:stick',
    });

    // Fences
    event.shaped(`3x biomeswevegone:${bwg}_fence`, ['ASA', 'ASA'], {
      A: planks,
      S: 'minecraft:stick',
    });

    // Fence Gates
    event.shaped(`biomeswevegone:${bwg}_fence_gate`, ['SAS', 'SAS'], {
      A: planks,
      S: 'minecraft:stick',
    });

    // Buttons
    event.shapeless(`biomeswevegone:${bwg}_button`, [planks]);

    // Pressure Plates
    event.shaped(`biomeswevegone:${bwg}_pressure_plate`, ['AA'], {
      A: planks,
    });

    event.shaped(`4x biomeswevegone:${bwg}_pressure_plate`, ['AA'], {
      A: logs,
    });
  });
});
