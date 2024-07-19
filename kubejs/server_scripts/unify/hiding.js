RecipeViewerEvents.removeEntries("item", e => {
  let hideItemsFromTag = (tag) => {
    try {
      let items = Ingredient.of(tag).itemIds;
      if (items.length > 1) {
        if (debug)
          console.log(`Found ${items.length} items for tag: ${tag}`);
        items = sortArray(items.toArray());
        let _ = items.shift();
        e.remove(items);
      }
    } catch (error) {
      if (debug) console.error(`Could not find item for tag: ${tag}`);
    }
  };

  for (let [material, types] of Object.entries(materials)) {
    switch (material) {
      case "metals":
        metals.forEach(metal => {
          types.forEach(type => {
            hideItemsFromTag(`#c:${type}/${metal}`);
          });
        });
        break;
      case "gems":
        gems.forEach(gem => {
          types.forEach(type => {
            hideItemsFromTag(`#c:${type}/${gem}`);
          });
        });
        break;
      case "misc":
        misc.forEach(misc => {
          types.forEach(type => {
            hideItemsFromTag(`#c:${type}/${misc}`);
          });
        });
        break;
      default:
        console.error(`Unknown material: ${material}`);
        break;
    }
  }

  e.remove(["mekanism:block_salt", "mffs:steel_compound"]);
});
