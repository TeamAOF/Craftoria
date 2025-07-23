/**
 * @typedef {Object} DataModel
 * @property {Special.EntityType[]} variants
 * @property {string} [nameColor]
 * @property {Object} [display]
 * @property {number} [display.scale]
 * @property {number} [display.y_offset]
 * @property {number} simCost
 * @property {Special.Item} baseDrop
 * @property {($ItemStack_|Special.ItemTag)[]} fabricatorDrops
 * @property {Object} tierData
 * @property {number} [tierData.faulty]
 * @property {number} [tierData.basic]
 * @property {number} [tierData.advanced]
 * @property {number} [tierData.superior]
 * @property {number} [tierData.self_aware]
 * @property {Object} dataPerKill
 * @property {number} [dataPerKill.faulty]
 * @property {number} [dataPerKill.basic]
 * @property {number} [dataPerKill.advanced]
 * @property {number} [dataPerKill.superior]
 * @property {number} [dataPerKill.self_aware]
 */

/**
 * Helper function to generate model data for Hostile Neural Networks
 * @param {Special.EntityType} entityId
 * @param {DataModel} data
 */
function generateModelData(entityId, data) {
  let { namespace, path: entityName } = ID.mc(entityId);

  let outputPath =
    namespace === 'minecraft' ? `hostilenetworks:data_models/${entityName}` : `hostilenetworks:data_models/${namespace}/${entityName}`;

  let drops = [];

  data.fabricatorDrops.forEach(drop => {
    if (drop.includes('#')) {
      Ingredient.of(drop)
        .except('#almostunified:hide')
        .itemIds.forEach(drop => {
          if (drop === 'minecraft:barrier') {
            logWarn(`Skipping ${entityId} drop entry because it is a barrier`);
            return;
          }
          drops.push(Item.of(drop).toJson());
        });
    } else {
      drops.push(Item.of(drop).toJson());
    }
  });

  let modelJson = {
    'neoforge:conditions': [{ type: 'neoforge:mod_loaded', modid: namespace }],
    entity: entityId,
    variants: [],
    name: {
      translate: `entity.${namespace}.${entityName}`,
      color: data.nameColor ?? '#55FF55',
    },
    display: data.display ?? {},
    sim_cost: data.simCost,
    input: Ingredient.of(data.input ?? 'hostilenetworks:prediction_matrix').toJson(),
    base_drop: {
      id: data.baseDrop,
      count: 1,
    },
    trivia: `hostilenetworks.trivia.${entityName}`,
    fabricator_drops: drops,
  };

  if (data.tierData) modelJson.tier_data = data.tierData;
  if (data.dataPerKill) modelJson.data_per_kill = data.dataPerKill;

  return { outputPath: outputPath, modelJson: modelJson };
}

let globalDataModels = {};

ServerEvents.generateData('after_mods', event => {
  /** @type {Record<Special.EntityType, DataModel>} */
  const dataModels = {
    'artifacts:mimic': {
      simCost: 2560,
      baseDrop: 'hostilenetworks:end_prediction',
      fabricatorDrops: ['#artifacts:artifacts'],
      tierData: {
        basic: 30,
        advanced: 330,
        superior: 930,
        self_aware: 2000,
      },
      dataPerKill: {
        faulty: 1,
        basic: 10,
        advanced: 20,
        superior: 30,
      },
    },
    'minecraft:ender_dragon': {
      simCost: 4096,
      baseDrop: 'hostilenetworks:end_prediction',
      fabricatorDrops: [
        '16x minecraft:dragon_breath',
        '16x ends_delight:raw_dragon_meat',
        '16x ends_delight:dragon_tooth',
        '8x irons_spellbooks:dragonskin',
        '8x ends_delight:dragon_leg',
        'minecraft:dragon_head',
        'minecraft:dragon_egg',
      ],
      dataPerKill: {
        faulty: 3,
        basic: 12,
        advanced: 30,
        superior: 45,
      },
      nameColor: '#CC00CC',
      display: {
        y_offset: 0.5,
        scale: 0.25,
      },
    },
    'minecraft:warden': {
      simCost: 2560,
      baseDrop: 'hostilenetworks:end_prediction',
      fabricatorDrops: [
        'deeperdarker:heart_of_the_deep',
        'deeperdarker:warden_carapace',
        'apothic_enchanting:warden_tendril',
        '2x minecraft:echo_shard',
        '4x minecraft:sculk_catalyst',
        '64x minecraft:sculk',
      ],
      nameColor: '#05343F',
      display: {
        y_offset: -0.15,
        scale: 0.65,
      },
    },
    'irons_spellbooks:citadel_keeper': {
      simCost: 2560,
      baseDrop: 'hostilenetworks:nether_prediction',
      fabricatorDrops: [
        '16x irons_spellbooks:cinder_essence',
        'minecraft:netherite_scrap',
      ],
      tierData: {
        basic: 30,
        advanced: 330,
        superior: 930,
        self_aware: 2000,
      },
      dataPerKill: {
        faulty: 1,
        basic: 10,
        advanced: 20,
        superior: 30,
      },
      nameColor: '#ff701e',
      display: {
        y_offset: -0.15,
        scale: 0.65,
      },
    },
    'irons_spellbooks:dead_king': {
      simCost: 4096,
      baseDrop: 'hostilenetworks:overworld_prediction',
      fabricatorDrops: [
        'irons_spellbooks:legendary_ink',
        'irons_spellbooks:blank_rune',
        '16x irons_spellbooks:arcane_essence',
      ],
      tierData: {
        basic: 30,
        advanced: 330,
        superior: 930,
        self_aware: 2000,
      },
      dataPerKill: {
        faulty: 1,
        basic: 12,
        advanced: 30,
        superior: 45,
      },
      nameColor: '#FF5500',
      display: {
        y_offset: -0.15,
        scale: 0.65,
      },
    },
  };

  globalDataModels = dataModels;

  for (let [entityId, modelData] of Object.entries(dataModels)) {
    let { outputPath, modelJson } = generateModelData(entityId, modelData);

    if (modelJson.fabricator_drops.length === 0) {
      // TODO: Remove this once we have a better way to handle this
      // Currently mimic errors as tags load too late for this on first load, but works *after* a reload.
      logWarn(`Skipping ${entityId} because it has no fabricator drops`);
      continue;
    }

    event.json(outputPath, modelJson);
  }
});
