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

  // QoL Recipes
  metallurgic_infusing('4x mekanism:dust_refined_obsidian', 'minecraft:obsidian', '40x mekanism:diamond');
  metallurgic_infusing('9x mekanism:alloy_infused', '#c:storage_blocks/copper', '90x mekanism:redstone');
  metallurgic_infusing('9x mekanism:basic_control_circuit', '#c:storage_blocks/osmium', '180x mekanism:redstone');

  // MI Compat
  enrich('2x modern_industrialization:lignite_coal', '#c:ores/lignite_coal');
  crush('modern_industrialization:lignite_coal_dust', '#c:gems/lignite_coal');
  enrich('6x modern_industrialization:salt_dust', '#c:ores/salt');
  enrich('2x modern_industrialization:antimony_dust', '#c:ores/antimony');
  // Made Monazite/Bauxite be less efficient through Mekanism, as you *should* be using MI's machines for them, but adding them here for convenience.
  enrich('4x modern_industrialization:monazite_dust', '#c:ores/monazite');
  enrich('4x modern_industrialization:bauxite_dust', '#c:ores/bauxite');
});
