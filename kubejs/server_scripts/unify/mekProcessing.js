// priority: 997
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

  let sawing = (item_tag_in, item_out, item_out2, item_out2_chance) => {
    let recipe = {
      type: 'mekanism:sawing',
      input: {
        count: 1,
        tag: item_tag_in,
      },
      main_output: {
        count: parseInt(item_out.split('x ')[0]),
        id: item_out.split('x ')[1],
      },
      secondary_chance: item_out2_chance,
      secondary_output: {
        count: 1,
        id: item_out2,
      },
    };
    e.custom(recipe).id(makeID('sawing', item_out, item_tag_in));
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

    if (fluid_in.split('x ')[1].includes('#')) recipe.fluid_input.tag = fluid_in.split('x ')[1].replace('#', '');
    else recipe.fluid_input.id = fluid_in.split('x ')[1];
    recipe.fluid_input.amount = parseInt(fluid_in.split('x ')[0]);

    if (chem_in.split('x ')[1].includes('#')) recipe.chemical_input.chemical = chem_in.split('x ')[1].replace('#', '');
    else recipe.chemical_input.id = chem_in.split('x ')[1];
    recipe.chemical_input.amount = parseInt(chem_in.split('x ')[0]);

    recipe.chemical_output.id = chem_out.split('x ')[1];
    recipe.chemical_output.amount = parseInt(chem_out.split('x ')[0]);

    e.custom(recipe).id(makeID('reaction', item_out, item_in[0][0]));
  };

  // let removeMek = [];

  // removeMek.forEach((id) => {
  //   e.remove({ id: id });
  // });

  [metals, gems].forEach((materials) => {
    materials.forEach((material) => {
      let dust = getItemFromTag(`#c:dusts/${material}`);
      if (dust) {
        if (Item.exists(`mekanism:dust_${material}`)) e.remove({type: 'mekanism:crushing', output: `mekanism:dust_${material}`});
        if (checkTagSize(`#c:ingots/${material}`) > 0) crush(dust, `#c:ingots/${material}`);
        else if (checkTagSize(`#c:gems/${material}`) > 0) crush(dust, `#c:gems/${material}`);
      }
    });
  });

  crush('modern_industrialization:coal_dust', 'minecraft:coal');

  // let oreProcessing = (metal) => {
  //   let dust = getItemFromTag(`#c:dusts/${metal}`);
  //   if (dust) {
  //     if (Item.exists(`mekanism:dust_${metal}`)) e.remove({ type: 'mekanism:enriching', output: `mekanism:dust_${metal}` });
  //     enrich(`2x ${dust}`, `#c:ores/${metal}`);
  //     enrich(`4x ${dust}`, `3x #c:raw_materials/${metal}`);
  //     enrich(`12x ${dust}`, `#c:storage_blocks/raw_${metal}`);
  //     enrich(dust, `#c:dirty_dusts/${metal}`);
  //     if (debug) console.info(`Added ore processing for ${metal}.`);
  //   }
  // };

  // metals.forEach((metal) => {
  //   oreProcessing(metal);
  // });

  e.remove({mod: 'mekanism', output: 'mekanism:block_salt'});

  // Removed to prevent progression skips in Modern Industrialization
  e.remove({mod: 'moremekanismprocessing', output: '#c:nuggets'});
  e.remove({mod: 'moremekanismprocessing', output: '#c:ingots'});
});
