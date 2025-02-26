---
navigation:
  title: "真空トラップ"
  icon: "pneumaticcraft:vacuum_trap"
  parent: pneumaticcraft:spawning.md
item_ids:
  - pneumaticcraft:vacuum_trap
---

# 真空トラップ

*真空トラップ*はMobを捕らえてそのエッセンスを[スポナーコア](./spawner_core.md)に吸収し、後で[加圧スポナー](./pressurized_spawner.md)で使用するための機械です。

*真空トラップ*を使用するには次の手順を実行する必要があります:


- 1. 真空トラップの圧力が-0.5バール以下であることを確認します。ここでは[ボリュームアップグレード](../base_concepts/upgrades.md#volume)が推奨されます。また、真空トラップを移動する場合は蓄積された真空を維持するためにツルハシで壊すのではなく必ずレンチを使用してください。
- 2. 捕獲したMobを受け入れるために、いっぱいでない[スポナーコア](./spawner_core.md)を挿入します。
- 3. *スニークして右クリック*するか、レッドストーン信号を適用して真空トラップのドアを開きます。

## 制限

真空トラップは以下を捕獲しません:
- プレイヤー
- ドローン
- ボスMob(ウィザー、エンダードラゴンなど)
- 飼いならされた動物
- バニラのスポナーによって生成されたMob

さらに、MobのエンティティID(例: *minecraft:zombie*)を*pneumaticcraft:vacuum_trap_blacklisted*エンティティタイプタグに)追加することでMobをブラックリストに登録できます。

## メモリーエッセンス

真空トラップのタンクに少なくとも100mBの[メモリーエッセンス](../base_concepts/memory_essence.md)が含まれている場合、Mobの吸収効率が大幅に向上します。設置された*スポナーコア*のエッセンスに1%貢献する代わりに、捕獲されたMobは2～4%貢献します。つまり、コアを満たすために100体のMobを捕獲する代わりに25～50体のMobを捕獲するだけで済みます。Mobを捕獲するたびに100mBのメモリーエッセンスが使用されます。

真空トラップのクラフト

<Recipe id="pneumaticcraft:vacuum_trap" />

