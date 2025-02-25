---
navigation:
  title: "空気圧ドア"
  icon: "pneumaticcraft:pneumatic_door"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:pneumatic_door
  - pneumaticcraft:pneumatic_door_base
---

# 空気圧ドア

この特別なドアは十分な[空気圧](../pressure.md)があれば、近くにプレイヤーがいる場合に自動的に開きます。基本検出範囲は2ブロックですが[レンジアップグレード](../upgrades.md#range)を挿入することで範囲を広げることができます。

*空気圧ドア*を構築するにはドア自体の*上半分*と同じ高さになるように*空気圧ドアベース*を配置する必要があります。

*二重の空気圧ドアです。左側は [偽装](../camo_applicator.md)**あり、右側は偽装なし*

![](pneumatic_door.png)

<ItemImage id="pneumaticcraft:security_station" />

*空気圧ドアベース*が動作中の[セキュリティステーション](./security_station.md)の範囲内にある場合、*セキュリティステーション*によって信頼されているプレイヤーに対してのみドアが開きます。

## 動作モード

*空気圧ドア*はドアベースのGUIで選択可能な4つのモードのいずれかで動作します:
- *近くのプレイヤー*: プレイヤーが範囲内にいるとドアが開きます。
- *近くにいるプレイヤーが見ている*: プレイヤーが近くにいてドアを見ているとドアが開きます。
- *木製ドアの動作*: ドアはバニラの*木製のドア*のように動作します。
- *鉄のドアの動作*: ドアはバニラの*鉄のドア*のように動作します。



<Recipe id="pneumaticcraft:pneumatic_door" />

<Recipe id="pneumaticcraft:pneumatic_door_base" />

