ServerEvents.recipes(event => {
  // Material/result: Blood (irons_spellbooks:blood)
  event.custom({
    type: 'hephaestus:entity_melting',
    entity: 'farmingforblockheads:merchant',
    result: {
      amount: 45,
      id: 'irons_spellbooks:blood',
    },
  }).id('hephaestus:smeltery/entity_melting/teamaoe');
});
