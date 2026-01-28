ItemEvents.modifyTooltips(e => {
  // AE2WTLib
  e.add('ae2wtlib:quantum_bridge_card', { shift: false }, holdShift);
  e.add('ae2wtlib:quantum_bridge_card', { shift: true }, [
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.1').gray(),
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.2').gray(),
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.3').gray(),
  ]);
});
