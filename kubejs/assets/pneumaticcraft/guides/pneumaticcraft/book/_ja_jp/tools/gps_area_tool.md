---
navigation:
  title: "GPSエリアツール"
  icon: "pneumaticcraft:gps_area_tool"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:gps_area_tool
---

# GPSエリアツール

*GPSエリアツール*は[GPSツール](./gps_tool.md)の高度なバージョンでワールドに*2つ*の座標を保存できます。ブロックを*右クリック*すると最初の座標(<Color hex="#f00">P1</Color>)が変更され、*左クリック*すると2番目の座標(<Color hex="#0f0">P2</Color>)が変更されます。

スニーク中にマウスホイールをスクロールすると座標をすばやく調整できます。変更される座標は最後にクリックした座標になります。

スニークしながら空中で右クリックまたは左クリックすると「アクティブ」座標が記録されますが保存されません。これはマウスホイールをスクロールして調整された座標です。

空中で*右*または*左*クリックすると正確なブロック座標を入力するためのGUIが開きます。必要に応じて<Color hex="#f00">P1</Color>ボタンまたは<Color hex="#0f0">P2</Color>ボタンをクリックします。

GUIではツールの*エリアタイプ*を変更してさまざまな構成で領域をプレビューすることもできます。

*GPSエリアツール*は基本的な[GPSツール](./gps_tool.md#variables)と同様に[グローバル変数](../variables.md#global)をサポートしていますが、もちろん*2つの*変数を使用できます。

[プログラマー](../programmer.md)では*GPSエリアツール*でプログラミング領域の背景を*左クリック*して新しい[エリア](../area.md)のパズルピースを作成するか、既存[エリア](../area.md)のパズルピースを*左クリック*してこのツールの設定で更新します。

GPSエリアツールのクラフト

<Recipe id="pneumaticcraft:gps_area_tool" />

