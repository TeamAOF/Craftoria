ServerEvents.tags('block', e => {
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    let block = `${machine.mod ?? 'modern_industrialization'}:${id}`;
    e.add('minecraft:mineable/pickaxe', block);
    e.add('minecraft:needs_stone_tool', block);
  }

  for (let [id, hatch] of Object.entries(global.customMIHatches)) {
    let { types } = hatch;
    Object.keys(types).forEach(type => {
      ['input', 'output'].forEach(io => {
        let blockPath = `${id}_${type}_${io}_hatch`;
        e.add('minecraft:mineable/pickaxe', `modern_industrialization:${blockPath}`);
        e.add('minecraft:needs_stone_tool', `modern_industrialization:${blockPath}`);
      });
    });
  }
});

LootJS.lootTables(e => {
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    e.create(`${machine.mod ?? 'modern_industrialization'}:blocks/${id}`)
      .createPool()
      .addEntry(`${machine.mod ?? 'modern_industrialization'}:${id}`);
  }

  for (let [id, hatch] of Object.entries(global.customMIHatches)) {
    let { types } = hatch;
    Object.keys(types).forEach(type => {
      ['input', 'output'].forEach(io => {
        let blockPath = `${id}_${type}_${io}_hatch`;
        e.create(`modern_industrialization:blocks/${blockPath}`).createPool().addEntry(`modern_industrialization:${blockPath}`);
      });
    });
  }
});
