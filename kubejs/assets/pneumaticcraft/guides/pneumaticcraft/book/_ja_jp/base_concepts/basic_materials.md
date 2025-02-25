---
navigation:
  title: "基本材料"
  icon: "pneumaticcraft:ingot_iron_compressed"
  parent: pneumaticcraft:base_concepts.md
item_ids:
  - pneumaticcraft:compressed_iron_block
---

# 基本材料

<Color hex="#228">PneumaticCraft: Repressurized</Color>は地面に余分な鉱石を生成しません。開始するには*鉄インゴット*だけが必要です。これはmod全体の多くのレシピで使用される*圧縮鉄インゴット*に変換されます。

これを行うには*鉄インゴット* を地面に投げて近くで爆発を引き起こします。*TNT* でもうまくいきますが他の爆発でもかまいません。

*      一歩下がる*

![](compressed_iron.png)

<a name="compressed_iron_ingot"></a>
<ItemImage id="pneumaticcraft:ingot_iron_compressed" />

警告: 爆発の副作用としてインゴットの約20%が失われます。これを回避するには[圧力室](../pressure_chamber.md)で*圧縮鉄インゴット*を作成することもできます。ただし、*圧力室*自体を作成するには*圧縮鉄インゴット*がいくつか必要なので、初期に多少の損失は避けられません。

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/compressed_iron_ingot"}
```

<a name="compressed_iron_block"></a>
*圧縮鉄ブロック*は優れた[熱伝導体](./heat.md)であり、熱を発生する機械に[ヒートシンク](../heat_sink.md)を取り付けるための面を増やすために使用できます。ただし、[ヒートパイプ](../heat_pipe.md)も参照してください。

<Recipe id="pneumaticcraft:compressed_iron_block_from_ingot" />

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/compressed_iron_block"}
```

