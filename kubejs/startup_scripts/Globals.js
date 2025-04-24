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
  budding_incubator: {
    name: 'Budding Incubator',
    casing: 'sky_stone_brick_casing',
  },
  // 'particle_accelerator': {
  //   name: 'Particle Accelerator',
  //   mod: 'mi_tweaks',
  //   casing: 'plasma_handling_iridium_machine_casing',
  // },
  batch_budding_incubator: {
    name: 'Budding Incubator',
    casing: 'sky_stone_brick_casing',
    mod: 'mi_tweaks',
    default_overlays: {
      front: 'modern_industrialization:block/machines/budding_incubator/overlay_front',
      front_active: 'modern_industrialization:block/machines/budding_incubator/overlay_front_active',
    },
  },
};

global.customMIMachines = customMIMachines;

const HarvestLevel = {
  WOOD: 'neoforge:needs_wood_tool',
  STONE: 'minecraft:needs_stone_tool',
  IRON: 'minecraft:needs_iron_tool',
  DIAMOND: 'minecraft:needs_diamond_tool',
  NETHERITE: 'neoforge:needs_netherite_tool',
};

global.HarvestLevel = HarvestLevel;

global.customOres = {
  akite: {
    name: 'Akite',
    worldGen: {
      stone: false,
      deepslate: true,
      nether: false,
      end: false,
      harvestLevel: HarvestLevel.NETHERITE,
    },
    registry: {
      nugget: false,
      block: true,
    },
  },
};

Platform.setModName('craftoria', 'Craftoria');
