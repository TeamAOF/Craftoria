---
navigation:
  title: "抽取数量"
  icon: "laserio:textures/gui/buttons/modeextractor.png"
  position: 7
  parent: laserio:mechanics.md
---

# 抽取数量

抽取数量仅在抽取模式和存储模式可用。

这项设置决定一次操作提取的物品（或者流体/能量）的量。

例如，如果设置为每 20 刻抽取 8 个物品，抽取卡将一次抽取 8 个物品，每 20 刻进行一次操作。

在抽取模式和存储模式下，抽取数量默认为 1，最大为 8，除非安装了[卡超频](./overclocker_card.md)。抽取数量上限随安装的超频元件数量变化：
1. 16
2. 32
3. 48
4. 64

如果你想一次抽取 64 个物品，你需要 4 个超频元件。

左键点击使此值加 1，右键减 1。按住 Shift 点击将更改量乘 10，按住 Ctrl 将更改量乘 64。

同时按住 Shift 和 Ctrl 将使更改量乘 640。

例如， Shift 右键将使该值减少 10。

