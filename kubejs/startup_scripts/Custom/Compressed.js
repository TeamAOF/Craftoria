let nonSortedCompressedBlocks = [];

StartupEvents.registry('block', (event) => {
  /**
   * Compressed Blocks
   * Parameters:
   * name: Name of the block
   * texture: Texture of the block, usually same as the block id, without the mod id
   * modID: Mod ID of the block
   * soundType: (Optional) Sound type of the block, defaults to metal, see https://kubejs.com/wiki/ref/SoundType for more info
   * tool: (Optional) Tool for mining the block, defaults to pickaxe
   */
  let compressedBlocks = [
    // Minecraft
    {name: 'Iron', texture: 'iron_block', modID: 'minecraft'},
    {name: 'Gold', texture: 'gold_block', modID: 'minecraft'},
    {name: 'Diamond', texture: 'diamond_block', modID: 'minecraft'},
    {name: 'Emerald', texture: 'emerald_block', modID: 'minecraft'},
    {name: 'Redstone', texture: 'redstone_block', modID: 'minecraft'},
    {name: 'Lapis', texture: 'lapis_block', modID: 'minecraft'},
    {name: 'Quartz', texture: 'quartz_block_side', modID: 'minecraft'},
    {name: 'Copper', texture: 'copper_block', modID: 'minecraft'},
    {name: 'Netherite', texture: 'netherite_block', modID: 'minecraft'},
    {name: 'Coal', texture: 'coal_block', modID: 'minecraft'},
    {name: 'Sand', texture: 'sand', soundType: 'sand', tool: 'shovel', modID: 'minecraft'},
    {name: 'Gravel', texture: 'gravel', soundType: 'gravel', tool: 'shovel', modID: 'minecraft'},
    {name: 'Dirt', texture: 'dirt', soundType: 'gravel', tool: 'shovel', modID: 'minecraft'},
    {name: 'Clay', texture: 'clay', soundType: 'gravel', tool: 'shovel', modID: 'minecraft'},
    {name: 'Cobblestone', texture: 'cobblestone', soundType: 'stone', modID: 'minecraft'},
    {name: 'Stone', texture: 'stone', soundType: 'stone', modID: 'minecraft'},
    {name: 'Andesite', texture: 'andesite', soundType: 'stone', modID: 'minecraft'},
    {name: 'Diorite', texture: 'diorite', soundType: 'stone', modID: 'minecraft'},
    {name: 'Granite', texture: 'granite', soundType: 'stone', modID: 'minecraft'},
    {name: 'Basalt', texture: 'basalt_side', soundType: 'stone', modID: 'minecraft'},
    {name: 'Blackstone', texture: 'blackstone', soundType: 'stone', modID: 'minecraft'},
    {name: 'Netherrack', texture: 'netherrack', soundType: 'stone', modID: 'minecraft'},
    {name: 'End Stone', texture: 'end_stone', soundType: 'stone', modID: 'minecraft'},
    {name: 'Amethyst', texture: 'amethyst_block', soundType: 'amethyst', modID: 'minecraft'},
    {name: 'Deepslate', texture: 'deepslate', soundType: 'stone', modID: 'minecraft'},
    {name: 'Cobbled Deepslate', texture: 'cobbled_deepslate', soundType: 'stone', modID: 'minecraft'},
    {name: 'Tuff', texture: 'tuff', soundType: 'tuff', modID: 'minecraft'},
    {name: 'Obsidian', texture: 'obsidian', soundType: 'stone', modID: 'minecraft'},
    {name: 'Glowstone', texture: 'glowstone', soundType: 'glass', modID: 'minecraft'},

    // Modern Industrialization
    {name: 'Platinum', texture: 'platinum_block', modID: 'modern_industrialization'},
    {name: 'Aluminum', texture: 'aluminum_block', modID: 'modern_industrialization'},
    {name: 'Lead', texture: 'lead_block', modID: 'modern_industrialization'},
    {name: 'Nickel', texture: 'nickel_block', modID: 'modern_industrialization'},
    {name: 'Silver', texture: 'silver_block', modID: 'modern_industrialization'},
    {name: 'Tin', texture: 'tin_block', modID: 'modern_industrialization'},
    {name: 'Uranium', texture: 'uranium_block', modID: 'modern_industrialization'},
    {name: 'Bronze', texture: 'bronze_block', modID: 'modern_industrialization'},
    {name: 'Steel', texture: 'steel_block', modID: 'modern_industrialization'},
    {name: 'Invar', texture: 'invar_block', modID: 'modern_industrialization'},
    {name: 'Electrum', texture: 'electrum_block', modID: 'modern_industrialization'},
    {name: 'Cupronickel', texture: 'cupronickel_block', modID: 'modern_industrialization'},
    {name: 'Tungsten', texture: 'tungsten_block', modID: 'modern_industrialization'},
    {name: 'Titanium', texture: 'titanium_block', modID: 'modern_industrialization'},
    {name: 'Iridium', texture: 'iridium_block', modID: 'modern_industrialization'},
    {name: 'Antimony', texture: 'antimony_block', modID: 'modern_industrialization'},
    {name: 'Monazite', texture: 'monazite_block', modID: 'modern_industrialization'},
    {name: 'Neodymium', texture: 'neodymium_block', modID: 'modern_industrialization'},
    {name: 'Yttrium', texture: 'yttrium_block', modID: 'modern_industrialization'},
    // { name: 'Cadmium', texture: 'cadmium_block', modID: 'modern_industrialization' }, Doesn't have a block
    {name: 'Sulfur', texture: 'sulfur_block', modID: 'modern_industrialization'},
    {name: 'Lignite Coal', texture: 'lignite_coal_block', modID: 'modern_industrialization'},
    {name: 'Salt', texture: 'salt_block', modID: 'modern_industrialization'},
    {name: 'Bauxite', texture: 'bauxite_block', modID: 'modern_industrialization'},
    {name: 'Coke', texture: 'coke_block', modID: 'modern_industrialization'},
    {name: 'Plutonium', texture: 'plutonium_block', modID: 'modern_industrialization'},
    {name: 'Beryllium', texture: 'beryllium_block', modID: 'modern_industrialization'},
    {name: 'Silicon', texture: 'silicon_block', modID: 'modern_industrialization'},
    {name: 'Sodium', texture: 'sodium_block', modID: 'modern_industrialization'},
    {name: 'Stainless Steel', texture: 'stainless_steel_block', modID: 'modern_industrialization'},
    {name: 'Uranium 235', texture: 'uranium_235_block', modID: 'modern_industrialization'},
    {name: 'Uranium 238', texture: 'uranium_238_block', modID: 'modern_industrialization'},
    {name: 'Chromium', texture: 'chromium_block', modID: 'modern_industrialization'},
    {name: 'Kanthal', texture: 'kanthal_block', modID: 'modern_industrialization'},

    // Mekanism
    {name: 'Osmium', texture: 'block_osmium', modID: 'mekanism'},
    {name: 'Refined Obsidian', texture: 'block_refined_obsidian', modID: 'mekanism'},
    {name: 'Refined Glowstone', texture: 'block_refined_glowstone', modID: 'mekanism'},
    {name: 'Fluorite', texture: 'block_fluorite', modID: 'mekanism'},
    {name: 'Charcoal', texture: 'block_charcoal', modID: 'mekanism'},

    // AE2 + Addons
    {name: 'Fluix', texture: 'fluix_block', modID: 'ae2'},
    {name: 'Certus Quartz', texture: 'quartz_block', modID: 'ae2'},
    {name: 'Entro', texture: 'entro_block', modID: 'extendedae'},
    {name: 'Charged Redstone', texture: 'charged_redstone_block', modID: 'appflux'},
  ];

  compressedBlocks.forEach((block) => {
    for (let i = 1; i < 10; i++) {
      let blockId = block.name.replace(' ', '_').toLowerCase();
      let c = '' + i;
      event
        .create(`craftoria:${c}x_compressed_${blockId}_block`)
        .displayName(`${c}x Compressed ${block.name} Block `)
        .renderType('translucent')
        .soundType(block.soundType || 'metal')
        .hardness(i)
        .resistance(6)
        .tagBoth(`craftoria:${c}x_compressed`)
        .tagItem(`modern_industrialization:replicator_blacklist`)
        .tagItem(`craftoria:replicator_1_blacklist`)
        .tagBlock(`minecraft:mineable/${block.tool || 'pickaxe'}`)
        .modelGenerator((m) => {
          m.parent('minecraft:block/cube');
          m.texture(['particle', 'all'], `${block.modID}:block/${block.texture}`);
          m.texture('overlay', `craftoria:block/overlays/${c}x_compressed`);
          m.element((e) => {
            e.allFaces((f) => f.tex('#all').cull());
          });
          m.element((e) => {
            e.allFaces((f) => f.tex('#overlay').cull());
          });
        });
    }
  });
});
