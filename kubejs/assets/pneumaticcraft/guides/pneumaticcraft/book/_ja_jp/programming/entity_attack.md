---
navigation:
  title: "エンティティ攻撃ウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/attack_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# エンティティ攻撃ウィジェット

[ドローン](../tools/drone.md)はエリア内のすべての生物を攻撃します。

このウィジェットに接続されているすべての[エリア](./area.md)ウィジェットのエリアタイプは*ボックス*である必要があることに注意してください。これはサポートされている唯一の形状です。ただし、ホワイトリスト(右)側またはブラックリスト(左)側で複数のエリアウィジェットを使用することで異なる形状を作成できます。

## エンティティのフィルタリング

[テキスト](./text.md)ウィジェットを[エンティティフィルター](../base_concepts/entity_filter.md)として使用することで攻撃可能なクリーチャーを指定できます。たとえば*ドローン*ですべてのプレイヤーを攻撃したい場合は*テキスト*ウィジェットを<Color hex="#600">@player</Color>を含む*エンティティ攻撃*ウィジェットの*右*に接続します。

自分自身が攻撃されたくない場合はプレイヤー名を含む*テキスト*ウィジェットを*左*に接続します。

## 近接攻撃

<ItemImage id="minecraft:diamond_sword" />

[ドローン](../tools/drone.md)はインベントリ内の任意の近接武器を装備して攻撃に使用します。*ドローン*のインベントリに複数の武器がある場合は最もダメージの大きい武器を装備します。

[インベントリインポート](./inventory_import.md)ウィジェットを使用してドローンに武器を提供することができます。非武装の近接攻撃は弱いため強くお勧めします。

<ItemImage id="pneumaticcraft:minigun_upgrade" />

[ミニガンアップグレード](../base_concepts/upgrades.md#minigun)を[ドローン](../tools/drone.md)に挿入して[ミニガン](../tools/minigun.md)を作成します。[銃の弾薬](../tools/minigun_ammo.md)が提供([インベントリインポート](./inventory_import.md)ウィジェットを使用)されると*ドローン*はこのミニガンを遠距離攻撃に使用します。

デフォルトの範囲は16ブロックですが、最大16個の[レンジアップグレード](../base_concepts/upgrades.md#range)を挿入してアップグレードすると最大範囲は32ブロックになります。

<ItemImage id="pneumaticcraft:micromissiles" />

ドローンは[マイクロミサイル](../tools/micromissiles.md)の発射方法も知っています。このウィジェットの実行時に*ドローン*が*マイクロミサイル*を保持している場合、現在のターゲットにミサイルを発射します。接続されている[エンティティフィルター](../base_concepts/entity_filter.md)はドローンによってマイクロミサイル自身のエンティティフィルターにコピーされます。

*また来るよ*

![](attack_piece.png)

