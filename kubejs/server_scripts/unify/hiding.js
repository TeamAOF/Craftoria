RecipeViewerEvents.removeEntries("item", e => {
  let hide = {
    "iron": ["mekanism", "occultism"],
    "gold": ["mekanism", "occultism"],
    "copper": ["mekanism", "occultism"],
    "steel": ["mekanism", "mffs"],
    "bronze": ["mekanism"],
    "tin": ["mekanism"],
    "uranium": ["mekanism"],
    "diamond": ["mekanism"],
    "emerald": ["mekanism"],
    "lapis_lazuli": ["mekanism"],
    "quartz": ["mekanism"],
    "coal": ["mekanism"],
    "lead": ["mekanism"],
    "silver": ["occultism", "moremekanismprocessing"],
    "aluminum": ["moremekanismprocessing"],
    "tungsten": ["moremekanismprocessing"],
    "titanium": ["moremekanismprocessing"],
    "platinum": ["moremekanismprocessing"],
    "nickel": ["moremekanismprocessing"],
    "iridium": ["moremekanismprocessing"],
    "obsidian": ["occultism"],
  };

  let types = ["ingot", "block", "dust", "nugget", "ore", "raw"];

  [
    "mffs:steel_compound",
  ].forEach(id => {
    e.remove(id);
  });

  for (let [key, value] in hide) {
    value.forEach(mod => {
      switch (mod) {
        case "mekanism":
          types.forEach(type => {
            e.remove(`${mod}:${type}_${key}`);
            if (type === "raw")
              e.remove(`${mod}:block_${type}_${key}`);
          });
          break;

        case "moremekanismprocessing":
          types.forEach(type => {
            if (type !== "dust")
              e.remove(`${mod}:${key}_${type}`);
            else
              e.remove(`${mod}:${type}_${key}`);
          });
          break;
        default:
          types.forEach(type => {
            if (type !== "raw")
              e.remove(`${mod}:${key}_${type}`);
            else {
              e.remove(`${mod}:${type}_${key}`);
              e.remove(`${mod}:${type}_${key}_block`);
            }
          });
          break;
      }
    });
  }
  e.remove("@hammerlib");
});

ServerEvents.tags("item", event => {

  const material = [
    "mekanism:tin_ore",
    "mekanism:deepslate_tin_ore",
    "mekanism:lead_ore",
    "mekanism:deepslate_lead_ore",
    "mekanism:dust_lead",
    "mekanism:dust_tin",
    "mekanism:ingot_tin",
    "mekanism:nugget_tin",
    "mekanism:raw_tin",
    "mekanism:block_raw_tin",
    "mekanism:ingot_lead",
    "mekanism:raw_lead",
    "mekanism:block_lead",
    "mekanism:nugget_lead",
    "mekanism:block_raw_lead",
    "mekanism:block_tin",
    "mekanism:dust_uranium",
    "mekanism:ingot_uranium",
    "mekanism:raw_uranium",
    "mekanism:nugget_uranium",
    "mekanism:block_uranium",
    "mekanism:uranium_ore",
    "mekanism:deepslate_uranium_ore",
    "mekanism:block_raw_uranium",
    "mekanism:dust_steel",
    "mekanism:ingot_steel",
    "mekanism:nugget_steel",
    "mekanism:block_steel",
    "mekanism:dust_gold",
    "mekanism:dust_iron",
    "mekanism:dust_copper",
    "mekanism:dust_diamond",
    "mekanism:dust_bronze",
    "mekanism:ingot_bronze",
    "mekanism:nugget_bronze",
    "mekanism:block_bronze",
    "moremekanismprocessing:dust_aluminum",
    "moremekanismprocessing:aluminum_ingot",
    "moremekanismprocessing:aluminum_nugget",
    "moremekanismprocessing:dust_silver",
    "moremekanismprocessing:silver_ingot",
    "moremekanismprocessing:silver_nugget",
    "mekanism:dust_emerald",
    "mekanism:dust_lapis_lazuli",
    "mekanism:dust_quartz"
  ];

  material.forEach((item) => {
    event.add("c:hidden_from_recipe_viewers", item);
  });
});
