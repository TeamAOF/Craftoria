ItemEvents.modifyTooltips(event => {
  const direOres = [
    { id: 'ferricore', localKey: 'block.justdirethings.raw_ferricore_ore' },
    { id: 'blazegold', localKey: 'block.justdirethings.raw_blazegold_ore' },
    { id: 'celestigem', localKey: 'block.justdirethings.raw_celestigem_ore' },
    { id: 'eclipsealloy', localKey: 'block.justdirethings.raw_eclipsealloy_ore' }
  ];

  direOres.forEach(ore => {
    let oreId = `justdirethings:raw_${ore.id}`;
    if (!Item.exists(oreId)) oreId = oreId.replace('raw_', '');
    event.add(oreId, [
      Text.translate('tooltip.justdirethings.raw_ore.source_info', Text.translate(ore.localKey)).gray(),
      Text.translate('tooltip.justdirethings.raw_ore.check_emi').gray()
    ]);
  });

  event.add(/^justdirethings:raw_.*_ore$/, Text.translate('tooltip.justdirethings.raw_ore.crafting_note').red());
});
