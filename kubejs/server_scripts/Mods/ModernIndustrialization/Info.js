RecipeViewerEvents.addInformation('item', (e) => {
  let entries = {
    // Add machine information here
    'modern_industrialization:replicator': [
      `A wonderful machine capable of replicating items, at a cost of course.`,
      `The cost being 1mb of UU-Matter per item replicated.`,
      `But there's a catch, it can't replicate items that contain other items, like backpacks or shulker boxes, as you cannot create matter from nothing.`,
    ],
    'modern_industrialization:replicator_2': [
      `An "improved" version of the original Replicator, capable of replicating items much faster, but it consumes power now.`,
      `It's also capable of replicating some items that the "basic" Replicator can't.`,
      `Namely, items that can contain other items, like backpacks or shulker boxes.`,
      `But this comes with a quirk, it replicates items as if they were just made.`,
    ],
    'extended_industrialization:processing_array': [
      `Are those single block machines cluttering your base but still not meeting your production needs?`,
      `The Processing Array is here to solve your problems!`,
      `This machine allows you to combine the power of multiple single-block machines into a single, efficient processing unit.`,
      `Simply insert up to 64 identical single-block machines into the GUI of the Processing Array to supercharge your production.`,
      `The more machines you add, the more recipes are processed, but be warned—it will demand a significant amount of energy!`,
      `With the Processing Array, you can scale up your production without cluttering your base with individual machines.`,
      `NOTE: Does not process many different recipes at once, but processes one recipe multiple times at once.`,
    ],
    'industrialization_overdrive:multi_processing_array': [
      `Are those massive multiblock machines just not cutting it in terms of speed?`,
      `The Multi-Processing Array is here to take your production to the next level!`,
      `This machine can parallelize the processing of recipes, allowing it to process up to 64 times faster than a single machine!`,
      `Simply place the multiblock controllers of the desired machine into the GUI of the Multi-Processing Array to link them together.`,
      `But keep in mind, such efficiency comes at a steep energy cost!`,
      `With the Multi-Processing Array, you can scale up your production without cluttering your base with those massive multiblocks.`,
      `NOTE: Does not process many different recipes at once, but processes one recipe multiple times at once.`,
    ],

    // Add item information here
    'modern_industrialization:overdrive_module': [
      `This module prevents the machine from losing its overclock status when it runs out of ingredients.`,
      `But be warned, the machine still consumes power when its out of ingredients.`,
      `Due to the nature of how overclocking works, the recipe will be locked, until the module is removed or the machine runs out of power.`,
    ],
  };

  for (let [item, info] in entries) {
    if (info.length > 0)
      for (let i = 0; i < info.length - 1; i++) {
        info[i] += '\n';
      }

    e.add(item, info);
  }
});
