ClientEvents.generateAssets('after_mods', (e) => {
  const guides = [
    { mod: 'modern_industrialization', text: 'Technology For Newbies', model: 'guidebook' },
    { mod: 'craftoria', text: 'Miscellaneous guides', model: 'logo' },
  ];

  guides.forEach((guide) => {
    let guideJson = {
      item_settings: {
        display_name: {
          type: 'translatable',
          translate: `${guide.mod}.guide_name`,
        },
        tooltip_lines: [Text.gray(guide.text).italic()],
        model: `${guide.mod}:item/${guide.model}`,
      },
    };

    e.json(`${guide.mod}:guideme_guides/guide.json`, guideJson);
  });
});
