// Currently adding information to EMI adds it twice, due to it also being added to JEI.
RecipeViewerEvents.addInformation('fluid', e => {
  /** @type {Record<Special.Fluid, string[]>} */
  const entries = {
    'justdirethings:unstable_portal_fluid_source': [
      'info.justdirethings.unstable_portal_fluid.line1',
      'info.justdirethings.unstable_portal_fluid.line2',
      'info.justdirethings.unstable_portal_fluid.line3',
    ],
  };

  for (const [fluid, keys] of Object.entries(entries)) {
    e.add(fluid, keys.map(key => Text.translate(key)));
  }
});

RecipeViewerEvents.addInformation('item', e => {
  /** @type {Record<Special.Item, string[]>} */
  const entries = {
    'tesseract:tesseract': [
      'info.tesseract.tesseract.line1',
      'info.tesseract.tesseract.line2',
      'info.tesseract.tesseract.line3',
      'info.tesseract.tesseract.line4',
      'info.tesseract.tesseract.line5',
    ],
  };

  for (const [item, keys] of Object.entries(entries)) {
    e.add(item, keys.map(key => Text.translate(key)));
  }
});
