ServerEvents.recipes(event => {
  const { occultism } = event.recipes;
  const mekanism = MekanismHelper(event);

  for (let entry in global.customOres) {
    for (let oreId of Object.values(getCustomOreVariants(entry))) {
      occultism.crushing(RecipeResult.of(`craftoria:${entry}_dust`, 4), oreId);

      mekanism.enriching(`2x craftoria:${entry}_dust`, oreId);

      event.smelting(`craftoria:${entry}_ingot`, oreId);
    }
    occultism.crushing(RecipeResult.of(`craftoria:${entry}_dust`, 2), `craftoria:raw_${entry}`);

    mekanism.crushing(`craftoria:${entry}_dust`, `craftoria:raw_${entry}`);
    mekanism.enriching(`4x craftoria:${entry}_dust`, `3x craftoria:raw_${entry}`);

    event.smelting('craftoria:akite_ingot', 'craftoria:akite_dust');
    event.smelting('craftoria:akite_ingot', 'craftoria:raw_akite');
  }
});
