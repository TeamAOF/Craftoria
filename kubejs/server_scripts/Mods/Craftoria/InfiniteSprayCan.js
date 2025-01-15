// Made by white.phantom for use in Craftoria modpack
const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

const debugLogs = global.debugLogs || false;

// Sort colors by descending length
let sortColorsByLength = (colors) => {
  return colors.sort((a, b) => {
    a = `${a}`;
    b = `${b}`;
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

// =========================================================
// Handle left-click color cycling
// =========================================================
ItemEvents.firstLeftClicked('craftoria:infinite_spray_can', (event) => {
  const { player, target } = event;
  if (target.type !== 'miss') return;

  if (!player.persistentData.infinite_spray_can_index) player.persistentData.infinite_spray_can_index = 16;

  let currentIndex = parseInt(player.persistentData.infinite_spray_can_index);
  let color = 'clear';

  if (!player.shiftKeyDown) currentIndex = currentIndex > 15 ? 0 : currentIndex + 1;
  else currentIndex = currentIndex <= 0 ? 16 : currentIndex - 1;

  if (currentIndex <= 15) color = $DyeColor.byId(currentIndex).toString().toLowerCase();

  player.persistentData.infinite_spray_can_index = currentIndex;
  player.persistentData.infinite_spray_can_color = color;
  player.tell(`Current color: ${color}`);
});

/**
 * Flood Fill for Normal Blocks
 * @param {$ItemClickedKubeEvent_} event
 * @param {$BlockPos_} startPos
 * @param {$Item_} originalId
 * @param {$Item_} newId
 */
function floodFillBlocks(event, startPos, originalId, newId) {
  const { player, level, target } = event;
  const origBlock = target.block;
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

    let candidate = level.getBlock(x, y, z);
    if (debugLogs) player.tell(`Checking block at ${x}, ${y}, ${z}: ${candidate.id}`);

    if (candidate.id.equals(originalId) && candidate.properties.equals(origBlock.properties)) {
      if (Item.exists(newId)) candidate.set(newId, candidate.properties);
      else player.tell(`No block found with ID: ${newId}`);

      attempts++;
      if (attempts >= maxAttempts) {
        player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }
      // Add neighbors
      queue.push({ x: x + 1, y: y, z: z });
      queue.push({ x: x - 1, y: y, z: z });
      queue.push({ x: x, y: y + 1, z: z });
      queue.push({ x: x, y: y - 1, z: z });
      queue.push({ x: x, y: y, z: z + 1 });
      queue.push({ x: x, y: y, z: z - 1 });
    }
  }
}

/**
 * Flood Fill for AE2 Cables
 * @param {$ItemClickedKubeEvent_} event
 * @param {$BlockPos_} startPos
 * @param {$Item_} originalCableId
 * @param {$AEColor_} color
 * @param {import("net.minecraft.core.Direction").$Direction$$Type} direction
 */
function floodFillCables(event, startPos, originalCableId, color, direction) {
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
    if (block.id.toString() !== 'ae2:cable_bus') continue;
    if (!block.entityData.cable) continue;

    let candidateCableId = block.entityData.cable.id.toString().replace('"', '');
    if (candidateCableId === originalCableId) {
      /** @type $CableBusBlockEntity_ */
      let cable = block.entity;
      cable.recolourBlock(direction, color, player);
      attempts++;
      if (attempts >= maxAttempts) {
        player.tell(`Max flood-fill limit (${maxAttempts}) reached, stopping.`);
        break;
      }
      // Add neighbors
      queue.push({ x: x + 1, y: y, z: z });
      queue.push({ x: x - 1, y: y, z: z });
      queue.push({ x: x, y: y + 1, z: z });
      queue.push({ x: x, y: y - 1, z: z });
      queue.push({ x: x, y: y, z: z + 1 });
      queue.push({ x: x, y: y, z: z - 1 });
    }
  }
}

// =========================================================
// Right-Click Handler
// =========================================================
ItemEvents.firstRightClicked('craftoria:infinite_spray_can', (event) => {
  const { player, target } = event;
  const colors = sortColorsByLength(global.dyeColors);
  if (!player.persistentData.infinite_spray_can_color) player.persistentData.infinite_spray_can_color = 'clear';
  let sprayCanColor = player.persistentData.infinite_spray_can_color.toString().replace('"', '') || 'clear';

  switch (target.type) {
    case 'BLOCK': {
      let block = target.block;
      let blockID = block.id;
      let blockPath = blockID.path;

      switch (block.id) {
        case 'ae2:cable_bus': {
          if (!block.entityData.cable) break;
          let cableId = block.entityData.cable.id.toString().replace('"', '');
          /** @type $CableBusBlockEntity_ */
          let cable = block.entity;
          let direction = target.facing;

          if (sprayCanColor === 'clear') sprayCanColor = 'fluix';
          if (player.shiftKeyDown) floodFillCables(event, block.pos, cableId, sprayCanColor, direction);
          else cable.recolourBlock(direction, sprayCanColor, player);
          break;
        }

        case 'modern_industrialization:pipe':
          // Skip MI pipes to avoid breaking them
          break;

        default: {
          if (sprayCanColor === 'clear') break;
          let foundColor = null;
          let updatedPath = blockPath;

          colors.forEach((color) => {
            if (updatedPath.includes(color) && !foundColor) {
              foundColor = color;
              updatedPath = updatedPath.replace(color, sprayCanColor);
            }
          });

          let toBeId = `${blockID.namespace}:${updatedPath}`;
          if (blockID.toString() === toBeId) break;

          if (Item.exists(toBeId)) {
            if (player.shiftKeyDown) {
              floodFillBlocks(event, block.pos, blockID, toBeId);
              break;
            }
            block.set(toBeId, block.properties);
          } else player.tell(`No block found with ID: ${toBeId}`);
          break;
        }
      }
      break;
    }

    case 'ENTITY': {
      let { entity } = target;
      switch (entity.type) {
        case 'minecraft:sheep': {
          /** @type $Sheep_ */
          const sheep = entity;
          if (global.dyeColors.includes(sprayCanColor)) {
            sheep.setColor(sprayCanColor);
            if (debugLogs) player.tell(`Sheep recolored: ${sprayCanColor}`);
          }
          break;
        }
        default:
          break;
      }
      break;
    }
    default:
      break;
  }
});

// =========================================================
// Recipe for the Spray Can
// =========================================================
ServerEvents.recipes((e) => {
  e.shaped('craftoria:infinite_spray_can', [' T ', 'SPS', 'SDS'], {
    T: 'pneumaticcraft:pressure_tube',
    S: 'modern_industrialization:steel_curved_plate',
    P: 'mekanism:painting_machine',
    D: 'industrialforegoing:dye_mixer',
  });
});
