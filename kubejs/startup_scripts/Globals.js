// priority: 2147483647

/**
 * Enables a few scripts that are only useful for development.
 * Make sure to disable this in production/before pushing to git.
 */
global.devEnv = false;

global.modList = Platform.getMods().keySet();

/**
 * @typedef {Object} MIOverlay
 * @property {string} [fluid_auto] - The fluid auto overlay ID.
 * @property {string} [item_auto] - The item auto overlay ID.
 * @property {string} [output] - The output overlay ID.
 * @property {string} [front] - The front overlay ID.
 * @property {string} [front_active] - The front active overlay ID.
 * @property {string} [side] - The side overlay ID.
 * @property {string} [side_active] - The side active overlay ID.
 */

/**
 * @typedef {Object} CustomMIMachine
 * @property {string} name - The machine name.
 * @property {string} [mod] - The mod ID. Default: 'modern_industrialization'
 * @property {string} [casing] - The casing tier for the machine. Default: 'lv'
 * @property {string} [overlay] - The overlay ID.
 * @property {MIOverlay} [default_overlays] - The default overlays for the machine. This is used to determine the overlay texture for the machine.
 * @property {boolean} [hasSides] - Whether the machine has side textures. Default: false
 * @property {string} [sound] - The sound ID.
 * @property {number} [soundDuration] - The duration(in ticks) of the sound for the machine.
 */

/**
 * Record of custom machines for Modern Industrialization.
 * @type {Record<string, CustomMIMachine>}
 */
const customMIMachines = {
  replicator_1: {
    name: 'Replicator Mk I',
    overlay: 'replicator',
    hasSides: true,
    sound: 'mi_sound_addon:replicator',
    soundDuration: 20,
  },
  large_plasma_turbine: {
    name: 'Large Plasma Turbine',
    casing: 'plasma_handling_iridium_machine_casing',
    default_overlays: {
      front: 'modern_industrialization:block/machines/steam_turbine/overlay_front_iridium',
      front_active: 'modern_industrialization:block/machines/steam_turbine/overlay_front_active_iridium',
    },
  },
  // 'particle_accelerator': {
  //   name: 'Particle Accelerator',
  //   mod: 'mi_tweaks',
  //   casing: 'plasma_handling_iridium_machine_casing',
  // },
  budding_incubator: {
    name: 'Budding Incubator [DUMMY]',
    casing: 'sky_stone_brick_casing',
  },
  batch_budding_incubator: {
    name: 'Budding Incubator',
    casing: 'sky_stone_brick_casing',
    mod: 'mi_tweaks',
    default_overlays: {
      front: 'modern_industrialization:block/machines/budding_incubator/overlay_front',
      front_active: 'modern_industrialization:block/machines/budding_incubator/overlay_front_active',
    },
  },
  ooze_lab: {
    name: 'Ooze Lab [DUMMY]',
    casing: 'factory_grate',
  },
  // batch_ooze_lab: {
  //   name: 'Ooze Lab',
  //   casing: 'factory_grate',
  //   mod: 'mi_tweaks',
  //   default_overlays: {
  //     front: 'modern_industrialization:block/machines/ooze_lab/overlay_front',
  //     front_active: 'modern_industrialization:block/machines/ooze_lab/overlay_front_active',
  //   },
  // },
};

/**
 * @typedef {Object} CustomMIHatches
 * @property {string} name - The part name.
 * @property {string} casing - The casing type.
 * @property {Object} types - The types of the part.
 * @property {string} [types.energy] - Cable tier ID.
 * @property {number} [types.fluid] - Max fluid capacity for the hatch, in buckets.
 * @property {Object} [types.item] - Item hatch properties.
 * @property {number} types.item.rows - Number of rows for the hatch.
 * @property {number} types.item.columns - Number of columns for the hatch.
 * @property {number} types.item.posX - The X position of the first slot.
 * @property {number} types.item.posY - The Y position of the first slot.
 */

/** @type {Record<string, CustomMIHatches} */
const customMIHatches = {
  quantum: {
    name: 'Quantum',
    casing: 'superconductor',
    types: {
      fluid: 2147483647,
      item: {
        rows: 3,
        columns: 9,
        posX: 8,
        posY: 18,
      },
    },
  },
};

/** @type {Record<string, Special.Block} */
const customMICasings = {
  sky_stone_brick_casing: 'ae2:sky_stone_brick',
  tiled_blackstone_casing: 'chipped:tiled_blackstone',
  factory_grate: 'factory_blocks:grate',
};

global.customMIMachines = customMIMachines;
global.customMIHatches = customMIHatches;
global.customMICasings = customMICasings;

Platform.setModName('craftoria', 'Craftoria');
