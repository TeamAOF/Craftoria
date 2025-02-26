---
navigation:
  title: "組立システム"
  icon: "pneumaticcraft:assembly_controller"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:assembly_controller
  - pneumaticcraft:assembly_platform
  - pneumaticcraft:assembly_io_unit_import
  - pneumaticcraft:assembly_io_unit_export
  - pneumaticcraft:assembly_drill
  - pneumaticcraft:assembly_laser
---

# 組立システム

より高レベルの材料をクラフトするには*組立システム*と*組立機械*のコレクションが必要です。これらの機械は水平方向に隣接している場合に相互に通信します。各タイプの機械は1つだけ存在(*組立IOユニット*を除く、下記参照)できます。組立ラインは[圧縮空気](../base_concepts/pressure.md)で稼働しますが、システム全体に動力を供給するには組立コントローラーに空気を供給するだけで済みます。

<ItemImage id="pneumaticcraft:assembly_controller" />

*組立システム*の頭脳です。*コントローラー*に他の*組立機械*を制御する方法を指示する[プログラム](./assembly_programs.md)を受け入れます。

コントローラーのディスプレイにはその状態に関する診断情報が表示されます。GUIを開いて何が起こっているかを確認します。

<ItemImage id="pneumaticcraft:assembly_io_unit_import" />

*IOユニット*はインベントリと*組立プラットフォーム*間の接続です。このロボットアームは斜めに届くことができます。

IOユニットは完成したアイテムをエクスポートするか、作成に使用するアイテムをインポートすることができます。バニラの*チェスト*または改造されたインベントリブロックなど、任意のインベントリを使用できます。

## 組立IOユニット(続き)

*組立システム*には*2つ*の*IOユニット*、つまり1つのインポートユニットと1つのエクスポートユニットが含まれている必要があります。<Color id="gold">橙色</Color>はエクスポートユニット、<Color id="blue">青色</Color>はインポートユニットであることを意味します。*IOユニット*が機能するには*組立プラットフォーム*にアクセスできる必要があり、また、アイテムを抽出または保管するためのインベントリ(モードによって異なります)も必要です。

<ItemImage id="pneumaticcraft:assembly_platform" />

*組立プラットフォーム*は他の*組立機械*の作業台です。ドリル/レーザー加工時にアイテムを所定の位置に保持するために使用されます。

*組立プラットフォーム*は他のすべての機械がアクセスする必要があるため、中央に配置するのが最適です。

<ItemImage id="pneumaticcraft:assembly_drill" />

*組立ドリル*は実際の作業を行う*組立機械*の1つです。ネザライトのドリルビットは最も硬い材料を貫通することができます。

*組立ドリル*は斜めには届きません。そのため*組立プラットフォーム*のすぐ隣に配置する必要があります。

<ItemImage id="pneumaticcraft:assembly_laser" />

*組立レーザー*は材料を切断してアイテムをスライスしたり、端を切り落としたりすることができます。

*組立ドリル*と同様にこの機械は斜めには届きません。

## 使用する

*組立システム*を使用してアイテムを作成するには*組立コントローラー*に[組立プログラム](./assembly_programs.md)を配置し、必要なアイテムを入力インベントリに配置します。

コントローラーに認識されているレシピと挿入されたプログラムに一致するアイテムは自動的に処理されます。

## CraftTweaker

*組立システム* には [CraftTweaker](https://minecraft.curseforge.com/projects/crafttweaker)のサポートがあり、レシピを追加したり削除したりできます。詳細については、以下のリンクを参照してください。

[CraftTweaker Docs](https://docs.blamejared.com/1.16/en/mods/PneumaticCraft-Repressurized/AssemblySystem)


<Recipe id="pneumaticcraft:assembly_controller" />

<Recipe id="pneumaticcraft:assembly_platform" />



<Recipe id="pneumaticcraft:assembly_io_unit_import" />

<Recipe id="pneumaticcraft:assembly_io_unit_export" />



<Recipe id="pneumaticcraft:assembly_io_unit_import_from_export" />

<Recipe id="pneumaticcraft:assembly_io_unit_export_from_import" />



<Recipe id="pneumaticcraft:assembly_drill" />

<Recipe id="pneumaticcraft:assembly_laser" />

