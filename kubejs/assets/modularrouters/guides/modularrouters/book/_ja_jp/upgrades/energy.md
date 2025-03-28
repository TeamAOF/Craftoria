---
navigation:
  title: "エネルギーアップグレード"
  icon: "modularrouters:energy_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:energy_upgrade
---

# エネルギーアップグレード

このアップグレードによりルーターに内部エネルギーバッファが提供されます。アップグレードごとにバッファサイズが50,000FE増加し、転送速度が*ルーターティック*ごとに1,000FE増加(これらの数値はMOD設定で調整可能)します。

エネルギーアップグレードが役立つシナリオはいくつかあり、次のページで詳しく説明します。

## 1. エネルギーのルーティング

[エネルギー出力モジュール](../modules/energy_output.md)と[エネルギー分配モジュール](../modules/energy_distributor.md)はどちらもルーターのバッファから隣接ブロックまたは近くのブロックにエネルギーを積極的に押し出すことができます。

これらのモジュールを使用すると、制限されたワイヤレスエネルギー転送機能を備えたエネルギーセルを効果的に構築できます。

## 2. 電源モジュール

デフォルトではルーターモジュールの実行にはエネルギーはかかりません(攻撃モードの[アクティベーターモジュール](../modules/activator.md)を除く)。

ただし、エネルギー使用量は設定可能であり、プレイしているパック内の他のモジュールにエネルギーコストが適用される場合があります。すべてのモジュールでは該当する箇所のツールチップにエネルギー使用量の数値が表示されます。

## 3. アイテムの充電

ルーターのバッファ内のエネルギーを持つアイテムはオプションでルーターの内部バッファからアイテムにエネルギーを転送したり、その逆を行ったりすることができます。

エネルギーを持つアイテムがアイテムバッファ内にある場合、ルーターのGUIにはバッファとエネルギーバーの間に切り替え可能なボタンが表示され、エネルギーの転送方向を設定できます。

## 転送速度

ツールチップに記載されている転送速度は*ルーターティック*あたりのFEで表されており、FE/tと同じではないことに注意してください。ルーターのティック速度は[速度アップグレード](./speed.md)に依存します。速度アップグレードがない場合、ルーターティックは20サーバーティックごとになります。したがって、全体的な転送速度は予想よりも低くなる可能性があります。



<Recipe id="modularrouters:energy_upgrade" />

