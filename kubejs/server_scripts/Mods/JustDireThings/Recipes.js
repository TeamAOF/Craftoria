
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [

    // Block Breaker
    {
      output: 'justdirethings:blockbreakert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:blockbreakert1',
        D: 'modern_industrialization:invar_rotary_blade',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:blockbreakert2'
    },

    // Block Placer
    {
      output: 'justdirethings:blockplacert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:blockplacert1',
        D: 'minecraft:dispenser',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:blockplacert2'
    },

    // Clicker
    {
      output: 'justdirethings:clickert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:clickert1',
        D: 'modularrouters:activator_module',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:clickert2'
    },

    // Sensor
    {
      output: 'justdirethings:sensort2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:sensort1',
        D: 'minecraft:calibrated_sculk_sensor',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:sensort2'
    },

    // Dropper
    {
      output: 'justdirethings:droppert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:droppert1',
        D: 'modularrouters:dropper_module',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:droppert2'
    },

    // Fluid Placer
    {
      output: 'justdirethings:fluidplacert2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:fluidplacert1',
        D: 'modern_industrialization:steel_fluid_output_hatch',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:fluidplacert2'
    },

    // Fluid Collector
    {
      output: 'justdirethings:fluidcollectort2',
      pattern: ['ADA', 'BCB', 'AEA'],
      key: {
        A: 'justdirethings:celestigem',
        B: 'mekanism:ultimate_control_circuit',
        C: 'justdirethings:fluidcollectort1',
        D: 'modern_industrialization:steel_fluid_input_hatch',
        E: 'modern_industrialization:basic_machine_hull'
      },
      id: 'justdirethings:fluidcollectort2'
    },

        // Blazebloom Goo
        {
          output: 'justdirethings:gooblock_tier2',
          pattern: ['BAB', 'CEC', 'BDB'],
          key: {
            D: 'minecraft:redstone',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:nether_wart',
            A: 'minecraft:nether_star',
            E: 'justdirethings:gooblock_tier1'
          },
          id: 'justdirethings:gooblock_tier2'
        }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
