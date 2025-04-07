/**
 * Ars Nouveau Recipe Helpers
 * @param {$RecipesKubeEvent_} event
 */
function ArsNouveauHelper(event) {
    const makeRecipeId = (output, type) => {
        if (output.includes('x ')) output = output.split('x ')[1];
        if (output.includes(':')) output = output.split(':')[1];
        return `craftoria:ars_nouveau/${type}/${output}`;
    };

    return {
        /**
         * @description Creates a recipe for the Ars Nouveau Enchanting Apparatus.
         * @param {$ItemStack_} output The output item (e.g., '4x minecraft:chest'). Required.
         * @param {$ItemStack_} input The input item (e.g., 'minecraft:cobblestone'). Required.
         * @param {$ItemStack_[]} pedestalItems The pedestal items (e.g., ['minecraft:stick', 'minecraft:stick']). Required. Max 8.
         * @param {number} sourceAmount The source amount (optional, default is 0).
         * @param {boolean} keepNbt Whether to keep the NBT data of the reagent (optional, default is false).
         */
        enchantingApparatus(output, input, pedestalItems, sourceAmount, keepNbt) {
            const recipe = {
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: keepNbt || false,
                pedestalItems: [],
                reagent: Ingredient.of(input).toJson(),
                result: Item.of(output).toJson(),
                sourceCost: sourceAmount || 0,
            };

            let pedestalItemCount = 0;

            pedestalItems.forEach((pedestalItem) => {
                const [count, item] = pedestalItem.includes('x ') ? pedestalItem.split('x ') : [1, pedestalItem];

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

            event.custom(recipe).id(makeRecipeId(output, 'enchanting_apparatus'));
        },

        /**
         * @description Creates a recipe for the Ars Nouveau Imbuement Chamber.
         * @param {$ItemStack_} output The output item (e.g., '4x minecraft:chest'). Required.
         * @param {$ItemStack_} input The input item (e.g., 'minecraft:cobblestone'). Required.
         * @param {$ItemStack_[]} pedestalItems The pedestal items (e.g., ['minecraft:stick', 'minecraft:stick']). Required. Max 8.
         * @param {number} sourceAmount The source amount (optional, default is 1000).
         */
        imbuementChamber(output, input, pedestalItems, sourceAmount) {
            const recipe = {
                type: 'ars_nouveau:imbuement',
                pedestalItems: [],
                input: Ingredient.of(input).toJson(),
                output: Item.of(output).toJson(),
                source: sourceAmount || 1000,
            };

            let pedestalItemCount = 0;

            pedestalItems.forEach((pedestalItem) => {
                const [count, item] = pedestalItem.includes('x ') ? pedestalItem.split('x ') : [1, pedestalItem];

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


            event.custom(recipe).id(makeRecipeId(output, 'imbuement'));
        },
    };
}
