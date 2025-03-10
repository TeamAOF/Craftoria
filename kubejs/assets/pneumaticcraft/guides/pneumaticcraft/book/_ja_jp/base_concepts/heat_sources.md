---
navigation:
  title: "熱源"
  icon: "pneumaticcraft:vortex_tube"
  parent: pneumaticcraft:base_concepts.md
---

# 熱源

*静的熱源*は隣接する機械に熱を加えたり機械から熱を除去したりするブロックと流体です。熱が過剰に追加されたり除去されたりすると、他のブロックや流体に変化することがあります。熱の抽出/追加は問題のブロックの外部で追跡されるため、抽出された熱をリセットするためにブロックを破壊/交換することは実行可能な戦略ではないことに注意してください。

## バニラの熱源

以下のバニラブロックと流体は静的熱源として機能します: 
- 空気
- 氷/氷塊/青氷
- 雪
- 松明
- 火(消えます)
- マグマ(ネザーラックまで冷えます)
- 水(凍結または蒸発する場合があります)
- 溶岩(黒曜石まで冷えます)
- 焚き火(消えます)

## MODの熱源

MOD のいくつかのブロックは、異なる特性を持つ静的熱源としても機能します。これには以下が含まれます:
- IC2の蒸気と過熱蒸気
- IC2の冷却剤と高温冷却剤
- IC2とImmersive Engineeringのウランブロック
- Quarkのブレイズランタン
- Quarkの硫黄岩と永久凍土
- Natura Heat Sand
- すべてのMODの流体には熱特性があります(温度はMODによって定義されます)

## カスタム熱源の追加

(modpack作者向け)すべてのブロック熱特性はデータパックで定義されています。*data/<mod-id>/pneumaticcraft/block_heat_properties*にJSONファイルを追加することで独自の定義を追加したりデフォルトの定義を上書き/削除したりできます。

<ItemImage id="pneumaticcraft:vortex_tube" />

[ボルテックスチューブ](../machines/vortex_tube.md)は[圧力](./pressure.md)を熱と冷気に直接変換する*動的熱源*です。効率を上げるためにボルテックスチューブの未使用側に[ヒートシンク](../machines/heat_sink.md)を配置することを強くお勧めします。

<ItemImage id="pneumaticcraft:heat_frame" />

[ヒートフレーム](../semiblocks/heat_frame.md)は任意のインベントリ内のアイテムを加熱(または凍結)するために使用できるガジェットです。ヒートフレームは*静的熱源*から直接熱を吸収しませんが、その横に[ヒートパイプ](../machines/heat_pipe.md)を配置して熱を伝達することができます。

<ItemImage id="pneumaticcraft:heat_sink" />

[ヒートシンク](../machines/heat_sink.md)は取り付けられたブロックから熱(または冷気！)を効率的に大気中に放出するために使用できるブロックです。

<ItemImage id="pneumaticcraft:heat_pipe" />

[ヒートパイプ](../machines/heat_pipe.md)は隣接する空気または流体ブロックとの熱接続なしにブロック間で熱を伝達できる圧縮鉄の絶縁コアです。これは熱を伝達するために *圧縮鉄ブロック*を使用するよりもコンパクト(かつ安価)な代替手段です。また、*ヒートシンク*をヒートパイプに直接接続することもできます。

<ItemImage id="minecraft:furnace" />

バニラの*かまど*を動的熱源([ボルテックスチューブ](../machines/vortex_tube.md)や熱を生成する[高性能エアコンプレッサー](../compressors/advanced_air_compressor.md)などのブロック)に接続すると熱はかまどによって消費されて"燃料"となり、固体燃料を必要とせずに純粋に熱だけでかまどを稼働させることができます。これは便利で効率的です。

## かまど(続き)

このかまどの「燃料供給」は100℃で作動し始め、温度が高くなるにつれて作動速度が速くなります。かまどの周囲に複数の熱源を配置すると、加熱効果が高まります。

この加熱効果はバニラの*溶鉱炉*および*燻製器*でも機能します。

