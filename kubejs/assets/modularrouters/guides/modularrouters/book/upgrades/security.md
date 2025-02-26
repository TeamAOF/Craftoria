---
navigation:
  title: "Security Upgrade"
  icon: "modularrouters:security_upgrade"
  parent: modularrouters:upgrades.md
item_ids:
  - modularrouters:security_upgrade
---

# Security Upgrade

The *Security Upgrade* has several important functions, detailed in the following pages.

## Protection

A Router with a Security Upgrade installed can *only* be opened by players whitelisted by that upgrade. The upgrade doesn't prevent a router being broken; but since upgrades and modules remain in a broken router, players can't break a router to steal modules/upgrades or reconfigure the router. If you want to prevent a router being broken, you may wish to explore other mods' block protection capabilities.

## Fake Players

Several modules ([Placer](../modules/placer.md), [Breaker](../modules/breaker.md), [Activator](../modules/activator.md)) do their work as a *fake player*. By default this is a player with the username *[Modular Routers]*, but when a security upgrade is installed, those modules operate as the upgrade's owner. This is much safer on multiplayer servers with claim protection than simply allowing *[Modular Routers]* to do anything with your claims.

## Activator Attack Mode

When the [Activator Module](../modules/activator.md) is in *Attack Mode*, it will ignore any players whitelisted by a Security Upgrade installed in the Router. This is generally a good idea to avoid pain & suffering if you have a high-damage weapon in your Router...

<a name="override"></a>
<ItemImage id="modularrouters:override_card" />


- There is a non-craftable item called the *Security Override Card* - this can be obtained in creative mode or by cheating the item in via JEI etc. A player who holds one of these in either hand is not affected by any Security Upgrade, and can access any router.

You can add extra players to a Security Upgrade by *right-clicking* the player with the upgrade in your main hand.

You can remove players from a Security Upgrade by *sneak-right-clicking* the player.

There is a maximum of 6 additional players per Security Upgrade (so 7 in total, including the creator), but you can install more than one Security Upgrade in a router if necessary.



<Recipe id="modularrouters:security_upgrade" />

