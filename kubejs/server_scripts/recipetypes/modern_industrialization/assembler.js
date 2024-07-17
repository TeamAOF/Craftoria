
ServerEvents.recipes(event => {
  miAssembler(event, ["modern_industrialization:uu_matter", 500],
    [["modern_industrialization:quantum_machine_hull", 1], ["modern_industrialization:quantum_upgrade", 4], ["modern_industrialization:quantum_circuit", 4], ["modern_industrialization:quantum_tank", 4], ["modern_industrialization:quantum_barrel", 4], ["mekanism:pellet_antimatter", 16]],
    ["modern_industrialization:replicator", 1], 1000000, 2000);
});