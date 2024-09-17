ServerEvents.recipes((e) => {
  /**
   * @author WhitePhantom
   * @description Apothic Spawners modifier recipe
   * @param {String} item Item used for the modifier. Required.
   * @param {Object} main Stats for the main recipe. {value, limit} Required.
   * @param {Object} inverse Stats for the inverse recipe. {value, limit} Required
   * @param {String} type Type of the modifier. Required.
   */
  let modifier = (item, main, inverse, type) => {
    let recipe = {
      type: 'apothic_spawners:spawner_modifier',
      mainhand: {},
      stat_changes: [],
    };
    let recipeInverse = {
      type: 'apothic_spawners:spawner_modifier',
      mainhand: {},
      offhand: Ingredient.of('minecraft:quartz').toJson(),
      stat_changes: [],
    };

    recipe.mainhand = Ingredient.of(item).toJson();
    recipeInverse.mainhand = Ingredient.of(item).toJson();

    recipe.stat_changes.push({
      type: `apothic_spawners:${type}`,
      value: main.value,
    });
    if (main.limit)
      if (main.limit.includes('min:')) recipe.stat_changes[0].min = parseInt(main.limit.split(':')[1]);
      else recipe.stat_changes[0].max = parseInt(main.limit.split(':')[1]);
    recipeInverse.stat_changes.push({
      type: `apothic_spawners:${type}`,
      value: inverse.value,
    });
    if (inverse.limit)
      if (inverse.limit.includes('min:')) recipeInverse.stat_changes[0].min = parseInt(inverse.limit.split(':')[1]);
      else recipeInverse.stat_changes[0].max = parseInt(inverse.limit.split(':')[1]);

    e.remove({ id: `apothic_spawners:spawner_modifiers/${type}` });
    e.remove({ id: `apothic_spawners:spawner_modifiers/_inverse/${type}` });
    e.custom(recipe).id(`craftoria:apothic_spawners/spawner_modifier/${type}`);
    e.custom(recipeInverse).id(`craftoria:apothic_spawners/spawner_modifier/${type}_inverse`);
  };

  // Examples, works with either tags or items
  // modifier("#c:ingots/iron", { value: 10, limit: "min:10" }, { value: -10, limit: "max:10" }, "min_delay");
  // modifier("#c:gems/diamond", { value: 10, limit: "min:10" }, { value: -10, limit: "max:10" }, "max_delay");

  modifier('minecraft:sugar', { value: -10, limit: 'min:100' }, { value: 10, limit: 'max:1600' }, 'min_delay');
  modifier('minecraft:clock', { value: -10, limit: 'min:100' }, { value: 10, limit: 'max:1600' }, 'max_delay');
  modifier('minecraft:fermented_spider_eye', { value: 1, limit: 'max:8' }, { value: -1, limit: 'min:1' }, 'spawn_count');
});
