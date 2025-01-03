ServerEvents.recipes((e) => {
  ['duckling:pumpkin_pie', 'minecraft:pumpkin_pie', 'actuallyadditions:rice_dough'].forEach((id) => {
    e.remove({id: id});
  });

  e.shaped('cursedearth:blessed_flower', ['FFF', 'FWF', 'FFF'], {
    F: Ingredient.of('#minecraft:flowers').except('minecraft:wither_rose'),
    W: 'minecraft:wither_rose',
  }).id('cursedearth:blessed_flower');

  e.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables');

  e.shapeless('minecraft:pumpkin_pie', ['#c:crops/pumpkin', '#c:sugars', '#c:eggs']).id('minecraft:pumpkin_pie');
  e.shaped('actuallyadditions:rice_dough', ['RR', 'R '], {
    R: '#c:crops/rice',
  }).id('craftoria:rice_dough');
});
