ServerEvents.recipes((e) => {
    const assembler = e.recipes.modern_industrialization.assembler;

//    assembler(2000000, 5000)
//    .itemOut('modern_industrialization:large_plasma_turbine')
//    .itemIn('64x modern_industrialization:plasma_turbine')
//    .itemIn('4x modern_industrialization:quantum_upgrade')
//    .id('modern_industrialization:assembler_generated/quantum_age/generators/large_plasma_turbine');

    assembler(16, 200)
    .itemOut('modern_industrialization:budding_incubator')
    .itemIn('16x ae2:growth_accelerator')
    .itemIn('4x modern_industrialization:electronic_circuit')
    .itemIn('modern_industrialization:large_pump')
    .itemIn('modern_industrialization:advanced_machine_hull')
    .id('modern_industrialization:assembler_generated/electric_age/custom/budding_incubator');
})