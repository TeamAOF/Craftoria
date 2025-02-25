---
navigation:
  title: "セントリータレット"
  icon: "pneumaticcraft:sentry_turret"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:sentry_turret
---

# セントリータレット

*セントリータレット*は自律型防御兵器です。範囲内のエンティティを撃つために[ミニガン](../minigun.md)と[銃の弾薬](../minigun_ammo.md)(これらはユーザーが用意する必要があります)を統合した物を使用します。デフォルトでは射程は16ブロックですが、[レンジアップグレード](../upgrades.md#range)を使用して最大32ブロックまでアップグレードできます。

セントリータレットが機能するために[圧力](../pressure.md)を用意する必要はありませんが、[弾薬](../minigun_ammo.md)を用意する必要があります。

<ItemImage id="pneumaticcraft:sentry_turret" />

*セントリータレット*の潜在的なターゲットはタレットのGUIに[エンティティフィルター](../entity_filter.md)を入力することでフィルタリングできます。ポップアップフィルタのヘルプページを表示するには*F1*を押し続けます。

新しく設置されたタレットには*@mob*のデフォルトフィルタがありますが、フィルタのないタレットはそれを設置したプレイヤーを攻撃しません。

<ItemImage id="pneumaticcraft:security_station" />

*セントリータレット*が1つ以上の[セキュリティステーション](./security_station.md)によってカバーされている場合、エンティティフィルターがどのように設定されているかに関係なく、*全*セキュリティステーションの信頼できるリストに載っているプレイヤーがターゲットになることはありません。



TODO: Unsupported flag 'border'
![](sentry_turret.png)

セントリータレットのクラフト

<Recipe id="pneumaticcraft:sentry_turret" />

