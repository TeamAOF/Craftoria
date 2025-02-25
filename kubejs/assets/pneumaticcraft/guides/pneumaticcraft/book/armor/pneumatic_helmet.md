---
navigation:
  title: "Pneumatic Helmet"
  icon: "pneumaticcraft:pneumatic_helmet"
  parent: pneumaticcraft:armor.md
item_ids:
  - pneumaticcraft:pneumatic_helmet
---

# Pneumatic Helmet

The *Pneumatic Helmet* is one of the four *Pneumatic Armor* pieces.

For a long time, it was the only piece available.

Crafting a Pneumatic Helmet

<Recipe id="pneumaticcraft:pneumatic_helmet" />

<a name="entity_tracker"></a>
<ItemImage id="pneumaticcraft:entity_tracker_upgrade" />

With an [Entity Tracker](../upgrades.md#entity_tracker) upgrade installed, living creatures within a range of 16 blocks will be automatically tracked, even through walls. When the entity is an aggressive mob you'll get a warning if it targets you. This allows you to prepare for battle (or escape!). You can filter in the GUI the entities which should be tracked with an [Entity Filter](../entity_filter.md).

<ItemImage id="pneumaticcraft:block_tracker_upgrade" />

With a [Block Tracker](../upgrades.md#block_tracker) upgrade installed, special blocks within 30 blocks will be tracked, even through walls. The following blocks are tracked:
- Any inventories (contents will be shown)
- Mob Spawners (spawn time will be shown)
- Silverfish Blocks
- End Portal Frames
- TNT
- Tripwire Hooks

## Block Tracker (cont.)

As some of these blocks are rather common (inventories in a player's house, Silverfish Blocks in a Fortress), the HUD will automatically stop displaying the label if a certain number of blocks of a certain type is reached. You can still get information about a tracked block though, by hovering over it with your crosshair. You can also specify which blocks you want to track by unchecking them in the configuration GUI.

<ItemImage id="pneumaticcraft:coordinate_tracker_upgrade" />

The [Coordinate Tracker](../upgrades.md#coordinate_tracker) upgrade will calculate the shortest path to a selected location, using Minecraft's own pathfinding to accomplish this.

This is very useful when you're lost in a cave and want to get out: open up the options menu (press *$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)*) and select **Navigate to surface**.

<ItemImage id="pneumaticcraft:search_upgrade" />

Do you know the problem of trying to find a certain item in your base, which has many many chests? If so, then the [Search Upgrade](../upgrades.md#item_searcher) is for you. You can search for an item in the GUI: either browse to the item you're looking for with the scrollbar, or type the item name in the search box. When you've found the item, put it in the Target slot.

## Item Searcher (cont.)

Now, any of the selected item lying on the ground or in any inventory in a range of 16 blocks will get a *green glow*. The size of the glow is dependent on the ratio of the item at the location to the total found items.

Note you also require [Entity Tracker](../upgrades.md#entity_tracker) (for items on ground) and/or [Block Tracker](../upgrades.md#block_tracker) (for items in inventories) upgrades in your helmet.

<ItemImage id="pneumaticcraft:dispenser_upgrade" />

A [Dispenser Upgrade](../upgrades.md#dispenser), when installed together with the [Entity Tracker Upgrade](../upgrades.md#entity_tracker), allows you to monitor/debug [Drones](../drone.md). Simply press *$(k:pneumaticcraft.helmet.debugging.drone)$(/k:pneumaticcraft.helmet.debugging.drone)* while looking at a *Drone*. The tracking animation will now have a red border. Now open up the helmet's option window by pressing *$(k:pneumaticcraft.armor.options)$(/k:pneumaticcraft.armor.options)* and navigate to the **Drone Debugging** panel.

<ItemImage id="pneumaticcraft:range_upgrade" />

The [Range Upgrade](../upgrades.md#range) increases the range of the [Entity Tracker](../upgrades.md#entity_tracker) and [Block Tracker](../upgrades.md#block_tracker) by 5 blocks per upgrade. For the Entity Tracker there's no limit, but for the Block Tracker up to 5 upgrades are accepted.

Note that this upgrade increases the helmet's air usage.

<ItemImage id="pneumaticcraft:night_vision_upgrade" />

The [Night Vision Upgrade](../upgrades.md#night_vision) does what it says: lets you see in the dark, for a very minor [air cost](../pressure.md).

<ItemImage id="pneumaticcraft:scuba_upgrade" />

The [SCUBA Upgrade](../upgrades.md#scuba) allows you to breathe underwater, using air from the helmet's reserve to provide you with air. As an added bonus, it provides a face mask which allows far clearer underwater vision; the views can be quite spectacular in conjuction with a [Night Vision Upgrade](../upgrades.md#night_vision).

<ItemImage id="pneumaticcraft:ender_visor_upgrade" />

The [Ender Visor Upgrade](../upgrades.md#ender_visor) is based on advanced *pumpkin* research, and provides a toggleable means to avoid *Enderman* aggro, while mitigating the visual difficulties normally associated with shoving your head in an actual pumpkin.

