ClientEvents.generateAssets('after_mods', e => {
  const guides = [{ 
    mod: 'craftoria', 
    tooltipKey: 'tooltip.craftoria.guide.description',
    model: 'logo' 
  }];

  guides.forEach(guide => {
    let guideJson = {
      item_settings: {
        display_name: {
          type: 'translatable',
          translate: `${guide.mod}.guide_name`,
        },
        tooltip_lines: [
          Text.translate(guide.tooltipKey).gray().italic()
        ],
        model: `${guide.mod}:item/${guide.model}`,
      },
    };

    e.json(`${guide.mod}:guideme_guides/guide.json`, guideJson);
  });
});
