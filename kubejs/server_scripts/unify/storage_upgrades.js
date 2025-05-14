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

  // Exclude upgrades that are unique to Sophisticated Storage
  let storageUnique = ['sophisticatedstorage:hopper_upgrade', 'sophisticatedstorage:advanced_hopper_upgrade'];

  ServerEvents.tags('item', e => {
    // Hide and remove old upgrades from Sophisticated Storage
    e.get('sophisticatedstorage:upgrade')
      .getObjectIds()
      .forEach(obj => {
        const id = obj.toString();
        if (!id.includes('sophisticatedbackpacks:') && !storageUnique.includes(id)) {
          disableItem(id, 'Sophisticated Backpacks Upgrades');
        }
      });
    disableItem('sophisticatedstorage:upgrade_base', 'Sophisticated Backpacks Upgrades', 'sophisticatedbackpacks:upgrade_base');

    // Add compatibility for Sophisticated Backpacks upgrades to Sophisticated Storage
    e.get('sophisticatedbackpacks:upgrade')
      .getObjectIds()
      .forEach(obj => {
        const id = obj.toString();
        if (!storageIncompatible.includes(id)) {
          e.add('sophisticatedstorage:upgrade', id);
        }
      });

    // Allow Sophisticated Backpacks to use Sophisticated Storage upgrades
    e.add('sophisticatedbackpacks:upgrade', ['#sophisticatedstorage:upgrade']);
  });

  ItemEvents.modifyTooltips(event => {
    const disabledSet = new Set(disabledItems.map(item => item.id));

    Ingredient.of('#sophisticatedstorage:upgrade').itemIds.forEach(id => {
      if (!disabledSet.has(id)) {
        event.add(id, [Text.gray('Compatible with sophisticated storage.')]);
      }
    });
  });
}
