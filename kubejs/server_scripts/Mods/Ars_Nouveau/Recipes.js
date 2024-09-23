ServerEvents.recipes((e) => {

  e.custom({

    "type": "ars_nouveau:imbuement",
    "input": {
      "tag": "c:gems/source"
    },
    "output": {
      "count": 1,
      "id": "utilitarian:snad"
    },
    "pedestalItems": [
      {
        "tag": "c:sands"
      },
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
});
