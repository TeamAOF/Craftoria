---
navigation:
  title: "圧力ゲージモジュール"
  icon: "pneumaticcraft:pressure_gauge_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:pressure_gauge_module
---

# 圧力ゲージモジュール

このチューブモジュールは接続されているチューブ内の現在の[圧力](../pressure.md)を表示します。また強度が次の値に等しい(方向性のある)<Color hex="#f00">レッドストーン信号</Color>も出力します:

<Color hex="#272"> 強度 = 2 x 圧力</Color>

たとえば、圧力が3.5バールの場合、レッドストーン信号のレベルは7になります。

<ItemImage id="pneumaticcraft:module_expansion_card" />

[モジュール拡張カード](./module_expansion_card.md)を圧力ゲージモジュールに適用するとGUI(右クリック)がロック解除され、<Color hex="#f00">レッドストーン信号</Color>の送信をより細かく制御できるようになります。デフォルトでは閾値レベルを指定できます。信号はそのレベル以下ではオフになり、そのレベル以上では完全にオン(またはその逆)になります。GUIで**詳細設定**切替を選択するとさらに詳細な制御が可能(上記を参照)になります。

<a name="img"></a>
*<10バール = レッドストーン信号0、 >20バール = レッドストーン信号15, 10-20バール = 補完 (例 12バール = レッドストーン信号3)*

![](pressure_gauge_gui.png)

圧力ゲージモジュールのクラフト

<Recipe id="pneumaticcraft:pressure_gauge_module" />

