---
navigation:
  title: "コンピューター統合"
  icon: "pneumaticcraft:textures/patchouli/computer.png"
  parent: pneumaticcraft:base_concepts.md
---

# コンピューター統合

*ComputerCraft*または*Open Computers*がインストールされている場合、ほぼすべての<Color hex="#228">PneumaticCraft: Repressurized</Color>機械および[ドローン](../machines/drone_interface.md)と対話できるようになります。

ここにリストされているマシンはすべて、CC/OC周辺機器として対話できます。

## ComputerCraft

Luaでは*m = peripheral.wrap(<side>)*を実行できます。ここで*<side>*は周辺機器が接続されているコンピュータの側面(上、下、左、右、後ろ、前)です。次に*m.<functionName>*で次の関数を使用できます。

 次の関数で引数の1つとして'<side>'が出現する場所では、'up'、'down'、'north'、'south'、'east'、'west' が有効です。

## Open Computers

コンピュータを*アダプター*を使用して$(pnc)マシンに接続する必要があります。そうするとOCコンポーネントとして表示されます。OCのLua環境で*=components.list()*$(/pnc)を実行すると表示されます。次に、次のいずれかの関数を使用できます。たとえば、*p = components.air_compressor.getPressure()*は接続されている*エアコンプレッサー*の現在の圧力を取得します。

## 一般的なメソッド

以下のメソッドはすべての機械に共通です。*$$ <Color hex="#228">PneumaticCraft: Repressurized</Color>* 機械:
- <Color hex="#800">getPressure()、getPressure(<side>)</Color>: 機械の圧力を取得します。<side>はオプションで、サイド固有の圧力を持つ [真空ポンプ](../machines/vacuum_pump.md)にのみ役立ちます。
- <Color hex="#800">getDangerPressure()</Color>: 機械が爆発する危険がある圧力を取得します。
- <Color hex="#800">getCriticalPressure()</Color>: 機械が確実に爆発する絶対最大圧力を取得します。

## 熱関連のメソッド

以下のメソッドは[熱](./heat.md)の概念をサポートする*すべての<Color hex="#228">PneumaticCraft: Repressurized</Color>*機械に共通です:
- <Color hex="#800">getTemperature()、getTemperature(<side>)</Color>: は機械の温度を取得します。<side>はオプションで、側面によって温度が異なる[ボルテックスチューブ](../machines/vortex_tube.md)にのみ役立ちます。

<a name="air_cannon"></a>
<ItemImage id="pneumaticcraft:air_cannon" />


- <Color hex="#800">setExternalControl(<true/false>)</Color>: trueの場合、通常の方法(GPSツールの挿入、レンジアップグレードの変更など)で大砲が回転するのを防ぎます。
- <Color hex="#800">setTargetLocation(<x>,<y>,<z>)</Color>: GPSツールに保存されている場所ではなく指定されたターゲット場所に大砲を向けます。

## エアキャノン(続き)


- <Color hex="#800">setRotationAngle(<angle>)</Color>: 大砲のヨーを指定された角度に回転させます。
- <Color hex="#800">setHeightAngle(<angle>)</Color>: 大砲のピッチを指定された角度に回転させます。
- <Color hex="#800">isDoneRotating()</Color>: 大砲の回転が完了したらtrueを返します。
- <Color hex="#800">getMinWorkingPressure()</Color>: 大砲を発射するために必要な最小圧力を返します。(GUIの黄色から緑色のしきい値)

## エアキャノン(続き)


- <Color hex="#800">fire()</Color>: 十分な圧力があり、アイテムが挿入されている場合に大砲を発射します。成功した場合はtrueを返します。

<a name="elevator"></a>
## エレベーター

<ItemImage id="pneumaticcraft:elevator_base" />


- <Color hex="#800">setExternalControl(<true/false>)</Color>: trueの場合、エレベーターの<Color hex="#f00">レッドストーンモード</Color>を「エレベーター呼出」モードに設定します。これはコンピューター制御にも適用されます。<Color hex="#800">setTargetHeight()</Color>を呼び出す前に設定する必要はありません。このメソッドはエレベーターを外部制御に自動的に変更します。

## エレベーター(続き)


