---
navigation:
  title: "遊戲後期"
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

# 遊戲後期

## 奧術鐵砧(Arcane Anvil)

在遊戲後期，玩家可以通過獲得獄髓和大量的基礎資源，並以奧術鐵砧為驅動來完成遊戲。

奧術鐵砧是最強大的製作站，用於提升卷軸等級、升級盔甲和法術書，並為武器注入法術。



<Recipe id="irons_spellbooks:arcane_anvil" />

## 更多法術書

這裡展示了最好的可製作魔法書。廢墟之書在古代城市中可以找到

<Recipe id="irons_spellbooks:netherite_spell_book" />

龍麟(Dragon Skin)會從終界龍身上掉落

<Recipe id="irons_spellbooks:dragonskin_spell_book" />

## 流派裝甲



<Recipe id="irons_spellbooks:cryomancer_helmet" />

<Recipe id="irons_spellbooks:pyromancer_helmet" />

## Ex: Cryomancer Armor

<GameScene zoom={4}>
  <Entity id="minecraft:armor_stand"data="{ArmorItems:[{id:'irons_spellbooks:cryomancer_boots',Count:1b},{id:'irons_spellbooks:cryomancer_leggings',Count:1b},{id:'irons_spellbooks:cryomancer_chestplate',Count:1b},{id:'irons_spellbooks:cryomancer_helmet',Count:1b}],NoBasePlate:1b}" />
</GameScene>

流派裝甲由奧術布料(arcane cloth)和特定流派符文製成，並遵循以下模板

## 升級

<ItemImage id="irons_spellbooks:upgrade_orb" />

升級是進展的最終形式。預設情況下，任何盔甲和魔法書都可以升級。

特定屬性的升級球由一個基礎升級球(upgrade orb)和 8 個所需屬性的符文組成。



<Recipe id="irons_spellbooks:upgrade_orb" />

<Recipe id="irons_spellbooks:fire_upgrade_orb" />

## 升級製作材料

<GameScene interactive={true} zoom={2}>
  <Block x="1" y="0" z="0" id="minecraft:deepslate" />
  <Block x="3" y="0" z="0" id="minecraft:soul_sand" />
  <Block x="0" y="0" z="1" id="minecraft:deepslate" />
  <Block x="1" y="0" z="1" id="irons_spellbooks:arcane_debris" />
  <Block x="3" y="0" z="1" id="irons_spellbooks:armor_pile" />
  <Block x="4" y="0" z="1" id="minecraft:soul_fire" />
</GameScene>

奧術遺骸相當於主世界的遠古遺骸，位於 y=-38 下的地獄。需要使用獄髓鎬挖掘。

## irons_spellbooks:citadel_keeper (TODO)

<GameScene zoom={4}>
  <Entity id="irons_spellbooks:citadel_keeper" />
</GameScene>

遠古騎士會掉落煤渣精華，打碎地獄的盔甲堆可以喚醒遠古騎士。

