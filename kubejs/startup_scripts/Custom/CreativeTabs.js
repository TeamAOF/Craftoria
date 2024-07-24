StartupEvents.modifyCreativeTab('kubejs:tab', (event) => {
	event.icon = 'craftoria:logo';
	event.displayName = 'Craftoria';

	let compressedBlocks = nonSortedCompressedBlocks;
	event.remove(compressedBlocks);
	compressedBlocks = compressedBlocks.sort((a, b) => {
		a = a.replace('craftoria:', '').split('_');
		b = b.replace('craftoria:', '').split('_');
		let typeA = a.slice(2, a.length - 1).join('_');
		let typeB = b.slice(2, b.length - 1).join('_');
		let compressionA = parseInt(a[0]);
		let compressionB = parseInt(b[0]);
		if (typeA < typeB) return -1;
		if (typeA > typeB) return 1;
		return compressionA - compressionB;
	});

	event.add(compressedBlocks);
});
