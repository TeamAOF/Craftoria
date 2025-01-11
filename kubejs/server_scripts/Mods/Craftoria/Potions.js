ServerEvents.generateData('after_mods', (e) => {
  ['extra_long_flying_from_long_flying', 'long_flying_from_flying', 'flying_from_levitation'].forEach((potion) => {
    e.json(`apothic_attributes:brewing_mixes/${potion}`, {
      'neoforge:conditions': [
        {
          type: 'neoforge:false',
        },
      ],
    });
  });
});
