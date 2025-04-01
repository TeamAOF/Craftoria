---
navigation:
  title: 'エンチャントパワー'
  icon: 'minecraft:experience_bottle'
  parent: apotheosis:enchanting/table.md
---

# エンチャントパワー

エンチャントの手順の中では、経験値とラピスラズリを消費する。

そして、複雑な計算を経てエンチャントがランダムに選ばれる。

この章ではそのプロセスについて説明する。

まず、エンチャントがどのように選択されるかを説明する。

各エンチャントは<Color id="dark_purple">パワー関数</Color>を有している。この関数は、どの程度の<Color id="dark_purple">最終的なエンチャントレベル</Color>によって何レベルのエンチャントが利用可能になるかを管理している。

この関数により使用可能なエンチャントをリストアップした後、それぞれの重みに基づいてランダムにエンチャントが選択される。

<Color id="dark_purple">最終的なエンチャントレベル</Color>は以下の手順で計算される。

まず、あなたがエンチャントに費やしたレベルである<Color id="gold">基本能力</Color>がある。

そして次に、<Color id="red">クアンタ</Color>と調和要素が<Color id="gold">基本能力</Color>を調整し、<Color id="dark_purple">最終的なエンチャントレベル</Color>が算出される。

各ステータスがどのように<Color id="gold">基本能力</Color>変化させるかは、[<Color id="red">クアンタ</Color>](./stats.md#quanta)及び[調和](./stats.md#rectification)のセクションを参照のこと。

通常は<Color id="dark_purple">最終的なエンチャントレベル</Color>が高いほど、より高いレベルのエンチャントが利用可能になる。
