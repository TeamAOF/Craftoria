ServerEvents.recipes((e) => {

  // Snad
  e.custom({

    "type": "ars_nouveau:imbuement",
    "input": {
      "item": "minecraft:sand"
    },
    "output": {
      "count": 1,
      "id": "utilitarian:snad"
    },
    "pedestalItems": [
      {
        "item": "ars_nouveau:earth_essence"
      },
      {
        "item": "farmingforblockheads:red_fertilizer"
      },
      {
        "item": "farmingforblockheads:green_fertilizer"
      }
    ],
    "source": 10000
  }).id("utilitarian:snad/snad");

  e.custom({

    "type": "ars_nouveau:imbuement",
    "input": {
      "item": "minecraft:red_sand"
    },
    "output": {
      "count": 1,
      "id": "utilitarian:red_snad"
    },
    "pedestalItems": [
      {
        "item": "ars_nouveau:earth_essence"
      },
      {
        "item": "farmingforblockheads:red_fertilizer"
      },
      {
        "item": "farmingforblockheads:green_fertilizer"
      }
    ],
    "source": 10000
  }).id("utilitarian:snad/red_snad");

  e.custom({

    "type": "ars_nouveau:imbuement",
    "input": {
      "item": "minecraft:soul_sand"
    },
    "output": {
      "count": 1,
      "id": "utilitarian:soul_snad"
    },
    "pedestalItems": [
      {
        "item": "ars_nouveau:earth_essence"
      },
      {
        "item": "farmingforblockheads:red_fertilizer"
      },
      {
        "item": "farmingforblockheads:green_fertilizer"
      }
    ],
    "source": 10000
  }).id("utilitarian:snad/soul_snad");
});
