ServerEvents.recipes((e) => {
  // Snad
  arsImbuement(
    e,
    'utilitarian:snad',
    'minecraft:sand',
    ['ars_nouveau:earth_essence', 'farmingforblockheads:red_fertilizer', 'farmingforblockheads:green_fertilizer'],
    10000
  );

  arsImbuement(
    e,
    'utilitarian:red_snad',
    'minecraft:red_sand',
    ['ars_nouveau:earth_essence', 'farmingforblockheads:red_fertilizer', 'farmingforblockheads:green_fertilizer'],
    10000
  );

  arsImbuement(
    e,
    'utilitarian:soul_snad',
    'minecraft:soul_sand',
    ['ars_nouveau:earth_essence', 'farmingforblockheads:red_fertilizer', 'farmingforblockheads:green_fertilizer'],
    10000
  );
});
