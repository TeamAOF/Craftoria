ClientEvents.generateAssets('after_mods', (e) => {
  e.blockState('modern_industrialization:replicator_1', (bs) => {
    bs.simpleVariant('', 'modern_industrialization:block/replicator_1');
  });

  e.json('modern_industrialization:models/block/replicator_1', {
    // parent: 'modern_industrialization:block/replicator',
    casing: 'lv',
    default_overlays: {
      fluid_auto: 'modern_industrialization:block/overlays/fluid_auto',
      front: 'modern_industrialization:block/machines/replicator/overlay_front',
      front_active: 'modern_industrialization:block/machines/replicator/overlay_front_active',
      item_auto: 'modern_industrialization:block/overlays/item_auto',
      output: 'modern_industrialization:block/overlays/output',
      side: 'modern_industrialization:block/machines/replicator/overlay_side',
      side_active: 'modern_industrialization:block/machines/replicator/overlay_side_active',
    },
    loader: 'modern_industrialization:machine',
  });

  e.itemModel('modern_industrialization:replicator_1', (im) => {
    im.parent('modern_industrialization:block/replicator_1');
  });

  let sounds = {
    replicator_1: ['mi_sound_addon:replicator'],
    bending_machine: ['mi_sound_addon:packer'],
    alloy_smelter: ['mi_sound_addon:furnace'],
    canning_machine: ['mekanism:tile/compressor'],
    composter: ['mekanism:tile/pigment_mixer'],
    brewery: ['mi_sound_addon:distillery'],
  };

  Object.keys(sounds).forEach((key) => {
    sounds[key] = {
      category: 'block',
      sounds: sounds[key],
    };
  });

  e.json('mi_sound_addon:sounds', sounds);
});
