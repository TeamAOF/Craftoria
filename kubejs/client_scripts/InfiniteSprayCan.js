ItemEvents.firstLeftClicked('craftoria:infinite_spray_can', (event) => {
  const { player, target } = event;
  if (target.type !== 'miss') return;
  player.playSound('craftoria:spray_can_shake', 1, 1);
});

ItemEvents.firstRightClicked('craftoria:infinite_spray_can', (event) => {
  const { player, target } = event;
  if (target.type === 'miss') return;
  player.playSound('craftoria:spray_can_spray', 1, 1);
});
