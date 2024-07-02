//Priority: 999

/**
 * Define the debug variable here.
 * Set to 0 to disable debug logging.
 * Set to 1 for logging which materials got unified. and which ones were not found.
 * Set to 2 for logging which materials got replaced and with what. and which were skipped.
 * Set to 3 for logging all recipe types.
 */
let debug = 0;

/**
 * This file defines the global variables used in the unification scripts.
 */


/**
* Add the mods you want to prioritize here.
* The first mod in the list will be the one that the item will be replaced with.
*/
let modPriority = [
  "minecraft",
  "modern_industrialization",
  "mekanism",
];

// Add the materials you want to unify here.
let metals = {
  "iron": ["dust"],
  "gold": ["dust"],
  "copper": ["dust", "nugget"],
  "aluminum": ["dust", "nugget", "ingot", "block"],
  "tin": ["dust", "nugget", "ingot", "block", "raw"],
  "lead": ["dust", "nugget", "ingot", "block", "raw"],
  "silver": ["dust", "nugget", "ingot", "block", "raw"],
  "uranium": ["dust", "nugget", "ingot", "block", "raw"],
  "bronze": ["dust", "nugget", "ingot", "block"],
  "steel": ["dust", "nugget", "ingot", "block"],
  "nickel": ["dust", "nugget", "ingot", "block"],
};

let gems = {
  "diamond": ["dust"],
  "emerald": ["dust"],
  "lapis": ["dust"],
  "quartz": ["dust"],
  "coal": ["dust"],
};

// Do not touch this, it will be populated automatically.
let unified = [];