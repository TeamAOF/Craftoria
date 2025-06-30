const TIME_BUDDING_STAGE = Java.loadClass('com.direwolf20.justdirethings.common.blocks.resources.TimeCrystalBuddingBlock').STAGE;

/**
 * @typedef {Object} BuddingCondition
 * @property {Special.Block} block - The block ID that needs to be present.
 * @property {string} text - The text to display when the condition is met.
 * @property {$FluidIngredient_} [fluid] - The fluid required for the recipe.
 * @property {$ItemStack_} [item] - The item produced by the recipe.
 * @property {number} [eu] - The EU required for the recipe.
 * @property {number} [time] - The time required for the recipe in ticks.
 */

/** @type {Record<string, BuddingCondition} */
const buddingConditions = {
  certus: {
    block: 'ae2:flawless_budding_quartz',
    text: 'Place Flawless Budding Certus Quartz in the center to produce Certus Quartz Crystal.',
    fluid: '1000x water',
    item: '8x ae2:certus_quartz_crystal',
  },
  amethyst: {
    block: 'minecraft:budding_amethyst',
    text: 'Place Budding Amethyst in the center to produce Amethyst Shard.',
    fluid: '1000x water',
    item: '8x minecraft:amethyst_shard',
  },
  entro: {
    block: 'extendedae:entro_budding_fully',
    text: 'Place Budding Fully Entroized Fluix in the center to produce Entro Crystal.',
    fluid: '1000x water',
    item: '8x extendedae:entro_crystal',
    eu: 16,
    time: 15 * 20
  },
  thioquartz: {
    block: 'eternal_starlight:budding_thioquartz',
    text: 'Place Budding Thioquartz in the center to produce Thioquartz Shard.',
    fluid: '100x eternal_starlight:ether',
    item: '4x eternal_starlight:thioquartz_shard',
  },
  timecrystal: {
    block: 'justdirethings:time_crystal_budding_block',
    text: ['Place Budding Time Crystal in the center to produce Time Crystal.', 'Requires a stage 3 Budding Time Crystal Block.'],
    blockState: {
      property: TIME_BUDDING_STAGE,
      value: TIME_BUDDING_STAGE.max,
    },
    fluid: '250x justdirethings:time_fluid_source',
    item: '1x justdirethings:time_crystal',
    eu: 32,
    time: 20 * 20,
  },
  topaz: {
    block: 'pastel:budding_topaz',
    text: 'Place Budding Topaz in the center to produce Topaz Shard.',
    fluid: '1000x water',
    item: '8x pastel:topaz_shard',
  },
  citrine: {
    block: 'pastel:budding_citrine',
    text: 'Place Budding Citrine in the center to produce Citrine Shard.',
    fluid: '1000x water',
    item: '8x pastel:citrine_shard',
  },
  onyx: {
    block: 'pastel:budding_onyx',
    text: 'Place Budding Onyx in the center to produce Onyx Shard.',
    fluid: '1000x water',
    item: '4x pastel:onyx_shard',
    eu: 16,
    time: 15 * 20
  },
  moonstone: {
    block: 'pastel:budding_moonstone',
    text: 'Place Budding Moonstone in the center to produce Moonstone Shard.',
    fluid: '1000x water',
    item: '2x pastel:moonstone_shard',
    eu: 16,
    time: 15 * 20
  },
};

MIRecipeEvents.customCondition(event => {
  Object.entries(buddingConditions).forEach(([key, condition]) => {
    if (!Platform.isLoaded(ID.namespace(condition.block))) return;
    event.register(
      key,
      (ctx, recipe) => {
        let be = ctx.blockEntity;
        let pos = be.blockPos['relative(net.minecraft.core.Direction,int)'](be.orientation.facingDirection.opposite, 1).above(1);
        let state = ctx.level.getBlockState(pos);

        if (state.id != condition.block) return false;

        if (condition.blockState) {
          let { blockState } = condition;

          if (Array.isArray(blockState)) {
            let allMatch = false;
            for (let i = 0; i < blockState.length; i++) {
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
  const { budding_incubator, assembler } = event.recipes.modern_industrialization;

  /**
   * @param {$FluidStack_|$ItemStack_} stack
   * @returns {$FluidStack_|$ItemStack_}
   */
  const getHalfFromStack = stack => {
    if (!stack.includes('x ')) return stack;

    /** @type {[number, Special.Fluid|Special.Item]} */
    let [amount, item] = stack.split('x ');
    return `${Math.max(1, Math.floor(amount / 2))}x ${item}`;
  };

  for (let [key, condition] of Object.entries(buddingConditions)) {
    if (!Platform.isLoaded(ID.namespace(condition.block))) continue;

    let { fluid, item, eu, time } = condition;
    budding_incubator(eu || 8, time || 10 * 20)
      .fluidIn(fluid || '1000x water')
      .itemOut(item)
      .itemOut(getHalfFromStack(item), 0.33)
      .customCondition(key)
      .id(`craftoria:mi/budding_incubator/${key}`);
  }

  assembler(16, 200)
    .itemOut('mi_tweaks:budding_incubator')
    .itemIn('16x ae2:growth_accelerator')
    .itemIn('4x modern_industrialization:electronic_circuit')
    .itemIn('modern_industrialization:large_pump')
    .itemIn('modern_industrialization:advanced_machine_hull')
    .id('craftoria:mi/assembler/budding_incubator');

  event.shapeless('mi_tweaks:budding_incubator', 'mi_tweaks:batch_budding_incubator');
});
