---
navigation:
  title: "収集ドローン"
  icon: "pneumaticcraft:collector_drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:collector_drone
---

# 収集ドローン

*収集ドローン*は[ドローン](./drone.md)の特殊な非プログラム型で、任意のインベントリブロック(チェストなど)に対してまたはその隣に配置する必要があります。近くにあるアイテムを収集してそのインベントリに入れます。

## 自動充填

<ItemImage id="pneumaticcraft:charging_station" />

すべての種類のドローンと同様にこれらのドローンは動作するために[圧力](../pressure.md)を必要とし、空気が少なくなると[ディスペンサーアップグレード](./drone.md#charging)を備えた充填ステーションを自動的に探します。

## アイテムフィルタリング

*収集ドローン*には基本的なアイテムフィルタリング機能があります。インベントリブロックに対して*再*配置するとそのインベントリにすでに存在するアイテムがフィルタリングされます。インベントリの*隣*(または空のインベントリブロック)の地面に配置するとアイテムはフィルタリング*されません*。

ドローンのフィルターを変更する場合はフィルターをレンチで締めて再配置する必要があります。

*収集ドローン*のデフォルトの範囲は配置されたブロックを中心とした17x17x17の立方体です。この範囲は最大16個の[レンジアップグレード](../upgrades.md#range)を追加することで拡大できます。

## pneumaticcraft:collector_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:collector_drone" y={-0.3} />
</GameScene>

収集ドローンのクラフト

<Recipe id="pneumaticcraft:collector_drone" />

