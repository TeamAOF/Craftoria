---
navigation:
  title: "UVライトボックス"
  icon: "pneumaticcraft:uv_light_box"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:uv_light_box
---

# UVライトボックス

*UVライトボックス*は[PCB](../components/pcb.md)を特定の場所(PCBの上に置かれている[ブループリント](../components/pcb_blueprint.md)によって決まる)でUVライトにさらすことができる機械です。

さらすプロセスには最大10分かかります。機械に[スピードアップグレード](../base_concepts/upgrades.md#speed)を追加するとさらに短くなります。

10分が経過すると*PCB*が[エッチング酸](./etching_acid.md)で正常にエッチングされる可能性が100%になります。ただし、PCBを短時間露光させることもできます。その場合、PCBが正常にエッチングされる可能性は低くなります。

露光の進行は全体の進行状況が低いほど速くなり、終わりに近づくにつれて遅くなることに注意してください。

## 閾値の自動化

GUIのスライダーを使用して完了閾値を手動で調整できますがレッドストーン信号を使用して設定することもできます。レッドストーンモードを*信号の補間*に設定します。このモードでは閾値は信号レベルごとに25%+5%に固定(ただし、信号が0の場合は機械が無効になるため、実際には30%～100%になります)されます。

これは一度に多数のライトボックスの閾値を設定する場合に便利です。

UVライトボックスのクラフト

<Recipe id="pneumaticcraft:uv_light_box" />

