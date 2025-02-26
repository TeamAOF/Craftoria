---
navigation:
  title: "タンク"
  icon: "pneumaticcraft:small_tank"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:small_tank
  - pneumaticcraft:medium_tank
  - pneumaticcraft:large_tank
  - pneumaticcraft:huge_tank
---

# タンク

流体貯蔵タンクは4つあり、想像力豊かに*小型流体タンク*、*中型流体タンク*、*大型流体タンク*、*巨大流体タンク*と名付けられています。[流体ホッパー](./liquid_hopper.md)も流体貯蔵に適していますが、これらのタンクはより高密度の貯蔵と便利な積み重ね機能を提供し、流体を自動的に転送しません(ただし、[ディスペンサーアップグレード](../base_concepts/upgrades.md#dispenser)が追加されている場合は流体を押し出すことができます)。

## 積み重ね

4種類のタンクはすべてを互いに垂直に積み重ねて、一種のマルチブロックにすることができます。これを行うにはタンクを[空気圧レンチ](../tools/pneumatic_wrench.md)で右クリックします。上半分を空気圧レンチで右クリックするとタンクを上のタンクに結合しようとし、下のタンクの場合はその逆になります。

タンクを積み重ねると、スペースがあれば<Color hex="#880">$(t:流体の密度が0未満の場合は、下ではなく上に移動します)上のタンク$(/t:流体の密度が0未満の場合は、下ではなく上に移動します)</Color>にある流体は自動的に下のタンクに流れます。

3つの積み重ねられた小型流体タンク

TODO: Unsupported flag 'border'
![](small_tanks.png)

これにはいくつかの制限があります:
- 2つのタンクを組み合わせるには両方に同じ流体(または流体なし)が入っているか、タンクの1つが空である必要があります
- 流体は上方向に移動しません。したがって、最良の結果を得るには流体をスタックの上部のタンクに送り込み、下部のタンクから排出する必要があります
- タンクのGUIには右クリックされたタンクの液体の量のみが表示されます。



<Recipe id="pneumaticcraft:small_tank" />

<Recipe id="pneumaticcraft:medium_tank" />



<Recipe id="pneumaticcraft:large_tank" />

<Recipe id="pneumaticcraft:huge_tank" />