- <Color hex="#800">getMinWorkingPressure()</Color>: エレベーターを伸ばすために必要な最小圧力を取得します。エレベーターを下降させるのは自由です。
- <Color hex="#800">setTargetHeight(<height>)</Color>: エレベーターの目標高さを解析された高さに設定します。(メートル/ブロック単位、浮動小数点)
- <Color hex="#800">getTargetHeight()</Color>: エレベーターの目標高さを取得します。(メートル/ブロック単位、浮動小数点)
- <Color hex="#800">getCurrentHeight()</Color>: エレベーターの現在の高さを取得します。(メートル/ブロック単位、浮動小数点)

## エレベーター(続き)


- <Color hex="#800">getVelocity()</Color>: エレベーターの現在の速度をティックあたりのブロック数で取得します。(1秒は20ティックです)。負の値はエレベーターが下降していることを示します。

<a name="universal_sensor"></a>
<ItemImage id="pneumaticcraft:universal_sensor" />


- <Color hex="#800">getSensorNames()</Color>: すべての既知のセンサー名のテーブルを返します。
- <Color hex="#800">getSensor()</Color>: 現在選択されているセンサーの名前を返します。

## ユニバーサルセンサー(続き)


- <Color hex="#800">setSensor(<sensorName>), setSensor(<index>), setSensor()</Color>: 現在選択されているセンサーを設定します。<sensorName>は<Color hex="#800">getSensorNames()</Color>によって返される名前の1つです。<index>は<Color hex="#800">getSensorNames()</Color>から返されるテーブルのインデックスです。引数なしの<Color hex="#800">setSensor()</Color>を使用するとセンサーは選択されません。(マシンはアイドル状態になり、空気を使用しません)現在挿入されているアップグレードでセンサーが可能な場合はtrueを返します。

## ユニバーサルセンサー(続き)


- <Color hex="#800">setTextField(<text>)</Color>: 一部のセンサーはテキストフィールドを使用して追加オプションを指定します。(たとえば、「範囲内のエンティティ」センサーは[エンティティフィルター文字列](./entity_filter.md)を受け入れます)ここで必要なテキストを指定できます。
- <Color hex="#800">getTextField()</Color>: 現在*ユニバーサルセンサー*に格納されているテキストを返します。

## ユニバーサルセンサー(続き)


- <Color hex="#800">isSensorEventBased()</Color>: センサーにはイベントベースとポーリングセンサーの2つのカテゴリがあります。イベントベースのセンサーは何かが起こるのを待ちます。(プレイヤーの攻撃、アイテムのピックアップ)ポーリングセンサーはセンサーの状態を定期的にチェックします。(範囲内のエンティティ、ワールド時間、雨量センサー)この関数は現在選択されているセンサーがイベントベースの場合trueを返します。

## ユニバーサルセンサー(続き)


- <Color hex="#800">getSensorValue()</Color>: 現在のセンサーがポーリングセンサーの場合、出力される(反転されていない)レッドストーン信号を返します。多くのポーリングセンサーはパフォーマンス上の理由から頻繁にポーリングしないため、センサーを設定してすぐに出力を取得することは信頼できないことに注意してください。したがって、このメソッドはプルイベントをトリガーしそれに応じて出力を取得します。ポーリングセンサーが選択されていない場合は例外がスローされます。

## ユニバーサルセンサー(続き)


- <Color hex="#800">getMinWorkingPressure()</Color>: ユニバーサルセンサーを動作させるために必要な最小圧力(GUIの黄色から緑色へのしきい値)を返します。
- <Color hex="#800">setGPSToolCoordinate(<slotIndex>,<x>,<y>,<z>)</Color>: 指定されたスロット(1から始まる)にあるGPSツールに保存されている場所を指定された場所に設定します。これは場所を使用するセンサーに便利です。

## ユニバーサルセンサー(続き)

イベントベースのセンサー(プレイヤーの右クリックセンサーなど)の場合、センサー値の取得はイベントベースです。イベントを取得するには<Color hex="#800"><arguments> = os.pullEvent("universalSensor")</Color>を実行します。通常、引数は<eventName, redstoneStrength>で構成されます。プレイヤーの右クリックセンサーは例外で<eventName, redstoneStrength, interactedX, interactedY, interactedZ>が返されます。これにより興味深い使用が可能になります...

