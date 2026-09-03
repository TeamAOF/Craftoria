ItemEvents.modifyTooltips(e => {
  // AE2WTLib
  e.add('ae2wtlib:quantum_bridge_card', { shift: false }, holdShift);
  e.add('ae2wtlib:quantum_bridge_card', { shift: true }, [
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.1').gray(),
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.2').gray(),
    Text.translate('tooltip.ae2wtlib.quantum_bridge_card.3').gray(),
  ]);

  e.add('bigger_ae2:quantum_cell_component', [
    Text.red('This item has been disabled in favor of Advanced AE\'s Quantum Storage Component.'),
    Text.red('Please convert this item in any crafting table, as it is no longer craftable or usable.'),
  ]);

  e.add('megacells:bulk_cell_component', [
    Text.red('This item has been disabled in favor of Bigger AE2\'s Digital Singularity Cell Component.'),
    Text.red('Please convert this item in any crafting table, as it is no longer craftable or usable.'),
  ]);
});
