---
navigation:
  title: "Late Game"
  icon: "irons_spellbooks:arcane_anvil"
  position: -1
  parent: irons_spellbooks:root.md
item_ids:
  - irons_spellbooks:arcane_anvil
  - irons_spellbooks:netherite_spell_book
  - irons_spellbooks:dragonskin_spell_book
  - irons_spellbooks:cryomancer_helmet
  - irons_spellbooks:pyromancer_helmet
  - irons_spellbooks:upgrade_orb
  - irons_spellbooks:fire_upgrade_orb
---

# Late Game

## Arcane Anvil

Late game is reached by obtaining netherite and vast quantities of basic resources, and powered by the Arcane Anvil.

The Arcane Anvil is the most powerful crafting station, used to level up your scrolls, upgrade armor and spell books, and imbue weapons with spells.



<Recipe id="irons_spellbooks:arcane_anvil" />

## More Spell Books

The best craftable spell books are shown here. The ruined book is found in Ancient Cities

<Recipe id="irons_spellbooks:netherite_spell_book" />

Dragonskin is dropped by the Ender Dragon

<Recipe id="irons_spellbooks:dragonskin_spell_book" />

## School Armor



<Recipe id="irons_spellbooks:cryomancer_helmet" />

<Recipe id="irons_spellbooks:pyromancer_helmet" />

## Ex: Cryomancer Armor

<GameScene zoom={4}>
  <Entity id="minecraft:armor_stand"data="{ArmorItems:[{id:'irons_spellbooks:cryomancer_boots',Count:1b},{id:'irons_spellbooks:cryomancer_leggings',Count:1b},{id:'irons_spellbooks:cryomancer_chestplate',Count:1b},{id:'irons_spellbooks:cryomancer_helmet',Count:1b}],NoBasePlate:1b}" />
</GameScene>

School armor is made from arcane cloth and a particular school rune, following this template

## Upgrading

<ItemImage id="irons_spellbooks:upgrade_orb" />

Upgrades are the final form of progression. By default, any armor as well as spell books can be upgraded.

Upgrade orbs of a specific attribute are made from a base upgrade orb, and 8 runes of the desired attribute.



<Recipe id="irons_spellbooks:upgrade_orb" />

<Recipe id="irons_spellbooks:fire_upgrade_orb" />

## Upgrade Crafting Materials

<GameScene interactive={true} zoom={2}>
  <Block x="1" y="0" z="0" id="minecraft:deepslate" />
  <Block x="3" y="0" z="0" id="minecraft:soul_sand" />
  <Block x="0" y="0" z="1" id="minecraft:deepslate" />
  <Block x="1" y="0" z="1" id="irons_spellbooks:deepslate_mithril_ore" />
  <Block x="3" y="0" z="1" id="irons_spellbooks:armor_pile" />
  <Block x="4" y="0" z="1" id="minecraft:soul_fire" />
</GameScene>

Mithril is a rare Overworld ore, found below y = -38 and unexposed to air. It requires a netherite pickaxe.

## irons_spellbooks:citadel_keeper (TODO)

<GameScene zoom={4}>
  <Entity id="irons_spellbooks:citadel_keeper" />
</GameScene>

Cinder Essence is dropped from Ancient Knights, which can be awakened by breaking armor piles in the nether.

