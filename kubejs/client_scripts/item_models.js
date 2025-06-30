ClientEvents.generateAssets('after_mods', event => {

  /** @type {Record<Special.Item, {parent?: string, textures?: Record<string, string>}>} */
  const itemModels = {
    'sfm:labelgun': {},
    'justdirethings:time_wand': {},
    'ars_nouveau:dominion_wand': {},
    'ars_additions:advanced_dominion_wand': {},
    'ars_controle:remote': {},
    'advanced_ae:throughput_monitor_configurator': {},
    'laserio:laser_wrench': {},
    'gag:labeling_tool': {},
    'fluxnetworks:flux_configurator': {
      textures: {
        layer0: 'fluxnetworks:item/flux_configurator_layer0',
        layer1: 'fluxnetworks:item/flux_configurator_layer1',
      },
    },
    'minecraft:shears': {},
    'reliquary:shears_of_winter': { parent: 'reliquary:item/default_weapon_item' },
    'integrateddynamics:wrench': {},
    'integrateddynamics:labeller': {},
    'mcwwindows:hammer': {},
    'mcwwindows:key': {},
    'mcwroofs:roofing_hammer': {},
  };

  for (const [model, data] of Object.entries(itemModels)) {
    let { namespace, path } = ID.mc(model);
    if (namespace === 'minecraft' && !model.startsWith('minecraft:')) console.warn(`${model} was given a namespace of 'minecraft', are you sure this is correct?`);
    if (!data.parent) data.parent = 'minecraft:item/handheld';
    if (!data.textures) data.textures = {};
    if (!data.textures.layer0) data.textures.layer0 = `${namespace}:item/${path}`;
    event.json(`${namespace}:models/item/${path}`, data);
  }
});
