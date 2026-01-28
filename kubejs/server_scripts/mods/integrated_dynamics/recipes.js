ServerEvents.recipes(e => {
  const toXPFluid = {
    'ars_nouveau:experience_gem': 60,
    'ars_nouveau:greater_experience_gem': 240,
    'ars_technica:giant_experience_gem': 960,
    'ars_technica:gargantuan_experience_gem': 3840,
  };

  for (const [input, amount] of Object.entries(toXPFluid)) {
    let recipe = {
      type: 'integrateddynamics:squeezer',
      input_item: Ingredient.of(input).toJson(),
      output_fluid: Fluid.of(`${amount}x justdirethings:xp_fluid_source`).toJson(),
    };

    e.custom(recipe).id(`craftoria:id/squeezer/${input.split(':')[1]}_to_xp_fluid`);
  }
});
