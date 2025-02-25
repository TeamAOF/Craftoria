---
navigation:
  title: "附魔属性"
  icon: "minecraft:bookshelf"
  parent: apotheosis:enchanting/table.md
---

# 附魔属性

有了神化，附魔不仅仅取决于等级。

目前有五个新的附魔属性。

提供附魔属性的方块将在其工具提示上显示。

## 位阶

<Color hex="#3DB53D">位阶</Color>是附魔的第一重要的属性。

每点<Color hex="#3DB53D">位阶</Color>可使附魔的最高附魔等级提高2级。

有些方块只能提供<Color hex="#3DB53D">位阶</Color>到某个最大值。

<a name="quanta"></a>
## 量子化

<Color hex="#FC5454">量子化</Color>是一个第二重要的属性。它控制附魔的浮动程度。

在附魔的时候，你有一个<Color id="gold">基础附魔威力</Color>，这个值是你附魔所花费的等级，然后，在所有调整之后你会有一个(#CC00CC)最终附魔威力。 量子化是附魔威力调整的其中一个程序。

选择一个值，在<Color id="dark_red">1-量子化</Color>和<Color id="blue">1+量子化</Color>之间。

你的<Color hex="#CC00CC">最终附魔威力</Color>等于该值乘以你的<Color id="gold">基础附魔威力</Color>。

越高的<Color hex="#FC5454">量子化</Color>值使附魔威力的浮动的范围更大，这意味着你得到的附魔将与<Color hex="#CC00CC">最终附魔威力</Color>越不一致。

## 阿卡那

<Color hex="#A800A8">阿卡那</Color>是一个第二重要的属性。它控制着稀有度的权重，在某些阈值下会保证你得到额外的魔咒。

在25%的<Color hex="#A800A8">阿卡那</Color>下，你总能得到至少两个魔咒。在75%时，你总能得到三个。

默认情况下，稀有度的权重如下：

普通：10
罕见：5
珍贵：3
非常珍贵：1

每增加10%的<Color hex="#A800A8">阿卡那</Color>就会改变权重，最终，稀有度顺序会完全反转。

悬停在<Color hex="#A800A8">阿卡那</Color>条上会显示当前权重。

<a name="rectification"></a>
## 校准

校准是一个第三重要的属性。它直接影响到<Color hex="#FC5454">量子化</Color>调整的下限。

回顾一下，你的<Color id="dark_red">最小附魔威力</Color>等于<Color id="dark_red">(1-量子化)</Color>。

有了校准后（R），你的<Color id="dark_red">最小附魔威力</Color>等于<Color id="dark_red">[1-(1-R)×量子化]</Color>。

如果这没有什么意义，别担心。

只要知道较高的校准值总是一件好事。

你也可以有负的校准值，这总是一件坏事。

## 线索

线索是另一个第三重要的属性。

每条线索允许你在预览窗口中看到一条额外的附魔。

当你能看到每个可用的魔咒时，文字会有轻微的变化。

你也可以减少至0条线索，这样就看不到附魔线索了。

