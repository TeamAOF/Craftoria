ServerEvents.recipes(e => {
  /**
   * Apothic Spawners modifier recipe
   * @param {$Ingredient_} item Item used for the modifier. Required.
   * @param {Object} stats Stats for the main recipe. {value, limit} Required.
   * @param {Special.ApothicSpawnersSpawnerStat} spawnerModifier Spawner modifier type. Required.
   * @example modifier("#c:ingots/iron", { value: 10, limit: "min:10" }, { value: -10, limit: "max:10" }, "min_delay");
   */
  let modifier = (item, stats, spawnerModifier) => {
    let recipe = {
      type: 'apothic_spawners:spawner_modifier',
      mainhand: Ingredient.of(item).toJson(),
      stat_changes: [],
    };

    let recipeInverse = JSON.parse(JSON.stringify(recipe));
    recipeInverse.offhand = Ingredient.of('minecraft:quartz').toJson();

    const keys = Object.keys(stats);
    if (keys.length == 3) {
      const [, secondKey, thirdKey] = keys;

      let recipeEntry = {
        type: spawnerModifier,
        value: stats.value,
      };
      recipeEntry[secondKey] = stats[secondKey];

      let recipeInverseEntry = {
        type: spawnerModifier,
        value: -stats.value,
      };
      recipeInverseEntry[thirdKey] = stats[thirdKey];

      recipe.stat_changes.push(recipeEntry);
      recipeInverse.stat_changes.push(recipeInverseEntry);
    } else {
      console.warn('Not enough keys in stats to proceed!');
      return;
    }

    const type = spawnerModifier.split(':')[1];
    const baseID = `craftoria:apothic_spawners/spawner_modifier/${type}`;
    e.remove({ id: `apothic_spawners:spawner_modifiers/${type}` });
    e.remove({ id: `apothic_spawners:spawner_modifiers/_inverse/${type}` });
    e.custom(recipe).id(baseID);
    e.custom(recipeInverse).id(`${baseID}_inverse`);
  };

  modifier('minecraft:sugar', { value: -10, min: 100, max: 1600 }, 'apothic_spawners:min_delay');
  modifier('minecraft:clock', { value: -10, min: 100, max: 1600 }, 'apothic_spawners:max_delay');
  modifier('minecraft:fermented_spider_eye', { value: 1, max: 8, min: 1 }, 'apothic_spawners:spawn_count');
});
