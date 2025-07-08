---
navigation:
  title: "Printed Circuit Boards"
  icon: "pneumaticcraft:printed_circuit_board"
  parent: pneumaticcraft:components.md
item_ids:
  - pneumaticcraft:empty_pcb
  - pneumaticcraft:printed_circuit_board
---

# Printed Circuit Boards

*Printed Circuit Boards* (PCB's) are important components used in many higher tier machines and tools. Making a *PCB* requires a few steps.

First of all, make an *Empty PCB* in the [Pressure Chamber](../manufacturing/pressure_chamber.md) as shown opposite. There are then two methods to proceed (see overleaf).

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/empty_pcb"}
```

## Method #1

This method is the only one available initially, and is somewhat slow without extra automation and heating infrastructure: you can develop a *PCB* chemically by putting it in a [UV Light Box](../manufacturing/uv_light_box.md) and then putting the exposed *Empty PCB* in an [Etching Tank](../manufacturing/etching_tank.md) to turn it into an *Unassembled PCB*.

## Recycling Failed PCB's

The etching process has a chance of failure if the *Empty PCB* was not 100% exposed in the [UV Light Box](../manufacturing/uv_light_box.md); you can recycle *Failed PCB's* in a *Blast Furnace*.

<Recipe id="pneumaticcraft:empty_pcb_from_failed_pcb" />

## Method #2

<ItemImage id="pneumaticcraft:assembly_controller" />

Once you can make an [Assembly System](../manufacturing/assembly_system.md), you can use that to turn *Empty PCB's* directly into *Unassembled PCB's* with an *Assembly Program: Laser*. There's no need to expose it in a *UV Light Box* or use an *Etching Tank* in this case.

## Method #2 (cont)



The Assembly System is a very convenient and reasonably quick option for producing *Unassembled PCB's*; however with sufficient automation and heating infrastructure, the *UV Light Box/Etching Tank* combo can be much quicker, especially if you need to mass-produce PCB's.

**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/unassembled_pcb"}
```

Finally, you can add some [Capacitors](./capacitor.md) and [Transistors](./transistor.md) to assemble the finished *Printed Circuit Board*!

<Recipe id="pneumaticcraft:printed_circuit_board" />

