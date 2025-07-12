---
navigation:
  title: "Condition: Block Widget"
  icon: "pneumaticcraft:textures/progwidgets/condition_block_piece.png"
  parent: pneumaticcraft:widget_cond.md
---

# Condition: Block Widget

This is a [Condition](./conditions.md) widget.

The *Condition: Block* widget allows you to check an [area](./area.md) for certain blocks. With this you can check if an area contains a full-grown crop, for example. You can filter which blocks are valid by attaching an [Item Filter](./item_filter.md).

The drone will check the block if it can be silk touched, if so it will check if the item filter matches the silk touched block. If it can't be silk touched, the drops of the block will be used to filter.

For example, you can set the filter to Wheat, and it will match the filter as soon as the crop will drop wheat (= full grown).

*Condition: Block Widget*

![](condition_block_piece.png)

