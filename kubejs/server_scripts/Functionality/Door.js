/**
 * Open doors with pressure plates, buttons, and levers.
 *
 * Can also open doors by right-clicking them.
 *
 * Handles doors, trapdoors, and fence gates.
 *
 * Has a recursive door opening feature.
 */
function doubleDoor() {
  const enableRecursiveOpen = true; // Enable recursive door opening

  const prevPoweredPos = Utils.newList(); // List of previously powered positions
  const prevButtonPos = new Map(); // Map of previously powered button positions

  /**
   *
   * @param {$BlockPos_} pos
   * @param {boolean} down
   * @param {$EnumProperty_<$AttachFace_>} face
   * @param {$EnumProperty_<$DirectionProperty_>} facing
   * @returns {$List_<$BlockPos_>}
   */
  function getNearbyBlocks(pos, down, facing, face) {
    if (face && face === 'wall' && facing) {
      pos = pos.relative(getOppositeDir(facing));
    } else if (facing && !face) pos = pos.relative(facing);
    const nearbyBlocks = Utils.newList();
    for (const dir of Direction.ALL_SET) {
      if (dir.equals(Direction.DOWN) && !down) continue; // Skip if down direction and down is false
      nearbyBlocks.add(pos.relative(dir)); // Add all directions to the set
    }
    return nearbyBlocks;
  }

  /**
   *
   * @param {$EnumProperty_<$DirectionProperty_} dir
   * @returns {$EnumProperty_<$DirectionProperty_>}
   */
  function getOppositeDir(dir) {
    switch (dir) {
    case Direction.NORTH:
      return Direction.SOUTH;
    case Direction.SOUTH:
      return Direction.NORTH;
    case Direction.EAST:
      return Direction.WEST;
    case Direction.WEST:
      return Direction.EAST;
    case Direction.UP:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.UP;
    }
    return null; // Return null if no match found
  }

  /**
   *
   * @param {$ServerLevel_} level
   * @param {$BlockPos_} blockPos
   * @param {$BlockState_} blockState
   */
  function onNeighborNotify(level, blockPos, blockState) {
    if (level.clientSide) return;

    const { block } = blockState;
    const isPressurePlate = block instanceof $PressurePlateBlock || block instanceof $WeightedPressurePlateBlock;
    const isButtonOrLever = block instanceof $ButtonBlock || block instanceof $LeverBlock;

    // Skip if not a relevant block type
    if (!isPressurePlate && !isButtonOrLever) return;

    // Cache block properties
    const isPoweredProp = BlockProperties.POWERED;
    const weightPowerProp = BlockProperties.POWER;

    // Determine if the block is currently powered
    let isCurrentlyPowered;
    if (block instanceof $WeightedPressurePlateBlock) isCurrentlyPowered = blockState.getValue(weightPowerProp) > 0;
    else isCurrentlyPowered = blockState.getValue(isPoweredProp);

    // Handle Button/Lever logic
    if (isButtonOrLever) {
      if (isCurrentlyPowered) {
        // Only trigger if this is a new activation (not already in prevButtonPos)
        if (!prevButtonPos.has(blockPos)) {
          prevButtonPos.set(blockPos.immutable(), true);
        } else return; // Skip if already processed
      }
      // Only trigger if the block was previously powered
      else if (!prevPoweredPos.remove(blockPos)) return;
    }

    // Handle Pressure Plate logic
    else if (isPressurePlate) {
      if (!isCurrentlyPowered) {
        // Only trigger if the plate was previously powered
        if (!prevPoweredPos.remove(blockPos)) return;
      }
    }

    // Find nearby doors to open/close
    let doorPos = null;

    // Search nearby blocks for doors
    /** @type {$List_<$BlockPos_>} */
    const searchArea = isPressurePlate
      ? getNearbyBlocks(blockPos, false)
      : getNearbyBlocks(blockPos, true, blockState.getValue($ButtonBlock.FACING), blockState.getValue($ButtonBlock.FACE));

    for (const aroundPos of searchArea) {
      let aroundState = level.getBlockState(aroundPos);
      if (isDoorBlock(aroundState)) {
        doorPos = aroundPos;
        break;
      }
    }

    // Process the door if found
    if (doorPos) {
      const doorState = level.getBlockState(doorPos);
      if (processDoor(null, level, doorPos, doorState, isCurrentlyPowered)) {
        if (isCurrentlyPowered) prevPoweredPos.add(blockPos.immutable());
      }
    }
  }

  /**
   *
   * @param {$ServerLevel_} level
   * @param {$Player_} player
   * @param {$InteractionHand_} hand
   * @param {$BlockPos_} blockPos
   */
  function onDoorClick(level, player, hand, blockPos) {
    if (level.clientSide) return; // Skip if client side
    if (!hand.equals($InteractionHand.MAIN_HAND)) return; // Skip if not main hand
    if (player.shiftKeyDown) return; // Skip if player is sneaking
    const blockState = level.getBlockState(blockPos);
    if (!isDoorBlock(blockState)) return; // Skip if block is not a door
    if (!canOpenByHand(blockState)) return; // Skip if block cannot be opened by hand
    processDoor(player, level, blockPos, blockState, null); // Process the door
  }

  /**
   * Checks if the block is a door, trapdoor, or fence gate.
   * @param {$BlockState_} blockState
   * @returns boolean
   */
  function isDoorBlock(blockState) {
    const { block } = blockState;
    return block instanceof $DoorBlock || block instanceof $TrapDoorBlock || block instanceof $FenceGateBlock;
  }

  const DOOR_UPDATE_FLAGS = 10; // Block update flags for setBlock

  /**
   *
   * @param {$Player_} player
   * @param {$ServerLevel_} level
   * @param {$BlockPos_} blockPos
   * @param {$BlockState_} blockState
   * @param {boolean} isOpen
   * @returns boolean
   */
  function processDoor(player, level, blockPos, blockState, isOpen) {
    if (!level || !blockState) return false;

    const { block } = blockState;
    if (!block) return false;

    // Handle upper door half
    if (block instanceof $DoorBlock && blockState.getValue($DoorBlock.HALF).equals($DoubleBlockHalf.UPPER)) {
      blockPos = blockPos.below(1).immutable();
      blockState = level.getBlockState(blockPos);
      if (!blockState) return false;
    }

    // Determine the target open state
    const targetOpen = toJavaBool(isOpen ?? !blockState.getValue($DoorBlock.OPEN));

    // Find connected doors
    const yOffset = block instanceof $DoorBlock ? 0 : 1;
    const toOpenPosList = enableRecursiveOpen
      ? findConnectedDoors(level, blockPos, block, yOffset)
      : findImmediateNeighbors(level, blockPos, block);

    if (toOpenPosList.length <= 1) return false;

    // Update all connected doors
    for (const pos of toOpenPosList) {
      if (pos.equals(blockPos)) continue;
      let state = level.getBlockState(pos);
      if (!state) continue;

      if (block instanceof $DoorBlock) {
        level.setBlock(pos, state.setValue($DoorBlock.OPEN, targetOpen), DOOR_UPDATE_FLAGS);
      } else if (block instanceof $TrapDoorBlock) {
        level.setBlock(pos, state.setValue(BlockProperties.OPEN, targetOpen), DOOR_UPDATE_FLAGS);
      } else if (block instanceof $FenceGateBlock) {
        level.setBlock(pos, state.setValue($DoorBlock.OPEN, targetOpen), DOOR_UPDATE_FLAGS);
      }
    }

    if (player) player.swing($InteractionHand.MAIN_HAND);
    return true;
  }

  /**
   *
   * @param {$ServerLevel_} level
   * @param {$BlockPos_} blockPos
   * @param {*} blockType
   * @returns {$List_<$BlockPos_>}
   */
  function findImmediateNeighbors(level, blockPos, blockType) {
    const neighbors = Utils.newList();
    neighbors.add(blockPos.immutable());

    for (const dir of Direction.ALL_SET) {
      let neighborPos = blockPos.relative(dir);
      let neighborState = level.getBlockState(neighborPos);
      if (isDoorBlock(neighborState) && neighborState.block.name.equals(blockType.name)) {
        neighbors.add(neighborPos.immutable());
      }
    }
    return neighbors;
  }

  /**
   * Uses breadth-first search to find all connected doors
   * @param {$ServerLevel_} level
   * @param {$BlockPos_} startPos
   * @param {*} blockType
   * @param {integer} yOffset
   * @returns {$List_<$BlockPos_>}
   */
  function findConnectedDoors(level, startPos, blockType, yOffset) {
    const toOpen = Utils.newList(); // List of blocks to open
    const visited = new Set(); // Map of visited blocks
    const queue = Utils.newList(); // Queue for breadth-first search

    // Add starting position (we need this one to be immutable since it's stored)
    const immutableStart = startPos.immutable();
    toOpen.add(immutableStart);

    const startKey = `${startPos.x},${startPos.y},${startPos.z}`;
    visited.add(startKey);
    queue.push(immutableStart);

    const maxDistance = 10;
    let safetyCounter = 0;
    const MAX_ITERATIONS = 100;

    while (queue.length > 0 && safetyCounter < MAX_ITERATIONS) {
      safetyCounter++;
      /** @type {$BlockPos_} */
      let currentPos = queue.removeFirst();

      // Check all nearby blocks
      for (let x = -1; x <= 1; x++) {
        for (let y = -yOffset; y <= yOffset; y++) {
          for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) continue;

            let neighborPos = new $BlockPos(currentPos.x + x, currentPos.y + y, currentPos.z + z);
            let neighborKey = `${neighborPos.x},${neighborPos.y},${neighborPos.z}`;

            // Skip if already visited or too far from start
            if (visited.has(neighborKey) || !immutableStart.closerThan(neighborPos, maxDistance)) {
              continue;
            }

            visited.add(neighborKey);

            // Check if it's a matching door
            let neighborState = level.getBlockState(neighborPos);
            if (isDoorBlock(neighborState) && neighborState.block.name.equals(blockType.name)) {
              // Only create immutable objects when we need to store them
              toOpen.add(neighborPos.immutable());
              queue.push(neighborPos.immutable());
            }
          }
        }
      }
    }

    return toOpen;
  }

  /**
   *
   * @param {$BlockState_} blockState
   * @returns boolean
   */
  function canOpenByHand(blockState) {
    const { block } = blockState;
    if (block instanceof $DoorBlock) return block.type().canOpenByHand(); // Check if the door can be opened by hand
    // Check if the trapdoor is wooden (the one I want I can't access, will do with a tag for now)
    else if (block instanceof $TrapDoorBlock) return block.hasTag('minecraft:wooden_trapdoors');
    return true; // Return true for other blocks (fence gates, etc.)
  }

  return {
    /**
     *
     * @param {$ServerLevel_} level
     * @param {$BlockPos_} blockPos
     * @param {$BlockState_} blockState
     */
    onNeighborNotify(level, blockPos, blockState) {
      onNeighborNotify(level, blockPos, blockState);
    },
    /**
     *
     * @param {$ServerLevel_} level
     * @param {$Player_} player
     * @param {$InteractionHand_} hand
     * @param {$BlockPos_} blockPos
     * @param {$BlockState_} blockState
     */
    onDoorClick(level, player, hand, blockPos, blockState) {
      if (isDoorBlock(blockState)) onDoorClick(level, player, hand, blockPos);
    },
  };
}

const { onNeighborNotify, onDoorClick } = doubleDoor();

NativeEvents.onEvent($NeighborNotifyEvent, event => {
  const { pos, state } = event;
  const level = getServerLevel(event.level);
  if (level) onNeighborNotify(level, pos, state);
});

BlockEvents.rightClicked(event => {
  const { level, player, hand, block } = event;
  const { pos, blockState } = block;
  onDoorClick(level, player, hand, pos, blockState);
});
