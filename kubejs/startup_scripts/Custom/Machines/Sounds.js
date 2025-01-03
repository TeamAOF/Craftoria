MISoundAddons.modifySounds((e) => {
  let duration = {
    replicator_1: 20,
    bending_machine: 23,
    alloy_smelter: 38,
    canning_machine: 56,
    composter: 82,
    brewery: 71,
  };

  Object.keys(duration).forEach((key) => {
    e.modifyDuration(key, duration[key]);
  });
});
