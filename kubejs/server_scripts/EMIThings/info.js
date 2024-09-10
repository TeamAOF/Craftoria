// Currently adding information to EMI adds it twice, due to it also being added to JEI.
RecipeViewerEvents.addInformation('fluid', (event) => {
  let fluidEntries = {
    'justdirethings:unstable_portal_fluid_source': [
      'This fluid is used to make (stable)portal fluid.',
      'It must be made in a vanilla End Biome,',
      'otherwise it will vaporize when made.',
    ],
  };

  for (let [fluid, info] in fluidEntries) {
    event.add(fluid, info);
  }
});

RecipeViewerEvents.addInformation('item', (event) => {
  event.add('cursedearth:cursed_earth', [
    'Can be acquired by sneaking and using\na Wither Rose on Dirt.',
    'Spawns hostile mobs at a fast pace.',
    'Spreads to nearby dirt blocks.',
    'Burns at light level 7 or above.',
  ]);
  event.add('cursedearth:blessed_earth', [
    'Can be acquired by sneaking and using\na Blessed Flower on Dirt.',
    'Spawns passive mobs at a fast pace.',
    'Spreads to nearby dirt blocks.',
  ]);
});
