ServerEvents.recipes(e => {
  const create = CreateHelper(e);

  create.splashing()
    .itemOut('9x modern_industrialization:silver_nugget')
    .itemIn('create:crushed_raw_silver')
    .id('craftoria:create/splashing/crushed_raw_silver_to_silver_nugget');

  create.splashing()
    .itemOut('9x modern_industrialization:nickel_nugget')
    .itemIn('create:crushed_raw_nickel')
    .id('craftoria:create/splashing/crushed_raw_nickel_to_nickel_nugget');

  e.smelting('modern_industrialization:silver_ingot', 'create:crushed_raw_silver');
  e.smelting('modern_industrialization:nickel_ingot', 'create:crushed_raw_nickel');

  // added all MI plate to create press, exclude nuclear alloy, blastproof, iridium plate 
  const materials = ['aluminum', 'annealed_copper', 'battery_alloy', 'beryllium', 'bronze',
    'cadmium', 'chromium', 'cupronickel', 'electrum', 'invar', 'kanthal', 'lead', 'nickel', 
    'platinum', 'silicon', 'silver', 'stainless_steel', 'steel', 'superconductor', 'tin', 
    'titanium', 'tungsten']
    
  materials.forEach(material => {
    create.pressing()
      .itemOut(`modern_industrialization:${material}_plate`)
      .itemIn(`modern_industrialization:${material}_ingot`)
      .id(`craftoria:create/pressing/${material}_ingot_to_${material}`)
  });
});
