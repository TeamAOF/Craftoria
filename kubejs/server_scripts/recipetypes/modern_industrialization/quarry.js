////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Steel Drill
  event.custom({
    "type": "modern_industrialization:quarry",
    "id": "modern_industrialization:quarry/steel",
    "eu": 12,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:steel_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "modern_industrialization:antimony_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:diamond_ore",
        "amount": 1,
        "probability": 0.12
      },
      {
        "item": "minecraft:lapis_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:lead_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:nickel_ore",
        "amount": 1,
        "probability": 0.18
      },
      {
        "item": "modern_industrialization:bauxite_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:salt_ore",
        "amount": 1,
        "probability": 0.12
      },
      {
        "item": "minecraft:emerald_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:quartz_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "neoforge:conditions": [
          { "type": "neoforge:mod_loaded", "modid": "powah" }
        ],
        "item": "powah:uraninite_ore",
        "amount": 1,
        "probability": 0.08
      }
    ]
  })

  // Gold Drill
  event.custom({
    "type": "modern_industrialization:quarry",
    "id": "modern_industrialization:quarry/gold",
    "eu": 8,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:gold_drill",
      "amount": 1,
      "probability": 0.1
    },
    "item_outputs": [
      {
        "item": "minecraft:netherrack",
        "amount": 64
      },
      {
        "item": "minecraft:blackstone",
        "amount": 16,
        "probability": 0.25
      },
      {
        "item": "minecraft:basalt",
        "amount": 16,
        "probability": 0.25
      },
      {
        "item": "minecraft:soul_soil",
        "amount": 20,
        "probability": 0.1
      },
      {
        "item": "minecraft:magma_block",
        "amount": 5,
        "probability": 0.1
      },
      {
        "item": "minecraft:soul_sand",
        "amount": 20,
        "probability": 0.25
      },
      {
        "item": "minecraft:ancient_debris",
        "amount": 1,
        "probability": 0.05
      },
  
      {
        "item": "minecraft:glowstone",
        "amount": 4,
        "probability": 0.15
      },
      {
        "item": "minecraft:nether_quartz_ore",
        "amount": 6,
        "probability": 0.15
      },
      {
        "item": "minecraft:nether_gold_ore",
        "amount": 1,
        "probability": 0.25
      }
    ]
  })

  // Bronze Drill
  event.custom({
    "type": "modern_industrialization:quarry",
    "id": "modern_industrialization:quarry/bronze",
    "eu": 4,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:bronze_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "minecraft:iron_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "minecraft:coal_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:lignite_coal_ore",
        "amount": 1,
        "probability": 0.24
      },
      {
        "item": "minecraft:copper_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "modern_industrialization:tin_ore",
        "amount": 1,
        "probability": 0.3
      },
      {
        "item": "minecraft:gold_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "minecraft:redstone_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "mekanism:osmium_ore",
        "amount": 1,
        "probability": 0.12
      }
    ]
  })

  // Titanium Drill
  event.custom({
    "type": "modern_industrialization:quarry",
    "id": "modern_industrialization:quarry/titanium",
    "eu": 128,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:titanium_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "modern_industrialization:uranium_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "modern_industrialization:iridium_ore",
        "amount": 1,
        "probability": 0.05
      },
      {
        "item": "powah:uraninite_ore_dense",
        "amount": 1,
        "probability": 0.02
      },
      {
        "item": "mekanism:fluorite_ore",
        "amount": 1,
        "probability": 0.3
      },
    ]
  })
   event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 32,
    "duration": 600,
    "item_inputs": {
      "item": "modern_industrialization:stainless_steel_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "modern_industrialization:titanium_ore",
        "amount": 1,
        "probability": 0.15
      },
      {
        "item": "modern_industrialization:tungsten_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "modern_industrialization:monazite_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:platinum_ore",
        "amount": 1,
        "probability": 0.12
      }
    ]
  })
})
