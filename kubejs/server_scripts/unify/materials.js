// Priority: 0
let debug = false;

/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod that has the item.
 *
 * I will be overhauling this script later to define types on a per material basis.
 *
 * For now, @white.phantom signing off.
 */


/**
* Add the mods you want to prioritize here.
* The first mod in the list will be the one that the item will be replaced with.
*/
let modPriority = [
  'minecraft',
  'modern_industrialization',
  'mekanism',
  'mffs'
];

/**
* Add the materials you want to unify here.
*/
let materials = [
  'iron',
  'gold',
  'copper',
  'bronze',
  'steel',
  'aluminum',
  'tin',
  'lead',
  'silver',
  'diamond',
  'emerald',
  'lapis',
  'quartz',
  'uranium'
];

/**
* Add the types you want to unify here.
*/
let types = [
  'ingot',
  'nugget',
  'dust',

  /* Don't use for now, it's not working properly, they use a different naming convention than the rest.
  'block',
  'raw',
  */
];

let idRemovals = [
  // Have to remove these by ID because replacing by output doesn't work without KubeJS Mekanism addon. or at least I couldn't get it to work.
  'mekanism:processing/bronze/ingot/from_infusing',
  'mekanism:processing/bronze/dust/from_infusing',
  'mekanism:processing/steel/enriched_iron_to_dust',
  'mekanism:processing/lapis_lazuli/to_dust',

  //Other removals
  'mffs:steel_compound',
];

// Do not touch this, it will be populated automatically.
let unified = [];

