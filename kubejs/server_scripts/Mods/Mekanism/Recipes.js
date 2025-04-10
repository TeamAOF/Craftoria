ServerEvents.recipes((e) => {
  const mekanism = MekanismHelper(e);

  // QoL Recipes
  mekanism.metallurgicInfusing('4x mekanism:dust_refined_obsidian', 'minecraft:obsidian', '40x mekanism:diamond');
  mekanism.metallurgicInfusing('9x mekanism:alloy_infused', '#c:storage_blocks/copper', '90x mekanism:redstone');
  mekanism.metallurgicInfusing('9x mekanism:basic_control_circuit', '#c:storage_blocks/osmium', '180x mekanism:redstone');

  // MI Compat
  mekanism.enriching('2x modern_industrialization:lignite_coal', '#c:ores/lignite_coal');
  mekanism.crushing('modern_industrialization:lignite_coal_dust', '#c:gems/lignite_coal');
  mekanism.crushing('modern_industrialization:brick_dust', 'minecraft:brick');
  mekanism.crushing('4x modern_industrialization:brick_dust', 'minecraft:bricks');
  mekanism.enriching('6x modern_industrialization:salt_dust', '#c:ores/salt');

  mekanism.enriching('2x modern_industrialization:antimony_dust', '#c:ores/antimony');
  mekanism.enriching('4x modern_industrialization:antimony_dust', '3x #c:raw_materials/antimony');
  mekanism.enriching('4x modern_industrialization:monazite_dust', '#c:ores/monazite');
  mekanism.enriching('3x irons_spellbooks:raw_mithril', '#c:ores/mithril');

  // AA Compat
  mekanism.enriching('2x actuallyadditions:black_quartz', '#c:ores/black_quartz');

  // New Stuff
  mekanism.rotaryCondensentrating('mekanism:antimatter', 'craftoria:antimatter');
  mekanism.rotaryCondensentrating('craftoria:quantum_infusion', 'advanced_ae:quantum_infusion_source');
  mekanism.oxidizing('200x craftoria:plutonium_oxide', '#c:ingots/plutonium');
  mekanism.chemicalInfusing('400x mekanism:uranium_hexafluoride', '399x mekanism:hydrofluoric_acid', '1x craftoria:plutonium_oxide');

  // Shaped

  // Cardboard Box
  e.shaped('mekanism:cardboard_box', ['A A', 'ACA', 'BAB'], {
    A: 'mekanism:sawdust',
    B: 'sophisticatedstorage:packing_tape',
    C: '#c:plastics',
  }).id('mekanism:cardboard_box');

  // Replica
  mekanism.nucleosynthesizing('replication:replica_ingot', 'replication:raw_replica', '200x craftoria:quantum_infusion', 250);

  // MekaSuit / Weapons
  e.shaped('mekaweapons:katana_blade', ['  B', 'CB ', 'AC '], {
    A: '#c:ingots/steel',
    B: 'mekanism:ingot_refined_obsidian',
    C: 'mekanism_extras:alloy_shining',
  }).id('mekaweapons:katana_blade');

  e.shaped('mekaweapons:bow_riser', ['DAD', 'BCB'], {
    A: '#c:ingots/steel',
    B: 'mekanism:ingot_refined_obsidian',
    C: 'mekanism_extras:alloy_shining',
    D: 'mekanism_extras:cosmic_control_circuit',
  }).id('mekaweapons:bow_riser');

  e.replaceInput({ id: 'mekanism:mekasuit_helmet' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit');
  e.replaceInput({ id: 'mekanism:mekasuit_bodyarmor' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit');
  e.replaceInput({ id: 'mekanism:mekasuit_pants' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit');
  e.replaceInput({ id: 'mekanism:mekasuit_boots' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit');
});
