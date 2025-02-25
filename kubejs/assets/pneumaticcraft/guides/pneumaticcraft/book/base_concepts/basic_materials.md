---
navigation:
  title: "Basic Materials"
  icon: "pneumaticcraft:ingot_iron_compressed"
  parent: pneumaticcraft:base_concepts.md
item_ids:
  - pneumaticcraft:compressed_iron_block
---

# Basic Materials

<Color hex="#228">PneumaticCraft: Repressurized</Color> does not generate any extra ores in the ground. To get started, you just need *Iron Ingots*, which you will convert into *Compressed Iron Ingots*, used in many recipes throughout the mod.

To do this, throw your *Iron Ingots* on the ground, and cause a nearby explosion. *TNT* will do the trick, but any other explosion works too.

*      Step back*

![](compressed_iron.png)

<a name="compressed_iron_ingot"></a>
<ItemImage id="pneumaticcraft:ingot_iron_compressed" />

Warning: as a side effect of the explosion you will lose around 20% of your ingots. To avoid this, you can also craft *Compressed Iron Ingots* in a [Pressure Chamber](../pressure_chamber.md). However, to be able to craft the *Pressure Chamber* itself you'll need some *Compressed Iron Ingots*, so a little initial loss is unavoidable.

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/compressed_iron_ingot"}
```

<a name="compressed_iron_block"></a>
The *Block of Compressed Iron* is an excellent [Heat Conductor](./heat.md) and can be used to provide more faces to attach [Heat Sinks](../heat_sink.md) to heat-producing machines. However, see also [Heat Pipes](../heat_pipe.md).

<Recipe id="pneumaticcraft:compressed_iron_block_from_ingot" />

**TODO:** Unsupported Patchouli page type **pneumaticcraft:pressure_chamber**

```
{"type":"pneumaticcraft:pressure_chamber","recipe":"pneumaticcraft:pressure_chamber/compressed_iron_block"}
```

