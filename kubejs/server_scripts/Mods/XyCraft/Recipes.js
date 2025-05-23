ServerEvents.recipes(e => {
  const mods = [
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

  e.shaped('2x xycraft_world:aluminum_torch', ['I', 'S'], { I: '#c:ingots/aluminum', S: 'stick' }).id('xycraft_world:shaped/aluminum_torch');
  e.stonecutting('xycraft_world:aluminum_bricks', '#c:ingots/iron').id('xycraft_world:shaped/aluminum_bricks');
  e.remove([{ id: 'xycraft_world:smelting/aluminum' }, { id: 'xycraft_world:blasting/aluminum' }]);
});
