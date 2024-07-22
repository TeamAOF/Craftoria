ServerEvents.recipes(e => {

  let energizing = e.recipes.powah.energizing
  e.remove({ id: 'powah:crafting/reactor_starter' })

  e.shaped('powah:reactor_starter', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_basic_tiny',
    C: 'powah:dielectric_casing'
  });

  e.remove({ id: 'powah:crafting/reactor_basic' })

  e.shaped('powah:reactor_basic', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_basic_large',
    C: 'powah:reactor_starter'
  });

  e.remove({ id: 'powah:crafting/reactor_hardened' })

  e.shaped('powah:reactor_hardened', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_hardened',
    C: 'powah:reactor_basic'
  });

  e.remove({ id: 'powah:crafting/reactor_blazing' })

  e.shaped('powah:reactor_blazing', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_blazing',
    C: 'powah:reactor_hardened'
  });

  e.remove({ id: 'powah:crafting/reactor_niotic' })

  e.shaped('powah:reactor_niotic', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_niotic',
    C: 'powah:reactor_blazing'
  });

  e.remove({ id: 'powah:crafting/reactor_spirited' })

  e.shaped('powah:reactor_spirited', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_spirited',
    C: 'powah:reactor_niotic'
  });
  e.remove({ id: 'powah:crafting/reactor_nitro' })

  e.shaped('powah:reactor_nitro', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'powah:uraninite',
    B: 'powah:capacitor_nitro',
    C: 'powah:reactor_spirited'
  });
  energizing('2x powah:energized_steel_block', ['#c:storage_blocks/iron', '#c:storage_blocks/gold'], 81000)

  energizing('powah:blazing_crystal_block', ['craftoria:blaze_block'], 982000)

  energizing('powah:niotic_crystal_block', ['#c:storage_blocks/diamond'], 2430000)

  energizing('powah:spirited_crystal_block', ['#c:storage_blocks/emerald'], 8100000)
});