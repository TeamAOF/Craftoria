---
navigation:
  title: "空気圧発電機"
  icon: "pneumaticcraft:pneumatic_generator"
  parent: pneumaticcraft:machines.md
---

# 空気圧発電機

空気圧発電機は[圧縮空気](../pressure.md)から*IndustrialCraft 2のEU*を生成できます。これは、15バールの最小作動圧力で示されるティア2の機械です。デフォルトでは効率は40%ですが、これは<Color hex="#880">$(t:'I:pneumaticGeneratorEfficiency'を参照)コンフィグ$(/t:'I:pneumaticGeneratorEfficiency'を参照)</Color>で変更できます。

[スピードアップグレード](../upgrades.md#speed)がない場合、出力は32EU/tickです。1つのアップグレードを挿入すると128EU/tick、2つ挿入すると512EU/tickになります。

<ItemImage id="pneumaticcraft:pneumatic_generator" />

空気使用量(mL/tick)は

<Color hex="#272">出力率 / E * 400</Color>で表されます。

ここでの<Color hex="#272">E</Color>は効率(パーセント)です。たとえばデフォルトの効率が40%、出力率が32EU/tickの場合、空気使用量 = <Color hex="#272">32 / 40 * 400 = 320mL/tick</Color>となります。

効率に影響を与える重要な要素は発電機の[温度](../heat.md)です。発電機は*冷却*する必要があります。そうしないと温度が上昇するにつれて効率が低下し、最終的には空気がまったく生成されなくなります。

空気圧発電機のクラフト

<Recipe id="pneumaticcraft:pneumatic_generator" />

