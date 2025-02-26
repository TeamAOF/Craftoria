ServerEvents.generateData('after_mods', (e) => {
  e.json('apotheosis:affixes/armor/attribute/unbound', { 'neoforge:conditions': [{ type: 'neoforge:false' }] });
});
