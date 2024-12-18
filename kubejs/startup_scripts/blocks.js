StartupEvents.registry('block', (event) => {
  event
    .create('craftoria:blaze_block')
    .displayName('Blaze Block')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true);

  event
    .create('craftoria:smokey_bricks')
    .displayName('Smokey Brick')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .requiresTool(true);

  event
    .create('craftoria:smokey_bricks_slab', 'slab')
    .displayName('Smokey Brick Slab')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .requiresTool(true);

  event
    .create('craftoria:smokey_bricks_stairs', 'stairs')
    .displayName('Smokey Brick Stairs')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .requiresTool(true);

  event
    .create('craftoria:smokey_bricks_wall', 'wall')
    .displayName('Smokey Brick Wall')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .requiresTool(true);

  event
    .create('craftoria:smokey_bricks_button', 'button')
    .displayName('Smokey Brick Button')
    .soundType('deepslate_bricks')
    .hardness(3)
    .resistance(2)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')
    .requiresTool(true);

  event
    .create('craftoria:completionist_cup', 'cardinal')
    .displayName('Completionist Cup')
    .defaultCutout()
    .box(14, 10, 7, 16, 14, 9, true)
    .box(3, 0, 3, 13, 4, 13, true)
    .box(6, 4, 6, 10, 7, 10, true)
    .box(3, 7, 3, 13, 16, 13, true)
    .box(13, 14, 7, 16, 16, 9, true)
    .box(0, 14, 7, 3, 16, 9, true)
    .box(13, 8, 7, 16, 10, 9, true)
    .box(0, 8, 7, 3, 10, 9, true)
    .box(0, 10, 7, 2, 14, 9, true)
    .soundType('metal')
    .property(BlockProperties.WATERLOGGED)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagItem('modern_industrialization:replicator_blacklist')
    .tagItem(`craftoria:replicator_2_blacklist`)
    .item((item) => {
      item
        .useAnimation('drink')
        .useDuration((itemStack) => 20)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
          let effects = entity.potionEffects;
          effects.add('minecraft:strength', 30 * 20, 4);
          effects.add('minecraft:regeneration', 30 * 20, 4);
          return itemstack;
        });
    });
});
