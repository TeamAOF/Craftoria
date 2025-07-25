LootJS.lootTables(e => {
  let removeLoot = globalItemRemovals.map(item => {
    if (typeof item === 'object') return item.item;
    return item;
  });
  removeLoot.push('artifacts:eternal_steak', 'artifacts:everlasting_beef');

  e.forEachTable(table => {
    table.removeItem(removeLoot);
  });

  e.clearLootTables(/^bosses_of_mass_destruction:chests\/(obsidilith|gauntlet)$/);
  e.create('bosses_of_mass_destruction:entities/obsidilith', 'entity')
    .createPool().addEntry('2x bosses_of_mass_destruction:obsidian_heart');

  e.create('bosses_of_mass_destruction:entities/gauntlet', 'entity')
    .createPool().addEntry('2x bosses_of_mass_destruction:blazing_eye');

  if (!Platform.isLoaded('pastel'))
    e.getEntityTable('ender_dragon')
      .firstPool()
      .addEntry(LootEntry.of('dragon_head').randomChanceWithEnchantment('looting', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]));

  e.getEntityTable('armadillo')
    .firstPool()
    .addEntry(LootEntry.of('armadillo_scute').setCount([0, 3]).applyEnchantmentBonus('looting', [0, 1]));

  e.getEntityTable('turtle')
    .createPool()
    .addEntry(LootEntry.of('turtle_scute').setCount([0, 3]).applyEnchantmentBonus('looting', [0, 1]));

  const sniffa = e.getLootTable('minecraft:gameplay/sniffer_digging').firstPool();
  [
    'biomeswevegone:fluorescent_cattail_sprout',
    'biomeswevegone:blue_glowcane_shoot',
    'biomeswevegone:green_glowcane_shoot',
    'biomeswevegone:red_glowcane_shoot',
    'biomeswevegone:yellow_glowcane_shoot',
    'biomeswevegone:pale_pumpkin_seeds'
  ].forEach(item => {
    sniffa.addEntry(item);
  });
});

LootJS.modifiers(e => {
  e.removeGlobalModifiers(['dumplings_delight:add_calamari', 'biomeswevegone:bwg_items_from_sniffer_dig']);
});

ServerEvents.generateData('after_mods', e => {
  e.json('deeperdarker:loot_table/chests/ancient_temple_basement', {
    type: 'minecraft:chest',
    pools: [
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 8.0,
                  min: 6.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:sculk',
            weight: 32,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 7.0,
                  min: 3.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:soul_soil',
            weight: 31,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 7.0,
                  min: 3.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'deeperdarker:soul_dust',
            weight: 31,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 7.0,
                  min: 4.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:echo_shard',
            weight: 30,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 13.0,
                  min: 5.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'deeperdarker:grime_brick',
            weight: 28,
          },
          {
            type: 'minecraft:item',
            name: 'minecraft:name_tag',
            weight: 26,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 7.0,
                  min: 2.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'deeperdarker:sculk_bone',
            weight: 25,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 16.0,
                  min: 9.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:string',
            weight: 20,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 5.0,
                  min: 2.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'deeperdarker:crystallized_amber',
            weight: 18,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 14.0,
                  min: 7.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:iron_ingot',
            weight: 16,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 12.0,
                  min: 7.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:gold_ingot',
            weight: 13,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 7.0,
                  min: 3.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:diamond',
            weight: 10,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 2.0,
                  min: 1.0,
                },
                function: 'minecraft:set_count',
              },
              {
                function: 'minecraft:enchant_randomly',
                options: '#minecraft:on_random_loot',
              },
            ],
            name: 'minecraft:book',
            weight: 8,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 2.0,
                  min: 1.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'minecraft:enchanted_golden_apple',
            weight: 3,
          },
          {
            type: 'minecraft:item',
            name: 'minecraft:music_disc_otherside',
            weight: 2,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                add: false,
                count: {
                  type: 'minecraft:uniform',
                  max: 2.0,
                  min: 1.0,
                },
                function: 'minecraft:set_count',
              },
            ],
            name: 'deeperdarker:warden_carapace',
          },
        ],
        rolls: {
          type: 'minecraft:uniform',
          max: 6.0,
          min: 4.0,
        },
      },
      {
        bonus_rolls: 0.0,
        entries: [
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:set_potion',
                id: 'minecraft:strong_strength',
              },
            ],
            name: 'minecraft:potion',
            weight: 10,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 35.0,
                  min: 25.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.5,
                  min: 0.2,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:iron_leggings',
            weight: 7,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 30.0,
                  min: 15.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.9,
                  min: 0.3,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:iron_shovel',
            weight: 7,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 40.0,
                  min: 25.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.2,
                  min: 0.1,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_boots',
            weight: 5,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 40.0,
                  min: 20.0,
                },
                options: '#minecraft:on_random_loot',
              },
            ],
            name: 'minecraft:iron_hoe',
            weight: 5,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 40.0,
                  min: 30.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.8,
                  min: 0.4,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_sword',
            weight: 4,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 50.0,
                  min: 35.0,
                },
                options: '#minecraft:on_random_loot',
              },
            ],
            name: 'minecraft:diamond_helmet',
            weight: 3,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 50.0,
                  min: 30.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.9,
                  min: 0.5,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_hoe',
            weight: 3,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 50.0,
                  min: 40.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.4,
                  min: 0.15,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_leggings',
            weight: 3,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 50.0,
                  min: 40.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.7,
                  min: 0.5,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_axe',
            weight: 2,
          },
          {
            type: 'minecraft:item',
            functions: [
              {
                function: 'minecraft:enchant_with_levels',
                levels: {
                  type: 'minecraft:uniform',
                  max: 50.0,
                  min: 40.0,
                },
                options: '#minecraft:on_random_loot',
              },
              {
                add: false,
                damage: {
                  type: 'minecraft:uniform',
                  max: 0.7,
                  min: 0.3,
                },
                function: 'minecraft:set_damage',
              },
            ],
            name: 'minecraft:diamond_chestplate',
            weight: 2,
          },
        ],
        rolls: 2.0,
      },
    ],
    random_sequence: 'deeperdarker:chests/ancient_temple_basement',
  });
});
