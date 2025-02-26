ServerEvents.recipes((e) => {
  let makeID = (type, output, input) => {
    return _makeID('mekanism', type, output, input);
  };

  let enrich = (output, input) => {
    e.recipes.mekanism.enriching(output, input).id(makeID('enriching', output, input));
  };

  let metallurgic_infusing = (output, input, chem, perTick) => {
    e.recipes.mekanism.metallurgic_infusing(output, input, chem, perTick ? perTick : false).id(makeID('metallurgic_infusing', output, input));
  };

  let crush = (output, input) => {
    e.recipes.mekanism.crushing(output, input).id(makeID('crushing', output, input));
  };

  let injecting = (output, input, chem) => {
    e.recipes.mekanism.injecting(output, input, chem, false).id(makeID('injecting', output, input));
  };

  let crystallizing = (output, input) => {
    e.recipes.mekanism.crystallizing(output, input).id(makeID('crystallizing', output, input));
  };

  let chem_infuser = (output, chemLeft, chemRight) => {
    e.recipes.mekanism.chemical_infusing(output, chemLeft, chemRight).id(makeID('chemical_infusing', output, chemLeft));
  };

  let reaction = (item_out, item_in, fluid_in, chem_out, chem_in, duration) => {
    let recipe = {
      type: 'mekanism:reaction',
      item_input: {
        type: 'neoforge:compound',
        children: [],
        count: item_in[1],
      },
      item_output: Item.of(item_out).toJson(),
      fluid_input: {},
      chemical_input: {},
      chemical_output: {},
      duration: duration,
    };

    item_in[0].forEach((item) => {
      recipe.item_input.children.push(Ingredient.of(item).toJson());
    });

    if (fluid_in.split(' ')[1].includes('#')) recipe.fluid_input.tag = fluid_in.split(' ')[1].replace('#', '');
    else recipe.fluid_input.id = fluid_in.split(' ')[1];
    recipe.fluid_input.amount = parseInt(fluid_in.split(' ')[0].replace('x', ''));

    if (chem_in.split(' ')[1].includes('#')) recipe.chemical_input.chemical = chem_in.split(' ')[1].replace('#', '');
    else recipe.chemical_input.id = chem_in.split(' ')[1];
    recipe.chemical_input.amount = parseInt(chem_in.split(' ')[0].replace('x', ''));

    recipe.chemical_output.id = chem_out.split(' ')[1];
    recipe.chemical_output.amount = parseInt(chem_out.split(' ')[0].replace('x', ''));

    e.custom(recipe).id(makeID('reaction', item_out, item_in[0][0]));
  };

  let rotary = (chem, fluid) => {
    let recipe = {
      type: 'mekanism:rotary',
      chemical_input: {
        amount: 1,
        chemical: chem,
      },
      chemical_output: {
        amount: 1,
        id: chem,
      },
      fluid_input: {
        amount: 1,
        tag: `c:${fluid.split(':')[1]}`,
      },
      fluid_output: {
        amount: 1,
        id: fluid,
      },
    };

    e.custom(recipe).id(makeID('rotary', chem, fluid));
  };

  let nucleosynthesizing = (output, input, chem, duration) => {
    let recipe = {
      type: 'mekanism:nucleosynthesizing',
      chemical_input: {
        amount: parseInt(chem.split('x ')[0]) || 1000,
        chemical: chem.split('x ')[1] || chem,
      },
      duration: duration || 100,
      item_input: Ingredient.of(input).toJson(),
      output: Item.of(output).toJson(),
      per_tick_usage: false,
    };

    e.custom(recipe).id(makeID('nucleosynthesizing', output, input));
  };

  let oxidizing = (output, input) => {
    let recipe = {
      type: 'mekanism:oxidizing',
      input: Ingredient.of(input).toJson(),
      output: {
        amount: parseInt(output.split('x ')[0]),
        id: output.split('x ')[1],
      },
    };
    e.custom(recipe).id(makeID('oxidizing', output, input));
  };

  // QoL Recipes
  metallurgic_infusing('4x mekanism:dust_refined_obsidian', 'minecraft:obsidian', '40x mekanism:diamond');
  metallurgic_infusing('9x mekanism:alloy_infused', '#c:storage_blocks/copper', '90x mekanism:redstone');
  metallurgic_infusing('9x mekanism:basic_control_circuit', '#c:storage_blocks/osmium', '180x mekanism:redstone');

  // MI Compat
  enrich('2x modern_industrialization:lignite_coal', '#c:ores/lignite_coal');
  crush('modern_industrialization:lignite_coal_dust', '#c:gems/lignite_coal');
  crush('modern_industrialization:brick_dust', 'minecraft:brick');
  crush('4x modern_industrialization:brick_dust', 'minecraft:bricks');
  enrich('6x modern_industrialization:salt_dust', '#c:ores/salt');

  enrich('2x modern_industrialization:antimony_dust', '#c:ores/antimony');
  enrich('4x modern_industrialization:antimony_dust', '3x #c:raw_materials/antimony');
  enrich('4x modern_industrialization:monazite_dust', '#c:ores/monazite');
  enrich('3x irons_spellbooks:raw_mithril', '#c:ores/mithril');

  // AA Compat
  enrich('2x actuallyadditions:black_quartz', '#c:ores/black_quartz');

  // New Stuff
  rotary('mekanism:antimatter', 'craftoria:antimatter');
  oxidizing('200x craftoria:plutonium_oxide', '#c:ingots/plutonium');
  chem_infuser('400x mekanism:uranium_hexafluoride', '399x mekanism:hydrofluoric_acid', '1x craftoria:plutonium_oxide');

  rotary('craftoria:quantum_infusion', 'advanced_ae:quantum_infusion_source');
  // Shaped

  // Cardboard Box
  e.shaped('mekanism:cardboard_box', ['A A', 'ACA', 'BAB'], {
    A: 'mekanism:sawdust',
    B: 'sophisticatedstorage:packing_tape',
    C: '#c:plastics',
  }).id('mekanism:cardboard_box');

  // Replica
  nucleosynthesizing('replication:replica_ingot', 'replication:raw_replica', '200x craftoria:quantum_infusion', 250);

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
