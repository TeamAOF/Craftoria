ServerEvents.recipes((e) => {
  let miMixer = e.recipes.modern_industrialization.mixer;

  let cobbleGen = (item, fluids) => {
    e.remove({ type: 'modern_industrialization:mixer', output: item });
    miMixer(2, 100)
      .itemIn(item, 0)
      .itemOut(item)
      .fluidIn(`1000x ${fluids[0] || 'minecraft:water'}`, 0)
      .fluidIn(`1000x ${fluids[1] || 'minecraft:lava'}`, 0)
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

  e.recipes.extended_industrialization
    .alloy_smelter(4, 200)
    .itemIn('#morered:red_alloyable_ingots')
    .itemIn('4x #c:dusts/redstone')
    .itemOut('morered:red_alloy_ingot')
    .id('craftoria:modern_industrialization/alloy_smelter/red_alloy_ingot');

  e.recipes.modern_industrialization.mixer(2, 20).fluidOut('60x justdirethings:xp_fluid_source').itemIn('ars_nouveau:experience_gem');
  e.recipes.modern_industrialization.mixer(2, 20).fluidOut('240x justdirethings:xp_fluid_source').itemIn('ars_nouveau:greater_experience_gem');
});
