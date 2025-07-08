ServerEvents.recipes(e => {
  // Sophisticated Storage Controller
  e.shaped('sophisticatedstorage:controller', ['SCS', 'PBP', 'SCS'], {
    B: '#craftoria:storage/wooden',
    C: 'minecraft:comparator',
    P: '#minecraft:planks',
    S: '#c:stones',
  }).id('sophisticatedstorage:controller');

  // Sophisticated Storage Storage Input
  e.shaped('sophisticatedstorage:storage_input', ['SRS', 'PBP', 'SGS'], {
    B: '#craftoria:storage/wooden',
    R: 'minecraft:repeater',
    P: '#minecraft:planks',
    S: '#c:stones',
    G: 'minecraft:gold_ingot',
  }).id('sophisticatedstorage:storage_input');

  // Sophisticated Storage Storage Output
  e.shaped('sophisticatedstorage:storage_output', ['SGS', 'PBP', 'SRS'], {
    B: '#craftoria:storage/wooden',
    R: 'minecraft:repeater',
    P: '#minecraft:planks',
    S: '#c:stones',
    G: 'minecraft:gold_ingot',
  }).id('sophisticatedstorage:storage_output');

  // Sophisticated Storage Storage IO
  e.shaped('sophisticatedstorage:storage_io', ['SPS', 'RBG', 'SPS'], {
    B: '#craftoria:storage/wooden',
    R: 'minecraft:repeater',
    P: '#minecraft:planks',
    S: '#c:stones',
    G: 'minecraft:gold_ingot',
  }).id('sophisticatedstorage:storage_io');
});
