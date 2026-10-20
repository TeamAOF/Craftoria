ServerEvents.recipes(event => {

  // Material: Brass (alloy of Copper, Zinc) | Output: hephaestus:molten_brass
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 100,
        id: 'hephaestus:molten_copper',
      },
      {
        amount: 100,
        id: 'hephaestus:molten_zinc',
      },
    ],
    output: {
      amount: 200,
      id: 'hephaestus:molten_brass',
    },
    temperature: 650,
  }).id('hephaestus:smeltery/alloying/brass');

  // Material: Bronze (alloy of Copper, Tin) | Output: hephaestus:molten_bronze
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 300,
        id: 'hephaestus:molten_copper',
      },
      {
        amount: 100,
        id: 'hephaestus:molten_tin',
      },
    ],
    output: {
      amount: 400,
      id: 'hephaestus:molten_bronze',
    },
    temperature: 700,
  }).id('hephaestus:smeltery/alloying/bronze');

  // Material: Constantan (alloy of Copper, Nickel) | Output: hephaestus:molten_constantan
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 100,
        id: 'hephaestus:molten_copper',
      },
      {
        amount: 100,
        id: 'hephaestus:molten_nickel',
      },
    ],
    output: {
      amount: 200,
      id: 'hephaestus:molten_constantan',
    },
    temperature: 920,
  }).id('hephaestus:smeltery/alloying/constantan');

  // Material: Electrum (alloy of Gold, Silver) | Output: hephaestus:molten_electrum
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 100,
        id: 'hephaestus:molten_gold',
      },
      {
        amount: 100,
        id: 'hephaestus:molten_silver',
      },
    ],
    output: {
      amount: 200,
      id: 'hephaestus:molten_electrum',
    },
    temperature: 760,
  }).id('hephaestus:smeltery/alloying/electrum');

  // Material: Invar (alloy of Iron, Nickel) | Output: hephaestus:molten_invar
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 200,
        id: 'hephaestus:molten_iron',
      },
      {
        amount: 100,
        id: 'hephaestus:molten_nickel',
      },
    ],
    output: {
      amount: 300,
      id: 'hephaestus:molten_invar',
    },
    temperature: 810,
  }).id('hephaestus:smeltery/alloying/invar');

  // Material: Netherite (alloy of Ancient Debris, Gold) | Output: hephaestus:molten_netherite
  event.custom({
    type: 'hephaestus:alloying',
    inputs: [
      {
        amount: 270,
        id: 'hephaestus:molten_ancient_debris',
      },
      {
        amount: 270,
        id: 'hephaestus:molten_gold',
      },
    ],
    output: {
      amount: 270,
      id: 'hephaestus:molten_netherite',
    },
    temperature: 2000,
  }).id('hephaestus:smeltery/alloying/netherite');
});
