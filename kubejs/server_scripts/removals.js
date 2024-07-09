ServerEvents.recipes((event) => {

  const id = [
    "appflux:inscriber/crush_diamond",
    "appflux:inscriber/crush_emerald",
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
