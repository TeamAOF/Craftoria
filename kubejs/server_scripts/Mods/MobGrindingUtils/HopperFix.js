const MOB_MASHER = 'mob_grinding_utils:saw';
const HOPPER = 'minecraft:hopper';
const commonSides = ['north', 'south', 'east', 'west'];

function preventPlacement(type, extraDir, condition) {
  const directions = extraDir ? commonSides.concat(extraDir) : commonSides;
  BlockEvents.placed(type, event => {
    const { block, player } = event;
    if (directions.some(dir => condition(block[dir].id))) {
      player.tell(`You can't place that here.`);
      event.cancel();
    }
  });
}

// Hoppers can't be placed next to a mob masher (excluding below)
preventPlacement(HOPPER, 'down', id => id === MOB_MASHER);
// Mob mashers can't be placed next to a hopper (excluding above)
preventPlacement(MOB_MASHER, 'up', id => id === HOPPER);
