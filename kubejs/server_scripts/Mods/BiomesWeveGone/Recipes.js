ServerEvents.recipes((e) => {
  let makeID = (type, output, input) => {
    return _makeID('mekanism', type, output, input);
  };

  let ingredients = new Map();

  let crush = function(output, inputTag, inputItem) {
      Ingredient.of(inputTag).itemIds.forEach(function(id) {
          const { modID, itemId } = { modID: id.split(':')[0], itemId: id.split(':')[1] };

          if (modID !== 'biomeswevegone') return;

          // If inputItem is defined, ensure it matches the itemId
          if (inputItem !== undefined && itemId !== inputItem) return;

          ingredients.set(id, [output, id]);
      });
  };

  // Function to process the collection and generate recipes
  let processCrushingRecipes = function() {
      ingredients.forEach(function(value, key) {
          var output = value[0];
          var ingredient = value[1];
          e.recipes.mekanism.crushing(output, ingredient).id(makeID('crushing', output, ingredient));
      });
  };

  // Recipes from Biomes We've Gone to Mekanism Crushing
  // Note: Prioritized order

  crush('5x mekanism:bio_fuel', '#minecraft:flowers');
  crush('2x mekanism:bio_fuel', '#minecraft:saplings');
  crush('2x mekanism:bio_fuel', '#minecraft:leaves');

  crush('8x mekanism:bio_fuel', '#c:foods/pie');
  crush('5x mekanism:bio_fuel', '#c:foods/fruit');
  crush('2x mekanism:bio_fuel', '#c:foods/berry');

  crush('5x mekanism:bio_fuel', '#c:crops/pumpkin');
  crush('5x mekanism:bio_fuel', '#c:crops/pumpkin/carved');
  crush('5x mekanism:bio_fuel', '#c:crops/cactus');
  crush('2x mekanism:bio_fuel', '#c:crops/cactus/mini');

  crush('2x mekanism:bio_fuel', '#c:seeds');
  crush('5x mekanism:bio_fuel', '#c:mushrooms');
  crush('7x mekanism:bio_fuel', '#c:mushroom_blocks');

  crush('2x mekanism:bio_fuel', '#biomeswevegone:grass');
  crush('4x mekanism:bio_fuel', '#biomeswevegone:grass/tall');

  crush('5x mekanism:bio_fuel', '#biomeswevegone:lily_pads');
  
  crush('4x mekanism:bio_fuel', '#biomeswevegone:sprouts');
  
  crush('5x mekanism:bio_fuel', '#biomeswevegone:flowers');
  crush('5x mekanism:bio_fuel', '#biomeswevegone:flowers/alliums');
  crush('5x mekanism:bio_fuel', '#biomeswevegone:flowers/flower_bushes');


  crush('5x mekanism:bio_fuel', '#c:crops', 'oddion_bulb');

  crush('8x mekanism:bio_fuel', '#c:foods', 'blooming_oddion');
  crush('7x mekanism:bio_fuel', '#c:foods', 'cooked_yucca_fruit');
  crush('7x mekanism:bio_fuel', '#c:foods', 'cooked_oddion_bulb');
  crush('5x mekanism:bio_fuel', '#c:foods', 'cooked_white_puffball_cap');
  crush('2x mekanism:bio_fuel', '#c:foods', 'white_puffball_cap');

  processCrushingRecipes();  
});
