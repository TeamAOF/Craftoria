// Tooltips for items/blocks added by Craftoria
// or things that would've had too little stuff to warrant their own file/folder.
ItemEvents.modifyTooltips(e => {
  globalItemRemovals.forEach(item => {
    if (typeof item === 'object' && item.item) {
      e.add(item.item, [
        Text.red(`This item has been disabled for reason: ${item.reason}.`),
        Text.red("If you're playing in singleplayer, or are a server admin,"),
        Text.red("if you want to enable it, go to 'kubejs/removals.js'"),
        Text.red('and remove the item from globalItemRemovals.'),
      ]);
    } else {
      e.add(item, [
        Text.red('This item has been disabled.'),
        Text.red("If you're playing in singleplayer, or are a server admin,"),
        Text.red("and you want to enable it, go to 'kubejs/server_scripts/removals.js'"),
        Text.red('and remove the item from globalItemRemovals.'),
      ]);
    }
  });

  disabledItems.forEach(item => {
    if (item.alt || item.altId) {
      e.add(item.id, [
        Text.red(`This item has been disabled in favor of ${item.alt || Item.of(item.altId).hoverName.string}.`),
        Text.red('Its functionality remains intact, but it is no longer craftable.'),
      ]);
    } else {
      e.add(item.id, [
        Text.red('This item has been disabled in favor of better alternatives.'),
        Text.red('Its functionality remains intact, but it is no longer craftable.'),
      ]);
    }
  });

  e.add('pipe_connector:pipe_connector', { shift: true }, [Text.gold('Check EMI for supported pipes.')]);
  e.add('#cookingforblockheads:sinks', [Text.red("Doesn't provide infinite water.")]);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: false }, holdShift);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: true }, [
    Text.lightPurple('Can be found in the Starlight dimension within the Crystalized biomes.'),
  ]);

  e.add(
    'mi_tweaks:ooze_lab',
    { shift: true },
    Text.gray('Needs ').append(Text.green('Time Fluid')).append(Text.gray(' between the glass and the goo.'))
  );

  e.add(/^mi_tweaks:batch_.*/, Text.red('Deprecated, convert in your crafting grid to the new version.'));

  e.add('modern_industrialization:nuke', Text.darkGray("No, it won't explode."));

  e.add('craftoria:infinity_soul_cell', [
    Text.darkGray('For the trinity gem component of this items recipe'),
    Text.darkGray('craft a possessed warden spawn egg together with'),
    Text.darkGray('an empty trinity gem in any crafting grid'),
    Text.darkGray("As you can't use the captured warden for the ritual, for now"),
  ]);

  e.add('craftoria:wardens_meat', [
    Text.gray('Meat from a Warden'),
    Text.gray('Obtained through dubious means'),
    Text.darkRed('Eat at your own risk!'),
  ]);

  e.add('occultism:butcher_knife', [
    Text.yellow('Replaced by Farmers Delight knives'),
    Text.yellow('They have the same functionality'),
  ]);

  for (const [id, machine] of Object.entries(global.customMIMachines)) {
    let machineID = `${machine.mod ?? 'modern_industrialization'}:${id}`;
    e.add(machineID, Text.blue('Added by Craftoria').italic());
  }
});
