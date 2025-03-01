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
    'craftoria:infinity_lava_cell',
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
    '16000x minecraft:lava'
  );

  e.remove({ id: 'extendedae:water_cell' });
  exAssembler(
    e,
    'extendedae:infinity_water_cell',
    ['craftoria:infinity_cell_housing', 'reliquary:emperor_chalice', '16x functionalstorage:water_generator_upgrade', '64x sfm:water_tank'],
    '16000x minecraft:water'
  );

  e.remove({ id: 'extendedae:cobblestone_cell' });
  exAssembler(e, 'extendedae:infinity_cobblestone_cell', [
    'craftoria:infinity_cell_housing',
    '64x mekanism:upgrade_stone_generator',
    '32x industrialforegoing:material_stonework_factory',
    '16x craftoria:4x_compressed_cobblestone_block',
  ]);

  exAssembler(e, 'craftoria:infinity_xp_fluid_source_cell', [
    'craftoria:infinity_cell_housing',
    '4x justdirethings:experienceholder',
    '4x sophisticatedbackpacks:xp_pump_upgrade',
    '8x actuallyadditions:xp_solidifier',
    'mekanism_extras:cosmic_fluid_tank[mekanism:fluids={fluid_tanks:[{amount:262144000,id:"justdirethings:xp_fluid_source"}]}]'
  ]);

  exAssembler(e, 'craftoria:infinity_cell_housing', [
    '32x #c:ingots/replica',
    '16x bigger_ae2:digital_singularity_cell_component',
    '16x advanced_ae:quantum_alloy_plate',
    '16x modern_industrialization:aluminum_tank',
    // '16x modern_industrialization:aluminum_barrel', // Disabled due MI barrels not stacking
    '4x mekanism_extras:cosmic_fluid_tank',
    '4x mekanism_extras:cosmic_bin',
  ]);

  arsEcnhApparatus(
    e,
    'craftoria:infinity_source_cell',
    'craftoria:infinity_cell_housing',
    [
      'ars_nouveau:agronomic_sourcelink',
      'ars_nouveau:volcanic_sourcelink',
      'ars_nouveau:alchemical_sourcelink',
      'ars_nouveau:mycelial_sourcelink',
      'ars_nouveau:vitalic_sourcelink',
      '3x ars_elemental:mark_of_mastery',
    ],
    100000
  );
});
