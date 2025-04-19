LootJS.lootTables(event => {
  for (let entry in global.customOres) {
    for (let oreId of Object.values(getCustomOreVariants(entry))) {
      createLootTable(oreId, `raw_${entry}`);
    }
  }

  /**
   * Creates a loot table for the specified ore type.
   * @param {string} oreId
   * @param {string} rawOre
   */
  function createLootTable(oreId, rawOre) {
    event
      .getBlockTable(oreId)
      .clear()
      .firstPool(pool => {
        pool.rolls(1);
        pool.addEntry(LootEntry.of(oreId).matchTool(ItemFilter.hasEnchantment('minecraft:silk_touch')));
        pool.addEntry(
          LootEntry.of(`craftoria:${rawOre}`)
            .applyOreBonus('minecraft:fortune')
            .matchTool(ItemFilter.hasEnchantment('minecraft:silk_touch').negate())
            .survivesExplosion()
        );
      });
  }
});
