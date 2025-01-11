ServerEvents.generateData('after_mods', (e) => {
  e.json('apotheosis:wanderer_trades/rare_gear/stonebreaker', {
    type: 'placebo:basic_trade',
    input_1: {
      count: 1,
      id: 'minecraft:diamond_pickaxe',
    },
    input_2: {
      count: 45,
      id: 'minecraft:emerald',
    },
    output: {
      components: {
        'minecraft:custom_name': '{"color":"#1ABBE0","italic":false,"translate":"name.apotheosis.stonebreaker"}',
        'minecraft:enchantments': {
          levels: {
            'minecraft:efficiency': 5,
            'minecraft:fortune': 4,
            'minecraft:mending': 1,
            'minecraft:unbreaking': 5,
          },
        },
      },
      count: 1,
      id: 'minecraft:diamond_pickaxe',
    },
    rare: true,
    xp: 500,
  });
});
