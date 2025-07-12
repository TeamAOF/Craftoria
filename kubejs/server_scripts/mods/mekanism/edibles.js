ItemEvents.foodEaten(event => {
  let { player, item, level, server } = event;
  // Dont eat these at home, kids!
  // Add message when eating plutonium, polonium and yellow cake
  // then kill the player

  const pelletsEffects = [
    'minecraft:nausea',
    'relics:anti_heal',
    'relics:paralysis',
    'minecraft:glowing',
    'minecraft:darkness',
    'apothic_attributes:bleeding',
  ];

  let pelletsEffectDuration = 6000; // 5 minutes

  let preventImmunity = () => {
    server.scheduleInTicks(400, () => {
      player.tell(Text.white('You feel immortal').bold());
    });
    server.scheduleInTicks(500, () => {
      player.tell(Text.darkRed("But it won't last for long...").bold());
    });
    server.scheduleInTicks(600, () => {
      player.kill();
    });
  };

  if (item.id === 'mekanism:pellet_plutonium') {
    player.tell(Text.red('Plutonium is not good for you!'));
    pelletsEffects.forEach(effect => {
      player.potionEffects.add(effect, pelletsEffectDuration, 5, false, false);
    });
    preventImmunity();
  }
  if (item.id === 'mekanism:pellet_polonium') {
    player.tell(Text.red('Polonium is not good for you!'));
    pelletsEffects.forEach(effect => {
      player.potionEffects.add(effect, pelletsEffectDuration, 5, false, false);
    });
    preventImmunity();
  }
  if (item.id === 'mekanism:yellow_cake_uranium') {
    player.tell(Text.red('Cake is a lie! Expecially this one...'));
    pelletsEffects.forEach(effect => {
      player.potionEffects.add(effect, pelletsEffectDuration, 5, false, false);
    });
    preventImmunity();
  }
  if (item.id === 'mekanism:pellet_antimatter') {
    let blackHoleEntity = level.createEntity('irons_spellbooks:black_hole');
    // Set the entity's NBT data to make it bigger and last shorter
    blackHoleEntity.setNbt({ Damage: 0, Radius: 15, Age: 450 });

    // Summon black hole entity at player position and apply effects
    player.tell(Text.red('MATTER IS COMPRESSING AROUND YOU!').bold());
    pelletsEffects.forEach(effect => {
      player.potionEffects.add(effect, pelletsEffectDuration, 5, false, false);
    });
    blackHoleEntity.spawn();
    blackHoleEntity.setPos(player.x, player.y, player.z);
    preventImmunity();
  }
});
