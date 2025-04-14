const TIME_BUDDING_STAGE = Java.loadClass('com.direwolf20.justdirethings.common.blocks.resources.TimeCrystalBuddingBlock').STAGE;

MIRecipeEvents.customCondition(event => {
  const buddingConditions = {
    certus_budding: {
      block: 'ae2:flawless_budding_quartz',
      text: 'Place Flawless Budding Certus Quartz in the center to produce Certus Quartz Crystal.',
    },
    amethyst_budding: {
      block: 'minecraft:budding_amethyst',
      text: 'Place Budding Amethyst in the center to produce Amethyst Shard.',
    },
    entro_budding: {
      block: 'extendedae:entro_budding_fully',
      text: 'Place Budding Fully Entroized Fluix in the center to produce Entro Crystal.',
    },
    thioquartz_budding: {
      block: 'eternal_starlight:budding_thioquartz',
      text: 'Place Budding Thioquartz in the center to produce Thioquartz Shard.',
    },
    timecrystal_budding: {
      block: 'justdirethings:time_crystal_budding_block',
      text: ['Place Budding Time Crystal in the center to produce Time Crystal.', 'Requires a stage 3 Budding Time Crystal Block.'],
      blockState: {
        property: TIME_BUDDING_STAGE,
        value: TIME_BUDDING_STAGE.max,
      },
    },
  };

  Object.entries(buddingConditions).forEach(([key, condition]) => {
    event.register(
      key,
      (ctx, recipe) => {
        let be = ctx.blockEntity;
        let pos = be.blockPos['relative(net.minecraft.core.Direction,int)'](be.orientation.facingDirection.opposite, 1).above(1);
        let state = ctx.level.getBlockState(pos);

        if (state.id != condition.block) return false;

        if (condition.blockState) {
          let blockState = condition.blockState;
          if (Array.isArray(condition.blockState)) {
            let allMatch = false;
            for (let i = 0; i < condition.blockState.length; i++) {
              blockState = blockState[i];

              allMatch = state.getValue(blockState.property) == blockState.value;
              if (!allMatch) break;
            }
            return allMatch;
          } else return state.getValue(blockState.property) == blockState.value;
        } else return true;
      },
      Text.of(Array.isArray(condition.text) ? condition.text.join('\n') : condition.text)
    );
  });
});

ServerEvents.recipes(event => {
  const { budding_incubator } = event.recipes.modern_industrialization;

  budding_incubator(32, 500)
    .fluidIn('1000x water')
    .itemOut('2x ae2:certus_quartz_crystal')
    .itemOut('ae2:certus_quartz_crystal', 0.33)
    .customCondition('certus_budding');

  budding_incubator(32, 500)
    .fluidIn('1000x water')
    .itemOut('2x minecraft:amethyst_shard')
    .itemOut('minecraft:amethyst_shard', 0.33)
    .customCondition('amethyst_budding');

  budding_incubator(32, 500)
    .fluidIn('1000x water')
    .itemOut('2x extendedae:entro_crystal')
    .itemOut('extendedae:entro_crystal', 0.33)
    .customCondition('entro_budding');

  budding_incubator(32, 500)
    .fluidIn('100x eternal_starlight:ether')
    .itemOut('2x eternal_starlight:thioquartz_shard')
    .itemOut('eternal_starlight:thioquartz_shard', 0.33)
    .customCondition('thioquartz_budding');

  budding_incubator(32, 500)
    .fluidIn('100x justdirethings:time_fluid_source')
    .itemOut('1x justdirethings:time_crystal')
    .itemOut('justdirethings:time_crystal', 0.33)
    .customCondition('timecrystal_budding');
});
