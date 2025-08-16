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

  e.create('craftoria:ice_essence').displayName('§bEssence of Ice').tooltip(Text.translate('tooltip.craftoria.ice_essence'));
  e.create('craftoria:fire_essence')
    .displayName('§6Essence of Fire')
    .tooltip(Text.translate('tooltip.craftoria.fire_essence'));
  e.create('craftoria:nature_essence')
    .displayName('§2Essence of Nature')
    .tooltip(Text.translate('tooltip.craftoria.nature_essence'));
  e.create('craftoria:dark_essence')
    .displayName('§5Essence of Darkness')
    .tooltip(Text.translate('tooltip.craftoria.dark_essence'));

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

  // Dev Items
  e.create('craftoria:multiblock_generator')
    .texture('craftoria:item/dev')
    .unstackable(); // Used for generating KubeJS code for MI multiblocks.
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
