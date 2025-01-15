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

ItemEvents.firstLeftClicked('craftoria:infinite_spray_can', (event) => {
  /** @type {{player: $ServerPlayer_, target: $Target_}} */
  const { player, target } = event;
  if (target.type !== 'miss') return;
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
function floodFillBlocks(event, startPos, originalId, newId) {
  /** @type {{player: $ServerPlayer_, level: $ServerLevel_}} */
  const { player, level } = event;
  const maxAttempts = 1024;
  let attempts = 0;
  let queue = [startPos];
  let visited = new Set();

  while (queue.length > 0 && attempts < maxAttempts) {
    let pos = queue.shift();
    let { x, y, z } = pos;
    let key = `${x},${y},${z}`;
    if (visited.has(key)) continue;
    visited.add(key);

    // Check block
    let candidate = level.getBlock(x, y, z);
    // console.info(`Checking block at ${x}, ${y}, ${z}, ${candidate.id}`);

    // console.info(`candidate.id: '${candidate.id}' (type: ${typeof candidate.id})`);
    // console.info(`originalId: '${originalId}' (type: ${typeof originalId})`);

    // console.info(`candidate.id.toString(): '${candidate.id.toString()}'`);
    // console.info(`originalId.toString(): '${originalId.toString()}'`);
    // console.info(`Exact match? ${candidate.id.toString() === originalId.toString()}`);
    if (`${candidate.id.toString()}` === `${originalId.toString()}`) {
      // Recolor it
      if (Item.exists(newId)) candidate.set(newId, candidate.properties);
      else player.tell(`No block found with ID: ${newId}`);
      // player.tell(`Replaced block at ${x}, ${y}, ${z}, ${newId}`);

      attempts++;
      if (attempts >= maxAttempts) {
        player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }

      // Add neighbors (6 directions) to queue
      queue.push({ x: x + 1, y: y, z: z });
      queue.push({ x: x - 1, y: y, z: z });
      queue.push({ x: x, y: y + 1, z: z });
      queue.push({ x: x, y: y - 1, z: z });
      queue.push({ x: x, y: y, z: z + 1 });
      queue.push({ x: x, y: y, z: z - 1 });
    }
  }
}

// Flood fill cables (AE2)
function floodFillCables(event, startPos, originalCableId, color) {
  /** @type {{player: $ServerPlayer_, level: $ServerLevel_}} */
  const { player, level } = event;
  const maxAttempts = 64;
  let attempts = 0;
  let queue = [startPos];
  let visited = new Set();

  while (queue.length > 0 && attempts < maxAttempts) {
    let pos = queue.shift();
    let { x, y, z } = pos;
    let key = `${x},${y},${z}`;
    if (visited.has(key)) continue;
    visited.add(key);

    let block = level.getBlock(x, y, z);
    // If it's not a cable bus, skip
    if (block.id.toString() !== 'ae2:cable_bus') continue;
    // Get the cable ID for candidate
    if (!block.entityData.cable) continue;
    let candidateCableId = block.entityData.cable.id.toString().replace('"', '');

    if (candidateCableId === originalCableId) {
      /** @type $CableBusBlockEntity_ */
      block = block.entity;
      // Recolor it
      block.recolourBlock('up', color, player);
      // player.tell(`Replaced cable at ${x},${y},${z} with ${newCableId}`);
      attempts++;
      if (attempts >= maxAttempts) {
        player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }

      // Add neighbors (6 directions) to the queue
      queue.push({ x: x + 1, y: y, z: z });
      queue.push({ x: x - 1, y: y, z: z });
      queue.push({ x: x, y: y + 1, z: z });
      queue.push({ x: x, y: y - 1, z: z });
      queue.push({ x: x, y: y, z: z + 1 });
      queue.push({ x: x, y: y, z: z - 1 });
    }
  }
}

ItemEvents.rightClicked('craftoria:infinite_spray_can', (event) => {
  const { player, target } = event;
  const colors = sortColorsByLength(global.dyeColors);
  let sprayCanColor = player.persistentData.infinite_spray_can_color.toString().replace('"', '') || 'clear';
  switch (target.type) {
    case 'BLOCK':
      const block = event.target.block;
      const blockID = block.id;
      const blockPath = blockID.path;
      switch (target.block.id) {
        case 'ae2:cable_bus':
          if (!block.entityData.cable) break;
          const cableId = block.entityData.cable.id.toString().replace('"', '');
          /** @type $CableBusBlockEntity_ */
          const cable = block.entity;
          if (sprayCanColor === 'clear') sprayCanColor = 'fluix';

          player.tell(`Cable ID: ${cableId}`);

          // If it's 'fluix', handle it differently
          if (cableId.includes('fluix') && sprayCanColor !== 'fluix') {
            if (player.shiftKeyDown) {
              floodFillCables(event, block.pos, cableId, sprayCanColor);
              break;
            }
            player.tell(`Detected Color: None`);
            let newCableId = cableId.replace('fluix', sprayCanColor);
            player.tell(`New Cable ID: ${newCableId}`);

            cable.recolourBlock('up', sprayCanColor, player);

            break;
          } else if (cableId.includes('fluix') && sprayCanColor === 'fluix') {
            player.tell('Fluix cable is already clear');
            break;
          }

          let foundCableColor = null;
          let updatedCableId = cableId;

          colors.forEach((color) => {
            if (updatedCableId.includes(color) && !foundCableColor) {
              foundCableColor = color;
              if (sprayCanColor !== 'fluix') updatedCableId = updatedCableId.replace(`:${color}`, `:${sprayCanColor}`);
              else updatedCableId = updatedCableId.replace(`:${color}`, ':fluix');
            }
          });

          const toBeCableId = updatedCableId;
          player.tell(`Detected Color: ${foundCableColor || 'None'}`);
          player.tell(`New Cable ID: ${toBeCableId}`);
          if (cableId === toBeCableId) break;

          if (Item.exists(toBeCableId)) {
            if (player.shiftKeyDown) {
              floodFillCables(event, block.pos, cableId, sprayCanColor);
              break;
            }
            player.tell(`Recoloring to: ${toBeCableId}`);
            cable.recolourBlock('up', sprayCanColor, player);
          } else player.tell(`No cable found with ID: ${toBeCableId}`);
          break;

        case 'modern_industrialization:pipe':
          break; // Make sure to skip MI pipes, as the pipes WILL break if I try to mess with them

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
              floodFillBlocks(event, block.pos, blockID, toBeId);
              break;
            }
            block.set(toBeId, block.properties);
          } else player.tell(`No block found with ID: ${toBeId}`);
          break;
      }
      break;
    case 'ENTITY':
      switch (target.entity.type) {
        case 'minecraft:sheep':
          /** @type {{entity: $Sheep_}} */
          const { entity } = target;
          if (global.dyeColors.includes(sprayCanColor)) entity.setColor(sprayCanColor);
          player.tell(`Spray Can Color: ${sprayCanColor}`);
          player.tell(`Sheep Color: ${entity.color}`);
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
