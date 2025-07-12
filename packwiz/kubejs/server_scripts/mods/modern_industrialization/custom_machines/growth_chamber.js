ServerEvents.recipes(event => {
  const { growth_chamber } = event.recipes.modern_industrialization;

  /**
   *
   * @param {Special.Item} plant
   * @param {$FluidIngredient_} fluid
   * @param {number} [fluidUseChance]
   * @param {number} [eu]
   * @param {number} [time]
   * @returns
   */
  const growPlant = (plant, fluid, fluidUseChance, eu, time) => {
    const recipe = growth_chamber(eu || 8, time || 20);
    const plantId = plant.includes('x ') ? plant.split('x ')[1] : plant;

    recipe.itemIn(plantId, 0);
    if (fluidUseChance) recipe.fluidIn(fluid, fluidUseChance);
    else recipe.fluidIn(fluid);
    recipe.itemOut(plant);
    return recipe;
  };

  Ingredient.of('#minecraft:flowers').except('#minecraft:leaves').itemIds.forEach(flower => {
    growPlant(flower, 'water', null, 32, 20 * 60)
      .id(`craftoria:mi/growth_chamber/grow_1x_${ID.path(flower)}`);

    growPlant(`4x ${flower}`, '125x extended_industrialization:manure', 0.75, 16, 20 * 30)
      .id(`craftoria:mi/growth_chamber/grow_4x_${ID.path(flower)}`);

    growPlant(`16x ${flower}`, '75x extended_industrialization:composted_manure', 0.50, 8, 20 * 10)
      .id(`craftoria:mi/growth_chamber/grow_16x_${ID.path(flower)}`);

    growPlant(`64x ${flower}`, '25x extended_industrialization:npk_fertilizer', 0.25, 4, 20)
      .id(`craftoria:mi/growth_chamber/grow_64x_${ID.path(flower)}`);
  });
});
