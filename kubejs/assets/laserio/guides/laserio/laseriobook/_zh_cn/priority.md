---
navigation:
  title: "优先级"
  icon: "laserio:textures/gui/buttons/modeinserter.png"
  position: 3
  parent: laserio:mechanics.md
---

# 优先级

优先级只在输入模式可用。

优先级允许你控制输入卡的工作顺序。默认情况下，输入卡工作在“最近优先”模式，意味着抽取卡将试图最先输入到最近的容器。

通过更改输入卡的优先级，你可以决定哪个容器最先接受输入。拥有最高优先级的输入卡会被最先输入，例如，10 的优先级比 0 高，而 0 又 比 -10 高。

如果多个容器处于同一个优先级，则采用“最近优先”原则。

左键点击使优先级加 1，右键减 1。按住 Shift 使改变量乘 10，按住 Ctrl 使改变量乘 64。

同时按住 Shift 和 Ctrl 使改变量乘 640。

例如，Shift 右键点击将使优先级减少 10。

