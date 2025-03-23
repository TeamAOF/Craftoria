BlockEvents.rightClicked("compactmachines:solid_wall", (e) => {
  if (e.item.id == "gateways:gate_pearl") {
    e.player.tell("Gates cannot be opened in this dimension.");
    e.cancel();
  }
});
