ClientEvents.generateAssets('after_mods', e => {
  e.json('emi:recipe/filters/hide_bloat.json', {
    filters: [
      {
        id: '/emi:/crafting/repairing/',
        category: 'minecraft:crafting'
      },
      {
        id: '/emi:/grindstone/repairing/',
        category: 'emi:grinding'
      },
      {
        id: '/emi:/anvil/repairing/tool/',
        category: 'emi:grinding'
      },
    ]
  });
});
