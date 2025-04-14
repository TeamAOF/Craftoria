ServerEvents.recipes(e => {
  const mekanism = MekanismHelper(e);

  let ingredients = new Map();

  let crush = (output, inputTag, inputItem) => {
    Ingredient.of(inputTag).itemIds.forEach(id => {
      const [modID, itemId] = id.split(':');

      if (modID !== 'biomeswevegone') return;

      // If inputItem is defined, ensure it matches the itemId
      if (inputItem !== undefined && itemId !== inputItem) return;

      ingredients.set(id, [output, id]);
    });
  };

  // Function to process the collection and generate recipes
  let processCrushingRecipes = () => {
    ingredients.forEach((value, key) => {
      var output = value[0];
      var ingredient = value[1];
      mekanism.crushing(output, ingredient);
    });
  };

  // Recipes from Biomes We've Gone to Mekanism Crushing
  // Note: Prioritized order

  crush('2x mekanism:bio_fuel', '#minecraft:flowers');

  crush('7x mekanism:bio_fuel', '#c:foods/pie');
  crush('2x mekanism:bio_fuel', '#c:foods/fruit');

  crush('2x mekanism:bio_fuel', '#c:pumpkins/carved');
  crush('1x mekanism:bio_fuel', '#c:crops/cactus/mini');

  crush('4x mekanism:bio_fuel', '#c:mushroom_blocks');

  crush('1x mekanism:bio_fuel', '#craftoria:grass');
  crush('2x mekanism:bio_fuel', '#craftoria:tall_grass');

  crush('1x mekanism:bio_fuel', '#biomeswevegone:lily_pads');

  crush('2x mekanism:bio_fuel', '#biomeswevegone:sprouts');

  crush('2x mekanism:bio_fuel', '#biomeswevegone:flowers');
  crush('2x mekanism:bio_fuel', '#biomeswevegone:flowers/alliums');
  crush('2x mekanism:bio_fuel', '#biomeswevegone:flowers/flower_bushes');

  crush('5x mekanism:bio_fuel', '#c:crops', 'oddion_bulb');

  crush('2x mekanism:bio_fuel', '#c:foods', 'blooming_oddion');
  crush('2x mekanism:bio_fuel', '#c:foods', 'cooked_yucca_fruit');
  crush('2x mekanism:bio_fuel', '#c:foods', 'cooked_oddion_bulb');
  crush('2x mekanism:bio_fuel', '#c:foods', 'cooked_white_puffball_cap');
  crush('2x mekanism:bio_fuel', '#c:foods', 'white_puffball_cap');

  processCrushingRecipes();

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
  bwg.forEach(bwg => {
    let logs = `biomeswevegone:${bwg}_log`;
    if (bwg == 'florus') {
      logs = 'biomeswevegone:florus_stem';
    }

    // Doors
    e.shaped(`12x biomeswevegone:${bwg}_door`, ['AA', 'AA', 'AA'], {
      A: logs,
    });

    // Trapdoors
    e.shaped(`8x biomeswevegone:${bwg}_trapdoor`, ['AAA', 'AAA'], {
      A: logs,
    });

    // Slabs
    e.shaped(`24x biomeswevegone:${bwg}_slab`, ['AAA'], {
      A: logs,
    });

    // Stairs
    e.shaped(`16x biomeswevegone:${bwg}_stairs`, ['A  ', 'AA ', 'AAA'], {
      A: logs,
    });

    // Pressure Plates
    e.shaped(`4x biomeswevegone:${bwg}_pressure_plate`, ['AA'], {
      A: logs,
    });
  });
});
