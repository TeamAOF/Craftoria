ServerEvents.recipes((e) => {
  let assembler = e.recipes.modern_industrialization.assembler;

  assembler(8192 * 16, 20 * 50)
    .itemOut('craftoria:cosmic_injector')
    .itemIn('4x craftoria:cosmic_matter')
    .itemIn('2x modern_industrialization:stainless_steel_bolt')
    .itemIn('2x minecraft:glass_pane')
    .itemIn('4x modern_industrialization:bronze_plate')
    .id('craftoria:assembler/electric_age/cosmic_injector');
});
