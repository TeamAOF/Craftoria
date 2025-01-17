ServerEvents.recipes((e) => {
  e.shaped('craftoria:blaze_block', ['AAA', 'AAA', 'AAA'], {
    A: 'minecraft:blaze_rod',
  });

  e.shapeless('9x minecraft:blaze_rod', ['craftoria:blaze_block']);

  e.shaped('8x craftoria:smokey_bricks', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:bricks',
    B: 'minecraft:black_dye',
  });

  e.shaped('4x craftoria:smokey_bricks_stairs', ['A  ', 'AA ', 'AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shaped('6x craftoria:smokey_bricks_slab', ['AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shaped('6x craftoria:smokey_bricks_wall', ['AAA', 'AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shapeless('craftoria:smokey_bricks_button', ['craftoria:smokey_bricks']);

  e.shaped('minecraft:name_tag', ['  n', ' ps', 'p  '], {
    n: '#c:nuggets/iron',
    p: 'minecraft:paper',
    s: '#c:slimeballs',
  }).id('craftoria:name_tag');

  e.smelting('irons_spellbooks:mithril_scrap', 'irons_spellbooks:raw_mithril').xp(40).cookingTime(400).id('craftoria:irons/mithril_scrap_from_raw');

  e.shaped('phantoms_utilities:spray_can', [' T ', 'SPS', 'SDS'], {
    T: 'pneumaticcraft:pressure_tube',
    S: 'modern_industrialization:steel_curved_plate',
    P: 'mekanism:painting_machine',
    D: 'industrialforegoing:dye_mixer',
  }).id('phantoms_utilities:spray_can');
});
