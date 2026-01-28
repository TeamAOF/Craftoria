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
    textKey: 'info.mi.budding.certus',
    fluid: '1000x water',
    item: '8x ae2:certus_quartz_crystal',
  },
  amethyst: {
    block: 'minecraft:budding_amethyst',
    textKey: 'info.mi.budding.amethyst',
    fluid: '1000x water',
    item: '8x minecraft:amethyst_shard',
  },
  entro: {
    block: 'extendedae:entro_budding_fully',
    textKey: 'info.mi.budding.entro',
    fluid: '1000x water',
    item: '8x extendedae:entro_crystal',
    eu: 16,
    time: 15 * 20
  },
  thioquartz: {
    block: 'eternal_starlight:budding_thioquartz',
    textKey: 'info.mi.budding.thioquartz',
    fluid: '100x eternal_starlight:ether',
    item: '4x eternal_starlight:thioquartz_shard',
  },
  timecrystal: {
    block: 'justdirethings:time_crystal_budding_block',
    textKey: [
        'info.mi.budding.timecrystal.line1', 
        'info.mi.budding.timecrystal.line2'
    ],
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
    textKey: 'info.mi.budding.topaz',
    fluid: '1000x water',
    item: '8x pastel:topaz_shard',
  },
  citrine: {
    block: 'pastel:budding_citrine',
    textKey: 'info.mi.budding.citrine',
    fluid: '1000x water',
    item: '8x pastel:citrine_shard',
  },
  onyx: {
    block: 'pastel:budding_onyx',
    textKey: 'info.mi.budding.onyx',
    fluid: '1000x water',
    item: '4x pastel:onyx_shard',
    eu: 16,
    time: 15 * 20
  },
  moonstone: {
    block: 'pastel:budding_moonstone',
    textKey: 'info.mi.budding.moonstone',
    fluid: '1000x water',
    item: '2x pastel:moonstone_shard',
    eu: 16,
    time: 15 * 20
  },
};

MIRecipeEvents.customCondition(event => {
  Object.entries(buddingConditions).forEach(([key, condition]) => {
    if (!Platform.isLoaded(ID.namespace(condition.block))) return;

    let descriptionComponent;
    let keyArray, firstKey, restKeys; 

    if (Array.isArray(condition.textKey)) {
      keyArray = condition.textKey; 
      firstKey = keyArray[0];
      restKeys = keyArray.slice(1);

      descriptionComponent = Text.translate(firstKey);
      restKeys.forEach(nextKey => {
        descriptionComponent.append('\n').append(Text.translate(nextKey));
      });
    } else {
      descriptionComponent = Text.translate(condition.textKey);
    }
    
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
      descriptionComponent
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
});
