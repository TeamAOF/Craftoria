// This script allows you to autobuild MI multiblocks by right-clicking with an electric screwdriver in your main hand.
ItemEvents.firstRightClicked('craftoria:electric_screwdriver', event => {
  const { player, target, level } = event;

  if (target.type !== 'block') return; // Don't bother if it's not a block
  if (!(target?.block?.entity instanceof $MultiblockMachineBlockEntity)) return;

  /** @type {{ entity: $MultiblockMachineBlockEntity_, pos: $BlockPos_ }} */
  const { entity: multiblockMachine, pos: multiblockPos } = target.block;
  const shapeMatcher = multiblockMachine.createShapeMatcher();

  // Creative mode bypass
  if (player.creative) {
    shapeMatcher.buildMultiblock(level);
    player.tell(Text.green(`Successfully built multiblock at ${multiblockPos.x}, ${multiblockPos.y}, ${multiblockPos.z}`));
    return;
  }

  const requiredBlocks = {};
  let obstructionFound = false;

  for (const pos of shapeMatcher.getPositions()) {
    if (level.getBlock(pos).id !== 'minecraft:air') {
      obstructionFound = true;
      player.tell(Text.yellow('Block at ').append(Text.gray(`${pos.x}, ${pos.y}, ${pos.z}`)).append(Text.yellow(' is not air')));
      if (!player.shiftKeyDown) {
        player.tell(Text.yellow('Please remove the block before building the multiblock.'));
        player.tell(Text.gray('Sneak right-click to print all non-air blocks.'));
        break;
      }
    }
    if (!obstructionFound || player.shiftKeyDown) {
      /** @type {Special.Block} */
      let blockId = shapeMatcher.getSimpleMember(pos).previewState.block.id;
      requiredBlocks[blockId] = (requiredBlocks[blockId] || 0) + 1;
    }
  }

  if (obstructionFound) return;

  const playerInventory = player.inventory.allItems;
  const missingItems = {};
  const itemsToConsume = {};

  for (const [blockId, requiredCount] of Object.entries(requiredBlocks)) {
    let countInInventory = 0;
    for (let itemStack of playerInventory) {
      if (itemStack.id === blockId) {
        countInInventory += itemStack.count;
      }
    }

    if (countInInventory < requiredCount) {
      missingItems[blockId] = requiredCount - countInInventory;
    }
    itemsToConsume[blockId] = requiredCount;
  }

  if (Object.keys(missingItems).length > 0) {
    player.tell(Text.red('Missing required items:'));
    for (const [blockId, count] of Object.entries(missingItems)) {
      player.tell(Text.yellow('- ').append(Text.gray(`${count}x ${blockId}`)));
    }
    return;
  }

  for (const [blockId, totalToConsume] of Object.entries(itemsToConsume)) {
    let remainingToConsume = totalToConsume;
    for (let itemStack of playerInventory) {
      if (itemStack.id === blockId && remainingToConsume > 0) {
        let amountToShrink = Math.min(remainingToConsume, itemStack.count);
        itemStack.shrink(amountToShrink);
        remainingToConsume -= amountToShrink;
        if (remainingToConsume === 0) break;
      }
    }
  }

  shapeMatcher.buildMultiblock(level);
  player.tell(Text.green(`Successfully built multiblock at ${multiblockPos.x}, ${multiblockPos.y}, ${multiblockPos.z}`));
});
