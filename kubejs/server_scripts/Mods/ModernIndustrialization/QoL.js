ServerEvents.recipes((e) => {
  let miMixer = e.recipes.modern_industrialization.mixer;

  let cobbleGen = (item, fluids) => {
    e.remove({ type: 'modern_industrialization:mixer', output: item });
    miMixer(2, 100)
      .itemIn(item, 0)
      .itemOut(item)
      .fluidIn(fluids[0] || 'minecraft:water', 1000, 0)
      .fluidIn(fluids[1] || 'minecraft:lava', 1000, 0)
      .id(`craftoria:modern_industrialization/mixer/${item.split(':')[1]}`);
  };

  [
    // Vanilla
    'minecraft:cobblestone',
    'minecraft:granite',
    'minecraft:diorite',
    'minecraft:andesite',
    'minecraft:dripstone_block',
    'minecraft:cobbled_deepslate',
    'minecraft:calcite',
    'minecraft:tuff',

    // Biomes We've Gone
    'biomeswevegone:dacite_cobblestone',
    'biomeswevegone:red_rock',

    // Eternal Starlight
    'eternal_starlight:cobbled_grimstone',
    'eternal_starlight:voidstone',
    'eternal_starlight:abysslate',
    'eternal_starlight:thermabysslate',
    'eternal_starlight:cryobysslate',
  ].forEach(cobbleGen);
});
