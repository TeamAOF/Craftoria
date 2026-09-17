const $UpgradeUtils = Java.loadClass('io.redspace.ironsspellbooks.util.UpgradeUtils');
const $UpgradeData = Java.loadClass('io.redspace.ironsspellbooks.api.item.UpgradeData');
const $SpellContainer = Java.loadClass('io.redspace.ironsspellbooks.capabilities.magic.SpellContainer');

// Special Recipe for upgrading the Codex of Evolution
ServerEvents.recipes(event => {
  event.shapeless('craftoria:codex_of_evolution', [
    'craftoria:codex_of_evolution',
    '#craftoria:upgrade_orbs',
  ]).modifyResult('codex_orb').id('craftoria:codex_of_evolution_orb_upgrade');

  event.shapeless('craftoria:codex_of_evolution', [
    'craftoria:codex_of_evolution',
    'minecraft:paper',
  ]).modifyResult('codex_slots').id('craftoria:codex_of_evolution_slots_upgrade');
});

// Recipe logic for the Codex of Evolution orb upgrades
ServerEvents.modifyRecipeResult('codex_orb', event => {
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

// Recipe logic for the Codex of Evolution spell slot upgrades
ServerEvents.modifyRecipeResult('codex_slots', event => {
  const { grid } = event;
  const ingredientCodex = grid.find('craftoria:codex_of_evolution');
  const result = ingredientCodex.copy();
  const spellContainer = ingredientCodex.get('irons_spellbooks:spell_container').mutableCopy();
  if (spellContainer.getMaxSpellCount() >= 15) event.cancel('minecraft:air');
  spellContainer.setMaxSpellCount(spellContainer.getMaxSpellCount() + 1);
  $SpellContainer.set(result, spellContainer.toImmutable());

  event.success(result);
});

/** @type {Record<import("@package/io/redspace/ironsspellbooks/item/armor").$UpgradeOrbType_, number>} */
const allowedAmounts = {
  // Example of allowed amounts for specific upgrade orbs
  // 'irons_spellbooks:spell_resistance': 10,
  // 'craftoria:mana_regen': 50,
  // 'irons_spellbooks:cooldown': 20,
};

/**
 * Checks if an item can be upgraded with a specific upgrade orb.
 * @param {import('@package/net/minecraft/world/item').$ItemStack} item
 * @param {*} upgradeOrb
 * @return {boolean} True if the item can be upgraded with the given upgrade orb, false otherwise.
 */
function canBeUpgraded(item, upgradeOrb) {
  const upgradeData = $UpgradeData.getUpgradeData(item).upgrades().entrySet();
  if (upgradeData.isEmpty()) {
    if (allowedAmounts[upgradeOrb.registeredName] && allowedAmounts[upgradeOrb.registeredName] <= 0) return false;
  } else {
    for (const entry of upgradeData) {
      if (!entry.key.equals(upgradeOrb)) continue;

      let amount = entry.value;
      if (allowedAmounts[upgradeOrb.registeredName] && amount >= allowedAmounts[upgradeOrb.registeredName]) return false;
    }
  }
  return true;
}
