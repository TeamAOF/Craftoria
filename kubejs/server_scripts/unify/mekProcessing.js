// priority: 997

ServerEvents.recipes((e) => {
  let enrich = (input, output, iCount, oCount) => {
    oCount = oCount || 1;
    iCount = iCount || 1;

    e.recipes.mekanism
      .enriching(`${oCount}x ${output}`, `${iCount}x ${input}`)
      .id(`craftoria:mekanism/enriching/${input.replace('#c:', '').replace(':', '_')}`);
  };

  let infuse = (chemical, input, output, chemCount, iCount, oCount) => {
    oCount = oCount || 1;
    iCount = iCount || 1;

    e.recipes.mekanism
      .metallurgic_infusing(`${oCount}x ${output}`, `${iCount}x ${input}`, `${chemCount}x ${chemical}`, false)
      .id(`craftoria:mekanism/metallurgic_infusing/${input.replace('#c:', '').replace(':', '_')}`);
  };

  let crush = (input, output, iCount, oCount) => {
    oCount = oCount || 1;
    iCount = iCount || 1;

    e.recipes.mekanism.crushing(`${oCount}x ${output}`, `${iCount}x ${input}`).id(`craftoria:mekanism/crushing/${input.replace('#c:', '').replace(':', '_')}`);
  };

  // let reaction = (fluidIn, gasIn, gasOut, itemIn, itemOut, duration) => {
  //   let id = 'craftoria:mekanism/reaction/';

  //   itemIn[0].forEach((item) => {
  //     item = item.replace('#', '').replace(':', '_');
  //     id += `${item}_`;
  //   });

  //   e.recipes.mekanism.reaction(itemOut, fluidIn, gasIn, gasOut, itemIn, duration).id(`${id}to_${itemOut[0].replace(':', '_')}`);
  // };

  let injecting = (chem, input, output) => {
    e.recipes.mekanism.injecting(output, chem, input, false).id(`craftoria:mekanism/injecting/${input.replace('#c', '').replace(':', '_').replace(' ', '_')}`);
  };

  let crystallizing = (input, output) => {
    e.recipes.mekanism.crystallizing(output, input).id(`craftoria:mekanism/crystallizing/${input.replace('#', '').replace(':', '_').replace(' ', '_')}`);
  };

  let reaction = (fluidIn, gasIn, gasOut, itemIn, itemOut, duration) => {
    let recipe = {
      type: 'mekanism:reaction',
      chemical_input: {},
      chemical_output: {},
      duration: duration || 1,
      fluid_input: {},
      item_input: {
        type: 'neoforge:compound',
        children: [],
      },
      item_output: Item.of(itemOut).toJson(),
    };

    if (fluidIn[0].includes('#')) {
      fluidIn[0] = fluidIn[0].replace('#', '');
      recipe.fluid_input.tag = fluidIn[0];
    } else recipe.fluid_input.id = fluidIn[0];
    recipe.fluid_input.amount = fluidIn[1];

    if (gasIn[0].includes('#')) {
      gasIn[0] = gasIn[0].replace('#', '');
      recipe.chemical_input.chemical = gasIn[0];
    } else recipe.chemical_input.id = gasIn[0];
    recipe.chemical_input.amount = gasIn[1];

    recipe.chemical_output.id = gasOut[0];
    recipe.chemical_output.amount = gasOut[1];

    itemIn[0].forEach((item) => {
      recipe.item_input.children.push(Ingredient.of(item).toJson());
    });
    recipe.item_input.count = itemIn[1];

    let id = 'craftoria:mekanism/reaction/';

    itemIn[0].forEach((item) => {
      item = item.replace('#', '').replace(':', '_');
      id += `${item}_`;
    });

    e.custom(recipe).id(`${id}to_${itemOut[0].replace(':', '_')}`);
  };

  let removeMek = [
    // 'mekanism:processing/bronze/ingot/from_infusing',
    // 'mekanism:processing/bronze/dust/from_infusing',
    // 'mekanism:processing/steel/enriched_iron_to_dust',
    // 'mekanism:processing/lapis_lazuli/to_dust',
    // 'mekanism:reaction/coal_gasification/blocks_coals',
    // 'mekanism:reaction/coal_gasification/dusts_coals',
    // 'mekanism:reaction/coal_gasification/coals',
    // 'mekanism:injecting/gunpowder_to_sulfur',
    // 'mekanism:enriching/salt',
    // 'mekanism:crystallizing/salt',
  ];

  removeMek.forEach((id) => {
    e.remove({ id: id });
  });

  infuse('mekanism:carbon', 'mekanism:enriched_iron', 'modern_industrialization:steel_dust', 10, 1, 1);
  infuse('mekanism:tin', '#c:ingots/copper', 'modern_industrialization:bronze_ingot', 10, 3, 4);
  infuse('mekanism:tin', '#c:dusts/copper', 'modern_industrialization:bronze_dust', 10, 3, 4);
  injecting('1x #mekanism:hydrogen_chloride', '1x #c:gunpowders', '1x modern_industrialization:sulfur_dust');
  crystallizing('15x #mekanism:brine', '1x modern_industrialization:salt_dust');

  [metals, gems].forEach((materials) => {
    materials.forEach((material) => {
      let dust = getItemFromTag(`#c:dusts/${material}`);
      if (dust) {
        if (Item.exists(`mekanism:dust_${material}`)) e.remove({ type: 'mekanism:crushing', output: `mekanism:dust_${material}` });
        if (checkTagSize(`#c:ingots/${material}`) > 0) crush(`#c:ingots/${material}`, dust);
        else if (checkTagSize(`#c:gems/${material}`) > 0) crush(`#c:gems/${material}`, dust);
      }
    });
  });

  crush('minecraft:coal', 'modern_industrialization:coal_dust');

  let oreProcessing = (metal) => {
    let dust = getItemFromTag(`#c:dusts/${metal}`);
    if (dust) {
      if (Item.exists(`mekanism:dust_${metal}`)) e.remove({ type: 'mekanism:enriching', output: `mekanism:dust_${metal}` });
      enrich(`#c:ores/${metal}`, dust, 1, 2);
      enrich(`#c:raw_materials/${metal}`, dust, 3, 4);
      enrich(`#c:storage_blocks/raw_${metal}`, dust, 1, 12);
      enrich(`#c:dirty_dusts/${metal}`, dust);
      if (debug) console.info(`Added ore processing for ${metal}.`);
    }
  };

  metals.forEach((metal) => {
    oreProcessing(metal);
  });

  reaction(
    ['#minecraft:water', 1000],
    ['#mekanism:oxygen', 1000],
    ['mekanism:hydrogen', 1000],
    [['#c:storage_blocks/coal', '#c:storage_blocks/charcoal'], 1],
    '9x modern_industrialization:sulfur_dust',
    900
  );
  reaction(
    ['#minecraft:water', 100],
    ['#mekanism:oxygen', 100],
    ['mekanism:hydrogen', 100],
    [['#minecraft:coals'], 1],
    '1x modern_industrialization:sulfur_dust',
    100
  );
  reaction(
    ['#minecraft:water', 100],
    ['#mekanism:oxygen', 100],
    ['mekanism:hydrogen', 100],
    [['#c:dusts/coal', '#c:dusts/charcoal'], 1],
    '1x modern_industrialization:sulfur_dust',
    100
  );

  e.remove({ mod: 'mekanism', output: 'mekanism:block_salt' });

  // Removed to prevent progression skips in Modern Industrialization
  e.remove({ mod: 'moremekanismprocessing', output: '#c:nuggets' });
  e.remove({ mod: 'moremekanismprocessing', output: '#c:ingots' });
});
