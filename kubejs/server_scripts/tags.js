ServerEvents.tags('item', (e) => {
	//Fixes ae2 wrenches not working as wrenches for other mods, and other mods not recognizing them as wrenches.
	//Should be removed when AE2 fixes this on their end.
	e.add('c:tools/wrench', ['#ae2:quartz_wrench', 'ae2:network_tool']);
	e.add('c:tools/wrenches', '#c:wrenches');
	e.remove('c:dyes/yellow', 'mekanism:dust_sulfur');
	e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');
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
