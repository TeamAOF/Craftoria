---
navigation:
  title: "スタックオーグメント"
  icon: "modularrouters:stack_augment"
  parent: modularrouters:augments.md
item_ids:
  - modularrouters:stack_augment
---

# スタックオーグメント

このモジュールは*アイテム*を処理するモジュール(*ブロック*、*流体*、*エネルギー*を除く)に追加できます。

モジュールにスタックオーグメントを追加すると、1ティックあたりに処理できるアイテムの数が増えます。スタックオーグメントごとにアイテムの数が2倍になり、最大でアイテムの自然なスタックサイズ(ほとんどのアイテムでは64)になります。

[ルーター](../router/modular_router.md)に[スタックアップグレード](../upgrades/stack.md)もインストールされている場合、モジュールのスタックオーグメントによってそれが上書きされます。たとえば、ルーターに6つのスタックアップグレードがあり、モジュールに2つのスタックオーグメントがある場合、モジュールは1ティックあたり64ではなく4つのアイテムを処理します。



<Recipe id="modularrouters:stack_augment" />

