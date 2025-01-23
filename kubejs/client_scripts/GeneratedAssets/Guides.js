ClientEvents.generateAssets('after_mods', (e) => {
  const guides = [{ mod: 'modern_industrialization', text: '§oTechnology For Newbies§r', model: 'guidebook' }];

  guides.forEach((guide) => {
    e.json(`${guide.mod}:guideme_guides/guide.json`, {
      item_settings: {
        display_name: {
          type: 'translatable',
          translate: `${guide.mod}.guide_name`,
        },
        tooltip_lines: [Text.gray(guide.text)],
        model: `${guide.mod}:item/${guide.model}`,
      },
    });
  });
});
