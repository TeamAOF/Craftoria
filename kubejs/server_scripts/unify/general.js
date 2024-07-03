// Priority: 998
/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod that has the item.
 * For now, @white.phantom signing off.
 */


let ifExists = (mod, material, type, reverse) => {
  let item = `${mod}:${material}_${type}`;
  if (reverse)
    item = `${mod}:${type}_${material}`;

  return Item.exists(item);
};

let logNotFound = (mod, material, type) => {
  if (debug === 1)
    console.info(`Could not find ${mod}:${material}_${type} or ${mod}:${type}_${material}, skipping...`);
};

ServerEvents.tags("item", e => {
  // This is used to re-order the tags.
  for (let [material, types] in metals) {
    types.forEach(type => {
      if (type === "dust") {
        e.removeAll(`c:dusts/${material}`);

        modPriority.forEach(mod => {
          if (ifExists(mod, material, type, false))
            e.add(`c:dusts/${material}`, `${mod}:${material}_${type}`);

          else if (ifExists(mod, material, type, true))
            e.add(`c:dusts/${material}`, `${mod}:${type}_${material}`);

          else
            logNotFound(mod, material, type);
        });
      }
    });
  }
});

ServerEvents.recipes(e => {
  let idRemovals = [
    "mffs:steel_compound",
  ];

  idRemovals.forEach(id => {
    e.remove({ id: id });
  });

  let defaultReplace = (material, type, mod) => {
    switch (type) {
      case "block":
        if (ifExists(mod, material, type, false))
          replaceBlock(material, mod);
        else
          logNotFound(mod, material, type);
        break;

      case "raw":
        if (ifExists(mod, material, type, true))
          replaceRaw(material, mod);
        else
          logNotFound(mod, material, type);
        break;

      default:
        if (ifExists(mod, material, type, false)) {
          e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${material}_${type}`);
          e.replaceInput({}, `#c:${type}s/${material}`, `#c:${type}s/${material}`);
          if (debug === 2) console.info(`Replaced #c:${type}s/${material}, with ${mod}:${material}_${type}`);
          unified.push(`${material}_${type}`);
        } else
          logNotFound(mod, material, type);
    };
  };

  let replaceBlock = (material, mod) => {
    e.replaceOutput({}, `#c:storage_blocks/${material}`, `${mod}:${material}_block`);
    e.replaceInput({}, `#c:storage_blocks/${material}`, `#c:storage_blocks/${material}`);
    if (debug === 2) console.info(`Replaced #c:storage_blocks/${material}, with ${mod}:${material}_block`);
    unified.push(`${material}_block`);
  };

  let replaceRaw = (material, mod) => {
    e.replaceOutput({}, `#c:raw_materials/${material}`, `${mod}:raw_${material}`);
    e.replaceInput({}, `#c:raw_materials/${material}`, `#c:raw_materials/${material}`);

    e.replaceOutput({}, `#c:storage_blocks/raw_${material}`, `${mod}:raw_${material}_block`);
    if (debug === 2) console.info(`Replaced #c:raw_materials/${material}, with ${mod}:raw_${material}`);
    unified.push(`${material}_raw`);
  };

  let unifyMetal = (material, types) => {
    types.forEach(type => {
      if (unified.includes(`${material}_${type}`)) {
        if (debug === 2) console.info(`Skipping ${material}_${type}, already unified.`);
        return;
      }

      modPriority.forEach(mod => {
        if (mod !== "mekanism")
          defaultReplace(material, type, mod);
      });
    });
  };

  let unifyGem = (material, types) => {
    types.forEach(type => {
      if (unified.includes(`${material}_${type}`)) {
        if (debug === 2) console.info(`Skipping ${material}_${type}, already unified.`);
        return;
      }

      modPriority.forEach(mod => {
        if (ifExists(mod, material, type, false)) {
          e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${material}_${type}`);
          if (debug === 2) console.info(`Replaced #c:${type}s/${material}, with ${mod}:${material}_${type}`);
          unified.push(`${material}_${type}`);
        } else
          logNotFound(mod, material, type);
      });
    });
  };

  [metals, gems].forEach(materials => {
    for (let [material, types] of Object.entries(materials)) {
      if (debug === 1) console.info(`Unifying ${material}...`);

      if (materials === gems)
        unifyGem(material, types);
      else
        unifyMetal(material, types);
    };
  });

  if (debug === 1) {
    unified.forEach(material => {
      console.info(`Unified ${material}`);
    });
  } else if (debug === 3) {
    e.recipes.forEach(r => {
      console.info(r);
    });
  };
});
