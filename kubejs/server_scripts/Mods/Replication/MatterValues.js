ServerEvents.recipes(event => {
  /** @type {Special.ItemTag[]} */
  const toDisable = ['#c:ingots/iridium', '#c:ingots/platinum', '#c:ingots/titanium', '#c:ingots/tungsten', '#c:ingots/plutonium'];

  toDisable.forEach(id => {
    let { namespace, path } = ID.mc(id.startsWith('#') ? id.slice(1) : id);
    event.remove({ id: `replication:matter_values/${namespace}/${id.startsWith('#') ? 'tags' : 'items'}/${path}` });
  });
});
