ServerEvents.recipes(e => {
  ['duckling:pumpkin_pie', 'minecraft:pumpkin_pie', 'actuallyadditions:rice_dough'].forEach(id => {
    e.remove({ id: id });
  });

  e.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables');

  e.shapeless('minecraft:pumpkin_pie', ['#c:crops/pumpkin', '#c:sugars', '#c:eggs']).id('minecraft:pumpkin_pie');
  e.shaped('actuallyadditions:rice_dough', ['RR', 'R '], {
    R: '#c:crops/rice',
  }).id('craftoria:rice_dough');

  e.replaceInput({ id: 'occultism:crushing/coal_dust_from_tag' }, '#minecraft:coals', 'minecraft:coal');
});
