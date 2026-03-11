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
  create.pressing()
    .itemOut('modern_industrialization:tin_plate')
    .itemIn('modern_industrialization:tin_ingot')
    .id('craftoria:create/pressing/tin_ingot_to_tin_plate')
});
