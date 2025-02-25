---
navigation:
  title: "リネームウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/rename_piece.png"
  parent: pneumaticcraft:widget_other.md
---

# リネームウィジェット

このウィジェットは*名札*を使用して*右クリック*したかのように[ドローン](../drone.md)の名前を変更します。名前は添付された[テキスト](./text.md)ウィジェットに入力されます。

## 変数

テキストに*${<var_name>}*を含めることで[変数](./variables.md)の値を挿入することもできます。たとえば*counter*変数が*x=1,y=2,z=3*に設定されている場合

<Color hex="#272">カウンター: ${counter}</Color>

は*カウンター: 1, 2, 3*に展開されます。[スペシャル](./variables.md#special)および[グローバル変数](./variables.md#global)もここで使用できます。

*あなたは誰でしたっけ？*

![](rename_piece.png)

