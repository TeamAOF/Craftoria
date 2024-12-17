ServerEvents.recipes((e) => {
  // All logs compat
  let madeCuttingRecipeFor = [];

  let mekSaw = (output, input, secondary, chance) => {
    let recipe = {
      type: 'mekanism:sawing',
      input: Ingredient.of(input).toJson(),
      main_output: Item.of(output).toJson(),
    };
    if (secondary) {
      recipe.secondary_output = Item.of(secondary).toJson();
      if (chance) recipe.secondary_chance = chance;
      else recipe.secondary_chance = 0.25;
    }

    e.custom(recipe).id(`craftoria:mekanism/sawing/${input.split(':')[1]}_to_${output.split(':')[1]}`);
  };

  Ingredient.of('#minecraft:logs').itemIds.forEach((id) => {
    if (id.includes('wood') || id.includes('stripped')) return;
    const modID = id.split(':')[0];

    if (modID === 'minecraft') return;

    if (id === 'biomeswevegone:florus_stem') {
      // Special case for Biomes We've Gone - Florus
      mekSaw('6x biomeswevegone:florus_planks', '#biomeswevegone:florus_logs', 'mekanism:sawdust', 0.25);
      mekSaw('2x biomeswevegone:florus_planks', 'biomeswevegone:florus_hanging_sign', 'mekanism:sawdust', 0.5);
      mekSaw('biomeswevegone:florus_planks', 'biomeswevegone:florus_pressure_plate', '2x mekanism:sawdust', 0.25);
      mekSaw('2x biomeswevegone:florus_planks', 'biomeswevegone:florus_fence_gate', '4x minecraft:stick', 1);
      mekSaw('2x biomeswevegone:florus_planks', 'biomeswevegone:florus_door');
      mekSaw('3x biomeswevegone:florus_planks', 'biomeswevegone:florus_trapdoor');
      return;
    } else if (modID === 'ars_nouveau') {
      if (madeCuttingRecipeFor.includes(`ars_nouveau:archwood_planks`)) return;
      // Special case for Ars Nouveau
      mekSaw(`6x ars_nouveau:archwood_planks`, '#c:logs/archwood', 'mekanism:sawdust', 0.25);
      mekSaw(`2x ars_nouveau:archwood_planks`, 'ars_nouveau:archwood_hanging_sign', 'mekanism:sawdust', 0.5);
      mekSaw(`ars_nouveau:archwood_planks`, 'ars_nouveau:archwood_pressure_plate', '2x mekanism:sawdust', 0.25);
      mekSaw(`2x ars_nouveau:archwood_planks`, 'ars_nouveau:archwood_fence_gate', '4x minecraft:stick', 1);
      mekSaw(`2x ars_nouveau:archwood_planks`, 'ars_nouveau:archwood_door');
      mekSaw(`3x ars_nouveau:archwood_planks`, 'ars_nouveau:archwood_trapdoor');

      madeCuttingRecipeFor.push(`ars_nouveau:archwood_planks`);
      return;
    }

    const trimmedID = id.split(':')[1].replace('_log', '');
    const baseID = `${modID}:${trimmedID}`;
    const strippedLog = `${modID}:stripped_${id.split(':')[1]}`;
    const wood = id.replace('log', 'wood');
    const strippedWood = strippedLog.replace('log', 'wood');
    const plank = id.replace('log', 'planks');

    if (!madeCuttingRecipeFor.includes(plank)) {
      if (Item.exists(plank)) {
        if (!Ingredient.of(`#${baseID}_logs`).empty) mekSaw(`6x ${plank}`, `#${baseID}_logs`);
        else {
          mekSaw(`6x ${plank}`, id, 'mekanism:sawdust', 0.25);
          if (Item.exists(strippedLog)) mekSaw(`6x ${plank}`, strippedLog, 'mekanism:sawdust', 0.25);
          if (Item.exists(wood)) mekSaw(`6x ${plank}`, wood, 'mekanism:sawdust', 0.25);
          if (Item.exists(strippedWood)) mekSaw(`6x ${plank}`, strippedWood, 'mekanism:sawdust', 0.25);
        }
        if (Item.exists(`${baseID}_hanging_sign`)) mekSaw(`2x ${plank}`, `${baseID}_hanging_sign`, 'mekanism:sawdust', 0.5);
        if (Item.exists(`${baseID}_pressure_plate`)) mekSaw(`${plank}`, `${baseID}_pressure_plate`, '2x mekanism:sawdust', 0.25);
        if (Item.exists(`${baseID}_fence_gate`)) mekSaw(`2x ${plank}`, `${baseID}_fence_gate`, '4x minecraft:stick', 1);
        if (Item.exists(`${baseID}_door`)) mekSaw(`2x ${plank}`, `${baseID}_door`);
        if (Item.exists(`${baseID}_trapdoor`)) mekSaw(`3x ${plank}`, `${baseID}_trapdoor`);

        madeCuttingRecipeFor.push(plank);
      }
    }
  });

  let modIDBlacklist = ['minecraft', 'chipped', 'mcwdoors', 'mcwtrpdoors', 'mcwfences', 'refurbished_furniture', 'framedblocks', 'occultism'];

  // Ingredient.of('#minecraft:hanging_signs').itemIds.forEach((id) => {
  //   const modID = id.split(':')[0];
  //   if (modIDBlacklist.includes(modID)) return;

  //   const plank = id.replace('hanging_sign', 'planks');
  //   mekSaw(`2x ${plank}`, id, 'mekanism:sawdust', 0.5);
  // });

  // Ingredient.of('#minecraft:wooden_pressure_plates').itemIds.forEach((id) => {
  //   const modID = id.split(':')[0];
  //   if (modIDBlacklist.includes(modID)) return;

  //   const plank = id.replace('wooden_pressure_plate', 'planks');
  //   mekSaw(`${plank}`, id, '2x mekanism:sawdust', 0.25);
  // });

  // Ingredient.of('#minecraft:fence_gates').itemIds.forEach((id) => {
  //   const modID = id.split(':')[0];
  //   if (modIDBlacklist.includes(modID)) return;

  //   const plank = id.replace('fence_gate', 'planks');
  //   mekSaw(`2x ${plank}`, id, '4x minecraft:stick', 1);
  // });

  // Ingredient.of('#minecraft:wooden_doors').itemIds.forEach((id) => {
  //   const modID = id.split(':')[0];
  //   if (modIDBlacklist.includes(modID)) return;

  //   const plank = id.replace('door', 'planks');
  //   mekSaw(`2x ${plank}`, id);
  // });

  // Ingredient.of('#minecraft:wooden_trapdoors').itemIds.forEach((id) => {
  //   const modID = id.split(':')[0];
  //   if (modIDBlacklist.includes(modID)) return;

  //   const plank = id.replace('trapdoor', 'planks');
  //   mekSaw(`3x ${plank}`, id);
  // });
});
