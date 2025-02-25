ServerEvents.recipes((e) => {
  e.recipes.occultism
    .ritual(
      'craftoria:infinity_soul_cell',
      [
        'industrialforegoingsouls:soul_laser_base',
        'occultism:trinity_gem[entity_data={id:"occultism:possessed_warden"}]',
        'industrialforegoing:stasis_chamber',
        'craftoria:dark_essence',
        'industrialforegoing:laser_drill',
        'minecraft:reinforced_deepslate',
        'industrialforegoing:laser_drill',
        'minecraft:reinforced_deepslate',
        'industrialforegoing:laser_drill',
        'minecraft:reinforced_deepslate',
        'industrialforegoing:laser_drill',
        'minecraft:reinforced_deepslate',
      ],
      'craftoria:infinity_cell_housing',
      'occultism:contact_eldritch_spirit'
    )
    .dummy('craftoria:dummy_warden_imprisonment');

  exAssembler(
    e,
    '16000x minecraft:lava',
    [
      'craftoria:infinity_cell_housing',
      'craftoria:fire_essence',
      '64x actuallyadditions:lava_factory_controller',
      '64x actuallyadditions:lava_factory_casing',
      '64x actuallyadditions:lava_factory_casing',
      '64x actuallyadditions:lava_factory_casing',
      '64x actuallyadditions:lava_factory_casing',
      '64x functionalstorage:dripping_upgrade',
    ],
    'craftoria:infinity_lava_cell'
  );
});
