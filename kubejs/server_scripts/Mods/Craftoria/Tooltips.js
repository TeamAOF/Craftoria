// Tooltips for items/blocks added by Craftoria
// or things that would've had too little stuff to warrant their own file/folder.
ItemEvents.modifyTooltips((e) => {
  globalItemRemovals.forEach((item) => {
    e.add(item, [
      Text.red('This item has been disabled.'),
      Text.red("If you're playing in singleplayer, or are a server admin,"),
      Text.red("if you want to enable it, go to 'kubejs/removals.js'"),
      Text.red('and remove the item from globalItemRemovals.'),
    ]);
  });

  e.add('pipe_connector:pipe_connector', { shift: true }, [Text.gold('Check EMI for supported pipes.')]);
  e.add('#cookingforblockheads:sinks', [Text.red("Doesn't provide infinite water.")]);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: false }, holdShift);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: true }, [
    Text.lightPurple('Can be found in the Starlight dimension within the Crystalized biomes.'),
  ]);
});

BlockEvents.rightClicked(['hyperbox:hyperbox', 'hyperbox:aperture'], (e) => {
  e.player.tell(Text.red('HYPERBOXES WILL BE REMOVED IN VERSION 1.15'));
  e.player.tell(Text.yellow('Please migrate to using Compact Machines.'));
});

BlockEvents.placed('hyperbox:hyperbox', (e) => {
  e.player.tell(Text.red('HYPERBOXES WILL BE REMOVED IN VERSION 1.15'));
  e.player.tell(Text.yellow('Please migrate to using Compact Machines.'));
});
