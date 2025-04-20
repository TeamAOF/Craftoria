// priority: 2147483647

/**
 * Enables a few scripts that are only useful for development.
 * Make sure to disable this in production/before pushing to git.
 */
global.devEnv = false;

global.modList = Platform.getMods().keySet();

/**
 * The list of custom MI machines to generate assets/data for. (Models, sounds, tags, etc.)
 * Possible values for each machine:
 * - id: The machine ID. This is used to reference the machine in the game. REQUIRED.
 * - mod: The mod ID. This is used to reference the mod for the machine. OPTIONAL. Default: 'modern_industrialization'
 * - casing: The casing tier for the machine. This is used to determine the casing texture for the machine. OPTIONAL. Default: 'lv'
 * - overlay: The overlay ID. This is used to reference the overlay for the machine. OPTIONAL.
 * - hasSides: Whether the machine has side textures. OPTIONAL. Default: false
 * - sound: The sound ID. This is used to reference the sound for the machine. OPTIONAL.
 * - soundDuration: The duration(in ticks) of the sound for the machine. OPTIONAL. Requires sound.
 * - lang: The language keys for the machine. This is used to create the language entries for the machine. OPTIONAL.
 */
global.customMIMachines = [
  {
    id: 'replicator_1',
    overlay: 'replicator',
    hasSides: true,
    sound: 'mi_sound_addon:replicator',
    soundDuration: 20,
    lang: {
      block: 'Replicator Mk I',
    },
  },
  {
    id: 'large_plasma_turbine',
    casing: 'plasma_handling_iridium_machine_casing',
    default_overlays: {
      front: 'modern_industrialization:block/machines/steam_turbine/overlay_front_iridium',
      front_active: 'modern_industrialization:block/machines/steam_turbine/overlay_front_active_iridium',
    },
  },
  {
    id: 'budding_incubator',
    casing: 'sky_stone_brick_casing',
    lang: {
      block: 'Budding Incubator',
      rei_categories: 'Budding Incubator',
    },
  },
  // {
  //   id: 'particle_accelerator',
  //   mod: 'mi_tweaks',
  //   casing: 'plasma_handling_iridium_machine_casing',
  // },
];

Platform.setModName('craftoria', 'Craftoria');
