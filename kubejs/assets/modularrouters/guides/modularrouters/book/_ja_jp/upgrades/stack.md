---
navigation:
  title: "スタックアップグレード"
  icon: "modularrouters:stack_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:stack_upgrade
---

# スタックアップグレード

ルーター内のモジュールは一度に1つの項目に対して動作します。たとえば、[送信モジュール](../sender_1.md)はバッファ内のアイテムの数に関係なく、ルーターのティックごとにルーターのバッファから1つのアイテムを送信します。

ルーターにスタックアップグレードを追加することで、この数を増やすことができます。スタックアップグレードごとに各モジュールで処理できるアイテムの数が2倍になり、最大64個、またはアイテムのネイティブスタックサイズ(例: エンダーパールの場合は16)になります。したがって、1つのルーターにインストールできる有効なスタックアップグレードの最大数は6個になります。



<Recipe id="modularrouters:stack_upgrade" />

