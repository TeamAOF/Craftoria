---
navigation:
  title: "真空ポンプ"
  icon: "pneumaticcraft:vacuum_pump"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:vacuum_pump
---

# 真空ポンプ

*真空ポンプ*は真空を作成するために使用される機械です。これを行うために、機械は[圧縮空気](../pressure.md)を消費します。

正圧は<Color hex="#0c0">'+'側</Color>に適用する必要があります。最小動作圧力に達すると*真空ポンプ*が吸引を開始し、<Color hex="#c00">'-'側</Color>の圧力が最低-1.0バールまで低下して真空になります。



![](vacuum_pump.png)

## アプリケーション

負圧(真空)には次のような用途があります:
- エンチャント解除: *エンチャントされたアイテム*または1つ以上エンチャントが設定された*エンチャントの本*とバニラの*本*を[圧力室](../pressure_chamber.md)に配置し、室内に十分な負圧をかけます。ランダムなエンチャントがアイテムから本に転送されます。
- 負圧が与えられた場合、[エアグレートモジュール](../air_grate_module.md)はエンティティを自身に引き寄せます。

## アプリケーション(続き)


- [真空トラップ](../vacuum_trap.md)と[スポナー抽出装置](../spawner_extractor.md)は[加圧スポナー](../pressurized_spawner.md)の作成と使用に必要なデバイスであり、動作には負圧が必要です。

真空ポンプのクラフト

<Recipe id="pneumaticcraft:vacuum_pump" />

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","header":"吸引のエンチャント解除","recipe":"pneumaticcraft:pressure_chamber/pressure_chamber_disenchanting"}
```

