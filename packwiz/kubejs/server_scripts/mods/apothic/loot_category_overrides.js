ServerEvents.generateData('after_mods', e => {
  e.json('apotheosis:data_maps/item/loot_category_overrides', {
    values: {
      'mekaweapons:meka_tana': 'apotheosis:melee_weapon',
      'mekaweapons:meka_bow': 'apotheosis:bow',
      'industrialforegoing:infinity_drill': 'apotheosis:breaker',
      'industrialforegoing:infinity_saw': 'apotheosis:breaker',
      'industrialforegoing:infinity_hammer': 'apotheosis:melee_weapon',
      'industrialforegoing:infinity_trident': 'apotheosis:trident',
    },
  });
});
