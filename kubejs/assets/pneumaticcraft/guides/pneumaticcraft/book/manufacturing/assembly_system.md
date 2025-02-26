---
navigation:
  title: "Assembly System"
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

# Assembly System

To be able to craft higher tier materials, you'll need an *Assembly System*; a collection of *Assembly Machines*. These machines communicate with each other when they're horizontally adjacent. Only one machine of each type can exist (with the exception of the *Assembly IO Unit*, see below). The assembly line runs on [compressed air](../base_concepts/pressure.md), but you only need to suuply air to the Assembly Controller to power the whole system.

<ItemImage id="pneumaticcraft:assembly_controller" />

The brain of the *Assembly System*. It accepts [programs](./assembly_programs.md) which tell the *Controller* how to control the other *Assembly Machines*.

The Controller's display shows diagnostics information about the its status. Open the GUI to see what's happening.

<ItemImage id="pneumaticcraft:assembly_io_unit_import" />

The *IO Unit* is the connection between inventories and the *Assembly Platform*. This robot arm can reach diagonally.

The IO Unit can either export finished items, or import items to be used in crafting. Any inventory can be used: vanilla *chests* or modded inventory blocks.

## Assembly IO Unit (cont.)

An *Assembly System* must include *two* *IO Units*; one import unit, and one export unit: <Color id="gold">orange</Color> means it's an export unit, <Color id="blue">blue</Color> means it's an import unit. For an *IO Unit* to work it needs to be able to reach an *Assembly Platform*, as well as an inventory to extract or store items (depending on its mode).

<ItemImage id="pneumaticcraft:assembly_platform" />

The *Assembly Platform* is a worktable for the other *Assembly Machines*. It is used to hold items in place when drilling/lasering.

The *Assembly Platform* is best positioned centrally, as all other machines need to access it.

<ItemImage id="pneumaticcraft:assembly_drill" />

The *Assembly Drill* is one of the *Assembly Machines* which do the actual work. Its diamond drillhead is able to drill through the toughest materials.

The *Assembly Drill* can *not* reach diagonally, so it must be located directly adjacent to an *Assembly Platform*.

<ItemImage id="pneumaticcraft:assembly_laser" />

The *Assembly Laser* is able to cut through materials, used to slice an item up, or to cut off edges.

Like the *Assembly Drill*, this machine can *not* reach diagonally.

## Using

To craft items with the *Assembly System*, put an [Assembly Program](./assembly_programs.md) in the *Assembly Controller*, and put the required items in the input inventory.

Any items which match a recipe known to the controller and inserted program will be automatically processed.

## CraftTweaker

The *Assembly System* has [CraftTweaker](https://minecraft.curseforge.com/projects/crafttweaker) support: recipes can be added and removed. Follow the link below for more information.

[CraftTweaker Docs](https://docs.blamejared.com/1.16/en/mods/PneumaticCraft-Repressurized/AssemblySystem)


<Recipe id="pneumaticcraft:assembly_controller" />

<Recipe id="pneumaticcraft:assembly_platform" />



<Recipe id="pneumaticcraft:assembly_io_unit_import" />

<Recipe id="pneumaticcraft:assembly_io_unit_export" />



<Recipe id="pneumaticcraft:assembly_io_unit_import_from_export" />

<Recipe id="pneumaticcraft:assembly_io_unit_export_from_import" />



<Recipe id="pneumaticcraft:assembly_drill" />

<Recipe id="pneumaticcraft:assembly_laser" />

