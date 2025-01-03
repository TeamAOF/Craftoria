ServerEvents.recipes((e) => {
  const assembler = e.recipes.modern_industrialization.assembler;

  assembler(8, 100)
    .itemOut('2x modern_industrialization:analog_circuit_board')
    .itemIn('2x modern_industrialization:rubber_sheet')
    .itemIn('#c:plates/copper')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/lv_circuit_board');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:electronic_circuit_board')
    .itemIn('6x modern_industrialization:electrum_cable')
    .itemIn('1x modern_industrialization:redstone_battery')
    .itemIn('2x modern_industrialization:analog_circuit_board')
    .itemIn('4x #c:plates/aluminum')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit_board');

  assembler(16, 400)
    .itemOut('2x modern_industrialization:digital_circuit_board')
    .itemIn('9x modern_industrialization:aluminum_cable')
    .itemIn('2x modern_industrialization:silicon_battery')
    .itemIn('2x modern_industrialization:electronic_circuit_board')
    .itemIn('6x modern_industrialization:stainless_steel_plate')
    .fluidIn('750x modern_industrialization:polyethylene')
    .id('modern_industrialization:electric_age/circuit/assembler/digital_circuit_board');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:diode')
    .itemIn('1x #c:plates/silicon')
    .itemIn('3x #c:glass_blocks')
    .itemIn('3x modern_industrialization:electrum_fine_wire')
    .itemIn('1x #c:plates/steel')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/diode');

  assembler(8, 200)
    .itemOut('4x modern_industrialization:diode')
    .itemIn('1x modern_industrialization:silicon_n_doped_plate')
    .itemIn('3x #c:glass_blocks')
    .itemIn('3x modern_industrialization:electrum_fine_wire')
    .itemIn('1x #c:plates/steel')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/diode_doped');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:transistor')
    .itemIn('3x #c:plates/silicon')
    .itemIn('1x modern_industrialization:electrum_fine_wire')
    .itemIn('3x #c:plates/steel')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/transistor');

  assembler(8, 200)
    .itemOut('6x modern_industrialization:transistor')
    .itemIn('2x modern_industrialization:silicon_p_doped_plate')
    .itemIn('1x modern_industrialization:silicon_n_doped_plate')
    .itemIn('1x modern_industrialization:electrum_fine_wire')
    .itemIn('3x #c:plates/steel')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/transistor_doped');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:op_amp')
    .itemIn('4x modern_industrialization:resistor')
    .itemIn('4x modern_industrialization:transistor')
    .itemIn('1x modern_industrialization:diode')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/op_amp');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:not_gate')
    .itemIn('1x modern_industrialization:resistor')
    .itemIn('1x modern_industrialization:op_amp')
    .itemIn('1x modern_industrialization:aluminum_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/not_gate');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:and_gate')
    .itemIn('2x modern_industrialization:resistor')
    .itemIn('1x modern_industrialization:op_amp')
    .itemIn('4x modern_industrialization:aluminum_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/and_gate');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:or_gate')
    .itemIn('1x modern_industrialization:diode')
    .itemIn('2x modern_industrialization:op_amp')
    .itemIn('2x modern_industrialization:aluminum_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/or_gate');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:analog_circuit')
    .itemIn('2x modern_industrialization:inductor')
    .itemIn('6x modern_industrialization:copper_wire')
    .itemIn('4x modern_industrialization:resistor')
    .itemIn('4x modern_industrialization:capacitor')
    .itemIn('2x modern_industrialization:analog_circuit_board')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/lv_circuit');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:electronic_circuit')
    .itemIn('6x modern_industrialization:analog_circuit')
    .itemIn('3x modern_industrialization:diode')
    .itemIn('3x modern_industrialization:transistor')
    .itemIn('2x modern_industrialization:electronic_circuit_board')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:digital_circuit')
    .itemIn('6x modern_industrialization:electronic_circuit')
    .itemIn('4x modern_industrialization:not_gate')
    .itemIn('2x modern_industrialization:or_gate')
    .itemIn('2x modern_industrialization:and_gate')
    .itemIn('2x modern_industrialization:digital_circuit_board')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/digital_circuit');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:processing_unit')
    .itemIn('6x modern_industrialization:digital_circuit')
    .itemIn('4x modern_industrialization:random_access_memory')
    .itemIn('2x modern_industrialization:memory_management_unit')
    .itemIn('2x modern_industrialization:arithmetic_logic_unit')
    .itemIn('2x modern_industrialization:processing_unit_board')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:quantum_circuit')
    .itemIn('6x modern_industrialization:processing_unit')
    .itemIn('4x modern_industrialization:cooling_cell')
    .itemIn('4x modern_industrialization:qubit')
    .itemIn('2x modern_industrialization:quantum_circuit_board')
    .id('modern_industrialization:assembler_generated/electric_age/circuit/craft/quantum_circuit');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:motor')
    .itemIn('2x modern_industrialization:steel_rod_magnetic')
    .itemIn('4x #c:rods/steel')
    .itemIn('4x modern_industrialization:tin_cable')
    .itemIn('8x modern_industrialization:copper_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/motor');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:large_motor')
    .itemIn('2x modern_industrialization:electronic_circuit')
    .itemIn('4x #c:rods/aluminum')
    .itemIn('10x modern_industrialization:motor')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/large_motor');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:advanced_motor')
    .itemIn('2x modern_industrialization:stainless_steel_rod_magnetic')
    .itemIn('4x #c:rods/stainless_steel')
    .itemIn('4x modern_industrialization:aluminum_cable')
    .itemIn('8x modern_industrialization:annealed_copper_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/advanced_motor');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:large_advanced_motor')
    .itemIn('2x modern_industrialization:processing_unit')
    .itemIn('4x #c:rods/titanium')
    .itemIn('10x modern_industrialization:advanced_motor')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_motor');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:pump')
    .itemIn('6x #modern_industrialization:fluid_pipes')
    .itemIn('6x modern_industrialization:tin_rotor')
    .itemIn('2x modern_industrialization:motor')
    .fluidIn('100x modern_industrialization:soldering_alloy')
    .id('modern_industrialization:electric_age/component/assembler/pump');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:large_pump')
    .itemIn('3x modern_industrialization:electronic_circuit')
    .itemIn('6x modern_industrialization:aluminum_rotor')
    .itemIn('2x modern_industrialization:large_motor')
    .itemIn('6x modern_industrialization:pump')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/large_pump');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:advanced_pump')
    .itemIn('6x #modern_industrialization:fluid_pipes')
    .itemIn('6x modern_industrialization:stainless_steel_rotor')
    .itemIn('2x modern_industrialization:advanced_motor')
    .fluidIn('200x modern_industrialization:soldering_alloy')
    .id('modern_industrialization:electric_age/component/assembler/advanced_pump');

  assembler(8, 200)
    .itemOut('3x modern_industrialization:large_advanced_pump')
    .itemIn('3x modern_industrialization:processing_unit')
    .itemIn('6x modern_industrialization:titanium_rotor')
    .itemIn('2x modern_industrialization:large_advanced_motor')
    .itemIn('6x modern_industrialization:advanced_pump')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_pump');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:memory_management_unit')
    .itemIn('1x #c:plates/emerald')
    .itemIn('3x modern_industrialization:silicon_wafer')
    .itemIn('9x modern_industrialization:platinum_fine_wire')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/memory_management_unit');

  assembler(8, 200)
    .itemOut('2x modern_industrialization:arithmetic_logic_unit')
    .itemIn('1x #c:plates/diamond')
    .itemIn('3x modern_industrialization:and_gate')
    .itemIn('3x modern_industrialization:or_gate')
    .itemIn('6x modern_industrialization:not_gate')
    .id('modern_industrialization:assembler_generated/electric_age/component/craft/arithmetic_logic_unit');
});
