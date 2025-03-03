// This script opens two doors when a player right-clicks on a door.
const $DoorBlock_ = Java.loadClass('net.minecraft.world.level.block.DoorBlock');

BlockEvents.rightClicked((event) => {
  let { player, level, server, block } = event;

  let doorTag = 'minecraft:wooden_doors';

  /**
   * @param {$DoorBlock_} door
   */
  let openDoor = (door, entity, level, blockState, blockPos, toOpen) => {
    door.setOpen(entity, level, blockState, blockPos, toOpen);
  };

  let dirAndOffsetToVec3i = (dir, offset) => {
    /** @type $Vec3i_ */
    let vec3i = null;

    switch (dir) {
      case 'north':
        vec3i = new Vec3i(0, 0, -offset);
        break;
      case 'south':
        vec3i = new Vec3i(0, 0, offset);
        break;
      case 'west':
        vec3i = new Vec3i(-offset, 0, 0);
        break;
      case 'east':
        vec3i = new Vec3i(offset, 0, 0);
        break;
    }

    return vec3i;
  };

  /**
   * @param {$BlockContainerJS_} block
   */
  let getNeighborDoor = (block) => {
    let doorState = block.blockState;
    let doorPos = block.pos;
    let neighbor = null;

    let stateValues = doorState.values;

    let hinge = stateValues.get('hinge');
    let facing = stateValues.get('facing');
    let powered = stateValues.get('powered');

    let offset = facing == 'upper' ? 1 : -1;

    let facingValue = doorState.getValue($DoorBlock_.FACING);
    if (hinge == 'right') {
      let neighborPos = doorPos.offset(dirAndOffsetToVec3i(facingValue.getCounterClockWise(), offset));
      if (debug) player.tell(`Neighbor Pos: ${neighborPos}`);
      neighbor = level.getBlock(neighborPos);
    } else {
      let neighborPos = doorPos.offset(dirAndOffsetToVec3i(facingValue.getClockWise(), offset));
      if (debug) player.tell(`Neighbor Pos: ${neighborPos}`);
      neighbor = level.getBlock(neighborPos);
    }

    if (!neighbor.hasTag(doorTag)) {
      if (debug) player.tell('Neighbor is not a door, checking the other side.');

      if (hinge == 'right') {
        let neighborPos = doorPos.offset(dirAndOffsetToVec3i(facingValue.getClockWise(), offset));
        if (debug) player.tell(`Neighbor Pos: ${neighborPos}`);
        neighbor = level.getBlock(neighborPos);
      } else {
        let neighborPos = doorPos.offset(dirAndOffsetToVec3i(facingValue.getCounterClockWise(), offset));
        if (debug) player.tell(`Neighbor Pos: ${neighborPos}`);
        neighbor = level.getBlock(neighborPos);
      }
    }

    if (debug) player.tell(`Neighbor: ${neighbor}`);
    return neighbor;
  };

  if (block.hasTag(doorTag)) {
    let blockState = block.blockState;
    let blockPos = block.pos;
    let door = blockState.block;

    if (door instanceof $DoorBlock_) {
      if (debug) player.tell('This block is a door.');

      let isOpen = blockState.getValue($DoorBlock_.OPEN);
      if (debug) player.tell(`Is Open: ${isOpen}`);

      let neighbor = getNeighborDoor(block);
      if (neighbor) {
        let neighborState = neighbor.blockState;
        let neighborPos = neighbor.pos;

        let neighborDoor = neighborState.block;

        if (neighborDoor instanceof $DoorBlock_) openDoor(neighborDoor, player, level, neighborState, neighborPos, !isOpen);
      }
    } else if (debug) {
      player.tell('This block is not a door.');
    }
  }
});
