ServerEvents.recipes(e => {
  const ars = ArsNouveauHelper(e);

  // Snad
  ars.imbuementChamber(
    'utilitarian:snad',
    'minecraft:sand',
    ['ars_nouveau:earth_essence', 'ars_nouveau:water_essence', 'farm_and_charm:fertilizer'],
    10000
  );

  ars.imbuementChamber(
    'utilitarian:red_snad',
    'minecraft:red_sand',
    ['ars_nouveau:earth_essence', 'ars_nouveau:water_essence', 'farm_and_charm:fertilizer'],
    10000
  );

  ars.imbuementChamber(
    'utilitarian:soul_snad',
    'minecraft:soul_sand',
    ['ars_nouveau:earth_essence', 'ars_nouveau:water_essence', 'farm_and_charm:fertilizer'],
    10000
  );

  e.remove({ output: 'utilitarian:snad' });
  e.remove({ output: 'utilitarian:red_snad' });
  e.remove({ output: 'utilitarian:soul_snad' });
});
