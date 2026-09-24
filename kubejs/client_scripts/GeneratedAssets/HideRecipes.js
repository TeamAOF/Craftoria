ClientEvents.generateAssets('after_mods', e => {
  e.json('emi:recipe/filters/hide_bloat.json', {
    filters: [
      {
        id: '/emi:/crafting/repairing/',
        category: 'minecraft:crafting',
      },
      {
        id: '/emi:/grindstone/repairing/',
        category: 'emi:grinding',
      },
      {
        id: '/emi:/anvil/repairing/tool/',
        category: 'emi:anvil_repairing',
      },
      {
        id: '/emi:/anvil/enchanting/.*/yigd/soulbound/1/',
        category: 'emi:anvil_repairing',
      },
      {
        id: '/emi:/anvil/enchanting/.*/ars_nouveau/reactive/4/',
        category: 'emi:anvil_repairing',
      },
    ],
  });
});
