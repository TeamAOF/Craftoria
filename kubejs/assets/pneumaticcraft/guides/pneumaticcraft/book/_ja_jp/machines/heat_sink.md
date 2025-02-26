---
navigation:
  title: "ヒートシンク"
  icon: "pneumaticcraft:heat_sink"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:heat_sink
---

# ヒートシンク

*ヒートシンク*は[熱](../base_concepts/heat.md)を除去するために使用されるブロックです。

注意してください。*ヒートシンク*が60℃より高温または-60℃より低温の場合触れると怪我をします。

*ヒートシンク*は直接接続されているブロックの熱のみを放散します。多数の*ヒートシンク*を接続するには[ヒートパイプ](./heat_pipe.md)を使用して表面を増やします。

*複数のヒートシンク付き**[高性能流体コンプレッサー](../compressors/advanced_liquid_compressor.md)* 

TODO: Unsupported flag 'border'
![](heat_sinks.png)

## アクティブ冷却

*ヒートシンク*を[エアグレートモジュール](../tubes/air_grate_module.md#active_cooling)の範囲内に配置するとその効果を高めることができます。モジュールの範囲は[圧力チューブ](../tubes/pressure_tubes.md)に接続すると表示されます。複数のエアグレートモジュールを使用することで冷却効果を積み重ねることができます。

ヒートシンクのクラフト

<Recipe id="pneumaticcraft:heat_sink" />

