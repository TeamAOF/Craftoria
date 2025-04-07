ServerEvents.recipes((event) => {

    event.recipes.occultism.miner(
        //item, count, weight
        WeightedRecipeResult.of('modern_industrialization:bauxite_ore', 1, 250),
        '#occultism:miners/ores'
    )
	
	event.recipes.occultism.miner(
        WeightedRecipeResult.of('modern_industrialization:deepslate_bauxite_ore', 1, 250),
        '#occultism:miners/deeps'
    )
	
	event.recipes.occultism.miner(
        WeightedRecipeResult.of('modern_industrialization:bauxite_block', 1, 90),
        '#occultism:miners/eldritch'
    )
})