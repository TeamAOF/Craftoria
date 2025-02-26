---
navigation:
  title: "Coercion Deriver"
  icon: "mffs:coercion_deriver"
  parent: mffs:machines.md
item_ids:
  - mffs:coercion_deriver
---

# Coercion Deriver

<ItemImage id="mffs:coercion_deriver" />

The <Color id="blue">Coercion Deriver</Color> is a member of the MFFS family of machines. It is primarily used to generate [Fortron](../getting_started/fortron.md) from FE energy, which other MFFS machines require to function. A <Color id="blue">Coercion Deriver</Color> is designed to work in conjunction with a [Fortron Capacitor](./fortron_capacitor.md) to charge it with [Fortron](../getting_started/fortron.md). [Fortron](../getting_started/fortron.md) is then distributed to the other machines by the Capacitor.

Crafting the <Color id="blue">Coercion Deriver</Color>.

<Recipe id="mffs:coercion_deriver" />

## Usage

To generate [Fortron](../getting_started/fortron.md), connect the <Color id="blue">Coercion Deriver</Color> to a FE source and activate it using a Redstone signal. Once powered and activated, the <Color id="blue">Coercion Deriver</Color> will change from red to blue and begin generating [Fortron](../getting_started/fortron.md). A <Color id="blue">Coercion Deriver</Color> may be linked to other MFFS machines, such as a [Fortron Capacitor](./fortron_capacitor.md), by setting its frequency number to match that of the other machines.

This can be achieved by either:
- Right-clicking the Deriver and entering the desired frequency number into its GUI screen
- Shift-right-clicking the Coercion Deriver while holding a Frequency Card

The <Color id="blue">Coercion Deriver</Color>'s ability to generate [Fortron](../getting_started/fortron.md) can be amplified using <Color id="dark_green">Lapis Lazuli</Color> or <Color id="dark_green">Nether Quartz</Color>. For this, place either into the slot next to the arrow. This should increase [Fortron](../getting_started/fortron.md) output by about 20x.

## Operation Modes

The <Color id="blue">Coercion Deriver</Color> has two modes of operation: Derive and Integrate. By default, the it is set to Derive - meaning it steadily converts supplied FE into [Fortron](../getting_started/fortron.md). Clicking the <Color id="dark_green">Derive</Color> toggle button in the middle of the GUI screen switches its operating mode to <Color id="dark_green">Integrate</Color> and vice versa. In Integrate mode, the Deriver operates in reverse by converting available [Fortron](../getting_started/fortron.md) back into FE.

## Upgradability

A Coercion Deriver may be augmented with various modules to improve its performance.
- [<Color id="dark_purple">Speed Module</Color>](../upgrade_modules/speed_module.md): Increases the boosting effect gained when inserting <Color id="dark_green">Lapis Lazuli</Color> or <Color id="dark_green">Nether Quartz</Color> into the Deriver.
- [<Color id="dark_purple">Capacity Module</Color>](../upgrade_modules/capacity_module.md): Increases the amount of [Fortron](../getting_started/fortron.md) the Deriver is able to store.

