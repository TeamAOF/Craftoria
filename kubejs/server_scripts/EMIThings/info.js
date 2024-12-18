// Currently adding information to EMI adds it twice, due to it also being added to JEI.
RecipeViewerEvents.addInformation('fluid', (e) => {
  let fluidEntries = {
    'justdirethings:unstable_portal_fluid_source': [
      'This fluid is used to make (stable)portal fluid.',
      'It must be made in a vanilla End Biome,',
      'otherwise it will vaporize when made.',
    ],
  };

  for (let [fluid, info] in fluidEntries) {
    e.add(fluid, info);
  }
});

RecipeViewerEvents.addInformation('item', (e) => {
  let entries = {
    'cursedearth:cursed_earth': [
      `Can be acquired by sneaking and using a Wither Rose on Dirt.`,
      `Spawns hostile mobs at a fast pace.`,
      `Spreads to nearby dirt blocks.`,
      `Burns at light level 7 or above.`,
    ],
    'cursedearth:blessed_earth': [
      `Can be acquired by sneaking and using a Blessed Flower on Dirt.`,
      `Spawns passive mobs at a fast pace.`,
      `Spreads to nearby dirt blocks.`,
    ],
    'tesseract:tesseract': [
      `A block that can transfer items, fluids, and energy wirelessly.`,
      `Either the sending or receiving side must be next to a "container" block, like a chest or a tank.`,
      `A direct pipe to pipe won't work, unless the pipe can store items, fluids, or energy. Ex. Mekanism's Universal Cable.`,
      `The Tesseract is unable to move things on its own, use a pipe or cable to move things to and from it.`,
      `Be sure to set the same frequency on both sides.`,
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
