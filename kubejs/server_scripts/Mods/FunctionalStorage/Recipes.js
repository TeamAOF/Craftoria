ServerEvents.recipes((e) => {

  e.shaped('functionalstorage:water_generator_upgrade', [
    'ACA', 'ABA', 'ACA'], 
    {
    A: '#c:stones',
    B: 'ars_elemental:everfull_urn',
    C: 'modern_industrialization:steel_large_plate',
  }).id('functionalstorage:water_generator_upgrade');
});
