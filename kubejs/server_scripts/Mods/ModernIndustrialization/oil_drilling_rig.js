ServerEvents.recipes(e => {
  
  e.recipes.modern_industrialization.oil_drilling_rig(64, 100)
   .itemIn("modern_industrialization:gold_drill", 0.25)
   .fluidOut("16000x minecraft:lava")
   .dimension("nether")
  
})
