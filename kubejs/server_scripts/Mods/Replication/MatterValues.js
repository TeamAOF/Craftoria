ServerEvents.recipes(event => {
  /** @type {Special.ItemTag[]} */
  const toDisable = ['#c:ingots/iridium', '#c:ingots/platinum', '#c:ingots/titanium', '#c:ingots/tungsten', '#c:ingots/plutonium'];

  toDisable.forEach(id => {
    let path = `replication:matter_values/c/tags/${ID.path(id)}`;
    console.log(`Removing ${path}`);
    event.remove({ id: path });
  });
});
