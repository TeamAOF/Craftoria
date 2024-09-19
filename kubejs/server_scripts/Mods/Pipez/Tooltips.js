ItemEvents.modifyTooltips((event) => {
  let pipezUpgrades = {
    Default: ['4 items/20t', '50 mB/t', '256 FE/t', '200 mB/t'],
    Basic: ['8 items/15t', '100 mB/t', '1,024 FE/t', '400 mB/t'],
    Improved: ['16 items/10t', '500 mB/t', '8,192 FE/t', '2,000 mB/t'],
    Advanced: ['32 items/5t', '2,000 mB/t', '32,768 FE/t', '8,000 mB/t'],
    Ultimate: ['64 items/1t', '10,000 mB/t', '131,072 FE/t', '40,000 mB/t'],
  };

  let pipDef = pipezUpgrades.Default;
  let pipBas = pipezUpgrades.Basic;
  let pipImp = pipezUpgrades.Improved;
  let pipAdv = pipezUpgrades.Advanced;
  let pipUlt = pipezUpgrades.Ultimate;

  let pipezPipes = ['pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:energy_pipe', 'pipez:gas_pipe'];

  pipezPipes.forEach((pipe) => {
    let pipeIndex = pipezPipes.indexOf(pipe);
    event.add(pipe, { shift: false }, holdShift);
    event.add(pipe, { shift: true }, [
      Text.gold('Transfer Rates:'),
      Text.white(`Default: ${pipDef[pipeIndex]}`),
      Text.green(`Basic: ${pipBas[pipeIndex]}`),
      Text.aqua(`Improved: ${pipImp[pipeIndex]}`),
      Text.aqua(`Advanced: ${pipAdv[pipeIndex]}`),
      Text.red(`Ultimate: ${pipUlt[pipeIndex]}`),
    ]);
  });

  event.add('pipez:universal_pipe', { shift: false }, holdShift);
  event.add('pipez:universal_pipe', { shift: true }, [
    Text.gold('Transfer Rates: (item | fluid | energy | gas)'),
    Text.white(`Default: ${pipDef[0]} | ${pipDef[1]} | ${pipDef[2]} | ${pipDef[3]}`),
    Text.green(`Basic: ${pipBas[0]} | ${pipBas[1]} | ${pipBas[2]} | ${pipBas[3]}`),
    Text.aqua(`Improved: ${pipImp[0]} | ${pipImp[1]} | ${pipImp[2]} | ${pipImp[3]}`),
    Text.aqua(`Advanced: ${pipAdv[0]} | ${pipAdv[1]} | ${pipAdv[2]} | ${pipAdv[3]}`),
    Text.red(`Ultimate: ${pipUlt[0]} | ${pipUlt[1]} | ${pipUlt[2]} | ${pipUlt[3]}`),
  ]);

  for (let [k, v] in pipezUpgrades) {
    if (k === 'Default') continue;
    let stats = pipezUpgrades[k];
    let upID = `pipez:${k.toLowerCase()}_upgrade`;
    event.add(upID, { shift: false }, holdShift);
    event.add(upID, { shift: true }, [
      Text.gold('Upgrade Stats:'),
      Text.yellow(`Item: ${stats[0]}`),
      Text.aqua(`Fluid: ${stats[1]}`),
      Text.red(`Energy: ${stats[2]}`),
      Text.green(`Gas: ${stats[3]}`),
    ]);
  }

  event.add('pipez:infinity_upgrade', { shift: false }, holdShift);
  event.add('pipez:infinity_upgrade', { shift: true }, [Text.gold('Upgrade Stats:'), Text.yellow('All: 2,147,483,647/t'), Text.red('Use at your own risk.')]);

  event.add(['pipez:energy_pipe', 'pipez:universal_pipe'], [Text.red("Doesn't work properly with Mekanism.")]);
});
