ItemEvents.modifyTooltips((event) => {
	let direOres = ['Ferricore', 'Blazegold', 'Celestigem', 'Eclipse Alloy'];

	direOres.forEach((ore) => {
		let oreId = `justdirethings:raw_${ore.toLowerCase().replace(' ', '')}`;
		if (!Item.exists(oreId)) oreId = oreId.replace('raw_', '');
		event.add(oreId, [Text.gray(`Can be gained from breaking Raw ${ore} Ore.`), Text.gray(`Check EMI for how to make the ore.`)]);
	});
});
