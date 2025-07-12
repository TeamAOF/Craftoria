---
navigation:
  title: "Armor"
  icon: "minecraft:iron_chestplate"
  parent: apotheosis:adventure/attributes.md
---

# Armor

<Color id="blue">Armor</Color> is a measure of how resistant you are to physical damage.

Usually provided by armor items, and shields.

How much damage you take is a function of the incoming damage and your armor.

The first component of the formula is the 
A-value, equal to <Color id="blue">10 + (damage - 20) / 2</Color>, with a minimum value of <Color id="blue">10</Color>.

You then reduce damage equal to 
<Color id="blue">A / (A + armor)</Color>.

The aforementioned formula is not the one used by Vanilla Minecraft, as Apotheosis replaces it.

For vanilla armor and damage values, you will find yourself taking slightly less damage.

For high armor and damage values, armor will be significantly less effective.

The goal of this change is to reduce invulnerabilty at high levels, and make <Color id="blue">Protection</Color> and <Color id="blue">Resistance</Color> more impactful.

It also makes fights where both parties are heavily armored significantly more active.

