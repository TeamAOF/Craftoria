---
navigation:
  title: "ガードドローン"
  icon: "pneumaticcraft:guard_drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:guard_drone
---

# ガードドローン

*ガードドローン*は任意のインベントリブロックに対して展開する必要がある、特殊なプログラム不可能なタイプの[ドローン](./drone.md)です。武器として使用するアイテムを1つインポートし範囲内のMobを攻撃します。

## 自動充填

<ItemImage id="pneumaticcraft:charging_station" />

すべての種類のドローンと同様に、これらのドローンは動作するために[圧力](../base_concepts/pressure.md)を必要とし、空気が少なくなると[ディスペンサーアップグレード](./drone.md#charging)を備えた充填ステーションを自動的に探します。

## 範囲

*ガードドローン*は配置位置から水平方向に16ブロック、上方向に8ブロック、下方向に5ブロック以内の敵対的なMobをターゲットにします。

垂直方向の範囲が狭い理由は洞窟の奥深くにいるMobの検出とテレポートを最小限に抑えるためです。テレポートすると空気が無駄になりドローンに何が起こったのか分からなくなってしまいます。

## 武器

<ItemImage id="minecraft:netherite_sword" />

*ガードドローン*はインベントリに何が入っているかは気にしません。そのため、役に立つ近接武器をそこに入れるように注意してください。武器が壊れてインベントリに代わりの武器がない場合、ドローンは武装せずに戦い続けることになり非常に非効率的です。

## 遠距離戦闘

<ItemImage id="pneumaticcraft:minigun_upgrade" />

ドローンには代わりに[ミニガンアップグレード](../base_concepts/upgrades.md#minigun)を装備することもできます。その場合は、代わりに[ミニガンの銃弾](./minigun_ammo.md)をインベントリに追加する必要があります。

## pneumaticcraft:guard_drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:guard_drone" y={-0.3} />
</GameScene>

ガードドローンのクラフト

<Recipe id="pneumaticcraft:guard_drone" />

