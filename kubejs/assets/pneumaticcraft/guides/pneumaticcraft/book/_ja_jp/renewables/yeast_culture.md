---
navigation:
  title: "酵母培養液"
  icon: "pneumaticcraft:yeast_culture_bucket"
  parent: pneumaticcraft:renewables.md
---

# 酵母培養液

*酵母培養液*は[エタノール](./ethanol.md)と[サワードゥ](./sourdough.md)の生産に必要でありいくつかの方法で生産できます:

## 方法その1

<ItemImage id="minecraft:red_mushroom" />

これは最初に利用できる唯一の方法です。[熱空気圧処理プラント](../thermopneumatic_processing_plant.md)に*水*を入れ、キノコをいくつか追加します。この方法は少し時間(キノコの供給が十分に必要)がかかりますが酵母培養液の初期在庫を簡単に生成できます。

## 方法その1(続き)

このプロセスは温度に敏感です。熱空気圧処理プラントの温度を30℃から60℃の間に保つ必要があります。これは暖かいバイオームでは非常に簡単ですが、寒い地域では少し手間がかかるかもしれません。注意すべき点の1つは深く掘るにつれて周囲の温度が上昇する傾向があるため、より低いYレベルで処理を実行する場合は温帯バイオームが適している可能性があるということです。

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/yeast_culture"}
```

## 重要なお知らせ

*次のページで説明されているようにワールド内での酵母クラフトはこのインスタンスの設定では無効になっています。*

## 方法その2

*酵母培養液*は生物なので自己複製が可能です。これを行うには酵母培養液入りバケツをインワールドのプールに注ぎ、*砂糖*をプールに投入します。

次に、酵母培養液に隣接するブロックスペースに*水*入りバケツを注ぎます。1～2秒後に水が酵母培養液に変換されるのがわかります。

## 方法その2(続き)

重要なのは砂糖を加えたときではなく、水を入れたときに培養が広がるということです。

この方法はゲームの早い段階でも少し考えて設計すれば自動化できます(ヒント: [全方向ホッパー](../omnidirectional_hopper.md)と[流体ホッパー](../liquid_hopper.md)と[ディスペンサーアップブレード](../upgrades.md#dispenser)が非常に役立つ場合があります)。

