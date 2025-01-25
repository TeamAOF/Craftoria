if (global.devEnv) {
  let $MultiblockMachineBlockEntity = Java.loadClass('aztech.modern_industrialization.machines.multiblocks.MultiblockMachineBlockEntity');

  // This script allows you to build MI multiblocks by right-clicking with a stick in your main hand and a wrench in your off-hand.
  ItemEvents.firstRightClicked('minecraft:stick', (event) => {
    const { player, target } = event;
    if (player.offHandItem.item.id !== 'modern_industrialization:wrench') return;

    if (target.block.entity instanceof $MultiblockMachineBlockEntity) {
      const { x, y, z } = target.block.pos;

      player.runCommand(`/mi machines build_multiblock ${x} ${y} ${z}`);
    }
  });
}
