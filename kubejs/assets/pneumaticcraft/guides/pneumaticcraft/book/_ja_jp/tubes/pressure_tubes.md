---
navigation:
  title: "圧力チューブ"
  icon: "pneumaticcraft:pressure_tube"
  parent: pneumaticcraft:tubes.md
item_ids:
  - pneumaticcraft:pressure_tube
---

# 圧力チューブ

圧力チューブはコンプレッサーと機械の間で圧縮空気を輸送するための<Color hex="#228">PneumaticCraft: Repressurized</Color>の主要なデバイスです。

接続されていないチューブからは空気が漏れます。ただし、チューブの側面は[空気圧レンチ](../tools/pneumatic_wrench.md)で右クリックすることで開閉を切り替えることができます。他のMODのレンチも機能する場合があります。

## チューブ！

*2本の圧力チューブと[圧力ゲージ](./pressure_gauge_module.md)*を*[エアコンプレッサー](../compressors/air_compressor.md)**と[空気砲](../machines/air_cannon.md)*で接続

TODO: Unsupported flag 'border'
![](pressure_tubes.png)

圧力チューブにはチューブにさまざまな機能を追加する取り付け可能なコンポーネントである[チューブモジュール](./tube_modules.md)を取り付けることができます。詳細については各モジュールの個別のページを参照してください。

圧力チューブは[迷彩塗布器](../tools/camo_applicator.md)で偽装することができます。

チューブには3つの[ティア](../base_concepts/pressure_tiers.md)があります:

- ティア1のチューブは最大5バールの圧力に耐えることができ、1,000mLの空気を収容できます。
- ティア1.5の(強化)チューブは最大10バールの圧力に耐えることができ、1,000mLの空気を収容できます。
- ティア2の(高機能)チューブは最大20バールの圧力に耐えることができ、4,000mLの空気を収容できます。

圧力チューブのクラフト

<Recipe id="pneumaticcraft:pressure_tube" />

**TODO:** Unsupported Patchouli page type **pneumaticcraft:thermo_plant**

```
{"type":"pneumaticcraft:thermo_plant","recipe":"pneumaticcraft:thermo_plant/reinforced_pressure_tube"}
```

<a name="advanced"></a>
**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"anchor":"advanced","type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/advanced_pressure_tube"}
```

