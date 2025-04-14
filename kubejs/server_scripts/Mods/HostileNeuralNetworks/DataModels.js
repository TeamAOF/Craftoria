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
  let [namespace, entityName] = entityId.split(':');

  let outputPath =
    namespace === 'minecraft' ? `hostilenetworks:data_models/${entityName}` : `hostilenetworks:data_models/${namespace}/${entityName}`;

  let drops = [];

  data.fabricatorDrops.forEach(drop => {
    if (drop.includes('#')) {
      Ingredient.of(drop)
        .except('#almostunified:hide')
        .itemIds.forEach(drop => {
          const [count] = drop.split('x ');
          drops.push({ id: drop, count: parseInt(count) || 1 });
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
    input: {
      item: 'hostilenetworks:prediction_matrix',
    },
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
  };

  for (let [entityId, modelData] of Object.entries(dataModels)) {
    let { outputPath, modelJson } = generateModelData(entityId, modelData);
    event.json(outputPath, modelJson);
  }
});
