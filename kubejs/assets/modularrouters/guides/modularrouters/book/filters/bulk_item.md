---
navigation:
  title: "Bulk Item Filter"
  icon: "modularrouters:bulk_item_filter"
  parent: modularrouters:filters.md
item_ids:
  - modularrouters:bulk_item_filter
---

# Bulk Item Filter

This filter allows for high-performance matching of up to 54 different items, including optional NBT matching. The Bulk Item Filter can be configured in a few different ways:


- *Sneak+Right-click* the filter against any inventory to merge a copy of that inventory's contents into the filter.


- *Right-click* the filter to open a GUI showing the items currently in the filter. You can add (ghost copies of) items to the filter here, click items to remove them, or press the red **<Color id="dark_red">X</Color>** button to clear the filter completely.


- When the filter is in a module that is in a router, you can open the filter's GUI by middle-clicking it, or pressing **<Color id="dark_red">[$(k:modularrouters.configure)]$(/k:modularrouters.configure)</Color>** over it.

**If** the module has a valid inventory targeted, two extra buttons appear on the GUI: a green **<Color id="dark_green">+</Color>** button to *merge* the target inventory's items, and a blue **<Color id="dark_blue">=</Color>** button to *load* the target inventory's items (overwriting the filter's current contents).

This last configuration method is particularly useful combined with a [Sender Module](../sender_2.md) to implement a sorting system, since the Bulk Item Filter will remember what should be in an inventory, even if the actual inventory later gets emptied.



<Recipe id="modularrouters:bulk_item_filter" />

