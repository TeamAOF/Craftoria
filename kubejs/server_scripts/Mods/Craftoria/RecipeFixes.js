ServerEvents.recipes((e) => {
  e.shaped('cursedearth:blessed_flower', ['FFF', 'FWF', 'FFF'], {
    F: Ingredient.of('#minecraft:flowers').except('minecraft:wither_rose'),
    W: 'minecraft:wither_rose',
  }).id('cursedearth:blessed_flower');

  e.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables');
});
