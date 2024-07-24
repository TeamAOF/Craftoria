RecipeViewerEvents.removeEntries('item', (e) => {
	let unifyHide = [];

	let hideItemsFromTag = (tag) => {
		try {
			let items = Ingredient.of(tag).itemIds;
			if (items.length > 1) {
				if (debug) console.log(`Found ${items.length} items for tag: ${tag}`);
				items = sortArray(items.toArray());
				if (!items[0].includes('ore')) {
					let _ = items.shift();
					unifyHide.push(items);
				} else {
					let groupedItems = groupByVariant(items);
					Object.values(groupedItems).forEach((variantGroup) => {
						let sortedByPriority = sortArray(variantGroup);
						if (sortedByPriority.length > 1) {
							if (debug) console.log(sortedByPriority.slice(1));
							unifyHide.push(sortedByPriority.slice(1));
						}
					});
				}
			}
		} catch (error) {
			if (debug) console.error(`Could not find item for tag: ${tag}`);
		}
	};

	let groupByVariant = (items) => {
		let groups = { regular: [], deepslate: [], nether: [], end: [] };
		items.forEach((item) => {
			if (item.includes('deepslate')) groups.deepslate.push(item);
			else if (item.includes('nether')) groups.nether.push(item);
			else if (item.includes('end')) groups.end.push(item);
			else groups.regular.push(item);
		});
		return groups;
	};

	for (let [material, types] of Object.entries(materials)) {
		switch (material) {
			case 'metals':
				metals.forEach((metal) => {
					types.forEach((type) => {
						hideItemsFromTag(`#c:${type}/${metal}`);
						if (type === 'raw_materials') hideItemsFromTag(`#c:storage_blocks/raw_${metal}`);
					});
				});
				break;
			case 'gems':
				gems.forEach((gem) => {
					types.forEach((type) => {
						hideItemsFromTag(`#c:${type}/${gem}`);
					});
				});
				break;
			case 'misc':
				misc.forEach((misc) => {
					types.forEach((type) => {
						hideItemsFromTag(`#c:${type}/${misc}`);
					});
				});
				break;
			default:
				console.error(`Unknown material: ${material}`);
				break;
		}
	}

	e.remove(unifyHide);
	e.remove(['mekanism:block_salt', 'mffs:steel_compound']);
});
