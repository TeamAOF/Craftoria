// Priority: 998
/**
 * This script is used to unify items from different mods.
 * It will replace items from the #c tag with the first mod(defined in modPriority) that has the item.
 * For now, @white.phantom signing off.
 */

let getItemFromTag = (tag) => {
	try {
		let items = Ingredient.of(tag).itemIds;
		if (items.length > 0) {
			items = sortArray(items.toArray());
			return items[0];
		} else return false;
	} catch (error) {
		if (debug) console.error(`Could not find item for tag: ${tag}`);
	}
};

let checkTagSize = (tag) => {
	try {
		let size = Ingredient.of(tag).itemIds.length;
		if (debug) console.log(`Found ${size} items for tag: ${tag}`);
		return size;
	} catch (error) {
		if (debug) console.error(`Could not find item for tag: ${tag}`);
		return 0;
	}
};

// Sort the array by modPriority.
let sortArray = (array) => {
	return array.sort((a, b) => {
		a = `${a}`;
		b = `${b}`;
		// Sort by modid, prefer mods in the modPriority list. If not in the list, put it at the end.
		let modA = modPriority.indexOf(a.split(':')[0]);
		let modB = modPriority.indexOf(b.split(':')[0]);
		if (modA === -1) modA = modPriority.length;
		if (modB === -1) modB = modPriority.length;
		if (modA !== modB) return modA - modB;
		// If the mods are the same, sort by item name.
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});
};

ServerEvents.tags('item', (e) => {
	let tags = [];

	for (let [material, types] of Object.entries(materials)) {
		switch (material) {
			case 'metals':
				metals.forEach((metal) => {
					types.forEach((type) => {
						tags.push(`c:${type}/${metal}`);
						if (type === 'raw_materials') tags.push(`c:storage_blocks/raw_${metal}`);
					});
				});
				break;
			case 'gems':
				gems.forEach((gem) => {
					types.forEach((type) => {
						tags.push(`c:${type}/${gem}`);
					});
				});
				break;
			case 'misc':
				misc.forEach((misc) => {
					types.forEach((type) => {
						tags.push(`c:${type}/${misc}`);
					});
				});
				break;
			default:
				console.error(`Unknown material: ${material}`);
				break;
		}
	}

	tags.forEach((tag) => {
		let items = e.get(tag).getObjectIds();
		let sortedItems = [];
		items.forEach((item) => {
			sortedItems.push(item);
		});
		sortedItems = sortArray(sortedItems);
		if (Item.exists(sortedItems[0])) {
			e.removeAll(tag);
			e.add(tag, sortedItems);
		}
	});
});

ServerEvents.recipes((e) => {
	let yeets = ['mffs:steel_compound'];

	yeets.forEach((id) => {
		e.remove({ output: id });
	});

	let replaceFilters = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting'];

	let tryReplace = (replace) => {
		let replaceWith = getItemFromTag(replace);
		if (replaceWith) {
			let filters = [];
			replaceFilters.forEach((filter) => {
				filters.push({ type: filter });
			});
			e.replaceOutput(filters, replace, replaceWith);
			e.replaceInput(filters, replace, replace);
		} else if (debug) {
			console.error(`Could not find item for tag: ${replace}`);
		}
	};

	for (let [material, types] of Object.entries(materials)) {
		switch (material) {
			case 'metals':
				metals.forEach((metal) => {
					types.forEach((type) => {
						tryReplace(`#c:${type}/${metal}`);
						if (type === 'raw_materials') tryReplace(`#c:storage_blocks/raw_${metal}`);
					});
				});
				break;
			case 'gems':
				gems.forEach((gem) => {
					types.forEach((type) => {
						tryReplace(`#c:${type}/${gem}`);
					});
				});
				break;
			case 'misc':
				misc.forEach((misc) => {
					types.forEach((type) => {
						tryReplace(`#c:${type}/${misc}`);
					});
				});
				break;
			default:
				console.error(`Unknown material: ${material}`);
				break;
		}
	}
});
