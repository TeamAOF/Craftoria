---
navigation:
  title: "空気圧の防具の概要"
  icon: "minecraft:written_book"
  parent: pneumaticcraft:armor.md
---

# 空気圧の防具の概要

<Color hex="#228">PneumaticCraft: Repressurized</Color>を*アイアンマン*のHUDと組み合わせるとどうなるでしょうか？答えは*空気圧の防具*になります！

この防具はトニー・スタークのおもちゃからヒントを得たものですが、無敵というわけではありません。デフォルトではこの防具は同等の*鉄の防具*の各部位よりもわずかに保護性能と耐久性が優れているだけです。

圧縮されたアイアンマン

TODO: Unsupported flag 'border'
![](pneumatic_armor.png)

ただし、この防具はアップグレードの可能性が非常に高いです。アップグレードを使用するには(および防具を加圧するには)防具を[充填ステーション](../machines/charging_station.md)に配置します。

すべての部分に共通するアップグレードについては次のページで説明します。部位固有のアップグレードについては各防具の部位のページで個別に説明します。

防具の部位を装備すると数秒以内に*起動*します。*$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)*を押すとGUIが開き、インストールされたアップグレードを構成したり、防具のHUDを調整したりできます。インストールされたアップグレードが増えるとGUIに表示されるオプションも増えます。

すべてのアップグレードはGUIのチェックボックスでオン/オフを切り替えることができます。また、各チェックボックスにキーをバインドしてGUI外から機能をすばやく切り替えることもできます。

## 修理

<ItemImage id="minecraft:anvil" />

貴重な防具を良好な状態に保つにはいくつかの方法があります:
- 圧縮鉄インゴットを使って*金床*で修理する
- 各パーツに*アイテムライフアップグレード*を追加して自動的に修復する
- 各部位に*修繕*エンチャントを適用する

## 着色

すべての防具のパーツはデフォルトのグレーのテクスチャから動的に色を変更できます。各パーツには個別に調整できる*プライマリ*と*セカンダリ*の色があり、ヘルメットの*目の部分*にも独自の色を設定できます。

色を調整するにはメイン防具のGUI画面から**色...** 画面を使用します。特別なアップグレードは必要ありません。組み込み機能です。

<ItemImage id="pneumaticcraft:speed_upgrade" />

[スピードアップグレード](../base_concepts/upgrades.md#speed)は各防具の起動時間を短縮します。さらに[エンティティトラッカー](../base_concepts/upgrades.md#entity_tracker)と[ブロックトラッカー](../base_concepts/upgrades.md#block_tracker)は[ヘルメット](./pneumatic_helmet.md)のロックオン時間を短縮し、[レギンス](./pneumatic_leggings.md)の実行速度を上げますが、[空気コスト](../base_concepts/pressure.md)がかかります。

<ItemImage id="pneumaticcraft:volume_upgrade" />

[ボリュームアップグレード](../base_concepts/upgrades.md#volume)は各防具の部位の [空気貯蔵容量](../base_concepts/pressure.md)を増加させ、防具の充填にかかる時間が長くなりますが、使用時に圧力が失われるのが遅くなります。ボリュームアップグレードは25に制限されており、アップグレードを追加するほど効果は減少します。

<ItemImage id="pneumaticcraft:armor_upgrade" />

[アーマーアップグレード](../base_concepts/upgrades.md#armor)は各防具の保護と耐久性を高めます。2つのアップグレードをインストールすると各部位は対応する*ダイヤモンドの防具*と同等になります。 最大4つのアップグレードでは保護は*ダイヤモンドの防具*よりも優れています。

<ItemImage id="pneumaticcraft:item_life_upgrade" />

[アイテムライフアップグレード](../base_concepts/upgrades.md#item_life)は[空気](../base_concepts/pressure.md)のコストで防具の一部をゆっくりと修復します。各部位に最大5つのアップグレードをインストールでき、段階的に高速化されます(ただし、空気効率は低くなります)。

<ItemImage id="pneumaticcraft:gilded_upgrade" />

[金メッキアップグレード](../base_concepts/upgrades.md#gilded)はどの防具にも取り付けることができ、*ピグリン達*を騙して実際に*金の防具*を着用していると信じ込ませます。愚かなピグリンたち。

## Mekanismの放射線

<ItemImage id="pneumaticcraft:radiation_shielding_upgrade" />

[放射線防護アップグレード](../base_concepts/upgrades.md#radiation_shielding) は、Mekanism独自の[放射線防護ユニット](https://wiki.aidancbrady.com/wiki/Radiation_Shielding_Unit)と同様にMekanismの放射線の有害な影響に対する保護を提供します。完全な保護を受けるにはすべての防具の部位に防護アップグレードが装備されている必要があることに注意してください。

## Thaumcraft

[Thaumcraft アップグレード](../base_concepts/upgrades.md#thaumcraft) は、対応する *Thaumaturgeの防具*と同等のvis割引を防具に提供します。さらに[ヘルメット](./helmet.md)にインストールされた Thaumcraft アップグレードは*Goggles of Revealing*として機能し、*オーラノード*を表示し、コンテナ内の*側面*の量を表示します。

