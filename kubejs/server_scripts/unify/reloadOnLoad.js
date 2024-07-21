// priority: 1000
ServerEvents.loaded((e) => {
  e.server.runCommandSilent('reload');
});