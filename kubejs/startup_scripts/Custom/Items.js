StartupEvents.registry('item', (e) => {
  e.create('craftoria:logo').displayName('Craftoria');
  e.create('craftoria:completionist').displayName('Completionist Medal').rarity('Epic');
  e.create('craftoria:universal_press').displayName('Universal Press').tooltip('Seems to be too complex for an inscriber');

  ['Helmet', 'Chestplate', 'Leggings', 'Boots', 'Sword'].forEach((mold) => {
    e.create(`craftoria:quantum_${mold.toLowerCase()}_mold`).displayName(`${mold} Mold`).maxStackSize(1);
  });

  // Custom
  e.create('craftoria:ice_essence').displayName('§bEssence of Ice').tooltip('');
  e.create('craftoria:fire_essence').displayName('§6Essence of Fire').tooltip('');
  e.create('craftoria:nature_essence').displayName('§2Essence of Nature').tooltip('');
  e.create('craftoria:dark_essence').displayName('§5Essence of Darkness').tooltip('');
});
