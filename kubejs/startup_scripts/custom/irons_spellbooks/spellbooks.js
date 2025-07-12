StartupEvents.registry('item', e => {
  e.create('craftoria:creative_spell_book', 'spellbook')
    .texture('craftoria:item/wip')
    .displayName('"Creative" Spell Book')
    .rarity('epic')
    .setMaxSpellSlots(15)
    .addAttribute('irons_spellbooks:max_mana', 100000, 'add_value')
    .addAttribute('irons_spellbooks:mana_regen', 100, 'add_value')
    .addAttribute('irons_spellbooks:cooldown_reduction', 100, 'add_value')
    .addAttribute('irons_spellbooks:cast_time_reduction', 100, 'add_value');

  e.create('craftoria:codex_of_evolution', 'spellbook')
    .texture('craftoria:item/wip')
    .displayName('Codex of Evolution')
    .tooltip(Text.darkGray('A spell book with unlimited potential').italic())
    .rarity('hazennstuff:divine')
    .setMaxSpellSlots(0);
});
