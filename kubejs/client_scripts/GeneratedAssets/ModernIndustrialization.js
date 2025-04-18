ClientEvents.generateAssets('after_mods', e => {
  global.customMIMachines.forEach(machine => {
    /** @type {{id: string, mod: Special.Mod, casing: string}} */
    let { id, mod, overlay } = machine;
    if (!mod) mod = 'modern_industrialization';

    e.blockState(`${mod}:${id}`, bs => {
      bs.simpleVariant('', `${mod}:block/${id}`);
    });

    let modelJson = {
      casing: machine.casing || 'lv',
      default_overlays: machine.default_overlays || {
        fluid_auto: 'modern_industrialization:block/overlays/fluid_auto',
        item_auto: 'modern_industrialization:block/overlays/item_auto',
        output: 'modern_industrialization:block/overlays/output',
        front: `${mod}:block/machines/${overlay || id}/overlay_front`,
        front_active: `${mod}:block/machines/${overlay || id}/overlay_front_active`,
      },
      loader: 'modern_industrialization:machine',
    };

    if (machine.hasSides) {
      modelJson.default_overlays.side = `${mod}:block/machines/${overlay || id}/overlay_side`;
      modelJson.default_overlays.side_active = `${mod}:block/machines/${overlay || id}/overlay_side_active`;
    }

    e.json(`${mod}:models/block/${id}`, modelJson);

    e.itemModel(`${mod}:${id}`, im => {
      im.parent(`${mod}:block/${id}`);
    });
  });

  let sounds = {
    bending_machine: ['mi_sound_addon:packer'],
    alloy_smelter: ['mi_sound_addon:furnace'],
    canning_machine: ['mekanism:tile/compressor'],
    composter: ['mekanism:tile/pigment_mixer'],
    brewery: ['mi_sound_addon:distillery'],
  };

  global.customMIMachines.forEach(machine => {
    if (machine.sound) {
      sounds[machine.id] = [machine.sound];
    }
  });

  Object.keys(sounds).forEach(key => {
    sounds[key] = {
      category: 'block',
      sounds: sounds[key],
    };
  });

  e.json('mi_sound_addon:sounds', sounds);
});
