StartupEvents.registry('item', e => {
  e.create('craftoria:logo').displayName('Craftoria');
  e.create('craftoria:completionist').displayName('Completionist Medal').rarity('Epic');
  e.create('craftoria:universal_press').displayName('Universal Press').tooltip('Seems to be too complex for an inscriber');

  ['Helmet', 'Chestplate', 'Leggings', 'Boots', 'Sword'].forEach(mold => {
    e.create(`craftoria:quantum_${mold.toLowerCase()}_mold`).displayName(`${mold} Mold`).maxStackSize(1);
  });

  // Custom
  e.create('craftoria:flimsy_hammer')
    .displayName('Flimsy Hammer')
    .tag('modern_industrialization:forge_hammer_tools')
    .rarity('Common')
    .maxDamage(60)
    .unstackable()
    .parentModel('minecraft:item/handheld');

  e.create('craftoria:ice_essence')
    .displayName('§bEssence of Ice')
    .tooltip('Dropped by the Apothic Maledictus in the Trial of Awaken gateway.');
  e.create('craftoria:fire_essence')
    .displayName('§6Essence of Fire')
    .tooltip('Dropped by the Apothic Ignis in the Trial of Awaken gateway.');
  e.create('craftoria:nature_essence')
    .displayName('§2Essence of Nature')
    .tooltip('Dropped by the Apothic Ancient Remnant in the Trial of Awaken gateway.');
  e.create('craftoria:dark_essence')
    .displayName('§5Essence of Darkness')
    .tooltip('Dropped by the Apothic Ender Guardian in the Trial of Awaken gateway.');

  e.create('craftoria:eternal').displayName('§5Eternal').rarity('Epic');
  e.create('craftoria:radonium').displayName('§aRadonium');
  e.create('craftoria:cosmic_matter')
    .displayName('§dCosmic Matter')
    .tag('modern_industrialization:replicator_blacklist')
    .tag('craftoria:replicator_1_blacklist')
    .rarity('Epic');
  e.create('craftoria:cosmic_injector')
    .displayName('§dCosmic Injector')
    .tag('modern_industrialization:replicator_blacklist')
    .tag('craftoria:replicator_1_blacklist')
    .rarity('Epic');
  e.create('craftoria:garlic_bread')
    .displayName('Garlic Bread')
    .food(food => {
      food.nutrition(3).saturation(1).eatSeconds(3);
    });
  e.create('craftoria:wardens_meat')
    .displayName("Warden's Meat")
    .food(food => {
      food.nutrition(4).saturation(0.5).eatSeconds(3);
      food.effect('minecraft:wither', 3600, 2, 1);
      food.effect('minecraft:poison', 3600, 2, 1);
      food.effect('minecraft:hunger', 3600, 3, 1);
      food.effect('minecraft:mining_fatigue', 3600, 9, 1);
    })
    .rarity('Epic')
    .tag('c:hidden_from_recipe_viewers')
    .texture('minecraft:item/brick');

  // Dev Items

  /**
   * Used for generating code for a custom MI multiblock.
   * Usage:
   * Build the multiblock structure in-game,
   * use any controller block as a placeholder,
   * right-click the bottom left corner of the multiblock with this item,
   * do the same for the top right corner but while sneaking,
   * then right-click the item while not looking at a block to generate the code.
   * The code will be printed to `server.log`, as well as a short clickable message which will copy the code to clipboard.
   */
  e.create('craftoria:multiblock_generator')
    .texture('craftoria:item/dev')
    .unstackable();
});

ItemEvents.modification(event => {
  const pelletsEdible = [
    'mekanism:pellet_plutonium',
    'mekanism:pellet_polonium',
    'mekanism:pellet_antimatter',
    'mekanism:yellow_cake_uranium',
  ];

  pelletsEdible.forEach(pellet => {
    event.modify(pellet, item => {
      item.food = {
        nutrition: 1,
        saturation: 0,
        eatSeconds: 2,
        canAlwaysEat: true,
      };
    });
  });
});
