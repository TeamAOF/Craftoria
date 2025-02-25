---
navigation:
  title: "全方向ホッパー"
  icon: "pneumaticcraft:omnidirectional_hopper"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:omnidirectional_hopper
---

# 全方向ホッパー

*全方向ホッパー*はバニラの*ホッパー*と似た動作をします。ただし、このホッパーは上だけでなく*どのような*方向にでも向けることができます。さらに[アップグレード](../upgrades.md)を受け入れるため、これを使用してホッパーの速度を大幅に上げることができます。[空気](../pressure.md)を使用しないため、ゲーム序盤で非常に便利なデバイスです。

<ItemImage id="pneumaticcraft:omnidirectional_hopper" />

ホッパーを配置するとその<Color id="blue">入力</Color>は自分の方を向き、その<Color id="gold">出力</Color>は配置されたブロックの方に向きます。

*ホッパーを[空気圧レンチ](../pneumatic_wrench.md)*(他のレンチも機能する場合があります)で右クリックすると入力の向きを変更できます。*ホッパーをスニーク+右クリック*すると出力の向きを変更できます。

## ディスペンサーアップグレード

[ディスペンサーアップグレード](../upgrades.md#dispenser)がインストールされている場合、ホッパーはアイテムを<Color id="gold">出力</Color>側から自動的にワールドに排出(そこにインベントリがない場合)します。

これは大幅に改良された*ドロッパー*として使用できます。より高速で、より正確で、より優れた<Color hex="#f00">レッドストーン制御</Color>です。

## エンティティトラッカーアップグレード

[エンティティトラッカーアップグレード](../upgrades.md#entity_tracker)がインストールされている場合、ホッパーは<Color id="blue">入力</Color>側の前にあるエンティティからアイテムを抽出できるようになります。エンティティは*pneumaticcraft:omnihopper_blacklisted*エンティティタイプタグに追加することでこのような抽出からブラックリストに登録できます。村人は無限アイテムの元になる可能性があるため、デフォルトでブラックリストに登録されています。

全方向ホッパーのクラフト

<Recipe id="pneumaticcraft:omnidirectional_hopper" />

