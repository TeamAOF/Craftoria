---
navigation:
  title: "Termination"
  icon: "minecraft:barrier"
  parent: modularrouters:router.md
---

# Termination

This a slightly esoteric topic which in most cases you won't need to worry about. However, when you do need it, it'll be very useful!

Termination is configured on a per-module basis, by the 'T' button beneath the filter slots. By default, it's inactive; if you switch if on for a module, then *if* the module does any work this router tick, the router will stop there. No further modules (i.e. to the right of this module) will be executed this time round.

Why would this be useful? Imagine a scenario where your router is being supplied with many items, e.g. from a quarry. You want to void *Cobblestone*, and send everything else to another inventory; so you would add a [Void Module](../void.md) with a whitelist of Cobblestone, followed by a [Sender Module](../sender_1.md) to send anything else onwards.

When the router runs, say there's already a stack of Cobblestone in the buffer.  The Void Module will void a Cobblestone, and then the Sender module will send the remaining 63 Cobblestone on to your storage. This is probably not you want.

However, if you switch on Termination on the Void Module, then when it runs, the router will stop for that tick; the Sender module won't run until the Void Module has nothing else to do.

