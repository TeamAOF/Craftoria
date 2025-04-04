---
navigation:
  title: "製油所"
  icon: "pneumaticcraft:refinery"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:refinery
  - pneumaticcraft:refinery_output
---

# 製油所

*製油所*は[熱](../base_concepts/heat.md)を使用して[原油](../base_concepts/oil.md)をさまざまな燃料に精製するマルチブロックの機械です。100℃で動作を開始します。適用される温度が高いほど精製が速くなります。生成できる燃料は軽いものから重いものの順に並べると、
- *LPG (液化石油ガス)*
- *ガソリン*
- *灯油*
- *ディーゼル*

*製油所*はマルチブロック構造です。*製油所コントローラー*を配置し、2～4個の*製油所出力装置*をコントローラーの上または横に積み重ねます。

マルチブロックのサイズが異なると収量が異なります。入力として10mBの原油を想定:

**2つの出力装置**
- *LPG (液化天然ガス)* (2mB)
- *ディーゼル* (4mB)
**3つの出力装置**
- *LPG (液化天然ガス)* (2mB)
- *灯油* (3mB)
- *ディーゼル* (2mB)

**4つの出力装置**
- *LPG (液化天然ガス)* (2mB)
- *ガソリン* (3mB)
- *灯油* (3mB)
- *ディーゼル* (2mB)

最も軽い燃料は常に上部の*製油所出力装置*に配置され、最も重い燃料は下部に配置されます。既存の積み重ねにさらに*製油所出力装置*を追加すると、マルチブロックはシステムの実行を維持するために、既存の出力流体を適切なブロックに自動的に再配置するように最善を尽くします。

生成された流体はすべて[流体コンプレッサー](../compressors/liquid_compressor.md)の燃料として使用(軽い燃料の方が品質が良い)できます。

ただし、他に非常に重要な用途が2つあります。
- *LPG*は溶融[プラスチック](../components/plastic.md)の製造に使用されます。
- *ディーゼル*は[スピードアップグレード](../base_concepts/upgrades.md#speed)用の[潤滑油](../components/lubricant.md)の製造に使用されます。

これらの両方のプロセスには[熱空気圧処理プラント](./thermopneumatic_processing_plant.md)が使用されます。

## コンパレーターのサポート

*製油所*は*コンパレーター*と連携して動作します。接続されたコンパレーターは*製油所*に作業がある場合に信号強度15を出力し、作業がない場合には0を出力します。精製する*原油*が*あり*、精製された製品用の出力タンクにスペースがある場合に作動します。

これを使用して、たとえば空気を節約するために[ボルテックスチューブ](../machines/vortex_tube.md)への空気供給の切り替えを自動化できます。

## セットアップのヒント

*製油所*は多くの面が空気にさらされているマルチブロックであるため、断熱が不十分だと[熱](../base_concepts/heat.md)が急速に失われる可能性があります。したがって、効率を最大化するためにマルチブロックの未使用の面をすべて覆うことを強くお勧めします。*ハーフブロック*や*トラップドア*などの半固体ブロックを含む熱を伝導しないブロックであればどれでも使用できますが、[断熱材](../machines/thermal_lagging.md)が特に推奨されます。

[ボルテックスチューブ](../machines/vortex_tube.md)を使用して*製油所*を加熱したり、熱い流体(溶岩等)やブロック(マグマブロック等)を任意の*製油所*ブロックの隣に配置したりできます。このような流体やブロックは使い果たされる(熱が放出される)ため、これらのリソースの生成と配置を自動化する方法を見つけることをお勧めします。

## CraftTweaker

*製油所*は[CraftTweaker](https://minecraft.curseforge.com/projects/crafttweaker)をサポートしています。レシピを追加したり削除したりできます。詳細については、以下のリンクを参照してください。

[CraftTweaker Docs](https://docs.blamejared.com/1.16/en/mods/PneumaticCraft-Repressurized/Refinery)
製油所のクラフト

<Recipe id="pneumaticcraft:refinery" />

<Recipe id="pneumaticcraft:refinery_output" />

