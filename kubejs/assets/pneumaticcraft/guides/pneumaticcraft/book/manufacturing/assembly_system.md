---
navigation:
  title: 'Assembly System'
  icon: 'pneumaticcraft:assembly_controller'
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:assembly_controller
  - pneumaticcraft:assembly_platform
  - pneumaticcraft:assembly_io_unit_import
  - pneumaticcraft:assembly_io_unit_export
  - pneumaticcraft:assembly_drill
  - pneumaticcraft:assembly_laser
---

# Assembly System

To be able to craft higher tier materials, you'll need an _Assembly System_; a collection of _Assembly Machines_. These machines communicate with each other when they're horizontally adjacent. Only one machine of each type can exist (with the exception of the _Assembly IO Unit_, see below). The assembly line runs on [compressed air](../base_concepts/pressure.md), but you only need to suuply air to the Assembly Controller to power the whole system.

<ItemImage id="pneumaticcraft:assembly_controller" />

The brain of the _Assembly System_. It accepts [programs](./assembly_programs.md) which tell the _Controller_ how to control the other _Assembly Machines_.

The Controller's display shows diagnostics information about the its status. Open the GUI to see what's happening.

<ItemImage id="pneumaticcraft:assembly_io_unit_import" />

The _IO Unit_ is the connection between inventories and the _Assembly Platform_. This robot arm can reach diagonally.

The IO Unit can either export finished items, or import items to be used in crafting. Any inventory can be used: vanilla _chests_ or modded inventory blocks.

## Assembly IO Unit (cont.)

An _Assembly System_ must include _two_ _IO Units_; one import unit, and one export unit: <Color id="gold">orange</Color> means it's an export unit, <Color id="dark_red">blue</Color> means it's an import unit. For an _IO Unit_ to work it needs to be able to reach an _Assembly Platform_, as well as an inventory to extract or store items (depending on its mode).

<ItemImage id="pneumaticcraft:assembly_platform" />

The _Assembly Platform_ is a worktable for the other _Assembly Machines_. It is used to hold items in place when drilling/lasering.

The _Assembly Platform_ is best positioned centrally, as all other machines need to access it.

<ItemImage id="pneumaticcraft:assembly_drill" />

The _Assembly Drill_ is one of the _Assembly Machines_ which do the actual work. Its diamond drillhead is able to drill through the toughest materials.

The _Assembly Drill_ can _not_ reach diagonally, so it must be located directly adjacent to an _Assembly Platform_.

<ItemImage id="pneumaticcraft:assembly_laser" />

The _Assembly Laser_ is able to cut through materials, used to slice an item up, or to cut off edges.

Like the _Assembly Drill_, this machine can _not_ reach diagonally.

## Using

To craft items with the _Assembly System_, put an [Assembly Program](./assembly_programs.md) in the _Assembly Controller_, and put the required items in the input inventory.

Any items which match a recipe known to the controller and inserted program will be automatically processed.

## CraftTweaker

The _Assembly System_ has [CraftTweaker](https://minecraft.curseforge.com/projects/crafttweaker) support: recipes can be added and removed. Follow the link below for more information.

[CraftTweaker Docs](https://docs.blamejared.com/1.16/en/mods/PneumaticCraft-Repressurized/AssemblySystem)

<Recipe id="pneumaticcraft:assembly_controller" />

<Recipe id="pneumaticcraft:assembly_platform" />

<Recipe id="pneumaticcraft:assembly_io_unit_import" />

<Recipe id="pneumaticcraft:assembly_io_unit_export" />

<Recipe id="pneumaticcraft:assembly_io_unit_import_from_export" />

<Recipe id="pneumaticcraft:assembly_io_unit_export_from_import" />

<Recipe id="pneumaticcraft:assembly_drill" />

<Recipe id="pneumaticcraft:assembly_laser" />
