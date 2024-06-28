RecipeViewerEvents.removeEntries('item', e => {
  let hide = {
    'steel': ['mekanism', 'mffs'],
    'bronze': ['mekanism'],
    'copper': ['mekanism'],
    'tin': ['mekanism'],
    'uranium': ['mekanism'],
    'diamond': ['mekanism'],
    'gold': ['mekanism'],
    'iron': ['mekanism'],
    'emerald': ['mekanism'],
    'lapis_lazuli': ['mekanism'],
    'quartz': ['mekanism'],
    'coal': ['mekanism'],
    'lead': ['mekanism'],
    'silver': ['occultism', 'moremekanismprocessing'],
    'aluminum': ['moremekanismprocessing'],
    'tungsten': ['moremekanismprocessing'],
    'titanium': ['moremekanismprocessing'],
    'platinum': ['moremekanismprocessing'],
    'nickel': ['moremekanismprocessing'],
    'iridium': ['moremekanismprocessing'],
  };

  let types = ['ingot', 'block', 'dust', 'nugget', 'ore', 'raw'];

  [
    'mffs:steel_compound',
  ].forEach(id => {
    e.remove(id);
  });

  for (let [key, value] in hide) {
    value.forEach(mod => {
      if (mod === 'mekanism') {
        types.forEach(type => {
          e.remove(`${mod}:${type}_${key}`);
          if (type === 'raw')
            e.remove(`${mod}:block_${type}_${key}`);
        });
      } else {
        types.forEach(type => {
          if (type !== 'raw')
            e.remove(`${mod}:${key}_${type}`);
          else {
            e.remove(`${mod}:${type}_${key}`);
            e.remove(`${mod}:${type}_${key}_block`);
          }

        });
      }
    });
  }

  e.remove('@hammerlib');
});
