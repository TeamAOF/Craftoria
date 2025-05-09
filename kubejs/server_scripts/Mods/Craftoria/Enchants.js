ServerEvents.generateData('after_mods', e => {
  /** @type {Special.Enchantment} */
  const enchantsToDisable = ['apothic_enchanting:boon_of_the_earth', 'ars_elemental:soulbound', 'deeperdarker:catalysis'];

  enchantsToDisable.forEach(enchant => {
    let { namespace, path } = ID.mc(enchant);
    e.json(`${namespace}:enchantment/${path}`, {
      'neoforge:conditions': [
        {
          type: 'neoforge:false',
        },
      ],
    });
  });
});

ServerEvents.tags('enchantment', e => {
  e.remove('minecraft:non_treasure', ['apothic_enchanting:boon_of_the_earth']);
  e.remove('minecraft:treasure', ['deeperdarker:catalysis']);
});
