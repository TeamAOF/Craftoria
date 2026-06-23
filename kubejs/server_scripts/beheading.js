EntityEvents.death("player", (event) => {
  //console.log("player morto");

  let { entity, source } = event;

  //console.log(`tentativo di drop: minecraft:player_head[minecraft:profile="${entity.name.string}"]`);
  
  //dropchance in percentage
  let dropChance = 0.5 
  
  // console.log("UCCISORE:" + source.getType());
  let attacker = source.actual;
  
  // Controlla se la causa della morte è un altro giocatore
  if (attacker.isPlayer() && Math.random() < dropChance) {
    let myEntity = event.level.createEntity('item');
    myEntity.item = Item.of(`minecraft:player_head[minecraft:profile="${entity.name.string}"]`);
    myEntity.x = entity.x;
    myEntity.y = entity.y;
    myEntity.z = entity.z;
    myEntity.spawn(); 
  }
});
