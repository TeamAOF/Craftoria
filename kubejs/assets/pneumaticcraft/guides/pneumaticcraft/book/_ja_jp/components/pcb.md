---
navigation:
  title: "プリント回路基板"
  icon: "pneumaticcraft:printed_circuit_board"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:empty_pcb
  - pneumaticcraft:printed_circuit_board
---

# プリント回路基板

*プリント回路基板*(PCB)は多くの高機能機械やツールで使用される重要なコンポーネントです。*PCB*の作成にはいくつかの手順が必要です。

まず、反対側に示すように[圧力室](../manufacturing/pressure_chamber.md)内に*空のPCB*を作成します。その後、2つの方法で続行できます(次のページを参照)。

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/empty_pcb"}
```

## 方法その1

この方法は当初利用できる唯一の方法であり、追加の自動化と加熱インフラストラクチャがなければやや時間がかかります。*PCB*を[UVライトボックス](../manufacturing/uv_light_box.md)に入れて化学的に開発し、露光した*空のPCB*を[エッチングタンク](../manufacturing/etching_tank.md)に入れて*未組立のPCB*に変換することができます。

## 不良PCBのリサイクル

*空のPCB*が[UVライトボックス](../manufacturing/uv_light_box.md)内で100%露光されていない場合、エッチングプロセスは失敗する可能性があります。*不良PCB*は*溶鉱炉*でリサイクルできます。

<Recipe id="pneumaticcraft:empty_pcb_from_failed_pcb" />

## 方法その2

<ItemImage id="pneumaticcraft:assembly_controller" />

[組立システム](../manufacturing/assembly_system.md)を作成できたら、それを使用して*組立プログラム: レーザー*で*空のPCB*を*未組立のPCB*に直接変換できます。この場合*UVライトボックス*で露光したり、*エッチングタンク*を使用する必要はありません。

## 方法その2(続き)



組立システムは*未組立のPCB*を製造するための非常に便利でかなり迅速なオプションです。ただし、十分な自動化と加熱インフラストラクチャがあれば、特にPCBを大量生産する必要がある場合は*UVライトボックス/エッチングタンク*の組み合わせの方がはるかに迅速になります。

**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/unassembled_pcb"}
```

最後に[コンデンサ](./capacitor.md)と[トランジスタ](./transistor.md)を追加して、完成した*プリント回路基板*を組み立てます。

<Recipe id="pneumaticcraft:printed_circuit_board" />

