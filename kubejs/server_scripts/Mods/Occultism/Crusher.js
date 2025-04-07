ServerEvents.recipes((event) => {
	
    event.recipes.occultism.crushing(
        RecipeResult.of("minecraft:gravel", 1),
        '#c:cobblestones/normal'
    )
	
    event.recipes.occultism.crushing(
        RecipeResult.of("minecraft:sand", 2),
        '#c:sandstone/uncolored_blocks'
    )
	
    event.recipes.occultism.crushing(
        RecipeResult.of("minecraft:red_sand", 2),
        '#c:sandstone/red_blocks'
    )
	
    event.recipes.occultism.crushing(
        RecipeResult.of("minecraft:sand", 1),
        '#c:gravels'
    )
	
    event.recipes.occultism.crushing(
        RecipeResult.of("minecraft:clay_ball", 4),
        'minecraft:clay'
    )
})