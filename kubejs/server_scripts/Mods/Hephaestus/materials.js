ServerEvents.generateData('after_mods', event => {

  // Material: Aluminum
  event.json('hephaestus_tools:materials/aluminum.json',
    {
      id: 'hephaestus_tools:aluminum',
      ingredient: {
        tag: 'c:ingots/aluminum',
      },
      color: 12571870,
      head_stats: {
        durability: 365,
        mining_speed: 8.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'featherweight',
      },
      handle_stats: {
        durability_mult: 0.2,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 75,
      },
    }
  );

  // Material: Blazegold
  event.json('hephaestus_tools:materials/blazegold.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'justdirethings',
        },
      ],
      id: 'hephaestus_tools:blazegold',
      ingredient: {
        tag: 'c:ingots/blazegold',
      },
      color: 9325125,
      head_stats: {
        durability: 800,
        mining_speed: 10.0,
        attack_damage: 3.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 18,
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.06,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 160,
      },
    }
  );

  // Material: Bone
  event.json('hephaestus_tools:materials/bone.json',
    {
      id: 'hephaestus_tools:bone',
      ingredient: {
        item: 'minecraft:bone',
      },
      color: 15263186,
      head_stats: {
        durability: 100,
        mining_speed: 2.5,
        attack_damage: 1.25,
        attack_speed: 1.0,
        tier: 1,
        enchantability: 12,
        trait: 'pierce',
      },
      handle_stats: {
        durability_mult: -0.25,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.1,
      },
      binding_stats: {
        durability: 45,
      },
    }
  );

  // Material: Brass
  event.json('hephaestus_tools:materials/brass.json',
    {
      id: 'hephaestus_tools:brass',
      ingredient: {
        tag: 'c:ingots/brass',
      },
      color: 15914072,
      head_stats: {
        durability: 240,
        mining_speed: 7.0,
        attack_damage: 1.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 13,
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.05,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 50,
      },
    }
  );

  // Material: Bronze
  event.json('hephaestus_tools:materials/bronze.json',
    {
      id: 'hephaestus_tools:bronze',
      ingredient: {
        tag: 'c:ingots/bronze',
      },
      color: 13932389,
      head_stats: {
        durability: 760,
        mining_speed: 6.5,
        attack_damage: 2.25,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'maintained',
      },
      handle_stats: {
        durability_mult: 0.1,
        speed_mult: 0.05,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 150,
      },
    }
  );

  // Material: Celestine
  event.json('hephaestus_tools:materials/celestine.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'nodeworks',
        },
      ],
      id: 'hephaestus_tools:celestine',
      ingredient: {
        tag: 'c:gems/celestine',
      },
      color: 12963826,
      head_stats: {
        durability: 400,
        mining_speed: 9.0,
        attack_damage: 1.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 18,
        trait: 'featherweight',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.04,
        damage_mult: -0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 80,
      },
    }
  );

  // Material: Certus Quartz
  event.json('hephaestus_tools:materials/certus_quartz.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'ae2',
        },
      ],
      id: 'hephaestus_tools:certus_quartz',
      ingredient: {
        tag: 'c:gems/certus_quartz',
      },
      color: 6787509,
      head_stats: {
        durability: 350,
        mining_speed: 8.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'jagged',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.02,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 70,
      },
    }
  );

  // Material: Chromium
  event.json('hephaestus_tools:materials/chromium.json',
    {
      id: 'hephaestus_tools:chromium',
      ingredient: {
        tag: 'c:ingots/chromium',
      },
      color: 11904678,
      head_stats: {
        durability: 700,
        mining_speed: 6.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'solid',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: -0.02,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 140,
      },
    }
  );

  // Material: Cobalt
  event.json('hephaestus_tools:materials/cobalt.json',
    {
      id: 'hephaestus_tools:cobalt',
      ingredient: {
        tag: 'c:ingots/cobalt',
      },
      color: 2646232,
      head_stats: {
        durability: 800,
        mining_speed: 6.5,
        attack_damage: 2.25,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 18,
        trait: 'lightweight',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.05,
        damage_mult: 0.0,
        attack_speed_mult: 0.05,
      },
      binding_stats: {
        durability: 150,
      },
    }
  );

  // Material: Constantan
  event.json('hephaestus_tools:materials/constantan.json',
    {
      id: 'hephaestus_tools:constantan',
      ingredient: {
        tag: 'c:ingots/constantan',
      },
      color: 16747376,
      head_stats: {
        durability: 675,
        mining_speed: 7.5,
        attack_damage: 1.75,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'temperate',
      },
      handle_stats: {
        durability_mult: -0.05,
        speed_mult: 0.15,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 135,
      },
    }
  );

  // Material: Copper
  event.json('hephaestus_tools:materials/copper.json',
    {
      id: 'hephaestus_tools:copper',
      ingredient: {
        item: 'minecraft:copper_ingot',
      },
      color: 15170646,
      head_stats: {
        durability: 210,
        mining_speed: 5.0,
        attack_damage: 0.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'dwarven',
      },
      handle_stats: {
        durability_mult: -0.2,
        speed_mult: 0.1,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 60,
      },
    }
  );

  // Material: Eclipse Alloy
  event.json('hephaestus_tools:materials/eclipse_alloy.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'justdirethings',
        },
      ],
      id: 'hephaestus_tools:eclipse_alloy',
      ingredient: {
        tag: 'c:ingots/eclipsealloy',
      },
      color: 3226440,
      head_stats: {
        durability: 1800,
        mining_speed: 14.0,
        attack_damage: 5.0,
        attack_speed: 1.0,
        tier: 5,
        enchantability: 20,
      },
      handle_stats: {
        durability_mult: 0.15,
        speed_mult: 0.14,
        damage_mult: 0.15,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 360,
      },
    }
  );

  // Material: Electrum
  event.json('hephaestus_tools:materials/electrum.json',
    {
      id: 'hephaestus_tools:electrum',
      ingredient: {
        tag: 'c:ingots/electrum',
      },
      color: 16771685,
      head_stats: {
        durability: 225,
        mining_speed: 8.0,
        attack_damage: 1.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 25,
        trait: 'shock',
      },
      handle_stats: {
        durability_mult: -0.35,
        speed_mult: 0.15,
        damage_mult: 0.0,
        attack_speed_mult: 0.15,
      },
      binding_stats: {
        durability: 45,
      },
    }
  );

  // Material: Entro
  event.json('hephaestus_tools:materials/entro.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/entro',
          },
        },
      ],
      id: 'hephaestus_tools:entro',
      ingredient: {
        tag: 'c:gems/entro',
      },
      color: 1150850,
      head_stats: {
        durability: 700,
        mining_speed: 12.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 18,
        trait: 'shock',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.1,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 140,
      },
    }
  );

  // Material: Ferricore
  event.json('hephaestus_tools:materials/ferricore.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:ingots/ferricore',
          },
        },
      ],
      id: 'hephaestus_tools:ferricore',
      ingredient: {
        tag: 'c:ingots/ferricore',
      },
      color: 8102819,
      head_stats: {
        durability: 500,
        mining_speed: 7.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'magnetic',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.0,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 100,
      },
    }
  );

  // Material: Flint
  event.json('hephaestus_tools:materials/flint.json',
    {
      id: 'hephaestus_tools:flint',
      ingredient: {
        item: 'minecraft:flint',
      },
      color: 4868682,
      head_stats: {
        durability: 85,
        mining_speed: 3.5,
        attack_damage: 1.25,
        attack_speed: 1.0,
        tier: 1,
        enchantability: 5,
        trait: 'jagged',
      },
      handle_stats: {
        durability_mult: -0.15,
        speed_mult: 0.0,
        damage_mult: 0.1,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 40,
      },
    }
  );

  // Material: Fluix
  event.json('hephaestus_tools:materials/fluix.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/fluix',
          },
        },
      ],
      id: 'hephaestus_tools:fluix',
      ingredient: {
        tag: 'c:gems/fluix',
      },
      color: 3485278,
      head_stats: {
        durability: 600,
        mining_speed: 10.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 16,
        trait: 'shock',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.06,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 120,
      },
    }
  );

  // Material: Fluxite
  event.json('hephaestus_tools:materials/fluxite.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/fluxite',
          },
        },
      ],
      id: 'hephaestus_tools:fluxite',
      ingredient: {
        tag: 'c:gems/fluxite',
      },
      color: 8859051,
      head_stats: {
        durability: 700,
        mining_speed: 12.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 18,
        trait: 'shock',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.1,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 140,
      },
    }
  );

  // Material: Garnet
  event.json('hephaestus_tools:materials/garnet.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/garnet',
          },
        },
      ],
      id: 'hephaestus_tools:garnet',
      ingredient: {
        tag: 'c:gems/garnet',
      },
      color: 9705238,
      head_stats: {
        durability: 600,
        mining_speed: 7.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 14,
        trait: 'jagged',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.0,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 120,
      },
    }
  );

  // Material: Gold
  event.json('hephaestus_tools:materials/gold.json',
    {
      id: 'hephaestus_tools:gold',
      ingredient: {
        tag: 'c:ingots/gold',
      },
      color: 15781183,
      head_stats: {
        durability: 80,
        mining_speed: 12.0,
        attack_damage: 0.0,
        attack_speed: 1.0,
        tier: 0,
        enchantability: 22,
        trait: 'featherweight',
      },
      handle_stats: {
        durability_mult: -0.1,
        speed_mult: 0.1,
        damage_mult: -0.1,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 15,
      },
    }
  );

  // Material: Iesnium
  event.json('hephaestus_tools:materials/iesnium.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:ingots/iesnium',
          },
        },
      ],
      id: 'hephaestus_tools:iesnium',
      ingredient: {
        tag: 'c:ingots/iesnium',
      },
      color: 7974066,
      head_stats: {
        durability: 750,
        mining_speed: 9.0,
        attack_damage: 3.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 20,
        trait: 'lightweight',
      },
      handle_stats: {
        durability_mult: 0.1,
        speed_mult: 0.04,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 150,
      },
    }
  );

  // Material: Invar
  event.json('hephaestus_tools:materials/invar.json',
    {
      id: 'hephaestus_tools:invar',
      ingredient: {
        tag: 'c:ingots/invar',
      },
      color: 13294544,
      head_stats: {
        durability: 630,
        mining_speed: 5.5,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 13,
        trait: 'solid',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: -0.1,
        damage_mult: 0.15,
        attack_speed_mult: 0.05,
      },
      binding_stats: {
        durability: 125,
      },
    }
  );

  // Material: Iridium
  event.json('hephaestus_tools:materials/iridium.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:or',
          values: [
            {
              type: 'neoforge:mod_loaded',
              modid: 'ftbmaterials',
            },
            {
              type: 'neoforge:mod_loaded',
              modid: 'ftbic',
            },
          ],
        },
      ],
      id: 'hephaestus_tools:iridium',
      ingredient: {
        tag: 'c:ingots/iridium',
      },
      color: 11253166,
      head_stats: {
        durability: 1100,
        mining_speed: 7.0,
        attack_damage: 3.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'dense',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.0,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 220,
      },
    }
  );

  // Material: Iron
  event.json('hephaestus_tools:materials/iron.json',
    {
      id: 'hephaestus_tools:iron',
      ingredient: {
        item: 'minecraft:iron_ingot',
      },
      color: 14211288,
      head_stats: {
        durability: 250,
        mining_speed: 6.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'magnetic',
      },
      handle_stats: {
        durability_mult: 0.1,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 75,
      },
    }
  );

  // Material: Lead
  event.json('hephaestus_tools:materials/lead.json',
    {
      id: 'hephaestus_tools:lead',
      ingredient: {
        tag: 'c:ingots/lead',
      },
      color: 6907257,
      head_stats: {
        durability: 200,
        mining_speed: 6.5,
        attack_damage: 1.75,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 15,
        trait: 'heavy',
      },
      handle_stats: {
        durability_mult: -0.1,
        speed_mult: 0.1,
        damage_mult: 0.1,
        attack_speed_mult: -0.1,
      },
      binding_stats: {
        durability: 40,
      },
    }
  );

  // Material: Leather
  event.json('hephaestus_tools:materials/leather.json',
    {
      id: 'hephaestus_tools:leather',
      ingredient: {
        item: 'minecraft:leather',
      },
      color: 9132587,
      head_stats: {},
      handle_stats: {},
      binding_stats: {},
    }
  );

  // Material: Moonstone
  event.json('hephaestus_tools:materials/moonstone.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:or',
          values: [
            {
              type: 'neoforge:mod_loaded',
              modid: 'irons_jewelry',
            },
            {
              type: 'neoforge:mod_loaded',
              modid: 'arsmagicalegacy',
            },
          ],
        },
      ],
      id: 'hephaestus_tools:moonstone',
      ingredient: {
        tag: 'c:gems/moonstone',
      },
      color: 12306134,
      head_stats: {
        durability: 500,
        mining_speed: 9.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 24,
        trait: 'smite',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.04,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 100,
      },
    }
  );

  // Material: Netherite
  event.json('hephaestus_tools:materials/netherite.json',
    {
      id: 'hephaestus_tools:netherite',
      ingredient: {
        tag: 'c:ingots/netherite',
      },
      color: 4275005,
      head_stats: {
        durability: 1800,
        mining_speed: 9.0,
        attack_damage: 4.0,
        attack_speed: 1.0,
        tier: 5,
        enchantability: 15,
        trait: 'solid',
      },
      handle_stats: {
        durability_mult: 0.15,
        speed_mult: 0.04,
        damage_mult: 0.1,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 360,
      },
    }
  );

  // Material: Nickel
  event.json('hephaestus_tools:materials/nickel.json',
    {
      id: 'hephaestus_tools:nickel',
      ingredient: {
        tag: 'c:ingots/nickel',
      },
      color: 15722619,
      head_stats: {
        durability: 380,
        mining_speed: 7.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 12,
      },
      handle_stats: {
        durability_mult: 0.2,
        speed_mult: 0.0,
        damage_mult: 0.1,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 75,
      },
    }
  );

  // Material: Onyx
  event.json('hephaestus_tools:materials/onyx.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'irons_jewelry',
        },
      ],
      id: 'hephaestus_tools:onyx',
      ingredient: {
        tag: 'c:gems/onyx',
      },
      color: 3678492,
      head_stats: {
        durability: 700,
        mining_speed: 6.0,
        attack_damage: 3.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'heavy',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: -0.02,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 140,
      },
    }
  );

  // Material: Osmium
  event.json('hephaestus_tools:materials/osmium.json',
    {
      id: 'hephaestus_tools:osmium',
      ingredient: {
        tag: 'c:ingots/osmium',
      },
      color: 12707572,
      head_stats: {
        durability: 500,
        mining_speed: 4.5,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 12,
        trait: 'dense',
      },
      handle_stats: {
        durability_mult: 0.2,
        speed_mult: -0.1,
        damage_mult: 0.0,
        attack_speed_mult: -0.1,
      },
      binding_stats: {
        durability: 100,
      },
    }
  );

  // Material: Peridot
  event.json('hephaestus_tools:materials/peridot.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'irons_jewelry',
        },
      ],
      id: 'hephaestus_tools:peridot',
      ingredient: {
        tag: 'c:gems/peridot',
      },
      color: 7188542,
      head_stats: {
        durability: 600,
        mining_speed: 8.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 14,
        trait: 'temperate',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.02,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 120,
      },
    }
  );

  // Material: Platinum
  event.json('hephaestus_tools:materials/platinum.json',
    {
      id: 'hephaestus_tools:platinum',
      ingredient: {
        tag: 'c:ingots/platinum',
      },
      color: 11777023,
      head_stats: {
        durability: 900,
        mining_speed: 12.0,
        attack_damage: 4.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 14,
      },
      handle_stats: {
        durability_mult: -0.1,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 180,
      },
    }
  );

  // Material: Prismarine
  event.json('hephaestus_tools:materials/prismarine.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/prismarine',
          },
        },
      ],
      id: 'hephaestus_tools:prismarine',
      ingredient: {
        tag: 'c:gems/prismarine',
      },
      color: 9879474,
      head_stats: {
        durability: 300,
        mining_speed: 7.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'pierce',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 60,
      },
    }
  );

  // Material: Rock
  event.json('hephaestus_tools:materials/stone.json',
    {
      id: 'hephaestus_tools:stone',
      ingredient: {
        item: 'minecraft:cobblestone',
      },
      color: 9211020,
      head_stats: {
        durability: 130,
        mining_speed: 4.0,
        attack_damage: 1.0,
        attack_speed: 1.0,
        tier: 1,
        enchantability: 5,
        trait: 'stonebound',
      },
      handle_stats: {
        durability_mult: -0.1,
        speed_mult: 0.05,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 35,
      },
    }
  );

  // Material: Ruby
  event.json('hephaestus_tools:materials/ruby.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:or',
          values: [
            {
              type: 'neoforge:mod_loaded',
              modid: 'ftbmaterials',
            },
            {
              type: 'neoforge:mod_loaded',
              modid: 'irons_jewelry',
            },
          ],
        },
      ],
      id: 'hephaestus_tools:ruby',
      ingredient: {
        tag: 'c:gems/ruby',
      },
      color: 12667462,
      head_stats: {
        durability: 800,
        mining_speed: 8.0,
        attack_damage: 3.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 14,
        trait: 'jagged',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.02,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 160,
      },
    }
  );

  // Material: Sapphire
  event.json('hephaestus_tools:materials/sapphire.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:or',
          values: [
            {
              type: 'neoforge:mod_loaded',
              modid: 'ftbmaterials',
            },
            {
              type: 'neoforge:mod_loaded',
              modid: 'iceandfire',
            },
            {
              type: 'neoforge:mod_loaded',
              modid: 'irons_jewelry',
            },
          ],
        },
      ],
      id: 'hephaestus_tools:sapphire',
      ingredient: {
        tag: 'c:gems/sapphire',
      },
      color: 4415653,
      head_stats: {
        durability: 800,
        mining_speed: 9.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 16,
        trait: 'lightweight',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.04,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 160,
      },
    }
  );

  // Material: Silver
  event.json('hephaestus_tools:materials/silver.json',
    {
      id: 'hephaestus_tools:silver',
      ingredient: {
        tag: 'c:ingots/silver',
      },
      color: 14349293,
      head_stats: {
        durability: 300,
        mining_speed: 5.5,
        attack_damage: 2.25,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 20,
        trait: 'smite',
      },
      handle_stats: {
        durability_mult: -0.1,
        speed_mult: 0.05,
        damage_mult: 0.0,
        attack_speed_mult: 0.1,
      },
      binding_stats: {
        durability: 60,
      },
    }
  );

  // Material: Soulium
  event.json('hephaestus_tools:materials/soulium.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/soulium',
          },
        },
      ],
      id: 'hephaestus_tools:soulium',
      ingredient: {
        tag: 'c:gems/soulium',
      },
      color: 5583908,
      head_stats: {
        durability: 450,
        mining_speed: 6.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 14,
        trait: 'smite',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: -0.02,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 90,
      },
    }
  );

  // Material: Spirit Attuned
  event.json('hephaestus_tools:materials/spirit_attuned.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'occultism',
        },
      ],
      id: 'hephaestus_tools:spirit_attuned',
      ingredient: {
        tag: 'c:gems/spirit_attuned',
      },
      color: 11774906,
      head_stats: {
        durability: 600,
        mining_speed: 10.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 24,
        trait: 'smite',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.06,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 120,
      },
    }
  );

  // Material: Stainless Steel
  event.json('hephaestus_tools:materials/stainless_steel.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:ingots/stainless_steel',
          },
        },
      ],
      id: 'hephaestus_tools:stainless_steel',
      ingredient: {
        tag: 'c:ingots/stainless_steel',
      },
      color: 10596295,
      head_stats: {
        durability: 900,
        mining_speed: 7.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 12,
        trait: 'maintained',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.0,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 180,
      },
    }
  );

  // Material: Steel
  event.json('hephaestus_tools:materials/steel.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:ingots/steel',
          },
        },
      ],
      id: 'hephaestus_tools:steel',
      ingredient: {
        tag: 'c:ingots/steel',
      },
      color: 4148051,
      head_stats: {
        durability: 750,
        mining_speed: 7.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 10,
        trait: 'solid',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.0,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 150,
      },
    }
  );

  // Material: String
  event.json('hephaestus_tools:materials/string.json',
    {
      id: 'hephaestus_tools:string',
      ingredient: {
        item: 'minecraft:string',
      },
      color: 16777215,
      head_stats: {},
      handle_stats: {},
      binding_stats: {},
    }
  );

  // Material: Tin
  event.json('hephaestus_tools:materials/tin.json',
    {
      id: 'hephaestus_tools:tin',
      ingredient: {
        tag: 'c:ingots/tin',
      },
      color: 9020852,
      head_stats: {
        durability: 192,
        mining_speed: 5.0,
        attack_damage: 1.5,
        attack_speed: 1.0,
        tier: 1,
        enchantability: 12,
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.2,
      },
      binding_stats: {
        durability: 40,
      },
    }
  );

  // Material: Titanium
  event.json('hephaestus_tools:materials/titanium.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:ingots/titanium',
          },
        },
      ],
      id: 'hephaestus_tools:titanium',
      ingredient: {
        tag: 'c:ingots/titanium',
      },
      color: 10652854,
      head_stats: {
        durability: 850,
        mining_speed: 8.0,
        attack_damage: 2.5,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 14,
        trait: 'lightweight',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.02,
        damage_mult: 0.03,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 170,
      },
    }
  );

  // Material: Topaz
  event.json('hephaestus_tools:materials/topaz.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/topaz',
          },
        },
      ],
      id: 'hephaestus_tools:topaz',
      ingredient: {
        tag: 'c:gems/topaz',
      },
      color: 8898284,
      head_stats: {
        durability: 600,
        mining_speed: 9.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 16,
        trait: 'featherweight',
      },
      handle_stats: {
        durability_mult: 0.05,
        speed_mult: 0.04,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 120,
      },
    }
  );

  // Material: Uranium
  event.json('hephaestus_tools:materials/uranium.json',
    {
      id: 'hephaestus_tools:uranium',
      ingredient: {
        tag: 'c:ingots/uranium',
      },
      color: 2227983,
      head_stats: {
        durability: 800,
        mining_speed: 6.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 3,
        enchantability: 17,
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.1,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 160,
      },
    }
  );

  // Material: Wood
  event.json('hephaestus_tools:materials/wood.json',
    {
      id: 'hephaestus_tools:wood',
      ingredient: {
        tag: 'minecraft:planks',
      },
      color: 8806467,
      head_stats: {
        durability: 60,
        mining_speed: 2.0,
        attack_damage: 0.0,
        attack_speed: 1.0,
        tier: 0,
        enchantability: 15,
        trait: 'cultivated',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.0,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 25,
      },
    }
  );

  // Material: Xychorium
  event.json('hephaestus_tools:materials/xychorium.json',
    {
      'neoforge:conditions': [
        {
          type: 'neoforge:not',
          value: {
            type: 'neoforge:tag_empty',
            tag: 'c:gems/xychorium',
          },
        },
      ],
      id: 'hephaestus_tools:xychorium',
      ingredient: {
        tag: 'c:gems/xychorium',
      },
      color: 5297637,
      head_stats: {
        durability: 400,
        mining_speed: 9.0,
        attack_damage: 2.0,
        attack_speed: 1.0,
        tier: 2,
        enchantability: 16,
        trait: 'shock',
      },
      handle_stats: {
        durability_mult: 0.0,
        speed_mult: 0.04,
        damage_mult: 0.0,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 80,
      },
    }
  );

  // Material: Zinc
  event.json('hephaestus_tools:materials/zinc.json',
    {
      id: 'hephaestus_tools:zinc',
      ingredient: {
        tag: 'c:ingots/zinc',
      },
      color: 13226958,
      head_stats: {
        durability: 192,
        mining_speed: 3.0,
        attack_damage: 1.5,
        attack_speed: 1.0,
        tier: 1,
        enchantability: 15,
      },
      handle_stats: {
        durability_mult: -0.05,
        speed_mult: 0.0,
        damage_mult: 0.05,
        attack_speed_mult: 0.0,
      },
      binding_stats: {
        durability: 40,
      },
    }
  );

});
