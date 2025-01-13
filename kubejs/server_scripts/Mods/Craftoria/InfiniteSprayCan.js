// Made by white.phantom for use in Craftoria modpack

// This script is a mess, but it works. It's a spray can that can change the color of blocks and entities
const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

let sortColorsByLength = (colors) => {
  return colors.sort((a, b) => {
    a = `${a}`;
    b = `${b}`;

    // Sort by descending length
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;

    // If lengths are equal, compare alphabetically
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

ItemEvents.firstLeftClicked('craftoria:infinite_spray_can', (e) => {
  const player = e.player;
  if (!player.persistentData.infinite_spray_can_index) player.persistentData.infinite_spray_can_index = 16;
  let currendtIndex = parseInt(player.persistentData.infinite_spray_can_index);
  let color = 'clear';

  if (!player.shiftKeyDown) {
    if (currendtIndex > 15) currendtIndex = 0;
    else currendtIndex++;
  } else {
    if (currendtIndex <= 0) currendtIndex = 16;
    else currendtIndex--;
  }
  if (currendtIndex <= 15) {
    color = $DyeColor.byId(currendtIndex).toString().toLowerCase();
  }
  player.persistentData.infinite_spray_can_index = currendtIndex;
  player.persistentData.infinite_spray_can_color = color;
  player.tell(`Current index: ${currendtIndex}`);
  player.tell(`Current color: ${color}`);
});

// Flood fill blocks
function floodFillBlocks(e, startPos, originalId, newId) {
  const maxAttempts = 64;
  let attempts = 0;
  let queue = [startPos];
  let visited = new Set();

  while (queue.length > 0 && attempts <= maxAttempts) {
    let pos = queue.shift();
    let {x, y, z} = pos;
    let key = `${x},${y},${z}`;
    if (visited.has(key)) continue;
    visited.add(key);

    // Check block
    let candidate = e.level.getBlock(x, y, z);
    // console.info(`Checking block at ${x}, ${y}, ${z}, ${candidate.id}`);

    // console.info(`candidate.id: '${candidate.id}' (type: ${typeof candidate.id})`);
    // console.info(`originalId: '${originalId}' (type: ${typeof originalId})`);

    // console.info(`candidate.id.toString(): '${candidate.id.toString()}'`);
    // console.info(`originalId.toString(): '${originalId.toString()}'`);
    // console.info(`Exact match? ${candidate.id.toString() === originalId.toString()}`);
    if (`${candidate.id.toString()}` === `${originalId.toString()}`) {
      // Recolor it
      if (Item.exists(newId)) e.level.setBlockAndUpdate(candidate.pos, newId);
      else e.player.tell(`No block found with ID: ${newId}`);
      // e.player.tell(`Replaced block at ${x}, ${y}, ${z}, ${newId}`);

      attempts++;
      if (attempts === maxAttempts) {
        e.player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }

      // Add neighbors (6 directions) to queue
      queue.push({x: x + 1, y: y, z: z});
      queue.push({x: x - 1, y: y, z: z});
      queue.push({x: x, y: y + 1, z: z});
      queue.push({x: x, y: y - 1, z: z});
      queue.push({x: x, y: y, z: z + 1});
      queue.push({x: x, y: y, z: z - 1});
    }
  }
}

// Flood fill cables (AE2)
function floodFillCables(e, startPos, originalCableId, newCableId) {
  const maxAttempts = 64;
  let attempts = 0;
  let queue = [startPos];
  let visited = new Set();

  while (queue.length > 0 && attempts < maxAttempts) {
    let pos = queue.shift();
    let {x, y, z} = pos;
    let key = `${x},${y},${z}`;
    if (visited.has(key)) continue;
    visited.add(key);

    let block = e.level.getBlock(x, y, z);
    // If it's not a cable bus, skip
    if (block.id.toString() !== 'ae2:cable_bus') continue;

    // Get the cable ID for candidate
    let candidateCableId = block.entityData['cable']['id'].toString().replace('"', '');

    if (candidateCableId === originalCableId) {
      // Recolor it
      if (Item.exists(newCableId)) e.server.runCommandSilent(`/data merge block ${x} ${y} ${z} {cable:{id:"${newCableId}"}}`);
      else console.error(`No cable found with ID: ${newCableId}`);
      // e.player.tell(`Replaced cable at ${x},${y},${z} with ${newCableId}`);
      attempts++;
      if (attempts === maxAttempts) {
        e.player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }

      // Add neighbors (6 directions) to the queue
      queue.push({x: x + 1, y: y, z: z});
      queue.push({x: x - 1, y: y, z: z});
      queue.push({x: x, y: y + 1, z: z});
      queue.push({x: x, y: y - 1, z: z});
      queue.push({x: x, y: y, z: z + 1});
      queue.push({x: x, y: y, z: z - 1});
    }
  }
}

ItemEvents.rightClicked('craftoria:infinite_spray_can', (e) => {
  const colors = sortColorsByLength(global.dyeColors);
  const player = e.player;
  let sprayCanColor = player.persistentData.infinite_spray_can_color.toString().replace('"', '') || 'clear';
  switch (e.target.type) {
    case 'BLOCK':
      const block = e.target.block;
      const blockID = block.id;
      const blockPath = blockID.path;
      switch (e.target.block.id) {
        case 'ae2:cable_bus':
          const cableId = block.entityData['cable']['id'].toString().replace('"', '');
          const {x, y, z} = block.pos;

          player.tell(`Cable ID: ${cableId}`);

          // If it's 'fluix', handle it differently
          if (cableId.includes('fluix') && sprayCanColor !== 'clear') {
            if (player.shiftKeyDown) {
              floodFillCables(e, block.pos, cableId, cableId.replace('fluix', sprayCanColor));
              break;
            }
            player.tell(`Original Cable: ${cableId}`);
            player.tell(`Detected Color: None`);
            let newCableId = cableId.replace('fluix', sprayCanColor);
            player.tell(`New Cable ID: ${newCableId}`);

            if (Item.exists(`${newCableId}`)) e.server.runCommandSilent(`/data merge block ${x} ${y} ${z} {cable:{id:"${newCableId}"}}`);
            else player.tell(`No cable found with ID: ${newCableId}`);

            break;
          } else if (cableId.includes('fluix') && sprayCanColor === 'clear') {
            player.tell('Fluix cable is already clear');
            break;
          }

          let foundCableColor = null;
          let updatedCableId = cableId;

          colors.forEach((color) => {
            if (updatedCableId.includes(color) && !foundCableColor) {
              foundCableColor = color;
              if (sprayCanColor !== 'clear') updatedCableId = updatedCableId.replace(`:${color}`, `:${sprayCanColor}`);
              else updatedCableId = updatedCableId.replace(`:${color}`, ':fluix');
            }
          });

          const toBeCableId = updatedCableId;
          player.tell(`Original Cable: ${cableId}`);
          player.tell(`Detected Color: ${foundCableColor || 'None'}`);
          player.tell(`New Cable ID: ${toBeCableId}`);
          if (cableId === toBeCableId) break;

          if (Item.exists(toBeCableId)) {
            if (player.shiftKeyDown) {
              floodFillCables(e, block.pos, cableId, toBeCableId);
              break;
            }
            player.tell(`Recoloring to: ${toBeCableId}`);
            e.server.runCommandSilent(`/data merge block ${x} ${y} ${z} {cable:{id:"${toBeCableId}"}}`);
          } else player.tell(`No cable found with ID: ${toBeCableId}`);
          break;

        case 'modern_industrialization:pipe':
          break;

        default:
          if (sprayCanColor === 'clear') break; // If the spray can color is clear, just skip the block, will add a way to clear blocks later(if a clear variant exists)

          let foundColor = null;
          let updatedPath = blockPath;

          colors.forEach((color) => {
            if (updatedPath.includes(color) && !foundColor) {
              foundColor = color;
              updatedPath = updatedPath.replace(color, sprayCanColor);
            }
          });

          const toBeId = `${blockID.namespace}:${updatedPath}`;
          if (blockID === toBeId) break;

          player.tell(`Original Block: ${blockID}`);
          player.tell(`Detected Color: ${foundColor || 'None'}`);
          player.tell(`New Block ID: ${toBeId}`);

          if (Item.exists(toBeId)) {
            if (player.shiftKeyDown) {
              floodFillBlocks(e, block.pos, blockID, toBeId);
              break;
            }
            block.set(toBeId, block.properties);
          } else player.tell(`No block found with ID: ${toBeId}`);
          break;
      }
      break;
    case 'ENTITY':
      const entity = e.target.entity;
      switch (entity.type) {
        case 'minecraft:sheep':
          let sprayCanIndex = parseInt(player.persistentData.infinite_spray_can_index);
          if (sprayCanIndex !== 16) entity.mergeNbt({Color: sprayCanIndex});
          player.tell(`Spray Can Index: ${sprayCanIndex}`);
          player.tell(`Sheep Color: ${$DyeColor.byId(parseInt(entity.nbt['Color'])).toString().toLowerCase()}`);
          break;
        default:
          break;
      }
      break;
    default:
      player.tell('MISS');
      break;
  }
});

ServerEvents.recipes((e) => {
  e.shaped('craftoria:infinite_spray_can', [' T ', 'SPS', 'SDS'], {
    T: 'pneumaticcraft:pressure_tube',
    S: 'modern_industrialization:steel_curved_plate',
    P: 'mekanism:painting_machine',
    D: 'industrialforegoing:dye_mixer',
  });
});
