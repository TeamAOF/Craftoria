---
navigation:
  title: 'Aphorism Tile'
  icon: 'pneumaticcraft:aphorism_tile'
  parent: pneumaticcraft:machines.md
---

# Aphorism Tile

_Aphorism Tiles_ are like _Signs_, but they can display arbitrary amounts of text. Any text is automatically scaled so that the full text fits on the tile.

When you place down an Aphorism Tile it <Color id='dark_purple'>$(t:This can be disabled in client config - see 'B:dramaSplash')defaults$(/t:This can be disabled in client config - see 'B:dramaSplash')</Color> to a random splash text from the [Drama Generator](http://mc-drama.herokuapp.com/).

- _Aphorism Tiles_ can be edited in-place by _right-clicking_ with an empty hand.
- Markup can be added by using _Alt + 0-9/a-f/l/m/n/o/r_ ([standard Minecraft codes](https://minecraft.gamepedia.com/Formatting_codes)).
- Holding _F1_ will show some popup help for the editor keybindings.
- _Aphorism Tiles_ can be recolored by _right-clicking_ with any dye item. The tile border and background can be colored independently by clicking a corresponding area of the tile.

<a name="items"></a>

- _Aphorism Tiles_ can also display _items_, instead of or along with text. You can specify an item to display by putting (on its own line) text in the format _{item:\<modid\>:\<itemid\>}_, e.g. _{item:minecraft:diamond}_.
- Alternatively, click the _Insert Item..._ button on the left-hand GUI panel, and choose an item from the search popup. This will replace all the text on the current line. You can display multiple items on one tile.

- Tip: displayed items are scaled in size to match the height of text lines. If you're mixing text and items, keep text lines short to avoid tiny items.
- You can also use the slider on the left-hand GUI panel to set a _margin_ for the tile's text, if you would like it to take up less space on the tile.
- Finally, you can use the checkbox on the left-hand GUI panel to make the whole tile _invisible_, so that _only_ the text (and/or items) is shown.

- Invisible Aphorism Tiles have no block shape at all unless you sneak, so they have potential uses as labels for chests, especially when displaying item(s). Since they have no shape, any interactions get passed to the block behind - right-clicking a chest, for example.
- Invisible tiles can be edited by sneak & right-clicking them (with any empty hand, as normal).

**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/aphorism_tile"}
```
