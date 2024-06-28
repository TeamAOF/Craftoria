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
      switch (mod) {
        case 'mekanism':
          types.forEach(type => {
            e.remove(`${mod}:${type}_${key}`);
            if (type === 'raw')
              e.remove(`${mod}:block_${type}_${key}`);
          });
          break;

        case 'moremekanismprocessing':
          types.forEach(type => {
            if (type !== 'dust')
              e.remove(`${mod}:${key}_${type}`);
            else
              e.remove(`${mod}:${type}_${key}`);
          });
          break;
        default:
          types.forEach(type => {
            if (type !== 'raw')
              e.remove(`${mod}:${key}_${type}`);
            else {
              e.remove(`${mod}:${type}_${key}`);
              e.remove(`${mod}:${type}_${key}_block`);
            }
          });
          break;
      }
    });
  }

  e.remove('@hammerlib');
});
