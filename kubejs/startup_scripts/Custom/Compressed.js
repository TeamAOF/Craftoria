let nonSortedCompressedBlocks = [];

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

	let compressedBlocks = [
		{ name: 'Iron', texture: 'iron_block', modID: 'minecraft' },
		{ name: 'Gold', texture: 'gold_block', modID: 'minecraft' },
		{ name: 'Diamond', texture: 'diamond_block', modID: 'minecraft' },
		{ name: 'Emerald', texture: 'emerald_block', modID: 'minecraft' },
		{ name: 'Redstone', texture: 'redstone_block', modID: 'minecraft' },
		{ name: 'Lapis', texture: 'lapis_block', modID: 'minecraft' },
		{ name: 'Quartz', texture: 'quartz_block_side', modID: 'minecraft' },
		{ name: 'Copper', texture: 'copper_block', modID: 'minecraft' },
		{ name: 'Netherite', texture: 'netherite_block', modID: 'minecraft' },
		{ name: 'Coal', texture: 'coal_block', modID: 'minecraft' },
		{ name: 'Sand', texture: 'sand', soundType: 'sand', tool: 'shovel', modID: 'minecraft' },
		{ name: 'Gravel', texture: 'gravel', soundType: 'gravel', tool: 'shovel', modID: 'minecraft' },
		{ name: 'Dirt', texture: 'dirt', soundType: 'gravel', tool: 'shovel', modID: 'minecraft' },
		{ name: 'Clay', texture: 'clay', soundType: 'gravel', tool: 'shovel', modID: 'minecraft' },
		{ name: 'Cobblestone', texture: 'cobblestone', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Stone', texture: 'stone', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Andesite', texture: 'andesite', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Diorite', texture: 'diorite', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Granite', texture: 'granite', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Basalt', texture: 'basalt_side', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Blackstone', texture: 'blackstone', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Netherrack', texture: 'netherrack', soundType: 'stone', modID: 'minecraft' },
		{ name: 'End Stone', texture: 'end_stone', soundType: 'stone', modID: 'minecraft' },
		{ name: 'Platinum', texture: 'platinum_block', modID: 'modern_industrialization' },
		{ name: 'Aluminum', texture: 'aluminum_block', modID: 'modern_industrialization' },
		{ name: 'Lead', texture: 'lead_block', modID: 'modern_industrialization' },
		{ name: 'Nickel', texture: 'nickel_block', modID: 'modern_industrialization' },
		{ name: 'Silver', texture: 'silver_block', modID: 'modern_industrialization' },
		{ name: 'Tin', texture: 'tin_block', modID: 'modern_industrialization' },
		{ name: 'Uranium', texture: 'uranium_block', modID: 'modern_industrialization' },
		{ name: 'Bronze', texture: 'bronze_block', modID: 'modern_industrialization' },
		{ name: 'Steel', texture: 'steel_block', modID: 'modern_industrialization' },
		{ name: 'Invar', texture: 'invar_block', modID: 'modern_industrialization' },
		{ name: 'Electrum', texture: 'electrum_block', modID: 'modern_industrialization' },
		{ name: 'Cupronickel', texture: 'cupronickel_block', modID: 'modern_industrialization' },
		{ name: 'Tungsten', texture: 'tungsten_block', modID: 'modern_industrialization' },
		{ name: 'Titanium', texture: 'titanium_block', modID: 'modern_industrialization' },
		{ name: 'Iridium', texture: 'iridium_block', modID: 'modern_industrialization' },
		{ name: 'Osmium', texture: 'block_osmium', modID: 'mekanism' },
	];

	for (let i = 1; i < 10; i++) {
		compressedBlocks.forEach((block) => {
			let blockId = block.name.replace(' ', '_').toLowerCase();
			let cBlockModel = cBlockBaseModel;
			cBlockModel.textures.all = `${block.modID}:block/${block.texture}`;
			cBlockModel.textures.overlay = `craftoria:block/overlays/${i}x_compressed`;
			event
				.create(`craftoria:${i}x_compressed_${blockId}_block`)
				.displayName(`${i}x Compressed ${block.name} Block `)
				.renderType('translucent')
				.soundType(block.soundType || 'metal')
				.hardness(i)
				.resistance(6)
				.tagBoth(`craftoria:${i}x_compressed`)
				.tagBlock(`minecraft:mineable/${block.tool || 'pickaxe'}`).modelJson = cBlockModel;
			nonSortedCompressedBlocks.push(`craftoria:${i}x_compressed_${blockId}_block`);
		});
	}
});
