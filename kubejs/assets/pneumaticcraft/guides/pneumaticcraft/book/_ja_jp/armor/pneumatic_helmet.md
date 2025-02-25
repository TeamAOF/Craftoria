---
navigation:
  title: "空気圧ヘルメット"
  icon: "pneumaticcraft:pneumatic_helmet"
  parent: pneumaticcraft:armor.md
item_ids:
  - pneumaticcraft:pneumatic_helmet
---

# 空気圧ヘルメット

*空気圧ヘルメット*は4つある*空気圧の防具*のうちの1つです。

長い間、入手可能な唯一の部位でした。

空気圧ヘルメットのクラフト

<Recipe id="pneumaticcraft:pneumatic_helmet" />

<a name="entity_tracker"></a>
<ItemImage id="pneumaticcraft:entity_tracker_upgrade" />

[エンティティトラッカー](../upgrades.md#entity_tracker)アップグレードをインストールすると16ブロックの範囲内の生物は壁越しであっても自動的に追跡されます。エンティティが攻撃的なMobである場合、ターゲットにされると警告が表示されます。これにより戦闘(または脱出)に備えることができます。[エンティティフィルター](../entity_filter.md)を使用して追跡する必要があるエンティティをGUIでフィルターできます。

<ItemImage id="pneumaticcraft:block_tracker_upgrade" />

[ブロックトラッカー](../upgrades.md#block_tracker)アップグレードをインストールすると30ブロック以内の特殊ブロックが壁越しでも追跡されます。追跡されるブロックは次のとおりです:
- すべてのインベントリ(内容が表示されます)
- Mobスポナー(スポーン時間が表示されます)
- シルバーフィッシュブロック
- エンドポータルフレーム
- TNT
- トリップワイヤーフック

## ブロックトラッカー(続き)

これらのブロックの一部は比較的一般的なもの(プレイヤーの家のインベントリ、要塞のシルバーフィッシュブロック)であるため、特定の種類のブロックが一定数に達するとHUDはラベルの表示を自動的に停止します。ただし、クロスヘアをブロックの上に置くと追跡されているブロックに関する情報を取得することはできます。また、設定GUIでブロックのチェックを外すことで追跡するブロックを指定することもできます。

<ItemImage id="pneumaticcraft:coordinate_tracker_upgrade" />

[座標トラッカー](../upgrades.md#coordinate_tracker)アップグレードはMinecraft独自のパスファインディングを使用して、選択した場所への最短経路を計算します。

これは洞窟で迷って脱出したいときに非常に便利です。オプションメニューを開き(*$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)*を押す)、**表層に移動**を選択します。

<ItemImage id="pneumaticcraft:search_upgrade" />

たくさんのチェストがある基地で特定のアイテムを探すのに苦労したことはありませんか？もしそうなら[検索アップグレード](../upgrades.md#search)が役に立ちます。GUIでアイテムを検索できます。スクロールバーで探しているアイテムを参照するか、検索ボックスにアイテム名を入力します。アイテムが見つかったらターゲットスロットに配置します。

## アイテム検索(続き)

これで地面または16ブロックの範囲内のインベントリにある選択したアイテムはすべて、*緑色に輝きます。*輝きの大きさはその場所にあるアイテムと見つかったアイテムの合計の比率によって決まります。

ヘルメットには[エンティティトラッカー](../upgrades.md#entity_tracker)(地面にあるアイテムの場合)および/または[ブロックトラッカー](../upgrades.md#block_tracker)(インベントリ内のアイテムの場合)のアップグレードも必要であることに注意してください。

<ItemImage id="pneumaticcraft:dispenser_upgrade" />

[ディスペンサーアップグレード](../upgrades.md#dispenser)を[エンティティトラッカーアップグレード](../upgrades.md#entity_tracker)と一緒にインストールすると[ドローン](../drone.md)を監視/デバッグできます。*ドローン*を見ながら*$(k:pneumaticcraft.helmet.debugging.drone)$(/k:pneumaticcraft.helmet.debugging.drone)*を押すだけです。追跡アニメーションに赤い枠が表示されます。次に、*$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)*を押してヘルメットのオプションウィンドウを開き、**ドローンデバッグ**パネルに移動します。

<ItemImage id="pneumaticcraft:range_upgrade" />

[レンジアップグレード](../upgrades.md#range)は[エンティティトラッカー](../upgrades.md#entity_tracker)と[ブロックトラッカー](../upgrades.md#block_tracker)の範囲をアップグレードごとに5ブロック増加します。エンティティトラッカーには制限はありませんが、ブロックトラッカーの場合は最大5つのアップグレードが受け入れられます。

このアップグレードによりヘルメットの空気使用量が増加することに注意してください。

<ItemImage id="pneumaticcraft:night_vision_upgrade" />

[暗視アップグレード](../upgrades.md#night_vision)はその名の通り、非常にわずかな[空気コスト](../pressure.md)で暗闇でも見えるようにします。

<ItemImage id="pneumaticcraft:scuba_upgrade" />

[スキューバアップグレード](../upgrades.md#scuba)を使用するとヘルメットの予備空気を利用して水中で呼吸できるようになります。さらにフェイスマスクも付いているので、水中の視界がはるかに鮮明になります。[暗視アップグレード](../upgrades.md#night_vision)と組み合わせると非常に素晴らしい景色が楽しめます。

<ItemImage id="pneumaticcraft:ender_visor_upgrade" />

[エンダーバイザーアップグレード](../upgrades.md#ender_visor)は高性能*カボチャ*研究に基づいており、実際のカボチャに頭を突っ込むときに通常伴う視覚的な困難を軽減しながら*エンダーマン*の攻撃を回避するための切り替え可能な手段を提供します。

