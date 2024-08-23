ServerEvents.tags("item", e => {
  //Fixes ae2 wrenches not working as wrenches for other mods, and other mods not recognizing them as wrenches.
  //Should be removed when AE2 fixes this on their end.
  e.add("c:tools/wrench", ["#ae2:quartz_wrench", "ae2:network_tool"]);
  e.add("c:tools/wrenches", "#c:wrenches");
  e.remove("c:dyes/yellow", "mekanism:dust_sulfur");

  e.add("minecraft:storage_blocks/quartz", "minecraft:quartz_block");
  e.add("c:storage_blocks/amethyst", "minecraft:amethyst_block");
  e.add("c:storage_blocks/fluix", "ae2:fluix_block");
  e.add("c:storage_blocks/charged_redstone", "appflux:charged_redstone_block");

  // Crops & Seeds
  e.add("c:seeds/cabbage", "farmersdelight:cabbage_seeds");
  e.add("c:seeds/tomato", "farmersdelight:tomato_seeds");
  e.add("c:seeds/rice", "sushigocrafting:rice_seeds");
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

  e.add("minecraft:mineable/axe", [
    "mekanism:cardboard_box",
  ]);

  e.add("minecraft:storage_blocks/quartz", "minecraft:quartz_block");
});
