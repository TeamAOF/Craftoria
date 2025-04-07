---
navigation:
  title: 'Enchanting Stats'
  icon: 'minecraft:bookshelf'
  parent: apotheosis:enchanting/table.md
---

# Enchanting Stats

With Apotheosis, enchanting is dependent on more than just levels.

There are currently five new enchanting stats.

Blocks that provide enchanting stats will have them on their tooltip.

## Eterna

<Color id="green">Eterna</Color> is the primary stat of enchanting.

Each point of <Color id="green">Eterna</Color> increases the maximum enchanting level by two.

Some blocks can only provide <Color id="green">Eterna</Color> up to a certain maximum value.

<a name="quanta"></a>

## Quanta

<Color id="red">Quanta</Color> is a secondary stat. It controls enchanting variance.

During enchanting, you have a <Color id="gold">Base Power</Color>, which is the level you spent to enchant with, and then a <Color id="dark_purple">Final Power</Color>, after all modifications.

<Color id="red">Quanta</Color> is one of the factors in the modification process.

A value is selected, between <Color id="dark_red">1 - Quanta</Color> and <Color id="blue">1 + Quanta</Color>.

Your <Color id="dark_purple">Final Power</Color> is equal to that value multiplied by your <Color id="gold">Base Power</Color>.

Higher <Color id="red">Quanta</Color> values increase the power range, which means your enchantments are less consistent in their <Color id="dark_purple">Final Power</Color>.

## Arcana

<Color id="dark_purple">Arcana</Color> is a secondary stat. It controls the rarity weights, and at certain thresholds will guarantee you get additional enchantments.

At 25% <Color id="dark_purple">Arcana</Color>, you will always receive at least two enchantments. At 75%, you will always receive three.

By default, the rarities have the following weights:

Common: 10
Uncommon: 5
Rare: 3
Very Rare: 1

Every 10% of <Color id="dark_purple">Arcana</Color> changes the weights, eventually becoming fully inverted.

Hovering the <Color id="dark_purple">Arcana</Color> Bar will show the current weights.

<a name="rectification"></a>

## Quantic Stability

Quantic Stability is a tertiary stat. It directly impacts the lower bound of <Color id="red">Quanta</Color> modifications.

When present, you can no longer roll negative <Color id="red">Quanta</Color> modifiers.

## Quantic Math

If you don't like math you can skip to the next page.

Normally, <Color id="red">Quanta</Color> rolls use a normal distribution across the entire range, but once stabilized, this shifts to a uniform distribution across the positive side.

## Clues

Clues are another tertiary stat.

Each clue allows you to see one additional item in the preview window.

When you can see every available enchantment, the text will change slightly.

You can also drop to zero clues, and be able to see nothing.
