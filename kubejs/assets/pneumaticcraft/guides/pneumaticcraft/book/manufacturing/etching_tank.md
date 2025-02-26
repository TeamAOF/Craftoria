---
navigation:
  title: "Etching Tank"
  icon: "pneumaticcraft:etching_tank"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:etching_tank
---

# Etching Tank

The *Etching Tank* should first be filled with [Etching Acid](./etching_acid.md). Then insert up to 25 *Empty PCB's* which have already been either partially or fully exposed in a [UV Light Box](./uv_light_box.md).

While it's possible just to pour Etching Acid into the world and throw PCB's into the pool, using the Etching Tank is a much safer and faster way to do it.

## Automation

You can pipe *Empty PCB's* in on any side. Successfully-etched *Unassembled PCB's* are moved into the top right output slot, while *Failed PCB's* go into the bottom-right slot. For automated extraction, extract Unassembled PCB's from the side of the machine, and Failed PCB's from the top or bottom. You could automate this by piping Failed PCB's into a *Blast Furnace* to get unexposed Empty PCB's back, and restart the process.

## Heating

Without [Heat](../base_concepts/heat.md), the Etching Tank takes 150 seconds to fully etch a PCB (although of course it can etch up to 25 in parallel). If you apply heat to the tank, you can further reduce the processing time, down to a minimum of 30 seconds; the hotter the tank gets, the faster the processing time. However, be warned that when heated, a small amount of Etching Acid will be used up while PCB's are being etched.

Crafting a Etching Tank

<Recipe id="pneumaticcraft:etching_tank" />

