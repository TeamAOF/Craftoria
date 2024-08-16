ServerEvents.recipes(event => {
  
  const croptopia_seeds = [
    'croptopia:artichoke_seed',
    'croptopia:asparagus_seed',
    'croptopia:barley_seed',
    'croptopia:basil_seed',
    'croptopia:bellpepper_seed',
    'croptopia:blackbean_seed',
    'croptopia:blackberry_seed',
    'croptopia:blueberry_seed',
    'croptopia:broccoli_seed',
    'croptopia:cabbage_seed',
    'croptopia:cantaloupe_seed',
    'croptopia:cauliflower_seed',
    'croptopia:celery_seed',
    'croptopia:chile_pepper_seed',
    'croptopia:corn_seed',
    'croptopia:cranberry_seed',
    'croptopia:cucumber_seed',
    'croptopia:currant_seed',
    'croptopia:eggplant_seed',
    'croptopia:elderberry_seed',
    'croptopia:garlic_seed',
    'croptopia:ginger_seed',
    'croptopia:grape_seed',
    'croptopia:greenbean_seed',
    'croptopia:honeydew_seed',
    'croptopia:hops_seed',
    'croptopia:kale_seed',
    'croptopia:kiwi_seed',
    'croptopia:leek_seed',
    'croptopia:lettuce_seed',
    'croptopia:mustard_seed',
    'croptopia:oat_seed',
    'croptopia:olive_seed',
    'croptopia:onion_seed',
    'croptopia:peanut_seed',
    'croptopia:pepper_seed',
    'croptopia:pineapple_seed',
    'croptopia:radish_seed',
    'croptopia:raspberry_seed',
    'croptopia:rhubarb_seed',
    'croptopia:rice_seed',
    'croptopia:rutabaga_seed',
    'croptopia:saguaro_seed',
    'croptopia:soybean_seed',
    'croptopia:squash_seed',
    'croptopia:strawberry_seed',
    'croptopia:tea_seed',
    'croptopia:tomatillo_seed',
    'croptopia:tomato_seed',
    'croptopia:turmeric_seed',
    'croptopia:turnip_seed',
    'croptopia:vanilla_seeds',
    'croptopia:yam_seed',
    'croptopia:zucchini_seed'
  ];

  croptopia_seeds.forEach((seed) => {
    event.custom({
      type: 'farmingforblockheads:market',
      category: 'farmingforblockheads:seeds',
      preset: 'minecraft:seeds',
      result: { item: seed, count: 1 }
    })
  });

  const croptopia_saplings = [
    'croptopia:almond_sapling',
    'croptopia:apple_sapling',
    'croptopia:apricot_sapling',
    'croptopia:avocado_sapling',
    'croptopia:banana_sapling',
    'croptopia:cashew_sapling',
    'croptopia:cherry_sapling',
    'croptopia:cinnamon_sapling',
    'croptopia:coconut_sapling',
    'croptopia:date_sapling',
    'croptopia:dragonfruit_sapling',
    'croptopia:fig_sapling',
    'croptopia:grapefruit_sapling',
    'croptopia:kumquat_sapling',
    'croptopia:lemon_sapling',
    'croptopia:lime_sapling',
    'croptopia:mango_sapling',
    'croptopia:nectarine_sapling',
    'croptopia:nutmeg_sapling',
    'croptopia:orange_sapling',
    'croptopia:peach_sapling',
    'croptopia:pear_sapling',
    'croptopia:pecan_sapling',
    'croptopia:persimmon_sapling',
    'croptopia:plum_sapling',
    'croptopia:starfruit_sapling',
    'croptopia:walnut_sapling'
  ];

  croptopia_saplings.forEach((sapling) => {
    event.custom({
      type: 'farmingforblockheads:market',
      category: 'farmingforblockheads:saplings',
      preset: 'minecraft:saplings',
      result: { item: sapling, count: 1 }
    })
  });

})
