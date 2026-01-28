ServerEvents.recipes(e => {
  const arsNouveau = ArsNouveauHelper(e);
  const dataNessense = DataNEssenceHelper(e);
  const { occultism } = e.recipes;

  Color.DYE.forEach(color => {
    arsNouveau.crush([
      { stack: `pastel:${color}_pigment`, chance: 1 },
      { stack: `pastel:${color}_sapling`, chance: 0.02 }
    ], `pastel:${color}_leaves`, `craftoria:pastel/ars_nouveau_crush/${color}_leaves_to_pigment`);
  });

  e.remove({ id: 'occultism:crushing/amethyst_dust_from_gem' });

  // Helper function to generate the correct item name based on gem type and variant
  const getGemItemName = (gem, variant) => {
    if (gem === 'amethyst') {
      switch (variant) {
        case 'small_bud':
          return 'minecraft:small_amethyst_bud';
        case 'medium_bud':
          return 'minecraft:medium_amethyst_bud';
        case 'large_bud':
          return 'minecraft:large_amethyst_bud';
        default:
          return `minecraft:amethyst_${variant}`;
      }
    } else {
      switch (variant) {
        case 'small_bud':
          return `pastel:small_${gem}_bud`;
        case 'medium_bud':
          return `pastel:medium_${gem}_bud`;
        case 'large_bud':
          return `pastel:large_${gem}_bud`;
        default:
          return `pastel:${gem}_${variant}`;
      }
    }
  };

  const gems = ['amethyst', 'topaz', 'citrine', 'onyx', 'moonstone'];
  const powderCounts = {
    shard: 2,
    block: 1,
    small_bud: 4,
    medium_bud: 6,
    large_bud: 8,
    cluster: 16,
  };

  // Recipe constants
  const RECIPE_CONFIGS = {
    occultism: { crushingTime: 200, ignoreCrushingMultiplier: true },
    dataNessence: { processingTime: 100 },
  };

  gems.forEach(gem => {
    Object.entries(powderCounts).forEach(([variant, count]) => {
      const input = getGemItemName(gem, variant);
      const output = `${count}x pastel:${gem}_powder`;

      occultism.crushing(
        RecipeResult.of(`pastel:${gem}_powder`, count), input,
        RECIPE_CONFIGS.occultism.crushingTime, -1, -1, RECIPE_CONFIGS.occultism.ignoreCrushingMultiplier
      ).id(`craftoria:pastel/occultism_crushing/${gem}_${variant}_to_powder`);

      arsNouveau.crush(output, input, `craftoria:pastel/ars_nouveau_crush/${gem}_${variant}_to_powder`);

      if (variant !== 'shard') {
        dataNessense.entropic_processing(
          output, input, RECIPE_CONFIGS.dataNessence.processingTime,
          `craftoria:pastel/dne_entropic_processing/${gem}_${variant}_to_powder`
        );
      }
    });
  });
});
