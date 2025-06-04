const $UpgradeUtils = Java.loadClass('io.redspace.ironsspellbooks.util.UpgradeUtils');
const $UpgradeData = Java.loadClass('io.redspace.ironsspellbooks.api.item.UpgradeData');

// Special Recipe for upgrading the Codex of Evolution
ServerEvents.recipes(event => {
  event.shapeless('craftoria:codex_of_evolution', [
    'craftoria:codex_of_evolution',
    '#craftoria:upgrade_orbs',
  ]).modifyResult('codex_of_evolution').id('craftoria:codex_of_evolution_upgrade');
});

// Recipe logic for the Codex of Evolution
ServerEvents.modifyRecipeResult('codex_of_evolution', event => {
  const { grid } = event;
  const ingredientCodex = grid.find('craftoria:codex_of_evolution');
  const ingredientOrb = grid.find('#craftoria:upgrade_orbs');
  const orbComponents = ingredientOrb.get('irons_spellbooks:upgrade_orb_type');
  const holderOpt = Registry.access().access().holder(orbComponents);
  if (holderOpt.isEmpty()) event.cancel('minecraft:air');
  const upgradeOrb = holderOpt.get();
  if (!canBeUpgraded(ingredientCodex, upgradeOrb)) event.cancel('minecraft:air');
  const result = ingredientCodex.copy();
  const slot = $UpgradeUtils.getRelevantEquipmentSlot(result);
  $UpgradeData.getUpgradeData(result).addUpgrade(result, upgradeOrb, slot);
  event.success(result);
});

/** @type {Record<Special.IronsSpellbooksUpgradeOrbType, number>} */
const allowedAmounts = {
  // Example of allowed amounts for specific upgrade orbs
  // 'irons_spellbooks:spell_resistance': 10,
  // 'craftoria:mana_regen': 50,
  // 'irons_spellbooks:cooldown': 20,
};

/**
 * Checks if an item can be upgraded with a specific upgrade orb.
 * @param {$ItemStackKJS_} item
 * @param {*} upgradeOrb
 */
function canBeUpgraded(item, upgradeOrb) {
  const upgradeData = $UpgradeData.getUpgradeData(item).upgrades().entrySet();
  for (const entry of upgradeData) {
    if (!entry.key.equals(upgradeOrb)) continue;

    let amount = entry.value;
    if (allowedAmounts[upgradeOrb.registeredName] && amount >= allowedAmounts[upgradeOrb.registeredName]) return false;
    return true;
  }
  return false;
}