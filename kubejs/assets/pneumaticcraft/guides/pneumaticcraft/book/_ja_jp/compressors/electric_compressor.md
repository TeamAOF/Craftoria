---
navigation:
  title: "電動コンプレッサー"
  icon: "pneumaticcraft:electric_compressor"
  parent: pneumaticcraft:compressors.md
---

# 電動コンプレッサー

*電動コンプレッサー*は*IndustrialCraft 2のEU*から圧縮空気を生成できます。デフォルトでは効率は40%ですが、これは<Color hex="#880">設定$(t:「I:electricCompressorEfficiency」を参照)$(/t:「I:electricCompressorEfficiency」を参照)</Color>で変更できます。

これはIC2 ティア1の機械のように動作するため、32EU/tを超えると爆発します。ただし、通常のIC2機械と同様に、IC2の*Transformer Upgrades*を追加してより高い電圧を許可できます。

mL/t単位のエネルギー出力は次のようになります。

 <Color hex="#272">入力レート / E * 400</Color>

ここでの<Color hex="#272">E</Color>は効率です。

たとえば、デフォルトの効率が40%で入力が32EU/tの場合、圧縮空気の生成量は<Color hex="#272">32 / 40 * 400 = 320mL/tになります。</Color>

効率に影響を与えるもう1つの要因は機械の[熱](../base_concepts/heat.md)です。温度が上昇すると効率が低下し、空気がまったく生成されなくなるためマシンを冷却する必要があります。

*電動コンプレッサー*のクラフト

<Recipe id="pneumaticcraft:electric_compressor" />

