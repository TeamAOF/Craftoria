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
        Text.red("if you want to enable it, go to 'kubejs/removals.js'"),
        Text.red('and remove the item from globalItemRemovals.'),
      ]);
    }
  });

  disabledItems.forEach(item => {
    if (!item.alt) {
      e.add(item.id, [
        Text.red('This item has been disabled in favor of better alternatives.'),
        Text.red('Its functionality remains intact, but it is no longer craftable.'),
      ]);
    } else {
      e.add(item.id, [
        Text.red(`This item has been disabled in favor of ${item.alt}.`),
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
    'mi_tweaks:batch_ooze_lab',
    { shift: true },
    Text.gray('Needs ').append(Text.green('Time Fluid')).append(Text.gray(' between the glass and the goo.'))
  );

  e.add('modern_industrialization:nuke', Text.darkGray("No, it won't explode."));

  e.add('craftoria:terminal', Text.gray('Auto builds Modern Industrialization multiblocks.'));
});
