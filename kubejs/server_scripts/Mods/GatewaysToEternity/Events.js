BlockEvents.rightClicked(e => {
  if (e.item.id != 'gateways:gate_pearl') return;
  const blackListedDimensions = [
    'compactmachines:compact_world',
    'javd:void',
    'jamd:mining',
    'jamd:nether',
    'jamd:end',
    'ae2:spatial_storage',
  ];

  if (!blackListedDimensions.includes(e.level.dimension)) return;
  e.player.tell(Text.translate('message.gateway.open'));
  e.cancel();
});
