LootJS.lootTables(e => {
  e.create('craftoria:gate/mythic_affix').createPool(pool => {
    pool.addCustomEntry({
      type: 'apotheosis:random_affix_item',
      rarities: ['apotheosis:mythic'],
    });
  });
  e.create('craftoria:gate/perfect_gem').createPool(pool => {
    pool.addCustomEntry({
      type: 'apotheosis:random_gem',
      purities: ['perfect'],
    });
  });
});

ServerEvents.generateData('after_mods', e => {
  /* Example of a gateway
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
            type: 'apotheosis:invader',
          },
        ],
        modifiers: [],
        rewards: [
          {
            type: 'gateways:loot_table',
            loot_table: 'craftoria:gate/mythic_affix',
            rolls: 1,
            desc: 'Translation keys',
          },
        ],
        max_wave_time: 4500,
        setup_time: 20,
      },
    ],
    rewards: [
      {
        type: 'gateways:loot_table',
        loot_table: 'craftoria:gate/mythic_affix',
        rolls: 1,
        desc: 'desc.gateway.craftoria.reward.affix_item',
      },
    ],
    failures: [],
  });
  */

  e.json('craftoria:gateways/endless/boss', {
    type: 'gateways:endless',
    size: 'medium',
    color: 'rainbow',
    base_wave: {
      entities: [
        {
          type: 'apotheosis:invader',
        },
      ],
      rewards: [
        {
          type: 'gateways:loot_table',
          loot_table: 'craftoria:gate/mythic_affix',
          rolls: 1,
          desc: 'desc.gateway.craftoria.reward.mythic_item',
        },
        {
          type: 'gateways:loot_table',
          loot_table: 'craftoria:gate/perfect_gem',
          rolls: 5,
          desc: 'desc.gateway.craftoria.reward.perfect_gem',
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
            type: 'apotheosis:invader',
          },
          {
            type: 'apotheosis:invader',
          },
          {
            type: 'apotheosis:invader',
          },
        ],
        rewards: [
          {
            type: 'gateways:loot_table',
            loot_table: 'craftoria:gate/mythic_affix',
            rolls: 5,
            desc: 'desc.gateway.craftoria.reward.mythic_item',
          },
          {
            type: 'gateways:loot_table',
            loot_table: 'craftoria:gate/perfect_gem',
            rolls: 10,
            desc: 'desc.gateway.craftoria.reward.perfect_gem',
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

  let bomdGate = {
    size: 'large',
    color: 'rainbow',
    waves: [],
    rewards: [
      {
        type: 'gateways:loot_table',
        loot_table: 'craftoria:gate/mythic_affix',
        rolls: 10,
        desc: 'desc.gateway.craftoria.reward.mythic_item',
      },
      {
        type: 'gateways:loot_table',
        loot_table: 'craftoria:gate/perfect_gem',
        rolls: 20,
        desc: 'desc.gateway.craftoria.reward.perfect_gem',
      },
    ],
  };

  ['lich', 'obsidilith', 'gauntlet', 'void_blossom'].forEach(boss => {
    bomdGate.waves.push({
      entities: [
        {
          type: 'apotheosis:invader',
          invader: `craftoria:custom_bosses/${boss}`,
        },
      ],
      rewards: [
        {
          type: 'gateways:loot_table',
          loot_table: 'craftoria:gate/mythic_affix',
          rolls: 2,
          desc: 'desc.gateway.craftoria.reward.mythic_item',
        },
        {
          type: 'gateways:loot_table',
          loot_table: 'craftoria:gate/perfect_gem',
          rolls: 5,
          desc: 'desc.gateway.craftoria.reward.perfect_gem',
        },
      ],
      max_wave_time: 20 * 600,
      setup_time: 20 * 5,
    });
  });

  e.json('craftoria:gateways/bomd', bomdGate);
});
