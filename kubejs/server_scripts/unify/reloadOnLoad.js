// priority: 1000
let reloaded = false;
ServerEvents.loaded((e) => {
  if (!reloaded) {
    e.server.runCommandSilent('reload');
  }
});