let chippedTags = [];

ServerEvents.tags("item", e => {

  e.tags.forEach(tag => {
    tag = tag.toString();
    if (tag.includes("chipped")) {
      chippedTags.push(tag);
      //console.info(`Processing tag: ${tag}`);
    }
  });

  chippedTags.forEach(tag => {
    let tagBlock = tag.split(":")[1];
    e.add(tag, RegExp(String.raw`chisel:.*/${tagBlock}`));
  });
});

ServerEvents.tags("block", e => {
  chippedTags.forEach(tag => {
    let tagBlock = tag.split(":")[1];
    e.add(tag, RegExp(String.raw`chisel:.*/${tagBlock}`));
  });
});