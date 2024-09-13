RecipeViewerEvents.removeEntries('item', (event) => {
  let hideItems = [];

  hideItems.forEach((item) => {
    event.remove(item);
  });

  globalItemRemovals.forEach((item) => {
    event.remove(item);
  });
});
