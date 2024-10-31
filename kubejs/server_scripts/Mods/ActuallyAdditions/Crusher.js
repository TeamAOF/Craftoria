ServerEvents.recipes(event => {

  // adds a recipe that crushes a cobblestone into 2 gravel
  // uses the default chance of 100%
  // handles both gravel blocks as one output

  // Modern Industrialization
  const mi_ores = [
    "antimony",
    "iridium",
    "lead",
    "nickel",
    "silver",
    "tin",
    "tungsten",
    "platinum",
    "titanium",
    "uranium"
  ];

  mi_ores.forEach((item) => {
    event.recipes.actuallyadditions.crushing("2x modern_industrialization:raw_" + item, "#c:ores/" + item)
  });

  // Mekanism
  event.recipes.actuallyadditions.crushing("2x mekanism:raw_osmium", 'mekanism:osmium_ore')
  event.recipes.actuallyadditions.crushing("5x mekanism:dust_fluorite", 'mekanism:fluorite_ore')
})