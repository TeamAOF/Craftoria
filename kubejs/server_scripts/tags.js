ServerEvents.tags('item', (e) => {
	e.remove('c:dyes/yellow', 'mekanism:dust_sulfur');
	e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');
	e.add('c:storage_blocks/amethyst', 'minecraft:amethyst_block');
	e.add('c:storage_blocks/fluix', 'ae2:fluix_block');
});

ServerEvents.tags('block', (e) => {
	e.add('ftbchunks:interact_whitelist', ['@waystones']);

	e.add('minecraft:mineable/pickaxe', [
		'#c:glass_blocks',
		'#c:glass_panes',
		'#chipped:glowstone',
		/^mekanism:(basic|advanced|elite|ultimate)_(universal_cable|mechanical_pipe|pressurized_tube|logistical_transporter|thermodynamic_conductor)$/,
		'mekanism:diversion_transporter',
		'mekanism:restrictive_transporter',
	]);

	e.add('minecraft:mineable/axe', ['mekanism:cardboard_box']);
});
