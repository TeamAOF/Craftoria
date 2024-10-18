////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((event) => {
  const recipes = [
    // Block Breaker
    {
      output: 'justdirethings:blockbreakert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:blockbreakert1',
        D: 'mekanismtools:diamond_paxel',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:blockbreakert2',
    },

    // Block Placer
    {
      output: 'justdirethings:blockplacert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:blockplacert1',
        D: 'minecraft:dispenser',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:blockplacert2',
    },

    // Clicker
    {
      output: 'justdirethings:clickert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:clickert1',
        D: 'modularrouters:activator_module',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:clickert2',
    },

    // Sensor
    {
      output: 'justdirethings:sensort2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:sensort1',
        D: 'minecraft:calibrated_sculk_sensor',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:sensort2',
    },

    // Dropper
    {
      output: 'justdirethings:droppert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:droppert1',
        D: 'modularrouters:dropper_module',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:droppert2',
    },

    // Fluid Placer
    {
      output: 'justdirethings:fluidplacert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:fluidplacert1',
        D: 'sophisticatedbackpacks:advanced_pump_upgrade',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:fluidplacert2',
    },

    // Fluid Collector
    {
      output: 'justdirethings:fluidcollectort2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: '#c:ingots/steel',
        C: 'justdirethings:fluidcollectort1',
        D: 'sophisticatedbackpacks:advanced_pump_upgrade',
        E: '#craftoria:hulls/advanced',
      },
      id: 'justdirethings:fluidcollectort2',
    },

    // Blazebloom Goo
    {
      output: 'justdirethings:gooblock_tier2',
      pattern: ['BAB', 'CEC', 'BDB'],
      key: {
        D: 'minecraft:redstone',
        B: 'minecraft:blaze_powder',
        C: 'minecraft:nether_wart',
        A: 'minecraft:wither_skeleton_skull',
        E: 'justdirethings:gooblock_tier1',
      },
      id: 'justdirethings:gooblock_tier2',
    },

    // Flight Upgrade
    {
      output: 'justdirethings:upgrade_flight',
      pattern: ['CEG', 'HDF', 'BAB'],
      key: {
        A: 'mekanism:hdpe_elytra',
        B: 'occultism:awakened_feather',
        C: 'irons_spellbooks:lightning_upgrade_orb',
        D: 'justdirethings:upgrade_blank',
        E: 'ars_elemental:air_focus',
        F: 'ars_nouveau:ritual_flight',
        G: 'irons_spellbooks:cooldown_upgrade_orb',
        H: 'minecraft:end_crystal'
      },
      id: 'justdirethings:upgrade_flight'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });

  // JDT Raw Ore Processing
  ['ferricore', 'blazegold', 'eclipsealloy'].forEach((ore) => {
    event.recipes.mekanism.enriching(`4x justdirethings:raw_${ore}`, `justdirethings:raw_${ore}_ore`).id(`craftoria:justdirethings/enriching/${ore}`);
    event.recipes.modern_industrialization
      .macerator(2, 5 * 20)
      .itemIn(`justdirethings:raw_${ore}_ore`)
      .itemOut(`4x justdirethings:raw_${ore}`)
      .id(`craftoria:justdirethings/macerator/${ore}`);
  });

  ['celestigem', 'coal_t1', 'coal_t2', 'coal_t3', 'coal_t4'].forEach((ore) => {
    event.recipes.mekanism.enriching(`4x justdirethings:${ore}`, `justdirethings:raw_${ore}_ore`).id(`craftoria:justdirethings/enriching/${ore}`);
    event.recipes.modern_industrialization
      .macerator(2, 5 * 20)
      .itemIn(`justdirethings:raw_${ore}_ore`)
      .itemOut(`4x justdirethings:${ore}`)
      .id(`craftoria:justdirethings/macerator/${ore}`);
  });

  event.smithing('justdirethings:celestigem_paxel', 'justdirethings:celestigem_axe', 'justdirethings:celestigem_shovel')
    .template('justdirethings:celestigem_pickaxe');
  
});
