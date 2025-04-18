ClientEvents.generateAssets('after_mods', e => {
    let customSounds = [
        {
            name: 'bipbip',
            keys: [
                '#computercraft:computer',
                'mekanism:robit',
                'advancedperipherals:colony_integrator',
                'shrink:shrinking_device',
                'justdirethings:portalgun',
                'justdirethings:portalgun_v2',
            ],
            sound: 'pneumaticcraft:chirp',
        },
        {
            name: 'generic_wrenches',
            keys: [
                '#craftoria:sounds/generic_wrenches',
                'advancedperipherals:computer_tool',
            ],
            sound: 'minecraft:item.armor.equip_iron',
        },
        {
            name: 'quartz_wrenches',
            keys: ['#ae2:quartz_wrench'],
            sound: 'minecraft:block.amethyst_cluster.hit',
        },
        {
            name: 'pneumatic_wrench',
            keys: ['pneumaticcraft:pneumatic_wrench'],
            sound: 'mekanism:item.hydraulic',
        },
        {
            name: 'dusts',
            keys: ['#supplementaries:hourglass_dusts', '#c:dirty_dusts'],
            sound: 'minecraft:block.gravel.hit',
        },
        {
            name: 'glass',
            keys: ['#craftoria:sounds/glass'],
            sound: 'sounds:block.glass.place',
        },
        {
            name: 'fishes',
            keys: ['#c:foods/raw_fish'],
            sound: 'aquaculture:fish_flop',
        },
        {
            name: 'fwomp',
            keys: ['create:potato_cannon'],
            sound: 'create:fwoomp',
        },
        {
            name: 'plates',
            keys: ['#craftoria:sounds/plates'],
            sound: 'sounds:block.copper_ore.place',
        },
        {
            name: 'adv_netherite',
            keys: ['#advancednetherite:tier/tools', '#advancednetherite:tier/armor'],
            sound: 'minecraft:item.armor.equip_netherite',
        },
        {
            name: 'apoth_gems',
            keys: ['apotheosis:gem'],
            sound: 'minecraft:block.amethyst_cluster.hit',
        },
        {
            name: 'bows',
            keys: ['#c:tools/bows'],
            sound: 'minecraft:entity.arrow.shoot',
        },
        {
            name: 'bee_armor',
            keys: ['#the_bumblezone:armors/all'],
            sound: 'minecraft:entity.bee.pollinate',
        },
        {
            name: 'soph_boats',
            keys: ['sophisticatedstorageinmotion:storage_boat'],
            sound: 'minecraft:block.wood.hit',
        },
        {
            name: 'soph_minecarts',
            keys: ['sophisticatedstorageinmotion:storage_minecart'],
            sound: 'minecraft:block.metal_pressure_plate.click_on',
        },
    ];

    let addSound = (name, keys, sound) => {
        e.json(`minecraft:sounds/items/${name}`, {
            keys: keys,
            soundEvent: sound,
        });
    };

    customSounds.forEach(element =>
        addSound(element.name, element.keys, element.sound)
    );
});
