---
navigation:
  title: "レギュレーターオーグメント"
  icon: "modularrouters:regulator_augment"
  parent: modularrouters:augments.md
item_ids:
  - modularrouters:regulator_augment
---

# レギュレーターオーグメント

このオーグメントにより、インベントリまたはルーターのバッファに送ったり取り出したりできるアイテムの数を正確に制御できます。

モジュールにレギュレーターオーグメントがある場合、GUIに追加の数値テキストフィールドが表示され、制限を設定できます。この制限は特定のモジュールによって解釈が異なります:

送信モジュール[Mk1](../modules/sender_1.md) / [Mk2](../modules/sender_2.md) / [Mk3](../modules/sender_3.md)および[プレイヤーモジュール](../modules/player.md)(挿入モード)の場合、モジュールはインベントリにすでに存在するアイテムの数が設定された数より少ない場合にのみアイテムをインベントリに送信します。
- 引き込みモジュール[Mk1](../modules/puller_1.md) / [Mk2](../modules/puller_2.md)および[プレイヤーモジュール](../modules/player.md)(抽出モード)の場合、モジュールはインベントリにすでに存在するアイテムの数が設定された数より多い場合にのみアイテムをインベントリから引き出します。


- [ドロッパー](../modules/dropper.md)、[投げ出し](../modules/flinger.md)、[配置](../modules/placer.md)、および[虚空](../modules/void.md)モジュールの場合、モジュールはルーターのバッファに設定された数より多いアイテムがある場合にのみ実行されます。
- [破壊](../modules/breaker.md)および[吸引](../modules/vacuum.md)モジュールの場合、モジュールはルーターのバッファに設定された数より少ないアイテムがある場合にのみ実行されます。

流体モジュール[Mk1](../modules/fluid.md) / [Mk2](../modules/fluid_2.md)の場合、制限はアイテム数ではなくターゲッのタンク容量のパーセンテージまたはmB単位の絶対量(GUIで選択可能)にすることができます。流体を引き出す場合、モジュールはターゲット内の流体が設定された量よりも*多い*場合にのみ実行されます。流体を押し出す場合、モジュールは設定された量より流体が*少ない*場合にのみ実行されます。



<Recipe id="modularrouters:regulator_augment" />

