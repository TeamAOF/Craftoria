---
navigation:
  title: "ドローンインターフェース"
  icon: "pneumaticcraft:drone_interface"
  parent: pneumaticcraft:machines.md
item_ids:
  - pneumaticcraft:drone_interface
---

# ドローンインターフェース

ドローンインターフェースは[ドローン](../drone.md)と通信するために使用される*ComputerCraft/OpenComputersの周辺機器*です。通信を行うには[コンピュータコントロールパズルピース](../computer_control.md)を使用して*ドローン*をプログラムします。

ドローンがコンピュータコントロールピースを実行するとパズルピースの領域内にある<Color hex="#880">$(t:ドローンインターフェースは一度に 1つのドローンにしか接続できません)使用可能な$(/t:ドローンインターフェースは一度に 1つのドローンにしか接続できません)</Color>*ドローンインターフェース*に接続しようとします。

<ItemImage id="pneumaticcraft:drone_interface" />

接続されるとドローンはインターフェースによって完全に制御されます。具体的には制御中のコンピューターによってインターフェース上で呼び出されるLuaメソッドによって制御されます。

ドローンインターフェースはLuaメソッドの長いリストを公開します。これらはすべて次のページで説明されています。

## 例

Lua プログラムの例:
<Color hex="#008">m = surroundings.wrap("right")
m.addArea(100, 64, 100, 120, 4, 120, "Filled")
m.setAction("dig")
while not m.isActionDone()
do
 sleep(1)
end
m.clearArea()
m.addArea(80, 65, 80)
m.setAction("goto")
-- 上記のように完了するまで待機
m.setAction("standby")

</Color>はドローンに広い領域((100,64,100)->(120,4,120)の範囲にあるすべてのブロック)を掘り出し、その後(80, 65、80)に戻ってスタンバイ状態になります。

## 例(続き)

[プログラマー](../programmer.md)経由でドローンプログラムを記述する場合とは異なり、反対のプログラムは続行する前に掘削(および場所移動)アクションが完了するまで明示的にスタンバイする必要があることに気付くかもしれません。これはLuaコンピュータープログラムが別のスレッドで実行されており、ワールドと直接対話できないためです。このプログラムはドローンに次に何をすべきかを指示するだけで、ドローンに完了したかどうかを尋ねる必要があります。

## abortAction()

<Color hex="#800">abortAction()</Color>

現在実行中のアクションを停止します。

## addArea()

<Color hex="#800">addArea(<x1>,<y1>,<z1>)</Color>

<Color hex="#800">addArea(<x1>,<y1>,<z1>,<x2>,<y2>,<z2>,<areaType>)</Color>

ドローンの現在の保存エリアにエリアを追加します。後者の方法を使用する場合、x1/y1/z1は最初のポイント([GPSエリアツール](../gps_area_tool.md)のP1)を表し、x2/y2/z2は2番目のポイント、つまりGPSエリアツールのP2を表します。

getAreaTypes()を使用して有効なエリアタイプを一覧表示できます。

## addBlacklistItemFilter()

<Color hex="#800">addBlacklistItemFilter(<item/block name>, <useNBT>, <useModSimilarity>)</Color>

addWhitelistItemFilter(...) と似ていますが、アイテムをブラックリストに登録します。

## addBlacklistLiquidFilter()

<Color hex="#800">addBlacklistLiquidFilter(<流体名>)</Color>

addWhitelistLiquidFilter(...) と似ていますが、流体をブラックリストに登録します。

## addBlacklistText()

<Color hex="#800">addBlacklistText(<text>)</Color>

ブラックリストのテキストにテキストを追加します。たとえば、「entity_attack」アクションのフィルターを指定するために使用されます。

## addWhitelistItemFilter()

<Color hex="#800">addWhitelistItemFilter(<item/block name>, <useNBT>, <useModSimilarity>)</Color>

別のウィジェットの右側にある[アイテムフィルター](../item_filter.md)ウィジェットとして機能します。アイテム/ブロック名はレジストリ名です(例: *pneumaticcraft:pressure_tube*)。'useXXX'はすべて使用されるフィルターを決定するブール値です(アイテムフィルターウィジェットGUIと同様)。

## addWhitelistLiquidFilter()

<Color hex="#800">addWhitelistLiquidFilter(<流体名>)</Color>

