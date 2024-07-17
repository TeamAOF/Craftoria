ServerEvents.recipes((event) => {

  const id = [
    "appflux:inscriber/crush_diamond",
    "appflux:inscriber/crush_emerald",
    "occultism:miner/ores/aluminum_ore",
    "occultism:miner/ores/amethyst_ore",
    "occultism:miner/ores/sapphire_ore",
  ];

  const output = [

  ];

  id.forEach((id) => {
    event.remove({ id: id });
  });

  output.forEach((output) => {
    event.remove({ output: output });
  });
});
