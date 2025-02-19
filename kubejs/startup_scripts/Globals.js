// priority: 0

const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor');

global.dyeColors = $DyeColor.values().map((color) => color.toString().toLowerCase());

/**
 * Enables a few scripts that are only useful for development.
 * Make sure to disable this in production/before pushing to git.
 */
global.devEnv = false;

/**
 * The list of custom MI machines to generate assets/data for. (Models, sounds, tags, etc.)
 * Possible values for each machine:
 * - id: The machine ID. This is used to reference the machine in the game. REQUIRED.
 * - casing: The casing tier for the machine. This is used to determine the casing texture for the machine. OPTIONAL. Default: 'lv'
 * - overlay: The overlay ID. This is used to reference the overlay for the machine. OPTIONAL.
 * - hasSides: Whether the machine has side textures. OPTIONAL. Default: false
 * - sound: The sound ID. This is used to reference the sound for the machine. OPTIONAL.
 * - soundDuration: The duration(in ticks) of the sound for the machine. OPTIONAL. Requires sound.
 */
global.customMIMachines = [
  {
    id: 'replicator_1',
    overlay: 'replicator',
    hasSides: true,
    sound: 'mi_sound_addon:replicator',
    soundDuration: 20,
  },
];
