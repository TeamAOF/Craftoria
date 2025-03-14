---
navigation:
  title: "条件: アイテムフィルターウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/condition_item.png"
  parent: pneumaticcraft:widget_cond.md
---

# 条件: アイテムフィルターウィジェット

これは[条件](./conditions.md)ウィジェットです。

*条件: アイテムフィルター*ウィジェットを使用すると[アイテムフィルター](./item_filter.md)を比較できます。これはアイテムフィルターを[変数](./variables.md)とともに使用している場合に役立ちます。

ウィジェットは一番上の行の右側に接続された単一の[アイテムフィルター](./item_filter.md)ウィジェット内のアイテムを調べ、そのアイテムが2行目の*アイテムフィルター*で指定されたフィルターと一致するかどうかを確認します。

通常どおり右側をホワイトリスト(アイテムがこのフィルターに一致することを意味します)に使用し、左側をブラックリスト(このアイテムがこのフィルターに*一致しない*ことを意味します)に使用します。一致する場合、条件は*true*と評価されます。それ以外の場合、条件は*false*と評価されます。

チェックする項目を複数追加できます。右側の2行目の[アイテムフィルター](./item_filter.md)を複数接続すると*全*項目がフィルターに一致する場合にのみ条件が*true*と評価されます。左側に配置された[アイテムフィルター](./item_filter.md)がフィルターに一致*しない*場合のみ条件が*true*と評価されます。

*条件: アイテムフィルターウィジェット*

![](condition_item.png)

