ServerEvents.generateData('after_mods', (event) => {
  const overrides = {
    'actuallyadditions:black_quartz': 'actuallyadditions:black_quartz_block',
    'minecraft:brick': 'minecraft:bricks',
    'minecraft:nether_brick': 'minecraft:nether_bricks',
    'irons_spellbooks:mithril_scrap': 'irons_spellbooks:mithril_ingot',
    'minecraft:nether_wart': 'minecraft:nether_wart_block',
  };

  let overridesData = {};
  for (let key in overrides) {
    overridesData[key] = {
      variant: overrides[key],
    };
  }

  event.json('megacells:data_maps/item/compression_overrides', {
    values: overridesData,
  });
});
