ServerEvents.recipes(event => {
  const { ooze_lab, assembler } = event.recipes.modern_industrialization;

  /**
   * Hardcoded replacements for the output of the ooze lab recipes.
   * @type {Record<Special.Item, Special.Item}
   */
  const replaceOut = {
    'justdirethings:raw_ferricore_ore': 'justdirethings:ferricore_block',
    'justdirethings:raw_blazegold_ore': 'justdirethings:blazegold_block',
    'justdirethings:raw_celestigem_ore': 'justdirethings:celestigem_block',
    'justdirethings:raw_eclipsealloy_ore': 'justdirethings:eclipsealloy_block',
    'justdirethings:raw_coal_t1_ore': 'justdirethings:coalblock_t1',
    'justdirethings:raw_coal_t2_ore': 'justdirethings:coalblock_t2',
    'justdirethings:raw_coal_t3_ore': 'justdirethings:coalblock_t3',
    'justdirethings:raw_coal_t4_ore': 'justdirethings:coalblock_t4',
  };

  /**
   * Creates a recipe for the ooze lab.
   * @param {$Ingredient_} [itemIn]
   * @param {Special.Item} [itemOut]
   * @param {Special.Fluid} [fluidIn]
   * @param {Special.Fluid} [fluidOut]
   * @param {number} time
   */
  const oozeLabRecipe = (itemIn, itemOut, fluidIn, fluidOut, time) => {
    const recipe = ooze_lab(8, Math.max(1, Math.floor(time / 100)));
    let inputThing = ID.path(itemIn || fluidIn);
    let outputThing = ID.path(itemOut || fluidOut);

    recipe.itemIn('minecraft:sculk', 0.025);
    if (itemIn) recipe.itemIn(itemIn);
    if (itemOut) {
      if (replaceOut[itemOut]) {
        recipe.itemOut(replaceOut[itemOut]);
        outputThing = ID.path(replaceOut[itemOut]);
      } else recipe.itemOut(itemOut);
    }
    if (fluidIn) recipe.fluidIn(fluidIn);
    if (fluidOut) recipe.fluidOut(fluidOut);

    recipe.id(`craftoria:mi/ooze_lab/${inputThing}_to_${outputThing}`);
  };

  event.forEachRecipe([{ type: 'justdirethings:goospread' }, { type: 'justdirethings:goospread_tag' }], kubeRecipe => {
    let recipeJson = JSON.parse(kubeRecipe.json.toString());

    let isTag = recipeJson.type === 'justdirethings:goospread_tag';

    let input = isTag ? recipeJson.input.tag : recipeJson.input.Name;
    let output = recipeJson.output.Name;
    let time = recipeJson.craftingDuration;

    if (Fluid.exists(input) && Fluid.exists(output)) oozeLabRecipe(null, null, input, output, time);
    else if (Fluid.exists(input.replace('block', 'source')) && Fluid.exists(output.replace('block', 'source')))
      oozeLabRecipe(null, null, input.replace('block', 'source'), output.replace('block', 'source'), time);
    else if (Item.exists(input) && Item.exists(output)) oozeLabRecipe(input, output, null, null, time);
    else if (isTag) oozeLabRecipe(`#${input}`, output, null, null, time);
    else logError(`Ooze Lab recipe not found for input: ${input}, output: ${output}, ID: ${kubeRecipe.getId()}`);
  });

  assembler(16, 200)
    .itemOut('mi_tweaks:ooze_lab')
    .itemIn('8x justdirethings:gooblock_tier4')
    .itemIn('4x modern_industrialization:electronic_circuit')
    .itemIn('4x modern_industrialization:large_pump')
    .itemIn('modern_industrialization:advanced_machine_hull')
    .id('craftoria:mi/assembler/ooze_lab');

  event.shapeless('mi_tweaks:ooze_lab', 'mi_tweaks:batch_ooze_lab');
});
