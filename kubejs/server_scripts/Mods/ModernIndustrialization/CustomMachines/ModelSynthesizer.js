ServerEvents.recipes(event => {
  const { model_synthesizer, assembler } = event.recipes.modern_industrialization;

  let dataModels = globalDataModels;

  event.resourceManager.getResourceStack(ID.mc('hostilenetworks:data_models')).forEach(resource => {
    let source = resource.source();

    source.listResources('server_data', 'hostilenetworks', 'data_models', (resLoc, io) => {
      let modelJson = bytesToJson(io.get().readAllBytes());
      let { entity, input, base_drop, fabricator_drops, sim_cost } = modelJson;
      let { namespace: entityNamespace, path: entityPath } = ID.mc(entity);
      if (dataModels[ID.mc(entity)]) return; // Skip if we found it in the global data models (new or overridden models by us)
      if (!Platform.isLoaded(entityNamespace)) return;
      let modelLoc = `${resLoc.namespace}:${resLoc.path.replace('data_models/', '').replace('.json', '')}`;

      fabricator_drops.forEach((/** @type {{ id: Special.Item; count: number; }} */ drop) => {
        if (!Item.exists(drop.id)) return;
        let output = Item.of(drop.id, drop.count);
        let baseDrop = Item.of(base_drop.id, base_drop.count || 1);
        let recipe = model_synthesizer(getNearestMultipleOfSixteen(sim_cost / 8), 20 * 5)
          .itemIn(`hostilenetworks:data_model[hostilenetworks:data_model="${modelLoc}"]`, 0)
          .itemIn(input)
          .itemOut(output);
        if (Item.exists(base_drop.id)) recipe.itemOut(baseDrop);
        recipe.id(`craftoria:mi/model_synthesizer/${entityPath}/${ID.path(output)}`);
      });
    });
  });

  for (let [entity, data] of Object.entries(dataModels)) {
    let { fabricatorDrops, baseDrop, simCost } = data;
    let { namespace: entityNamespace, path: entityPath } = ID.mc(entity);
    if (!Platform.isLoaded(entityNamespace)) continue;
    let modelData = entityNamespace === 'minecraft' ? entityPath : `${entityNamespace}/${entityPath}`;

    fabricatorDrops.forEach((/** @type {$ItemStack_} */ drop) => {
      if (drop.includes('#')) {
        let drops = [];

        Ingredient.of(drop)
          .except('#almostunified:hide')
          .itemIds.forEach(drop => {
            const [count] = drop.split('x ');
            drops.push({ id: drop, count: parseInt(count) || 1 });
          });

        drops.forEach(drop => {
          if (!Item.exists(drop.id)) return;
          let output = Item.of(drop.id, drop.count);
          let recipe = model_synthesizer(getNearestMultipleOfSixteen(simCost / 8), 20 * 5)
            .itemIn(`hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:${modelData}"]`, 0)
            .itemIn(Ingredient.of(data.input || 'hostilenetworks:prediction_matrix', 1))
            .itemOut(output);
          if (Item.exists(baseDrop)) recipe.itemOut(baseDrop);
          recipe.id(`craftoria:mi/model_synthesizer/${entityPath}/${ID.path(output)}`);
        });
      } else {
        let output = Item.of(drop);
        if (!Item.exists(output.id) || output.id === 'minecraft:air') return;
        let recipe = model_synthesizer(getNearestMultipleOfSixteen(simCost / 8), 20 * 5)
          .itemIn(`hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:${modelData}"]`, 0)
          .itemIn(Ingredient.of(data.input || 'hostilenetworks:prediction_matrix', 1))
          .itemOut(output);
        if (Item.exists(baseDrop)) recipe.itemOut(baseDrop);
        recipe.id(`craftoria:mi/model_synthesizer/${entityPath}/${ID.path(output)}`);
      }
    });
  }


  /** @param {integer[]} bytes  */
  function bytesToJson(bytes) {
    let json = '';
    for (let i = 0; i < bytes.length; i++) {
      json += String.fromCharCode(bytes[i]);
    }
    return JSON.parse(json);
  }

  /** @param {number} number */
  function getNearestMultipleOfSixteen(number) {
    let multiple = Math.ceil(number / 16) * 16;
    if (multiple < 16) return 16;
    return multiple;
  }

  assembler(16, 200)
    .itemOut('mi_tweaks:model_synthesizer')
    .itemIn('8x hostilenetworks:sim_chamber')
    .itemIn('8x hostilenetworks:loot_fabricator')
    .itemIn('4x modern_industrialization:electronic_circuit')
    .itemIn('4x modern_industrialization:robot_arm')
    .itemIn('modern_industrialization:advanced_machine_hull')
    .id('craftoria:mi/assembler/model_synthesizer');

  event.shapeless('mi_tweaks:model_synthesizer', 'mi_tweaks:batch_model_synthesizer');
});
