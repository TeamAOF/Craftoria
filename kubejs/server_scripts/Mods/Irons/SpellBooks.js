let $UpgradeUtils = Java.loadClass('io.redspace.ironsspellbooks.util.UpgradeUtils');
let $UpgradeData = Java.loadClass('io.redspace.ironsspellbooks.api.item.UpgradeData');
let $SpellContainer = Java.loadClass('io.redspace.ironsspellbooks.capabilities.magic.SpellContainer');

let MAX_UPGRADE_ITEMS = 8;
let UPGRADE_ORB_TAG = '#craftoria:upgrade_orbs';
let SPELL_CAP_ITEM = 'minecraft:paper';

// Special Recipe for upgrading the Codex of Evolution
// Registered once per possible item count so any number of orbs/paper (spread across slots) matches.
ServerEvents.recipes(event => {
  for (let count = 1; count <= MAX_UPGRADE_ITEMS; count++) {
    let orbIngredients = ['craftoria:codex_of_evolution'];
    let paperIngredients = ['craftoria:codex_of_evolution'];
    for (let i = 0; i < count; i++) {
      orbIngredients.push(UPGRADE_ORB_TAG);
      paperIngredients.push(SPELL_CAP_ITEM);
    }

    event.shapeless('craftoria:codex_of_evolution', orbIngredients).modifyResult('codex_orb').id(`craftoria:codex_of_evolution_orb_upgrade_${count}`);
    event.shapeless('craftoria:codex_of_evolution', paperIngredients).modifyResult('codex_slots').id(`craftoria:codex_of_evolution_slots_upgrade_${count}`);
  }
});

// Recipe logic for the Codex of Evolution orb upgrades
ServerEvents.modifyRecipeResult('codex_orb', event => {
  let { grid } = event;
  let result = grid.find('craftoria:codex_of_evolution').copy();
  let slot = $UpgradeUtils.getRelevantEquipmentSlot(result);

  for (let orb of grid.findAll(UPGRADE_ORB_TAG)) {
    let holderOpt = Registry.access().access().holder(orb.get('irons_spellbooks:upgrade_orb_type'));
    if (holderOpt.isEmpty()) event.cancel('minecraft:air');
    let upgradeOrb = holderOpt.get();
    if (!canBeUpgraded(result, upgradeOrb)) event.cancel('minecraft:air');
    $UpgradeData.getUpgradeData(result).addUpgrade(result, upgradeOrb, slot);
  }

  event.success(result);
});

// Recipe logic for the Codex of Evolution spell slot upgrades
ServerEvents.modifyRecipeResult('codex_slots', event => {
  let { grid } = event;
  let result = grid.find('craftoria:codex_of_evolution').copy();
  let spellContainer = result.get('irons_spellbooks:spell_container').mutableCopy();

  for (let paper of grid.findAll(SPELL_CAP_ITEM)) {
    if (spellContainer.getMaxSpellCount() >= 15) event.cancel('minecraft:air');
    spellContainer.setMaxSpellCount(spellContainer.getMaxSpellCount() + 1);
  }

  $SpellContainer.set(result, spellContainer.toImmutable());
  event.success(result);
});

/** @type {Record<import("@package/io/redspace/ironsspellbooks/item/armor").$UpgradeOrbType_, number>} */
let allowedAmounts = {
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
let canBeUpgraded = (item, upgradeOrb) => {
  let upgradeData = $UpgradeData.getUpgradeData(item).upgrades().entrySet();
  if (upgradeData.isEmpty()) {
    if (allowedAmounts[upgradeOrb.registeredName] && allowedAmounts[upgradeOrb.registeredName] <= 0) return false;
  } else {
    for (let entry of upgradeData) {
      if (!entry.key.equals(upgradeOrb)) continue;

      let amount = entry.value;
      if (allowedAmounts[upgradeOrb.registeredName] && amount >= allowedAmounts[upgradeOrb.registeredName]) return false;
    }
  }
  return true;
};
