---
navigation:
  title: "UV Light Box"
  icon: "pneumaticcraft:uv_light_box"
  parent: pneumaticcraft:manufacturing.md
item_ids:
  - pneumaticcraft:uv_light_box
---

# UV Light Box

The *UV Light Box* is a machine in which you can expose [PCB's](../components/pcb.md) to UV light, at certain places (which is determined by the [Blueprint](../components/pcb_blueprint.md) laying on top of the PCB).

The exposure process takes a maximum of 10 minutes; less if you add [Speed Upgrades](../base_concepts/upgrades.md#speed) to the machine.

After the full 10 minutes, you'll have a 100% chance that the *PCB* will be successfully etched in [Etching Acid](./etching_acid.md). You can however expose the PCB for a shorter time, which will result in a lower chance of the PCB successfully being etched.

Note that exposure progress is faster when the total progress is lower, and slower toward the end.

## Threshold Automation

You can manually adjust the completion threshold via the GUI slider, but it's also possible to set this via a redstone signal; set the redstone mode to *Interpolate Threshold*. In this mode, the threshold is fixed to 25% + 5% per signal level (although a signal of 0 disables the machine, so 30%-100% in effect).

This may be handy if you want to set the threshold of many lightboxes at once.

Crafting a UV Light Box

<Recipe id="pneumaticcraft:uv_light_box" />

