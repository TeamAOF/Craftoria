ClientEvents.lang('en_us', e => {
  let langEntries = {
    'lef_tier.extended_industrialization.modern_industrialization.superconductor_coil': 'Superconductor',
    'rei_categories.modern_industrialization.electric_blast_furnace_superconductor_coil': 'EBF (Superconductor Tier)',
    'ebf_tier.modern_industrialization.superconductor_coil': 'Superconductor',
    'pyro_tier.industrialization_overdrive.modern_industrialization.superconductor_coil': 'Superconductor',

    'block.modern_industrialization.replicator': 'Replicator Mk II',
    'machine_casing.modern_industrialization.sky_stone_brick_casing': 'Sky Stone Brick Casing',

    // Renaming IF gears
    'item.industrialforegoing.iron_gear': 'Crude Iron Gear',
    'item.industrialforegoing.gold_gear': 'Crude Gold Gear',
    'item.industrialforegoing.diamond_gear': 'Crude Diamond Gear',

    // Gateways
    'craftoria.endless/boss': 'Endless Boss Gateway',
    'craftoria.bomd': 'Trials of Awaken',

    // Guidebooks
    'craftoria.guide_name': 'Craftoria Guidebook',
    'modern_industrialization.guide_name': 'MI Guidebook',

    // Lang fixes
    'chemical.mekanism_extras.radiance': 'Radiance',
    'chemical.mekanism_extras.thermonuclear': 'Thermonuclear',
    'chemical.mekanism_extras.shining': 'Shining',
    'chemical.mekanism_extras.spectrum': 'Spectrum',
  };

  // Adding custom MI machines to lang entries
  global.customMIMachines.forEach(machine => {
    let langValue = machine.id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    if (machine.lang) {
      let langKey = `${machine.mod ?? 'modern_industrialization'}.${machine.id}`;
      for (const [key, value] of Object.entries(machine.lang)) {
        langEntries[`${key}.${langKey}`] = value;
      }
    } else {
      let langKey = `block.${machine.mod ?? 'modern_industrialization'}.${machine.id}`;
      langEntries[langKey] = langValue;
    }
  });

  e.addAll('craftoria', langEntries);
});
