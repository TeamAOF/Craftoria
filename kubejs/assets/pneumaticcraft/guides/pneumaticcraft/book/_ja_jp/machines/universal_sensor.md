---
navigation:
  title: "ユニバーサルセンサー"
  icon: "pneumaticcraft:universal_sensor"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:universal_sensor
---

# ユニバーサルセンサー

*ユニバーサルセンサー*はその名前が示すように、多くのアプリケーションで使用できるセンサーです。これはワールド内の状態を測定し、それらの状態に基づいて<Color hex="#f00">レッドストーン信号</Color>を出力します。

ユニバーサルであることは無料ではありません。センサーは<Color hex="#880">$(t:定常的なレッドストーン出力は使用するのに無料です)ほとんどすべて$(/t:定常的なレッドストーン出力は使用するのに無料です)</Color>のケースで実行するために[空気](../base_concepts/pressure.md)(1 mL/tick)を必要とし、センサーを実行するには特定の[アップグレード](../base_concepts/upgrades.md)が必要です。

<ItemImage id="pneumaticcraft:universal_sensor" />

現在、センサーが測定できる条件は15種類以上あり、特定の座標にブロックがあるかどうかや、Twitcherのストリーミングがあるかどうかを確認できます。*ユニバーサルセンサー*のGUIを開いて利用可能な機能と説明を確認してください。

## アップグレード

対応するセンサーのカテゴリを選択できるようにするには[エンティティトラッカー](../base_concepts/upgrades.md#entity_tracker)、[ディスペンサー](../base_concepts/upgrades.md#dispenser)、または[ブロックトラッカー](../base_concepts/upgrades.md#block_tracker)と[GPSツール](../tools/gps_tool.md)を挿入する必要があります。たとえば、範囲内のエンティティの数をカウントするには*エンティティトラッカーアップグレード*をインストールする必要があります。

## 例: エンティティ数のカウント

動物がたくさんいる囲いがあり、十分な数だけ殺したいとします。

[エンティティトラッカーアップグレード](../base_concepts/upgrades.md#entity_tracker)と、囲いのサイズをカバーするのに十分な[レンジアップグレード](../base_concepts/upgrades.md#range)を追加します。

次に、GUIで*エンティティ*ボタンを選択し、次に*範囲内*を選択し、最後に動物の種類(例: 'cow')に一致する[エンティティフィルター](../base_concepts/entity_filter.md)を入力します。

ユニバーサルセンサーのクラフト

<Recipe id="pneumaticcraft:universal_sensor" />

