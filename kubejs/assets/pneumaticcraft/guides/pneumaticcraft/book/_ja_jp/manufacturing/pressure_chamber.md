---
navigation:
  title: "圧力室"
  icon: "pneumaticcraft:pressure_chamber_wall"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:pressure_chamber_wall
  - pneumaticcraft:pressure_chamber_glass
  - pneumaticcraft:pressure_chamber_interface
  - pneumaticcraft:pressure_chamber_valve
---

# 圧力室

*圧力室*はさまざまな材料を他の材料に圧縮するために使用されるマルチブロック構造です。空気貯蔵容量が大きいため、便利な「バッテリー」としても機能します。

マルチブロックの構築には次のルールが適用されます:
- マルチブロック全体は、3x3x3、4x4x4、または5x5x5で中は空の構造である必要があります。


- *縁*および*角*は*圧力室の壁*または*圧力室のガラス*のいずれかである必要があります。
- *面*は、*圧力室の壁*、*圧力室のガラス*、*圧力室のバルブ*、または[圧力室のインターフェース](#interface)のいずれかである必要があります。
- 少なくとも1つの*圧力室のバルブ*が必要です。
- 少なくとも2つの*圧力室のインターフェース*(1つは内側を向きでもう1つは外側を向く必要があります)が推奨されます。

## 圧力室

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_3

1つの*バルブ*と2つの*インターフェース*を備えた3x3x3の圧力室

## 圧力室

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_4

2つの*バルブ*と2つの*インターフェース*を備えた4x4x4の圧力室

## 圧力室

TODO Multiblock-ID: pneumaticcraft:pressure_chamber_5

4つの*バルブ*と4つの*インターフェース*を備えた5x5x5の圧力室

<a name="interface"></a>
<ItemImage id="pneumaticcraft:pressure_chamber_interface" />

*圧力室のインターフェース*は*圧力室*へのアイテムの挿入と抽出を自動化するために使用されます。アイテムは*ホッパー*またはその他のMODの配管システムを介してパイプで送られる*べき*です。少なくとも2つのインターフェースが必要です。1つは'I'が外を向いているインターフェース(*入力インターフェース*)、もう1つは'O'が外を向いているインターフェース(*出力インターフェース*)です。

入力モードのインターフェースは圧力室のレシピの材料となるアイテムのみを受け入れます。出力モードのインターフェースは(デフォルトでは)クラフトされたアイテムのみをエクスポートしますが、必要に応じてGUIに*全*アイテムをエクスポートできるボタンがあります。

*この動作は1.12.2の頃から変更されており、現在でははるかにユーザーフレンドリーになっています。*

出力モードの*インターフェース*は隣接するインベントリに自動的に排出されます。他のMODのパイプはインターフェースのインベントリのように見えるかどうかに応じて、含まれる場合と含まれない場合があります。

転送されるアイテムごとに1,000mLの[空気](../base_concepts/pressure.md)が必要です。つまり、フルスタックを転送するには*インターフェース*に64,000mL(基本的な3x3x3の圧力室の場合は4バール)が必要です。インターフェースが「スタック」しているように見える場合は、圧力がさらに高まるのを待っているだけです。

**ヒント**
- *鉄*を圧縮するときは*鉄ブロック*を圧縮します。これにより圧力室内外のアイテムの移動に使用する空気が9分の1だけになります。
- 大きな圧力室をすばやく加圧する必要がある場合は追加のバルブ(必要な空気を生成するのに十分なコンプレッサーがあることを前提とします)が役立ちます。



<Recipe id="pneumaticcraft:pressure_chamber_wall" />

<Recipe id="pneumaticcraft:pressure_chamber_glass" />



<Recipe id="pneumaticcraft:pressure_chamber_interface" />

<Recipe id="pneumaticcraft:pressure_chamber_valve_x1" />



<Recipe id="pneumaticcraft:pressure_chamber_valve_x4" />

<Recipe id="pneumaticcraft:pressure_chamber_valve" />

