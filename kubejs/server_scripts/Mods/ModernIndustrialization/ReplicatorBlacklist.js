ServerEvents.tags('item', e => {
  /**
   * Blacklist for both Replicator Mk I and Mk II.
   * @type {$Ingredient_[]}
   */
  const replicatorBlacklist = [
    /^.*creative./,

    'ae2:quantum_entangled_singularity',
    'ae2wtlib:wireless_universal_terminal',
    'extendedae:package',
    /^extendedae:.*_cell$/,

    'mekanism:pellet_antimatter',

    /^modern_industrialization:quantum_.*/,
    'modern_industrialization:replicator',
    'modern_industrialization:replicator_1',
    'modern_industrialization:helium_plasma_bucket',
    'modern_industrialization:uu_matter_bucket',
    'modern_industrialization:singularity',
    'modern_industrialization:nuke',
    /^extended_industrialization:nano_quantum_.*/,

    'gag:time_sand_pouch',

    /^sophisticated(storage|backpacks):.*(shulker|barrel|chest|backpack)/,
    '@sophisticatedstorageinmotion',

    '#create:packages',

    /^industrialforegoing:infinity_(?!charger).*/,

    'shrink:shrink_bottle',

    /^craftoria:infinity_.*/,

    'supplementaries:sack',
    'supplementaries:safe',
    '#supplementaries:presents',
    '#supplementaries:trapped_presents',
    'supplementaries:jar',
  ];

  /**
   * Exclusions for both Replicator Mk I and Mk II.
   * Mostly used to remove items from the blacklist that were added via regex/tags.
   * @type {$Ingredient_[]}
   */
  const replicatorExclusions = [
    'modern_industrialization:quantum_circuit',
    'modern_industrialization:quantum_circuit_board',
    'modern_industrialization:quantum_machine_casing',
  ];

  /**
   * Blacklist for Replicator Mk II.
   * @type {$Ingredient_[]}
   */
  const replicator_2_blacklist = [
    /storage_cell/,
    /fe_.*_cell/,
    /portable_.*_cell/,
    'ae2:view_cell',
    'ae2:wireless_crafting_terminal',
    'megacells:bulk_item_cell',
    'megacells:radioactive_chemical_cell',
    /^enderdrives:.*_disk/,

    '#modern_industrialization:tanks',

    '#create:toolboxes',

    'eternal_starlight:golem_steel_crate',

    /^pneumaticcraft:.*_(tank|chest)$/,
    /^pneumaticcraft:.*drone/,
    'pneumaticcraft:liquid_hopper',

    /^functionalstorage:.*_[1-4]$/,
    /^functionalstorage:(.*_)?compacting/,
    'functionalstorage:armory_cabinet',

    'industrialforegoing:mob_imprisonment_tool',

    /^mekanism(_extras)?:.*_(chest|tank|barrel|bin|factory|energy_cube)$/,
    /^mekanism(_extras)?:(portable_)?qio/,
    /^mekanism:.*_(chamber|heater)$/,
    /^mekanism:(chemical|pigment)_.*/,
    /^mekanism:(crusher|combiner|teleporter|robit)$/,
    /^mekanismgenerators:.*_generator$/,
    /^mekanism(_extras)?:(advance_)?electric_pump$/,
    'mekanism:cardboard_box',
    'mekanism:metallurgic_infuser',
    'mekanism:osmium_compressor',
    'mekanism:energized_smelter',
    'mekanism:digital_miner',
    'mekanism:precision_sawmill',
    'mekanism:rotary_condensentrator',
    'mekanism:seismic_vibrator',
    'mekanism:solar_neutron_activator',
    'mekanism:nutritional_liquifier',
    'mekanism:formulaic_assemblicator',
    'mekanism:oredictionificator',
    'mekanism:laser_tractor_beam',
    'mekanism:painting_machine',
    'mekanism:security_desk',
    'mekanism:fluidic_plenisher',
    'mekanism:electrolytic_separator',
    'mekanism:isotopic_centrifuge',
    'mekanism:modification_station',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:gauge_dropper',

    /^occultism:storage_(controller|stabilizer)/,
    /^occultism:soul_(gem|shard)/,
    /^occultism:(ritual_)?satchel/,
    'occultism:familiar_ring',

    /^ars_(nouveau|elemental):.*_(jar|bag)$/,

    'integrateddynamics:energy_battery',

    /^justdirethings:.*(catcher|holder|canister)$/,
    'justdirethings:pocket_generator',

    /^apothic_enchanting:(ender_)?library$/,

    '@tankstorage',
    '@bankstorage',

    /^mob_grinding_utils:(jumbo_)?tank/,

    'framedblocks:framed_tank',

    'replication:matter_tank',
  ].concat(replicatorBlacklist);

  /**
   * Blacklist for Replicator Mk I.
   * @type {$Ingredient_[]}
   */
  const replicator_1_blacklist = [
    /_bucket$/,

    // These make no sense to replicate, as they rely on having NBT data, which Replicator Mk I doesn't support, and I don't want to risk them causing issues.
    /^(tank|bank)storage:(tank|bank)_link$/,
    /^(minecraft|reliquary):((splash|lingering)_)?potion$/,
    /^(minecraft|reliquary):tipped_arrow$/,
    'minecraft:enchanted_book',
    'minecraft:ominous_bottle',
    'apotheosis:gem',
    'apotheosis:potion_charm',
    'ae2:facade',
    'reliquary:mob_charm',
    'reliquary:mob_charm_fragment',
    'reliquary:potion_essence',
    'irons_spellbooks:scroll',
    'hostilenetworks:data_model',
    'hostilenetworks:prediction',
  ].concat(replicatorBlacklist);

  /** @type {$Ingredient_[]} */
  const replicator_2_exclusions = [
    /^mekanism:dynamic_(tank|valve)/,
    'mekanism:scuba_tank',
    /_radioactive_waste_barrel$/,
    /^(tank|bank)storage:(tank|bank)_(dock|link)$/,

    'ars_nouveau:void_jar',
  ].concat(replicatorExclusions);

  /** @type {$Ingredient_[]} */
  const replicator_1_exclusions = ['extendedae:void_cell'].concat(replicatorExclusions);

  e.add('modern_industrialization:replicator_blacklist', replicator_2_blacklist).remove(replicator_2_exclusions);
  e.add('craftoria:replicator_1_blacklist', replicator_1_blacklist).remove(replicator_1_exclusions);
});
