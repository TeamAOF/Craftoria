ItemEvents.modification(e => {
  ['helmet', 'chestplate', 'leggings', 'boots', 'sword'].forEach(qItem => {
    e.modify(`modern_industrialization:quantum_${qItem}`, item => {
      item.rarity = 'epic';
    });
  });

  e.modify('cataclysm:ring_of_grudged', item => {
    item.attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute('cataclysm:additional_critical_damage', 'ring', 10, 'add_value')
    );
  });

  // e.modify('cataclysm:belt_of_beginner', item => {
  //   let map = item.curiosSlotModifiers();
  //   CuriosApi.addSlotModifier(map, 'belt', 'belt', 2, 'add_value');
  // });
});

const $PolyLib = Java.loadClass('net.creeperhost.polylib.PolyLib');

StartupEvents.postInit(e => {
  $PolyLib.initPolyItemData(); // Fixes Shrink spamming logs.
});
