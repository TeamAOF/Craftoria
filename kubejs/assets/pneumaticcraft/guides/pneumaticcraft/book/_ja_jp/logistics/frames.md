---
navigation:
  title: "物流フレーム"
  icon: "pneumaticcraft:logistics_frame_passive_provider"
  parent: pneumaticcraft:logistics.md
item_ids:
  - pneumaticcraft:logistics_frame_active_provider
  - pneumaticcraft:logistics_frame_passive_provider
  - pneumaticcraft:logistics_frame_storage
  - pneumaticcraft:logistics_frame_default_storage
  - pneumaticcraft:logistics_frame_requester
---

# 物流フレーム

*物流フレーム*はインベントリやタンクに取り付けて*物流システム*の一部としてマークできる取り付け可能なガジェットです。

配置されたフレームは[物流コンフィギュレーター](./logistics_configurator.md)を使用して*右クリック*することで設定でき、コンフィギュレーターを使用して*スニーク+右クリック*することで削除できます。フレームはアイテムフォームを右クリックすることで手持ちで設定することもできます。

以下のフレームプロパティを設定できます:
- すべてのフレームは提供または受け入れるアイテム/流体を制御するために*フィルタリング*をサポートしています。[タグフィルター](../tag_filter.md)も参照してください。
- *フィルター*側のタブではフィルターが*アイテムのNBT*または*MOD ID*で一致するかどうか、またフィルターをホワイトリスト(デフォルト)またはブラックリストとして適用するかどうかを設定できます。


- [リクエスターフレーム](#requester)の場合、*最小注文サイズ*タブを使用すると一度に移動するアイテムまたは流体の最小量を設定できます。これはドローンが小さな積載量で頻繁に移動することを防ぐのに役立ちます。
- 最後に、物流アイテム(フレームまたはコンフィギュレーター)を保持していない限り、すべてのフレームをプレイヤーに対して*非表示*にするように設定できます。注: 非表示のフレームはプレイヤーの左クリックをその下のブロックに渡します。

<a name="active_provider"></a>
## アクティブプロバイダーフレーム

*アクティブプロバイダーフレーム*は[リクエスターフレーム](#requester)、[ストレージフレーム](#storage)、および[デフォルトストレージフレーム](#default_storage)にアイテム/流体を提供します。

<Recipe id="pneumaticcraft:logistics_frame_active_provider" />

<a name="passive_provider"></a>
## パッシブプロバイダーフレーム

*パッシブプロバイダーフレーム*はアイテム/流体を[リクエスターフレーム](#requester)にのみ提供します。

<Recipe id="pneumaticcraft:logistics_frame_passive_provider" />

<a name="storage"></a>
## ストレージフレーム

*ストレージフレーム* は、[アクティブプロバイダーフレーム](#active_provider)からアイテム/流体を受け取り、[リクエスターフレーム](#requester)にアイテムを供給できます。

<Recipe id="pneumaticcraft:logistics_frame_storage" />

<a name="default_storage"></a>
## デフォルトストレージフレーム

*デフォルトストレージフレーム*は[アクティブプロバイダーフレーム](#active_provider)からアイテム/流体を受け取り、[リクエスターフレーム](#requester)および[ストレージフレーム](#storage)にリソースを供給できます。これらは可能な場合、常に最初に使用されるストレージフレームよりも優先順位が低くなります。

<Recipe id="pneumaticcraft:logistics_frame_default_storage" />

<a name="requester"></a>
## リクエスターフレーム

*リクエスターフレーム*は他のフレームのインベントリからアイテム/流体を要求できます。これらのフレームではコンフィグGUIを使用して、フレームに各アイテムまたは流体をどのくらいの量保持して*ストック*を維持するかを伝えます。

<Recipe id="pneumaticcraft:logistics_frame_requester" />

