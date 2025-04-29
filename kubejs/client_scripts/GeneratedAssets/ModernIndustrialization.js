ClientEvents.generateAssets('after_mods', e => {
  let sounds = {
    bending_machine: ['mi_sound_addon:packer'],
    alloy_smelter: ['mi_sound_addon:furnace'],
    canning_machine: ['mekanism:tile/compressor'],
    composter: ['mekanism:tile/pigment_mixer'],
    brewery: ['mi_sound_addon:distillery'],
  };

  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    /** @type {{mod: Special.Mod, casing: string,overlay: string}} */
    let { mod, overlay, casing } = machine;
    if (!mod) mod = 'modern_industrialization';

    e.blockState(`${mod}:${id}`, bs => {
      bs.simpleVariant('', `${mod}:block/${id}`);
    });

    let modelJson = {
      casing: casing || 'lv',
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

    if (machine.sound) {
      sounds[machine.id] = [machine.sound];
    }
  }

  Object.keys(sounds).forEach(key => {
    sounds[key] = {
      category: 'block',
      sounds: sounds[key],
    };
  });

  e.json('mi_sound_addon:sounds', sounds);

  for (let [id, hatch] of Object.entries(global.customMIHatches)) {
    let mod = 'modern_industrialization';
    let { casing, types } = hatch;
    if (!casing || !types) {
      console.error(`Error registering '${id}' hatch: Missing required properties.`);
      continue;
    }

    let modelJson = {
      casing: casing,
      default_overlays: {
        fluid_auto: 'modern_industrialization:block/overlays/fluid_auto',
        item_auto: 'modern_industrialization:block/overlays/item_auto',
        output: 'modern_industrialization:block/overlays/output',
      },
      loader: 'modern_industrialization:machine',
    };

    Object.keys(types).forEach(type => {
      let hatchModel = modelJson;
      hatchModel.default_overlays.front = `${mod}:block/machines/hatch_${type}/overlay_front`;
      hatchModel.default_overlays.side = `${mod}:block/machines/hatch_${type}/overlay_side`;

      ['input', 'output'].forEach(io => {
        e.blockState(`${mod}:${id}_${type}_${io}_hatch`, bs => {
          bs.simpleVariant('', `${mod}:block/${id}_${type}_${io}_hatch`);
        });
        e.itemModel(`${mod}:${id}_${type}_${io}_hatch`, im => {
          im.parent(`${mod}:block/${id}_${type}_${io}_hatch`);
        });

        e.json(`${mod}:models/block/${id}_${type}_${io}_hatch`, hatchModel);

        // console.log(`Registered hatch: ${id}_${type}_${io}_hatch`);
        // console.log(`With model: ${mod}:models/block/${id}_${type}_${io}_hatch`);

        // for (let [k, v] of Object.entries(hatchModel)) {
        //   let logMsg = `Model property: ${k} ->`;
        //   if (k === 'default_overlays') {
        //     console.log(logMsg);
        //     Object.entries(v).forEach(([overlayKey, overlayValue]) => {
        //       console.log(`  ${overlayKey}: ${overlayValue}`);
        //     });
        //   } else console.log(`${logMsg} ${v}`);
        // }
      });
    });
  }
});
