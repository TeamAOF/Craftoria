ServerEvents.recipes(e => {
  // Sophisticated Storage Controller
  e.shaped('sophisticatedstorage:controller', ['SCS', 'PBP', 'SCS'], {
    B: '#craftoria:storage/wooden',
    C: 'minecraft:comparator',
    P: '#minecraft:planks',
    S: '#c:stones',
  }).id('sophisticatedstorage:controller');
});
