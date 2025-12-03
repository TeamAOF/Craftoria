// Tooltips for items/blocks added by Craftoria
// or things that would've had too little stuff to warrant their own file/folder.
ItemEvents.modifyTooltips(e => {
  globalItemRemovals.forEach(item => {
    if (typeof item === 'object' && item.item) {
      e.add(item.item, [
        Text.translate('tooltip.craftoria.removal.with_reason', item.reason).red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_1').red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_2_legacy').red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_3').red(),
      ]);
    } else {
      e.add(item, [
        Text.translate('tooltip.craftoria.removal.generic').red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_1').red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_2').red(),
        Text.translate('tooltip.craftoria.removal.admin_notice_3').red(),
      ]);
    }
  });

  disabledItems.forEach(item => {
    if (item.alt || item.altId) {
      e.add(item.id, [
        Text.translate('tooltip.craftoria.disabled.in_favor_of', item.alt || Item.of(item.altId).hoverName.string).red(),     // Untested, disabledItems is null
        Text.translate('tooltip.craftoria.disabled.functionality_remains').red(),
      ]);
    } else {
      e.add(item.id, [
        Text.translate('tooltip.craftoria.disabled.better_alternatives').red(),
        Text.translate('tooltip.craftoria.disabled.functionality_remains').red(),
      ]);
    }
  });

  e.add('pipe_connector:pipe_connector', { shift: true }, [Text.translate('tooltip.pipe_connector.info').gold()]);
  e.add('#cookingforblockheads:sinks', [Text.translate('tooltip.cookingforblockheads.sink.no_infinite_water').red()]);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: false }, holdShift);
  e.add('eternal_starlight:red_starlight_crystal_shard', { shift: true }, [
    Text.translate('tooltip.eternal_starlight.red_crystal_shard.location').lightPurple(),
  ]);

  e.add('mi_tweaks:ooze_lab', { shift: true },
    Text.translate('tooltip.mi_tweaks.ooze_lab.needs').gray()
      .append(Text.translate('tooltip.mi_tweaks.ooze_lab.fluid').green())
      .append(Text.translate('tooltip.mi_tweaks.ooze_lab.location').gray())
  );

  e.add('modern_industrialization:nuke', Text.translate('tooltip.modern_industrialization.nuke.no_explode').darkGray());

  e.add('craftoria:wardens_meat', [
    Text.gray('Meat from a Warden'),
    Text.gray('Obtained through dubious means'),
    Text.darkRed('Eat at your own risk!'),
  ]);

  e.add('occultism:butcher_knife', [
    Text.translate('tooltip.occultism.butcher_knife.line1').yellow(),
    Text.translate('tooltip.occultism.butcher_knife.line2').yellow(),
  ]);

  for (const [id, machine] of Object.entries(global.customMIMachines)) {
    let machineID = `${machine.mod ?? 'modern_industrialization'}:${id}`;
    e.add(machineID, Text.translate('tooltip.kubejs.added_by_craftoria').blue().italic());
  }
});
