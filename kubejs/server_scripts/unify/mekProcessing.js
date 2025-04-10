// priority: 997
ServerEvents.recipes((e) => {
  const mekanism = MekanismHelper(e);

  // let removeMek = [];

  // removeMek.forEach((id) => {
  //   e.remove({ id: id });
  // });

  [metals, gems].forEach((materials) => {
    materials.forEach((material) => {
      let dust = getItemFromTag(`#c:dusts/${material}`);
      if (dust) {
        if (Item.exists(`mekanism:dust_${material}`)) e.remove({ type: 'mekanism:crushing', output: `mekanism:dust_${material}` });
        if (checkTagSize(`#c:ingots/${material}`) > 0) mekanism.crushing(dust, `#c:ingots/${material}`);
        else if (checkTagSize(`#c:gems/${material}`) > 0) mekanism.crushing(dust, `#c:gems/${material}`);
      }
    });
  });

  mekanism.crushing('modern_industrialization:coal_dust', 'minecraft:coal');

  // let oreProcessing = (metal) => {
  //   let dust = getItemFromTag(`#c:dusts/${metal}`);
  //   if (dust) {
  //     if (Item.exists(`mekanism:dust_${metal}`)) e.remove({ type: 'mekanism:enriching', output: `mekanism:dust_${metal}` });
  //     mekanism.enriching(`2x ${dust}`, `#c:ores/${metal}`);
  //     mekanism.enriching(`4x ${dust}`, `3x #c:raw_materials/${metal}`);
  //     mekanism.enriching(`12x ${dust}`, `#c:storage_blocks/raw_${metal}`);
  //     mekanism.enriching(dust, `#c:dirty_dusts/${metal}`);
  //     if (debug) console.info(`Added ore processing for ${metal}.`);
  //   }
  // };

  // metals.forEach((metal) => {
  //   oreProcessing(metal);
  // });

  e.remove({ mod: 'mekanism', output: 'mekanism:block_salt' });
});
