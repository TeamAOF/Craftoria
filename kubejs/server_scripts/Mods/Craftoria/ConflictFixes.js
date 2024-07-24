ServerEvents.recipes((e) => {
	// Fixes Handcrafted Cupboards and Functional Storage 1x1 Drawers conflicting
	Ingredient.of('#handcrafted:cupboards').itemIds.forEach((item) => {
		e.remove({ output: item });
		let item2 = item.split(':')[1].replace('_cupboard', '');
		e.shaped(`3x ${item}`, ['AAA', 'BCB', 'AAA'], {
			A: `minecraft:${item2}_planks`,
			B: `minecraft:${item2}_slab`,
			C: '#c:chests',
		}).id(`craftoria:handcrafted/${item2}_cupboard`);
	});
});
