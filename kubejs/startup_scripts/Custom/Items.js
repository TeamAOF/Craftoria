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
    .unstackable();

  e.create('craftoria:ice_essence').displayName('§bEssence of Ice').tooltip('Dropped by the Apothic Lich in the Trial of Awaken gateway.');
  e.create('craftoria:fire_essence')
    .displayName('§6Essence of Fire')
    .tooltip('Dropped by the Apothic Gauntlet in the Trial of Awaken gateway.');
  e.create('craftoria:nature_essence')
    .displayName('§2Essence of Nature')
    .tooltip('Dropped by the Apothic Void Blossom in the Trial of Awaken gateway.');
  e.create('craftoria:dark_essence')
    .displayName('§5Essence of Darkness')
    .tooltip('Dropped by the Apothic Obsidilith in the Trial of Awaken gateway.');

  e.create('craftoria:eternal').displayName('§5Eternal').rarity('Epic');
  e.create('craftoria:radonium').displayName('§aRadonium');
  e.create('craftoria:cosmic_matter')
    .displayName('§dCosmic Matter')
    .tag(`modern_industrialization:replicator_blacklist`)
    .tag(`craftoria:replicator_1_blacklist`)
    .rarity('Epic');
  e.create('craftoria:cosmic_injector')
    .displayName('§dCosmic Injector')
    .tag(`modern_industrialization:replicator_blacklist`)
    .tag(`craftoria:replicator_1_blacklist`)
    .rarity('Epic');
  e.create('craftoria:garlic_bread')
		.displayName('Garlic Bread')
  	.food(food => { food.saturation(1).nutrition(6).eatSeconds(2)});
});

ItemEvents.modification(event => {

  const pelletsEdible = [
    'mekanism:pellet_plutonium',
    'mekanism:pellet_polonium',
    'mekanism:pellet_antimatter',
    'mekanism:yellow_cake_uranium'
  ]

  pelletsEdible.forEach((pellet) => {
    event.modify(pellet, item => {
      item.food = {
        nutrition: 1000,
        saturation: 1000,
        eatSeconds: 2,
        canAlwaysEat: true
      };
    });
  });
});