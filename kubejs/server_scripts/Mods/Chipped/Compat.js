let chippedTags = [];

ServerEvents.tags('item', (e) => {
  e.tags.forEach((tag) => {
    tag = tag.toString();
    if (tag.includes('chipped')) {
      chippedTags.push(tag);
    }
  });

  chippedTags.forEach((tag) => {
    let tagBlock = tag.split(':')[1];
    e.add(tag, `#chisel:${tagBlock}`);
  });
});
