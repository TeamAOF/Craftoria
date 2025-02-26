---
navigation:
  title: "流体ホッパー"
  icon: "pneumaticcraft:liquid_hopper"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:liquid_hopper
---

# 流体ホッパー

*流体ホッパー*は流体を転送するために使用できるデバイスです。[全方向ホッパー](./omnidirectional_hopper.md)と同様に入力と出力は任意の方向に向けることができ、同じ配置および回転ルールを使用します。転送速度を上げるために[スピードアップグレード](../base_concepts/upgrades.md#speed)を追加できます。

<ItemImage id="pneumaticcraft:liquid_hopper" />

*流体ホッパー*は<Color id="blue">入力</Color>側の前の地面にあるアイテムから流体を排出し、<Color id="gold">出力</Color>側の前のアイテム(水入りバケツ、溶岩入りバケツ、他MODの流体コンテナなど)に液体を挿入しようとします。

## ディスペンサーアップグレード

[ディスペンサーアップグレード](../base_concepts/upgrades.md#dispenser)が*流体ホッパー*に挿入されると、<Color id="blue">入力</Color>側で流体ブロック(1,000mB)を汲み上げ、<Color id="gold">出力</Color>側で貯蔵されている流体の1,000mBを分配します。これはたとえば水ポンプとして使用できます。

流体ホッパーのクラフト

<Recipe id="pneumaticcraft:liquid_hopper" />

