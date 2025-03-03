---
navigation:
  title: "ソーラーコンプレッサー"
  icon: "pneumaticcraft:solar_compressor"
  parent: pneumaticcraft:compressors.md
item_ids:
  - pneumaticcraft:solar_compressor
---

# ソーラーコンプレッサー

*ソーラーコンプレッサー*は*太陽光*から[圧縮空気](../base_concepts/pressure.md)と[熱](../base_concepts/heat.md)を生成します。機能するには直射日光が当たる場所が必要です。つまり屋内、夜間、または嵐のときには機能しません。

*ソーラーコンプレッサー*のクラフト

<Recipe id="pneumaticcraft:solar_compressor" />

*ソーラーコンプレッサー*は圧縮空気を生成しますが、生成される圧縮空気の量に比例して熱も生成します。*ソーラーコンプレッサー*の能力を最大限に引き出すには適切な熱管理が必要です。熱が少なすぎるとコンプレッサーは圧縮空気をほとんど生成できず、熱が多すぎるとコンプレッサーが過熱して故障し、[太陽電池](../components/solar_cell.md)を使用した手動修理が必要になります。

[ヒートシンク](../machines/heat_sink.md)、[ヒートパイプ](../machines/heat_pipe.md)、および[エアグレートモジュール](../tubes/air_grate_module.md)は*ソーラーコンプレッサー*によって生成された熱を管理および除去するための最適なツールです。[ボルテックスチューブ](../machines/vortex_tube.md)も追加の熱を生成して最大効率を達成するために使用できるため、熱管理に役立ちます。適切な設定により[最大速度](../base_concepts/upgrades.md#speed)の*ソーラーコンプレッサー*でも最大効率で熱平衡に達することができます。

コンプレッサーには圧縮空気を生成できないときに作動する熱パッドが組み込まれており、非作動時に熱が増減するのを防ぎます。

コンプレッサーは*350℃*で最大効率に達し、*425℃*で過熱します。

