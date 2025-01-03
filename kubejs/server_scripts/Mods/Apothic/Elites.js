ServerEvents.generateData('after_mods', (e) => {
  // Disables Apoths Elites as they currently crash. To be re-enabled once fixed.
  ['overworld/craig', 'overworld/honeyed_archer', 'overworld/undead_knight', 'the_nether/withering_archer'].forEach((id) => {
    e.json(`apotheosis:apothic_elites/${id}`, {});
  });
});
