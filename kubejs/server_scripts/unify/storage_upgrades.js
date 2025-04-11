const removedUpgrades = [];

{
    // Add sophisticatedstorage:upgrade tag to all upgrades from Sophisticated Backpacks
    // except for the ones that are incompatible with sophisticatedstorage.
    
    let storageIncompatible = [
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:tank_upgrade',
        'sophisticatedbackpacks:battery_upgrade',
        'sophisticatedbackpacks:everlasting_upgrade',
        'sophisticatedbackpacks:inception_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
    ];

    ServerEvents.tags('item', (e) => {
        // Hide and remove old upgrades from Sophisticated Storage
        Ingredient.of('#sophisticatedstorage:upgrade').itemIds.forEach((id) => {
            if(!id.includes('sophisticatedbackpacks:')){
                removedUpgrades.push(id);
            };
        });
        removedUpgrades.push('sophisticatedstorage:upgrade_base');

        // Add compatibility for Sophisticated Backpacks upgrades to Sophisticated Storage
        Ingredient.of('#sophisticatedbackpacks:upgrade').itemIds.forEach((id) => {
            if (!storageIncompatible.includes(id)) {
                e.add('sophisticatedstorage:upgrade', id);
            }
        });

        // Allow Sophisticated Backpacks to use Sophisticated Storage upgrades
        e.add('sophisticatedbackpacks:upgrade', ['#sophisticatedstorage:upgrade'])
    });

    ItemEvents.modifyTooltips((e) => {
        Ingredient.of('#sophisticatedstorage:upgrade').itemIds.forEach((id) => {
            if(!removedUpgrades.includes(id)){
                e.add(id, [
                    Text.gray('Compatible with sophisticated storage.'),
                ]);
            }
        });
    });
}