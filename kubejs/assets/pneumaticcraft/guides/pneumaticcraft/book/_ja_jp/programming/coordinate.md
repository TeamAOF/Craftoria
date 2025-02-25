---
navigation:
  title: "座標ウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/coordinate_piece.png"
  parent: pneumaticcraft:widget_other.md
---

# 座標ウィジェット

*座標*は[座標演算](./coordinate_operator.md)および[条件: 座標](./condition_coordinate.md)ウィジェットのパラメーターとしてのみ使用されるウィジェットです。

このウィジェットは[エリア](./area.md)ウィジェットと比較できます。*エリア*ウィジェットでは領域を構成するために*2つ*座標を指定しますが、このウィジェットでは*1つ*のみを指定します。座標を指定する方法は2つあります:

**定数**
定数座標は、まさに... 定数です。[GPSツール](../gps_tool.md)を選択するか、X/Y/Z値をテキストフィールドに直接入力することで定数座標を選択できます。

**変数**
変数を選択すると、[変数](./variables.md)に格納されている値を座標として返すことができます。この場合、座標のみを指定できて変数を変更できないことに注意してください。

*座標ウィジェット*

![](coordinate_piece.png)

