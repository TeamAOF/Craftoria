ServerEvents.tags('block', e => {
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    let block = `${machine.mod ?? 'modern_industrialization'}:${id}`;
    e.add('minecraft:mineable/pickaxe', block);
    e.add('minecraft:needs_stone_tool', block);
  }
});

LootJS.lootTables(e => {
  for (let [id, machine] of Object.entries(global.customMIMachines)) {
    let block = `${machine.mod ?? 'modern_industrialization'}:${id}`;
    e.create(block, 'block').firstPool().addEntry(block);
  }
});
