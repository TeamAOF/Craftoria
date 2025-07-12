---
navigation:
  title: "Logistics Frames"
  icon: "pneumaticcraft:logistics_frame_passive_provider"
  parent: pneumaticcraft:logistics.md
item_ids:
  - pneumaticcraft:logistics_frame_active_provider
  - pneumaticcraft:logistics_frame_passive_provider
  - pneumaticcraft:logistics_frame_storage
  - pneumaticcraft:logistics_frame_default_storage
  - pneumaticcraft:logistics_frame_requester
---

# Logistics Frames

*Logistics Frames* are attachable gadgets which are placed onto inventories or tanks to mark them as part of a *Logistics System*.

Placed frames can be configured by *right-clicking* with a [Logistics Configurator](../tools/logistics_configurator.md), and removed by *sneak+right-clicking* with the Configurator. Frames can also be configured in-hand by right-clicking the item form.

The following frame properties can be configured:
- All Frames support *filtering* to control what items/fluids they will provide or accept. See also [Tag Filters](../tools/tag_filter.md).
- The *Filter* side tab lets you configure whether filters match by *item NBT* or *mod ID*, and also whether the filter should be applied as a whitelist (default) or blacklist.


- For [Requester Frames](#requester), the *Minimum Order Size* tab allows you to configure the minimum amount of items or fluid that will be moved at a time; useful to prevent drones making constant trips with tiny payloads.
- Finally, all frames can be configured to be *invisible* to players unless they are holding a Logistics item (frame or configurator). Note: invisible frames pass any player left-clicks on to the block beneath.

<a name="active_provider"></a>
## Active Provider Frame

The *Active Provider Frame* provides items/fluids to [Requester Frames](#requester), [Storage Frames](#storage) and [Default Storage Frames](#default_storage).

<Recipe id="pneumaticcraft:logistics_frame_active_provider" />

<a name="passive_provider"></a>
## Passive Provider Frame

The *Passive Provider Frame* provides items/fluids to [Requester Frames](#requester) only.

<Recipe id="pneumaticcraft:logistics_frame_passive_provider" />

<a name="storage"></a>
## Storage Frame

*Storage Frames* can receive items/fluids from [Active Provider Frames](#active_provider) and supply items to [Requester Frames](#requester).

<Recipe id="pneumaticcraft:logistics_frame_storage" />

<a name="default_storage"></a>
## Default Storage Frame

*Default Storage Frames* can receive items/fluids from [Active Provider Frames](#active_provider) and supply resources to [Requester Frames](#requester) and [Storage Frames](#storage). They have a lower priority than Storage Frames, which will be always be used first if possible.

<Recipe id="pneumaticcraft:logistics_frame_default_storage" />

<a name="requester"></a>
## Requester Frame

*Requester Frames* can request items/fluids from any other framed inventory. For these frames, use the configuration GUI to tell the frame how much of each item or fluid to try to keep *stocked*.

<Recipe id="pneumaticcraft:logistics_frame_requester" />

