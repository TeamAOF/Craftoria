// Tooltips for items/blocks added by Craftoria
// or things that would've had too little stuff to warrant their own file/folder.
ItemEvents.modifyTooltips((e) => {
  e.add('pipe_connector:pipe_connector', { shift: true }, [Text.gold('Check EMI for supported pipes.')]);

  globalItemRemovals.forEach((item) => {
    e.add(item, [
      Text.red('This item has been disabled.'),
      Text.red("If you're playing in singleplayer, or are a server admin,"),
      Text.red("if you want to enable it, go to 'kubejs/removals.js'"),
      Text.red('and remove the item from globalItemRemovals.'),
    ]);
  });
});
