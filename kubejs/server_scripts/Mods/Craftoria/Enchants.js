ServerEvents.generateData('after_mods', (e) => {
  e.json('apothic_enchanting:enchantment/boon_of_the_earth', {
    'neoforge:conditions': [
      {
        type: 'neoforge:false',
      },
    ],
  });
});
