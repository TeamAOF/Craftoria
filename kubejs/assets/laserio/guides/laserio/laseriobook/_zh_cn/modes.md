---
navigation:
  title: "模式"
  icon: "laserio:textures/gui/buttons/modestocker.png"
  position: 1
  parent: laserio:mechanics.md
---

# 模式

模式决定卡的行为。下面的内容描述目前可用的模式。

每种卡（物品/流体/能量）都支持以下 3 种模式，以物品卡为例。

红石卡支持的是一套不同的模式。

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:0b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="" />

输入模式卡是抽取模式卡的有效目标。

存储模式卡会试图从输入模式卡拉取。

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:1b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="" />

抽取模式卡试图从相邻的方块提取对象。以物品为例，物品会从箱子被抽取并发送到一个输入卡。

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:2b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="" />

存储模式卡试图寻找它们过滤器中设定的物品，并从网络中其他输入模式节点拉取物品。

存储模式卡需要过滤器才能起效。

