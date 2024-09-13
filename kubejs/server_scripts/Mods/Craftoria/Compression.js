ServerEvents.recipes((e) => {
  for (let i = 1; i < 9; i++) {
    let i2 = i + 1;
    Ingredient.of(`#craftoria:${i}x_compressed`).itemIds.forEach((item) => {
      item = item
        .split(':')[1]
        .replace('_compressed', '')
        .replace(/([0-9])x_/, '');

      e.shaped(`craftoria:${i2}x_compressed_${item}`, ['AAA', 'AAA', 'AAA'], {
        A: `craftoria:${i}x_compressed_${item}`,
      }).id(`craftoria:compression/${item}/${i}x_to_${i2}x`);

      e.shapeless(`9x craftoria:${i}x_compressed_${item}`, [`craftoria:${i2}x_compressed_${item}`]).id(`craftoria:decompression/${item}/${i2}x_to_${i}x`);
    });
  }

  Ingredient.of('#craftoria:1x_compressed').itemIds.forEach((item) => {
    item = item.split(':')[1].replace('_compressed', '').replace('1x_', '').replace('_block', '');
    if (getItemFromTag(`#c:storage_blocks/${item}`)) {
      e.shaped(`craftoria:1x_compressed_${item}_block`, ['AAA', 'AAA', 'AAA'], {
        A: `#c:storage_blocks/${item}`,
      }).id(`craftoria:compression/${item}_block/0x_to_1x`);

      e.shapeless(`9x ${getItemFromTag(`#c:storage_blocks/${item}`)}`, [`craftoria:1x_compressed_${item}_block`]).id(`craftoria:decompression/${item}_block/1x_to_0x`);
    } else if (Item.exists(`minecraft:${item}`)) {
      e.shaped(`craftoria:1x_compressed_${item}_block`, ['AAA', 'AAA', 'AAA'], {
        A: `minecraft:${item}`,
      }).id(`craftoria:compression/${item}_block/0x_to_1x`);

      e.shapeless(`9x minecraft:${item}`, [`craftoria:1x_compressed_${item}_block`]).id(`craftoria:decompression/${item}_block/1x_to_0x`);
    } else {
      console.error(`Could not find item for tag: #c:storage_blocks/${item}, Nor could it find item with ID: minecraft:${item}
        Please report this to the modpack authors.`);
    }
  });
});

ItemEvents.modifyTooltips((e) => {
  for (let i = 1; i <= 9; i++) {
    let totalBlocks = Math.pow(9, i);
    let shortTotalBlocks = abbrNum(totalBlocks, 1);
    let longTotalBlocks = addDecimals(totalBlocks);
    //console.log(shortTotalBlocks);
    Ingredient.of(`#craftoria:${i}x_compressed`).itemIds.forEach((item) => {
      item = item
        .split(':')[1]
        .replace('_compressed', '')
        .replace(/([0-9])x_/, '');
      e.add(`craftoria:${i}x_compressed_${item}`, { shift: false }, Text.gold(`Total Blocks: ${shortTotalBlocks}`));
      e.add(`craftoria:${i}x_compressed_${item}`, { shift: true }, Text.gold(`Total Blocks: ${longTotalBlocks}`));
    });
  }
});

let abbrNum = (num, decPlaces) => {
  decPlaces = Math.pow(10, decPlaces);
  let abbrev = ['K', 'M', 'B', 'T'];
  for (let i = abbrev.length - 1; i >= 0; i--) {
    let size = Math.pow(10, (i + 1) * 3);
    if (size <= num) {
      num = Math.round((num * decPlaces) / size) / decPlaces;
      if (num === 1000 && i < abbrev.length - 1) {
        num = 1;
        i++;
      }
      num += abbrev[i];
      break;
    }
  }
  return num;
};

let addDecimals = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
