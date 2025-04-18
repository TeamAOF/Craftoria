ServerEvents.tags('block', e => {
  global.customMIMachines.forEach(machine => {
    e.add('minecraft:mineable/pickaxe', `modern_industrialization:${machine.id}`);
    e.add('minecraft:needs_stone_tool', `modern_industrialization:${machine.id}`);
  });
});

LootJS.lootTables(e => {
  global.customMIMachines.forEach(machine => {
    e.create(`${machine.mod ?? 'modern_industrialization'}:blocks/${machine.id}`)
      .createPool()
      .addEntry(`${machine.mod ?? 'modern_industrialization'}:${machine.id}`);
  });
});
