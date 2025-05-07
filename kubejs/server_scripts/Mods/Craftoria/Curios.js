ServerEvents.generateData('after_mods', event => {
  const slots = {
    backpack: {
      order: 81,
      icon: 'craftoria:slot/backpack',
    },
    belt: {
      size: 2,
      isOverride: true,
    },
    face: {
      order: 50,
      icon: 'craftoria:slot/face',
      add_cosmetic: true,
    },
    ring: {
      size: 4,
      isOverride: true,
    },
    // robe: {
    //   add_cosmetic: true,
    // },
    // magic_trinket: {},
    // magic_curio: {
    //   size: 2,
    // },

    curio: {
      size: 0,
      replace: true,
      isOverride: true,
    },
    bundle: {
      icon: 'craftoria:slot/bundle',
    },
  };

  const baseSlot = {
    size: 1,
    icon: 'curios:slot/empty_curio_slot',
    add_cosmetic: false,
    validators: ['curios:tag'],
  };

  const path = 'craftoria:curios';
  for (let [slotKey, slotValues] of Object.entries(slots)) {
    if (slotValues.isOverride) {
      delete slotValues.isOverride;
      event.json(`${path}/slots/${slotKey}`, slotValues);
      continue;
    }

    let slotData = JSON.parse(JSON.stringify(baseSlot));

    for (let [k, v] of Object.entries(slotValues)) {
      slotData[k] = v;
    }

    event.json(`${path}/slots/${slotKey}`, slotData);
  }

  event.json(`${path}/entities/slots`, {
    entities: ['player'],
    slots: Object.keys(slots),
  });
});

ServerEvents.tags('item', e => {
  e.get('curios:back').objectIds.forEach(objId => {
    if (!objId.path.includes('backpack')) return;
    e.remove('curios:back', objId);
    e.add('curios:backpack', objId);
  });

  const curioTags = e.tags
    .keySet()
    .toArray()
    .filter(tag => tag.namespace === 'curios');

  /* Not sure if I'll swap the slots for these, as 'back' slot would be pretty empty if I do.
  const toRobe = [
    /^relics:.*_(cloak|cape|robe|mantle)$/,
    /^reliquified_.*:.*_(cloak|cape|robe|mantle)$/,
    /^reliquified_.*:(cloak|cape|robe|mantle)_.*$/,
    'reliquary:twilight_cloak',
  ];

  toRobe.forEach(id => {
    curioTags.forEach(tag => e.remove(tag, id));
    e.add('curios:robe', id);
  });
  */

  const toFace = [
    /^artifacts:.*_scarf$/,
    'artifacts:snorkel',
    'artifacts:night_vision_goggles',
    'ars_technica:spy_monocle',
    'create:goggles',
    'reliquified_twilight_forest:goblin_nose',
    'occultism:otherworld_goggles',
  ];

  toFace.forEach(id => {
    curioTags.forEach(tag => e.remove(tag, id));
    e.add('curios:face', id);
  });

  /* Can't change these, their effects are hardcoded to the slot, takes a bit more work to get them working.
  e.remove('curios:necklace', /^alshanex_familiars:.*_trinket$/);
  e.remove('curios:ring', /^alshanex_familiars:.*_curio$/);
  e.add('curios:magic_trinket', /^alshanex_familiars:.*_trinket$/);
  e.add('curios:magic_curio', /^alshanex_familiars:.*_curio$/);
  */

  e.get('curios:curio').objectIds.forEach(objId => {
    if (objId.namespace.includes('ae2') || objId.namespace.includes('extendedae') || objId.namespace.includes('ae2wtlib')) {
      e.remove('curios:curio', objId);
      e.add('curios:qio', objId);
    }
  });

  e.remove('curios:curio', ['integratedterminals:terminal_storage_portable']);
  e.remove('curios:hands', 'occultism:storage_remote');
  e.remove('curios:charm', ['phantoms_utilities:sleep_charm']);
  e.remove('curios:belt', ['ars_additions:warp_index', 'ars_additions:stabilized_warp_index']);

  e.add('curios:qio', [
    'integratedterminals:terminal_storage_portable',
    'occultism:storage_remote',
    'ars_additions:warp_index',
    'ars_additions:stabilized_warp_index',
  ]);

  e.add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet', 'artifacts:whoopee_cushion']);
  e.add('curios:body', ['mekanism:jetpack', 'mekanism:jetpack_armored']);
  e.add('curios:charm', ['reliquary:fortune_coin']);
});
