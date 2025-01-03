RecipeViewerEvents.addInformation('item', (e) => {
  let entries = {
    // Add machine information here
    'modern_industrialization:replicator_1': [
      `You've done it! You've reached the pinnacle of Modern Industrialization! The Replicator Mk I!`,
      `This machine is capable of replicating almost any item in the game, provided you have the necessary amount of energy and UU-Matter.`,
      `Simply insert the desired item into the input slot, feed it some UU matter, and the Replicator Mk I will begin the replication process.`,
      `It's important to note that the Replicator Mk I is not capable of replicating exact copies of items that have NBT data, such as enchanted items or items with durability.`,
      `For some reason, it seems to be incapable of replicating fluids at all. Maybe we can fix that with a future upgrade?`,
      `In-case you're wondering, the Replicator Mk I is capable of replicating itself, but it will require a significant amount of UU matter and energy to do so.`,
    ],
    'modern_industrialization:replicator': [
      `The Replicator Mk II, the latest and greatest in replication technology!`,
      `Everything that the Replicator Mk I can do, the Replicator Mk II can do better! Though it has some downsides.`,
      `It can replicate items significantly cheaper than the Replicator Mk I, requring 100 times less UU-Matter.`,
      `It is also capable of replicating items with NBT data, such as enchanted items or items with durability.`,
      `The problem with replicating fluids has been fixed, and the Replicator Mk II is capable of replicating fluids as well! Except for some energy dense fluids, such as Helium Plasma.`,
      `Another advantage of the Replicator Mk II is that it doesn't require power to replicate items thanks to its internal reactor.`,
      `However, this comes at a cost. It lacks the ability to overclock the replication process, meaning it will take longer to replicate items.`,
      `It is also not able to create matter out of nothing, so it is incapable of replicating items that store other items, such as storage blocks or bags.`,
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
