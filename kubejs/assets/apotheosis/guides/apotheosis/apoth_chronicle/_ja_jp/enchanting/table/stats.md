---
navigation:
  title: 'エンチャント属性'
  icon: 'minecraft:bookshelf'
  parent: apotheosis:enchanting/table.md
---

# エンチャント属性

Apotheosisでは、エンチャント結果はレベル以外によっても変化する。

現在、5つの新しいエンチャント属性がある。

エンチャント属性を提供するブロック（ロウソクなど）は、ツールチップに属性とその値が表示される。

## エテルナ

<Color id="green">エテルナ</Color>はエンチャントのメイン属性となっている。

<Color id="green">エテルナ</Color>1ポイントにつき、最大エンチャントレベルを2上昇させる。

いくつかのブロックによって、<Color id="green">エテルナ</Color>をその時の上限値まで底上げできる。

<a name="quanta"></a>

## クアンタ

<Color id="red">クアンタ</Color>は第二属性であり、エンチャントの変化の幅を制御する。

エンチャントのプロセスには、費やしたレベルである<Color id="gold">基本能力</Color>と、様々な調整の結果として得られる<Color id="dark_purple">最終的なエンチャントレベル</Color>という要素がある。

<Color id="red">クアンタ</Color>はこの調整プロセスにおける因子の1つである。

<Color id="dark_red">1 - クアンタ</Color>から<Color id="blue">1 + クアンタ</Color>の間から値が選ばれる。

<Color id="dark_purple">最終的なエンチャントレベル</Color>は、その値と<Color id="gold">基本能力</Color>の積となる。

<Color id="red">クアンタ</Color>が大きくなるとその幅も大きくなるので、それに伴い<Color id="dark_purple">最終的なエンチャントレベル</Color>は不安定になる。

## アルカナ

もう1つの第二属性は<Color id="dark_purple">アルカナ</Color>と呼ばれる。これはレアリティの重み付けを制御し、 あるしきい値ごとに追加のエンチャントが得られることを保証する。

例えば<Color id="dark_purple">アルカナ</Color>が25%の場合、最低でも2つのエンチャントが付与される。また75%の場合は、その数は3つになる。

基本設定としては、レアリティには以下の重み付けがなされている。

コモン: 10
アンコモン: 5
レア: 3
ベリーレア: 1

<Color id="dark_purple">アルカナ</Color>が10%増えるごとに重みは変化していき、最終的に完全に逆転する（ベリーレアの重みが最も大きくなる）。

<Color id="dark_purple">アルカナ</Color>バーにカーソルを合わせると、現在の重み付けを見ることができる。

<a name="rectification"></a>

## 調和

<Color hex="#CCCC33">調和</Color>は第三属性であり、<Color id="red">クアンタ</Color>調整の下限値に直接影響を与える。

上述のとおり<Color id="dark_red">最小出力</Color>は<Color id="dark_red">1 - クアンタ</Color>に等しい。ここで

<Color hex="#CCCC33">調和</Color>要素（Rと置く）を取り入れると、<Color id="dark_red">最小出力</Color>を求める計算式は、<Color id="dark_red">1 - (1 - R) \* クアンタ</Color>と書ける。

ここに書いてある全てを理解できなくてもあまり大きな問題にはならないだろう。

単純に、高い<Color hex="#CCCC33">調和</Color>値は良いことだ、と覚えておくとよいだろう。

<Color hex="#CCCC33">調和</Color>要素は負の値をとることもあるが、これはいつも悪い結果に繋がる。

## ヒント

<Color hex="#00AAAA">エンチャントのヒント</Color>はもう１つの第三属性である。

<Color hex="#00AAAA">エンチャントのヒント</Color>の値が1増えると、結果のプレビューに表示されるエンチャントの数が1つ増える。

<Color hex="#00AAAA">エンチャントのヒント</Color>によって付与可能なエンチャント数の上限まで見通せているとき、表示テキストが少し変化するだろう。

<Color hex="#00AAAA">エンチャントのヒント</Color>の値はゼロにすることも可能だが、そうなるとエンチャントのプレビューには何も表示されない。
