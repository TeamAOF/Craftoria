---
navigation:
  title: "ドローン"
  icon: "pneumaticcraft:drone[pneumaticcraft:air=120000]"
  parent: pneumaticcraft:tools.md
item_ids:
  - pneumaticcraft:drone
---

# ドローン

ドローンはあらゆる種類の自動化に使用できる強力なプログラム可能な飛行ロボットです。ドローンが何かを行う前にプログラミングが必要です。このためには[プログラマー](../programming/programmer.md)といくつかの[パズルピース](../programming/puzzle_pieces.md)も必要です。

プログラムされ、[加圧された](../base_concepts/pressure.md)ドローンを配置するとプログラムされたタスクを実行します。

## pneumaticcraft:drone (TODO)

<GameScene zoom={4}>
  <Entity id="pneumaticcraft:drone" y={-0.3} />
</GameScene>

<a name="charging"></a>
## 自動充填

ドローンは賢いです。空気が少なくなるとメインプログラムを停止し、[ディスペンサーアップグレード](../base_concepts/upgrades.md#dispenser)があり、圧力が1バール以上で<Color hex="#880">$(t:MOD設定の'max_drone_charging_station_search_range'を参照)80ブロック$(/t:MOD設定の'max_drone_charging_station_search_range'を参照)</Color>以内にある[充填ステーション](../machines/charging_station.md)を検索します。

見つかったら、*ドローン*はこの*充填ステーション*に移動し、ステーションが空気を供給できなくなるまで充填を続けます。その後、*ドローン*はメインプログラムを再開します。

## 自動充填(続き)

マルチプレイヤーサーバーではドローンが充填ステーションでのみ充填できるようにしたい場合があります。*充填ステーション*を[セキュリティステーション](../machines/security_station.md)で覆うことで、*充填ステーション*を非公開にすることができます。

これで*セキュリティステーション*でホワイトリストに登録されているプレイヤーが配置した*ドローン*のみが充填できるようになります。

*ドローン*の空気がなくなるとプロペラが停止しまっすぐに地面に落下します。注意: ドローンは落下ダメージを受ける可能性があります。破壊された*ドローン*はアイテムの形でドロップされます。

*ドローン*は*染料*で作成して染色できます。また、*ドローン*を*染料*で*右クリック*することでワールド内で染色することもできます。この色付けは単なる装飾ですが一目でドローンを区別するのに役立ちます。

## デバッグ

うーん、どうして*ドローン*はこのように動作するのでしょうか？まったく何もしないのはなぜでしょうか？[ディスペンサー](../base_concepts/upgrades.md#dispenser)と[エンティティトラッカー](../base_concepts/upgrades.md#entity_tracker)アップグレードがインストールされた[空気圧ヘルメット](../armor/pneumatic_helmet.md)を使用してプログラムをデバッグできます。 *ドローン*をターゲットにし*エンティティトラッカー*をアクティブにした状態で*$(k:pneumaticcraft.helmet.debugging.drone)$(/k:pneumaticcraft.helmet.debugging.drone)*キーを押します。次に、空気圧の防具のGUIで*ドローンデバッガー*ページを開くと現在のウィジェットとエラーを含むドローンのプログラムが表示されます。

## デバッグ(続き)

他にも注意すべき小さなトリックがいくつかあります:
- [GPSツール](./gps_tool.md)でドローンを右クリックするとドローンはGPSツールの保存されたブロック位置に移動します。ドローンの経路をテストするのに便利です。
- ドローンをハッキング(空気圧ヘルメットの[セキュリティアップグレード](../base_concepts/upgrades.md#security)を使用)すると、ドローンはプログラムを一時停止して自分のところにやって来ます。プログラムによってドローンが届きにくい場所に残された場合に便利です。もう一度ハッキングするとプログラムが再開されます。

ドローンのクラフト

<Recipe id="pneumaticcraft:drone" />

