---
navigation:
  title: "For Each Item Widget"
  icon: "pneumaticcraft:textures/progwidgets/for_each_item.png"
  parent: pneumaticcraft:widget_flow.md
---

# For Each Item Widget

This advanced widget will execute a subroutine for every connected [Item Filter](./item_filter.md). For each filter, it will set the specified variable to that filter, and jump to the [Label](./label.md) which matches the connected [Text](./text.md) widget. When that routine is done executing (when it reaches the end of a program where it would usually jump back to [Start](./start.md)), it will come back to this widget and do the same for the next *Item Filter*.

## Breaking

You can break out of the loop by setting the item variable used by the *For Each Item* to an empty filter (use the [Item Assign](./item_assign.md) widget to do this). Next time, when the program jumps back to the *For Each Item*, it will notice this and cancel further traversal of filters.

*For Each Item Widget*

![](for_each_item.png)

