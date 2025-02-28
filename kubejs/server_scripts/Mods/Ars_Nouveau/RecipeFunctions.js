// priority: 900

//This file contains functions for making recipes for Ars Nouveau.

let arsGenRecipeID = (name, type) => {
  if (name.includes('x ')) name = name.split('x ')[1];
  if (name.includes(':')) name = name.split(':')[1];
  return `craftoria:ars_nouveau/${type}/${name}`;
};

/**
 * @author WhitePhantom
 * @description Ars Nouveau Enchanting Apparatus recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Item_} iOutput The output item. ex '4x minecraft:chest'. Required.
 * @param {$Ingredient_} iInput The input item. ex 'minecraft:cobblestone'. Required.
 * @param {$Ingredient_[]} pedestalItems The pedestal items. ex. ['minecraft:stick', 'minecraft:stick']. Required. Max 8.
 * @param {number} source The source amount. Optional, default is 0.
 * @param {boolean} keepNbt Keep the nbt of the reagent. Optional, default is false.
 */
let arsEcnhApparatus = (event, iOutput, iInput, pedestalItems, source, keepNbt) => {
  let recipe = {
    type: 'ars_nouveau:enchanting_apparatus',
    keepNbtOfReagent: keepNbt || false,
    pedestalItems: [],
    reagent: Ingredient.of(iInput).toJson(),
    result: Item.of(iOutput).toJson(),
    sourceCost: source || 0,
  };
  let pedestalItemsCount;

  pedestalItems.forEach((item) => {
    if (item.includes('x ')) {
      for (let i = 0; i < parseInt(item.split('x ')[0]); i++) {
        pedestalItemsCount++;
        recipe.pedestalItems.push(Ingredient.of(item.split('x ')[1]).toJson());
      }
    } else {
      pedestalItemsCount++;
      recipe.pedestalItems.push(Ingredient.of(item).toJson());
    }

    if (pedestalItemsCount > 8) {
      console.error('Ars Nouveau Enchanting Apparatus pedestal items count exceeded 8. Please check the recipe.');
      console.error(`Recipe output: ${iOutput}, Recipe input: ${iInput}, Recipe pedestal items: ${pedestalItems}`);
      return;
    }
  });

  event.custom(recipe).id(arsGenRecipeID(iOutput, 'enchanting_apparatus'));
};

/**
 * @author WhitePhantom
 * @description Ars Nouveau Imbuement Chamber recipe
 * @param {$RecipesKubeEvent_} event The event object, usually `event`. Required.
 * @param {$Item_} iOutput The output item. ex '4x minecraft:chest'. Required.
 * @param {$Ingredient_} iInput The input item. ex 'minecraft:cobblestone'. Required.
 * @param {$Ingredient_[]} pedestalItems The pedestal items. ex. ['minecraft:stick', 'minecraft:stick']. Required. Max 8.
 * @param {number} source The source amount. Optional, default is 1000.
 */
let arsImbuement = (event, iOutput, iInput, pedestalItems, source) => {
  let recipe = {
    type: 'ars_nouveau:imbuement',
    pedestalItems: [],
    input: Ingredient.of(iInput).toJson(),
    output: Item.of(iOutput).toJson(),
    source: source || 1000,
  };
  let pedestalItemsCount;

  pedestalItems.forEach((item) => {
    if (item.includes('x ')) {
      for (let i = 0; i < parseInt(item.split('x ')[0]); i++) {
        pedestalItemsCount++;
        recipe.pedestalItems.push(Ingredient.of(item.split('x ')[1]).toJson());
      }
    } else {
      pedestalItemsCount++;
      recipe.pedestalItems.push(Ingredient.of(item).toJson());
    }

    if (pedestalItemsCount > 8) {
      console.error('Ars Nouveau Imbuement Chamber pedestal items count exceeded 8. Please check the recipe.');
      console.error(`Recipe output: ${iOutput}, Recipe input: ${iInput}, Recipe pedestal items: ${pedestalItems}`);
      return;
    }
  });

  event.custom(recipe).id(arsGenRecipeID(iOutput, 'imbuement'));
};
