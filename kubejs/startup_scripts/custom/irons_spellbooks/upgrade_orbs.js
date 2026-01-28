const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey');
const UPGRADE_ORB_REGISTRY_KEY = Java.loadClass('io.redspace.ironsspellbooks.registries.UpgradeOrbTypeRegistry').UPGRADE_ORB_REGISTRY_KEY;

StartupEvents.registry('item', e => {
  const orbHelper = (type, layers) => {
    e.create(`craftoria:${type}_upgrade_orb`)
      .component('irons_spellbooks:upgrade_orb_type', $ResourceKey.create(UPGRADE_ORB_REGISTRY_KEY, `craftoria:${type}`))
      .rarity('uncommon')
      .modelGenerator(m => {
        // TODO: Add custom models/textures for each orb type instead of using existing ones
        m.parent('item/generated');
        if (layers && layers.length > 0) {
          for (let i = 0; i < layers.length; i++) {
            m.texture(`layer${i}`, `${layers[i]}`);
          }
        } else {
          m.texture('layer0', 'craftoria:item/wip');
        }
      });
  };

  orbHelper('mana_regen'/* , ['eternal_starlight:item/orb_of_prophecy_inventory', 'irons_spellbooks:item/upgrade_orb_swirl', 'irons_spellbooks:item/upgrade_orb_mana']*/);
  orbHelper('spell_power'/* , ['alshanex_familiars:item/mysterious_orb', 'irons_spellbooks:item/upgrade_orb_lightning', 'irons_spellbooks:item/upgrade_orb_mana']*/);
});
