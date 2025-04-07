/*
ServerEvents.recipes(e => {

  // Source Jar (Creative)
  e.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": { "item": "craftoria:7x_compressed_iron_block" },
      "B": { "item": "mekanism_extras:infinite_tier_installer" },
      "C": { "item": "modern_industrialization:quantum_circuit" },
      "D": { "item": "pneumaticcraft:vacuum_pump" },
      "E": { "item": "pneumaticcraft:compressed_iron_block" },
    },
    "pattern": [
      'CAAAC',
      'ABDBA',
      'ADEDA',
      'ABDBA',
      'CAAAC'
    ],
    "result": {
      "count": 1,
      "id": "pneumaticcraft:creative_compressed_iron_block"
    }
  }).id('craftoria:creative_compressed_iron_block')
})
  */