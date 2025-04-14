ServerEvents.recipes(event => {
  const ae = AE2Helper(event);
  const mekanism = MekanismHelper(event);
  const { assembler, packer, mixer, electrolyzer, macerator } = event.recipes.modern_industrialization;
  const { shapeless } = event;

  //QoL recipes
  assembler(2, 100)
    .itemOut('8x ae2:fluix_covered_cable')
    .itemIn('8x ae2:fluix_glass_cable')
    .fluidIn('8x modern_industrialization:styrene_butadiene_rubber')
    .id('craftoria:mi/fluix_covered_cable_from_fluix_glass_cable');
  assembler(2, 100)
    .itemOut('8x ae2:fluix_covered_cable')
    .itemIn('8x ae2:fluix_glass_cable')
    .fluidIn('40x modern_industrialization:synthetic_rubber')
    .id('craftoria:mi/fluix_covered_cable_from_fluix_glass_cable_synthetic_rubber');

  shapeless('4x ae2:fluix_covered_cable', 'ae2:fluix_covered_dense_cable');
  shapeless('4x ae2:fluix_smart_cable', 'ae2:fluix_smart_dense_cable');

  //AppFlux compat
  assembler(2, 100)
    .itemOut('appflux:energy_processor')
    .itemIn('appflux:printed_energy_processor')
    .itemIn('ae2:printed_silicon')
    .fluidIn('90x modern_industrialization:molten_redstone')
    .id('craftoria:appflux/energy_processor');
  packer(8, 200)
    .itemOut('appflux:printed_energy_processor')
    .itemIn('appflux:printed_energy_processor')
    .itemIn('appflux:energy_processor_press', 0)
    .id('craftoria:appflux/printed_energy_processor');
  mixer(8, 100)
    .itemOut('2x appflux:redstone_crystal')
    .itemIn('#c:storage_blocks/redstone')
    .itemIn('#c:gems/fluix')
    .itemIn('#c:dusts/glowstone')
    .fluidIn('1000x minecraft:water', 0)
    .id('craftoria:appflux/redstone_crystal');
  electrolyzer(8, 60).itemOut('appflux:charged_redstone').itemIn('appflux:redstone_crystal').id('craftoria:appflux/charged_redstone');

  //ExtendedAE compat
  assembler(8, 200)
    .itemOut('extendedae:concurrent_processor')
    .itemIn('extendedae:concurrent_processor_print')
    .itemIn('ae2:printed_silicon')
    .fluidIn('90x modern_industrialization:molten_redstone')
    .id('craftoria:extendedae/concurrent_processor');
  packer(8, 200)
    .itemOut('extendedae:concurrent_processor_print')
    .itemIn('#c:gems/entro')
    .itemIn('extendedae:concurrent_processor_press', 0)
    .id('craftoria:extendedae/concurrent_processor_print');
  macerator(2, 100).itemOut('extendedae:entro_dust').itemIn('#c:gems/entro').id('craftoria:extendedae/entro_dust');
  mixer(8, 100)
    .itemOut('extendedae:entro_ingot')
    .itemIn('#c:dusts/entro')
    .itemIn('#c:ingots/gold')
    .itemIn('#c:gems/lapis')
    .fluidIn('1000x minecraft:water', 0)
    .id('craftoria:extendedae/entro_ingot');

  mekanism.crushing('extendedae:entro_dust', '#c:gems/entro');
  ae.circuitCutter('9x ae2:printed_silicon', 'extendedae:silicon_block');

  //Megacells compat
  assembler(8, 200)
    .itemOut('megacells:accumulation_processor')
    .itemIn('megacells:printed_accumulation_processor')
    .itemIn('ae2:printed_silicon')
    .fluidIn('90x modern_industrialization:molten_redstone')
    .id('craftoria:megacells/accumulation_processor');
  packer(8, 200)
    .itemOut('megacells:printed_accumulation_processor')
    .itemIn('megacells:sky_steel_ingot')
    .itemIn('megacells:accumulation_processor_press', 0)
    .id('craftoria:megacells/printed_accumulation_processor');
  mixer(8, 100)
    .itemOut('2x megacells:sky_steel_ingot')
    .itemIn('ae2:charged_certus_quartz_crystal')
    .itemIn('#c:ingots/iron')
    .itemIn('ae2:sky_stone_block')
    .fluidIn('1000x minecraft:lava', 0)
    .id('craftoria:megacells/sky_steel_ingot');
  mixer(8, 100)
    .itemOut('2x megacells:sky_bronze_ingot')
    .itemIn('ae2:charged_certus_quartz_crystal')
    .itemIn('#c:ingots/copper')
    .itemIn('ae2:sky_stone_block')
    .fluidIn('1000x minecraft:lava', 0)
    .id('craftoria:megacells/sky_bronze_ingot');
  mixer(8, 100)
    .itemOut('2x megacells:sky_osmium_ingot')
    .itemIn('ae2:charged_certus_quartz_crystal')
    .itemIn('#c:ingots/osmium')
    .itemIn('ae2:sky_stone_block')
    .fluidIn('1000x minecraft:lava', 0)
    .id('craftoria:megacells/sky_osmium_ingot');

  //Misc recipes
  ae.crystalAssembler('craftoria:universal_press', [
    'ae2:calculation_processor_press',
    'ae2:engineering_processor_press',
    'ae2:logic_processor_press',
    'ae2:silicon_press',
    'extendedae:concurrent_processor_press',
    'advanced_ae:quantum_processor_press',
    'megacells:accumulation_processor_press',
    'appflux:energy_processor_press',
  ]);

  event.remove({ output: 'extendedae:circuit_cutter' });
  ae.crystalAssembler('extendedae:circuit_cutter', [
    'extendedae:machine_frame',
    '8x ae2:engineering_processor',
    'craftoria:universal_press',
    'minecraft:stonecutter',
  ]);

  ae.circuitCutter('1x craftoria:universal_press', 'craftoria:1x_compressed_iron_block');

  shapeless('4x ae2:crafting_accelerator', 'bigger_ae2:4_core_crafting_accelerator');
  shapeless('4x bigger_ae2:4_core_crafting_accelerator', 'bigger_ae2:16_core_crafting_accelerator');
  shapeless('4x bigger_ae2:16_core_crafting_accelerator', 'bigger_ae2:64_core_crafting_accelerator');
  shapeless('4x bigger_ae2:64_core_crafting_accelerator', 'bigger_ae2:256_core_crafting_accelerator');
  shapeless('4x bigger_ae2:256_core_crafting_accelerator', 'bigger_ae2:1024_core_crafting_accelerator');
});
