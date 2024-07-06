// priority: 1000
let reloaded = false;

ServerEvents.loaded((e) => {
  if (reloaded) return;
  e.server.runCommandSilent('reload');
  console.log('Reloaded server to fix recipe issues.');
});