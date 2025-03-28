MIRecipeEvents.customCondition(event => {
    event.register("certus_budding",
        (context, recipe) => {
            let be = context.getBlockEntity();
            let direction = be.orientation.facingDirection;
            let pos = be.getBlockPos()['relative(net.minecraft.core.Direction,int)'](direction.getOpposite(), 1).above(1);
            let level = context.getLevel();
            let state = level.getBlockState(pos);
            return state.getId() == "ae2:flawless_budding_quartz"
        },
        Text.of("Place Flawless Budding Certus Quartz to produce Certus Quartz Crystal.")
    );
});

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.budding_incubator(32, 500)
    .fluidIn("water", 1000)
    .itemOut("2x ae2:certus_quartz_crystal")
    .itemOut("ae2:certus_quartz_crystal", 0.33)
    .customCondition("certus_budding")
});

MIRecipeEvents.customCondition(event => {
    event.register("amethyst_budding",
        (context, recipe) => {
            let be = context.getBlockEntity();
            let direction = be.orientation.facingDirection;
            let pos = be.getBlockPos()['relative(net.minecraft.core.Direction,int)'](direction.getOpposite(), 1).above(1);
            let level = context.getLevel();
            let state = level.getBlockState(pos);
            return state.getId() == "minecraft:budding_amethyst"
        },
        Text.of("Place Budding Amethyst to produce Amethyst Shard.")
    );
});

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.budding_incubator(32, 500)
    .fluidIn("water", 1000)
    .itemOut("2x minecraft:amethyst_shard")
    .itemOut("minecraft:amethyst_shard", 0.33)
    .customCondition("amethyst_budding")
});

MIRecipeEvents.customCondition(event => {
    event.register("entro_budding",
        (context, recipe) => {
            let be = context.getBlockEntity();
            let direction = be.orientation.facingDirection;
            let pos = be.getBlockPos()['relative(net.minecraft.core.Direction,int)'](direction.getOpposite(), 1).above(1);
            let level = context.getLevel();
            let state = level.getBlockState(pos);
            return state.getId() == "extendedae:entro_budding_fully"
        },
        Text.of("Place Budding Fully Entroized Fluix to produce Entro Crystal.")
    );
});

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.budding_incubator(32, 500)
    .fluidIn("water", 1000)
    .itemOut("2x extendedae:entro_crystal")
    .itemOut("extendedae:entro_crystal", 0.33)
    .customCondition("entro_budding")
});

MIRecipeEvents.customCondition(event => {
    event.register("thioquartz_budding",
        (context, recipe) => {
            let be = context.getBlockEntity();
            let direction = be.orientation.facingDirection;
            let pos = be.getBlockPos()['relative(net.minecraft.core.Direction,int)'](direction.getOpposite(), 1).above(1);
            let level = context.getLevel();
            let state = level.getBlockState(pos);
            return state.getId() == "eternal_starlight:budding_thioquartz"
        },
        Text.of("Place Budding Thioquartz in the center to produce Thioquartz Shard.")
    );
});

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.budding_incubator(32, 500)
    .fluidIn("eternal_starlight:ether", 100)
    .itemOut("2x eternal_starlight:thioquartz_shard")
    .itemOut("eternal_starlight:thioquartz_shard", 0.33)
    .customCondition("thioquartz_budding")
});
