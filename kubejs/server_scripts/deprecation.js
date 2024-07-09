let deprecatedItems = { // Item ID: Item ID of replacement
};

let deprecatedMods = { // Mod ID: Mod ID of replacement
  "ironchest": "expandedstorage",
};

RecipeViewerEvents.removeEntries("item", event => {
  for (let [mod, replacement] in deprecatedMods) {
    event.remove(`@${mod}`);
  }

  for (let [old, replacement] in deprecatedItems) {
    event.remove(old);
  }
});

ServerEvents.recipes((event) => {

  let replaceChest = (old, mod) => {
    let chest = old.split(":")[1];
    if (Item.exists(`${mod}:${chest}`)) {
      old = [old, `${old.split(":")[0]}:trapped_${chest}`];
    }
    return old;
  };

  let replaceUpgrade = (old, mod) => {
    let upgrade = old.split(":")[1];
    if (Item.exists(`${mod}:${upgrade}`)) {
      old = [old, `${mod}:${upgrade.replace("chest_upgrade", "conversion_kit")}`];
    }
    return old;
  };

  for (let [old, replacement] in deprecatedItems) {
    event.shapeless(replacement, [old]).id(`craftoria:deprecated/${old.replace(":", "_")}_to_${replacement.replace(":", "_")}`);
  }

  for (let [mod, replacement] in deprecatedMods) {
    event.remove({ mod: mod });
    Ingredient.of(`@${mod}`).itemIds.forEach(i => {
      let newId = i.replace(mod, replacement);
      console.log(i);
      let recipeID = `craftoria:deprecated/`;
      if (Item.exists(newId)) {
        if (i.includes("chest")) {
          i = replaceChest(i, replacement);
        }

        if (i.length > 1) {
          recipeID += `${i[0].replace(":", "_")}_to_${newId.replace(":", "_")}`;
        } else {
          recipeID += `${i.replace(":", "_")}_to_${newId.replace(":", "_")}`;
        }

        event.shapeless(newId, [i]).id(recipeID);
        console.log(`Added a conversion from ${i} -> ${newId}`);
      } else if (replacement === "expandedstorage" && i.includes("chest_upgrade")) {
        newId = newId.split(":")[1];
        newId = newId.replace("chest_upgrade", "conversion_kit");
        console.log(newId);

        if (Item.exists(`${replacement}:${newId}`)) {
          i = replaceUpgrade(i, replacement);

          if (i.length > 1) {
            recipeID += `${i[0].replace(":", "_")}_to_${newId.replace(":", "_")}`;
          } else {
            recipeID += `${i.replace(":", "_")}_to_${newId.replace(":", "_")}`;
          }

          event.shapeless(`${replacement}:${newId}`, [i]).id(recipeID);
          console.log(`Added a conversion from ${i} -> ${newId}`);
        }
      }
    });
  }
});