CapeJS.addCapes((event) => {
  const capes = {
    developer: [
      'e724b58d-7c66-4faa-9941-7b1b3df348a3', // TheInnocentFool
      '38113444-0bc0-4502-9a4c-17903067907c', // HeyAmAK
      'f265733f-e131-4be1-a04f-4643409d34d8', // trent87
      '9c2775c4-9e71-4e65-8e2e-9257e3da6e1d', // SubordinalBlue
      '78a06298-7263-433f-8433-b4fe19d116f9', // CodexAdrian
      '8d990654-8771-4e02-8b61-67593d535b67', // The_Monster_Zer0
      '1c2e1bdc-1c68-4f60-92cf-c7dd1df76a7a', // irunatbullets
      '75837f44-606b-49c8-8d2f-3321410a247f', // anam021
      'b82d93ea-8ff7-4ab9-95e9-0ba7d44ce7d2', // AlphaMode
      'f83bd929-fbf0-4186-becb-658d676fcc42', // White_Phant0m
      'cbf37b63-119f-4547-a039-76df4515efb2', // _ElFacu
      '25c72de5-be16-49ed-b90b-66cc261332dc', // Cat
    ],

    vip: [
      '18b5e4ed-614c-4235-85c0-3c1e68e979b5', // Nolij
      'f1cf0946-49c0-4047-9248-47c98820b2d3', // nitrofenix
      '7b8d1937-585f-4238-9914-d000a82528f9', // laxfan20
      'f118d448-2ad5-426b-8b63-9012caa9d2b2', // Leonxilofin
      '5ae09fa4-41a8-4817-b08c-2f5d3e9d8883', // Aelus_
      '3ae66628-b2a1-41bc-9e76-e3d0222d77a3', // Duir_
      '8258c709-5ea7-46bb-860a-673b936a110d', // _Robertas
      'd2877ce2-181e-420a-be88-193b5b1f18ea', // xDrix0
      'a1437e9f-8788-46c1-9307-367b5fdbdcb9', // Rohan82
      'cb4382d6-8124-4d0c-a53b-28d631ee78e1', // Rally_V
    ],

    builder: [
      '385f65ff-d4f0-4a0a-9a83-b91edabc32d9', // Yoosk
      '0244b687-4f34-4c37-95e3-b87b3681655e', // Molly
      'e9d889b1-5b90-412c-99c1-2af62f21369e', // BuilderBot
    ],

    completionist: [
      '97184eb6-cc38-4c23-8468-a618634d6ffa', // Natte
      '91088abe-0167-486b-a79a-7be62a6a7051', // Pink
      '9a35d25b-451b-4a2e-9dce-377adf7e9760', // Tzwem
      'd6330821-e3a3-4a84-a50b-fa886506b162', // Dino
      'a835fbfd-3c92-4c6b-9347-4081ded4551a', // Rizul
      '9118ec52-eb01-4eab-a083-c80beccf187b', // Super
      '9300503d-de35-4d76-9baa-6cb6e5c20c8c', // North
      '2dfb3780-434b-4e78-90f8-c08788700960', // Sundrop
      'cd7cc8d4-47b9-42f3-a0db-934bad82bf1f', // FullestMirror
      '26256eca-dad6-4f27-98e6-6444a02ebd9e', // Owlwix
      'bde73f67-49b5-41e2-9c98-fee6a5f1c558', // TrollStomper
      '10858dc2-939f-408c-8ad6-4d101159a20a', // Saidmakkass
      '275b2995-09b7-44a6-a645-b00ec89125da', // Snikey11
      '457625d6-9114-41ed-8d38-f5ddaa2aba66', // Blue98

    ]
  };
  for (const [cape, players] in capes) {
    for (const player of players) {
      event.register(player, cape);
    }
  }
});
