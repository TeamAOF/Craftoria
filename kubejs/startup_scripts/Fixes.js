ItemEvents.modification((e) => {
  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach((qItem) => {
    e.modify(`modern_industrialization:quantum_${qItem}`, (item) => {
      item.rarity = 'epic';
    });
  });
});

const $PolyLib = Java.loadClass('net.creeperhost.polylib.PolyLib');

StartupEvents.postInit((e) => {
  $PolyLib.initPolyItemData(); // Fixes Shrink spamming logs.
});
