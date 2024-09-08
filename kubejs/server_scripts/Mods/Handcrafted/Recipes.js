

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  let wool = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
  ];

  wool.forEach((wool) => {
    event.remove({ output: 'handcrafted:' + wool + '_sheet' });

    // Sheets
    event.shaped('handcrafted:' + wool + '_sheet', [
      'AAA',
    ], {
      A: 'minecraft:' + wool + '_wool',
    })
  });
});
