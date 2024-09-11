// Priority: 998
/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod(defined in modPriority) that has the item.
 * For now, @white.phantom signing off.
 */

let getItemFromTag = (tag) => {
  let items = Ingredient.of(tag).itemIds;
  if (items.length > 0 && items[0] !== 'minecraft:barrier') {
    items = sortArray(items.toArray());
    return items[0];
  } else return false;
};

let checkTagSize = (tag) => {
  let itemIds = Ingredient.of(tag).itemIds;
  let size = itemIds.length;
  if (debug) console.log(`Found ${size} items for tag: ${tag}`);
  if (itemIds[0] !== 'minecraft:barrier') return size;
  else return 0;
};

// Sort the array by modPriority.
let sortArray = (array) => {
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

ServerEvents.tags('item', (e) => {
  let tags = [];

  for (let [material, types] of Object.entries(materials)) {
    switch (material) {
      case 'metals':
        metals.forEach((metal) => {
          types.forEach((type) => {
            tags.push(`c:${type}/${metal}`);
            if (type === 'raw_materials') tags.push(`c:storage_blocks/raw_${metal}`);
          });
        });
        break;
      case 'gems':
        gems.forEach((gem) => {
          types.forEach((type) => {
            tags.push(`c:${type}/${gem}`);
          });
        });
        break;
      case 'misc':
        misc.forEach((misc) => {
          types.forEach((type) => {
            tags.push(`c:${type}/${misc}`);
          });
        });
        break;
      default:
        console.error(`Unknown material: ${material}`);
        break;
    }
  }

  tags.forEach((tag) => {
    let items = e.get(tag).getObjectIds();
    let sortedItems = [];
    items.forEach((item) => {
      sortedItems.push(item);
    });
    sortedItems = sortArray(sortedItems);
    if (Item.exists(sortedItems[0])) {
      e.removeAll(tag);
      e.add(tag, sortedItems);
    }
  });
});

ServerEvents.recipes((e) => {
  let yeets = ['mffs:steel_compound'];

  yeets.forEach((id) => {
    e.remove({ output: id });
  });

  let replaceFilters = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting'];

  let tryReplace = (replace) => {
    let replaceWith = getItemFromTag(replace);
    if (replaceWith) {
      let filters = [];
      replaceFilters.forEach((filter) => {
        filters.push({ type: filter });
      });
      e.replaceOutput(filters, replace, replaceWith);
      e.replaceInput(filters, replace, replace);
    } else if (debug) {
      console.error(`Could not find item for tag: ${replace}`);
    }
  };

  for (let [material, types] of Object.entries(materials)) {
    switch (material) {
      case 'metals':
        metals.forEach((metal) => {
          types.forEach((type) => {
            tryReplace(`#c:${type}/${metal}`);
            if (type === 'raw_materials') tryReplace(`#c:storage_blocks/raw_${metal}`);
          });
        });
        break;
      case 'gems':
        gems.forEach((gem) => {
          types.forEach((type) => {
            tryReplace(`#c:${type}/${gem}`);
          });
        });
        break;
      case 'misc':
        misc.forEach((misc) => {
          types.forEach((type) => {
            tryReplace(`#c:${type}/${misc}`);
          });
        });
        break;
      default:
        console.error(`Unknown material: ${material}`);
        break;
    }
  }

  e.replaceInput({}, 'minecraft:ender_pearl', '#c:ender_pearls');

  let enchApparatusRecipe = (output, inputs, reagent, keepNbtOfReagent, sourceCost, id) => {
    output = Item.of(output).toJson();
    inputs = inputs.map((input) => Ingredient.of(input).toJson());
    reagent = Ingredient.of(reagent).toJson();

    e.custom({
      type: 'ars_nouveau:enchanting_apparatus',
      keepNbtOfReagent: keepNbtOfReagent,
      reagent: reagent,
      result: output,
      pedestalItems: inputs,
      sourceCost: sourceCost,
    }).id(id);
  };

  let glyphRecipe = (output, inputs, xpCost, id) => {
    output = Item.of(output).toJson();
    inputs = inputs.map((input) => Ingredient.of(input).toJson());

    e.custom({
      type: 'ars_nouveau:glyph',
      output: output,
      inputs: inputs,
      exp: xpCost,
    }).id(id);
  };

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

  enchApparatusRecipe(
    'ars_additions:ender_source_jar',
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
    'ars_nouveau:source_jar',
    false,
    0,
    'ars_additions:apparatus/ender_source_jar'
  );

  enchApparatusRecipe(
    'ars_additions:unstable_reliquary',
    ['ars_nouveau:conjuration_essence', 'ars_nouveau:manipulation_essence', '#c:ender_pearls'],
    'ars_nouveau:mob_jar',
    false,
    0,
    'ars_additions:apparatus/unstable_reliquary'
  );

  enchApparatusRecipe(
    'ars_nouveau:thread_wild_magic',
    ['#c:ender_pearls', 'minecraft:rabbit_foot', 'minecraft:bone'],
    'ars_nouveau:blank_thread',
    false,
    0,
    'ars_nouveau:thread_wild_magic'
  );

  glyphRecipe(
    'ars_additions:glyph_recall',
    ['ars_nouveau:conjuration_essence', '#c:ender_pearls', 'ars_nouveau:scryer_scroll', 'ars_nouveau:enchanters_eye'],
    160,
    'ars_additions:glyph_recall'
  );

  glyphRecipe(
    'ars_additions:glyph_mark',
    ['ars_nouveau:manipulation_essence', '#c:ender_pearls', 'ars_nouveau:mob_jar', 'ars_nouveau:ritual_containment'],
    160,
    'ars_additions:glyph_mark'
  );

  glyphRecipe(
    'ars_elemental:glyph_arc_projectile',
    ['minecraft:arrow', 'minecraft:snowball', 'minecraft:slime_ball', '#c:ender_pearls'],
    55,
    'ars_elemental:glyph_arc_projectile'
  );

  e.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: Ingredient.of('#c:ender_pearls').toJson(),
    },
    mode: 'inscribe',
    result: Item.of('ae2:ender_dust').toJson(),
  }).id('ae2:inscriber/ender_dust');
});
