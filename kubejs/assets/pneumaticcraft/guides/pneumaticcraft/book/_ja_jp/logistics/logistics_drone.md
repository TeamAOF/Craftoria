---
navigation:
  title: "物流ドローン"
  icon: "pneumaticcraft:logistics_drone"
  parent: pneumaticcraft:logistics.md
item_ids:
  - pneumaticcraft:logistics_drone
---

# 物流ドローン

*物流ドローン*は[ドローン](../tools/drone.md)の特殊なタイプです。これらはプログラム可能ではなく、物流タスクの実行*のみ*に限定されているため、下位層の*ドローン*です。

## 自動充填

<ItemImage id="pneumaticcraft:charging_station" />

すべての種類のドローンと同様に、これらのドローンは動作するために[圧力](../base_concepts/pressure.md)を必要とし、空気が少なくなると[ディスペンサーアップグレード](../tools/drone.md#charging)を備えた充填ステーションを自動的に探します。

## pneumaticcraft:logistics_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:logistics_drone" y={-0.3} />
</GameScene>

配備されると、*物流ドローン*はドローンが配備されたブロックを中心とした33x33x33の立方体内の[物流フレーム](./frames.md)を備えた任意のインベントリ/タンクで動作します。

これらのドローンは頻繁にアイテムを移動する必要があるため、移動速度と運搬能力を向上させるために[スピード](../base_concepts/upgrades.md#speed)と[インベントリ](../base_concepts/upgrades.md#inventory)アップグレードが推奨されます。

物流ドローンのクラフト

<Recipe id="pneumaticcraft:logistics_drone" />

