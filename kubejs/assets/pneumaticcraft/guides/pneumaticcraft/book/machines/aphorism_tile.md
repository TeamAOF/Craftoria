---
navigation:
  title: "Aphorism Tile"
  icon: "pneumaticcraft:aphorism_tile"
  parent: pneumaticcraft:machines.md
---

# Aphorism Tile

*Aphorism Tiles* are like *Signs*, but they can display arbitrary amounts of text. Any text is automatically scaled so that the full text fits on the tile.

When you place down an Aphorism Tile it <Color hex="#880">$(t:This can be disabled in client config - see 'B:dramaSplash')defaults$(/t:This can be disabled in client config - see 'B:dramaSplash')</Color> to a random splash text from the [Drama Generator](http://mc-drama.herokuapp.com/).


- *Aphorism Tiles* can be edited in-place by *right-clicking* with an empty hand.
- Markup can be added by using *Alt + 0-9/a-f/l/m/n/o/r* ([standard Minecraft codes](https://minecraft.gamepedia.com/Formatting_codes)).
- Holding *F1* will show some popup help for the editor keybindings.
- *Aphorism Tiles* can be recolored by *right-clicking* with any dye item. The tile border and background can be colored independently by clicking a corresponding area of the tile.

<a name="items"></a>

- *Aphorism Tiles* can also display *items*, instead of or along with text. You can specify an item to display by putting (on its own line) text in the format *{item:<modid>:<itemid>}*, e.g. *{item:minecraft:diamond}*.
- Alternatively, click the *Insert Item...* button on the left-hand GUI panel, and choose an item from the search popup. This will replace all the text on the current line. You can display multiple items on one tile.


- Tip: displayed items are scaled in size to match the height of text lines. If you're mixing text and items, keep text lines short to avoid tiny items.
- You can also use the slider on the left-hand GUI panel to set a *margin* for the tile's text, if you would like it to take up less space on the tile.
- Finally, you can use the checkbox on the left-hand GUI panel to make the whole tile *invisible*, so that *only* the text (and/or items) is shown.


- Invisible Aphorism Tiles have no block shape at all unless you sneak, so they have potential uses as labels for chests, especially when displaying item(s). Since they have no shape, any interactions get passed to the block behind - right-clicking a chest, for example.
- Invisible tiles can be edited by sneak & right-clicking them (with any empty hand, as normal).

**TODO:** Unsupported Patchouli page type **pneumaticcraft:assembly_system**

```
{"type":"pneumaticcraft:assembly_system","recipe":"pneumaticcraft:assembly/aphorism_tile"}
```

