---
navigation:
  title: "ネットワークコンポーネント"
  icon: "pneumaticcraft:network_api"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:diagnostic_subroutine
  - pneumaticcraft:network_io_port
  - pneumaticcraft:network_registry
  - pneumaticcraft:network_node
  - pneumaticcraft:network_api
  - pneumaticcraft:network_data_storage
---

# ネットワークコンポーネント

これらのコンポーネントは主に[セキュリティステーション](../machines/security_station.md)をセットアップするために使用されますが、一部はクラフトコンポーネントとしても使用され、[ネットワークストレージ](#network_storage)と[ネットワークAPI](#network_api)は[ドローン](../tools/drone.md)のプログラムを保存するために使用できます。

<a name="diagnostic"></a>
*診断サブルーチン*は[セキュリティステーション](../machines/security_station.md)の必須コンポーネントです。
これは[ハッキングの試み](../machines/security_station.md#hacking)をハッカーまで追跡する役割を担っています。すべての*診断サブルーチン*がハッキングされた場合、*セキュリティステーション*は侵害されたことになります。

<Recipe id="pneumaticcraft:diagnostic_subroutine" />

<a name="io_port"></a>
*ネットワークIOポート*は[セキュリティステーション](../machines/security_station.md)の必須コンポーネントです。
これは*セキュリティステーション*へのハッキング試行のエントリポイントです。

<Recipe id="pneumaticcraft:network_io_port" />

<a name="registry"></a>
*ネットワークレジストリ*は[セキュリティステーション](../machines/security_station.md)の必須コンポーネントです。
これはハッカーのターゲットです。*すべての*レジストリがハッキングされた場合、*セキュリティステーション*が侵害されたことになります。

<Recipe id="pneumaticcraft:network_registry" />

<a name="node"></a>
*ネットワークノード*は[セキュリティステーション](../machines/security_station.md)内の汎用コンポーネントであり、必要なコンポーネント間の経路を形成するために使用されます。

<Recipe id="pneumaticcraft:network_node" />

<a name="network_api"></a>
*ネットワークAPI*は[ドローン](../tools/drone.md)のプログラムを保存するために使用できます。プログラムには[パズルピース](../programming/puzzle_pieces.md)が必要で、[プログラマブルコントローラー](../programming/programmable_controller.md)または[外部プログラム](../programming/external_program.md)ウィジェットでプログラムを実行するために使用できます。

<Recipe id="pneumaticcraft:network_api" />

<a name="network_storage"></a>
*ネットワークデータストレージ*は[ドローン](../tools/drone.md)のプログラムを保存するために使用できます。プログラミングには[パズルピース](../programming/puzzle_pieces.md)は必要ないため、プログラムの実行には使用できません。ただし、プログラムのライブラリを保存したり他のプレイヤーとプログラムを交換したりする場合には便利です。

<Recipe id="pneumaticcraft:network_data_storage" />

