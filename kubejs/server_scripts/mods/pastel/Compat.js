ServerEvents.recipes(e => {
  const arsNouveau = ArsNouveauHelper(e);
  const dne = DataNEssenceHelper(e);
  const { occultism } = e.recipes;

  Color.DYE.forEach(color => {
    arsNouveau.crush([
      { stack: `pastel:${color}_pigment`, chance: 1 },
      { stack: `pastel:${color}_sapling`, chance: 0.02 }
    ], `pastel:${color}_leaves`, `craftoria:pastel/ars_nouveau_crush/${color}_leaves_to_pigment`);
  });

  e.remove({ id: 'occultism:crushing/amethyst_dust_from_gem' });

  const gems = ['amethyst', 'topaz', 'citrine', 'onyx', 'moonstone'];
  const powderCounts = {
    shard: 2,
    block: 1,
    small_bud: 4,
    medium_bud: 6,
    large_bud: 8,
    cluster: 16
  };

  gems.forEach(gem => {
    for (let [key, count] of Object.entries(powderCounts)) {
      let item = `pastel:${gem}_powder`;
      let output = `${count}x ${item}`;
      let input;

      if (gem !== 'amethyst') {
        switch (key) {
          case 'small_bud':
            input = `pastel:small_${gem}_bud`;
            break;
          case 'medium_bud':
            input = `pastel:medium_${gem}_bud`;
            break;
          case 'large_bud':
            input = `pastel:large_${gem}_bud`;
            break;
          default:
            input = `pastel:${gem}_${key}`;
            break;
        }
      } else {
        switch (key) {
          case 'small_bud':
            input = 'minecraft:small_amethyst_bud';
            break;
          case 'medium_bud':
            input = 'minecraft:medium_amethyst_bud';
            break;
          case 'large_bud':
            input = 'minecraft:large_amethyst_bud';
            break;
          default:
            input = `minecraft:amethyst_${key}`;
            break;
        }
      }

      occultism.crushing(RecipeResult.of(`pastel:${gem}_powder`, count), input, 200, -1, -1, true).id(`craftoria:pastel/occultism_crushing/${gem}_${key}_to_powder`);
      arsNouveau.crush(output, input, `craftoria:pastel/ars_nouveau_crush/${gem}_${key}_to_powder`);
      if (key !== 'shard') dne.entropic_processing(output, input, 100, `craftoria:pastel/dne_entropic_processing/${gem}_${key}_to_powder`);
    }
  });
});
