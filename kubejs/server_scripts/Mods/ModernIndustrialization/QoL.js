ServerEvents.recipes((e) => {
  const mixer = e.recipes.modern_industrialization.mixer;

  let cobbleGen = (item, fluids) => {
    e.remove({ type: 'modern_industrialization:mixer', output: item });
    mixer(2, 100)
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

  mixer(2, 20).fluidOut('60x justdirethings:xp_fluid_source').itemIn('ars_nouveau:experience_gem');
  mixer(2, 20).fluidOut('240x justdirethings:xp_fluid_source').itemIn('ars_nouveau:greater_experience_gem');

  mixer(2, 20).fluidOut('justdirethings:polymorphic_fluid_source').fluidIn('water').itemIn('justdirethings:polymorphic_catalyst');
  mixer(2, 20).fluidOut('justdirethings:time_fluid_source').fluidIn('justdirethings:polymorphic_fluid_source').itemIn('justdirethings:time_crystal');
  mixer(2, 20)
    .fluidOut('justdirethings:unstable_portal_fluid_source')
    .fluidIn('justdirethings:polymorphic_fluid_source')
    .itemIn('justdirethings:portal_fluid_catalyst');
  mixer(2, 20).fluidOut('justdirethings:unrefined_t4_fluid_source').fluidIn('justdirethings:refined_t3_fluid_source').itemIn('justdirethings:coal_t4');
  mixer(2, 20).fluidOut('justdirethings:unrefined_t3_fluid_source').fluidIn('justdirethings:refined_t2_fluid_source').itemIn('justdirethings:coal_t3');
  mixer(2, 20).fluidOut('justdirethings:unrefined_t2_fluid_source').fluidIn('justdirethings:polymorphic_fluid_source').itemIn('justdirethings:coal_t2');
});
