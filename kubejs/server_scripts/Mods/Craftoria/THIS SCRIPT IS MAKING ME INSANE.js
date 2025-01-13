// Made by white.phantom for use in Craftoria modpack
// This script is a mess, but it works. It's a spray can that can change the color of blocks and entities
const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

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

ItemEvents.rightClicked('craftoria:infinite_spray_can', (e) => {
  const colors = global.dyeColors;
  const player = e.player;
  let sprayCanColor = player.persistentData.infinite_spray_can_color.toString().replace('"', '') || 'clear';

  // player.tell(`Sorted colors: ${colors.join(', ')}`);
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
            player.tell(`Recoloring to: ${toBeCableId}`);
            e.server.runCommandSilent(`/data merge block ${x} ${y} ${z} {cable:{id:"${toBeCableId}"}}`);
          } else player.tell(`No cable found with ID: ${toBeCableId}`);
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

          if (Item.exists(toBeId)) block.set(toBeId, block.properties);
          else player.tell(`No block found with ID: ${toBeId}`);
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
