ServerEvents.recipes(event => {

event.shaped('mi_tweaks:flux_transformer', [// arg 1: output
    'SS ', 
    ' HC',
    'SS '  
  ], {
    S: 'modern_industrialization:superconductor_cable', 
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables'   
  }
).id("mi_tweaks:flux_transformer");
})