ピースの右側に[流体フィルター](../liquid_filter.md)ピースを配置したのと同じように動作します。流体のレジストリ名を指定する必要があります(例: *minecraft:water*)。

## addWhitelistText()

<Color hex="#800">addWhitelistText(<text>)</Color>

ホワイトリストのテキストリストにテキストを追加します。これはたとえば、「entity_attack」アクションのエンティティフィルターを指定するために使用されます。

## clearArea()

<Color hex="#800">clearArea()</Color>

現在保存されている領域をクリアします。

## clearBlacklistItemFilter()

<Color hex="#800">clearBlacklistItemFilter()</Color>

保存されているブラックリストに登録されたアイテムフィルターをすべてクリアします。

## clearBlacklistLiquidFilter()

<Color hex="#800">clearBlacklistLiquidFilter()</Color>

保存されているブラックリストに登録された流体フィルターをすべてクリアします。

## clearBlacklistText()

<Color hex="#800">clearBlacklistText()</Color>

保存されているブラックリストのテキストをすべてクリアします。

## clearWhitelistItemFilter()

<Color hex="#800">clearWhitelistItemFilter()</Color>

保存されているホワイトリストに登録されたアイテムフィルターをすべてクリアします。

## clearWhitelistLiquidFilter()

<Color hex="#800">clearWhitelistLiquidFilter()</Color>

保存されているホワイトリストに登録された流体フィルターをすべてクリアします。

## clearWhitelistText()

<Color hex="#800">clearWhitelistText()</Color>

保存されているホワイトリストに登録されたテキストをすべてクリアします。

## evaluateCondition()

<Color hex="#800">evaluateCondition()</Color>

true/falseを返します。[条件](../conditions.md)でのみ使用されます。条件が満たされているかどうかに応じてtrue/falseを返します。ドローン条件は<Color hex="#800">setAction()</Color>を設定した直後に確認できますが、非ドローン条件では<Color hex="#800">evaluateCondition()</Color>の結果が有効になる前に、<Color hex="#800">isActionDone()</Color>がtrueを返すまで待つ必要があります。

## exitPiece()

<Color hex="#800">exitPiece()</Color>

ドローン内の*コンピューターコントロール*ピースを停止し、ドローンのプログラムがプログラム内の次のパズルピースに進むことができるようにします。

## forgetTarget()

<Color hex="#800">forgetTarget()</Color>

ドローンが(「entity_attack」アクションを使用して)任意のエンティティをターゲットにしている場合、これによりそのターゲットへの攻撃が停止します。

## getAction()

<Color hex="#800">getAction()</Color>

<Color hex="#800">setAction()</Color>によって設定された最後のアクションを表す文字列を返します。アクションが設定されていない場合は*nil*を返します。このメソッドがnilを返さない場合にのみ<Color hex="#800">isActionDone()</Color>を呼び出すようにするために使用できます。

## getAllActions()

<Color hex="#800">getAllActions()</Color>

