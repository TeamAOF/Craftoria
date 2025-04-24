StartupEvents.registry('block', event => {
  for (let [entry, ore] of Object.entries(global.customOres)) {
    const { stone, deepslate, nether, end, harvestLevel } = ore.worldGen;
    const { block } = ore.registry;

    if (stone)
      event
        .create(`craftoria:${entry}_ore`)
        .displayName(`${ore.name} Ore`)
        .soundType(SoundType.STONE)
        .hardness(20.0)
        .resistance(10.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/paxel')
        .tagBlock('minecraft:mineable/mattock')
        .tagBlock(harvestLevel)
        .tagBoth('c:ores')
        .tagBoth(`c:ores/${entry}`)
        .tagBoth('c:ores_in_ground/stone')
        .tagBoth('mekanism:miner_blacklist')
        .requiresTool(true);
    if (deepslate)
      event
        .create(`craftoria:deepslate_${entry}_ore`)
        .displayName(`Deepslate ${ore.name} Ore`)
        .soundType(SoundType.DEEPSLATE)
        .hardness(25.0)
        .resistance(10.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/paxel')
        .tagBlock('minecraft:mineable/mattock')
        .tagBlock(harvestLevel)
        .tagBoth('c:ores')
        .tagBoth(`c:ores/${entry}`)
        .tagBoth('c:ores_in_ground/deepslate')
        .tagBoth('mekanism:miner_blacklist')
        .requiresTool(true);
    if (nether)
      event
        .create(`craftoria:nether_${entry}_ore`)
        .displayName(`Nether ${ore.name} Ore`)
        .soundType(SoundType.NETHERRACK)
        .hardness(15.0)
        .resistance(10.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/paxel')
        .tagBlock('minecraft:mineable/mattock')
        .tagBlock(harvestLevel)
        .tagBoth('c:ores')
        .tagBoth(`c:ores/${entry}`)
        .tagBoth('c:ores_in_ground/netherrack')
        .tagBoth('mekanism:miner_blacklist')
        .requiresTool(true);
    if (end)
      event
        .create(`craftoria:end_${entry}_ore`)
        .displayName(`End ${ore.name} Ore`)
        .soundType(SoundType.STONE)
        .hardness(20.0)
        .resistance(10.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/paxel')
        .tagBlock('minecraft:mineable/mattock')
        .tagBlock(harvestLevel)
        .tagBoth('c:ores')
        .tagBoth(`c:ores/${entry}`)
        .tagBoth('c:ores_in_ground/end_stone')
        .tagBoth('mekanism:miner_blacklist')
        .requiresTool(true);

    if (block)
      event
        .create(`craftoria:${entry}_block`)
        .displayName(`${ore.name} Block`)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/paxel')
        .tagBlock('minecraft:mineable/mattock')
        .tagBlock(harvestLevel)
        .tagBoth('c:storage_blocks')
        .tagBoth(`c:storage_blocks/${entry}`)
        .requiresTool(true);
  }
});

StartupEvents.registry('item', event => {
  for (let [entry, ore] of Object.entries(global.customOres)) {
    if (!Object.values(ore.worldGen).includes(true)) return;
    const { nugget } = ore.registry;

    event.create(`craftoria:raw_${entry}`).displayName(`Raw ${ore.name}`).tag('c:raw_materials').tag(`c:raw_materials/${entry}`);
    event.create(`craftoria:${entry}_dust`).displayName(`${ore.name} Dust`).tag('c:dusts').tag(`c:dusts/${entry}`);
    event.create(`craftoria:${entry}_ingot`).displayName(`${ore.name} Ingot`).tag('c:ingots').tag(`c:ingots/${entry}`);
    if (nugget) event.create(`craftoria:${entry}_nugget`).displayName(`${ore.name} Nugget`).tag('c:nuggets').tag(`c:nuggets/${entry}`);
  }
});
