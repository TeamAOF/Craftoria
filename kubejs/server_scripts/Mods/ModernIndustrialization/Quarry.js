////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {
  let miQuarryRecipeIDs = [];

  event.forEachRecipe({ type: "modern_industrialization:quarry" }, recipe => {
    let id = `${recipe.id}`;
    if (!id.includes("modern_industrialization:quarry/")) return;
    miQuarryRecipeIDs.push(id);
  });

  /**
   * Modern Industrialization Quarry Recipe
   * @param {Array} input Add the input item, amount and probability(1 being 100%, 0.01 being 1%) as an array.
   * @param {Array} outputs Add the output items, amount and probability(1 being 100%, 0.01 being 1%) as an array of arrays.
   * @param {int} eu EU/t consumed by the machine.
   * @param {int} duration Duration of the recipe in ticks.
   * @param {boolean} overwrite Should the recipe overwrite the existing one. (Default: true) Usefull for updating recipes.
   */
  let MIQuarry = (input, outputs, eu, duration, overwrite) => {
    let recipe = {
      type: "modern_industrialization:quarry",
      eu: eu,
      duration: duration,
      item_inputs: {},
      item_outputs: []
    };
    if (input.length != 3 || outputs.length == 0) {
      console.error(`Invalid Quarry Recipe: ${input[0]} is invalid, check the recipe format.`);
      return;
    }
    recipe.item_inputs.item = input[0];
    recipe.item_inputs.amount = input[1];
    recipe.item_inputs.probability = input[2];

    outputs.forEach(output => {
      if (output.length != 3) {
        console.error(`Invalid Quarry Recipe: ${input[0]}. ${output[0]} is invalid, check the recipe format.`);
        return;
      }

      if (Item.exists(output[0]) == false) {
        console.warn(`Invalid Quarry Recipe: ${input[0]}. ${output[0]} does not exist.`);
        return;
      }

      let item = {
        item: output[0],
        amount: output[1],
        probability: output[2]
      };
      recipe.item_outputs.push(item);
    });

    overwrite = overwrite == undefined ? true : overwrite;
    if (overwrite) {
      let tempID = `modern_industrialization:quarry/${input[0].split(":")[1]}`;
      tempID = tempID.replace("_drill", "");
      miQuarryRecipeIDs.forEach(recipe => {
        if (!recipe.includes(tempID)) return;

        //console.log(`Removing Recipe: ${tempID}`);
        event.remove({ id: tempID });
      });
    }

    event.custom(recipe).id(`craftoria:modern_industrialization/quarry/${input[0].split(":")[1]}`);
  };

  // Steel Drill
  MIQuarry(["modern_industrialization:steel_drill", 1, 0.04], [
    ["modern_industrialization:antimony_ore", 1, 0.2],
    ["minecraft:diamond_ore", 1, 0.12],
    ["minecraft:lapis_ore", 1, 0.1],
    ["modern_industrialization:lead_ore", 1, 0.25],
    ["modern_industrialization:nickel_ore", 1, 0.18],
    ["modern_industrialization:bauxite_ore", 1, 0.4],
    ["modern_industrialization:salt_ore", 1, 0.12],
    ["minecraft:emerald_ore", 1, 0.1],
    ["modern_industrialization:quartz_ore", 1, 0.2],
    ["powah:uraninite_ore", 1, 0.08],
    ["actuallyadditions:black_quartz_ore", 1, 0.15],
  ], 12, 600);

  // Gold Drill
  MIQuarry(["modern_industrialization:gold_drill", 1, 0.1], [
    ["minecraft:netherrack", 32, 0.5],
    ["minecraft:blackstone", 16, 0.25],
    ["minecraft:basalt", 16, 0.25],
    ["minecraft:soul_soil", 20, 0.1],
    ["minecraft:magma_block", 5, 0.1],
    ["minecraft:soul_sand", 20, 0.25],
    ["minecraft:ancient_debris", 1, 0.05],
    ["minecraft:glowstone", 4, 0.15],
    ["minecraft:nether_quartz_ore", 6, 0.15],
    ["minecraft:nether_gold_ore", 1, 0.25]
  ], 8, 600);

  // Bronze Drill
  MIQuarry(["modern_industrialization:bronze_drill", 1, 0.04], [
    ["minecraft:iron_ore", 1, 0.4],
    ["minecraft:coal_ore", 1, 0.4],
    ["modern_industrialization:lignite_coal_ore", 1, 0.24],
    ["minecraft:copper_ore", 1, 0.2],
    ["modern_industrialization:tin_ore", 1, 0.3],
    ["occultism:silver_ore", 1, 0.15],
    ["minecraft:gold_ore", 1, 0.15],
    ["minecraft:redstone_ore", 1, 0.2],
    ["mekanism:osmium_ore", 1, 0.12]
  ], 4, 600);

  // Titanium Drill
  MIQuarry(["modern_industrialization:titanium_drill", 1, 0.04], [
    ["modern_industrialization:uranium_ore", 1, 0.2],
    ["modern_industrialization:iridium_ore", 1, 0.05],
    ["powah:uraninite_ore_dense", 1, 0.02],
    ["mekanism:fluorite_ore", 1, 0.3],
    ["irons_spellbooks:mithril_ore", 1, 0.02]
  ], 128, 600);

  // Stainless Steel Drill
  MIQuarry(["modern_industrialization:stainless_steel_drill", 1, 0.04], [
    ["modern_industrialization:titanium_ore", 1, 0.15],
    ["modern_industrialization:tungsten_ore", 1, 0.2],
    ["modern_industrialization:monazite_ore", 1, 0.25],
    ["modern_industrialization:platinum_ore", 1, 0.12]
  ], 32, 600);
});
