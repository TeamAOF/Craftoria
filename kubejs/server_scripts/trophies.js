ServerEvents.generateData('after_mods', event => {
  // Carico il file compatto
  const trophies = JsonIO.read('kubejs/data/trofers/trophies.json');

  let drops = {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "cataclysm"
      }
    ],
    "conditions": [
      { "condition": "minecraft:killed_by_player" },
      { "condition": "trofers:random_trophy_chance" }
    ],
    "fabric:load_conditions": [
      {
        "condition": "fabric:all_mods_loaded",
        "values": ["cataclysm"]
      }
    ],
    "trophies": {},
    "trophy_base": "trofers:small_plate"
  };

  // Loop su ogni trofeo
  Object.entries(trophies).forEach(([id, data]) => {
    // Creiamo un nome univoco e valido per il trofeo
    // Esempio: "cataclysm_ender_golem"
    const trophy_name = `${data.folder}/${id}`;
    
    let trophy = {
      colors: {
        base: "#606060",
        accent: data.accent_color
      },
      entity: {
        id: data.entity
      },
      name: {
        color: data.accent_color,
        translate: "trophy.trofers.composed",
        with: [
          {
            translate: data.name
          }
        ]
      }
    };

    // alcune variabili con un default
    if(data.display){
    trophy.display = data.display;
    }else{
    trophy.display = {"scale": 0.25};
    }

    if(data.nbt){
      trophy.entity.nbt = data.nbt;
    }

    if(data.effects){
      trophy.effects = data.effects;
    }
    
    // Salva il JSON nella cartella trofei di Trofers, usando il nome univoco
    event.json(`trofers:trofers/trophies/${trophy_name}`, trophy);

    // Aggiungi il trofeo alla lista dei drop, usando il nome univoco
    drops.trophies[data.entity] = `trofers:trophies/${trophy_name}`;
  });

  
  // Scrivo il file completo per tutti i mob Cataclysm
  event.json(`trofers:trofers/entity_drops/mod_drops`, drops);
});
