---
navigation:
  title: "弾薬"
  icon: "pneumaticcraft:gun_ammo"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:gun_ammo
  - pneumaticcraft:gun_ammo_incendiary
  - pneumaticcraft:gun_ammo_weighted
  - pneumaticcraft:gun_ammo_ap
  - pneumaticcraft:gun_ammo_explosive
  - pneumaticcraft:gun_ammo_freezing
---

# 弾薬

弾薬は[ミニガン](./minigun.md)で使用されます。

1つの弾薬カートリッジには弾薬の種類に応じて最大2,000発のミニガン弾が入ります。弾薬は*ミニガン*が射撃している間着実に消費され、弾薬レベルは弾薬アイテムのツールチップ、耐久度バー、および(ミニガンを装備している場合)画面中央のミニガンの照準器の横にあるHUDで確認できます。

<a name="magazine"></a>
弾薬は、*ミニガン*のマガジンに挿入して使用する必要があります。プレイヤーのインベントリから消費されることはありません。*ミニガン*に弾薬を装填するには、*ミニガン*を*スニーク+右クリック*します。

弾薬は1～4の番号付きスロットから順に消費されますが、スロットを*中クリック*してロックすると*ミニガン*がそのスロットの弾薬のみを消費するように強制できます。複数の弾薬タイプを装填している場合に便利です。ロックされたスロットを再度ロック解除するには*中クリック*します。

<ItemImage id="pneumaticcraft:gun_ammo" />

*通常弾*にはそれ自体に特別な機能はありませんが2,000発の大きなカートリッジが付いています。

さらに、[ポーション](#potions)を使って作成して効果を得ることができる唯一の弾薬タイプです。

<ItemImage id="pneumaticcraft:gun_ammo_incendiary" />

*焼夷弾*はカートリッジサイズが1,000で、当たったエンティティに火をつけます。

ブロックに火をつける可能性もあるので注意が必要です。

<ItemImage id="pneumaticcraft:gun_ammo_weighted" />

*加重弾*はカートリッジサイズが500で非常に高いダメージを与えますが、重量のため射程は通常の弾薬の20%しかありません。

<ItemImage id="pneumaticcraft:gun_ammo_ap" />

*徹甲弾*はカートリッジサイズが500で作成コストが多少高くなりますが通常の弾薬よりもわずかにダメージが大きく、ターゲットの装甲を貫通できます。

<ItemImage id="pneumaticcraft:gun_ammo_explosive" />

*爆発弾*のカートリッジサイズは250です。命中すると小さいながらも非常に効果的な爆発を起こす可能性があります。爆発で怪我をする可能性もあるので注意してください。爆発は<Color hex="#880">$(t:設定の'B:explosiveAmmoTerrainDamage'を参照)デフォルト$(/t:設定の'B:explosiveAmmoTerrainDamage'を参照)</Color>では地形にダメージを与えません。

<ItemImage id="pneumaticcraft:gun_ammo_freezing" />

*冷凍弾*のカートリッジサイズは1,000です。命中したターゲットの動きが遅くなり、ダメージを与える凍結雲でターゲットを包む可能性があります。この雲はプレイヤーにもダメージを与える可能性があるので注意してください。

耐火性ターゲットに対しては追加ダメージを与えるため、<Color hex="#800">ネザー</Color>での戦闘に最適です。

<a name="potions"></a>
## ポーションを塗った弾薬

通常弾は任意の*ポーション*でクラフトできます。その弾薬は物理的なダメージを与えなくなりますが、ターゲットにそのポーション効果を適用する可能性があります。

*スプラッシュ*および*残留*ポーションも使用できます。これらは予想どおりの範囲効果がありますが、弾薬はスプラッシュポーションを使用すると3倍の速さで消費され、残留ポーションを使用すると6倍の速さで消費されます。



<Recipe id="pneumaticcraft:gun_ammo" />

<Recipe id="pneumaticcraft:gun_ammo_incendiary" />



<Recipe id="pneumaticcraft:gun_ammo_weighted" />

<Recipe id="pneumaticcraft:gun_ammo_ap" />



<Recipe id="pneumaticcraft:gun_ammo_explosive" />

<Recipe id="pneumaticcraft:gun_ammo_freezing" />



<Recipe id="pneumaticcraft:gun_ammo_potion_crafting" />

