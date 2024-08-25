ServerEvents.tags('item', (e) => {
  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');
  e.add('c:storage_blocks/amethyst', 'minecraft:amethyst_block');
  e.add('c:storage_blocks/fluix', 'ae2:fluix_block');
  e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');

  e.add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet']);

  // Crops & Seeds
  e.add('c:seeds/cabbage', 'farmersdelight:cabbage_seeds');
  e.add('c:seeds/tomato', 'farmersdelight:tomato_seeds');
  e.add('c:seeds/rice', 'sushigocrafting:rice_seeds');
});

ServerEvents.tags('block', (e) => {
  e.add('ftbchunks:interact_whitelist', ['@waystones']);

  let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

  colors.forEach((color) => {
    e.add('c:glass_blocks', `#chipped:${color}_stained_glass`);
    e.add('c:glass_panes', `#chipped:${color}_stained_glass_pane`);
  });

  e.add('c:glass_blocks', ['#chipped:glass']);
  e.add('c:glass_panes', ['#chipped:glass_pane']);

  e.add('minecraft:mineable/pickaxe', [
    '#c:glass_blocks',
    '#c:glass_panes',
    '#chipped:glowstone',
    /^mekanism:(basic|advanced|elite|ultimate)_(universal_cable|mechanical_pipe|pressurized_tube|logistical_transporter|thermodynamic_conductor)$/,
    'mekanism:diversion_transporter',
    'mekanism:restrictive_transporter',
  ]);

  e.add('minecraft:mineable/axe', ['mekanism:cardboard_box']);

  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');

  e.add('c:budding', '#c:budding_blocks');
});

ServerEvents.tags('fluid', (e) => {
  e.add('c:lubricant', 'modern_industrialization:lubricant');
  e.add('c:plantoil', 'modern_industrialization:plant_oil');
  e.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil');
});
