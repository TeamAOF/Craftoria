// const $FakePlayer = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayer');
const $CropBlock = Java.loadClass('net.minecraft.world.level.block.CropBlock');
const $CocoaBlock = Java.loadClass('net.minecraft.world.level.block.CocoaBlock');
const $NetherWartBlock = Java.loadClass('net.minecraft.world.level.block.NetherWartBlock');
// const $StemBlock = Java.loadClass('net.minecraft.world.level.block.StemBlock');

BlockEvents.rightClicked(event => {
  const { block, player, hand } = event;
  if (!isPlayerActionValid(player, hand)) return;
  const toHarvest = block.blockState.block;

  if (toHarvest instanceof $CropBlock || toHarvest instanceof $CocoaBlock || toHarvest instanceof $NetherWartBlock) {
    harvestCropBlock(event, block, toHarvest);
    // Maybe implement these later?
    // } else if (toHarvest instanceof $StemBlock) {
    //   harvestStemBlock(event, block, toHarvest);
  } else {
    logDebug('You right clicked a block that is not a crop block!');
  }
});

/**
 *
 * @param {$Player_} player
 * @param {$InteractionHand_} hand
 * @returns {boolean}
 */
function isPlayerActionValid(player, hand) {
  if (hand !== 'MAIN_HAND' || player.spectator || player.shiftKeyDown) return false;
  return true;
}

/**
 *
 * @param {$BlockRightClickedKubeEvent_} event
 * @param {$BlockContainerJS_} block
 * @param {$CropBlock_|$CocoaBlock_|$NetherWartBlock_} crop
 */
function harvestCropBlock(event, block, crop) {
  if (!isMature(block.blockState)) {
    logDebug('This crop is not fully grown.');
    return;
  }
  logDebug('Harvesting crop...');
  // Get the drops from the block
  const drops = block.drops;
  let removedASeed = false;
  drops.forEach(drop => {
    if (drop.id === crop.item.id && !removedASeed) {
      removedASeed = true;
      drop.count--;
    }
    if (drop.count <= 0) return;
    block.popItem(drop);
    logDebug(`Dropped ${drop.count}x ${drop.id}`);
  });

  block.setBlockState(getAgeZero(block.blockState), 10);

  logDebug('Harvested crop!');
}

/**
 * @param {$BlockRightClickedKubeEvent_} event
 * @param {$BlockContainerJS_} block
 * @param {$StemBlock_} stem
 */
function harvestStemBlock(event, block, stem) {
  logDebug('Harvesting stem block...');
  // This is for melon/pumpkin, not sure if I should implement this
}

/**
 *
 * @param {$BlockState_} state
 * @returns {boolean}
 */
function isMature(state) {
  if (state.block instanceof $CropBlock) {
    return state.block.isMaxAge(state);
  } else if (state.block instanceof $CocoaBlock) {
    return state.getValue($CocoaBlock.AGE) >= $CocoaBlock.MAX_AGE;
  } else if (state.block instanceof $NetherWartBlock) {
    return state.getValue($NetherWartBlock.AGE) >= $NetherWartBlock.MAX_AGE;
  }

  return false;
}

/**
 * @param {$BlockState_} state
 * @returns {$BlockState_}
 */
function getAgeZero(state) {
  if (state.block instanceof $CropBlock) {
    return state.block.getStateForAge(0);
  } else if (state.block instanceof $CocoaBlock) {
    return state.setValue($CocoaBlock.AGE, toJavaInt(0));
  } else if (state.block instanceof $NetherWartBlock) {
    return state.setValue($NetherWartBlock.AGE, toJavaInt(0));
  }

  return state;
}
