ServerEvents.recipes((e) => {
  e.custom({
    type: 'integrateddynamics:squeezer',
    input_item: Ingredient.of('ars_nouveau:experience_gem').toJson(),
    output_fluid: Fluid.of('60x justdirethings:xp_fluid_source').toJson(),
  });
  e.custom({
    type: 'integrateddynamics:squeezer',
    input_item: Ingredient.of('ars_nouveau:greater_experience_gem').toJson(),
    output_fluid: Fluid.of('240x justdirethings:xp_fluid_source').toJson(),
  });
});
