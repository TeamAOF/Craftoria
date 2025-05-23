ServerEvents.recipes(e => {
  const mekanism = MekanismHelper(e);
  // All logs compat
  let madeCuttingRecipeFor = [];

  const skippedModIDs = ['minecraft', 'biomeswevegone'];

  Ingredient.of('#minecraft:logs').itemIds.forEach(id => {
    if ((!id.includes('log') && !id.includes('stem')) || id.includes('stripped')) return;
    const { modID, itemId } = { modID: id.split(':')[0], itemId: id.split(':')[1] };
    if (skippedModIDs.includes(modID)) return;

    if (id.includes('archwood')) {
      if (madeCuttingRecipeFor.includes('ars_nouveau:archwood_planks')) return;
      // Special case for Ars Nouveau
      mekanism.sawing('6x ars_nouveau:archwood_planks', '#c:logs/archwood', 'mekanism:sawdust', 0.25);
      mekanism.sawing('ars_nouveau:archwood_planks', 'ars_nouveau:archwood_pressure_plate', '2x mekanism:sawdust', 0.25);
      mekanism.sawing('2x ars_nouveau:archwood_planks', 'ars_nouveau:archwood_fence_gate', '4x minecraft:stick', 1);
      mekanism.sawing('2x ars_nouveau:archwood_planks', 'ars_nouveau:archwood_door');
      mekanism.sawing('3x ars_nouveau:archwood_planks', 'ars_nouveau:archwood_trapdoor');

      madeCuttingRecipeFor.push('ars_nouveau:archwood_planks');
      return;
    }

    const type = itemId.replace('_log', '');
    const baseID = `${modID}:${type}`;
    const strippedLog = `${modID}:stripped_${type}`;
    const wood = `${baseID}_wood`;
    const strippedWood = strippedLog.replace('log', 'wood');
    const plank = id.replace('log', 'planks');
    let logTag = `#${baseID}_logs`;

    if (madeCuttingRecipeFor.includes(plank)) return;
    if (modID === 'twilightforest' && Ingredient.of(logTag).empty) logTag = `#twilightforest:${type}wood_logs`;

    if (Item.exists(plank)) {
      if (!Ingredient.of(logTag).empty) mekanism.sawing(`6x ${plank}`, logTag, 'mekanism:sawdust', 0.25);
      else {
        mekanism.sawing(`6x ${plank}`, id, 'mekanism:sawdust', 0.25);
        if (Item.exists(strippedLog)) mekanism.sawing(`6x ${plank}`, strippedLog, 'mekanism:sawdust', 0.25);
        if (Item.exists(wood)) mekanism.sawing(`6x ${plank}`, wood, 'mekanism:sawdust', 0.25);
        if (Item.exists(strippedWood)) mekanism.sawing(`6x ${plank}`, strippedWood, 'mekanism:sawdust', 0.25);
      }
      if (Item.exists(`${baseID}_hanging_sign`)) mekanism.sawing(`2x ${plank}`, `${baseID}_hanging_sign`, 'mekanism:sawdust', 0.5);
      if (Item.exists(`${baseID}_pressure_plate`)) mekanism.sawing(`${plank}`, `${baseID}_pressure_plate`, '2x mekanism:sawdust', 0.25);
      if (Item.exists(`${baseID}_fence_gate`)) mekanism.sawing(`2x ${plank}`, `${baseID}_fence_gate`, '4x minecraft:stick', 1);
      if (Item.exists(`${baseID}_door`)) mekanism.sawing(`2x ${plank}`, `${baseID}_door`);
      if (Item.exists(`${baseID}_trapdoor`)) mekanism.sawing(`3x ${plank}`, `${baseID}_trapdoor`);

      madeCuttingRecipeFor.push(plank);
    }
  });
});
