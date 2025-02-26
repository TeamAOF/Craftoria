---
navigation:
  title: "外部プログラムウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/external_program_piece.png"
  parent: pneumaticcraft:widget_flow.md
---

# 外部プログラムウィジェット

このウィジェットは指定された[エリア](./area.md)内のインベントリを検索します。すべてのインベントリについて各スロットを調べます。[ドローン](../tools/drone.md)または[ネットワークAPI](../components/network_components.md#network_api)が見つかるとそのアイテムに保存されているプログラムを実行します。

プログラムが終了すると*ドローン*は次のスロットおよび/またはインベントリに移動します。

このウィジェットは[プログラマー](./programmer.md)もインベントリとしてカウントされるため、*ドローン*プログラムのデバッグに使用できます。*外部プログラム*ウィジェットを使用して、*プログラマー*の領域のみで*ドローン*をプログラムして配置します。

次に、*ドローン*または*ネットワークAPI*をプログラマーに配置し、プログラムを作成します。*プログラマー*で*⟶ (エクスポート)*ボタンを押すと配置された*ドローン*がすぐにプログラムを実行します。

*プログラムセプション*

![](external_program_piece.png)

