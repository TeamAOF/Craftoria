ServerEvents.generateData('after_mods', e => {
  /** @type {Special.Enchantment} */
  const enchantsToDisable = ['ars_elemental:soulbound', 'deeperdarker:catalysis'];

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
  e.remove('minecraft:treasure', ['deeperdarker:catalysis']);
});
