// ignored: true
MISoundAddons.modifySounds(e => {
  let duration = {
    bending_machine: 23,
    alloy_smelter: 38,
    canning_machine: 56,
    composter: 82,
    brewery: 71,
  };

  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    if (machine.sound && machine.soundDuration) {
      duration[id] = machine.soundDuration;
    }
  }

  Object.keys(duration).forEach(key => {
    e.modifyDuration(key, duration[key]);
  });
});