現在選択可能なすべてのアクション(*pneumaticcraft:dig*や*pneumaticcraft:place'*など)のテーブルを返します。これらの各アクションは[プログラマー](../programmer.md#ids)GUIで使用可能なプログラミングウィジェットに直接対応しています。

注: *pneumaticcraft:*で始まるアクション(すべてデフォルトのアクション)の場合、*pneumaticcraft:*プレフィックスはオプションです。

## getAreaTypes()

<Color hex="#800">getAreaTypes()</Color>

すべての可能な領域タイプ(塗りつぶし、フレーム、球体など)のテーブルを返します。

## getDronePosition()

<Color hex="#800">getDronePosition()</Color>

ドローンのx/y/z位置を返します。このメソッドは従来の互換性のために用意されており、代わりに新しい<Color hex="#800">getDronePositionVec()</Color>メソッドを使用することをお勧めします。

## getDronePositionVec()

<Color hex="#800">getDronePosition()</Color>

ドローンのx/y/z座標のテーブルを返します。個々の値は.x、.y、.zフィールドを使用して簡単に抽出できます。例: <Color hex="#800">xpos = getDronePosition().x</Color>

## getUpgrades()

<Color hex="#800">getUpgrades(<upgrade>)</Color>

指定されたタイプの挿入されたアップグレードの数を取得します。

アップグレード名は詳細情報が有効(F3+H)になっているPneumaticCraftのアップグレードアイテムにマウスを移動し、アイテム名から'_upgrade'の部分を取り除いたものを取得することで確認できます。

たとえば、*pneumaticcraft:speed_upgrade*の場合、名前は"speed"です。

## getVariable()

<Color hex="#800">getVariable(<variable name>)</Color>

このドローンから変数の値(x、y、z)を返します。[グローバル](../variables.md#global)(先頭に#)と[スペシャル](../variables.md#special)変数(先頭に$)を取得することもできます。

## hideArea()

<Color hex="#800">hideArea()</Color>

<Color hex="#800">showArea()</Color>で表示されるドローンに保存されているエリアのワールド内ハイライトを停止します。

## isActionDone()

<Color hex="#800">isActionDone()</Color>

現在のアクションが完了した場合はtrueを返します (例: 「goto」がターゲットの場所に到着した、「inventory import」がこれ以上インポートできない、「dig」が可能なすべてのブロックを掘ったなど)。

## isConnectedToDrone()

<Color hex="#800">isConnectedToDrone()</Color>

ドローンがこのドローンインターフェースに接続した場合(ドローンのプログラムがComputerCraftのピースに到達し、接続を確立した場合)、trueを返します。

## removeArea()

<Color hex="#800">removeArea(<x1>,<y1>,<z1>,<x2>,<y2>,<z2>,<areaType>)</Color>

現在保存されている領域から領域を削除します(領域をブラックリストに登録するのと同じです)。

## setAction()

<Color hex="#800">setAction(<action>)</Color>

ドローンが実行するアクションを設定します。これは<Color hex="#800">getAllActions()</Color>によって返されるアクションの1つである必要があります。これらはF3+Hが切り替えられるとウィジェットのツールチップにアクション名が表示される[プログラマー](../programmer.md)GUIのプログラミングウィジェットに直接対応します。

プレフィックスが*pneumaticcraft:*の場合、そのプレフィックスはオプションであることに注意してください。

## setBlockOrder()

<Color hex="#800">setBlockOrder(<"closest"/"highToLow"/"lowToHigh">)</Color>

ドローンの配置/掘削順序を設定します。

## setCanSteal()

<Color hex="#800">setCanSteal(<true/false>)</Color>

「pickup_item」アクションが使用される場合、ドローンが通常は放置するアイテム(*Immersive Engineering*のコンベアベルト上のアイテムなど)を盗むことを許可するかどうかを制御します。

 デフォルトは「false」です。ドローンはアイテムを盗もうとはしません。

## setCheckLineOfSight()

<Color hex="#800">setCheckLineOfSight(<true/false>)</Color>

「entity_attack」アクションが使用される場合、ドローンがそのエリア内のすべてのターゲットを攻撃するか直接視線が通っているターゲットのみを攻撃するかを制御します。

デフォルトは「false」で視線はチェックされません。

## setCount()

<Color hex="#800">setCount(<amount>)</Color>

これはimport/export/dropアクションによって処理されるアイテムの最大数を構成し、条件チェックでチェックされる量にも使用されます

## setCraftingGrid()

<Color hex="#800">setCraftingGrid(<item/block name>, <item/block name>, ...(9x))</Color>

「crafting」アクションが使用されるときにこのレシピが使用されるようにクラフトグリッドを設定します。レシピを構成する9つのアイテムすべてを指定する必要があります。空白部分には*nil*を指定します。アイテムの命名形式はアイテムフィルターと同じです。

## setDropStraight()

<Color hex="#800">setDropStraight(<true/false>)</Color>

「drop_item」アクションが現在のアクションの場合、アイテムがランダムな速度でドロップされるか(バニラのドロッパーのように)、真下にドロップされるかを決定します。

## setEmittingRedstone()

<Color hex="#800">setEmittingRedstone(<strength>)</Color>

「emit_redstone」アクションが現在のアクションであるときに送信するレッドストーン信号の強度を設定します。

## setIsAndFunction()

<Color hex="#800">setIsAndFunction(<true/false>)</Color>

条件でのみ使用されます。trueの場合、チェックされたすべてのブロックは条件要件(>=10 など)を満たす必要があります。

## setMaxActions()

<Color hex="#800">setMaxActions(<amount>)</Color>

これはアクションが「done」と見なされる前にブロックに対して実行されるアクションの最大数を設定します。これは「place」、「dig」、「block_right_click」アクションに適用されます。これを使用できるようにするには必ず<Color hex="#800">setUseMaxActions(true)</Color>も呼び出してください。

## setOperator()

<Color hex="#800">setOperator(<"=" / ">=" / "<=">)</Color>

条件でのみ使用されます。条件が等しい量(=)、等しいかより大きい量(>=)、等しいかより小さい量(<=)のいずれをチェックするかを指定します。量は<Color hex="#800">setCount()</Color>を使用して設定できます。

## setPlaceFluidBlocks()

<Color hex="#800">setPlaceFluidBlocks(<true/false>)</Color>

「liquid_export」アクションでのみ使用されます。trueに設定するとドローンはワールド内に流体ブロックを配置できるようになります。デフォルトの「false」では流体を流体タンクにエクスポートすることのみが許可されます。

## setRenameString()

<Color hex="#800">setRenameString(<name>)</Color>

「rename」アクションが使用されるときにドローンに付けられる名前を設定します。

## setRequiresTool()

<Color hex="#800">setRequiresTool(<true/false>)</Color>

これはドローンが「dig」および「harvest」アクションを実行するときにツールを必要とするかどうかを構成します。ツールがない場合ドローンはこれらのアクションを実行しようとしません。

## setRightClickType()

<Color hex="#800">setRightClickType("click_item" / "click_block")</Color>

現在のアクションが「block_right_click」の場合、ドローンが保持しているアイテムのクリックロジックを使用するか(例: *火打石と打ち金*を使用する)、または対象のブロックをアクティブ化するか(例: *レバー*を反転する)を制御します。デフォルトは「click_item」です。

## setSide()

<Color hex="#800">setSide(<side>, <accessible>)</Color>

特定の側をアクセス可能にするかどうかを設定します。「inventory_import」および「inventory_export」アクションで使用され、ドローンがインベントリのどの側にアクセスできるかを設定します。また、「place」アクションでブロックの配置方法を決定するのにも使用されます。

## setSides()

<Color hex="#800">setSides(<down>, <up>, <north>, <south>, <east>, <west>)</Color>

上記と同じですが、一度にすべての側面を設定する単一のメソッドです。このメソッドは6つのブールパラメーターを受け取ります。

## setSignText()

<Color hex="#800">setSignText(<line1>, <line2>, ..., <lineN>)</Color>

*edit_sign*アクションが使用されたときに看板と格言タイルに送信されるテキストを設定します。

## setSneaking()

<Color hex="#800">setSneaking(<true/false>)</Color>

「block_right_click」アクションでのみ使用されます。これにより偽のプレイヤーが右クリック中にスニークしているかどうかが設定されます。

## setUseCount()

<Color hex="#800">setUseCount(<true/false>)</Color>

ドローンがimported/exported/droppedアイテムの最大数を持つかどうかを設定します。 trueの場合は必ず<Color hex="#800">setCount()</Color>も呼び出してください。

## setUseMaxActions()

<Color hex="#800">setUseMaxActions(<true/false>)</Color>

コマンドが「done」と見なされる前に、ドローンが一度に1つのブロックで実行できるアクションの最大数を設定するかどうかを設定します。「place」、「dig」、「block_right_click」アクションに適用されます。trueの場合は<Color hex="#800">setMaxActions()</Color>も必ず呼び出してください。

## setVariable()

<Color hex="#800">setVariable(<variable name>, <x>, <y>, <z>)</Color>

このドローンの[変数](../variables.md)を指定されたX/Y/Z座標に設定します。[グローバル変数](../variables.md#global)を設定することもできます。

## setVariable()

<Color hex="#800">setVariable(<variable name>, <boolean>)</Color>

このドローンの[変数](../coordinate_operator.md)を設定します。'true'は(1,0,0)を渡すことに相当し、'false'は(0,0,0)を渡すことに相当します。

## showArea()

<Color hex="#800">showArea()</Color>

プログラミングウィジェットのオプションGUIで*範囲表示*をクリックした場合、使用されるのと同じエリアレンダラーを使用して現在保存されているエリアが表示されます。<Color hex="#800">hideArea()</Color>を使用するとこのようなエリアを非表示にすることができます。

ドローンインターフェースのクラフト

<Recipe id="pneumaticcraft:drone_interface" />

