
ServerEvents.recipes(event => {
  
  // Obsidian Dust
  miMacerator(event, ["minecraft:obsidian", 1], [["mekanism:dust_obsidian", 4]], 2, 200);

  // Ores > Raw
  miMacerator(event, ["c:ores/silver", 1], [["modern_industrialization:raw_silver", 3]], 2, 200);
});