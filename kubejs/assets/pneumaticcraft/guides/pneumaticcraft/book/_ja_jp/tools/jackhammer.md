---
navigation:
  title: "空気圧式削岩機"
  icon: "pneumaticcraft:jackhammer[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:jackhammer
---

# 空気圧式削岩機

<ItemImage id="pneumaticcraft:jackhammer" />

*空気圧式削岩機*は非常に用途の広い採掘ツールで、[圧力](../pressure.md)を使用してすべての種類のブロックを同じように効果的に破壊できます。採掘速度と空気容量はそれぞれ[充填ステーション](../charging_station.md)で[スピードアップグレード](../upgrades.md#speed)と[ボリュームアップグレード](../upgrades.md#volume)を使用してアップグレードできます。

## ドリルビット

新しく作られた削岩機には*ドリルビット*が付属していないためあまり役に立ちません。ドリルビットを挿入する必要があります。削岩機を右クリックして設定GUIを開いて右上のスロットにビットを配置します。

ドリルビットにはパワーとコストの順に4つのタイプがあります。
- 鉄
- 圧縮鉄
- ダイヤモンド
- ネザライト

## 掘削モード

削岩機はいくつかの*鉱脈採掘*機能を含むいくつかの掘削モードをサポートしており、広い領域を素早く簡単に掘削できます。サポートされる掘削モードは使用している*ドリルビット*によって異なります。優れたビットはより多くの掘削モードをサポートします(掘削速度も向上します)。

掘削モードを設定するには削岩機のGUIを開き(右クリック)右下のボタンを使用します(反対側を参照)。

*ネザライトのドリルビットを装着し、3x3掘削モードを選択した削岩機のGUI*

![](jackhammer_gui.png)

## エンチャント

<ItemImage id="minecraft:enchanted_book" />

削岩機は通常*エンチャントテーブル*でエンチャントすることはできませんが、GUIを介して*シルクタッチ*または*幸運*のエンチャントの本を挿入することは可能です。本スロット(上部中央)に配置された本は削岩機にエンチャントを付与します。

## エンチャント(続き)

これには必要に応じてシルクタッチと幸運の本を簡単に交換できるという利点があります。

必要な本を入手するのが難しい場合(バニラの本のエンチャントは非常にランダムです)は[圧力室](../pressure_chamber.md)を使用するとツールからエンチャントを剥がして本に配置できることを覚えておいてください。

削岩機のクラフト

<Recipe id="pneumaticcraft:jackhammer" />

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/iron_drill_bit"}
```

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/compressed_iron_drill_bit"}
```

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/diamond_drill_bit"}
```

**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/netherite_drill_bit"}
```

