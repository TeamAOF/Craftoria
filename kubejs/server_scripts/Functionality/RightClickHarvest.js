// const $FakePlayer = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayer');
const $CropBlock = Java.loadClass('net.minecraft.world.level.block.CropBlock');
const $CocoaBlock = Java.loadClass('net.minecraft.world.level.block.CocoaBlock');
const $NetherWartBlock = Java.loadClass('net.minecraft.world.level.block.NetherWartBlock');

// Constants
const UPDATE_NEIGHBORS_FLAG = 10;

BlockEvents.rightClicked(event => {
  const { block, player, hand, item } = event;
  if (!isPlayerActionValid(player, hand)) return;
  const toHarvest = block.blockState.block;

  if (toHarvest instanceof $CropBlock || toHarvest instanceof $CocoaBlock || toHarvest instanceof $NetherWartBlock)
    if (harvestCropBlock(block, toHarvest, player, item)) event.cancel();
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
 * @param {$BlockContainerJS_} block
 * @param {$CropBlock_|$CocoaBlock_|$NetherWartBlock_} crop
 * @param {$Player_} player
 * @param {import('net.minecraft.world.item.ItemStack')} stack
 */
function harvestCropBlock(block, crop, player, stack) {
  if (!isMature(block.blockState)) {
    logDebug('This crop is not fully grown.');
    return false;
  }

  logDebug('Harvesting crop...');
  // Get the drops from the block
  let drops = block.getDrops(player, stack);
  let removedASeed = false;

  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    if (drop.id === crop.item.id && !removedASeed) {
      removedASeed = true;
      drop.count--;
    }
    if (drop.count <= 0 || drop.empty) continue;

    block.popItem(drop);
    logDebug(`Dropped ${drop.count}x ${drop.id}`);
  }

  block.setBlockState(getAgeZero(block.blockState), UPDATE_NEIGHBORS_FLAG);
  player.swing();
  logDebug('Harvested crop!');
  return true;
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
