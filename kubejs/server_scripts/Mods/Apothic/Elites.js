ServerEvents.generateData('after_mods', (e) => {
  ['overworld/craig', 'overworld/honeyed_archer', 'overworld/undead_knight', 'the_nether/withering_archer'].forEach((id) => {
    e.json(`apotheosis:apothic_elites/${id}`, {});
  });
});
