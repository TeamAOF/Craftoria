---
navigation:
  title: "アイテム取得ウィジェット"
  icon: "pneumaticcraft:textures/progwidgets/item_pick_piece.png"
  parent: pneumaticcraft:widget_interact.md
---

# アイテム取得ウィジェット

[ドローン](../tools/drone.md)はワールド内のアイテムエンティティを取得してインベントリに入れます。このウィジェットに接続されている[エリア](./area.md)ウィジェットのエリアタイプは*ボックス*である必要があることに注意してください。これはサポートされている唯一の形状です。ただし、複数のエリアのホワイトリスト/ブラックリストを使用してより複雑な形状を作成することもできます。

[アイテムフィルター](./item_filter.md)ウィジェットを追加して拾えるアイテムを制限(ブラックリストフィルターは*左*に配置されていることに注意)できます。

このウィジェットは地面に落ちているアイテム(アイテムフィルターを通過するもの)がドローンのインベントリに収まらない場合、または拾えるアイテムが残っていない場合に実行されます。

*私のもの。私のもの。私のもの。*

![](item_pick_piece.png)

