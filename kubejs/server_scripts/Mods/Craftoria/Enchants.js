ServerEvents.generateData('after_mods', (e) => {
  const enchantsToDisable = ['apothic_enchanting:enchantment/boon_of_the_earth', 'ars_elemental:enchantment/soulbound'];

  enchantsToDisable.forEach((enchant) => {
    e.json(enchant, {
      'neoforge:conditions': [
        {
          type: 'neoforge:false',
        },
      ],
    });
  });
});
