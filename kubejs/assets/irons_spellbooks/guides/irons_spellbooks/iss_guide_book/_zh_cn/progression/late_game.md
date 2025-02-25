---
navigation:
  title: "游戏后期"
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

# 游戏后期

## 奥术铁砧

游戏后期需要用到下界合金与大量的基础资源。

使用下届合金制造的奥术铁砧可以用来升级你的卷轴、套装与法术书，并且赋予武器魔咒。



<Recipe id="irons_spellbooks:arcane_anvil" />

## 远古典籍

这些是可以被制造的最高级别的法术书，需要用在远古城市中发现的残破的书来制作。

<Recipe id="irons_spellbooks:netherite_spell_book" />

击杀末影龙会掉落龙皮。

<Recipe id="irons_spellbooks:dragonskin_spell_book" />

## 流派套装



<Recipe id="irons_spellbooks:cryomancer_helmet" />

<Recipe id="irons_spellbooks:pyromancer_helmet" />

## 冰霜术士套装

<GameScene zoom={4}>
  <Entity id="minecraft:armor_stand"data="{ArmorItems:[{id:'irons_spellbooks:cryomancer_boots',Count:1b},{id:'irons_spellbooks:cryomancer_leggings',Count:1b},{id:'irons_spellbooks:cryomancer_chestplate',Count:1b},{id:'irons_spellbooks:cryomancer_helmet',Count:1b}],NoBasePlate:1b}" />
</GameScene>

不同流派的套装均需要用到奥术布匹与一个独特的符文，按照这个模板制作。

## 升级

<ItemImage id="irons_spellbooks:upgrade_orb" />

最后是升级阶段。只有流派套装和法术书可以获得升级。

不同的升级法球由一个基础升级法球和8个所需属性的符文组成。



<Recipe id="irons_spellbooks:upgrade_orb" />

<Recipe id="irons_spellbooks:fire_upgrade_orb" />

## 制作升级所需的材料

<GameScene interactive={true} zoom={2}>
  <Block x="1" y="0" z="0" id="minecraft:deepslate" />
  <Block x="3" y="0" z="0" id="minecraft:soul_sand" />
  <Block x="0" y="0" z="1" id="minecraft:deepslate" />
  <Block x="1" y="0" z="1" id="irons_spellbooks:arcane_debris" />
  <Block x="3" y="0" z="1" id="irons_spellbooks:armor_pile" />
  <Block x="4" y="0" z="1" id="minecraft:soul_fire" />
</GameScene>

奥术残骸相当于是主世界的远古残骸，只能在y=-38下面找到。需要使用下界合金镐挖掘。

## irons_spellbooks:citadel_keeper (TODO)

<GameScene zoom={4}>
  <Entity id="irons_spellbooks:citadel_keeper" />
</GameScene>

灰烬源质是远古骑士的掉落物，破坏地狱中散落的盔甲就会唤醒他们。

