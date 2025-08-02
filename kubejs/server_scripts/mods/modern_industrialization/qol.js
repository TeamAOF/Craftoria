ServerEvents.recipes(e => {
  const { mixer } = e.recipes.modern_industrialization;
  const { alloy_smelter } = e.recipes.extended_industrialization;

  let cobbleGen = (item, fluids) => {
    e.remove({ type: 'modern_industrialization:mixer', output: item });
    mixer(2, 100)
      .itemIn(item, 0)
      .itemOut(item)
      .fluidIn(`1000x ${fluids[0] || 'minecraft:water'}`, 0)
      .fluidIn(`1000x ${fluids[1] || 'minecraft:lava'}`, 0)
      .id(`craftoria:mi/mixer/${item.split(':')[1]}`);
  };

  /** @type {Special.Item[]} */
  const cobbleItems = [
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

    // Create
    'create:asurine',
    'create:crimsite',
    'create:limestone',
    'create:ochrum',
    'create:veridium',

    // Arts & Crafts
    'arts_and_crafts:gypsum',
    'arts_and_crafts:soapstone',
    'arts_and_crafts:verdant_pietraforte',
    'arts_and_crafts:ochre_pietraforte',
    'arts_and_crafts:umber_pietraforte',
    'arts_and_crafts:marlot_pietraforte',
    'arts_and_crafts:jet_pietraforte',
    'arts_and_crafts:ivory_pietraforte',
    'arts_and_crafts:hazel_pietraforte',
    'arts_and_crafts:beige_pietraforte',

    // Oh, The Biomes We've Gone
    'biomeswevegone:dacite',
    'biomeswevegone:white_dacite',
  ];

  cobbleItems.forEach(cobbleGen);

  alloy_smelter(4, 200)
    .itemIn('#morered:red_alloyable_ingots')
    .itemIn('4x #c:dusts/redstone')
    .itemOut('morered:red_alloy_ingot')
    .id('craftoria:mi/alloy_smelter/red_alloy_ingot');

  mixer(2, 20)
    .fluidOut('60x justdirethings:xp_fluid_source')
    .itemIn('ars_nouveau:experience_gem')
    .id('craftoria:mi/mixer/experience_gem_to_xp_fluid');
  mixer(2, 20)
    .fluidOut('240x justdirethings:xp_fluid_source')
    .itemIn('ars_nouveau:greater_experience_gem')
    .id('craftoria:mi/mixer/greater_experience_gem_to_xp_fluid');
  mixer(2, 20)
    .fluidOut('960x justdirethings:xp_fluid_source')
    .itemIn('ars_technica:giant_experience_gem')
    .id('craftoria:mi/mixer/giant_experience_gem_to_xp_fluid');
  mixer(2, 20)
    .fluidOut('3840x justdirethings:xp_fluid_source')
    .itemIn('ars_technica:gargantuan_experience_gem')
    .id('craftoria:mi/mixer/gargantuan_experience_gem_to_xp_fluid');

  mixer(2, 20)
    .fluidOut('4000x justdirethings:polymorphic_fluid_source')
    .fluidIn('4000x water')
    .itemIn('4x justdirethings:polymorphic_catalyst')
    .id('craftoria:mi/mixer/polymorphic_fluid_source');
  mixer(2, 20)
    .fluidOut('justdirethings:time_fluid_source')
    .fluidIn('justdirethings:polymorphic_fluid_source')
    .itemIn('justdirethings:time_crystal')
    .id('craftoria:mi/mixer/time_fluid');
  mixer(2, 20)
    .fluidOut('justdirethings:unstable_portal_fluid_source')
    .fluidIn('justdirethings:polymorphic_fluid_source')
    .itemIn('justdirethings:portal_fluid_catalyst')
    .id('craftoria:mi/mixer/unstable_portal_fluid');
  mixer(2, 20)
    .fluidOut('justdirethings:unrefined_t2_fluid_source')
    .fluidIn('justdirethings:polymorphic_fluid_source')
    .itemIn('justdirethings:coal_t2')
    .id('craftoria:mi/mixer/unrefined_t2_fluid_source');
  mixer(2, 20)
    .fluidOut('justdirethings:unrefined_t3_fluid_source')
    .fluidIn('justdirethings:refined_t2_fluid_source')
    .itemIn('justdirethings:coal_t3')
    .id('craftoria:mi/mixer/unrefined_t3_fluid_source');
  mixer(2, 20)
    .fluidOut('justdirethings:unrefined_t4_fluid_source')
    .fluidIn('justdirethings:refined_t3_fluid_source')
    .itemIn('justdirethings:coal_t4')
    .id('craftoria:mi/mixer/unrefined_t4_fluid_source');
});
