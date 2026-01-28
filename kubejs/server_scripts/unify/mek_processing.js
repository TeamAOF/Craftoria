// priority: 997
ServerEvents.recipes(e => {
  const mekanism = MekanismHelper(e);

  [metals, gems].forEach(materials => {
    materials.forEach(material => {
      let dust = getItemFromTag(`#c:dusts/${material}`);
      if (dust) {
        if (Item.exists(`mekanism:dust_${material}`)) e.remove({ type: 'mekanism:crushing', output: `mekanism:dust_${material}` });
        if (checkTagSize(`#c:ingots/${material}`) > 0) mekanism.crushing(dust, `#c:ingots/${material}`);
        else if (checkTagSize(`#c:gems/${material}`) > 0) mekanism.crushing(dust, `#c:gems/${material}`);
      }
    });
  });

  global.mekMaterials.forEach(material => {
    mekanism.enriching(`4x craftoria:${material.name}_dust`, `3x #c:raw_materials/${material.name}`);
    mekanism.enriching(`2x craftoria:${material.name}_dust`, `#c:ores/${material.name}`);
    mekanism.enriching(`1x craftoria:${material.name}_dust`, `#c:dirty_dusts/${material.name}`);
    mekanism.enriching(`18x craftoria:${material.name}_dust`, `#c:storage_blocks/raw_${material.name}`);

    mekanism.crushing(`1x craftoria:dirty_${material.name}_dust`, `#c:clumps/${material.name}`);

    mekanism.purifying(`2x craftoria:${material.name}_clump`, `#c:raw_materials/${material.name}`, '1x mekanism:oxygen', true);
    mekanism.purifying(`3x craftoria:${material.name}_clump`, `#c:ores/${material.name}`, '1x mekanism:oxygen', true);
    mekanism.purifying(`1x craftoria:${material.name}_clump`, `#c:shards/${material.name}`, '1x mekanism:oxygen', true);
    mekanism.purifying(`18x craftoria:${material.name}_clump`, `#c:storage_blocks/raw_${material.name}`, '2x mekanism:oxygen', true);

    mekanism.injecting(`8x craftoria:${material.name}_shard`, `3x #c:raw_materials/${material.name}`, '1x mekanism:hydrogen_chloride', true);
    mekanism.injecting(`4x craftoria:${material.name}_shard`, `#c:ores/${material.name}`, '1x mekanism:hydrogen_chloride', true);
    mekanism.injecting(`1x craftoria:${material.name}_shard`, `#c:shards/${material.name}`, '1x mekanism:hydrogen_chloride', true);
    mekanism.injecting(`24x craftoria:${material.name}_shard`, `#c:storage_blocks/raw_${material.name}`, '2x mekanism:hydrogen_chloride', true);

    mekanism.crystallizing(`craftoria:${material.name}_crystal`, `200x craftoria:clean_${material.name}_slurry`);

    mekanism.washing(`1x craftoria:clean_${material.name}_slurry`, '5x water', `1x craftoria:dirty_${material.name}_slurry`);

    mekanism.dissolution(`2000x craftoria:dirty_${material.name}_slurry`, `3x #c:raw_materials/${material.name}`, '1x mekanism:sulfuric_acid', true);
    mekanism.dissolution(`1000x craftoria:dirty_${material.name}_slurry`, `#c:ores/${material.name}`, '1x mekanism:sulfuric_acid', true);
    mekanism.dissolution(`6000x craftoria:dirty_${material.name}_slurry`, `#c:storage_blocks/raw_${material.name}`, '2x mekanism:sulfuric_acid', true);
  });

  mekanism.crushing('modern_industrialization:coal_dust', 'minecraft:coal');
  e.remove({ mod: 'mekanism', output: 'mekanism:block_salt' });
});
