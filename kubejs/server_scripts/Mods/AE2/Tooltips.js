ItemEvents.modifyTooltips((e) => {
  // AE2WTLib
  e.add('ae2wtlib:quantum_bridge_card', { shift: false }, holdShift);
  e.add('ae2wtlib:quantum_bridge_card', { shift: true }, [
    Text.gray('Add this card to your wireless terminal to allow it to connect to a Quantum Ring'),
    Text.gray('by adding a Quantum Entangled Singularity to the Quantum Ring and terminal.'),
    Text.gray('This will allow you to access your ME system from anywhere in the world.'),
  ]);
});
