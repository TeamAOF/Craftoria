ServerEvents.generateData('after_mods', e => {
  /**
   * @typedef MDUpgrade
   * @property {number} [addFilterSlots]
   * @property {number} [addItemCount]
   * @property {number} [addItemSpeed]
   * @property {number} [addItemTransferFrequency]
   * @property {number} [addFluidTransfer]
   * @property {number} [multiplyFluidTransfer]
   * @property {boolean} [enableAdvancedBehavior]
   * @property {number} [slotLimit]
   */

  /** @type {Record<Special.Item, MDUpgrade} */
  const upgrades = {
    'mekanism:elite_control_circuit': {
      addFilterSlots: 3,
      addFluidTransfer: 2,
      addItemCount: 30,
      enableAdvancedBehavior: true,
      slotLimit: 6,
    },
    'mekanism:ultimate_control_circuit': {
      addFilterSlots: 4,
      addFluidTransfer: 4,
      addItemCount: 40,
      enableAdvancedBehavior: true,
      slotLimit: 6,
    },
    'modern_industrialization:large_motor': {
      addItemSpeed: 2,
      addItemTransferFrequency: 2,
      slotLimit: 5,
    },
    'modern_industrialization:advanced_motor': {
      addItemSpeed: 4,
      addItemTransferFrequency: 4,
      slotLimit: 5,
    },
    'modern_industrialization:large_advanced_motor': {
      addItemSpeed: 6,
      addItemTransferFrequency: 6,
      slotLimit: 5,
    },
    'modern_industrialization:large_pump': {
      addFluidTransfer: 2,
      multiplyFluidTransfer: 2,
      slotLimit: 9,
    },
    'modern_industrialization:advanced_pump': {
      addFluidTransfer: 4,
      multiplyFluidTransfer: 4,
      slotLimit: 9,
    },
    'modern_industrialization:large_advanced_pump': {
      addFluidTransfer: 6,
      multiplyFluidTransfer: 6,
      slotLimit: 9,
    },
  };

  Object.entries(upgrades).forEach(([id, data]) => {
    let path = `modern_dynamics:attachment_upgrades/${ID.namespace(id)}/${ID.path(id)}`;

    let json = JSON.parse(JSON.stringify(data));

    json.item = id;
    json['neoforge:conditions'] = [
      {
        type: 'neoforge:mod_loaded',
        modid: ID.namespace(id),
      }
    ];

    e.json(path, json);
  });
});
