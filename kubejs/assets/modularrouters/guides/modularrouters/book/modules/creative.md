---
navigation:
  title: "Creative Module"
  icon: "modularrouters:creative_module"
  parent: modularrouters:modules.md
---

# Creative Module

The Creative Module is a special uncraftable module which simply inserts items, from out of nowhere, into the router's buffer.

It uses the module's filter as an item list, and on each tick moves to the next item in the filter in round-robin fashion. It doesn't care about any other filter settings (whitelist/blacklist, match NBT...).

