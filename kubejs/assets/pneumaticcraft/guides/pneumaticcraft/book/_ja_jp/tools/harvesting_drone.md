---
navigation:
  title: "収穫ドローン"
  icon: "pneumaticcraft:harvesting_drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:harvesting_drone
---

# 収穫ドローン

*収穫ドローン*は[ドローン](./drone.md)の特殊な非プログラム型で、配置されたブロックを中心とした17x17x17の立方体で[作物/木の収穫](../programming/harvest.md)タスクを実行します。ドローンは収穫したアイテムを*拾いません*。

## 自動充填

<ItemImage id="pneumaticcraft:charging_station" />

すべての種類のドローンと同様にこれらのドローンは動作するために[圧力](../base_concepts/pressure.md)を必要とし、空気が少なくなると[ディスペンサーアップグレード](./drone.md#charging)を備えた充填ステーションを自動的に探します。

## pneumaticcraft:harvesting_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:harvesting_drone" y={-0.3} />
</GameScene>

## ツールの使用

*収穫ドローン*を任意の種類の*クワ*のみを含むインベントリに対して*スニーク+右クリック*して配置するとドローンはそのクワを使用して自動的に作物を植え直し、クワを装備していない状態では作業を行おうとしません。植え直しを気にしない場合はドローンを他のブロックに対して配置してください。

収穫ドローンは斧の代わりに鍬を使って木を切り倒す方法を見つけ出したことに注意してください。彼らはそういう賢い存在です。

<Recipe id="pneumaticcraft:harvesting_drone" />

