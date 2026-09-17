// priority: 999
/**
 * This file defines the global variables used in the unification scripts.
 */

/**
 * Add the mods you want to prioritize here. Please make sure to mirror this with Almost Unified mod priorities
 * The first mod in the list will be the one that the item will be replaced with.
 */
let modPriority = [
  'minecraft',
  'kubejs',
  'modern_industrialization',
  'justdirethings',
  'occultism',
  'mekmm',
  'mekanism',
  'farmersdelight',
  'create',
  'createaddition',
  'irons_jewelry',
  'pneumaticcraft',
  'rusticdelight',
  'dumplings_delight',
  'sushigocrafting',
  'moremekanismprocessing',
  'refurbished_furniture',
  'createdeco',
  'createcasing',
];

// Add the materials you want to unify here.
let metals = [
  // Non-alloy metals
  'iron',
  'gold',
  'copper',
  'aluminum',
  'tin',
  'lead',
  'silver',
  'uranium',
  'nickel',
  'platinum',
  'osmium',
  'tungsten',
  'titanium',
  'iridium',
  'zinc',

  // Alloy metals
  'bronze',
  'steel',
  'invar',
  'electrum',
  'cupronickel',
];

let gems = ['diamond', 'emerald', 'lapis', 'quartz', 'coal', 'ruby'];

let misc = ['sulfur', 'salt', 'obsidian', 'netherite'];

let materials = {
  metals: ['dusts', 'nuggets', 'ingots', 'storage_blocks', 'raw_materials', 'ores'],
  gems: ['gems', 'dusts', 'storage_blocks', 'ores'],
  misc: ['dusts'],
};

// Do not touch this, it will be populated automatically.
let unified = [];
