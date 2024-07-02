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

  let removeMek = [
    "mekanism:processing/bronze/ingot/from_infusing",
    "mekanism:processing/bronze/dust/from_infusing",
    "mekanism:processing/steel/enriched_iron_to_dust",
  ];

  removeMek.forEach(id => {
    e.remove({ id: id });
  });

  infuse("mekanism:carbon", "mekanism:enriched_iron", "modern_industrialization:steel_dust", 10, 1, 1);
  infuse("mekanism:tin", "#c:ingots/copper", "modern_industrialization:bronze_ingot", 10, 3, 4);
  infuse("mekanism:tin", "#c:dusts/copper", "modern_industrialization:bronze_dust", 10, 3, 4);

  for (let [material, types] in metals) {
    types.forEach(type => {
      if (type === "dust")
        if (ifExists("modern_industrialization", material, type, false))
          crush(`#c:ingots/${material}`, `modern_industrialization:${material}_dust`);
        else
          logNotFound("modern_industrialization", material, type);
    });
  }

  for (let [material, types] in gems) {
    types.forEach(type => {
      if (ifExists("modern_industrialization", material, type, false))
        crush(`#c:gems/${material}`, `modern_industrialization:${material}_dust`);
      else
        logNotFound("modern_industrialization", material, type);
    });
  }

  crush("minecraft:coal", "modern_industrialization:coal_dust");

  let oreProcessing = (metal, mod) => {
    enrich(`#c:ores/${metal}`, `${mod}:${metal}_dust`, 1, 2);
    enrich(`#c:raw_materials/${metal}`, `${mod}:${metal}_dust`, 3, 4);
    enrich(`#c:storage_blocks/raw_${metal}`, `${mod}:${metal}_dust`, 1, 18);
    enrich(`#c:dirty_dusts/${metal}`, `${mod}:${metal}_dust`);
    //console.info(`Added ore processing for ${metal}.`);
  };

  for (let [metal, types] in metals) {
    oreProcessing(metal, "modern_industrialization");
  }

  [
    "iron",
    "gold",
    "copper",
    "tin",
    "lead",
    "uranium",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "quartz",
    "coal",
    "bronze",
    "steel",
  ].forEach(material => {
    e.remove({ type: "mekanism:enriching", output: `mekanism:dust_${material}` });
    e.remove({ type: "mekanism:crushing", output: `mekanism:dust_${material}` });
  });

  // Removed to prevent progression skips in Modern Industrialization
  e.remove({ mod: "moremekanismprocessing", output: "#c:nuggets" });
  e.remove({ mod: "moremekanismprocessing", output: "#c:ingots" });
});
