// //////////////////////
// / Made by Team AOE ///
// //////////////////////

ServerEvents.recipes(event => {
  const { quarry } = event.recipes.modern_industrialization;

  // Copper Drill
  quarry(4, 600)
    .itemIn('modern_industrialization:copper_drill', 0.1)
    .itemOut('32x minecraft:cobblestone', 0.5)
    .itemOut('16x minecraft:diorite', 0.25)
    .itemOut('16x minecraft:andesite', 0.25)
    .itemOut('16x minecraft:granite', 0.25)
    .itemOut('10x minecraft:dirt', 0.5)
    .itemOut('10x minecraft:gravel', 0.5)
    .itemOut('16x minecraft:cobbled_deepslate', 0.25)
    .itemOut('16x minecraft:tuff', 0.25)
    .itemOut('16x xycraft_world:kivi', 0.25)
    .id('modern_industrialization:quarry/copper');

  // Steel Drill
  quarry(12, 600)
    .itemIn('modern_industrialization:steel_drill', 0.04)
    .itemOut('modern_industrialization:antimony_ore', 0.2)
    .itemOut('minecraft:diamond_ore', 0.12)
    .itemOut('minecraft:lapis_ore', 0.1)
    .itemOut('modern_industrialization:lead_ore', 0.25)
    .itemOut('modern_industrialization:nickel_ore', 0.18)
    .itemOut('modern_industrialization:bauxite_ore', 0.4)
    .itemOut('modern_industrialization:salt_ore', 0.12)
    .itemOut('minecraft:emerald_ore', 0.1)
    .itemOut('modern_industrialization:quartz_ore', 0.2)
    .itemOut('powah:uraninite_ore', 0.08)
    .itemOut('actuallyadditions:black_quartz_ore', 0.15)
    .itemOut('create:zinc_ore', 0.2)
    .id('modern_industrialization:quarry/steel');

  // Bronze Drill
  quarry(4, 600)
    .itemIn('modern_industrialization:bronze_drill', 0.04)
    .itemOut('minecraft:iron_ore', 0.4)
    .itemOut('minecraft:coal_ore', 0.4)
    .itemOut('modern_industrialization:lignite_coal_ore', 0.24)
    .itemOut('minecraft:copper_ore', 0.2)
    .itemOut('modern_industrialization:tin_ore', 0.3)
    .itemOut('occultism:silver_ore', 0.15)
    .itemOut('minecraft:gold_ore', 0.15)
    .itemOut('minecraft:redstone_ore', 0.2)
    .itemOut('mekanism:osmium_ore', 0.12)
    .itemOut('xycraft_world:xychorium_ore_stone_blue', 0.2)
    .itemOut('xycraft_world:xychorium_ore_stone_green', 0.2)
    .itemOut('xycraft_world:xychorium_ore_stone_red', 0.2)
    .itemOut('xycraft_world:xychorium_ore_stone_dark', 0.2)
    .itemOut('xycraft_world:xychorium_ore_stone_light', 0.2)
    .id('modern_industrialization:quarry/bronze');

  // Titanium Drill
  quarry(128, 600)
    .itemIn('modern_industrialization:titanium_drill', 0.04)
    .itemOut('modern_industrialization:uranium_ore', 0.2)
    .itemOut('modern_industrialization:iridium_ore', 0.05)
    .itemOut('powah:uraninite_ore_dense', 0.02)
    .itemOut('mekanism:fluorite_ore', 0.3)
    .itemOut('irons_spellbooks:mithril_ore', 0.02)
    .itemOut('replication:deepslate_replica_ore', 0.02)
    .id('modern_industrialization:quarry/titanium');
});
