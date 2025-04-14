---
navigation:
  title: '附魔威力'
  icon: 'minecraft:experience_bottle'
  parent: apotheosis:enchanting/table.md
---

# 附魔威力

在附魔过程中，你要花费经验和青金石来附魔一件物品。

在此基础上，使用一些复杂的公式随机选择魔咒。

本章节将解释这一过程。

首先，我们来看看如何选择魔咒。

每个魔咒都有一个<Color id="dark_purple">附魔威力函数</Color>，它控制着需要多少<Color id="dark_purple">最终附魔威力</Color>,才能使一个特定的附魔等级可用。

一旦所有可用的魔咒都被程序收集，系统会根据其权重随机选择其中一些魔咒进行附魔。

计算<Color id="dark_purple">最终附魔威力</Color>的步骤如下：

首先，你有一个<Color id="gold">基础附魔威力</Color>，这是你在附魔时花费的等级。

然后，<Color id="red">量子化</Color>和校准修正你的<Color id="gold">基础附魔威力</Color>，得到你的<Color id="dark_purple">最终附魔威力</Color>。

每个属性如何调整你<Color id="gold">基础附魔威力</Color>的细节可以在[<Color id="red">量子化</Color>](./stats.md#quanta)和[校准](./stats.md#rectification)条目中找到。

通常，更高的<Color id="dark_purple">最终附魔威力</Color>会让你获得更高等级的魔咒。
