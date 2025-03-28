---
navigation:
  title: "検査フィルター"
  icon: "modularrouters:inspection_filter"
  parent: modularrouters:filters.md
item_ids:
  - modularrouters:inspection_filter
---

# 検査フィルター

このフィルターを使用するとアイテムのさまざまな整数プロパティによるアイテムのマッチングが可能になります。現在サポートされている検査は次のとおりです: 
- 流体コンテナアイテム(バケツ、タンクなど)の場合、流体レベル(パーセンテージ)。
- エネルギーコンテナアイテム(バッテリー、電動工具など)の場合、エネルギーレベル(パーセンテージ)。


- アイテムのエンチャントの最大エンチャントレベル(Mobファームなどからエンチャントされたアイテムを除外するために使用できます)。
- アイテム(ツール、武器)の耐久性(最大耐久性のパーセンテージ)。
- 食用アイテムの場合、食料値は回復したハーフシャンクの数(たとえばステーキの値は8)。

プロパティをまったく持たないアイテムが検査された場合、返される値は常に-1になります。たとえば、*丸石*の耐久値は-1です。耐久値が1%未満のツールは0を返すため、これは0の戻り値とは異なります。

このフィルターは破損したアイテムや放電したアイテムを自動的に取り出して修理や再充電などを行うのに役立ちます。



<Recipe id="modularrouters:inspection_filter" />

