---
navigation:
  title: "セーフティモジュール"
  icon: "pneumaticcraft:safety_tube_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:safety_tube_module
---

# セーフティモジュール

このチューブモジュールはチューブ内の[圧力](../pressure.md)を特定の値に制限して*爆発*を防止するために使用されます。過剰な圧力は大気中に拡散され*エネルギー損失*を意味します。したがって、このモジュールはレッドストーン信号を送信してコンプレッサーをオフにできる[圧力計モジュール](./pressure_gauge_module.md)と組み合わせて使用するのが最適です。

*セーフティモジュール*のデフォルトの閾値レベルはチューブの危険レベルより0.1バール低い値です:
- 基本的な*圧力チューブ*の場合は4.9バール、
- 高機能圧力チューブの場合は19.9バールです。

これは1.12.2以降に変更されており、閾値を設定するにはレッドストーン信号が必要になったことに注意してください。

<ItemImage id="pneumaticcraft:module_expansion_card" />

[モジュール拡張カード](./module_expansion_card.md)をセーフティモジュールに適用するとモジュールはGUI(右クリック)を取得し閾値レベルをより細かく制御できるようになります。GUIで正確な閾値を設定するか、**詳細設定**チェックボックスを使用して信号に基づいて補間された閾値レベルを設定できます。これは[圧力ゲージのGUI](./pressure_gauge_module.md#img)と非常によく似ていますが逆の働きをします。

セーフティモジュールのクラフト

<Recipe id="pneumaticcraft:safety_tube_module" />

