---
navigation:
  title: "物流モジュール"
  icon: "pneumaticcraft:logistics_module"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:logistics_module
---

# 物流モジュール

この強力なモジュールはインベントリを[物流システム](../logistics/overview.md)に接続するために使用され、圧力チューブを介して制御されたアイテムと流体の転送を効果的に許可します。

モジュールが指すインベントリまたは流体タンクには[物流フレーム](../logistics/frames.md)が取り付けられている必要があります。

物流モジュールは[モジュール拡張カード](./module_expansion_card.md)を受け入れません。

チェストを[パッシブプロバイダー](../logistics/frames.md#passive_provider)および[リクエスター](../logistics/frames.md#requester)フレームに接続する2つの物流モジュール。

TODO: Unsupported flag 'border'
![](logistics_module.png)

物流モジュールのネットワークは[圧力チューブ](./pressure_tubes.md)によって相互に接続されたすべてのモジュールによって定義されます。空気を使用する機械はネットワークの一部を形成しないことに注意してください。

モジュールのGUIまたは任意の*染料*で右クリックしてチャンネルを選択できます。同じ色の物流モジュールのみが相互に通信するため、各ネットワークに16個の*チャンネル*が実質的に提供されます。

物流モジュールには[圧力](../base_concepts/pressure.md)が必要です。モジュールを動作させるには3バールが必要です。使用される空気は、距離、輸送量、定数の積です。つまり、アイテムを満載して輸送するにはより多くの空気が必要であり、長距離輸送にもより多くの空気が必要です。空気はそのモジュールに向かって流れているため、*受信側*の物流モジュールで使用されます。

条件を示すためにインジケーターライトが取り付けられています:


- <Color hex="#f00">赤</Color>: 圧力が不十分です。少なくとも3バールを適用してください。
- <Color hex="#f80">オレンジ</Color>: 3バール以上ですが、アイテム/流体をこの距離に輸送するには圧力が不十分です。
- <Color hex="#0f0">緑</Color>: 圧力が十分でスタンバイ状態です。
- <Color hex="#00f">青 (パルス)</Color>: アイテム/流体を輸送中です。

物流モジュールのクラフト

<Recipe id="pneumaticcraft:logistics_module" />

