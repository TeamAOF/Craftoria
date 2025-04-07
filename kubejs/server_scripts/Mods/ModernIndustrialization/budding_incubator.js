MIRecipeEvents.customCondition((event) => {
  const buddingConditions = {
    certus_budding: {
      block: 'ae2:flawless_budding_quartz',
      text: 'Place Flawless Budding Certus Quartz to produce Certus Quartz Crystal.',
    },
    amethyst_budding: {
      block: 'minecraft:budding_amethyst',
      text: 'Place Budding Amethyst to produce Amethyst Shard.',
    },
    entro_budding: {
      block: 'extendedae:entro_budding_fully',
      text: 'Place Budding Fully Entroized Fluix to produce Entro Crystal.',
    },
    thioquartz_budding: {
      block: 'eternal_starlight:budding_thioquartz',
      text: 'Place Budding Thioquartz in the center to produce Thioquartz Shard.',
    },
  };

  Object.keys(buddingConditions).forEach((key) => {
    const condition = buddingConditions[key];
    event.register(
      key,
      (context, recipe) => {
        let be = context.getBlockEntity();
        let direction = be.orientation.facingDirection;
        let pos = be.getBlockPos()['relative(net.minecraft.core.Direction,int)'](direction.getOpposite(), 1).above(1);
        let level = context.getLevel();
        let state = level.getBlockState(pos);
        return state.getId() == condition.block;
      },
      Text.of(condition.text)
    );
  });
});

ServerEvents.recipes((event) => {
  const budding_incubator = event.recipes.modern_industrialization.budding_incubator;

  budding_incubator(32, 500)
    .fluidIn('water', 1000)
    .itemOut('2x ae2:certus_quartz_crystal')
    .itemOut('ae2:certus_quartz_crystal', 0.33)
    .customCondition('certus_budding');

  budding_incubator(32, 500)
    .fluidIn('water', 1000)
    .itemOut('2x minecraft:amethyst_shard')
    .itemOut('minecraft:amethyst_shard', 0.33)
    .customCondition('amethyst_budding');

  budding_incubator(32, 500)
    .fluidIn('water', 1000)
    .itemOut('2x extendedae:entro_crystal')
    .itemOut('extendedae:entro_crystal', 0.33)
    .customCondition('entro_budding');

  budding_incubator(32, 500)
    .fluidIn('eternal_starlight:ether', 100)
    .itemOut('2x eternal_starlight:thioquartz_shard')
    .itemOut('eternal_starlight:thioquartz_shard', 0.33)
    .customCondition('thioquartz_budding');
});
