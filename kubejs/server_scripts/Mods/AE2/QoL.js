ServerEvents.recipes((event) => {
  let mekCrush = event.recipes.mekanism.crushing;

  //QoL recipes
  miAssembler(event, ['modern_industrialization:styrene_butadiene_rubber', 8], ['ae2:fluix_glass_cable', 8], ['ae2:fluix_covered_cable', 8], 2, 100);
  miAssembler(event, ['modern_industrialization:synthetic_rubber', 40], ['ae2:fluix_glass_cable', 8], ['ae2:fluix_covered_cable', 8], 2, 100);

  event.shapeless('4x ae2:fluix_covered_cable', 'ae2:fluix_covered_dense_cable');
  event.shapeless('4x ae2:fluix_smart_cable', 'ae2:fluix_smart_dense_cable');

  //AppFlux compat
  miPacker(
    event,
    [
      ['appflux:charged_redstone', 1],
      ['appflux:energy_processor_press', 1, 0],
    ],
    ['appflux:printed_energy_processor', 1],
    8,
    200
  );
  miAssembler(
    event,
    ['modern_industrialization:molten_redstone', 90],
    [
      ['appflux:printed_energy_processor', 1],
      ['ae2:printed_silicon', 1],
    ],
    ['appflux:energy_processor', 1],
    8,
    200
  );
  miMixer(
    event,
    ['minecraft:water', 1000, 0],
    [
      ['#c:storage_blocks/redstone', 1],
      ['#c:gems/fluix', 1],
      ['#c:dusts/glowstone', 1],
    ],
    null,
    ['appflux:redstone_crystal', 2],
    8,
    100
  );
  miElectrolyzer(event, null, ['appflux:redstone_crystal', 1], null, ['appflux:charged_redstone', 1], 8, 60);

  //ExtendedAE compat
  miAssembler(
    event,
    ['modern_industrialization:molten_redstone', 90],
    [
      ['extendedae:concurrent_processor_print', 1],
      ['ae2:printed_silicon', 1],
    ],
    ['extendedae:concurrent_processor', 1],
    8,
    200
  );
  miMacerator(event, ['#c:gems/entro', 1], ['extendedae:entro_dust', 1], 2, 100);
  miMixer(
    event,
    ['minecraft:water', 1000, 0],
    [
      ['#c:dusts/entro', 1],
      ['#c:ingots/gold', 1],
      ['#c:gems/lapis', 1],
    ],
    null,
    ['extendedae:entro_ingot', 1],
    8,
    100
  );
  miPacker(
    event,
    [
      ['#c:gems/entro', 1],
      ['extendedae:concurrent_processor_press', 1, 0],
    ],
    ['extendedae:concurrent_processor_print', 1],
    8,
    200
  );
  mekCrush('extendedae:entro_dust', '#c:gems/entro').id('craftoria:mekanism/crushing/entro_dust');
  exCutter(event, '1x extendedae:silicon_block', '9x ae2:printed_silicon');

  //Megacells compat
  miPacker(
    event,
    [
      ['megacells:sky_steel_ingot', 1],
      ['megacells:accumulation_processor_press', 1, 0],
    ],
    ['megacells:printed_accumulation_processor', 1],
    8,
    200
  );
  miAssembler(
    event,
    ['modern_industrialization:molten_redstone', 90],
    [
      ['megacells:printed_accumulation_processor', 1],
      ['ae2:printed_silicon', 1],
    ],
    ['megacells:accumulation_processor', 1],
    8,
    200
  );
  miMixer(
    event,
    ['minecraft:lava', 1000, 0],
    [
      ['ae2:charged_certus_quartz_crystal', 1],
      ['#c:ingots/iron', 1],
      ['ae2:sky_stone_block', 1],
    ],
    null,
    ['megacells:sky_steel_ingot', 2],
    8,
    100
  );
  miMixer(
    event,
    ['minecraft:lava', 1000, 0],
    [
      ['ae2:charged_certus_quartz_crystal', 1],
      ['#c:ingots/copper', 1],
      ['ae2:sky_stone_block', 1],
    ],
    null,
    ['megacells:sky_bronze_ingot', 2],
    8,
    100
  );
  miMixer(
    event,
    ['minecraft:lava', 1000, 0],
    [
      ['ae2:charged_certus_quartz_crystal', 1],
      ['#c:ingots/osmium', 1],
      ['ae2:sky_stone_block', 1],
    ],
    null,
    ['megacells:sky_osmium_ingot', 2],
    8,
    100
  );

  //Misc recipes
  exAssembler(
    event,
    null,
    [
      ['ae2:calculation_processor_press', 1],
      ['ae2:engineering_processor_press', 1],
      ['ae2:logic_processor_press', 1],
      ['ae2:silicon_press', 1],
      ['extendedae:concurrent_processor_press', 1],
      ['advanced_ae:quantum_processor_press', 1],
      ['megacells:accumulation_processor_press', 1],
      ['appflux:energy_processor_press', 1],
    ],
    ['craftoria:universal_press', 1]
  );

  event.remove({output: 'extendedae:circuit_cutter'});
  exAssembler(
    event,
    null,
    [
      ['extendedae:machine_frame', 1],
      ['ae2:engineering_processor', 8],
      ['craftoria:universal_press', 1],
      ['minecraft:stonecutter', 1],
    ],
    ['extendedae:circuit_cutter', 1]
  );

  exCutter(event, '1x craftoria:1x_compressed_iron_block', '1x craftoria:universal_press');

  event.shapeless('4x ae2:crafting_accelerator', 'bigger_ae2:4_core_crafting_accelerator');
  event.shapeless('4x bigger_ae2:4_core_crafting_accelerator', 'bigger_ae2:16_core_crafting_accelerator');
  event.shapeless('4x bigger_ae2:16_core_crafting_accelerator', 'bigger_ae2:64_core_crafting_accelerator');
  event.shapeless('4x bigger_ae2:64_core_crafting_accelerator', 'bigger_ae2:256_core_crafting_accelerator');
  event.shapeless('4x bigger_ae2:256_core_crafting_accelerator', 'bigger_ae2:1024_core_crafting_accelerator');
});
