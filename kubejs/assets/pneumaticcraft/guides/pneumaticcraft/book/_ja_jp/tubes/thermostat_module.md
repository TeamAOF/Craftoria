---
navigation:
  title: "サーモスタットモジュール"
  icon: "pneumaticcraft:thermostat_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:thermostat_module
---

# サーモスタットモジュール

このチューブモジュールは向き合っているブロックの温度を測定し、設定された閾値よりも温度が高い場合に設定されたチャネルでレッドストーン信号を提供(信号を発するには出力モードで[レッドストーンモジュール](./redstone_module.md)を使用)します。

<ItemImage id="pneumaticcraft:module_expansion_card" />

サーモスタットモジュールに [モジュール拡張カード](./module_expansion_card.md)を適用すると高度なGUIがロック解除され、<Color hex="#f00">レッドストーン信号</Color>の送信をより細かく制御できるようになります。デフォルトでは閾値レベルを指定できます。信号はそのレベル以下ではオフになり、そのレベル以上では完全にオン(またはその逆)になります。GUIで**高度な設定**の切替を選択するとさらに詳細な制御が可能になります。(上記を参照)

<a name="img"></a>
*<0℃ = レッドストーン信号0、 >1,000℃ = レッドストーン信号15、 0-1,000℃ = 補完 (例 200℃ = レッドストーン信号3)*

![](thermostat_gui.png)

サーモスタットモジュールのクラフト

<Recipe id="pneumaticcraft:thermostat_module" />

