// priority: 998
/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod(defined in modPriority) that has the item.
 */

let getItemFromTag = tag => {
  let items = Ingredient.of(tag).itemIds;
  if (items.length > 0 && items[0] !== 'minecraft:barrier') {
    items = sortArray(items.toArray());
    return items[0];
  } else return false;
};

let checkTagSize = tag => {
  let itemIds = Ingredient.of(tag).itemIds;
  let size = itemIds.length;
  logInfo(`Found ${size} items for tag: ${tag}`);
  if (itemIds[0] !== 'minecraft:barrier') return size;
  else return 0;
};

let sortArray = array => {
  return array.sort((a, b) => {
    a = `${a}`;
    b = `${b}`;
    // Sort by modid, prefer mods in the modPriority list. If not in the list, put it at the end.
    let modA = modPriority.indexOf(a.split(':')[0]);
    let modB = modPriority.indexOf(b.split(':')[0]);
    if (modA === -1) modA = modPriority.length;
    if (modB === -1) modB = modPriority.length;
    if (modA !== modB) return modA - modB;
    // If the mods are the same, sort by item name.
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

ServerEvents.tags('item', e => {
  let tags = [];

  for (let [material, types] in materials) {
    switch (material) {
      case 'metals':
        metals.forEach(metal => {
          types.forEach(type => {
            tags.push(`c:${type}/${metal}`);
            if (type === 'raw_materials') tags.push(`c:storage_blocks/raw_${metal}`);
          });
        });
        break;
      case 'gems':
        gems.forEach(gem => {
          types.forEach(type => {
            tags.push(`c:${type}/${gem}`);
          });
        });
        break;
      case 'misc':
        misc.forEach(misc => {
          types.forEach(type => {
            tags.push(`c:${type}/${misc}`);
          });
        });
        break;
      default:
        logError(`Unknown material: ${material}`);
        break;
    }
  }

  tags.forEach(tag => {
    let items = e.get(tag).objectIds;
    let sortedItems = [];
    items.forEach(item => {
      sortedItems.push(item);
    });
    sortedItems = sortArray(sortedItems);
    if (Item.exists(sortedItems[0])) {
      e.removeAll(tag);
      e.add(tag, sortedItems);
    }
  });

  const whitelistedIDs = ['dust_iridium', 'dust_nickel', 'dust_platinum', 'dust_silver', 'dust_titanium', 'dust_tungsten', 'dust_zinc', 'dust_aluminum'];
  const tagsToCheck = ['c:gems', 'c:dusts'];
  tagsToCheck.forEach(tag => {
    e.get(tag).objectIds.forEach(id => {
      if (id.namespace === 'moremekanismprocessing') {
        if (!whitelistedIDs.includes(id.path)) {
          logInfo(`Removing tags from: ${id}`);
          e.removeAllTagsFrom(id);
        }
      }
    });
  });
});

ServerEvents.recipes(e => {
  const ars = ArsNouveauHelper(e);
  const ae = AE2Helper(e);
  /** @type {Special.RecipeSerializer[]} */
  let replaceFilters = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting'];

  let tryReplace = replace => {
    let replaceWith = getItemFromTag(replace);
    if (replaceWith) {
      let filters = [];
      replaceFilters.forEach(filter => {
        filters.push({ type: filter });
      });
      e.replaceOutput(filters, replace, replaceWith);
      e.replaceInput(filters, replace, replace);
    } else {
      logWarn(`Could not find item for tag: ${replace}`);
    }
  };

  Object.entries(materials).forEach(([material, types]) => {
    switch (material) {
      case 'metals':
        metals.forEach(metal => {
          types.forEach(type => {
            tryReplace(`#c:${type}/${metal}`);
            if (type === 'raw_materials') tryReplace(`#c:storage_blocks/raw_${metal}`);
          });
        });
        break;
      case 'gems':
        gems.forEach(gem => {
          types.forEach(type => {
            tryReplace(`#c:${type}/${gem}`);
          });
        });
        break;
      case 'misc':
        misc.forEach(misc => {
          types.forEach(type => {
            tryReplace(`#c:${type}/${misc}`);
          });
        });
        break;
      default:
        logDebug(`Unknown material: ${material}`);
        break;
    }
  });

  e.replaceInput({}, 'minecraft:ender_pearl', '#c:ender_pearls');

  e.custom({
    type: 'tankstorage:tank_link',
    pattern: [' B ', 'AGA', 'ESE'],
    key: {
      B: { tag: 'tankstorage:tanks' },
      A: { tag: 'c:gems/amethyst' },
      G: { tag: 'c:glass_blocks/cheap' },
      E: { tag: 'c:ender_pearls' },
      S: { item: 'minecraft:glow_ink_sac' },
    },
    result: { id: 'tankstorage:tank_link', count: 1 },
  }).id('tankstorage:tank_link');

  e.custom({
    type: 'bankstorage:bank_link',
    pattern: [' B ', 'AGA', 'ESE'],
    key: {
      B: { tag: 'bankstorage:banks' },
      A: { tag: 'c:gems/amethyst' },
      G: { tag: 'c:glass_blocks/cheap' },
      E: { tag: 'c:ender_pearls' },
      S: { item: 'minecraft:glow_ink_sac' },
    },
    result: { id: 'bankstorage:bank_link', count: 1 },
  }).id('bankstorage:bank_link');

  ars.enchantingApparatus(
    'ars_additions:ender_source_jar',
    'ars_nouveau:source_jar',
    [
      '#c:ender_pearls',
      '#c:ender_pearls',
      '#c:ender_pearls',
      '#c:ender_pearls',
      'minecraft:popped_chorus_fruit',
      'minecraft:popped_chorus_fruit',
      'minecraft:popped_chorus_fruit',
      'minecraft:popped_chorus_fruit',
    ],
    0,
    false,
    'ars_additions:apparatus/ender_source_jar'
  );

  ars.enchantingApparatus(
    'ars_additions:unstable_reliquary',
    'ars_nouveau:mob_jar',
    ['ars_nouveau:conjuration_essence', 'ars_nouveau:manipulation_essence', '#c:ender_pearls'],
    0,
    false,
    'ars_additions:apparatus/unstable_reliquary'
  );

  ars.enchantingApparatus(
    'ars_nouveau:thread_wild_magic',
    'ars_nouveau:blank_thread',
    ['#c:ender_pearls', 'minecraft:rabbit_foot', 'minecraft:bone'],
    0,
    false,
    'ars_nouveau:thread_wild_magic'
  );

  ars.glyph(
    'ars_additions:glyph_recall',
    ['ars_nouveau:conjuration_essence', '#c:ender_pearls', 'ars_nouveau:scryer_scroll', 'ars_nouveau:enchanters_eye'],
    160,
    'ars_additions:glyph_recall'
  );

  ars.glyph(
    'ars_additions:glyph_mark',
    ['ars_nouveau:manipulation_essence', '#c:ender_pearls', 'ars_nouveau:mob_jar', 'ars_nouveau:ritual_containment'],
    160,
    'ars_additions:glyph_mark'
  );

  ars.glyph(
    'ars_elemental:glyph_arc_projectile',
    ['minecraft:arrow', 'minecraft:snowball', 'minecraft:slime_ball', '#c:ender_pearls'],
    55,
    'ars_elemental:glyph_arc_projectile'
  );

  ae.inscriber('inscribe', 'ae2:ender_dust', '#c:ender_pearls', null, null, 'ae2:inscriber/ender_dust');

  e.forEachRecipe({ type: 'pneumaticcraft:thermo_plant' }, kubeRecipe => {
    let recipe = JSON.parse(kubeRecipe.json.toString());
    let modifiedRecipe = false;

    if (recipe?.outputs?.fluid_output?.id == 'pneumaticcraft:lubricant') {
      recipe.outputs.fluid_output.id = 'modern_industrialization:lubricant';
      modifiedRecipe = true;
    }

    if (!modifiedRecipe) return;

    logDebug(`Recipe: ${kubeRecipe.getId()}`, `JSON: ${kubeRecipe.json.toString()}`);
    e.custom(recipe).id(kubeRecipe.getId());
  });

  e.forEachRecipe({ type: 'pneumaticcraft:amadron' }, kubeRecipe => {
    let recipe = JSON.parse(kubeRecipe.json.toString());
    let modifiedRecipe = false;

    if (recipe?.output?.resource?.id == 'pneumaticcraft:lubricant') {
      recipe.output.resource.id = 'modern_industrialization:lubricant';
      modifiedRecipe = true;
    } else if (recipe?.input?.resource?.id == 'pneumaticcraft:lubricant') {
      recipe.input.resource.id = 'modern_industrialization:lubricant';
      modifiedRecipe = true;
    }

    if (!modifiedRecipe) return;

    logDebug(`Recipe: ${kubeRecipe.getId()}`, `JSON: ${kubeRecipe.json.toString()}`);
    e.custom(recipe).id(kubeRecipe.getId());
  });
});
