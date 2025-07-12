ServerEvents.recipes(e => {
  const create = CreateHelper(e);
  const arsNouveau = ArsNouveauHelper(e);
  const { modern_industrialization, occultism } = e.recipes;
  const mekanism = MekanismHelper(e);

  Color.DYE.forEach(color => {
    // create.crushing(450)
    //   .itemIn(`pastel:${color}_leaves`)
    //   .itemOut(`pastel:${color}_pigment`)
    //   .itemOut(`pastel:${color}_sapling`, 0.02)
    //   .id(`craftoria:pastel/crushing/${color}_leaves_to_pigment`);

    arsNouveau.crush([
      { stack: `pastel:${color}_pigment`, chance: 1 },
      { stack: `pastel:${color}_sapling`, chance: 0.02 }
    ], `pastel:${color}_leaves`, `craftoria:pastel/ars_nouveau_crush/${color}_leaves_to_pigment`);
  });

  e.remove({ id: 'occultism:crushing/amethyst_dust_from_gem' });

  const gems = ['amethyst', 'topaz', 'citrine', 'onyx', 'moonstone'];

  gems.forEach(gem => {
    let shardItem = Ingredient.of(`#pastel:${gem}_crystals`).itemIds.toArray().find(id => id.includes('_shard'));

    // if (gem !== 'amethyst')
    //   create.crushing(150)
    //     .itemIn(`pastel:${gem}_block`)
    //     .itemOut(`3x pastel:${gem}_shard`)
    //     .itemOut(`pastel:${gem}_shard`, 0.5)
    //     .id(`craftoria:pastel/create_crushing/${gem}_block_to_shard`);

    // create.milling(450)
    //   .itemIn(shardItem)
    //   .itemOut(`2x pastel:${gem}_powder`)
    //   .id(`craftoria:pastel/create_milling/${gem}_shard_to_powder`);

    // modern_industrialization.macerator(2, 100)
    //   .itemIn(shardItem)
    //   .itemOut(`2x pastel:${gem}_powder`)
    //   .id(`craftoria:pastel/mi_macerator/${gem}_shard_to_powder`);

    // mekanism.crushing(`2x pastel:${gem}_powder`, shardItem, `craftoria:pastel/mekanism_crushing/${gem}_shard_to_powder`);


    occultism.crushing(RecipeResult.of(`pastel:${gem}_powder`, 2), shardItem, 200, -1, -1, true).id(`craftoria:pastel/occultism_crushing/${gem}_shard_to_powder`);
    arsNouveau.crush(`2x pastel:${gem}_powder`, shardItem, `craftoria:pastel/ars_nouveau_crush/${gem}_shard_to_powder`);
  });
});
