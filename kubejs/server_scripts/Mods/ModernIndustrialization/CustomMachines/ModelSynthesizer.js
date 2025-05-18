ServerEvents.recipes(event => {
  const { model_synthesizer } = event.recipes.modern_industrialization;

  event.resourceManager.getResourceStack(ID.mc('hostilenetworks:data_models')).forEach(resource => {
    let source = resource.source();

    source.listResources('server_data', 'hostilenetworks', 'data_models', (_, io) => {
      let modelJson = bytesToJson(io.get().readAllBytes());
      let { entity, input, base_drop, fabricator_drops, sim_cost } = modelJson;
      let { namespace: entityNamespace, path: entityPath } = ID.mc(entity);
      if (!Platform.isLoaded(entityNamespace)) return;
      let modelData = entityNamespace === 'minecraft' ? entityPath : `${entityNamespace}/${entityPath}`;

      fabricator_drops.forEach((/** @type {{ id: Special.Item; count: number; }} */ drop) => {
        let output = Item.of(drop.id, drop.count);
        let baseDrop = Item.of(base_drop.id, base_drop.count || 1);
        if (!Item.exists(drop.id)) return;
        let recipe = model_synthesizer(getNearestMultipleOfSixteen(sim_cost / 8), 20 * 5)
          .itemIn(`hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:${modelData}"]`, 0)
          .itemIn(input)
          .itemOut(output);
        if (Item.exists(base_drop.id)) recipe.itemOut(baseDrop);
      });
    });

  });

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
});
