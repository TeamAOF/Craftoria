---
navigation:
  title: "Enchanting Stats"
  icon: "minecraft:bookshelf"
  parent: apotheosis:enchanting/table.md
---

# Enchanting Stats

With Apotheosis, enchanting is dependent on more than just levels.

There are currently five new enchanting stats.

Blocks that provide enchanting stats will have them on their tooltip.

## Eterna

<Color hex="#3DB53D">Eterna</Color> is the primary stat of enchanting.

Each point of <Color hex="#3DB53D">Eterna</Color> increases the maximum enchanting level by two.

Some blocks can only provide <Color hex="#3DB53D">Eterna</Color> up to a certain maximum value.

<a name="quanta"></a>
## Quanta

<Color hex="#FC5454">Quanta</Color> is a secondary stat. It controls enchanting variance.

During enchanting, you have a <Color id="gold">Base Power</Color>, which is the level you spent to enchant with, and then a <Color hex="#CC00CC">Final Power</Color>, after all modifications.

<Color hex="#FC5454">Quanta</Color> is one of the factors in the modification process.

A value is selected, between <Color id="dark_red">1 - Quanta</Color> and <Color id="blue">1 + Quanta</Color>.

Your <Color hex="#CC00CC">Final Power</Color> is equal to that value multiplied by your <Color id="gold">Base Power</Color>.

Higher <Color hex="#FC5454">Quanta</Color> values increase the power range, which means your enchantments are less consistent in their <Color hex="#CC00CC">Final Power</Color>.

## Arcana

<Color hex="#A800A8">Arcana</Color> is a secondary stat. It controls the rarity weights, and at certain thresholds will guarantee you get additional enchantments.

At 25% <Color hex="#A800A8">Arcana</Color>, you will always receive at least two enchantments. At 75%, you will always receive three.

By default, the rarities have the following weights:

Common: 10
Uncommon: 5
Rare: 3
Very Rare: 1

Every 10% of <Color hex="#A800A8">Arcana</Color> changes the weights, eventually becoming fully inverted.

Hovering the <Color hex="#A800A8">Arcana</Color> Bar will show the current weights.

<a name="rectification"></a>
## Rectification

Rectification is a tertiary stat. It directly impacts the lower bound of <Color hex="#FC5454">Quanta</Color> modifications.

Recall that your <Color id="dark_red">Min Power</Color> is equal to <Color id="dark_red">1 - Quanta</Color>.

With Rectification (R), your <Color id="dark_red">Min Power</Color> is equal to <Color id="dark_red">1 - (1 - R) * Quanta</Color>.

If that doesn't make a ton of sense, don't worry about it.

Just know that higher Rectification values are always a good thing.

You can also have negative Rectification, which is always bad.

## Clues

Clues are another tertiary stat.

Each clue allows you to see one additional item in the preview window.

When you can see every available enchantment, the text will change slightly.

You can also drop to zero clues, and be able to see nothing.

