StartupEvents.registry('item', event=>{
  const items = {
    // Dev items which have special scripts assigned to them in either server_scripts or client_scripts
    multiblock_builder: 'Multiblock Builder', // Builds a MI multiblock when right clicking a controller block.
    multiblock_generator: 'Multiblock Generator', // Used for generating KubeJS code for MI multiblocks.
  };

  for (const [id, name] of Object.entries(items)) {
    event.create(`craftoria:${id}`).displayName(name).texture(`craftoria:dev/${id}`);
  }
});
