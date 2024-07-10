// Currently adding information to EMI adds it twice, due to it also being added to JEI.
RecipeViewerEvents.addInformation("fluid", event => {
  let fluidEntries = {
    "justdirethings:unstable_portal_fluid_source": [
      "This fluid is used to make (stable)portal fluid.",
      "It must be made in a vanilla End Biome,",
      "otherwise it will vaporize when made."
    ]
  };

  for (let [fluid, info] in fluidEntries) {
    event.add(fluid, info);
  }
});