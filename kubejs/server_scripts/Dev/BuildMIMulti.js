// This script allows you to build MI multiblocks by right-clicking with a multiblock builder in your main hand.
ItemEvents.firstRightClicked('craftoria:multiblock_builder', event => {
  const { player, target, level } = event;

  if (target.block.entity instanceof $MultiblockMachineBlockEntity) {
    /** @type {$MultiblockMachineBlockEntity} */
    const multiblock = target.block.entity;
    const { x, y, z } = target.block.pos;

    const shapeMatcher = multiblock.createShapeMatcher();
    const updatedBlocks = shapeMatcher.buildMultiblock(level);

    player.tell(`Built multiblock at ${x}, ${y}, ${z}`);
    player.tell(`Updated ${updatedBlocks} blocks`);
  }
});
