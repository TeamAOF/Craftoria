BlockEvents.rightClicked(e => {
  if (e.item.id != 'gateways:gate_pearl') return;
  if (e.level.dimension == 'compactmachines:compact_world') {
    e.player.tell(Text.translate('message.gateway.open'));
    e.cancel();
  }
});
