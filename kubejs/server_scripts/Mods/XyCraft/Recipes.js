ServerEvents.recipes(e => {
  e.remove({ mod: 'xycraft_world', output: '#c:ingots/aluminum' });
  e.remove({ mod: 'xycraft_machines', output: '#c:dusts/aluminum' });
  e.remove({ mod: 'xycraft_machines', output: '#c:ingots/aluminum' });

  const mods = [
    'xycraft',
    'xycraft_core',
    'xycraft_machines',
    'xycraft_override',
    'xycraft_world',
  ];

  const types = [
    'ingot',
    'nugget',
  ];

  for (let mod of mods) {
    for (let type of types) {
      e.replaceInput({ mod: mod }, `#c:${type}s/aluminum`, `#c:${type}s/iron`);
    }
  }

  e.shaped('2x xycraft_world:aluminum_torch', ['I', 'S'], { I: '#c:dusts/bauxite', S: 'stick' }).id('xycraft:shaped/aluminum_torch');
  e.stonecutting('xycraft_world:aluminum_bricks', '#c:ingots/iron').id('xycraft:shaped/aluminum_bricks');
});
