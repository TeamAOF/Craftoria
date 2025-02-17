ClientEvents.generateAssets('after_mods', (e) => {
  global.customMIMachines.forEach((machine) => {
    e.blockState(`modern_industrialization:${machine.id}`, (bs) => {
      bs.simpleVariant('', `modern_industrialization:block/${machine.id}`);
    });

    let modelJson = {
      casing: 'lv',
      default_overlays: {
        fluid_auto: 'modern_industrialization:block/overlays/fluid_auto',
        front: `modern_industrialization:block/machines/${machine.id}/overlay_front`,
        front_active: `modern_industrialization:block/machines/${machine.id}/overlay_front_active`,
        item_auto: 'modern_industrialization:block/overlays/item_auto',
        output: 'modern_industrialization:block/overlays/output',
      },
      loader: 'modern_industrialization:machine',
    };

    if (machine.overlay) {
      modelJson.default_overlays.front = `modern_industrialization:block/machines/${machine.overlay}/overlay_front`;
      modelJson.default_overlays.front_active = `modern_industrialization:block/machines/${machine.overlay}/overlay_front_active`;
    }

    if (machine.casing) {
      modelJson.casing = machine.casing;
    }

    if (machine.hasSides) {
      if (machine.overlay) {
        modelJson.default_overlays.side = `modern_industrialization:block/machines/${machine.overlay}/overlay_side`;
        modelJson.default_overlays.side_active = `modern_industrialization:block/machines/${machine.overlay}/overlay_side_active`;
      } else {
        modelJson.default_overlays.side = `modern_industrialization:block/machines/${machine.id}/overlay_side`;
        modelJson.default_overlays.side_active = `modern_industrialization:block/machines/${machine.id}/overlay_side_active`;
      }
    }

    e.json(`modern_industrialization:models/block/${machine.id}`, modelJson);

    e.itemModel(`modern_industrialization:${machine.id}`, (im) => {
      im.parent(`modern_industrialization:block/${machine.id}`);
    });
  });

  let sounds = {
    bending_machine: ['mi_sound_addon:packer'],
    alloy_smelter: ['mi_sound_addon:furnace'],
    canning_machine: ['mekanism:tile/compressor'],
    composter: ['mekanism:tile/pigment_mixer'],
    brewery: ['mi_sound_addon:distillery'],
  };

  global.customMIMachines.forEach((machine) => {
    if (machine.sound) {
      sounds[machine.id] = [machine.sound];
    }
  });

  Object.keys(sounds).forEach((key) => {
    sounds[key] = {
      category: 'block',
      sounds: sounds[key],
    };
  });

  e.json('mi_sound_addon:sounds', sounds);
});
