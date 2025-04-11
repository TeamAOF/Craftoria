// priority: 997
ServerEvents.recipes((e) => {
  const mekanism = MekanismHelper(e);

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
  e.remove({ mod: 'mekanism', output: 'mekanism:block_salt' });
});
