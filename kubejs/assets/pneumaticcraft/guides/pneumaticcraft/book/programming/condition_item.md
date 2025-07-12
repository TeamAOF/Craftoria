---
navigation:
  title: "Condition: Item Filter Widget"
  icon: "pneumaticcraft:textures/progwidgets/condition_item.png"
  parent: pneumaticcraft:widget_cond.md
---

# Condition: Item Filter Widget

This is a [Condition](./conditions.md) widget.

The *Condition: Item Filter* widget allows you to compare [Item Filters](./item_filter.md). This is mostly useful when you are using Item Filters with [variables](./variables.md).

The widget examines the item in a single [Item Filter](./item_filter.md) widget connected on the top row, right-hand side, and checks if that item matches the filter specified by *Item Filter(s)* on the second row.

As usual, use the right-hand side to whitelist (meaning the item should match this filter), and left-hand side to blacklist (saying that this item should *not* match this filter). If it matches, the condition is evaluated *true*. Otherwise, the condition is evaluated *false*.

You can add more than one item to check. By connecting multiple second-row [Item Filters](./item_filter.md) on the right-hand side, the condition will only evaluate *true* if *all* items match the filter. [Item Filters](./item_filter.md) placed on the left-hand side must *not* match the Filter for the condition to be evaluated *true*.

*Condition: Item Filter Widget*

![](condition_item.png)

