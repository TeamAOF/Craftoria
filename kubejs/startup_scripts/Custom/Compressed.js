StartupEvents.registry('block', (event) => {
	let cBlockBaseModel = {
		parent: 'minecraft:block/block',
		textures: {
			all: '#all',
			overlay: '#overlay',
			particle: '#all',
		},
		elements: [
			{
				faces: {
					down: { texture: '#all' },
					east: { texture: '#all' },
					north: { texture: '#all' },
					south: { texture: '#all' },
					up: { texture: '#all' },
					west: { texture: '#all' },
				},
				from: [0, 0, 0],
				to: [16, 16, 16],
			},
			{
				faces: {
					down: { texture: '#overlay' },
					east: { texture: '#overlay' },
					north: { texture: '#overlay' },
					south: { texture: '#overlay' },
					up: { texture: '#overlay' },
					west: { texture: '#overlay' },
				},
				from: [0, 0, 0],
				to: [16, 16, 16],
			},
		],
	};

	let compressedVanillaBlocks = [
		{ name: 'Iron', texture: 'iron_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Gold', texture: 'gold_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Diamond', texture: 'diamond_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Emerald', texture: 'emerald_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Redstone', texture: 'redstone_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Lapis', texture: 'lapis_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Quartz', texture: 'quartz_block_side', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Copper', texture: 'copper_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Netherite', texture: 'netherite_block', soundType: 'metal', tool: 'pickaxe' },
		{ name: 'Sand', texture: 'sand', soundType: 'sand', tool: 'shovel' },
		{ name: 'Gravel', texture: 'gravel', soundType: 'gravel', tool: 'shovel' },
		{ name: 'Dirt', texture: 'dirt', soundType: 'gravel', tool: 'shovel' },
		{ name: 'Cobblestone', texture: 'cobblestone', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Stone', texture: 'stone', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Andesite', texture: 'andesite', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Diorite', texture: 'diorite', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Granite', texture: 'granite', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Basalt', texture: 'basalt_side', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Blackstone', texture: 'blackstone', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'Netherrack', texture: 'netherrack', soundType: 'stone', tool: 'pickaxe' },
		{ name: 'End Stone', texture: 'end_stone', soundType: 'stone', tool: 'pickaxe' },
	];

	for (let i = 1; i < 10; i++) {
		compressedVanillaBlocks.forEach((block) => {
			let cBlockModel = cBlockBaseModel;
			cBlockModel.textures.all = `minecraft:block/${block.texture}`;
			cBlockModel.textures.overlay = `craftoria:block/overlays/${i}x_compressed`;
			event
				.create(`craftoria:${i}x_compressed_${block.name.replace(' ', '_').toLowerCase()}_block`)
				.displayName(`${i}x Compressed ${block.name} Block`)
				.renderType('translucent')
				.soundType(block.soundType)
				.hardness(i)
				.resistance(6)
				.tagBoth(`craftoria:${i}x_compressed/${block.name.replace(' ', '_').toLowerCase()}`)
				.tagBlock(`minecraft:mineable/${block.tool}`).modelJson = cBlockModel;
		});
	}
});
