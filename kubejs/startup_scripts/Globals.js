// priority: 0

const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

global.dyeColors = $DyeColor.values().map((color) => color.toString().toLowerCase());

/**
 * Enables a few scripts that are only useful for development.
 * Make sure to disable this in production/before pushing to git.
 */
global.devEnv = false;

/**
 * The list of custom MI machines to generate assets for.
 * Possible values for each machine:
 * - id: The machine ID. This is used to reference the machine in the game. REQUIRED.
 * - overlay: The overlay ID. This is used to reference the overlay for the machine. OPTIONAL.
 * - sound: The sound ID. This is used to reference the sound for the machine. OPTIONAL.
 * - soundDuration: The duration of the sound for the machine. OPTIONAL. Requires sound.
 */
global.customMIMachines = [
  {
    id: 'replicator_1',
    overlay: 'replicator',
    sound: 'mi_sound_addon:replicator',
    soundDuration: 20,
  },
];
