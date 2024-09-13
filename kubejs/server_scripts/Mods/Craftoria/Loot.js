LootJS.modifiers((e) => {
  e.addEntityModifier(['minecraft:cow', 'minecraft:mooshroom']).removeLoot(['artifacts:everlasting_beef', 'artifacts:eternal_steak']);
  e.addTableModifier(/minecraft:chests\/.*/).removeLoot(['artifacts:everlasting_beef', 'artifacts:eternal_steak']);
});
