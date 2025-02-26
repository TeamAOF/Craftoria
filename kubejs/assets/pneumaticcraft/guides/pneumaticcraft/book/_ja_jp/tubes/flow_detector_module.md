---
navigation:
  title: "フロー検出モジュール"
  icon: "pneumaticcraft:flow_detector_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:flow_detector_module
---

# フロー検出モジュール

フロー検出チューブモジュールはチューブを通る*エアフロー*を測定する[インライン](./tube_modules.md#inline)モジュールです。この結果、次の式を使用して<Color hex="#f00">レッドストーン信号</Color>を発します:

 <Color hex="#272">0.2 * flow (mL/tick)</Color>

たとえば20mL/tickの空気が流れる場合、信号レベルは20*0.2=4になります。

*フロー*は[圧力](../base_concepts/pressure.md)とは異なる物理量であることに注意してください。フローとは1ティックあたりにチューブを通過する空気の量です。したがって、(たとえば)稼働していない[エレベーター](../machines/elevators.md)がある場合、フローは0になりますが稼働しているときは空気を消費するため、フローは0以外になります。したがって、このモジュールを使用して機械が空気を使用しているかどうかを検出できます。

フロー検出モジュールは[モジュール拡張カード](./module_expansion_card.md)を受け入れません。

フロー検出モジュールのクラフト

<Recipe id="pneumaticcraft:flow_detector_module" />

