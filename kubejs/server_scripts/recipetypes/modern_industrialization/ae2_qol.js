
ServerEvents.recipes(event => {
  miAssembler(event, ["modern_industrialization:styrene_butadiene_rubber", 8], ["ae2:fluix_glass_cable", 8], ["ae2:fluix_covered_cable", 8], 2, 100);
  miAssembler(event, ["modern_industrialization:synthetic_rubber", 40], ["ae2:fluix_glass_cable", 8], ["ae2:fluix_covered_cable", 8], 2, 100);

  miAssembler(event, ["modern_industrialization:molten_redstone", 90], [["appflux:printed_energy_processor", 1], ["ae2:printed_silicon", 1]], ["appflux:energy_processor", 1], 8, 200);

  miElectrolyzer(event, null, ["appflux:redstone_crystal", 1], null, ["appflux:charged_redstone", 1], 8, 60);

  miPacker(event, [["appflux:charged_redstone", 1], ["appflux:energy_processor_press", 1, 0]], ["appflux:printed_energy_processor", 1], 8, 200);

  miMixer(event, ["minecraft:water", 1000, 0], [["c:storage_blocks/redstone", 1], ["c:gems/fluix", 1], ["c:dusts/glowstone", 1]], null, ["appflux:redstone_crystal", 2], 8, 100);

  event.shapeless("4x ae2:fluix_covered_cable", "ae2:fluix_covered_dense_cable");
  event.shapeless("4x ae2:fluix_smart_cable", "ae2:fluix_smart_dense_cable");

  event.custom({
    type: "mekanism:crushing", input: { tag: "c:ender_pearls", count: 1 }, output: { id: "ae2:ender_dust", count: 1 }
  }).id("craftoria:mekanism/crushing/ender_pearl");

  event.remove({ id: "modern_industrialization:materials/silicon/unpacker/ingot" });
  miUnpacker(event, ["modern_industrialization:silicon_block", 1], ["modern_industrialization:silicon_ingot", 9], 2, 100);
});