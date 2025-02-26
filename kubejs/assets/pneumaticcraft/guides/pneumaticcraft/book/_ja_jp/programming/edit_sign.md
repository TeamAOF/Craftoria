---
navigation:
  title: "看板編集ウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/edit_sign_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# 看板編集ウィジェット

これにより接続された[エリア](./area.md)内のすべての*看板*および/または[格言タイル](../machines/aphorism_tile.md)が接続された[テキスト](./text.md)ウィジェットで指定されたテキストに編集されます。

接続された各*テキスト*ウィジェットは1行を表します。複数の*テキスト*ウィジェットを接続すると複数行のメッセージを設定できます。

## 変数

テキストに*${<var_name>}*を含めることで[変数](./variables.md)の値を挿入することもできます。たとえば、*カウンター*変数が*x=1,y=2,z=3*に設定されている場合、

<Color hex="#272">カウンター: ${counter}</Color>

は*カウンター: 1, 2, 3*に展開されます。[スペシャル](./variables.md#special)および[グローバル変数](./variables.md#global)もここで使用できます。

*看板編集ウィジェット*

![](edit_sign_piece.png)

