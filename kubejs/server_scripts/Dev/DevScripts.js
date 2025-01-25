if (global.devEnv) {
  let $MultiblockMachineBlockEntity = Java.loadClass('aztech.modern_industrialization.machines.multiblocks.MultiblockMachineBlockEntity');

  // This script allows you to build MI multiblocks by right-clicking with a stick in your main hand and a wrench in your off-hand.
  ItemEvents.firstRightClicked('minecraft:stick', (event) => {
    const { player, target, level } = event;
    if (player.offHandItem.item.id !== 'modern_industrialization:wrench') return;

    if (target.block.entity instanceof $MultiblockMachineBlockEntity) {
      /** @type $MultiblockMachineBlockEntity */
      const multiblock = target.block.entity;
      const { x, y, z } = target.block.pos;
      // const shape = entity.getActiveShape();
      const shapeMatcher = entity.createShapeMatcher();
      const updatedBlocks = shapeMatcher.buildMultiblock(level);

      player.tell(`Built multiblock at ${x}, ${y}, ${z}`);
      player.tell(`Updated ${updatedBlocks} blocks`);
      // player.tell(`Shape: ${shape}`);
    }
  });
}
