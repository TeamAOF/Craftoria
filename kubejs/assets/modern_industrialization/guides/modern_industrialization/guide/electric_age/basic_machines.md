---
navigation:
  parent: electric_age/index.md
  title: Basic Machines
  icon: assembler
  position: 5

item_ids:
  - lubricant_bucket
  - configurable_chest
  - polarizer
  - assembler
  - redstone_control_module
  - basic_upgrade
---

# Electric Machines

Electric machines work exactly the same as steam machines, except that they require electricity instead of steam and they progressively overclock recipes up to 32 EU/t.

You can use EMI to view the recipes for the electric version of the machines you are already familiar with.

## Lubricant

<ItemGrid>
  <ItemIcon id="lubricant_bucket" />
</ItemGrid>

Lubricant is a fluid that can be obtained by mixing creosote and redstone.

Right-click an electric machine with a lubricant container such as a lubricant bucket to overclock it manually.

Each 25 mb of lubricant will add 1 (overclocking) efficiency tick to the machine.

## Configurable Chest

<Recipe id="modern_industrialization:electric_age/machine/configurable_chest_asbl"/>

The Configurable Chest is not a machine, but once you have Analog Circuits, you can craft it!

It has 27 configurable slots, and auto-eject functionality! Very useful for automation!

## Polarizer

<Recipe id="modern_industrialization:electric_age/machine/polarizer_asbl"/>

The Polarizer polarizes stuff. It doesn't have many recipes yet, but it is already useful to automate Motors!

## Assembler

<Recipe id="modern_industrialization:electric_age/machine/assembler_asbl"/>

The first machine you'll want to make a lot of! The Assembler allows you to automate almost all recipes, up to 3 per Assembler if you use slot locking.

We strongly suggest that you automate Machine Hull, Analog Circuits, Motors, Pistons, Robot Arms and Conveyor Belts using Assemblers as soon as possible, that will make crafting electric machines basically free!

## Redstone Control Module

<ItemGrid>
  <ItemIcon id="redstone_control_module" />
</ItemGrid>

A Redstone Control Module can be used to control the behavior of electric machines and multiblocks with redstone signals.

Configure the module in your hand, then insert it into the machine or multiblock controller.

## Overclock Upgrades

<ItemGrid>
  <ItemIcon id="basic_upgrade" />
</ItemGrid>

Regular electric machines have an overclock capped at 32 EU/t, and electric multiblocks have an overclock capped at 128 EU/t.

In the machine or multiblock's menu, add upgades to increase its maximum overclock! Check EMI for the exact amounts.
