RecipeViewerEvents.removeEntries("item", e => {
  let hide = {
    "iron": ["mekanism", "occultism"],
    "gold": ["mekanism", "occultism"],
    "copper": ["mekanism", "occultism"],
    "steel": ["mekanism", "mffs"],
    "bronze": ["mekanism"],
    "tin": ["mekanism"],
    "uranium": ["mekanism"],
    "diamond": ["mekanism", "appflux"],
    "emerald": ["mekanism", "appflux"],
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
    "sulfur": ["mekanism"],
    "ruby": ["moremekanismprocessing"],
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
            if (type === "ore") {
              e.remove(`mekanism:${key}_${type}`);
              e.remove(`mekanism:deepslate_${key}_${type}`);
            } else if (type === "raw") {
              e.remove(`mekanism:${type}_${key}`);
              e.remove(`${mod}:block_${type}_${key}`);
            }
            else
              e.remove(`${mod}:${type}_${key}`);
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
        case "occultism":
          types.forEach(type => {
            if (type !== "ore") {
              if (type !== "raw")
                e.remove(`${mod}:${key}_${type}`);
              else {
                e.remove(`${mod}:${type}_${key}`);
                e.remove(`${mod}:${type}_${key}_block`);
              }
            }
          });
          break;
        default:
          types.forEach(type => {
            if (type === "ore") {
              e.remove(`${mod}:${key}_${type}`);
              e.remove(`${mod}:deepslate_${key}_${type}`);
            }
            else if (type !== "raw")
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

  e.remove(["mekanism:block_salt", "mekanism:salt"]);
});
