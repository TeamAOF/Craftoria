---
navigation:
  title: "プラスチック"
  icon: "pneumaticcraft:plastic_bucket"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:plastic_brick_red
  - pneumaticcraft:smooth_plastic_brick_red
  - pneumaticcraft:plastic
---

# プラスチック

*プラスチック*は<Color hex="#228">PneumaticCraft: Repressurized</Color>の重要な製造コンポーネントです。

*溶融プラスチック*は[LPG](../refinery.md)と*石炭*、または[バイオディーゼル](../biodiesel.md)と*木炭*から[熱空気圧処理プラント](../thermopneumatic_processing_plant.md)で製造されます。

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/plastic_from_lpg"}
```

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/plastic_from_biodiesel"}
```

## プラスチックシート

<ItemImage id="pneumaticcraft:plastic" />

*溶融プラスチック*はワールドに注ぐだけで凝固します。約0.5秒以内に*プラスチックシート*に変わります。これは[流体ホッパー](../liquid_hopper.md)と[ディスペンサーアップグレード](../upgrades.md#dispenser)および[全方向ホッパー](../omnidirectional_hopper.md)を使用すると非常に簡単に自動化できます。

## プラスチックシート

<ItemImage id="pneumaticcraft:plastic" />

*プラスチックシート*は[ヒートフレーム](../heat_frame.md)が取り付けられたインベントリに*溶融プラスチック*入りバケツまたは[タンク](../tanks.md)を配置し、ヒートフレームを理想的には-80℃以下に冷却することで生成されます(冷たいほど良い)。*溶融プラスチック*はバケツまたはタンクから消費され、消費された溶融プラスチック1,000mBごとに2枚目の*プラスチックシート*を獲得するチャンスがあります。

## 収穫量の向上

*プラスチックシート*を固める別の方法としては、[ヒートフレーム](../heat_frame.md)が取り付けられたインベントリに*溶融プラスチック*入りバケツまたは[タンク](../tanks.md)を配置し、ヒートフレームを理想的には-80℃以下に冷却します(冷たいほど良い)。*溶融プラスチック*はバケツまたはタンクから消費され、消費された溶融プラスチック1,000mBごとに2枚目の*プラスチックシート*を獲得するチャンスがあります。

## タンクに関するメモ

<Color hex="#228">PneumaticCraft: Repressurized</Color>の流体タンクにはインベントリスロットがあり、*ヒートフレーム*を配置できますが、単にヒートフレームを溶融プラスチックで満たされたタンクに接続するだけでは機能しません。流体タンクはヒートフレームが接続された状態で、インベントリ(チェストなど)内のアイテム形式になっている必要があります。

## プラスチック製レンガ™

<ItemImage id="pneumaticcraft:plastic_brick_red" />

これらのレンガは*プラスチックシート*と任意の染料で形成されており、建築に適しています。

裸足で歩かないでください。非常に痛いです！

*他の主要ブランドの建築用レンガと互換性があります。*

## 滑らかなプラスチック製レンガ™

<ItemImage id="pneumaticcraft:smooth_plastic_brick_red" />

*プラスチック製レンガ*の滑らかなバージョンも建築に適しています。

これらのレンガは歩行速度が向上するため、優れた床材になるという利点もあります！

他の色のレシピは推測できます

<Recipe id="pneumaticcraft:plastic_brick_red" />

<Recipe id="pneumaticcraft:smooth_plastic_brick_red" />

レンガを溶かしてプラスチックシートに戻すことができます

<Recipe id="pneumaticcraft:plastic_sheet_from_brick" />

<Recipe id="pneumaticcraft:plastic_sheet_from_smooth_brick" />

