---
navigation:
  title: "标签过滤器"
  icon: "laserio:filter_tag"
  position: 2
  parent: laserio:filters.md
---

# 标签过滤器

标签过滤器允许根据资源的标签进行过滤。

标签是 Minecraft 用于分类相似物品的方法。例如，我们能在右边看到铁锭拥有 “forge:ingots” 标签，金锭、铜锭、锡锭之类的也一样。

标签过滤器可以只用一个词条来过滤所有的锭！

## 标签界面

标签界面

TODO: Unsupported flag 'border'
![](filter_tag.png)

首先，在右上角的栏位放置一个物品。该物品的一系列标签将以<Color hex="#0000ff">蓝色</Color>字显示。点击你想添加的标签，按下“+”按钮。按住 Shift 点击“+”按钮将所有标签加入列表。

要移除标签，选择并点击“-”按钮。

你也可以通过 Shift 点击来自动添加/移除标签。

“X”按钮将清空列表。

此列表采用“或”逻辑，意味着一个物品只需符合列表中任意一个标签就会被匹配到。

标签过滤器不支持 NBT 检测，因为没有意义。

