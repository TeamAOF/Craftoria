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

  let types = ['ingot', 'block', 'dust', 'nugget', 'ore'];

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
        });
      } else {
        types.forEach(type => {
          e.remove(`${mod}:${key}_${type}`);
        });
      }
    });
  }
});
