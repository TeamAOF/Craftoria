---
navigation:
  title: 'Flow Detector Module'
  icon: 'pneumaticcraft:flow_detector_module'
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:flow_detector_module
---

# Flow Detector Module

The Flow Detector Tube Module is an [inline](./tube_modules.md#inline) module which measures the _airflow_ through a tube. It emits a <Color id="red">redstone signal</Color> as result of this, using the following formula:

<Color id='dark_green'>0.2 \* flow (mL/tick)</Color>

E.g. with 20mL/tick of air flowing, the signal level will be 20\*0.2=4.

Note that _flow_ is a different physical quantity to [pressure](../base_concepts/pressure.md). Flow is the amount of air traveling through a tube per tick. So if you have (say) an [Elevator](../machines/elevators.md) which isn't running, the flow will be 0, but when it runs it will be consuming air, so the flow will be non-zero. So this module can be used to detect if a machine is using air.

The Flow Detector Module does not accept an [Module Expansion Card](./module_expansion_card.md).

Crafting a Flow Detector Module

<Recipe id="pneumaticcraft:flow_detector_module" />
