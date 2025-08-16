ItemEvents.modifyTooltips(event => {
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

  pipezPipes.forEach(pipe => {
    let pipeIndex = pipezPipes.indexOf(pipe);
    event.add(pipe, { shift: false }, holdShift);
    event.add(pipe, { shift: true }, [
      Text.translate('tooltip.pipez.title.transfer_rates').gold(),
      Text.translate('tooltip.pipez.tier.default', pipDef[pipeIndex]).white(),
      Text.translate('tooltip.pipez.tier.basic', pipBas[pipeIndex]).green(),
      Text.translate('tooltip.pipez.tier.improved', pipImp[pipeIndex]).aqua(),
      Text.translate('tooltip.pipez.tier.advanced', pipAdv[pipeIndex]).aqua(),
      Text.translate('tooltip.pipez.tier.ultimate', pipUlt[pipeIndex]).red(),
    ]);
  });

  event.add('pipez:universal_pipe', { shift: false }, holdShift);
  event.add('pipez:universal_pipe', { shift: true }, [
    Text.translate('tooltip.pipez.title.transfer_rates_universal').gold(),
    Text.translate('tooltip.pipez.tier.default_universal', pipDef[0], pipDef[1], pipDef[2], pipDef[3]).white(),
    Text.translate('tooltip.pipez.tier.basic_universal', pipBas[0], pipBas[1], pipBas[2], pipBas[3]).green(),
    Text.translate('tooltip.pipez.tier.improved_universal', pipImp[0], pipImp[1], pipImp[2], pipImp[3]).aqua(),
    Text.translate('tooltip.pipez.tier.advanced_universal', pipAdv[0], pipAdv[1], pipAdv[2], pipAdv[3]).aqua(),
    Text.translate('tooltip.pipez.tier.ultimate_universal', pipUlt[0], pipUlt[1], pipUlt[2], pipUlt[3]).red(),
  ]);

  for (let [k, v] in pipezUpgrades) {
    if (k === 'Default') continue;
    let stats = pipezUpgrades[k];
    let upID = `pipez:${k.toLowerCase()}_upgrade`;
    event.add(upID, { shift: false }, holdShift);
    event.add(upID, { shift: true }, [
      Text.translate('tooltip.pipez.title.upgrade_stats').gold(),
      Text.translate('tooltip.pipez.stat.item', stats[0]).yellow(),
      Text.translate('tooltip.pipez.stat.fluid', stats[1]).aqua(),
      Text.translate('tooltip.pipez.stat.energy', stats[2]).red(),
      Text.translate('tooltip.pipez.stat.gas', stats[3]).green(),
    ]);
  }

  event.add('pipez:infinity_upgrade', { shift: false }, holdShift);
  event.add('pipez:infinity_upgrade', { shift: true }, [
    Text.translate('tooltip.pipez.title.upgrade_stats').gold(),
    Text.translate('tooltip.pipez.stat.all', '2,147,483,647/t').yellow(),
    Text.translate('tooltip.pipez.infinity.risk_warning').red(),
  ]);

  event.add(['pipez:energy_pipe', 'pipez:universal_pipe'], [Text.translate('tooltip.pipez.warning.mekanism').red()]);
});
