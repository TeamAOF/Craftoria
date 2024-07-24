ServerEvents.recipes(e => {

    let energizing = e.recipes.powah.energizing

    e.remove({ id: 'powah:crafting/solar_panel_starter' })

    energizing('powah:solar_panel_starter', ['powah:photoelectric_pane', 'mekanism:hdpe_sheet', 'mekanism:basic_control_circuit', 'powah:capacitor_basic', 'powah:capacitor_basic', 'powah:capacitor_basic'], 10000)

    e.remove({ id: 'powah:crafting/solar_panel_basic' })

    energizing('powah:solar_panel_basic', ['powah:solar_panel_starter', 'mekanism:hdpe_sheet', 'mekanism:advanced_control_circuit', 'powah:capacitor_basic_large', 'powah:capacitor_basic_large', 'powah:capacitor_basic_large'], 100000)

    e.remove({ id: 'powah:crafting/solar_panel_hardened' })

    energizing('powah:solar_panel_hardened', ['powah:solar_panel_basic', 'mekanism:hdpe_sheet', 'mekanism:advanced_control_circuit', 'powah:capacitor_hardened', 'powah:capacitor_hardened', 'powah:capacitor_hardened'], 500000)

    e.remove({ id: 'powah:crafting/solar_panel_blazing' })

    energizing('powah:solar_panel_blazing', ['powah:solar_panel_hardened', 'mekanism:hdpe_sheet', 'mekanism:elite_control_circuit', 'powah:capacitor_blazing', 'powah:capacitor_blazing', 'powah:capacitor_blazing'], 1000000)

    e.remove({ id: 'powah:crafting/solar_panel_niotic' })

    energizing('powah:solar_panel_niotic', ['powah:solar_panel_blazing', 'mekanism:hdpe_sheet', 'mekanism:elite_control_circuit', 'powah:capacitor_niotic', 'powah:capacitor_niotic', 'powah:capacitor_niotic'], 10000000)

    e.remove({ id: 'powah:crafting/solar_panel_spirited' })

    energizing('powah:solar_panel_spirited', ['powah:solar_panel_niotic', 'mekanism:hdpe_sheet', 'mekanism:ultimate_control_circuit', 'powah:capacitor_spirited', 'powah:capacitor_spirited', 'powah:capacitor_spirited'], 50000000)

    e.remove({ id: 'powah:crafting/solar_panel_nitro' })

    energizing('powah:solar_panel_nitro', ['powah:solar_panel_spirited', 'mekanism:hdpe_sheet', 'mekanism:ultimate_control_circuit', 'powah:capacitor_nitro', 'powah:capacitor_nitro', 'powah:capacitor_nitro'], 100000000)

});
