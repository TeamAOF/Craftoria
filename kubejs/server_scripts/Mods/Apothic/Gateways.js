ServerEvents.generateData('after_mods', (e) => {
  e.json('craftoria:loot_modifiers/affix_loot', {
    type: 'apotheosis:affix_loot',
    conditions: [],
    entries: [
      {
        chance: 1,
        pattern: {
          domain: 'craftoria',
          path_regex: 'chests/affix_loot',
        },
      },
    ],
  });

  e.json('craftoria:loot_table/chests/affix_loot', {
    type: 'minecraft:chest',
  });

  e.json('craftoria:gateways/small_boss', {
    size: 'small',
    color: 'rainbow',
    completion_xp: 2500,
    spawn_range: 5,
    leash_range: 256,
    waves: [
      {
        entities: [
          {
            type: 'apotheosis:boss',
            boss: 'apotheosis:the_end/evoker',
          },
        ],
        modifiers: [],
        rewards: [
          {
            type: 'gateways:loot_table',
            loot_table: 'craftoria:loot_table/chests/affix_loot',
            rolls: 1,
            desc: 'Affix / Gem Loot',
          },
        ],
        max_wave_time: 4500,
        setup_time: 20,
      },
    ],
    rewards: [
      {
        type: 'gateways:loot_table',
        loot_table: 'craftoria:loot_table/chests/affix_loot',
        rolls: 20,
        desc: 'Affix / Gem Loot',
      },
    ],
    failures: [],
  });
  e.json('craftoria:gateways/endless/boss', {
    type: 'gateways:endless',
    size: 'medium',
    color: 'rainbow',
    base_wave: {
      entities: [
        {
          type: 'apotheosis:boss',
          boss: 'apotheosis:the_end/evoker',
        },
      ],
      rewards: [
        {
          type: 'gateways:loot_table',
          loot_table: 'craftoria:loot_table/chests/affix_loot',
          rolls: 1,
          desc: 'Affix / Gem Loot',
        },
      ],
      max_wave_time: 800,
      setup_time: 100,
    },
    modifiers: [
      {
        application_mode: {
          type: 'gateways:after_every_n_waves',
          waves: 3,
          max: 10,
        },
        entities: [
          {
            type: 'apotheosis:boss',
            boss: 'apotheosis:the_end/evoker',
          },
          {
            type: 'apotheosis:boss',
            boss: 'apotheosis:the_end/evoker',
          },
          {
            type: 'apotheosis:boss',
            boss: 'apotheosis:the_end/evoker',
          },
        ],
        rewards: [
          {
            type: 'gateways:loot_table',
            loot_table: 'craftoria:loot_table/chests/affix_loot',
            rolls: 10,
            desc: 'Affix / Gem Loot',
          },
        ],
        max_wave_time: -40,
        setup_time: -10,
      },
      {
        application_mode: {
          type: 'gateways:after_every_n_waves',
          waves: 5,
          max: 3,
        },
        modifiers: [
          {
            attribute: 'generic.max_health',
            operation: 'add_multiplied_total',
            value: 0.15,
          },
        ],
      },
    ],
    failures: [],
    boss_event: {
      mode: 'name_plate',
    },
    spawn_algorithm: 'gateways:inward_spiral',
  });
});
