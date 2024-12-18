ClientEvents.generateAssets('after_mods', (e) => {
  global.infCells.forEach((cell) => {
    let strippedId;
    if (cell.type !== 'chemical') strippedId = cell.id.split(':')[1];
    else strippedId = cell.id.toLowerCase();

    e.json(`craftoria:models/block/drive/infinity_${strippedId}_cell`, {
      ambientocclusion: false,
      textures: {
        particle: `craftoria:block/drive/${strippedId}_cell`,
        cell: `craftoria:block/drive/${strippedId}_cell`,
      },
      elements: [
        {
          name: 'Cell Backdrop',
          from: [0, 0, 0],
          to: [6, 2, 2],
          rotation: {angle: 0, axis: 'y', origin: [9, 8, 8]},
          faces: {
            north: {uv: [0, 0, 6, 2], texture: '#cell', cullface: 'north'},
            up: {uv: [6, 0, 0, 2], texture: '#cell', cullface: 'north'},
            down: {uv: [6, 0, 0, 2], texture: '#cell', cullface: 'north'},
          },
        },
      ],
    });
  });
});
