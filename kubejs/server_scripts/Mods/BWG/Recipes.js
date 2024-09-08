

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  let bwg = [
    'aspen',
    'baobab',
    'blue_enchanted',
    'cika',
    'cypress',
    'ebony',
    'fir',
    'green_enchanted',
    'holly',
    'ironwood',
    'jacaranda',
    'mahogany',
    'maple',
    'palm',
    'pine',
    'rainbow_eucalyptus',
    'redwood',
    'sakura',
    'skyris',
    'willow',
    'white_mangrove',
    'witch_hazel',
    'zelkova'
  ];

  bwg.forEach((bwg) => {
    event.shaped('3x biomeswevegone:' + bwg + '_door', [
      'AA',
      'AA',
      'AA'
    ], {
      A: 'biomeswevegone:' + bwg + '_planks',
    })
  });

  bwg.forEach((bwg) => {
    event.shaped('2x biomeswevegone:' + bwg + '_trapdoor', [
      'AAA',
      'AAA'
    ], {
      A: 'biomeswevegone:' + bwg + '_planks',
    })
  });
});
