ServerEvents.recipes(e => {

    let energizing = e.recipes.powah.energizing

    e.remove({ id: 'powah:crafting/solar_panel_starter' })
    e.remove({ id: 'powah:crafting/solar_panel_basic' })
    e.remove({ id: 'powah:crafting/solar_panel_hardened' })
    e.remove({ id: 'powah:crafting/solar_panel_blazing' })
    e.remove({ id: 'powah:crafting/solar_panel_niotic' })
    e.remove({ id: 'powah:crafting/solar_panel_spirited' })
    e.remove({ id: 'powah:crafting/solar_panel_nitro' })

    energizing('powah:solar_panel_starter', 
	    ['powah:photoelectric_pane', 
		'#c:plastics', 
		'mekanism:basic_control_circuit', 
		'powah:capacitor_basic', 
		'powah:capacitor_basic', 
		'powah:capacitor_basic'], 
		10000)
    energizing('powah:solar_panel_basic', 
	    ['powah:solar_panel_starter', 
		'#c:plastics', 
		'mekanism:advanced_control_circuit', 
		'powah:capacitor_basic_large', 
		'powah:capacitor_basic_large', 
		'powah:capacitor_basic_large'], 
		100000)
    energizing('powah:solar_panel_hardened', 
	    ['powah:solar_panel_basic', 
		'#c:plastics', 
		'mekanism:advanced_control_circuit', 
		'powah:capacitor_hardened', 
		'powah:capacitor_hardened', 
		'powah:capacitor_hardened'], 
		500000)
    energizing('powah:solar_panel_blazing', 
	    ['powah:solar_panel_hardened', 
		'#c:plastics', 
		'mekanism:elite_control_circuit', 
		'powah:capacitor_blazing', 
		'powah:capacitor_blazing', 
		'powah:capacitor_blazing'], 
		1000000)
    energizing('powah:solar_panel_niotic', 
	    ['powah:solar_panel_blazing', 
		'#c:plastics', 
		'mekanism:elite_control_circuit', 
		'powah:capacitor_niotic', 
		'powah:capacitor_niotic', 
		'powah:capacitor_niotic'], 
		10000000)
    energizing('powah:solar_panel_spirited', 
	    ['powah:solar_panel_niotic', 
		'#c:plastics', 
		'mekanism:ultimate_control_circuit', 
		'powah:capacitor_spirited', 
		'powah:capacitor_spirited', 
		'powah:capacitor_spirited'], 
		50000000)
    energizing('powah:solar_panel_nitro', 
	    ['powah:solar_panel_spirited', 
		'#c:plastics', 
		'mekanism:ultimate_control_circuit', 
		'powah:capacitor_nitro', 
		'powah:capacitor_nitro', 
		'powah:capacitor_nitro'], 
		100000000)
});
