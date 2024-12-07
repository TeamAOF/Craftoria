////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((e) => {
  // Obsidian Dust
  miMacerator(e, ['minecraft:obsidian', 1], [['mekanism:dust_obsidian', 4]], 2, 200);

  // Ores > Raw
  miMacerator(e, ['c:ores/silver', 1], [['modern_industrialization:raw_silver', 3]], 2, 100);
  miMacerator(e, ['c:ores/mithril', 1], [['irons_spellbooks:raw_mithril', 3]], 2, 100);
  miMacerator(e, ['c:ores/black_quartz', 1], [['actuallyadditions:black_quartz', 2]], 2, 100);

  e.replaceInput({ id: 'industrialization_overdrive:machines/multi_processing_array/craft' }, 'modern_industrialization:assembler', 'extended_industrialization:processing_array');

  // Mekanism Compat
  miMacerator(
    e,
    ['c:ores/fluorite', 1],
    [
      ['mekanism:dust_fluorite', 4],
      ['mekanism:dust_fluorite', 4, 0.75],
    ],
    2,
    100
  );
  miCompressor(e, ['c:dusts/fluorite', 1], ['mekanism:fluorite_gem', 1], 2, 50);

  e.shaped('mi_tweaks:flux_transformer', ['SS ', ' HC', 'SS '], {
    S: 'modern_industrialization:superconductor_cable',
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables',
  }).id('mi_tweaks:flux_transformer');

  ['gold', 'iron'].forEach((material) => {
    e.replaceInput({ mod: 'modern_industrialization' }, `#c:gears/${material}`, `modern_industrialization:${material}_gear`);
  });

  // cutting machine recipes to give other modded logs parity with vanilla:
  const modded_logs = [
    'biomeswevegone:aspen',
    'biomeswevegone:baobab',
    'biomeswevegone:blue_enchanted',
    'biomeswevegone:cika',
    'biomeswevegone:cypress',
    'biomeswevegone:ebony',
    'biomeswevegone:fir',
    'biomeswevegone:florus',
    'biomeswevegone:green_enchanted',
    'biomeswevegone:holly',
    'biomeswevegone:ironwood',
    'biomeswevegone:jacaranda',
    'biomeswevegone:mahogany',
    'biomeswevegone:maple',
    'biomeswevegone:palm',
    'biomeswevegone:pine',
    'biomeswevegone:rainbow_eucalyptus',
    'biomeswevegone:redwood',
    'biomeswevegone:sakura',
    'biomeswevegone:skyris',
    'biomeswevegone:spirit',
    'biomeswevegone:white_mangrove',
    'biomeswevegone:willow',
    'biomeswevegone:witch_hazel',
    'biomeswevegone:zelkova',
	  'eternal_starlight:lunar',
	  'eternal_starlight:northland',
	  'eternal_starlight:starlight_mangrove',
	  'eternal_starlight:scarlet',
	  'eternal_starlight:torreya',
  ];
  
  // common factors for all recipes:
  let w_lube = ['modern_industrialization:lubricant', 1];
  let w_eu = 2;
  let w_t = 100;
  
  modded_logs.forEach((wood) => {
	  miCuttingMachine(e, w_lube, [`#${wood}_logs`, 1], [`${wood}_planks`, 6], w_eu, w_t);
	  if (`${wood}` != 'biomeswevegone:florus') {
	    miCuttingMachine(e, w_lube, [`${wood}_log`, 1], [(`${wood}_log`).replace(':', ':stripped_'), 1], w_eu, w_t);
	  } else {
	    miCuttingMachine(e, w_lube, [`${wood}_stem`, 1], [(`${wood}_stem`).replace(':', ':stripped_'), 1], w_eu, w_t);
	  };
	  miCuttingMachine(e, w_lube, [`${wood}_wood`, 1], [(`${wood}_wood`).replace(':', ':stripped_'), 1], w_eu, w_t);
  });
  
  // ars nouveau logs (plus addons) all output the same planks:
  miCuttingMachine(e, w_lube, ['c:logs/archwood', 1], ['ars_nouveau:archwood_planks', 6], w_eu, w_t);

  const arch_logs = [
    'green',
    'blue',
	  'red',
    'purple'
  ];

  // ars nouveau stripped logs/wood:
  arch_logs.forEach((colour) => {
    miCuttingMachine(e, w_lube, [`ars_nouveau:${colour}_archwood_log`, 1], [`ars_nouveau:stripped_${colour}_archwood_log`, 1], w_eu, w_t);
    miCuttingMachine(e, w_lube, [`ars_nouveau:${colour}_archwood_wood`, 1], [`ars_nouveau:stripped_${colour}_archwood_wood`, 1], w_eu, w_t);
  });
  
  // ars elemental is different from its parent mod for ... reasons:
  miCuttingMachine(e, w_lube, ['ars_elemental:yellow_archwood_log', 1], ['ars_elemental:stripped_yellow_archwood_log', 1], w_eu, w_t);
  miCuttingMachine(e, w_lube, ['ars_elemental:yellow_archwood', 1], ['ars_elemental:stripped_yellow_archwood', 1], w_eu, w_t);
  
  // integrated dynamics handled separately due to inconsistent naming:
  miCuttingMachine(e, w_lube, ['#integrateddynamics:menril_logs', 1], ['integrateddynamics:menril_planks', 6], w_eu, w_t);
  miCuttingMachine(e, w_lube, ['integrateddynamics:menril_log', 1], ['integrateddynamics:menril_log_stripped', 1], w_eu, w_t);
  miCuttingMachine(e, w_lube, ['integrateddynamics:menril_wood', 1], ['integrateddynamics:menril_wood_stripped', 1], w_eu, w_t);
});
