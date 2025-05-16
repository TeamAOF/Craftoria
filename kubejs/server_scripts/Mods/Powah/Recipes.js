ServerEvents.recipes(e => {
  let energizing = e.recipes.powah.energizing;

  const reactors = [
    { id: 'reactor_starter', capacitor: 'capacitor_basic_tiny', previous: 'dielectric_casing' },
    { id: 'reactor_basic', capacitor: 'capacitor_basic_large', previous: 'reactor_starter' },
    { id: 'reactor_hardened', capacitor: 'capacitor_hardened', previous: 'reactor_basic' },
    { id: 'reactor_blazing', capacitor: 'capacitor_blazing', previous: 'reactor_hardened' },
    { id: 'reactor_niotic', capacitor: 'capacitor_niotic', previous: 'reactor_blazing' },
    { id: 'reactor_spirited', capacitor: 'capacitor_spirited', previous: 'reactor_niotic' },
    { id: 'reactor_nitro', capacitor: 'capacitor_nitro', previous: 'reactor_spirited' },
  ];

  reactors.forEach(_ => {
    let { id, capacitor, previous } = _;
    e.shaped(`powah:${id}`, ['ABA', 'BCB', 'ABA'], {
      A: 'powah:uraninite',
      B: `powah:${capacitor}`,
      C: `powah:${previous}`,
    }).id(`powah:crafting/${id}`);
  });

  // prettier-ignore
  const solarPanels = [
    { output: 'powah:solar_panel_starter', input: 'powah:photoelectric_pane', circuit: 'mekanism:basic_control_circuit', capacitor: 'powah:capacitor_basic', energy: 10000 },
    { output: 'powah:solar_panel_basic', input: 'powah:solar_panel_starter', circuit: 'mekanism:advanced_control_circuit', capacitor: 'powah:capacitor_basic_large', energy: 100000 },
    { output: 'powah:solar_panel_hardened', input: 'powah:solar_panel_basic', circuit: 'mekanism:advanced_control_circuit', capacitor: 'powah:capacitor_hardened', energy: 500000 },
    { output: 'powah:solar_panel_blazing', input: 'powah:solar_panel_hardened', circuit: 'mekanism:elite_control_circuit', capacitor: 'powah:capacitor_blazing', energy: 1000000 },
    { output: 'powah:solar_panel_niotic', input: 'powah:solar_panel_blazing', circuit: 'mekanism:elite_control_circuit', capacitor: 'powah:capacitor_niotic', energy: 10000000 },
    { output: 'powah:solar_panel_spirited', input: 'powah:solar_panel_niotic', circuit: 'mekanism:ultimate_control_circuit', capacitor: 'powah:capacitor_spirited', energy: 50000000 },
    { output: 'powah:solar_panel_nitro', input: 'powah:solar_panel_spirited', circuit: 'mekanism:ultimate_control_circuit', capacitor: 'powah:capacitor_nitro', energy: 100000000 },
  ];

  solarPanels.forEach(_ => {
    let { output, input, circuit, capacitor, energy } = _;
    energizing(output, [input, '#c:plastics', circuit, capacitor, capacitor, capacitor], energy).id(`powah:crafting/${ID.path(output)}`);
  });

  energizing('2x powah:energized_steel_block', ['#c:storage_blocks/iron', '#c:storage_blocks/gold'], 81000);
  energizing('powah:blazing_crystal_block', ['craftoria:blaze_block'], 982000);
  energizing('powah:niotic_crystal_block', ['#c:storage_blocks/diamond'], 2430000);
  energizing('powah:spirited_crystal_block', ['#c:storage_blocks/emerald'], 8100000);
});
