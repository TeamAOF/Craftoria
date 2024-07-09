if (Platform.isLoaded("lootjs")) {
  LootJS.modifiers(e => {
    e.addTableModifier("mekanism:blocks/block_salt").replaceLoot("mekanism:salt", "modern_industrialization:salt_dust", true);

    let unifyDrops = [
      "tin",
      "lead",
      "uranium",
    ];

    unifyDrops.forEach(material => {
      e.addTableModifier(`mekanism:blocks/${material}_ore`).replaceLoot(`#c:raw_materials/${material}`, `modern_industrialization:raw_${material}`, true);
      e.addTableModifier(`mekanism:blocks/${material}_ore`).replaceLoot(`#c:ores/${material}`, `modern_industrialization:${material}_ore`, true);
      e.addTableModifier(`mekanism:blocks/deepslate_${material}_ore`).replaceLoot(`#c:raw_materials/${material}`, `modern_industrialization:raw_${material}`, true);
      e.addTableModifier(`mekanism:blocks/deepslate_${material}_ore`).replaceLoot(`#c:ores/${material}`, `modern_industrialization:deepslate_${material}_ore`, true);
    });

    e.addTableModifier("occultism:blocks/silver_ore").replaceLoot("#c:raw_materials/silver", "modern_industrialization:raw_silver", true);
    e.addTableModifier("occultism:blocks/silver_ore_deepslate").replaceLoot("#c:raw_materials/silver", "modern_industrialization:raw_silver", true);
  });
}