---
navigation:
  title: "Inspection Filter"
  icon: "modularrouters:inspection_filter"
  parent: modularrouters:filters.md
item_ids:
  - modularrouters:inspection_filter
---

# Inspection Filter

This filter allows for matching of items by various miscellaneous integer properties of the item. The current inspections supported are:
- For fluid container items (buckets, tanks...), the fluid level as a percentage.
- For energy container items (batteries, powered tools...), the energy level as a percentage.
- The highest enchantment level of enchantments on the item (can be used to filter out enchanted items, e.g. from a mob farm)
- The durability of items (tools, weapons) as a percentage of the max durability.
- For edible items, the food value as the number of half-shanks restored (e.g. steak has a value of 8).

For items which don't have the inspected property at all, the returned value will always be -1, e.g. a piece of *Cobblestone* has a durability value of -1. This is distinct from a 0 return, since a tool with \<1% durability remaining would return a value of 0.

This filter can be useful to automatically pull out damaged or discharged items for repair/recharging, etc.

<Recipe id="modularrouters:inspection_filter" />
