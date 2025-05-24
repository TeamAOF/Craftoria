ServerEvents.generateData('after_mods',event=>{
  const advancements = {
    'actuallyadditions:pickup_coffee': {
      'parent': 'actuallyadditions:craft_coal_generator',
      'criteria': {
        'coffee_beans': {
          'conditions': {
            'items': [
              {
                'items': 'rusticdelight:coffee_beans'
              }
            ]
          },
          'trigger': 'minecraft:inventory_changed'
        }
      },
      'display': {
        'description': {
          'translate': 'achievement.actuallyadditions.pickUpCoffee.desc'
        },
        'icon': {
          'count': 1,
          'id': 'rusticdelight:coffee_beans'
        },
        'title': {
          'translate': 'achievement.actuallyadditions.pickUpCoffee'
        }
      },
      'requirements': [['coffee_beans']],
      'sends_telemetry_event': true
    },
    'mekanism:steel_ingot': {
      'parent': 'mekanism:metallurgic_infuser',
      'criteria': {
        'ingot_steel': {
          'conditions': {
            'items': [
              {
                'items': 'modern_industrialization:steel_ingot'
              }
            ]
          },
          'trigger': 'minecraft:inventory_changed'
        }
      },
      'display': {
        'description': {
          'translate': 'advancements.mekanism.steel_ingot.description'
        },
        'icon': {
          'count': 1,
          'id': 'modern_industrialization:steel_ingot'
        },
        'title': {
          'translate': 'advancements.mekanism.steel_ingot.title'
        }
      },
      'requirements': [
        [
          'ingot_steel'
        ]
      ],
      'sends_telemetry_event': true
    }
  };

  for (const [id, advancement] of Object.entries(advancements)) {
    event.json(`${ID.namespace(id)}:advancement/${ID.path(id)}`, advancement);
  }
});
