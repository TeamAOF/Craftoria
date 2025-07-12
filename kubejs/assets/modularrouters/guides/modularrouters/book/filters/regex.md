---
navigation:
  title: "Regex Filter"
  icon: "modularrouters:regex_filter"
  parent: modularrouters:filters.md
item_ids:
  - modularrouters:regex_filter
---

# Regex Filter

This filter allows for matching of blocks and items with a regular expression, against the item's $(strong)registry name$(/strong). Regular expressions are very powerful, but take some learning to unlock their full potential. However, basic regex usage isn't too difficult. There are many websites with tutorial information on regular expressions, e.g. [RegexOne](https://regexone.com/).

## Registry Names

Because item filtering is done purely on the server, it can't know for sure what an item's displayed text is.  Therefore, all filtering matches are made against the item's internal *registry name*. You can find this registry name by toggling on advanced tooltip display with *F3+H*.

Note that matching is done against only the part of the registry name *after* the colon.

*To open the module GUI, *right-click** the filter, or *middle-click* / press **<Color id="dark_red">[$(k:modularrouters.configure)]$(/k:modularrouters.configure)</Color>** on a filter which is installed in a module.
- Type your regex into the textfield at the top, and hit *Return* or click the green **<Color id="dark_green">+</Color>** button. Your regex will be added to the list, assuming its syntax is valid. You can have up to 6 entries in one filter.
- Click the red **<Color id="dark_red">X</Color>** next to any regex to remove it from the list.
- Matches are case-insensitive.

## Example 1

A regex of 'ore' will match any items with 'ore' in their registry name ("iron_ore", "gold_ore", "redstone_ore"). Unfortunately, it will also match "drill_core", but you can avoid this by using a regex of <Color id="dark_blue">_ore</Color>. To be even more specific, you could use <Color id="dark_blue">_ore$</Color>, which also ensures that the string "_ore" is at the end of the item's registry name.

## Example 2

Configure a [Player Module](../modules/player.md) to extract from the player's main inventory, and put a regex filter containing <Color id="dark_blue">_ore</Color> in the module. This can be used to extract any ores from your inventory, regardless of where you are, into your ore processing system; very handy if you're mining far from your base and you want ores that you've mined to be sent home immediately.



<Recipe id="modularrouters:regex_filter" />

