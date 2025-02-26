---
navigation:
  title: "灯油ランプ"
  icon: "pneumaticcraft:kerosene_lamp"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:kerosene_lamp
---

# 灯油ランプ

*灯油ランプ*はご想像のとおり[灯油](../manufacturing/refinery.md)で動作する強力な光源です。これは*ThaumcraftのArcane Lamp)*のような、使い慣れている長距離光源に似ています。

*技術的にはランプはどの燃焼燃料でも動作しますが、このランプでは灯油が他のどの燃料よりも効率的です。LPGでさえもです。*

*灯油ランプ*のデフォルトの範囲は10ブロックです。ただし、これはGUIで最大30ブロックまで調整できます。範囲が広いほどランプの燃料消費量は2乗で増えることに注意してください。したがって、範囲を2倍にすると燃料消費量は4倍になります。

ただし、ランプは少量の燃料しか使用しません。1,000mBの灯油とデフォルトの範囲10ブロックを使用するとランプは実時間で約<Color hex="#880">$(t:ランプの効率はMODコンフィグで変更できます。「D:keroseneLampFuelEfficiency」を参照してください)40分$(/t:ランプの効率はMODコンフィグで変更できます。「D:keroseneLampFuelEfficiency」を参照してください)</Color>動作できます。

*灯油ランプ*はほとんどの<Color hex="#228">PneumaticCraft: Repressurized</Color>のブロックと同様に*レッドストーン*で制御できます。通常のオン/オフモードとは別に**信号の補間**モードもあります。これは(名前が示すように)信号強度に基づいてランプの範囲を補間します。

たとえばデフォルトの最大範囲が10ブロックであると仮定し、<Color hex="#f00">レッドストーン信号</Color>として8(15のうち)が適用されると、ランプの範囲は5になります。

灯油ランプのクラフト

<Recipe id="pneumaticcraft:kerosene_lamp" />

