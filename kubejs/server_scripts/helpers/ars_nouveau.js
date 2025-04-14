/**
 * Ars Nouveau Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function ArsNouveauHelper(event) {
  /**
   * Generate a recipe ID based on output and recipe type
   * @param {Special.Item} output
   * @param {string} type
   * @returns {string} The generated recipe ID
   */
  let makeRecipeId = (output, type) => {
    if (output.includes('x ')) output = output.split('x ')[1];
    if (output.includes(':')) output = output.split(':')[1];
    return `craftoria:ars_nouveau/${type}/${output}`;
  };

  return {
    /**
     * Creates a recipe for the Ars Nouveau Enchanting Apparatus.
     * @param {$ItemStack_} output The output item (e.g., '4x minecraft:chest'). Required.
     * @param {$ItemStack_} input The input item (e.g., 'minecraft:cobblestone'). Required.
     * @param {$ItemStack_[]} pedestalItems The pedestal items (e.g., ['minecraft:stick', 'minecraft:stick']). Required. Max 8.
     * @param {number} [sourceAmount] The source amount (optional, default is 0).
     * @param {boolean} [keepNbt] Whether to keep the NBT data of the reagent (optional, default is false).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    enchantingApparatus(output, input, pedestalItems, sourceAmount, keepNbt, recipeID) {
      let recipe = {
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: keepNbt ?? false,
        pedestalItems: [],
        reagent: Ingredient.of(input).toJson(),
        result: Item.of(output).toJson(),
        sourceCost: sourceAmount ?? 0,
      };

      let pedestalItemCount = 0;

      pedestalItems.forEach(pedestalItem => {
        let [count, item] = pedestalItem.includes('x ') ? pedestalItem.split('x ') : [1, pedestalItem];

        for (let i = 0; i < parseInt(count); i++) {
          pedestalItemCount++;
          recipe.pedestalItems.push(Ingredient.of(item).toJson());
        }

        if (pedestalItemCount > 8) {
          console.error('Ars Nouveau Enchanting Apparatus pedestal items count exceeded 8. Please check the recipe.');
          console.error(`Recipe output: ${output}, Recipe input: ${input}, Recipe pedestal items: ${pedestalItems}`);
          return;
        }
      });

      event.custom(recipe).id(recipeID ?? makeRecipeId(output, 'enchanting_apparatus'));
    },

    /**
     * Creates a recipe for the Ars Nouveau Imbuement Chamber.
     * @param {$ItemStack_} output The output item (e.g., '4x minecraft:chest'). Required.
     * @param {$ItemStack_} input The input item (e.g., 'minecraft:cobblestone'). Required.
     * @param {$ItemStack_[]} pedestalItems The pedestal items (e.g., ['minecraft:stick', 'minecraft:stick']). Required. Max 8.
     * @param {number} [sourceAmount] The source amount (optional, default is 1000).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    imbuementChamber(output, input, pedestalItems, sourceAmount, recipeID) {
      let recipe = {
        type: 'ars_nouveau:imbuement',
        pedestalItems: [],
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toJson(),
        source: sourceAmount ?? 1000,
      };

      let pedestalItemCount = 0;

      pedestalItems.forEach(pedestalItem => {
        let [count, item] = pedestalItem.includes('x ') ? pedestalItem.split('x ') : [1, pedestalItem];

        for (let i = 0; i < parseInt(count); i++) {
          pedestalItemCount++;
          recipe.pedestalItems.push(Ingredient.of(item).toJson());
        }

        if (pedestalItemCount > 8) {
          console.error('Ars Nouveau Imbuement Chamber pedestal items count exceeded 8. Please check the recipe.');
          console.error(`Recipe output: ${output}, Recipe input: ${input}, Recipe pedestal items: ${pedestalItems}`);
          return;
        }
      });
      event.custom(recipe).id(recipeID ?? makeRecipeId(output, 'imbuement_chamber'));
    },

    /**
     * Creates a recipe for the Ars Nouveau Glyph.
     * @param {$ItemStack_} output The output item (e.g., '4x minecraft:chest'). Required.
     * @param {$ItemStack_[]} inputs The input items (e.g., ['minecraft:cobblestone', 'minecraft:stone']). Required.
     * @param {number} [xpCost] The XP cost (e.g., 100). (optional, default is 0).
     * @param {Special.RecipeId} [recipeID] The recipe ID, can be used to overwrite recipes (optional, default is generated based on recipe parameters).
     */
    glyph(output, inputs, xpCost, recipeID) {
      event
        .custom({
          type: 'ars_nouveau:glyph',
          output: Item.of(output).toJson(),
          inputs: inputs.map(input => Ingredient.of(input).toJson()),
          exp: xpCost ?? 0,
        })
        .id(recipeID ?? makeRecipeId(output, 'glyph'));
    },
  };
}
