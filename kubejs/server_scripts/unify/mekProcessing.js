// priority: 997

ServerEvents.recipes(e => {
  let enrich = (input, output, iCount, oCount) => {
    let recipe = {
      type: "mekanism:enriching",
      input: {},
      output: {}
    };

    input = input.replace("#c:", "c:");
    if (input.includes("c:"))
      recipe.input.tag = input;
    else
      recipe.input.item = input;

    recipe.output.id = output;

    recipe.input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/enriching/${input.replace("c:", "").replace(":", "_")}`);
  };

  let infuse = (chemical, input, output, chemCount, iCount, oCount) => {
    let recipe = {
      type: "mekanism:metallurgic_infusing",
      chemical_input: {},
      item_input: {},
      output: {}
    };
    recipe.chemical_input.tag = chemical;

    input = input.replace("#c:", "c:");
    if (input.includes("c:"))
      recipe.item_input.tag = input;
    else
      recipe.item_input.item = input;

    recipe.output.id = output;

    recipe.chemical_input.amount = chemCount || 10;
    recipe.item_input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/metallurgic_infusing/${input.replace("c:", "").replace(":", "_")}`);
  };

  let crush = (input, output, iCount, oCount) => {
    let recipe = {
      type: "mekanism:crushing",
      input: {},
      output: {}
    };

    input = input.replace("#c:", "c:");
    if (input.includes("c:"))
      recipe.input.tag = input;
    else
      recipe.input.item = input;

    recipe.output.id = output;

    recipe.input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/crushing/${input.replace("c:", "").replace(":", "_")}`);
  };

  let reaction = (fluidIn, gasIn, gasOut, itemIn, itemOut, duration) => {
    let recipe = {
      type: "mekanism:reaction",
      duration: duration || 1,
      fluid_input: {},
      gas_input: {},
      gas_output: {},
      item_input: {
        type: "neoforge:compound",
        children: []
      },
      item_output: {}
    };

    if (fluidIn[0].includes("#")) {
      fluidIn[0] = fluidIn[0].replace("#", "");
      recipe.fluid_input.tag = fluidIn[0];
    } else
      recipe.fluid_input.id = fluidIn[0];
    recipe.fluid_input.amount = fluidIn[1];

    if (gasIn[0].includes("#")) {
      gasIn[0] = gasIn[0].replace("#", "");
      recipe.gas_input.gas = gasIn[0];
    } else
      recipe.gas_input.id = gasIn[0];
    recipe.gas_input.amount = gasIn[1];

    recipe.gas_output.id = gasOut[0];
    recipe.gas_output.amount = gasOut[1];

    itemIn[0].forEach(item => {
      if (item.includes("#")) {
        item = item.replace("#", "");
        recipe.item_input.children.push({ tag: item });
      } else {
        recipe.item_input.children.push({ item: item });
      }
    });
    recipe.item_input.count = itemIn[1];

    recipe.item_output.id = itemOut[0];
    recipe.item_output.count = itemOut[1];

    let id = "craftoria:mekanism/reaction/";

    itemIn[0].forEach(item => {
      item = item.replace("#", "").replace(":", "_");
      id += `${item}_`;
    });

    e.custom(recipe).id(`${id}to_${itemOut[0].replace(":", "_")}`);
  };

  let injecting = (chem, input, output) => {
    let recipe = {
      type: "mekanism:injecting",
      chemical_input: {},
      item_input: {},
      output: {}
    };

    if (chem[0].includes("#")) {
      chem[0] = chem[0].replace("#", "");
      recipe.chemical_input.gas = chem[0];
    }
    else
      recipe.chemical_input.id = chem[0];
    recipe.chemical_input.amount = chem[1];

    if (input[0].includes("#")) {
      input[0] = input[0].replace("#", "");
      recipe.item_input.tag = input[0];
    }
    else
      recipe.item_input.item = input[0];
    recipe.item_input.count = input[1];

    recipe.output.id = output[0];
    recipe.output.count = output[1];

    e.custom(recipe).id(`craftoria:mekanism/injecting/${input[0].replace(":", "_")}`);
  };

  let crystallizing = (chemType, input, output) => {
    let recipe = {
      type: "mekanism:crystallizing",
      chemical_type: chemType,
      input: {},
      output: {}
    };

    if (input[0].includes("#")) {
      input[0] = input[0].replace("#", "");
      recipe.input.gas = input[0];
    }
    else
      recipe.input.id = input[0];
    recipe.input.amount = input[1];

    recipe.output.id = output[0];
    recipe.output.count = output[1];

    e.custom(recipe).id(`craftoria:mekanism/crystallizing/${input[0].replace(":", "_")}`);
  };

  let removeMek = [
    "mekanism:processing/bronze/ingot/from_infusing",
    "mekanism:processing/bronze/dust/from_infusing",
    "mekanism:processing/steel/enriched_iron_to_dust",
    "mekanism:processing/lapis_lazuli/to_dust",
    "mekanism:reaction/coal_gasification/blocks_coals",
    "mekanism:reaction/coal_gasification/dusts_coals",
    "mekanism:reaction/coal_gasification/coals",
    "mekanism:injecting/gunpowder_to_sulfur",
    "mekanism:enriching/salt",
    "mekanism:crystallizing/salt"
  ];

  removeMek.forEach(id => {
    e.remove({ id: id });
  });

  infuse("mekanism:carbon", "mekanism:enriched_iron", "modern_industrialization:steel_dust", 10, 1, 1);
  infuse("mekanism:tin", "#c:ingots/copper", "modern_industrialization:bronze_ingot", 10, 3, 4);
  infuse("mekanism:tin", "#c:dusts/copper", "modern_industrialization:bronze_dust", 10, 3, 4);
  injecting(["#mekanism:hydrogen_chloride", 1], ["#c:gunpowders", 1], ["modern_industrialization:sulfur_dust", 1]);
  crystallizing("gas", ["#mekanism:brine", 15], ["modern_industrialization:salt_dust", 1]);

  [metals, gems].forEach(materials => {
    materials.forEach(material => {
      let dust = getItemFromTag(`#c:dusts/${material}`);
      if (dust) {
        if (Item.exists(`mekanism:dust_${material}`))
          e.remove({ type: "mekanism:crushing", output: `mekanism:dust_${material}` });
        if (checkTagSize(`#c:ingots/${material}`) > 0)
          crush(`#c:ingots/${material}`, dust);
        else if (checkTagSize(`#c:gems/${material}`) > 0)
          crush(`#c:gems/${material}`, dust);
      }
    });
  });

  crush("minecraft:coal", "modern_industrialization:coal_dust");

  let oreProcessing = (metal) => {
    let dust = getItemFromTag(`#c:dusts/${metal}`);
    if (dust) {
      if (Item.exists(`mekanism:dust_${metal}`))
        e.remove({ type: "mekanism:enriching", output: `mekanism:dust_${metal}` });
      enrich(`#c:ores/${metal}`, dust, 1, 2);
      enrich(`#c:raw_materials/${metal}`, dust, 3, 4);
      enrich(`#c:storage_blocks/raw_${metal}`, dust, 1, 12);
      enrich(`#c:dirty_dusts/${metal}`, dust);
      if (debug)
        console.info(`Added ore processing for ${metal}.`);
    }
  };

  metals.forEach(metal => {
    oreProcessing(metal);
  });

  reaction(["#minecraft:water", 1000], ["#mekanism:oxygen", 1000], ["mekanism:hydrogen", 1000], [["#c:storage_blocks/coal", "#c:storage_blocks/charcoal"], 1], ["modern_industrialization:sulfur_dust", 9], 900);
  reaction(["#minecraft:water", 100], ["#mekanism:oxygen", 100], ["mekanism:hydrogen", 100], [["#minecraft:coals"], 1], ["modern_industrialization:sulfur_dust", 1], 100);
  reaction(["#minecraft:water", 100], ["#mekanism:oxygen", 100], ["mekanism:hydrogen", 100], [["#c:dusts/coal", "#c:dusts/charcoal"], 1], ["modern_industrialization:sulfur_dust", 1], 100);

  e.remove({ mod: "mekanism", output: "mekanism:block_salt" });

  // Removed to prevent progression skips in Modern Industrialization
  e.remove({ mod: "moremekanismprocessing", output: "#c:nuggets" });
  e.remove({ mod: "moremekanismprocessing", output: "#c:ingots" });
});