//Do not use '#forge' tag anymore, it's been replaced with '#c'
ServerEvents.recipes(e => {
  idRemovals.forEach(id => {
    e.remove({ id: id });
  });

  let ifExists = (mod, material, type, reverse) => {
    let item = `${mod}:${material}_${type}`;
    if (reverse)
      item = `${mod}:${type}_${material}`;

    return Item.exists(item);
  };

  let logNotFound = (mod, material, type) => {
    if (debug)
      console.info(`Could not find ${mod}:${material}_${type} or ${mod}:${type}_${material}, skipping...`);
  };

  let mekInfuse = (chemical, input, output, chemCount, iCount, oCount) => {
    let recipe = {
      type: 'mekanism:metallurgic_infusing',
      chemical_input: {},
      item_input: {},
      output: {}
    };
    recipe.chemical_input.tag = chemical;

    if (input.includes('c:'))
      recipe.item_input.tag = input;
    else
      recipe.item_input.item = input;
    recipe.output.id = output;

    recipe.chemical_input.amount = chemCount || 10;
    recipe.item_input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/metallurgic_infusing/${input.replace('c:', '').replace(':', '_')}`);
  };

  let mekCrush = (input, output, iCount, oCount) => {
    let recipe = {
      type: 'mekanism:crushing',
      input: {},
      output: {}
    };
    if (input.includes('c:'))
      recipe.input.tag = input;
    else
      recipe.input.item = input;
    recipe.output.id = output;

    recipe.input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/crushing/${input.replace('c:', '').replace(':', '_')}`);
  };

  let mekEnrich = (input, output, iCount, oCount) => {
    let recipe = {
      type: 'mekanism:enriching',
      input: {},
      output: {}
    };
    if (input.includes('c:'))
      recipe.input.tag = input;
    else
      recipe.input.item = input;
    recipe.output.id = output;

    recipe.input.count = iCount || 1;
    recipe.output.count = oCount || 1;

    e.custom(recipe).id(`craftoria:mekanism/enriching/${input.replace('c:', '').replace(':', '_')}`);
  };

  // mekInfuse('mekanism:carbon', 'mekanism:enriched_iron', 'modern_industrialization:steel_dust', 10, 1, 1);
  mekInfuse('mekanism:tin', 'c:ingots/copper', 'modern_industrialization:bronze_ingot', 10, 3, 4);
  mekInfuse('mekanism:tin', 'c:dusts/copper', 'modern_industrialization:bronze_dust', 10, 3, 4);

  materials.forEach(material => {
    e.remove({ type: 'mekanism:crushing', output: `mekanism:dust_${material}` });
  });

  materials.forEach(material => {
    modPriority.forEach(mod => {
      types.forEach(type => {
        if (unified.includes(`${material}_${type}`)) return;

        switch (type) {
          case 'block': // Blocks use a different naming convention for tags.
            if (ifExists(mod, material, type, false)) {
              e.replaceOutput({}, `#c:storage_blocks/${material}`, `${mod}:${material}_${type}`);
              unified.push(`${material}_${type}`);
            } else if (ifExists(mod, material, type, true)) {
              e.replaceOutput({}, `#c:storage_blocks/${material}`, `${mod}:${type}_${material}`);
              unified.push(`${material}_${type}`);
            } else
              logNotFound(mod, material, type);
            break;

          case 'raw': // Raw is usually in the front of the material name, and uses a different naming convention for tags.
            if (ifExists(mod, material, type, true)) {
              e.remove({ type: 'minecraft:crafting_shaped', output: `#c:${type}_materials/${material}` });
              e.shapeless(`9x ${mod}:${type}_${material}`, [`#c:storage_blocks/${type}_${material}`]);
              e.replaceOutput({}, `#c:${type}_materials/${material}`, `${mod}:${type}_${material}`);
              e.remove([
                { type: 'minecraft:crafting_shaped', output: `#c:storage_blocks/${type}_${material}` },
                { type: 'minecraft:crafting_shapeless', output: `#c:storage_blocks/${type}_${material}` },
              ]);
              e.shaped(`${mod}:${type}_${material}_block`, ['MMM', 'MMM', 'MMM'], {
                M: `#c:${type}_materials/${material}`
              });
              unified.push(`${material}_${type}`);
            } else
              logNotFound(mod, material, type);
            break;

          case 'dust':
            if (ifExists(mod, material, type, false)) {
              e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${material}_${type}`);
              mekCrush(`c:gems/${material}`, `${mod}:${material}_${type}`, 1, 1);
              mekCrush(`c:ingots/${material}`, `${mod}:${material}_${type}`, 1, 1);
              mekEnrich(`c:ores/${material}`, `${mod}:${material}_${type}`, 1, 2);
              mekEnrich(`c:raw_materials/${material}`, `${mod}:${material}_${type}`, 3, 4);
              mekEnrich(`c:storage_blocks/raw_${material}`, `${mod}:${material}_${type}`, 1, 12);
              mekEnrich(`c:dirty_dusts/${material}`, `${mod}:${material}_${type}`, 1, 1);
              unified.push(`${material}_${type}`);
            } else if (ifExists(mod, material, type, true)) {
              e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${type}_${material}`);
              mekCrush(`c:gems/${material}`, `${mod}:${type}_${material}`, 1, 1);
              mekCrush(`c:ingots/${material}`, `${mod}:${type}_${material}`, 1, 1);
              mekEnrich(`c:ores/${material}`, `${mod}:${type}_${material}`, 1, 2);
              mekEnrich(`c:raw_materials/${material}`, `${mod}:${type}_${material}`, 3, 4);
              mekEnrich(`c:storage_blocks/raw_${material}`, `${mod}:${type}_${material}`, 1, 12);
              mekEnrich(`c:dirty_dusts/${material}`, `${mod}:${type}_${material}`, 1, 1);
              unified.push(`${material}_${type}`);
            } else
              logNotFound(mod, material, type);
            break;

          default:
            if (ifExists(mod, material, type, false)) {
              e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${material}_${type}`);
              unified.push(`${material}_${type}`);
            } else if (ifExists(mod, material, type, true)) {
              e.replaceOutput({}, `#c:${type}s/${material}`, `${mod}:${type}_${material}`);
              unified.push(`${material}_${type}`);
            } else {
              logNotFound(mod, material, type);
              return;
            }
            break;
        }
      });
    });
  });
  if (debug) {
    unified.forEach(material => {
      console.info(`Unified ${material}`);
    });
    // Get all recipe types
    // e.recipes.forEach(r => {
    //   console.info(r);
    // });
  };

  [
    'iron',
    'gold',
    'copper',
    //'osmium',
    'tin',
    'lead',
    'uranium',
  ].forEach(material => {
    e.remove({ type: 'mekanism:enriching', output: `#c:dusts/${material}` });
  });

  e.remove({ mod: 'moremekanismprocessing', output: '#c:nuggets' });
  e.remove({ mod: 'moremekanismprocessing', output: '#c:ingots' });
});
