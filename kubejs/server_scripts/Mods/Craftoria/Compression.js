ServerEvents.recipes((e) => {
	for (let i = 1; i < 10; i++) {
		let i2 = i + 1;
		Ingredient.of(`#craftoria:${i}x_compressed`).itemIds.forEach((item) => {
			// Get only the item name, removing the modid, and the number of times it's compressed.
			item = item.split(':')[1];
			// Get the block name, removing the number of times it's compressed.
			let block = item.replace('_compressed', '').replace(/([0-9])x_/, '');

			if (i2 !== 10)
				e.shaped(`craftoria:${i2}x_compressed_${block}`, ['AAA', 'AAA', 'AAA'], {
					A: `craftoria:${i}x_compressed_${block}`,
				}).id(`craftoria:compression/${block}/${i}x_to_${i2}x`);

			e.shapeless(`9x craftoria:${i}x_compressed_${block}`, [`craftoria:${i2}x_compressed_${block}`]).id(
				`craftoria:decompression/${block}/${i2}x_to_${i}x`
			);
		});
	}

	Ingredient.of('#craftoria:1x_compressed').itemIds.forEach((item) => {
		item = item.split(':')[1].replace('_compressed', '').replace('1x_', '').replace('_block', '');
		if (getItemFromTag(`#c:storage_blocks/${item}`)) {
			e.shaped(`craftoria:1x_compressed_${item}_block`, ['AAA', 'AAA', 'AAA'], {
				A: `#c:storage_blocks/${item}`,
			}).id(`craftoria:compression/${item}_block/0x_to_1x`);

			e.shapeless(`9x ${getItemFromTag(`#c:storage_blocks/${item}`)}`, [`craftoria:1x_compressed_${item}_block`]).id(
				`craftoria:decompression/${item}_block/1x_to_0x`
			);
		} else if (Item.exists(`minecraft:${item}`)) {
			e.shaped(`craftoria:1x_compressed_${item}_block`, ['AAA', 'AAA', 'AAA'], {
				A: `minecraft:${item}`,
			}).id(`craftoria:compression/${item}_block/0x_to_1x`);

			e.shapeless(`9x minecraft:${item}`, [`craftoria:1x_compressed_${item}_block`]).id(`craftoria:decompression/${item}_block/1x_to_0x`);
		} else {
			console.error(`Could not find item for tag: #c:storage_blocks/${item}
        Nor could it find item with ID: minecraft:${item}
        Please report this to the modpack authors.`);
		}
	});
});
